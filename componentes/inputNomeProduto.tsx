import { useGlobalContext } from "@/context";
import { ChangeEvent } from "react";

//inputDate.tsx
export default function ProdutoInput() {
    const { jsonData, setData } = useGlobalContext();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...jsonData,
            produto: event.target.value,
        });
    };

    return (
        <div className="form-group mt-2 mb-2">
            <label htmlFor={'nomeProduto'} className="text-white">Nome do Produto</label>
            <input
                type="text"
                id="nomeProduto" name="nomeProduto" placeholder="Nome do produto"
                className={`form-control bg-secondary text-white border border-secondary`}
                value={jsonData.produto}
                onChange={handleChange}
            />
        </div>
    );
};