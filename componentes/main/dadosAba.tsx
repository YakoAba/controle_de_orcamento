import ComboBoxTipoPessoa from "../../clientes/componentes/comboboTipoPessoa";
import CPFInput from "../../clientes/componentes/inputCpf";
import NomeInput from "../inputNome";
import DataInput from "../inputData";
import ValidadeInput from "../inputValidade";

export default function AbaDados() {
    return (<>
        <div className="d-flex flex-row gap-5 pl-0 pr-0">
            <DataInput/>
            <ValidadeInput/>
        </div>
        {/* <CPFInput /> */}
        <NomeInput/>
        {/* <ComboBoxTipoPessoa/> */}
    </>
    );
}
