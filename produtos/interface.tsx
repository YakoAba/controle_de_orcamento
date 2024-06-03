import { Marca } from "@/marcas/interface";

// Definindo o tipo para a produto
export type Produto = {
  _id: string; // Identificador do produto
  nome_produto: string;
  nome_marca : string;
  id_marca: string
  data_cadastro: string;
};

// Definindo o tipo para o contexto
export type ProdutoContextType = {
  marcas: Marca[];
  produtos: Produto[];
  produtoSelecionada: Produto | null;
  selecionarProduto: (produto: Produto) => void;
  addProduto: (novaProduto: Produto) => Promise<void>;
};

export interface NomeInputProps {
  value: string; // Tipo para o valor do input
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Função de callback para o evento de mudança
}

export interface ProdutoButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // Função de callback para o evento de clique
}

export interface GridProdutosProps {
  produtos: Produto[];
  marcas: Marca[];
}
