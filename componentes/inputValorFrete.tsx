import { useGlobalContext } from "@/context";
import { ChangeEvent } from "react";

//inputDate.tsx
export default function ValorFreteInput() {
    const { jsonData, setData } = useGlobalContext();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...jsonData,
            valorFrete: event.target.value,
        });
    };
    
    return (
        <div className="form-group mt-2 mb-2">
            <label htmlFor="valorFrete">Valor do Frete:</label>
            <input type="number" id="valorFrete" step="0.01" value={jsonData.valorFrete} onChange={handleChange}
                className="form-control bg-secondary text-white border-secondary " name="valorfrete" />
        </div>
    );
};