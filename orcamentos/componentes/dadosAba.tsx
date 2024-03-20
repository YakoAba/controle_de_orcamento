import { ChangeEvent } from 'react';
import ComboBoxClientes from './comboboxClientes';
import DataInput from './inputData';
import ValidadeInput from './inputValidade';
import { useOrcamentoContext } from '../context';

export default function AbaDados() {
  const { orcamentoSelecionada, selecionarOrcamento } = useOrcamentoContext();

  const handleClienteChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    selecionarOrcamento({ ...orcamentoSelecionada, cliente_id: event.target.value })
  };

  const handleDataChange = (event: ChangeEvent<HTMLInputElement>): void => {
    selecionarOrcamento({ ...orcamentoSelecionada, data: event.target.value })
  };

  const handleValidadeChange = (event: ChangeEvent<HTMLInputElement>): void => {
    selecionarOrcamento({ ...orcamentoSelecionada, validade: event.target.value })
  };

  return (
    <>
      <div className="d-flex flex-row gap-5 pl-0 pr-0">
        <DataInput value={orcamentoSelecionada.data} onChange={handleDataChange} />
        <ValidadeInput value={orcamentoSelecionada.validade} onChange={handleValidadeChange} />
      </div>
      <ComboBoxClientes
        value={orcamentoSelecionada.cliente_id}
        onChange={handleClienteChange}
      />
    </>
  );
}
