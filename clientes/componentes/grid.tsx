import React from 'react';
import { GridClientesProps } from '../interface';

const GridClientes: React.FC<GridClientesProps> = ({ clientes }) => {
  return (
    <div className="container mt-4">
      <legend style={{ fontSize: 'large', color: 'white' }}>Grid de Marcas</legend>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome do Cliente</th>
            <th>Tipo de Cliente</th>
            <th>CPF do Cliente</th>
            <th>Data de Criação</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente, index) => (
            <tr key={cliente.id} style={{ backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#e9ecef' }}>
              <td>{cliente.id}</td>
              <td>{cliente.nome_cliente}</td>
              <td>{cliente.tipo_cliente}</td>
              <td>{cliente.cpf_cliente}</td>
              <td>{cliente.data_cadastro}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GridClientes;
