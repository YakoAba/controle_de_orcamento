import React, {  } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Item } from '../interface';
import ComboboxProdutos from '../componentes/comboboxProdutos';

interface ProdutoOrcamentoProps {
  show: boolean;
  onAdicionar: (event: React.FormEvent<HTMLButtonElement>) => void;
  onClose: () => void;
  novoItem: Item;
  setItem: (item: Item) => void
}

export default function ProdutoOrcamentoModal({ show, onAdicionar, onClose, novoItem, setItem }:ProdutoOrcamentoProps) {    
  return (
    <Modal className="bg-light-silver" show={show} onHide={onClose}>
      <Modal.Header className="bg-dark" closeButton>
        <Modal.Title className="text-white">Adicionar Produto</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark ">
        <Form.Group controlId="formNomeProdutoModal mb-0">
            <ComboboxProdutos/> 
            <label className="text-white" htmlFor={'quantidadeProduto'}>Quantidade:</label>
            <input
                id='quantidadeProduto'
                type="number"
                className="form-control bg-secondary text-white border-secondary mt-2 mb-2"
                placeholder="Quantidade"
                value={novoItem.quantidade}
                onChange={(e) =>
                    setItem({...novoItem,quantidade: Number(e.target.value)})
                }
            />
            <label className="text-white" htmlFor={'valorProduto'}>Valor:</label>
            <input
                id='valorProduto'
                type="number"
                className="form-control bg-secondary text-white border-secondary mt-2 mb-2 "
                placeholder="Valor Unitário"
                value={novoItem.valorUnitario}
                onChange={(e) =>
                  setItem({...novoItem,valorUnitario: Number(e.target.value)})
                }
            />
        </Form.Group>
        <Button variant="primary" className="btn btn-primary mt-3 mx-1" onClick={onAdicionar}>
            Adicionar
        </Button>
        <Button variant="secondary" className="btn btn-primary mt-3 mx-1" onClick={onClose}>
            Fechar
        </Button>
    </Modal.Body>
    </Modal>
  );
}
