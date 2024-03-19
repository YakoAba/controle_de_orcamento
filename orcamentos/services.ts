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

// Função para adicionar uma nova orcamento
export async function addOrcamento(novaOrcamento: { nome_orcamento: string; }) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 'nome_orcamento': novaOrcamento.nome_orcamento }),
  });
  if (!response.ok) {
    throw new Error('Erro ao adicionar orcamento na API');
  }
  const data = await response.json();
  console.log(data);
  return data.id;
}
