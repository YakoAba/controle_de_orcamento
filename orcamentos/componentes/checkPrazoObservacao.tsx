import React, { useState } from 'react';
import { useOrcamentoContext } from '../context';

export default function Observacao() {
  const { orcamentoSelecionada, selecionarOrcamento } = useOrcamentoContext();
  const [mostrarInput, setMostrarInput] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    selecionarOrcamento({ ...orcamentoSelecionada, prazo_observacao : event.target.value })
  };
  const handleCheckboxChange = () => {
    setMostrarInput(!mostrarInput); // Inverte o estado de visibilidade do input
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
        className="form-control text-white bg-secondary border-secondary rounded mt-2 mb-2 "
        name="observacaoprazo"
        value={orcamentoSelecionada.prazo_observacao}
        onChange={handleChange}
      >
      </textarea>)}
    </div>
  )
}

