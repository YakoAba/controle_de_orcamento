import { useOrcamentoContext } from '../context';
import { useClienteContext } from '@/clientes/context';
import { useEffect, useState } from 'react';

function ComboBoxClientes() {
  const { orcamentoSelecionada, selecionarOrcamento } = useOrcamentoContext();
  const { clientes, carregarClientes } = useClienteContext();
  const [cpf, setCpf] = useState('');
  const [tipo, setTipo] = useState('');
  const [clientesCarregados, setClientesCarregados] = useState(false); // Estado para controlar se os clientes foram carregados

  useEffect(() => {
    const carregar = async () => {
      await carregarClientes();
      setClientesCarregados(true);
    };
    carregar();
  }, [carregarClientes]); // UseEffect para carregar os clientes antes de renderizar

  const handleClienteChange = async (event: { target: { value: any; }; }) => {
    const selectedClientId = event.target.value;
    const selectedClient = clientes.find(cliente => cliente._id.toString() === selectedClientId);
   
    if (selectedClient) {
      const updatedOrcamento = {
        ...orcamentoSelecionada,
        cliente_id: selectedClient._id,
        nome: selectedClient.nome_cliente,
        documento: selectedClient.cpf_cliente,
      };
      selecionarOrcamento(updatedOrcamento);
      setTipo(selectedClient.tipo_cliente);
      setCpf(selectedClient.cpf_cliente); // Supondo que o cliente possui uma propriedade "cpf"
    } else {
      setTipo('');
      setCpf(''); // Caso não encontre o cliente, limpa o CPF
    }
  };

  return clientesCarregados && (
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
