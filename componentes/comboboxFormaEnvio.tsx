
import { useOrcamentoContext } from '../orcamentos/context';
export default function ComboBoxFormaEnvio() {
    const { orcamentoSelecionada, selecionarOrcamento } = useOrcamentoContext()
  

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        selecionarOrcamento({...orcamentoSelecionada, forma_envio: event.target.value})
    };

    return (
        <div className="form-group mt-2 mb-2">
            <label htmlFor='formaEnvio' className='text-white '>Enviado por:</label>
            <select
                id='formaEnvio'
                className="form-select bg-secondary text-white border-secondary"
                name='formaEnvio'
                value={orcamentoSelecionada.forma_envio}
                onChange={handleChange}>
                <option value="">Selecione</option>
                <option value="Transportadora">Transportadora</option>
                <option value="Correios">Correios</option>
                <option value="Frota Propria">Frota Própria</option>
                <option value="Logistica Propria">Logística Própria</option>
            </select>
            {/* <div id="detalhesPagamento"></div> */}
        </div>
    );
}
