import { ReactNode } from "react";

// Definindo o tipo para a marca
export type Marca = {
  _id: string;
  nome_marca: string;
  data_cadastro : string;
};

// Definindo o tipo para o contexto
export type MarcaContextType = {
  marcas: Marca[];
  marcaSelecionada: Marca | null;
  selecionarMarca: (marca: Marca) => void;
  addMarca: (novaMarca: Marca) => Promise<void>;
};

export type MarcaProviderProps = {
  children: ReactNode;
};

export interface GridMarcasProps {
  marcas: Marca[];
}

export interface MarcaButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // Função de callback para o evento de clique
}

export interface MarcaInputProps {
  value: string; // Tipo para o valor do input
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Função de callback para o evento de mudança
}