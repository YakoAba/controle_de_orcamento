import { insertData, getAllRecords, getRecordById } from '../db';

// Função para realizar a inserção de dados
export async function insertOne(data: any): Promise<void> {
    try {
        const insertedId = await insertData('marcas', data);
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
        const marcas = await getAllRecords('marcas');
        return marcas;
    } catch (error) {
        console.error('Erro ao buscar marcas:', error);
        throw new Error('Falha ao buscar marcas no banco de dados');
    }
}

// Exemplo de uso da função getRecordById
export async function getById(id: string): Promise<any | null> {
    try {
        const marca = await getRecordById('marcas', id);
        return marca;
    } catch (error) {
        console.error('Erro ao buscar marca:', error);
        throw new Error('Falha ao buscar marca no banco de dados');
    }
}
