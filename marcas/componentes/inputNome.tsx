// import { useGlobalContext } from "@/context";
// import { ChangeEvent } from "react";

//inputDate.tsx
export default function MarcaInput() {
    // const { jsonData, setData } = useGlobalContext();

    // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     setData({
    //         ...jsonData,
    //         marca: event.target.value,
    //     });
    // };

    return (
        <div className="form-group mt-2 mb-2">
            <label htmlFor={'nomeMarca'} className="text-white">Nome</label>
            <input
                type="text"
                id="nomeMarca" name="nomeMarca" placeholder="Nome da marca"
                className={`form-control bg-secondary text-white border border-secondary`}
                // value={jsonData.marca}
                // onChange={handleChange}
            />
        </div>
    );
};