import { Cliente } from '@/clientes/interface';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { getClientes } from '@/clientes/service';

interface ComboBoxClientesProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

function ComboBoxClientes({ value, onChange }: ComboBoxClientesProps) {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [cpf, setCpf] = useState('');
  const [tipo, setTipo] = useState('');

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const data = await getClientes();
        setClientes(data); // Supondo que a resposta da API seja um objeto com a propriedade "clientes"
      } catch (error) {
        console.error('Erro ao obter clientes da API:', error);
        // Trate o erro de acordo com a sua lógica de tratamento de erros
      }
    };
    fetchClientes();
  }, []);

  const handleClienteChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedClientId = event.target.value;
    const selectedClient = clientes.find(cliente => cliente.id.toString() === selectedClientId);
    if (selectedClient) {
      setTipo(selectedClient.tipo_cliente);
      setCpf(selectedClient.cpf_cliente); // Supondo que o cliente possui uma propriedade "cpf"
    } else {
      setTipo('');
      setCpf(''); // Caso não encontre o cliente, limpa o CPF
    }
     onChange(event); // Chama a função onChange passada como prop
  };

  return (
    <div className="form-group mt-2 mb-2">
      <label htmlFor='ComboBoxClientes' className='text-white'>Clientes:</label>
      <select
        id='ComboBoxClientes'
        className="form-select bg-secondary text-white border-secondary"
        name='ComboBoxClientes'
        value={value}
        onChange={handleClienteChange}>
        <option value="">Selecione</option>
        {clientes.map((cliente) => (
          <option key={cliente.id} value={cliente.id}>{cliente.nome_cliente}</option>
        ))}
      </select>
      <div className='text-white'>
        CPF do cliente selecionado: {cpf}
      </div>
      <div className='text-white'>
        Tipo do cliente selecionado: {tipo}
      </div>
    </div>
  );
}

export default ComboBoxClientes;
