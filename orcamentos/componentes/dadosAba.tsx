import { ChangeEvent } from 'react';
import ComboBoxClientes from './comboboxClientes';
import DataInput from './inputData';
import ValidadeInput from './inputValidade';
import { useOrcamentoContext } from '../context';
import AdicionarProduto from '@/componentes/adicionarProduto';
import ComboBoxFormaEnvio from '@/componentes/comboboxFormaEnvio';
import CEPInput from '@/componentes/inputCEP';
import ComboBoxUF from '@/componentes/comboboxUF';
import ValorFreteInput from '@/componentes/inputValorFrete';
import ComboBoxFormaPagamento from '@/componentes/comboboxFormaPagamento';
import PrazoFabricacao from '@/componentes/checkPrazoFabricacao';
import PrazoEntrega from '@/componentes/checkPrazoEntrega';
import Observacao from '@/componentes/checkPrazoObservacao';

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
      <div className="border border-secondary rounded-3 p-3">
        <div className="d-flex flex-row gap-5 pl-0 pr-0">
          <DataInput value={orcamentoSelecionada.data} onChange={handleDataChange} />
          <ValidadeInput value={orcamentoSelecionada.validade} onChange={handleValidadeChange} />
        </div>
        <ComboBoxClientes
          value={orcamentoSelecionada.cliente_id}
          onChange={handleClienteChange}
        />
      </div>
      <div className="border border-secondary rounded-3 p-3">
        <div className="d-flex flex-row ">
          <ComboBoxFormaEnvio />
          <CEPInput />
          <ComboBoxUF />
          <ValorFreteInput />
          <ComboBoxFormaPagamento />
        </div>
      </div>
      <div className="border border-secondary p-3">
        <legend style={{ fontSize: 'large', color: 'white' }}>Prazos</legend>
        <div className="d-flex flex-row gap-3 pl-0 pr-0">
          <PrazoFabricacao />
          <PrazoEntrega />
        </div>
        <Observacao />
      </div>
    </>
  );
}
