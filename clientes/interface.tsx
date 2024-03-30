import { ReactNode } from "react";

// Definindo o tipo para a cliente
export type Cliente = {
  id: string; // Identificador do cliente
  nome_cliente: string;
  cpf_cliente: string;
  tipo_cliente: string;
  data_cadastro: string;
};

// Definindo o tipo para o contexto
export type ClienteContextType = {
  clientes: Cliente[];
  clienteSelecionada: Cliente | null;
  selecionarCliente: (cliente: Cliente) => void;
  addCliente: (novaCliente: Cliente) => Promise<void>;
  carregarClientes:() => Promise<void>;
};

export interface InputProps {
  value: string; // Tipo para o valor do input
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Função de callback para o evento de mudança
}

export interface ClienteButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // Função de callback para o evento de clique
}

export interface GridClientesProps {
  clientes: Cliente[];
}

export type ClienteProviderProps = {
  children: ReactNode;
};

export interface ComboBoxTipoProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}