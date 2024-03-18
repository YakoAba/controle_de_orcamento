import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { getMarcas, addMarca as addMarcaAPI, updateMarca as updateMarcaAPI, deleteMarca as deleteMarcaAPI } from '../services/marcaService';

// Definindo o tipo para a marca
type Marca = {
  id: number;
  nome: string;
};

// Definindo o tipo para o contexto
type MarcaContextType = {
  marcas: Marca[];
  marcaSelecionada: Marca | null;
  selecionarMarca: (marca: Marca) => void;
  addMarca: (novaMarca: Marca) => Promise<void>;
  updateMarca: (marcaId: number, marcaAtualizada: Marca) => Promise<void>;
  deleteMarca: (marcaId: number) => Promise<void>;
};

// Criando o contexto
const MarcaContext = createContext<MarcaContextType | undefined>(undefined);

export const useMarcaContext = () => {
  const context = useContext(MarcaContext);
  if (!context) {
    throw new Error('useMarcaContext deve ser usado dentro de um MarcaProvider');
  }
  return context;
};

type MarcaProviderProps = {
  children: ReactNode;
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
      await addMarcaAPI(novaMarca);
      await carregarMarcas(); // Recarrega a lista de marcas após a inserção
    } catch (error) {
      console.error('Erro ao adicionar marca:', error);
      // Tratar erro conforme necessário
    }
  };

  const updateMarca = async (marcaId: number, marcaAtualizada: Marca) => {
    try {
      await updateMarcaAPI(marcaId, marcaAtualizada);
      await carregarMarcas(); // Recarrega a lista de marcas após a atualização
    } catch (error) {
      console.error('Erro ao atualizar marca:', error);
      // Tratar erro conforme necessário
    }
  };

  const deleteMarca = async (marcaId: number) => {
    try {
      await deleteMarcaAPI(marcaId);
      await carregarMarcas(); // Recarrega a lista de marcas após a exclusão
    } catch (error) {
      console.error('Erro ao excluir marca:', error);
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
    addMarca,
    updateMarca,
    deleteMarca,
  };

  return <MarcaContext.Provider value={contextValue}>{children}</MarcaContext.Provider>;
};
