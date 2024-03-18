import { Produto } from '@/context';
import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

interface ProdutoOrcamentoProps {
  show: boolean;
  onAdicionar: (event: React.FormEvent<HTMLButtonElement>) => void;
  onClose: () => void;
}

export default function ProdutoOrcamentoModal({ show, onAdicionar, onClose }:ProdutoOrcamentoProps) {
    const handleInputChange = (
        field: keyof Produto,
        value: string | number
      ) => {
        // setNovoProduto({ ...novoProduto, [field]: value });
      };
      
  return (
    <Modal className="bg-light-silver" show={show} onHide={onClose}>
      <Modal.Header className="bg-dark" closeButton>
        <Modal.Title className="text-white">Adicionar Produto</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark ">
        <Form.Group controlId="formNomeProdutoModal mb-0">
            <label className="text-white" htmlFor={'nomeProduto'}>Nome:</label>
            <input
                id='nomeProduto'
                type="text"
                className="form-control bg-secondary text-white border-secondary mt-2 mb-2"
                placeholder="Nome do Produto"
                // value={novoProduto.nome}
                onChange={(e) =>
                    handleInputChange('nome', e.target.value)
                } />
            <label className="text-white" htmlFor={'nomeProduto'}>Marca:</label>
            <input
                id='marcaProduto'
                type="text"
                className="form-control bg-secondary text-white border-secondary mt-2 mb-2"
                placeholder="Marca"
                // value={novoProduto.marca}
                onChange={(e) =>
                    handleInputChange('marca', e.target.value)
                }
            />
            <label className="text-white" htmlFor={'quantidadeProduto'}>Quantidade:</label>
            <input
                id='quantidadeProduto'
                type="number"
                className="form-control bg-secondary text-white border-secondary mt-2 mb-2"
                placeholder="Quantidade"
                // value={novoProduto.quantidade}
                onChange={(e) =>
                    handleInputChange('quantidade', +e.target.value)
                }
            />
            <label className="text-white" htmlFor={'valorProduto'}>Valor:</label>
            <input
                id='valorProduto'
                type="number"
                className="form-control bg-secondary text-white border-secondary mt-2 mb-2 "
                placeholder="Valor Unitário"
                // value={novoProduto.valorUnitario}
                onChange={(e) =>
                    handleInputChange(
                        'valorUnitario',
                        +e.target.value
                    )
                }
            />
        </Form.Group>
        {/* <Button variant="primary" className="btn btn-primary mt-3 mx-1" onClick={adicionarProduto}>
            Adicionar
        </Button> */}
        <Button variant="secondary" className="btn btn-primary mt-3 mx-1" onClick={onClose}>
            Fechar
        </Button>
    </Modal.Body>
    </Modal>
  );
}