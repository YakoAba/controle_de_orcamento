import AdicionarProduto from "../adicionarProduto";
import FileFichaTecnica from "../fileFichaTecnica";
import FichaTecnicaTexto from "../textareaFichaTecnica";

export default function AbaProdutos() {
  return (<>
    <FichaTecnicaTexto />
    <FileFichaTecnica />
    <AdicionarProduto />
    </>
  );
}
