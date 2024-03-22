import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import GridRelatorio from '@/relatorios/componentes/grid';
import CabecarioRelatorio from '@/relatorios/componentes/header';
import Rodape from '@/relatorios/componentes/rodape';
import PrazosTable from '@/relatorios/componentes/tabela';
import { Orcamento } from '@/orcamentos/interface'; // Importe sua interface Orcamento
function formatarDataBrasil(data: string) {
  const partes = data.split('-');
  if (partes.length !== 3) {
    throw new Error('Formato de data inválido. Use o formato YYYY-MM-DD.');
  }

  const dia = partes[2];
  const mes = partes[1];
  const ano = partes[0];

  return `${dia}/${mes}/${ano}`;
}
export default function RelatorioOrcamento() {
  const router = useRouter();
  const [orcamento, setOrcamento] = useState<Orcamento | null>(null);

  useEffect(() => {
    const { json } = router.query; // Obtém o parâmetro 'json' da URL

    if (json) {
      try {
        const data = JSON.parse(json as string);
        setOrcamento(data); // Define os dados do JSON no estado
      } catch (error) {
        console.error('Erro ao processar JSON:', error);
      }
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
                <CabecarioRelatorio /><br />
                <p className="s1 data" id="data">
                    Aparecida de Goiânia, {formatarDataBrasil(orcamento?.data)}
                </p>
                <p id="Validade" className="s1 data">
                    Validade do orçamento: {formatarDataBrasil(orcamento?.validade)}
                </p><br />
                <h2 id="orcamento_numero">ORÇAMENTO: {orcamento?.id}</h2><br />
                <p className="s1 data" id="nome">Razão Social/Nome Completo:<br/> {orcamento?.nome}</p>
                <p style={{ paddingLeft: '14pt', textIndent: '0pt', textAlign: 'left', marginBottom: '1em' }}></p>

                <p className="s1 data" id="CPF">CNPJ/CPF:<br/>{orcamento?.documento}</p><br />
                <h3 className="produtos">PRODUTOS</h3>
                <p className="paragrafo"><br /></p>
                <GridRelatorio item={""} modelo={""} marca={""} unidade={""} quantidade={""} valor={""} total={""} />
                <p className="paragrafo"><br /></p>
                <h1>Termos do Orçamento</h1>
                <p className="paragrafo" />
                <p className="paragrafo"><br /></p>
                <PrazosTable prazoEntrega={""} envio={""} cep={""} ufEnvio={""} frete={""} formaPagamento={""} agencia={""} conta={""} banco={""} total={""} />
                <Rodape />
            </div>
        </div>
    )
}
