import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';


// Interface para a classe DatabaseSingleton
export interface IDatabaseSingleton {
    // getInstance(): Promise<DatabaseSingleton>;
    connect(): Promise<void>;
    getDatabaseInstance(): Promise<Database | null>;
}

export class DatabaseSingleton implements IDatabaseSingleton {
    private static instance: DatabaseSingleton;
    private dbInstance: Database | null;

    private constructor() {
        this.dbInstance = null;
    }

    public static async getInstance(): Promise<DatabaseSingleton> {
        if (!DatabaseSingleton.instance) {
            DatabaseSingleton.instance = new DatabaseSingleton();
            await DatabaseSingleton.instance.connect();
            await DatabaseSingleton.instance.createTables();
        }
        return DatabaseSingleton.instance;
    }

    public async connect(): Promise<void> {
        try {
            this.dbInstance = await open({
                filename: './preorcamento.db',
                driver: sqlite3.Database,
            });
            console.log('Conexão com o banco de dados estabelecida.');
        } catch (error) {
            console.error('Erro ao conectar ao banco de dados:', error);
            throw new Error('Falha ao conectar ao banco de dados');
        }
    }

    private async createTables(): Promise<void> {
        if (!this.dbInstance) {
            throw new Error('Database is not connected');
        }

        try {
            await this.dbInstance.exec('BEGIN TRANSACTION');

            await this.dbInstance.exec(`
                CREATE TABLE IF NOT EXISTS produtos (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    id_marca  INTEGER NOT NULL,
                    nome_produto TEXT NOT NULL,
                    data_cadastro TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime'))
                );
            `);

            await this.dbInstance.exec(`
                CREATE TABLE IF NOT EXISTS clientes (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nome_cliente TEXT NOT NULL,
                    cpf_cliente TEXT NOT NULL,
                    tipo_cliente TEXT NOT NULL,
                    data_cadastro TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime'))
                );
    `       );

            await this.dbInstance.exec(`
                CREATE TABLE IF NOT EXISTS marcas (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nome_marca TEXT NOT NULL,
                    data_cadastro TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime'))
                );
        `   );


            await this.dbInstance.exec(`
                CREATE TABLE IF NOT EXISTS orcamentos (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    cliente_id INTEGER NOT NULL,
                    data Date,
                    validade Date,
                    FOREIGN KEY (cliente_id) REFERENCES clientes (id)
                );
            `);

            await this.dbInstance.exec('COMMIT');
            console.log('Tabelas criadas com sucesso.');
        } catch (error) {
            await this.dbInstance.exec('ROLLBACK');
            console.error('Erro ao criar tabelas:', error);
            throw new Error('Falha ao criar tabelas no banco de dados');
        }
    }

    public async getDatabaseInstance(): Promise<Database | null> {
        return this.dbInstance;
    }
}
// Funções para operações no banco de dados

export async function insertData(sql: string, values: any[]): Promise<number> {
    const dbSingleton = await DatabaseSingleton.getInstance();
    const dbInstance = await dbSingleton.getDatabaseInstance();
    if (!dbInstance) {
        throw new Error('Database is not connected');
    }

    try {
        const result = await dbInstance.run(sql, values);
        return result.lastID as number;
    } catch (error) {
        console.error('Erro ao inserir dados:', error);
        throw new Error('Falha ao inserir dados no banco de dados');
    }
}

export async function getAllRecords(tableName: string): Promise<any> {
    const dbSingleton = await DatabaseSingleton.getInstance();
    const dbInstance = await dbSingleton.getDatabaseInstance();
    if (!dbInstance) {
        throw new Error('Database is not connected');
    }
    try {
        const sql = `SELECT * FROM ${tableName}`;
        const result = await dbInstance.all(sql);
        return result // Retorna um objeto com a chave sendo o nome da tabela
    } catch (error) {
        console.error('Erro ao buscar registros:', error);
        throw new Error('Falha ao buscar registros no banco de dados');
    }
}

export async function getRecordById(tableName: string, id: number): Promise<any | null> {
    const dbSingleton = await DatabaseSingleton.getInstance();
    const dbInstance = await dbSingleton.getDatabaseInstance();
    if (!dbInstance) {
        throw new Error('Database is not connected');
    }

    try {
        const sql = `SELECT * FROM ${tableName} WHERE id = ?`;
        const result = await dbInstance.get(sql, [id]);
        return result ? result : null;
    } catch (error) {
        console.error('Erro ao buscar registro:', error);
        throw new Error('Falha ao buscar registro no banco de dados');
    }
}