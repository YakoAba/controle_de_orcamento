import { NomeInputProps } from "../interface";

export default function ProdutoInput({ value, onChange }: NomeInputProps) {

    return (
        <div className="form-group mt-2 mb-2">
            <label htmlFor={'nomeProduto'} className="text-white">Nome do Produto</label>
            <input
                type="text"
                id="nomeProduto" name="nomeProduto" placeholder="Nome do produto"
                className={`form-control bg-secondary text-white border border-secondary`}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};