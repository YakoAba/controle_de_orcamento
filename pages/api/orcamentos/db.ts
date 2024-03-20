import { getAllRecords, insertData } from "../db";

// Função para realizar a inserção de dados
export async function insertOne(data: any): Promise<void> {

    // const sql = 
    // `
    //     INSERT INTO orcamentos (
    //         data_orcamento, validade_orcamento, nome_cliente, cpf_cliente,
    //         tipo_cliente, forma_envio, uf_envio, cep_envio, valor_frete,
    //         forma_pagamento, prazo_fabricacao, prazo_entrega, observacao
    //     ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    // `;
    const sql =`INSERT INTO orcamentos (
                 data, validade, cliente_id ) VALUES (?, ?, ?)`;
    const values = [
        data.data || null,
        data.validade || null,
        data.cliente_id || null,
        // data.formaEnvio || null,
        // data.ufEnvio || null,
        // data.cepEnvio.replace(/\D+/g, '') || null,
        // data.valorFrete || null,
        // data.formaPagamento || null,
        // data.prazoFabricacao || null,
        // data.prazoEntrega || null,
        // data.observacao || null,
    ];

    try {
        const lastInsertedId = await insertData(sql, values);  // Chama a função insertData com o SQL e os valores
        console.log('ID do último registro inserido:', lastInsertedId);
        // Lógica adicional aqui após a inserção bem-sucedida
    } catch (error) {
        console.error('Erro ao inserir dados:', error);
        // Tratar o erro aqui, se necessário
    }
}

// Exemplo de uso da função getAllRecords
export async function getAll(): Promise<any> {
    try {
        const orcamentos = await getAllRecords('orcamentos');
        return orcamentos;
    } catch (error) {
        console.error('Erro ao buscar orcamentos:', error);
        throw new Error('Falha ao buscar orcamentos no banco de dados');
    }
}