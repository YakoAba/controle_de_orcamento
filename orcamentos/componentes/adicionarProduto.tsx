import React, { useState } from "react";
import ProdutoOrcamento from "../modal/produtoOrcamentoModal";
import { Button } from "react-bootstrap";
import { useOrcamentoContext } from "../context";
import { Item } from "../interface";

export default function AdicionarProduto() {
  const { orcamentoSelecionada, selecionarOrcamento, item, setItem } =
    useOrcamentoContext();
  const [showModal, setShowModal] = useState(false);

  // Função para adicionar um novo produto
  const adicionarProduto = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    let numeroItem;

    if (!orcamentoSelecionada) return; // Sai da função se orcamentoSelecionada for nulo ou indefinido

    // Verifica se orcamentoSelecionada.itens existe
    if (!orcamentoSelecionada.itens) {
      // Se não existir, cria um novo array com o item atual
      selecionarOrcamento({
        ...orcamentoSelecionada,
        itens: [{ ...item, id: "Item1" }],
      });
      numeroItem = 1; // Define o próximo número de item como 2
    } else {
      // Se existir, calcula o número do próximo item
      numeroItem = orcamentoSelecionada.itens.length + 1;
      orcamentoSelecionada.itens.push({ ...item, id: `Item${numeroItem}` }); // Adiciona o novo item ao array de itens
      selecionarOrcamento({ ...orcamentoSelecionada }); // Atualiza orcamentoSelecionada após adicionar o item
    }

    handleClose(); // Fecha o modal ou faz outras ações necessárias após adicionar o item
  };

  const handleClose = () => {
    setItem({} as Item);
    setShowModal(false);
  };

  const handleShow = () => setShowModal(true);

  // Função para remover um produto pelo ID
  const removerProduto = (id: string) => {
    const novosItems = orcamentoSelecionada.itens.filter(
      (iten) => iten.id !== id
    );
    selecionarOrcamento({ ...orcamentoSelecionada, itens: novosItems }); // Atualiza o estado local de produtos
  };

  return (
    <div>
      <table className="produto-table">
        <thead>
          <tr>
            <th style={{ width: "35%", color: "white" }}>Nome do Produto:</th>
            <th style={{ width: "23%", color: "white" }}>Marca:</th>
            <th style={{ width: "12%", color: "white" }}>Quantidade:</th>
            <th style={{ width: "12%", color: "white" }}>Valor Unitário:</th>
            <th style={{ width: "15%", color: "white" }}>Total:</th>
          </tr>
        </thead>
        <tbody id="produtos">
          {orcamentoSelecionada?.itens &&
            orcamentoSelecionada.itens.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="text"
                    className="form-control bg-secondary border-secondary m-1 w-100"
                    placeholder="Nome do Produto"
                    value={item.nome}
                    // onChange={(e) => handleInputChange('nome_produto', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control bg-secondary border-secondary m-1 w-100"
                    placeholder="Marca"
                    value={item.marca}
                    // onChange={(e) => handleInputChange('nome_marca', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control bg-secondary border-secondary m-1 w-100"
                    placeholder="Quantidade"
                    value={item.quantidade}
                    // onChange={(e) => ({ ...item, quantidade: e + e.target.value })}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control bg-secondary border-secondary m-1 w-100"
                    placeholder="Valor Unitário"
                    value={item.valorUnitario}

                    // onChange={(e) => ({ ...item, quantidade: +e.target.value })}
                  />
                </td>
                <td>
                  <span className="form-control bg-secondary text-white border-secondary m-1 w-100 ">
                    {item.total}
                  </span>
                </td>
                <td>
                  <span
                    className="removerProduto mt-2 d-flex justify-content-center align-items-center"
                    onClick={() => removerProduto(item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#fff"
                      className="bi bi-trash3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg>
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <Button
        variant="primary"
        className="btn btn-primary mt-3"
        onClick={handleShow}
      >
        Adicionar Produto
      </Button>
      <ProdutoOrcamento
        show={showModal}
        onAdicionar={adicionarProduto}
        onClose={handleClose}
        novoItem={item}
        setItem={setItem}
      />
    </div>
  );
}
