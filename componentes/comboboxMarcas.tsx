import { useGlobalContext } from "@/context";

export default function ComboBoxMarcas() {
  const { jsonData, setData } = useGlobalContext();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setData({
      ...jsonData,
      marca: event.target.value,
    });
  };

  return (
    <div className="form-group mt-2 mb-2">
      <label htmlFor='tipoCliente' className='text-white'>Marca do Produto:</label>
      <select
        id='tipoCliente'
        className="form-select bg-secondary text-white border-secondary"
        name='tipoCliente'
        value={jsonData.marca}
        onChange={handleChange}>
        <option value="">Selecione</option>
        <option value="pf">Marca 1</option>
        <option value="pj">Marca 2</option>
      </select>
    </div>
  );
}
