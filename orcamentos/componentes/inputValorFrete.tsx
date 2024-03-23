import { ChangeEvent } from "react";
import { useOrcamentoContext } from "../context";

//inputDate.tsx
export default function ValorFreteInput() {
    const { orcamentoSelecionada, selecionarOrcamento } = useOrcamentoContext();
    const handleVFreteChange = (event: ChangeEvent<HTMLInputElement>) => {
        selecionarOrcamento({ ...orcamentoSelecionada, vfrete: event.target.value })
    };

    return (
        <div className="form-group m-2 text-white">
            <label htmlFor="valorFrete">Valor do Frete:</label>
            <input type="number"
                id="valorFrete"
                step="0.1"
                value={orcamentoSelecionada.vfrete}
                onChange={handleVFreteChange}
                className="form-control bg-secondary text-white border-secondary " name="valorfrete" />
        </div>
    );
};