import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import {
  getProdutos,
  addProdutos as addProdutoAPI,
  getMarcas,
} from "./services";
import { Marca } from "../marcas/interface";
import { Produto, ProdutoContextType } from "./interface";

// Criando o contexto
const ProdutoContext = createContext<ProdutoContextType | undefined>(undefined);

export const useProdutoContext = () => {
  const context = useContext(ProdutoContext);
  if (!context) {
    throw new Error(
      "useProdutoContext deve ser usado dentro de um ProdutoProvider"
    );
  }
  return context;
};

type ProdutoProviderProps = {
  children: ReactNode;
};

export const ProdutoProvider = ({ children }: ProdutoProviderProps) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtoSelecionada, setProdutoSelecionada] = useState<Produto | null>(
    null
  );
  const [marcas, setMarcas] = useState<Marca[]>([]);

  const carregarMarcas = async () => {
    try {
      const marcasData = await getMarcas();
      setMarcas(marcasData);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
      // Tratar erro conforme necessário
    }
  };

  const carregarProdutos = async () => {
    try {
      const produtosData = await getProdutos();
      setProdutos(produtosData);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
      // Tratar erro conforme necessário
    }
  };

  const selecionarProduto = (produto: Produto) => {
    setProdutoSelecionada(produto);
  };

  const addProduto = async (novaProduto: Produto) => {
    try {
      const id = await addProdutoAPI(novaProduto);
      await carregarProdutos(); // Recarrega a lista de produtos após a inserção
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
      // Tratar erro conforme necessário
    }
  };
  // Carrega as produtos ao iniciar o contexto
  useEffect(() => {
    carregarProdutos();
  }, []);


  const contextValue: ProdutoContextType = {
    marcas,
    produtos,
    produtoSelecionada,
    selecionarProduto,
    addProduto,
    carregarMarcas
  };

  return (
    <ProdutoContext.Provider value={contextValue}>
      {children}
    </ProdutoContext.Provider>
  );
};
