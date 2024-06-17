import { MongoClient, Db, ObjectId } from 'mongodb';

export class DatabaseSingleton {
  private static instance: DatabaseSingleton;
  private dbInstance: Db | null;
  private connectionPromise: Promise<void> | null;

  private constructor() {
    this.dbInstance = null;
    this.connectionPromise = null;
  }

  public static async getInstance(): Promise<DatabaseSingleton> {
    if (!DatabaseSingleton.instance) {
      DatabaseSingleton.instance = new DatabaseSingleton();
      DatabaseSingleton.instance.connectionPromise = DatabaseSingleton.instance.connect();
    }
    await DatabaseSingleton.instance.connectionPromise;
    return DatabaseSingleton.instance;
  }

  private async connect(): Promise<void> {
    try {
      const url = process.env.URLMONGODB;
      const dbName = process.env.BD;

      if (!url || !dbName) {
        throw new Error("String de conexão do banco de dados ou nome do banco de dados ausente nas variáveis de ambiente");
      }

      const client = await MongoClient.connect(url);
      this.dbInstance = client.db(dbName);
    } catch (error) {
      throw new Error("Failed to connect to the database");
    }
  }

  public async getDatabaseInstance(): Promise<Db | null>  {
    return this.dbInstance;
  }
}

export async function insertData(collectionName: string, data: any): Promise<any> {
  const dbSingleton = await DatabaseSingleton.getInstance();
  const dbInstance = await dbSingleton.getDatabaseInstance();
  if (!dbInstance) {
    throw new Error("Database is not connected");
  }

  try {
    const result = await dbInstance.collection(collectionName).insertOne(data);
    return result.insertedId;
  } catch (error) {
    throw new Error("Failed to insert data into the database");
  }
}

export async function getAllRecords(collectionName: string): Promise<any[]> {
  const dbSingleton = await DatabaseSingleton.getInstance();
  const dbInstance = await dbSingleton.getDatabaseInstance();
  if (!dbInstance) {
    throw new Error("Database is not connected");
  }

  try {
    const result = await dbInstance.collection(collectionName).find().toArray();
    return result;
  } catch (error) {
    throw new Error("Failed to fetch records from the database");
  }
}

export async function getRecordById(collectionName: string, id: string): Promise<any | null> {
  const dbSingleton = await DatabaseSingleton.getInstance();
  const dbInstance = await dbSingleton.getDatabaseInstance();
  if (!dbInstance) {
    throw new Error("Database is not connected");
  }

  try {
    const result = await dbInstance.collection(collectionName).findOne({ _id: new ObjectId(id) });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch record from the database");
  }
}
