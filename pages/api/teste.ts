import { NextApiRequest, NextApiResponse } from 'next';
import { insertData, getAllRecords, getRecordById } from './db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query: { id }, body } = req;

  try {
    switch (method) {
      case 'GET':
        if (id) {
          // GET /api/produtos/[id]
          const record = await getRecordById('produtos', id as string);
          if (record) {
            res.status(200).json(record);
          } else {
            res.status(404).json({ error: 'Record not found' });
          }
        } else {
          // GET /api/produtos
          const allProdutos = await getAllRecords('produtos');
          res.status(200).json(allProdutos);
        }
        break;
      case 'POST':
        // POST /api/produtos
        const insertedId = await insertData('produtos', body);
        res.status(200).json({ insertedId });
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
