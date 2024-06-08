import { useOrcamentoContext } from '../context';
import { useClienteContext } from '@/clientes/context';
import { useEffect, useState } from 'react';

function ComboBoxClientes() {
  const { orcamentoSelecionada, selecionarOrcamento } = useOrcamentoContext();
  const { clientes, carregarClientes } = useClienteContext();
  const [cpf, setCpf] = useState('');
  const [tipo, setTipo] = useState('');
  const [clientesCarregados, setClientesCarregados] = useState(false);

  useEffect(() => {
    const carregar = async () => {
      try {
        await carregarClientes();
        setClientesCarregados(true);
      } catch (error) {
        console.error('Erro ao carregar clientes:', error);
        // Trate o erro de acordo com a sua lógica de tratamento de erros
        setClientesCarregados(false); // Certifique-se de definir como false em caso de erro
      }
    };
    carregar();
  }, [carregarClientes]);

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
      setCpf(selectedClient.cpf_cliente);
    } else {
      setTipo('');
      setCpf('');
    }
  };

  return clientesCarregados ? (
    <div className="form-group mt-2 mb-2">
      <label htmlFor='ComboBoxClientes' className='text-white'>Clientes:</label>
      <select
        id='ComboBoxClientes'
        className="form-select bg-secondary text-white border-secondary"
        name='ComboBoxClientes'
        value={orcamentoSelecionada.cliente_id}
        onChange={handleClienteChange}
        disabled={!clientesCarregados} // Desabilita o combo enquanto os clientes estiverem sendo carregados
      >
        <option value="">Selecione</option>
        {clientes?.map((cliente) => (
          <option key={cliente._id} value={cliente._id}>{cliente.nome_cliente}</option>
        ))}
      </select>
      <div className='text-white'>
        CPF do cliente selecionado: {cpf}
      </div>
      <div className='text-white'>
        Tipo do cliente selecionado: {tipo === 'pf' ? 'Pessoa Física' : 'Pessoa Jurídica'}
      </div>
    </div>
  ) : (
    <div className="form-group mt-2 mb-2">
      <label htmlFor='ComboBoxClientes' className='text-white'>Clientes:</label>
      <select
        id='ComboBoxClientes'
        className="form-select bg-secondary text-white border-secondary"
        name='ComboBoxClientes'
        value={orcamentoSelecionada.cliente_id}
        onChange={handleClienteChange}
        disabled // Desabilita o combo enquanto os clientes estiverem sendo carregados
      >
        <option value="">Carregando...</option>
      </select>
    </div>
  );
}

export default ComboBoxClientes;
