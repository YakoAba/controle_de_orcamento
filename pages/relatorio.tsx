import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import GridRelatorio from "@/relatorios/componentes/grid";
import CabecarioRelatorio from "@/relatorios/componentes/header";
import Rodape from "@/relatorios/componentes/rodape";
import PrazosTable from "@/relatorios/componentes/tabela";
import { Orcamento } from "@/orcamentos/interface"; // Importe sua interface Orcamento
import { formatarDataBrasil, formatarMoedaBrasil } from "@/relatorios/tools";

export default function RelatorioOrcamento() {
  const router = useRouter();
  const [orcamento, setOrcamento] = useState<Orcamento | null>(null);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const { json } = router.query; // Obtém o parâmetro 'json' da URL

    if (json) {
      const data = JSON.parse(json as string);
      setOrcamento(data); // Define os dados do JSON no estado
      const soma = data.itens.reduce(
        (acc: any, item: { total: any }) => acc + item.total,
        0
      );
      console.log("Soma dos totais:", soma);
      setTotal(soma);
    }
  }, [router.query]); // Dependência para recarregar os dados quando a URL mudar

  if (!orcamento) {
    return <div>Loading...</div>; // Exibe uma mensagem de carregamento enquanto os dados estão sendo carregados
  }
  // if (!orcamento) {
  //   return <div className="text-white">Loading...</div>; // Exibe uma mensagem de carregamento enquanto os dados estão sendo carregados
  // }

  return (
    <div className="containerRelatorio">
      <div id="container" className="containerRel">
        <CabecarioRelatorio />
        <br />
        <p className="s1 data" id="data">
          Aparecida de Goiânia, {formatarDataBrasil(orcamento?.data)}
        </p>
        <p id="Validade" className="s1 data">
          Validade do orçamento: {formatarDataBrasil(orcamento?.validade)}
        </p>
        <br />
        <h2 id="orcamento_numero">ORÇAMENTO: {orcamento?.id}</h2>
        <br />
        <p className="s1 data" id="nome">
          Razão Social/Nome Completo:
          <br /> {orcamento?.nome}
        </p>
        <p
          style={{
            paddingLeft: "14pt",
            textIndent: "0pt",
            textAlign: "left",
            marginBottom: "1em",
          }}
        ></p>

        <p className="s1 data" id="CPF">
          CNPJ/CPF:
          <br />
          {orcamento?.documento}
        </p>
        <br />
        <h3 className="produtos">PRODUTOS</h3>
        <p className="paragrafo">
          <br />
        </p>
        <GridRelatorio
          items={orcamento?.itens}
          total={formatarMoedaBrasil(total.toString())}
        />
        <p className="paragrafo">
          <br />
        </p>
        <h1>Termos do Orçamento</h1>
        <p className="paragrafo" />
        <p className="paragrafo">
          <br />
        </p>
        <PrazosTable
          prazoEntrega={orcamento?.prazo_entrega}
          envio={orcamento?.forma_envio}
          cep={orcamento?.Cep}
          ufEnvio={orcamento?.Uf}
          frete={formatarMoedaBrasil(orcamento?.vfrete)}
          formaPagamento={orcamento?.pagamento}
          agencia={""}
          conta={""}
          banco={""}
          total={formatarMoedaBrasil(
            (parseFloat(orcamento?.vfrete) + total).toString()
          )}
          prazo_fabricacao={orcamento?.prazo_fabricacao}
          prazo_observacao={orcamento?.prazo_observacao}
        />
        <Rodape />
      </div>
    </div>
  );
}
