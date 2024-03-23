import React, { useState } from 'react';
import { useOrcamentoContext } from '../context';

export default function PrazoEntrega() {
  const { orcamentoSelecionada, selecionarOrcamento } = useOrcamentoContext();
  const [mostrarInput, setMostrarInput] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    selecionarOrcamento({ ...orcamentoSelecionada, prazo_entrega : event.target.value })
  };


  // Função para lidar com a mudança do checkbox
  const handleCheckboxChange = () => {
    setMostrarInput(!mostrarInput); // Inverte o estado de visibilidade do input
  };



  return (
    <div className="form-group mt-2 mb-2">
      <input type="checkbox" id="prazoEntregaCheck" onChange={handleCheckboxChange} style={{ marginRight: '10px' }} />
      <label style={{ fontSize: 'large', color: 'white' }} htmlFor="prazoEntregaCheck">Prazo de entrega</label>
      {mostrarInput && (<input
        autoComplete="off" // Apenas uma vez
        type="text"
        id="prazoEntrega"
        placeholder="Dias para entrega"
        className="form-control text-white bg-secondary border-secondary rounded mt-2 mb-2"
        name="prazoentrega"
        value={orcamentoSelecionada.prazo_entrega}
        onChange={handleChange}
      />)}
    </div>
  );
}


