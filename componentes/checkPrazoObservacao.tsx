import { useGlobalContext } from '@/context';
import React, { useState } from 'react';

export default function Observacao() {
  const [mostrarInput, setMostrarInput] = useState(false);
  const { jsonData, setData } = useGlobalContext();

  // Função para lidar com a mudança do checkbox
  const handleCheckboxChange = () => {
    setMostrarInput(!mostrarInput); // Inverte o estado de visibilidade do input
  };
  
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData({
      ...jsonData,
      observacao: event.target.value,
    });
  };

  return (
    <div className="form-group mt-2 mb-2">
      <input
        autoComplete="off" // Apenas uma vez
        type="checkbox"
        id="observacaoCheck"
        onChange={handleCheckboxChange}
        style={{ marginRight: '10px' }} // Adiciona um espaçamento à direita do checkbox
      />
      <label style={{ fontSize: 'large', color: 'white' }} htmlFor="observacaoCheck">Observação</label>

      {mostrarInput && (<textarea
        id="observacao"
        className="form-control bg-secondary border-secondary rounded mt-2 mb-2"
        name="observacaoprazo"
        value={jsonData.observacao}
        onChange={handleChange}
      >
      </textarea>)}
    </div>
  )
}

