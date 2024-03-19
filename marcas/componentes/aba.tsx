import React, { useState } from 'react';
import { useMarcaContext } from '../context';
import MarcaInput from './inputNome';
import MarcaButton from './button';
import GridMarcas from './grid';

export default function Aba() {
  const { addMarca, marcas } = useMarcaContext();
  const [nome_marca, setNome_Marca] = useState('');

  const handleAddMarca = async () => {
    if (nome_marca.trim() === '') {
      alert('O nome da marca não pode estar vazio');
      return;
    }

    try {
      const id = await addMarca({ nome_marca, id:'', data_cadastro:'' });
      console.log(id)
      setNome_Marca(''); // Limpa o campo de entrada após adicionar a marca
      alert('Marca adicionada com sucesso');
    } catch (error) {
      console.error('Erro ao adicionar marca:', error);
      alert('Erro ao adicionar marca. Verifique o console para mais detalhes.');
    }
  };

  const handleChangeNomeMarca = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome_Marca(event.target.value);
    console.log(nome_marca)
  };

  return (
    <div className="mt-3 mb-3 text-white">
      <legend style={{ fontSize: 'large', color: 'white' }}>Cadastro de Marcas</legend>
      <MarcaInput
        value={nome_marca}
        onChange={handleChangeNomeMarca}
      />
      <MarcaButton onClick={handleAddMarca} />
      <GridMarcas marcas={marcas}/>
    </div>
  );
}
