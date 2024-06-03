import { useOrcamentoContext } from '../context';
import { useClienteContext, ClienteProvider } from '@/clientes/context';
import { ChangeEvent, useState } from 'react';

function ComboBoxClientes() {
  const { orcamentoSelecionada, selecionarOrcamento } = useOrcamentoContext()
  const { clientes } = useClienteContext()
  //const [clientes, setClientes] = useState<Cliente[]>([]);
  const [cpf, setCpf] = useState('');
  const [tipo, setTipo] = useState('');

  const handleClienteChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedClientId = event.target.value;
    const selectedClient = clientes.find(cliente => cliente._id.toString() === selectedClientId);
   
    if (selectedClient) {
      const updatedOrcamento = {
        ...orcamentoSelecionada,
        cliente_id: selectedClient._id,
        nome: selectedClient.nome_cliente,
        documento: selectedClient.cpf_cliente,
      };
      selecionarOrcamento(updatedOrcamento)
      setTipo(selectedClient.tipo_cliente);
      setCpf(selectedClient.cpf_cliente); // Supondo que o cliente possui uma propriedade "cpf"
    } else {
      setTipo('');
      setCpf(''); // Caso não encontre o cliente, limpa o CPF
 
    }
  };

  return (
    <div className="form-group mt-2 mb-2">
      <label htmlFor='ComboBoxClientes' className='text-white'>Clientes:</label>
      <select
        id='ComboBoxClientes'
        className="form-select bg-secondary text-white border-secondary"
        name='ComboBoxClientes'
        value={orcamentoSelecionada.cliente_id}
        onChange={handleClienteChange}>
        <option value="">Selecione</option>
        {clientes?.map((cliente) => (
          <option key={cliente._id} value={cliente._id}>{cliente.nome_cliente}</option>
        ))}
      </select>
      <div className='text-white'>
        CPF do cliente selecionado: {cpf}
      </div>
      <div className='text-white'>
        Tipo do cliente selecionado: {tipo==='pf'?'Pessoa Fisica':'Pessoa Juridica'}
      </div>
    </div>
  );
}

export default ComboBoxClientes;
