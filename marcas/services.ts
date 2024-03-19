const API_URL = 'api/marcas'; // Altere para a URL correta da sua API

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
export async function addMarca(novaMarca: { nome_marca: string; }) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 'nome_marca': novaMarca.nome_marca }),
  });
  if (!response.ok) {
    throw new Error('Erro ao adicionar marca na API');
  }
  const data = await response.json();
  console.log(data);
  return data.id;
}
