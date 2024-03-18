import { getAllRecords, insertData } from "../db";

// Função para realizar a inserção de dados
export async function insertOne(data: any): Promise<void> {
    const sql = `INSERT INTO produtos (id_marca, nome_produtos) VALUES (?,?)`;
    const values = [data.id_marca, data.nome_produto || null];

    try {
        const lastInsertedId = await insertData(sql, values);
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
        const marcas = await getAllRecords('produtos');
        return marcas;
    } catch (error) {
        console.error('Erro ao buscar marcas:', error);
        throw new Error('Falha ao buscar marcas no banco de dados');
    }
}

// Exemplo de uso da função getRecordById
export async function getById(Id: number): Promise<void> {

    try {
        // const marca = await dbInstance.get('SELECT * FROM marcas WHERE id = ?', [marcaId]);
        // if (marca) {
        //     console.log('Marca encontrada:', marca);
        // } else {
        //     console.log('Marca não encontrada.');
        // }
    } catch (error) {
        console.error('Erro ao buscar marca:', error);
    }
}
