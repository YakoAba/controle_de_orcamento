import React from 'react';
import { GridProdutosProps } from '../interface';

const GridProdutos: React.FC<GridProdutosProps> = ({ produtos }) => {
  return (
    <div className="container mt-4">
      <legend style={{ fontSize: 'large', color: 'white' }}>Grid de Marcas</legend>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome do Produto</th>
            <th>Nome da Marca</th>
            <th>Data de Criação</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto, index) => (
            <tr key={produto.id} style={{ backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#e9ecef' }}>
              <td>{produto.id}</td>
              <td>{produto.nome_produto}</td>
              <td>{produto.nome_marca}</td>
              <td>{produto.data_cadastro}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GridProdutos;
