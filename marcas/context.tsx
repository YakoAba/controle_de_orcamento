import React, { createContext, useState, useContext, useEffect } from 'react';
import { getMarcas, addMarca as addMarcaAPI } from './services';
import { Marca, MarcaContextType, MarcaProviderProps } from './interface';

// Criando o contexto
const MarcaContext = createContext<MarcaContextType | undefined>(undefined);

export const useMarcaContext = () => {
  const context = useContext(MarcaContext);
  if (!context) {
    throw new Error('useMarcaContext deve ser usado dentro de um MarcaProvider');
  }
  return context;
};

export const MarcaProvider = ({ children }: MarcaProviderProps) => {
  const [marcas, setMarcas] = useState<Marca[]>([]);
  const [marcaSelecionada, setMarcaSelecionada] = useState<Marca | null>(null);

  const carregarMarcas = async () => {
    try {
      const marcasData = await getMarcas();
      setMarcas(marcasData);
    } catch (error) {
      console.error('Erro ao carregar marcas:', error);
      // Tratar erro conforme necessário
    }
  };

  const selecionarMarca = (marca: Marca) => {
    setMarcaSelecionada(marca);
  };

  const addMarca = async (novaMarca: Marca) => {
    try {
      const id = await addMarcaAPI(novaMarca);
      console.log(id);
      await carregarMarcas(); // Recarrega a lista de marcas após a inserção
    } catch (error) {
      console.error('Erro ao adicionar marca:', error);
      // Tratar erro conforme necessário
    }
  };
  // Carrega as marcas ao iniciar o contexto
  useEffect(() => {
    carregarMarcas();
  }, []);

  const contextValue: MarcaContextType = {
    marcas,
    marcaSelecionada,
    selecionarMarca,
    addMarca
  };

  return <MarcaContext.Provider value={contextValue}>{children}</MarcaContext.Provider>;
};
