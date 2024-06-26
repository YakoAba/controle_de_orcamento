import React from "react";
import { MarcaButtonProps } from "../interface";


export default function MarcaButton({ onClick }: MarcaButtonProps) {
    return (
        <button type="button" onClick={onClick} className="btn btn-primary mt-3" id="botao_cadastrar_marca">
            Cadastrar Marca
        </button>
    );
}