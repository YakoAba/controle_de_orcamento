import { useState } from "react";
import { useClienteContext } from "../context";
import ClienteButton from './button';

export default function AbaCliente() {
    const { addCliente, clientes } = useClienteContext();
    const [nome_cliente, setNome_Cliente] = useState('');

    const handleAddCliente = async () => {
        if (nome_cliente.trim() === '') {
            alert('O nome da cliente não pode estar vazio');
            return;
        }

        try {
            const id = await addCliente({
                cpf_cliente: '',
                tipo_cliente: '',
                nome_cliente, id: '',
                data_cadastro: ''
            });
            console.log(id)
            setNome_Cliente(''); // Limpa o campo de entrada após adicionar a cliente
            alert('Cliente adicionada com sucesso');
        } catch (error) {
            console.error('Erro ao adicionar cliente:', error);
            alert('Erro ao adicionar cliente. Verifique o console para mais detalhes.');
        }
    };

    const handleChangeNomeCliente = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNome_Cliente(event.target.value);
        console.log(nome_cliente)
    };

    return (
        <div className="mt-3 mb-3 text-white">
            <legend style={{ fontSize: 'large', color: 'white' }}>Cadastro de Clientes</legend>
            {/* <ClienteInput value={nome_cliente} onChange={handleChangeNomeCliente} /> */}
            {/* <Button variant="primary" className="btn btn-primary mt-3 mx-1" >Cadastrar</Button> */}
            <ClienteButton onClick={handleAddCliente} />
            {/* <GridClientes clientes={clientes} /> */}
        </div>
    );
}