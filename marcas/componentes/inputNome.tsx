import { MarcaInputProps } from "../interface";

export default function MarcaInput({ value, onChange }: MarcaInputProps) {
  return (
    <div className="form-group mt-2 mb-2">
      <label htmlFor={'nomeMarca'} className="text-white">Nome</label>
      <input
        type="text"
        id="nomeMarca" name="nomeMarca" placeholder="Nome da marca"
        value={value} // Valor controlado pelo componente pai
        onChange={onChange} // Função de callback para atualizar o valor
        className={`form-control bg-secondary text-white border border-secondary`}
      />
    </div>
  );
};