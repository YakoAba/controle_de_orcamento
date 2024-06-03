import React from 'react';

interface MarcaInputProps {
  value: string; // Tipo para o valor do input
  marcas: any[]; // Tipo para o valor do input
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void; 
}

export default function ComboBoxMarcas({ value, marcas, onChange }: MarcaInputProps) {
  return (
    <div className="form-group mt-2 mb-2">
      <label htmlFor='selMarca' className='text-white'>Marca do Produto:</label>
      <select
        id='selMarca'
        className="form-select bg-secondary text-white border-secondary"
        name='selMarca'
        value={value}
        onChange={onChange}
      >
        <option value="">Selecione</option>
        {marcas.map((marca) => (
          <option key={marca.id_marca} value={marca.id}>{marca.nome_marca}</option>
        ))}
      </select>
    </div>
  );
}
