//context.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { getOrcamentos, addOrcamento as addOrcamentoAPI } from './services';
import { Item, Orcamento, OrcamentoContextType, OrcamentoProviderProps } from './interface';

// Criando o contexto
const OrcamentoContext = createContext<OrcamentoContextType | undefined>(undefined);

export const useOrcamentoContext = () => {
  const context = useContext(OrcamentoContext);
  if (!context) {
    throw new Error('useOrcamentoContext deve ser usado dentro de um OrcamentoProvider');
  }
  return context;
};

export const OrcamentoProvider = ({ children }: OrcamentoProviderProps) => {
  const [item, setItem] = useState<Item>({} as Item);
  const [orcamentos, setOrcamentos] = useState<Orcamento[]>([]);
  const [orcamentoSelecionada, setOrcamentoSelecionada] = useState<Orcamento>({} as Orcamento);

  const carregarOrcamentos = async () => {
    try {
      const orcamentosData = await getOrcamentos();
      setOrcamentos(orcamentosData);
    } catch (error) {
      console.error('Erro ao carregar orcamentos:', error);
      // Tratar erro conforme necessário
    }
  };

  const selecionarOrcamento = (orcamento: Orcamento) => {
    setOrcamentoSelecionada(orcamento);
  };

  const selecionarItem = (item: Item) => {
    setItem(item);
  };

  const addOrcamento = async (novaOrcamento: Orcamento) => {
    try {
      const id = await addOrcamentoAPI(novaOrcamento);;
      await carregarOrcamentos(); // Recarrega a lista de orcamentos após a inserção
    } catch (error) {
      console.error('Erro ao adicionar orcamento:', error);
      // Tratar erro conforme necessário
    }
  };

  const addItem = async (novaItem: Item) => {
    try {
      orcamentoSelecionada.itens.push(novaItem);
    } catch (error) {
      console.error('Erro ao adicionar item:', error);
      // Tratar erro conforme necessário
    }
  };
  // Carrega as orcamentos ao iniciar o contexto
  useEffect(() => {
    carregarOrcamentos();
  }, []);

  useEffect(() => {
    setItem({ ...item, total: item.quantidade * item.valorUnitario })

  }, [item.valorUnitario, item.quantidade]);

  const contextValue: OrcamentoContextType = {
    orcamentos,
    orcamentoSelecionada,
    item,
    selecionarOrcamento,
    setItem,
    addOrcamento,
    addItem
  };

  return <OrcamentoContext.Provider value={contextValue}>{children}</OrcamentoContext.Provider>;
};
