// import { useGlobalContext } from "@/context";
import { ChangeEvent } from "react";

//inputDate.tsx
export default function NomeInput() {
    // const { jsonData, setData } = useGlobalContext();

    // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     setData({
    //         ...jsonData,
    //         nomeCliente: event.target.value,
    //     });
    // };

    return (
        <div className="form-group mt-2 mb-2">
            <label htmlFor={'nomeCliente'} className="text-white">Nome Completo</label>
            <input
                type="text"
                id="nomeCliente" name="nomecliente" placeholder="Nome completo"
                className={`form-control bg-secondary text-white border border-secondary`}
                // value={jsonData.nomeCliente}
                // onChange={handleChange}
            />
        </div>
    );
};