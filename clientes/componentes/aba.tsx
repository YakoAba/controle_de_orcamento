import React, { useState, ChangeEvent } from "react";
import { useClienteContext } from "../context";
import ClienteButton from './button';
import NomeInput from "./inputNome";
import CPFInput from "./inputCpf";
import ComboBoxTipoPessoa from "./comboboTipoPessoa";
import GridClientes from "./grid";
import { Cliente } from "../interface";
import CNPJInput from "./inputCNPJ"; // Importe o componente CNPJInput



export default function AbaCliente() {
    const { addCliente, clientes } = useClienteContext();
    const [nome_cliente, setNomeCliente] = useState<string>('');
    const [tipo_cliente, setTipoCliente] = useState<string>('');
    const [cpf_cliente, setCPFCliente] = useState<string>('');

    const handleAddCliente = async () => {
        if (nome_cliente.trim() === '') {
            alert('O nome do cliente não pode estar vazio');
            return;
        }

        try {
            const newCliente: Cliente = {
                cpf_cliente: cpf_cliente,
                tipo_cliente: tipo_cliente,
                nome_cliente: nome_cliente,
                _id: '', // You may need to generate an ID here
                data_cadastro: '' // Set the date of registration if needed
            };

            const id = await addCliente(newCliente);            
            console.log(id)
            setNomeCliente(''); // Limpa o campo de entrada após adicionar o cliente
            setCPFCliente(''); // Limpa o campo de CPF após adicionar o cliente
            setTipoCliente(''); // Limpa o campo de tipo de cliente após adicionar o cliente
            alert('Cliente adicionado com sucesso');
        } catch (error) {
            console.error('Erro ao adicionar cliente:', error);
            alert('Erro ao adicionar cliente. Verifique o console para mais detalhes.');
        }
    };

    const handleChangeNomeCliente = (event: ChangeEvent<HTMLInputElement>) => {
        setNomeCliente(event.target.value);
    };

    const handleChangeCpfCliente = (event: ChangeEvent<HTMLInputElement>) => {
        setCPFCliente(event.target.value);
    };

    const handleChangeTipoCliente = (event: ChangeEvent<HTMLSelectElement>) => {
        setTipoCliente(event.target.value);
    };

    return (
        <div className="mt-3 mb-3 text-white">
            <legend style={{ fontSize: 'large', color: 'white' }}>Cadastro de Clientes</legend>
            <NomeInput value={nome_cliente} onChange={handleChangeNomeCliente}/>
            <ComboBoxTipoPessoa value={tipo_cliente} onChange={handleChangeTipoCliente} />
            {/* <CPFInput value={cpf_cliente} onChange={handleChangeCpfCliente}/> */}
            {tipo_cliente === 'pj' ? (
                <CNPJInput value={cpf_cliente} onChange={handleChangeCpfCliente} />
            ) : (
                <CPFInput value={cpf_cliente} onChange={handleChangeCpfCliente} />
            )}
            <ClienteButton onClick={handleAddCliente} /> 
            <GridClientes clientes={clientes} />
        </div>
    );
}
