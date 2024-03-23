import { ChangeEvent } from "react";
import { useOrcamentoContext } from "../context";

export default function ComboBoxFormaPagamento() {
    const { orcamentoSelecionada, selecionarOrcamento } = useOrcamentoContext();

    const handleFPagamentoChange = (event: ChangeEvent<HTMLSelectElement>) => {
        selecionarOrcamento({ ...orcamentoSelecionada, pagamento: event?.target.value })
    }
    return (
        <div className="text-white form-group m-2">
            <label htmlFor='formaPagamento' className='text-white'>Forma de Pagamento:</label>
            <select
                id='formaPagamento'
                className="form-select bg-secondary text-white border-secondary"
                name='formaPagamento'
                value={orcamentoSelecionada.pagamento}
                onChange={handleFPagamentoChange}
            >
                <option value="">Selecione</option>
                <option value="DEPÓSITO">Depósito Bancário</option>
                <option value="PIX">PIX</option>
                <option value="CARTÃO">Cartão de Crédito</option>
            </select>
        </div>
    );
}