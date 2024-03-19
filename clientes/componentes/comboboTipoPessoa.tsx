import React from "react";
import { ComboBoxTipoProps } from "../interface";

const ComboBoxTipoPessoa: React.FC<ComboBoxTipoProps> = ({ value, onChange }) => {
  return (
    <div className="form-group mt-2 mb-2">
      <label htmlFor='tipoCliente' className='text-white'>Tipo de Cliente:</label>
      <select
        id='tipoCliente'
        className="form-select bg-secondary text-white border-secondary"
        name='tipoCliente'
        value={value}
        onChange={onChange}
      >
        <option value="">Selecione</option>
        <option value="pf">Pessoa Física</option>
        <option value="pj">Pessoa Jurídica</option>
      </select>
    </div>
  );
};

export default ComboBoxTipoPessoa;
