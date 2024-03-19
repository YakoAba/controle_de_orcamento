import React from "react";
import { ProdutoButtonProps } from "../interface";


export default function ProdutoButton({ onClick }: ProdutoButtonProps) {
    return (
        <button type="button" onClick={onClick} className="btn btn-primary mt-3" id="botao_cadastrar_marca">
            Cadastrar Produto
        </button>
    );
}