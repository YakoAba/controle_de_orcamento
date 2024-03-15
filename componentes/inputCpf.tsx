import MaskedInput from 'react-text-mask';
import { useGlobalContext } from "@/context";

const CPFInput: React.FC = () => {

  const { jsonData, setData } = useGlobalContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cpf = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    const isValid = validarCPF(cpf);
    setData({
      ...jsonData,
      cpfcliente: event.target.value,
    });
  };

  const validarCPF = (cpf: string) => {
    if (!cpf || cpf.length !== 11) return false;

    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    remainder = (sum * 10) % 11;

    if ((remainder === 10) || (remainder === 11)) remainder = 0;
    if (remainder !== parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    remainder = (sum * 10) % 11;

    if ((remainder === 10) || (remainder === 11)) remainder = 0;
    if (remainder !== parseInt(cpf.substring(10, 11))) return false;

    return true;
  };

  return (
    <div className="form-group mt-2 mb-2">
      <label htmlFor='cpfcliente' className="text-white">CPF</label>
      <MaskedInput
        mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
        id='cpfcliente'
        name='cpfcliente'
        className="form-control bg-secondary text-white border border-secondary"
        guide={false} // Não mostra a máscara até que o usuário comece a digitar
        placeholder="Digite o CPF"
        value={jsonData.cpfcliente}
        onChange={handleChange}
      />
    </div>
  );
};

export default CPFInput;

