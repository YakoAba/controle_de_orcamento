import { insertData, getAllRecords, getRecordById } from '../db';

// Função para realizar a inserção de dados
export async function insertOne(data: any): Promise<void> {
    try {
        const insertedId = await insertData('orcamentos', data);
        console.log('ID do último registro inserido:', insertedId);
        // Lógica adicional aqui após a inserção bem-sucedida
    } catch (error) {
        console.error('Erro ao inserir dados:', error);
        // Tratar o erro aqui, se necessário
    }
}

// Exemplo de uso da função getAllRecords
export async function getAll(): Promise<any[]> {
    try {
        const orcamentos = await getAllRecords('orcamentos');
        return orcamentos;
    } catch (error) {
        console.error('Erro ao buscar orçamentos:', error);
        throw new Error('Falha ao buscar orçamentos no banco de dados');
    }
}

// Exemplo de uso da função getRecordById
export async function getById(id: string): Promise<any | null> {
    try {
        const orcamento = await getRecordById('orcamentos', id);
        return orcamento;
    } catch (error) {
        console.error('Erro ao buscar orçamento:', error);
        throw new Error('Falha ao buscar orçamento no banco de dados');
    }
}
