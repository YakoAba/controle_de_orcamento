//sqlite.ts
import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

interface CustomError extends Error {
  code?: string;
}

export async function openDB(): Promise<Database> {
  try {
    const db = await open({
      filename: './preorcamento.db',
      driver: sqlite3.Database,
    });
    return db;
  } catch (error) {
    const customError: CustomError = new Error('Failed to open database.');
    customError.code = 'DB_OPEN_ERROR';
    throw customError;
  }
}
