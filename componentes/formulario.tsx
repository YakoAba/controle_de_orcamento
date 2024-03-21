//formulario.tsx

import { MarcaProvider } from "@/marcas/context";
import { ProdutoProvider } from "@/produtos/context";
import { ClienteProvider } from "@/clientes/context"
import { useOrcamentoContext } from "@/orcamentos/context";

export default function FormularioOrcamento({ dados, produtos, marca, produto, cliente }: any) {
  const { orcamentoSelecionada } = useOrcamentoContext();

  function abrirNovaAbaComJson(json: string) {
    // Cria a URL com o JSON como parâmetro
    const url = `/layout.html?json=` + json;

    // Abre a nova aba
    window.open(url, "_blank");
  }

  function enviarDadosParaNodeJS() {
    console.log(orcamentoSelecionada)
    // console.log("Enviando dados para o Node.js:", json);
    fetch("/api/orcamentos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip, compress, br",
      },
      body: JSON.stringify(orcamentoSelecionada),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Falha na requisição: " + response.statusText);
        }
        return response.json(); // Converte a resposta para JSON
      })
      .then((data) => {
        console.log("Resposta do servidor:", data);
        if (data.mensagens && data.mensagens.length > 0) {
          data.mensagens.forEach((msg: { erro: any; }) => {
            // console.log(msg.mensagem);
            if (msg.erro) console.error(msg.erro);
            else abrirNovaAbaComJson(JSON.stringify({}));
          });
        }
      })
      .catch((error) => console.error("Erro na requisição:", error));
  }

  return (
    <div className="container mt-1 p-1">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="clientes-tab" data-bs-toggle="tab" data-bs-target="#clientes" type="button"
            role="tab" aria-controls="clientes" aria-selected="false">Cadastro de Clientes:</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="marca-tab" data-bs-toggle="tab" data-bs-target="#marca" type="button"
            role="tab" aria-controls="marca" aria-selected="false">Cadastro de Marcas</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="produto-tab" data-bs-toggle="tab" data-bs-target="#produto" type="button"
            role="tab" aria-controls="produto" aria-selected="false">Cadastro Produtos</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="dados-tab" data-bs-toggle="tab" data-bs-target="#dados"
            type="button" role="tab" aria-controls="dados" aria-selected="true">Orçamentos</button>
        </li>
        {/* <li className="nav-item" role="presentation">
          <button className="nav-link" id="produtos-tab" data-bs-toggle="tab" data-bs-target="#produtos"
            type="button" role="tab" aria-controls="produtos" aria-selected="false">Produtos</button>
        </li> */}
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="produtos-tab" data-bs-toggle="tab" data-bs-target="#produtos" type="button"
            role="tab" aria-controls="produtos" aria-selected="false">Produtos</button>
        </li>
        {/* <li className="nav-item" role="presentation">
          <button className="nav-link" id="envios-tab" data-bs-toggle="tab" data-bs-target="#envios" type="button"
            role="tab" aria-controls="envios" aria-selected="false">Envios</button>
        </li> */}
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="dados" role="tabpanel" aria-labelledby="dados-tab">
          {dados}
          <button type="button" onClick={() => enviarDadosParaNodeJS()} className="btn btn-primary mt-3" id="botaoImprimir">Imprimir</button>
        </div>
        <div className="tab-pane fade" id="produtos" role="tabpanel" aria-labelledby="produtos-tab">
          {produtos}
          <button type="button" onClick={() => enviarDadosParaNodeJS()} className="btn btn-primary mt-3" id="botaoImprimir">Imprimir</button>
        </div>
        <div className="tab-pane fade" id="marca" role="tabpanel" aria-labelledby="marca-tab">
          <MarcaProvider>{marca}</MarcaProvider>
        </div>
        <div className="tab-pane fade" id="clientes" role="tabpanel" aria-labelledby="clientes-tab">
          <ClienteProvider>{cliente}</ClienteProvider>
        </div>
        <div className="tab-pane fade" id="produto" role="tabpanel" aria-labelledby="produto-tab">
          <ProdutoProvider>{produto}</ProdutoProvider>
        </div>
      </div>
    </div>
  );
};

