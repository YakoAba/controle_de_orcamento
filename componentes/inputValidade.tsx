import { useGlobalContext } from "@/context";
import { ChangeEvent } from "react";

export default function ValidadeInput() {
    const { jsonData, setData } = useGlobalContext();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...jsonData,
            validadeOrcamento: event.target.value,
        });
    };

    return (
        <div className="form-group mt-2 mb-2">
            <label htmlFor='validadeOrcamento' className="text-white">Validade do Orçamento</label>
            <input
                type="date"
                id="validadeOrcamento"
                name="validadeOrcamento"
                className={`form-control bg-secondary text-white border border-secondary`}
                value={jsonData.validadeOrcamento}
                onChange={handleChange}
            />
        </div>
    );
};