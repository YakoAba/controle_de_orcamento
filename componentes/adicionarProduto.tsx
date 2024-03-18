import React, { useEffect, useState } from 'react';
import { Produto, useGlobalContext } from '@/context'; // Importe o tipo Produto e useGlobalContext do seu contexto
import { Modal, Button, Form } from 'react-bootstrap';
import ProdutoOrcamento from './modal/produtoOrcamentoModal';

const AdicionarProduto: React.FC = () => {
  const { jsonData, setData } = useGlobalContext(); // Obtém dados globais e função para atualizá-los
  const [produtos, setProdutos] = useState<Produto[]>(jsonData.produtos); // Estado local para produtos
  const [showModal, setShowModal] = useState(false);


  // Função para adicionar um novo produto
  const adicionarProduto = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário
    const numeroProduto = produtos.length + 1;
    const novoProdutoComId = { ...novoProduto, id: `produto${numeroProduto}` };
    setProdutos([...produtos, novoProdutoComId]);
    setData({ ...jsonData, produtos: [...produtos, novoProdutoComId] });
    handleClose();
  };

  const handleClose = () => {
    setNovoProduto({
      id: '',
      nome: '',
      marca: '',
      quantidade: 0,
      valorUnitario: 0,
      total: 0,
    });
    setShowModal(false);
  };

  const handleShow = () => setShowModal(true);

  // Função para remover um produto pelo ID
  const removerProduto = (id: string) => {
    const novosProdutos = produtos.filter((produto) => produto.id !== id);
    setProdutos(novosProdutos); // Atualiza o estado local de produtos
    setData({ ...jsonData, produtos: novosProdutos }); // Atualiza dados globais
  };

  const handleInputChange = (
    field: keyof Produto,
    value: string | number
  ) => {
    setNovoProduto({ ...novoProduto, [field]: value });
  };

  // useEffect(() => {
  //   novoProduto.total = novoProduto.valorUnitario * novoProduto.quantidade;
  // }, [novoProduto]);

  return (
    <div>
      <div id="produtos">
        {produtos.map((produto) => (
          <div key={produto.id} className="produto ">
            <div className="d-flex d-flex-column gap-2 align-items-center">
              <input
                type="text"
                className="form-control bg-secondary text-white border-secondary"
                placeholder="Nome do Produto"
                value={produto.nome}
                onChange={(e) =>
                  handleInputChange('nome', e.target.value)
                }
              />
              <input
                type="text"
                className="form-control bg-secondary text-white border-secondary"
                placeholder="Marca"
                value={produto.marca}
                onChange={(e) =>
                  handleInputChange('marca', e.target.value)
                }
              />
              <input
                type="number"
                className="form-control bg-secondary text-white border-secondary"
                placeholder="Quantidade"
                value={produto.quantidade}
                onChange={(e) =>
                  handleInputChange('quantidade', +e.target.value)
                }
              />
              <input
                type="number"
                className="form-control bg-secondary text-white border-secondary"
                placeholder="Valor Unitário"
                value={produto.valorUnitario}
                onChange={(e) =>
                  handleInputChange('valorUnitario', +e.target.value)
                }
              />
              <span
                className="removerProduto"
                onClick={() => removerProduto(produto.id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-trash3" viewBox="0 0 16 16">
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                </svg>
              </span>
              <span className="text-white totalProduto">Total: {produto.total}</span>
            </div>
          </div>
        ))}
      </div>
      {/* Botão "Adicionar Produto" que dispara a função adicionarProduto */}
      {/* <button className="btn btn-primary mt-3" id="botaoAdicionar" onClick={adicionarProduto}>Adicionar Produto</button> */}
      <Button variant="primary" className="btn btn-primary mt-3" onClick={handleShow}>
        Adicionar Produto
      </Button>
      <ProdutoOrcamento
        show={showModal}
        onAdicionar={adicionarProduto}
        onClose={handleClose} />
    </div>
  );
};

export default AdicionarProduto;