import React from 'react';

interface MarcaInputProps {
  value: string; // Tipo para o valor do input
  marcas: any[]; // Tipo para o valor do input
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void; 
}

export default function ComboBoxMarcas({ value, marcas, onChange }: MarcaInputProps) {
  return (
    <div className="form-group mt-2 mb-2">
      <label htmlFor='tipoCliente' className='text-white'>Marca do Produto:</label>
      <select
        id='tipoCliente'
        className="form-select bg-secondary text-white border-secondary"
        name='tipoCliente'
        value={value}
        onChange={onChange}
      >
        <option value="">Selecione</option>
        {marcas.map((marca) => (
          <option key={marca.id} value={marca.id}>{marca.nome_marca}</option>
        ))}
      </select>
    </div>
  );
}
