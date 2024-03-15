// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { openDB } from "./sqlite";
import { JsonData } from "../context";

type Data = {
    status: string,
    dadosRecebidos: JsonData,
    mensagens: string[],
    id: string,
};

async function abrirBD(res: NextApiResponse, data: Data) {
    const db = await openDB();
    const sql = `INSERT INTO orcamentos (data_orcamento, validade_orcamento, nome_cliente, cpf_cliente, tipo_cliente, forma_envio, uf_envio, cep_envio, valor_frete, forma_pagamento, prazo_fabricacao, prazo_entrega, observacao) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    await db.run(
        sql,
        [data.dadosRecebidos.dataOrcamento || null,
        data.dadosRecebidos.validadeOrcamento || null,
        data.dadosRecebidos.nomeCliente || null,
        data.dadosRecebidos.cpfcliente.replace(/\D+/g, '') || null,
        data.dadosRecebidos.tipoCliente || null,
        data.dadosRecebidos.formaEnvio || null,
        data.dadosRecebidos.ufEnvio || null,
        data.dadosRecebidos.cepEnvio.replace(/\D+/g, '') || null,
        data.dadosRecebidos.valorFrete || null,
        data.dadosRecebidos.formaPagamento || null,
        data.dadosRecebidos.prazoFabricacao || null,
        data.dadosRecebidos.prazoentrega || null,
        data.dadosRecebidos.observacao || null
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
            
        case 'PUT':
            // Lógica para lidar com o método PUT
            console.log("Dados recebidos no servidor (PUT):", body);
            let logsPut: Data = {
                status: "sucesso",
                dadosRecebidos: body,
                mensagens: [],
                id: '',
            };
            res.status(200).json(logsPut);
            break;
        case 'DELETE':
            // Lógica para lidar com o método DELETE
            console.log("Dados recebidos no servidor (DELETE):", body);
            let logsDelete: Data = {
                status: "sucesso",
                dadosRecebidos: body,
                mensagens: [],
                id: '',
            };
            res.status(200).json(logsDelete);
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Método ${method} não permitido`);
    }
}
