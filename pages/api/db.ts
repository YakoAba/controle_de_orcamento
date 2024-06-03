import { MongoClient, Db, ObjectId } from 'mongodb';

export class DatabaseSingleton {
  private static instance: DatabaseSingleton;
  private dbInstance: Db | null;

  private constructor() {
    this.dbInstance = null;
  }

  public static async getInstance(): Promise<DatabaseSingleton> {
    if (!DatabaseSingleton.instance) {
      DatabaseSingleton.instance = new DatabaseSingleton();
      await DatabaseSingleton.instance.connect();
    }
    return DatabaseSingleton.instance;
  }

  private async connect(): Promise<void> {
    try {
      const client = await MongoClient.connect("mongodb+srv://edudu9825:013842Dudu@shinkansen.6hvdq.mongodb.net/shinkansen?retryWrites=true&w=majority");
      this.dbInstance = client.db("orcamento");
    } catch (error) {
      throw new Error("Failed to connect to the database");
    }
  }

  public getDatabaseInstance(): Db | null {
    return this.dbInstance;
  }
}

export async function insertData(collectionName: string, data: any): Promise<any> {
  const dbSingleton = await DatabaseSingleton.getInstance();
  const dbInstance = dbSingleton.getDatabaseInstance();
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
  const dbInstance = dbSingleton.getDatabaseInstance();
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
  const dbInstance = dbSingleton.getDatabaseInstance();
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
