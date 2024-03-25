// services/produtoService.ts

import { Produto } from "./interface";

const API_URL = 'api/produtos'; // Altere para a URL correta da sua API
const API_URL_MARCAS = 'api/marcas'; // Altere para a URL correta da sua API

export async function getMarcas() {
  const response = await fetch(API_URL_MARCAS);
  if (!response.ok) {
    throw new Error('Erro ao obter produtos da API');
  }
  const data = await response.json();
  return data.marcas;
}

// Função para obter todas as produtos
export async function getProdutos(): Promise<Produto[]> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Erro ao obter produtos da API');
  }
  const data = await response.json();
  return data.produtos;
}

// Função para adicionar uma nova produto
export async function addProdutos(novaProduto: { nome_produto: string; id_marca:string }) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 'nome_produto': novaProduto.nome_produto, 'id_marca': novaProduto.id_marca }),
  });
  if (!response.ok) {
    throw new Error('Erro ao adicionar produto na API');
  }
  const data = await response.json();
  return data.id;
}

