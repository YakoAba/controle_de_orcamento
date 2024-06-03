import React from 'react';
import { GridMarcasProps } from '../interface';

const GridMarcas: React.FC<GridMarcasProps> = ({ marcas }) => {
  return (
    <div className="container mt-4">
      <legend style={{ fontSize: 'large', color: 'white' }}>Grid de Marcas</legend>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome da Marca</th>
            <th>Data de Criação</th>
          </tr>
        </thead>
        <tbody>
          {marcas?.map((marca, index) => (
            <tr key={marca._id} style={{ backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#e9ecef' }}>
              <td>{marca._id}</td>
              <td>{marca.nome_marca}</td>
              <td>{marca.data_cadastro}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GridMarcas;
