import { ReactNode } from "react";

// Definindo o tipo para a orcamento
export type Orcamento = {
  id: string;
  id_cliente : string;
  nome_orcamento: string;
  data_cadastro : string;
};

// Definindo o tipo para o contexto
export type OrcamentoContextType = {
  orcamentos: Orcamento[];
  orcamentoSelecionada: Orcamento | null;
  selecionarOrcamento: (orcamento: Orcamento) => void;
  addOrcamento: (novaOrcamento: Orcamento) => Promise<void>;
};

export type OrcamentoProviderProps = {
  children: ReactNode;
};

export interface GridOrcamentosProps {
  orcamentos: Orcamento[];
}

export interface OrcamentoButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // Função de callback para o evento de clique
}

export interface OrcamentoInputProps {
  value: string; // Tipo para o valor do input
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Função de callback para o evento de mudança
}