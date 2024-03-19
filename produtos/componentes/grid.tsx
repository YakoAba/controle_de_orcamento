import React from 'react';
import { GridProdutosProps } from '../interface';
import { Marca } from '@/marcas/interface';

function buscarNomeMarcaPorId(id: string, marcas: Marca[]): string {
    const selectedMarca = marcas.find(marca => marca.id === id);
    if (selectedMarca)
      return selectedMarca.nome_marca
    else return ''
}

function GridProdutos({ produtos, marcas }: GridProdutosProps) {
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
              <td>{buscarNomeMarcaPorId(produto.id_marca, marcas)}</td>
              <td>{produto.data_cadastro}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GridProdutos;
