// services/marcaService.ts

const API_URL = 'http://localhost:3000/api/marcas'; // Altere para a URL correta da sua API

// Função para obter todas as marcas
export async function getMarcas() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Erro ao obter marcas da API');
  }
  const data = await response.json();
  return data.marcas;
}

// Função para adicionar uma nova marca
export async function addMarca(novaMarca) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(novaMarca),
  });
  if (!response.ok) {
    throw new Error('Erro ao adicionar marca na API');
  }
  const data = await response.json();
  return data.id;
}

// Função para atualizar uma marca existente
export async function updateMarca(marcaId, marcaAtualizada) {
  const response = await fetch(`${API_URL}/${marcaId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(marcaAtualizada),
  });
  if (!response.ok) {
    throw new Error('Erro ao atualizar marca na API');
  }
  // Não retornamos nada pois a API não retorna dados neste caso
}

// Função para excluir uma marca
export async function deleteMarca(marcaId) {
  const response = await fetch(`${API_URL}/${marcaId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Erro ao excluir marca na API');
  }
  // Não retornamos nada pois a API não retorna dados neste caso
}
