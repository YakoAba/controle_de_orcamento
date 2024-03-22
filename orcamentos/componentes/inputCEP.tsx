
import MaskedInput from 'react-text-mask';
import { useOrcamentoContext } from '../context';

export default function CEPInput() {
  const { orcamentoSelecionada, selecionarOrcamento } = useOrcamentoContext();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const CEP = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    const isValid = validarCEP(CEP);
    selecionarOrcamento({ ...orcamentoSelecionada, Cep: event.target.value })
  };

  const validarCEP = (cep: string) => {
    return (!cep || cep.length !== 8);
  };

  return (
    <div className="form-group m-2">
      <label htmlFor={'cepEnvio'} className="text-white">{'CEP'}</label>
      <MaskedInput
        mask={[/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
        id='cepEnvio'
        name='cep'
        className='form-control bg-secondary text-white border-secondary'
        onChange={handleChange}
        guide={false} // Não mostra a máscara até que o usuário comece a digitar
        placeholder="Digite o CPF"
        value={orcamentoSelecionada.Cep}
      />
    </div>

  );
};
