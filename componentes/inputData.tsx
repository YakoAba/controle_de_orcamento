import React, { ChangeEvent } from 'react';
import { useGlobalContext } from '../pages/context';

const DataInput: React.FC = () => {
  const { jsonData, setData } = useGlobalContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...jsonData,
      dataOrcamento: event.target.value,
    });
  };

  return (
    <div className="form-group mt-2 mb-2">
      <label htmlFor='dataOrcamento' className="text-white">Data do Orçamento:</label>
      <input
        type="date"
        id="dataOrcamento"
        name="dataOrcamento"
        className="form-control bg-secondary text-white border border-secondary"
        value={jsonData.dataOrcamento}
        onChange={handleChange}
      />
    </div>
  );
};

export default DataInput;
