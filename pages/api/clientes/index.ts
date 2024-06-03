import { NextApiRequest, NextApiResponse } from 'next';
import { getAll, insertOne, getById } from './db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query: { id }, body } = req;

  switch (method) {
    case 'POST':
      try {
        const insertedId = await insertOne(body);
        res.status(200).json({ insertedId });
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error('Erro ao processar requisição POST:', error);
          res.status(500).json({ error: 'Erro interno do servidor' });
        } else {
          res.status(500).json({ error: 'Erro interno do servidor' });
        }
      }
      break;

    case 'GET':
      try {
        if (id) {
          const cliente = await getById(id as string);
          if (cliente) {
            res.status(200).json(cliente);
          } else {
            res.status(404).json({ error: 'Cliente não encontrado' });
          }
        } else {
          const clientes = await getAll();
          res.status(200).json({ clientes });
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error('Erro ao processar requisição GET:', error);
          res.status(500).json({ error: 'Erro interno do servidor' });
        } else {
          res.status(500).json({ error: 'Erro interno do servidor' });
        }
      }
      break;

    // Outros casos de método podem ser adicionados conforme necessário
    default:
      res.setHeader('Allow', ['POST', 'GET']);
      res.status(405).end(`Método ${method} não permitido`);
  }
}
