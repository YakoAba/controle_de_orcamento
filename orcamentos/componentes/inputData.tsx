import { ChangeEvent } from 'react';

interface DataInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function DataInput({ value, onChange }:DataInputProps) {
  return (
    <div className="form-group mt-2 mb-2">
      <label htmlFor='dataOrcamento' className="text-white">Data do Orçamento:</label>
      <input
        type="date"
        id="dataOrcamento"
        name="dataOrcamento"
        className="form-control bg-secondary text-white border border-secondary"
        value={value}
        onChange={onChange} />
    </div>
  );
}

export default DataInput;
