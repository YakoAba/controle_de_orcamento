import MaskedInput from 'react-text-mask';
import { InputProps } from '../interface';
// import { useGlobalContext } from "@/context";

function CNPJInput({ value, onChange }: InputProps) {

  return (
    <div className="form-group mt-2 mb-2">
      <label htmlFor='cpfcliente' className="text-white">CNPJ</label>
      <MaskedInput
        mask={[
          /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/',
          /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/
        ]}
        id='cnpjcliente'
        name='cnpjcliente'
        className="form-control bg-secondary text-white border border-secondary"
        guide={false} // Não mostra a máscara até que o usuário comece a digitar
        placeholder="Digite o CNPJ"
        onChange={onChange}
        value={value} />
    </div>
  );
}

export default CNPJInput;

