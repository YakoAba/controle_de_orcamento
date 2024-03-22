import { ChangeEvent } from 'react';
import { useOrcamentoContext } from '../context';

function DataInput() {
  const { orcamentoSelecionada, selecionarOrcamento } = useOrcamentoContext();
  const handleDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    selecionarOrcamento({ ...orcamentoSelecionada, data: event.target.value })
  };
  return (
    <div className="form-group mt-2 mb-2">
      <label htmlFor='dataOrcamento' className="text-white">Data do Orçamento:</label>
      <input
        type="date"
        id="dataOrcamento"
        name="dataOrcamento"
        className="form-control bg-secondary text-white border border-secondary"
        value={orcamentoSelecionada.data}
        onChange={handleDataChange} />
    </div>
  );
}

export default DataInput;
