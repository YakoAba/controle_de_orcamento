import { ChangeEvent } from 'react';
import { useOrcamentoContext } from '../context';
export default function ValidadeInput() {
    const { orcamentoSelecionada, selecionarOrcamento } = useOrcamentoContext();
    const handleValidadeChange = (event: ChangeEvent<HTMLInputElement>) => {
      selecionarOrcamento({ ...orcamentoSelecionada, validade: event.target.value })
    };
    return (
        <div className="form-group mt-2 mb-2">
            <label htmlFor='validadeOrcamento' className="text-white">Validade do Orçamento</label>
            <input
                type="date"
                id="validadeOrcamento"
                name="validadeOrcamento"
                className={`form-control bg-secondary text-white border border-secondary`}
                value={orcamentoSelecionada.validade}
                onChange={handleValidadeChange}
            />
        </div>
    );
};