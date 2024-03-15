// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { openDB } from "./sqlite";
import { Produto } from "../context";

type Data = {
    status: string,
    dadosRecebidos: Produto,
    mensagens: string[],
    id: string,
};

async function abrirBD(res: NextApiResponse, data: Data) {
    const db = await openDB();
    const sql = `INSERT INTO produto (nome) VALUES (?)`;
    await db.run(
        sql,
        [data.dadosRecebidos.nome || null
        ], async function (err: { message: any; }) {
            if (err) {
                console.error("Erro ao executar consulta SQL:", err.message);
                // Aqui, você deve tratar o erro, talvez enviando uma resposta HTTP indicando falha
                res.status(500).json({ error: "Erro interno do servidor" });
            } else {
                console.log("Inserção bem-sucedida");
                // Aqui, você pode enviar uma resposta HTTP de sucesso, se necessário
                //   logs.id = this.lastID;
                // abrirNovaAbaComJson('1');
                res.status(200).json({ funcionou: true });
            }
        }
    )
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { method, body } = req;

    switch (method) {
        case 'GET':
            // Lógica para lidar com o método GET
            res.status(200).json({ message: 'Requisição GET recebida' });
            break;
            case 'POST':
                try {
                    // Lógica para lidar com o método POST
                    //console.log("Dados recebidos no servidor (POST):", body);
                    let logsPost: Data = {
                        status: "sucesso",
                        dadosRecebidos: body,
                        mensagens: [],
                        id: '',
                    };
                    logsPost.mensagens.push("Conectado ao banco de dados SQLite com sucesso");
                    abrirBD(res, logsPost);
                    res.status(200).json(logsPost);
                } catch (error) {
                    console.error("Erro ao processar requisição POST:", error);
                    let logsErro: Data = {
                        status: "erro",
                        dadosRecebidos: body,
                        mensagens: [],
                        id: '',
                    };
                    logsErro.mensagens.push(
                        "Falha ao conectar ao banco de dados"
                      );
                    res.status(500).json(logsErro); // Retornar status 500 para indicar erro interno do servidor
                }
                break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Método ${method} não permitido`);
    }
}