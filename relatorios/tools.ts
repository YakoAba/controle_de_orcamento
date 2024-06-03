export function formatarDataBrasil(data: string) {
    const partes = data.split('-');
    if (partes.length !== 3) {
      throw new Error('Formato de data inválido. Use o formato YYYY-MM-DD.');
    }

    const dia = partes[2];
    const mes = partes[1];
    const ano = partes[0];

    return `${dia}/${mes}/${ano}`;
  }

  export function formatarMoedaBrasil(valor: string) {
    const valorNumerico = parseFloat(valor); // Certifique-se de que o valor seja numérico
    if (isNaN(valorNumerico)) {
      throw new Error('Valor inválido para formatação de moeda.');
    }

    return valorNumerico.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }