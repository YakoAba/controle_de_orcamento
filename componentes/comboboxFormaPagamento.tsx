import { useGlobalContext } from "@/context";

export default function ComboBoxFormaPagamento() {
    const { jsonData, setData } = useGlobalContext();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setData({
            ...jsonData,
            formaPagamento: event.target.value,
        });
    };

    return (
        <div className="text-white form-group ">
            <label htmlFor='formaPagamento' className='text-white'>Forma de Pagamento:</label>
            <select
                id='formaPagamento'
                className="form-select bg-secondary text-white border-secondary"
                name='formaPagamento'
                value={jsonData.formaPagamento}
                onChange={handleChange}
            >
                <option value="">Selecione</option>
                <option value="deposito">Depósito Bancário</option>
                <option value="pix">PIX</option>
                <option value="cartao">Cartão de Crédito</option>
            </select>
            {/* <div id="detalhesPagamento"></div> */}
        </div>
    );
}