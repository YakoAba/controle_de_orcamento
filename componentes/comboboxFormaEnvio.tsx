import { useGlobalContext } from "@/context";

export default function ComboBoxFormaEnvio() {
    const { jsonData, setData } = useGlobalContext();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setData({
            ...jsonData,
            formaEnvio: event.target.value,
        });
    };

    return (
        <div className="form-group mt-2 mb-2">
            <label htmlFor='formaEnvio' className='text-white '>Enviado por:</label>
            <select
                id='formaEnvio'
                className="form-select bg-secondary text-white border-secondary"
                name='formaEnvio'
                value={jsonData.formaEnvio}
                onChange={handleChange}>
                <option value="">Selecione</option>
                <option value="Transportadora">Transportadora</option>
                <option value="Correios">Correios</option>
                <option value="Frota Propria">Frota Própria</option>
                <option value="Logistica Propria">Logística Própria</option>
            </select>
            {/* <div id="detalhesPagamento"></div> */}
        </div>
    );
}
