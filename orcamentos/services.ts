import { Orcamento } from "./interface";

const API_URL = 'api/orcamentos'; // Altere para a URL correta da sua API

// Função para obter todas as orcamentos
export async function getOrcamentos() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Erro ao obter orcamentos da API');
  }
  const data = await response.json();
  return data.orcamentos;
}

export async function getOrcamento(id: string): Promise<Orcamento> {
  const response = await fetch(API_URL+'/'+id);
  if (!response.ok) {
    throw new Error('Erro ao obter orcidamentos da API');
  }
  const data = await response.json();
  return data.orcamentos;
}

// Função para adicionar uma nova orcamento
export async function addOrcamento(novaOrcamento: Orcamento) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(novaOrcamento),
  });
  if (!response.ok) {
    throw new Error('Erro ao adicionar orcamento na API');
  }
  const data = await response.json();
  return data.id;
}
