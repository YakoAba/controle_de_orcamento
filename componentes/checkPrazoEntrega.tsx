import { useGlobalContext } from '@/pages/context';
import React, { useState } from 'react';

export default function PrazoEntrega() {
  const [mostrarInput, setMostrarInput] = useState(false);
  const { jsonData, setData } = useGlobalContext();
  // Função para lidar com a mudança do checkbox
  const handleCheckboxChange = () => {
    setMostrarInput(!mostrarInput); // Inverte o estado de visibilidade do input
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...jsonData,
      prazoentrega: event.target.value,
    });
  };

  return (
    <div className="form-group mt-2 mb-2">
      <input type="checkbox" id="prazoEntregaCheck"  onChange={handleCheckboxChange} style={{ marginRight: '10px' }} /> 
      <label htmlFor="prazoEntregaCheck">Prazo de entrega</label>
      {mostrarInput && (<input
        autoComplete="off" // Apenas uma vez
        type="text"
        id="prazoEntrega"
        placeholder="Dias para entrega"
        className="form-control bg-secondary border-secondary rounded mt-2 mb-2"
        name="prazoentrega"
        value={jsonData.prazoentrega}
        onChange={handleChange}
      />)}
    </div>
  );
}


