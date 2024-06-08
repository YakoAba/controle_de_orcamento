import { MarcaProvider } from "@/marcas/context";
import { ProdutoProvider } from "@/produtos/context";
import { ClienteProvider } from "@/clientes/context";
import { useOrcamentoContext } from "@/orcamentos/context";
import { useEffect, useState } from "react";

export default function FormularioOrcamento({ dados, produtos, marca, produto, cliente }: any) {
  const { orcamentoSelecionada, contarOrcamentos } = useOrcamentoContext();
  const [userStatus, setUserStatus] = useState('');

  useEffect(() => {
    setUserStatus('')
    // Chamada à API interna para verificar o status do usuário
    fetch('/api/isAdmin')
      .then(response => response.json())
      .then(data => {
        setUserStatus(data.userStatus);
      });
  }, []);

  function abrirNovaAbaComJson(json: string) {
    const url = `/relatorio?json=` + json;
    window.open(url, "_blank");
  }

  function enviarDadosParaNodeJS() {
    orcamentoSelecionada.order = contarOrcamentos() + 1;
    console.log("Enviando dados para o Node.js:", JSON.stringify(orcamentoSelecionada));
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
        return response.json();
      })
      .then((data) => {
        console.log("Resposta do servidor:", data);
        abrirNovaAbaComJson(JSON.stringify(orcamentoSelecionada));
      })
      .catch((error) => console.error("Erro na requisição:", error));
  }

  function handleAbaClicada(nomeAba: string) {
    switch (nomeAba) {
      case 'Cadastro de Clientes':
        break;
      case 'Cadastro de Marcas':
        break;
      case 'Cadastro Produtos':
        break;
      case 'Orçamentos':
        break;
      case 'Produtos':
        break;
      default:
        break;
    }
  }

  return (
    (userStatus === 'admin' || userStatus === 'user') &&
    <div className="container mt-1 p-1">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {(userStatus === 'admin') && (
          <>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="clientes-tab" data-bs-toggle="tab" data-bs-target="#clientes" type="button"
                role="tab" aria-controls="clientes" aria-selected="false" onClick={() => handleAbaClicada('Cadastro de Clientes')}>Cadastro de Clientes</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="marca-tab" data-bs-toggle="tab" data-bs-target="#marca" type="button"
                role="tab" aria-controls="marca" aria-selected="false" onClick={() => handleAbaClicada('Cadastro de Marcas')}>Cadastro de Marcas</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="produto-tab" data-bs-toggle="tab" data-bs-target="#produto" type="button"
                role="tab" aria-controls="produto" aria-selected="false" onClick={() => handleAbaClicada('Cadastro Produtos')}>Cadastro Produtos</button>
            </li>
          </>
        )}
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="dados-tab" data-bs-toggle="tab" data-bs-target="#dados"
            type="button" role="tab" aria-controls="dados" aria-selected="true" onClick={() => handleAbaClicada('Orçamentos')}>Orçamentos</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="produtos-tab" data-bs-toggle="tab" data-bs-target="#produtos" type="button"
            role="tab" aria-controls="produtos" aria-selected="false" onClick={() => handleAbaClicada('Produtos')}>Produtos</button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="dados" role="tabpanel" aria-labelledby="dados-tab">
          <ClienteProvider>{dados}</ClienteProvider>
        </div>
        <div className="tab-pane fade" id="produtos" role="tabpanel" aria-labelledby="produtos-tab">
          {produtos}
          <button type="button" onClick={() => enviarDadosParaNodeJS()} className="btn btn-primary mt-3" id="botaoImprimir">Imprimir</button>
        </div>
        {(userStatus === 'admin' ) && (
          <>
            <div className="tab-pane fade" id="marca" role="tabpanel" aria-labelledby="marca-tab">
              <MarcaProvider>{marca}</MarcaProvider>
            </div>
            <div className="tab-pane fade" id="clientes" role="tabpanel" aria-labelledby="clientes-tab">
              <ClienteProvider>{cliente}</ClienteProvider>
            </div>
            <div className="tab-pane fade" id="produto" role="tabpanel" aria-labelledby="produto-tab">
              <ProdutoProvider>{produto}</ProdutoProvider>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
