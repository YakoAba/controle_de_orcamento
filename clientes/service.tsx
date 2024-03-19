// services/clienteService.ts

import { Cliente } from "./interface";

const API_URL = 'api/clientes'; // Altere para a URL correta da sua API

// Função para obter todas as clientes
export async function getClientes() {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Erro ao obter clientes da API');
    }
    const data = await response.json();
    return data.clientes;
}

// Função para adicionar uma nova cliente
export async function addClientes(novoCliente : Cliente){
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'nome_cliente': novoCliente.nome_cliente, 'tipo_cliente': novoCliente.tipo_cliente, 'cpf_cliente' : novoCliente.cpf_cliente}),
    });
    if (!response.ok) {
        throw new Error('Erro ao adicionar cliente na API');
    }
    const data = await response.json();
    return data.id;
}

