import React from "react";
import { ClienteButtonProps } from "../interface";

export default function ClieteButton({ onClick }: ClienteButtonProps) {
    return (
        <button type="button" onClick={onClick} className="btn btn-primary mt-3" id="botao_cadastrar_marca">
            Cadastrar Cliente
        </button>
    );
}