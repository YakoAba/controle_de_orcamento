
import MaskedInput from 'react-text-mask';
import { useOrcamentoContext } from '../context';

const faixasCEP = {
  "AC": ["69900", "69999"],
  "AL": ["57000", "57999"],
  "AP": ["68900", "68999"],
  "AM": ["69000", "69299"],
  "BA": ["40000", "48999"],
  "CE": ["60000", "63999"],
  "DF": ["70000", "73699"],
  "ES": ["29000", "29999"],
  "GO": ["72800", "76799"],
  "MA": ["65000", "65999"],
  "MT": ["78000", "78899"],
  "MS": ["79000", "79999"],
  "MG": ["30000", "39999"],
  "PA": ["66000", "68899"],
  "PB": ["58000", "58999"],
  "PR": ["80000", "87999"],
  "PE": ["50000", "56999"],
  "PI": ["64000", "64999"],
  "RJ": ["20000", "28999"],
  "RN": ["59000", "59999"],
  "RS": ["90000", "99999"],
  "RO": ["76800", "76999"],
  "RR": ["69300", "69399"],
  "SC": ["88000", "89999"],
  "SP": ["01000", "19999"],
  "SE": ["49000", "49999"],
  "TO": ["77000", "77999"]
};



export default function CEPInput() {
  const { orcamentoSelecionada, selecionarOrcamento } = useOrcamentoContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const CEP = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    const isValid = validarCEP(CEP);
    
    if (isValid) {
      // Verifica em qual UF o CEP se encaixa
      let uf = null; // Inicializa com null
      
      Object.entries(faixasCEP).forEach(([ufKey, faixa]) => {
        const [faixaInicio, faixaFim] = faixa;
        if (CEP >= faixaInicio && CEP <= faixaFim) {
          uf = ufKey;
        }
      });
  
      selecionarOrcamento({ ...orcamentoSelecionada, Cep: event.target.value, Uf: uf || '' });
    } else {
      selecionarOrcamento({ ...orcamentoSelecionada, Cep: event.target.value, Uf:  '' });
    }
  };

// // Se encontrou a UF, seleciona no dropdown
// if (uf) {
//   document.getElementById('ufEnvio').value = uf;
// } else {
//   document.getElementById('ufEnvio').value = ''; // Caso não esteja em nenhuma faixa, seleciona "Selecione..."
// }}


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
