//formulario.tsx

import { useGlobalContext } from "@/pages/context";


export default function FormularioOrcamento({ dados, produtos, prazos, envios, marca, produto }: any) {
  const { jsonData, setData } = useGlobalContext(); 

  function abrirNovaAbaComJson(json: string) {
    // Cria a URL com o JSON como parâmetro
    const url = `/layout.html?json=` + json;
  
    // Abre a nova aba
    window.open(url, "_blank");
  }

  function enviarDadosParaNodeJS() {
    // console.log("Enviando dados para o Node.js:", json);
    fetch("/api/orcamento", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip, compress, br",
      },
      body: JSON.stringify(jsonData),
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
            else abrirNovaAbaComJson(JSON.stringify(jsonData));
          });
        }
      })
      .catch((error) => console.error("Erro na requisição:", error));
  }
  
  return (
    <div className="container mt-1 p-1">
      <form id="formularioOrcamento">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="dados-tab" data-bs-toggle="tab" data-bs-target="#dados"
              type="button" role="tab" aria-controls="dados" aria-selected="true">Dados</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="produtos-tab" data-bs-toggle="tab" data-bs-target="#produtos"
              type="button" role="tab" aria-controls="produtos" aria-selected="false">Produtos</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="prazos-tab" data-bs-toggle="tab" data-bs-target="#prazos" type="button"
              role="tab" aria-controls="prazos" aria-selected="false">Prazos</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="envios-tab" data-bs-toggle="tab" data-bs-target="#envios" type="button"
              role="tab" aria-controls="envios" aria-selected="false">Envios</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="marca-tab" data-bs-toggle="tab" data-bs-target="#marca" type="button"
              role="tab" aria-controls="marca" aria-selected="false">Cadastro de Marcas</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="produto-tab" data-bs-toggle="tab" data-bs-target="#produto" type="button"
              role="tab" aria-controls="produto" aria-selected="false">Cadastro Produtos</button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="dados" role="tabpanel" aria-labelledby="dados-tab">            
            {dados}
          </div>
          <div className="tab-pane fade" id="produtos" role="tabpanel" aria-labelledby="produtos-tab">
            {produtos}
          </div>
          <div className="tab-pane fade" id="prazos" role="tabpanel" aria-labelledby="prazos-tab">
            {prazos}
          </div>
          <div className="tab-pane fade" id="envios" role="tabpanel" aria-labelledby="envios-tab">
            {envios}
          </div>
          <div className="tab-pane fade" id="marca" role="tabpanel" aria-labelledby="marca-tab">
            {marca}
          </div>
          <div className="tab-pane fade" id="produto" role="tabpanel" aria-labelledby="produto-tab">
            {produto}
          </div>
        </div>
        <button type="button" onClick={() => enviarDadosParaNodeJS()} className="btn btn-primary mt-3" id="botaoImprimir">Imprimir</button>
      </form>
    </div>
  );
};

