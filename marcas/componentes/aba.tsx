import MarcaButton from "./button";
import MarcaInput from "./inputNome";

export default function Aba() {
  return (
    <fieldset className="mt-3 mb-3 text-white">
      <legend style={{ fontSize: 'large', color: 'white' }}>Cadastro de Marcas</legend>
      <MarcaInput />
      <MarcaButton />
    </fieldset>
  );
}