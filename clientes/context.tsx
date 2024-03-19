import React, { createContext, useState, useContext, useEffect } from 'react';
import { getClientes, addClientes as addClienteAPI } from './service';
import { Cliente, ClienteContextType, ClienteProviderProps } from './/interface';

// Criando o contexto
const ClienteContext = createContext<ClienteContextType | undefined>(undefined);

export const useClienteContext = () => {
  const context = useContext(ClienteContext);
  if (!context) {
    throw new Error('useClienteContext deve ser usado dentro de um ClienteProvider');
  }
  return context;
};

export const ClienteProvider = ({ children }: ClienteProviderProps) => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [clienteSelecionada, setClienteSelecionada] = useState<Cliente | null>(null);

  const carregarClientes = async () => {
    try {
      const ClientesData = await getClientes();
      setClientes(ClientesData);
    } catch (error) {
      console.error('Erro ao carregar Clientes:', error);
      // Tratar erro conforme necessário
    }
  };

  const selecionarCliente = (Cliente: Cliente) => {
    setClienteSelecionada(Cliente);
  };

  const addCliente = async (novaCliente: Cliente) => {
    try {
      const id = await addClienteAPI(novaCliente);
      console.log(id);
      await carregarClientes(); // Recarrega a lista de Clientes após a inserção
    } catch (error) {
      console.error('Erro ao adicionar Cliente:', error);
      // Tratar erro conforme necessário
    }
  };

  // Carrega as Clientes ao iniciar o contexto
  useEffect(() => {
    carregarClientes();
  }, []);

  const contextValue: ClienteContextType = {
    clientes,
    clienteSelecionada,
    selecionarCliente,
    addCliente
  };

  return <ClienteContext.Provider value={contextValue}>{children}</ClienteContext.Provider>;
};