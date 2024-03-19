import { useGlobalContext } from "@/context";
import { ChangeEvent } from "react";

interface DataInputProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }
  

export default function ValidadeInput({ value, onChange }:DataInputProps) {

    return (
        <div className="form-group mt-2 mb-2">
            <label htmlFor='validadeOrcamento' className="text-white">Validade do Orçamento</label>
            <input
                type="date"
                id="validadeOrcamento"
                name="validadeOrcamento"
                className={`form-control bg-secondary text-white border border-secondary`}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};