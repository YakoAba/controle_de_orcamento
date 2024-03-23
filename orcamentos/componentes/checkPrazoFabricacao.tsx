import React, { useState } from 'react';
import { useOrcamentoContext } from '../context';

export default function PrazoFabricacao() {
  // Estado para controlar a visibilidade do input
  const { orcamentoSelecionada, selecionarOrcamento } = useOrcamentoContext();
  const [mostrarInput, setMostrarInput] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    selecionarOrcamento({ ...orcamentoSelecionada, prazo_fabricacao : event.target.value })
  };


  // Função para lidar com a mudança do checkbox
  const handleCheckboxChange = () => {
    setMostrarInput(!mostrarInput); // Inverte o estado de visibilidade do input
  };

  return (
    <div className="form-group mt-2 mb-2">
      <input
        type="checkbox"
        id="prazoFabricacaoCheck"
        onChange={handleCheckboxChange}
        checked={mostrarInput}
        style={{ marginRight: '10px' }} // Adiciona um espaçamento à direita do checkbox
      />
      <label style={{ fontSize: 'large', color: 'white' }} htmlFor="prazoFabricacaoCheck">Prazo de fabricação</label>
      {/* Renderiza o input apenas se o estado de visibilidade for true */}
      {mostrarInput && (
        <input
          autoComplete="off"
          type="text"
          id="prazoFabricacao"
          placeholder="Dias para fabricação"
          className="text-white form-control bg-secondary border-secondary rounded mt-2 mb-2"
          name="prazofabricar"
          value={orcamentoSelecionada.prazo_fabricacao}
          onChange={handleChange}
        />
      )}
    </div>
  );
}
