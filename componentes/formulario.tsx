import { MarcaProvider, useMarcaContext } from "@/marcas/context";
import { ProdutoProvider, useProdutoContext } from "@/produtos/context";
import { ClienteProvider, useClienteContext } from "@/clientes/context";
import { useOrcamentoContext } from "@/orcamentos/context";
import { useEffect, useState } from "react";
import Cookies from "js-cookie"; // Importando o Cookies do pacote js-cookie

export default function FormularioOrcamento({
  dados,
  produtos,
  marca,
  produto,
  cliente,
}: any) {
  const { orcamentoSelecionada, contarOrcamentos } = useOrcamentoContext();
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    const name = Cookies.get("log"); // Corrigindo a obtenção do cookie
    setAdmin(name === "admin");
    setUser(name === "user");
  }, []);

  function abrirNovaAbaComJson(json: string) {
    // Cria a URL com o JSON como parâmetro
    const url = `/relatorio?json=` + json;
    // Abre a nova aba
    window.open(url, "_blank");
  }

  function enviarDadosParaNodeJS() {
    orcamentoSelecionada.order = contarOrcamentos() + 1;
    console.log(
      "Enviando dados para o Node.js:",
      JSON.stringify(orcamentoSelecionada)
    );
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
        abrirNovaAbaComJson(JSON.stringify(orcamentoSelecionada));
        // if (data.id.mensagens && data.id.mensagens.length > 0) {
        //   data.id.mensagens.forEach((msg: { erro: any; }) => {
        //     if (msg.erro) console.error(msg.erro);
        //     orcamentoSelecionada._id = data.id.id;
        //     abrirNovaAbaComJson(JSON.stringify(orcamentoSelecionada));
        //   });
        // }
      })
      .catch((error) => console.error("Erro na requisição:", error));
  }


  return (
    (admin || user) && (
      <div className="container mt-1 p-1">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          {admin && (
            <>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="clientes-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#clientes"
                  type="button"
                  role="tab"
                  aria-controls="clientes"
                  aria-selected="false"
                  // onClick={() => handleAbaClicada("Cadastro de Clientes")}
                >
                  Cadastro de Clientes
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="marca-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#marca"
                  type="button"
                  role="tab"
                  aria-controls="marca"
                  aria-selected="false"
                  // onClick={() => handleAbaClicada("Cadastro de Marcas")}
                >
                  Cadastro de Marcas
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="produto-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#produto"
                  type="button"
                  role="tab"
                  aria-controls="produto"
                  aria-selected="false"
                  // onClick={() => handleAbaClicada("Cadastro Produtos")}
                >
                  Cadastro Produtos
                </button>
              </li>
            </>
          )}
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="dados-tab"
              data-bs-toggle="tab"
              data-bs-target="#dados"
              type="button"
              role="tab"
              aria-controls="dados"
              aria-selected="true"
              // onClick={() => handleAbaClicada("Orçamentos")}
            >
              Orçamentos
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="produtos-tab"
              data-bs-toggle="tab"
              data-bs-target="#produtos"
              type="button"
              role="tab"
              aria-controls="produtos"
              aria-selected="false"
              // onClick={() => handleAbaClicada("Produtos")}
            >
              Produtos
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="dados"
            role="tabpanel"
            aria-labelledby="dados-tab"
          >
           {dados}
          </div>
          <div
            className="tab-pane fade"
            id="produtos"
            role="tabpanel"
            aria-labelledby="produtos-tab"
          >
            {produtos}
            <button
              type="button"
              onClick={() => enviarDadosParaNodeJS()}
              className="btn btn-primary mt-3"
              id="botaoImprimir"
            >
              Imprimir
            </button>
          </div>
          {admin && (
            <>
              <div
                className="tab-pane fade"
                id="marca"
                role="tabpanel"
                aria-labelledby="marca-tab"
              >
               {marca}
              </div>
              <div
                className="tab-pane fade"
                id="clientes"
                role="tabpanel"
                aria-labelledby="clientes-tab"
              >
               {cliente}
              </div>
              <div
                className="tab-pane fade"
                id="produto"
                role="tabpanel"
                aria-labelledby="produto-tab"
              >
               {produto}
              </div>
            </>
          )}
        </div>
      </div>
    )
  );
}
