import { ChangeEvent, useState } from 'react';
import ComboBoxClientes from '../../componentes/comboboxClientes';
import DataInput from './inputData';
import ValidadeInput from './inputValidade';

export default function AbaDados() {
  const [data, setData] = useState('');
  const [validade, setValidade] = useState('');
  const [clienteSelecionado, setClienteSelecionado] = useState('');

  const handleClienteChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setClienteSelecionado(event.target.value);
  };

  return (
    <>
      <div className="d-flex flex-row gap-5 pl-0 pr-0">
        <DataInput value={data} onChange={(event) => setData(event.target.value)} />
        <ValidadeInput value={validade} onChange={(event) => setValidade(event.target.value)} />
      </div>
      <ComboBoxClientes
        value={clienteSelecionado}
        onChange={handleClienteChange}
      />
    </>
  );
}
