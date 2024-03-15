import { useGlobalContext } from "@/pages/context";

export default function ComboBoxTipoPessoa() {
  const { jsonData, setData } = useGlobalContext();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setData({
      ...jsonData,
      tipoCliente: event.target.value,
    });
  };

  return (
    <div className="form-group mt-2 mb-2">
      <label htmlFor='tipoCliente' className='text-white'>Tipo de Cliente:</label>
      <select
        id='tipoCliente'
        className="form-select bg-secondary text-white border-secondary"
        name='tipoCliente'
        value={jsonData.tipoCliente}
        onChange={handleChange}>
        <option value="">Selecione</option>
        <option value="pf">Pessoa Física</option>
        <option value="pj">Pessoa Jurídica</option>
      </select>
    </div>
  );
}
