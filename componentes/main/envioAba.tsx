import ComboBoxFormaEnvio from "../comboboxFormaEnvio";
import ComboBoxFormaPagamento from "../comboboxFormaPagamento";
import ComboBoxUF from "../comboboxUF"
import CEPInput from "../inputCEP";
import ValorFreteInput from "../inputValorFrete";

export default function AbaEnvio() {
    return (<>
        <fieldset className="mt-3 mb-3 text-white">
            <ComboBoxFormaEnvio />
            <CEPInput />
            <ComboBoxUF />
            <ValorFreteInput />
            <ComboBoxFormaPagamento />
        </fieldset>
    </>
    );
}
