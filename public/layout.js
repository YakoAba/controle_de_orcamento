
// Função para obter parâmetros de consulta da URL
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function formatarDataBrasil(data) {
  const partes = data.split('-');
  if (partes.length !== 3) {
    throw new Error('Formato de data inválido. Use o formato YYYY-MM-DD.');
  }

  const dia = partes[2];
  const mes = partes[1];
  const ano = partes[0];

  return `${dia}/${mes}/${ano}`;
}

function formatarMoedaBrasil(valor) {
  const valorNumerico = parseFloat(valor); // Certifique-se de que o valor seja numérico
  if (isNaN(valorNumerico)) {
    throw new Error('Valor inválido para formatação de moeda.');
  }

  return valorNumerico.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

// Define uma função assíncrona para envolver a chamada para buscarOrcamentoPorId
async function iniciarBuscaOrcamento() {
  try {
    const jsonValue = getParameterByName("json");
    if (jsonValue !== null) {
      const json = JSON.parse(jsonValue);
      console.log(json.validade)
      // console.log("Valor do parâmetro json:", json);
      // const json = await buscarOrcamentoPorId(jsonValue);
      // console.log(json)
      // document.getElementById('orcamento_numero').innerHTML = "Orçamento Nº " + jsonValue;
      // document.getElementById('Validade').innerHTML = formatarDataBrasil(json.dados[0].validade_orcamento);
      document.getElementById('data').innerHTML = 'Aparecida de Goiânia, '+ json.data;
      document.getElementById('Validade').innerHTML =  json.validade;
      
      // // document.getElementById('frete').innerHTML = json.dados[0].valor_frete.toLocaleString(undefined, { style: 'currency', currency: 'BRL' });
      //  document.getElementById('nome').innerHTML = json.nomeCliente;
      // // document.getElementById('cep').innerHTML = json.dados[0].cepEnvio;
      // // document.getElementById('uf_envio').innerHTML = json.dados[0];
      // document.getElementById('CPF').innerHTML = json.cpfcliente;
      // document.getElementById('prazoEntrega').innerHTML = json.prazoentrega;
      // document.getElementById('envio').innerHTML = json.formaEnvio
      // document.getElementById('cep').innerHTML = json.cepEnvio
      // document.getElementById('uf_envio').innerHTML = json.ufEnvio
      // document.getElementById('frete').innerHTML = json.valorFrete
      // document.getElementById('formaPagamento').innerHTML = json.formaPagamento
      // console.log(json.cpfcliente)
      // console.log(json.dados)
      // extrairDetalhesPagamento(); 
    } else {
      console.log("Parâmetro json não encontrado na URL");
    }
  } catch (error) {
    console.error('Erro ao iniciar busca do orçamento:', error);
  }
}

async function buscarOrcamentoPorId(orcamentoId) {
  try {
    const response = await fetch(`/api/orcamento/${orcamentoId}`);
    if (response.ok) {
      // document.getElementById('Validade').innerHTML = response.validade_orcamento;
      return response.json();
    } else {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Erro na requisição: ${error.message}`);
  }
}

function extrairDetalhesPagamento() {
  const formaPagamento = document.getElementById("formaPagamento").value;
  let detalhesPagamentoJSON = {}; // Objeto para armazenar os detalhes de pagamento em JSON
  if (formaPagamento === "deposito") {

    detalhesPagamentoJSON = {
      agencia: "3756",
      conta: "0422239-3",
      banco: "Bradesco",
      chave: "financeiro@espacocadeiraderodas.com.br",
    };
  } else if (formaPagamento === "pix") {
    detalhesPagamentoJSON = {
      pix: "financeiro@espacocadeiraderodas.com.br",
    };
  } else if (formaPagamento === "cartao") {
    detalhesPagamentoJSON = {
      cartao: "Cartão de Crédito",
    };
  }
  return detalhesPagamentoJSON;
}

iniciarBuscaOrcamento();






