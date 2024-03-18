import { NextApiRequest, NextApiResponse } from 'next';
import { getMarcas, realizarInsercao } from './db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  switch (method) {
    case 'POST':
      try {
        const id = await realizarInsercao(body);
        res.status(200).json({ id });
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
          const marcas = await getMarcas();
          res.status(200).json({ marcas });
        } catch (error: unknown) {
          if (error instanceof Error) {
            console.error('Erro ao processar requisição POST:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
          } else {
            res.status(500).json({ error: 'Erro interno do servidor' });
          }
        }
        break;

    // Outros casos de método podem ser adicionados conforme necessário
    default:
      res.setHeader('Allow', ['POST','GET']);
      res.status(405).end(`Método ${method} não permitido`);
  }
}