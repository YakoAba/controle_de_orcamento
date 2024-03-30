//interface.tsx
import { ReactNode } from "react";

export type Item = {
  id: string,
  produto_id: string,
  nome: string,
  marca:string,
  quantidade: number,
  valorUnitario: number,
  total: number,
}
// Definindo o tipo para a orcamento
export type Orcamento = {
  id: string;
  cliente_id: string;
  data: string;
  validade: string;
  nome:string;
  documento:string;
  forma_envio:string;
  Cep:string
  Uf:string;
  vfrete: string;
  pagamento: string;
  prazo_entrega:string;
  prazo_fabricacao: string;
  prazo_observacao : string;
  itens : Item[];
};

// Definindo o tipo para o contexto
export type OrcamentoContextType = {
  orcamentos: Orcamento[];
  orcamentoSelecionada: Orcamento;
  item: Item;
  admin: boolean;
  setAdmin : (admin: boolean) => void;
  selecionarOrcamento: (orcamento: Orcamento) => void;
  setItem: (item: Item) => void;
  addOrcamento: (novaOrcamento: Orcamento) => Promise<void>;
  addItem: (novaItem: Item) => Promise<void>;
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