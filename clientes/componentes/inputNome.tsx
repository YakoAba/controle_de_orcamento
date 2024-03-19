import { InputProps } from "../interface";

export default function NomeInput({value, onChange}:InputProps) {
    return (
        <div className="form-group mt-2 mb-2">
            <label htmlFor={'nomeCliente'} className="text-white">Nome Completo</label>
            <input
                type="text"
                id="nomeCliente" name="nomecliente" placeholder="Nome completo"
                className={`form-control bg-secondary text-white border border-secondary`}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};