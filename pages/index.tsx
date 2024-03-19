import MyHead from "@/componentes/head";
import FormularioOrcamento from "@/componentes/formulario";
import AbaDados from "@/orcamentos/componentes/dadosAba";
import AbaPrazo from '@/componentes/main/prazoAba';
import AbaProdutos from '@/componentes/main/produtosAba';
import AbaEnvio from '@/componentes/main/envioAba';
import AbaProduto from '@/produtos/componentes/aba';
import AbaMarca from '@/marcas/componentes/aba';
import AbaCliente from '@/clientes/componentes/aba';

export default function Home() {
  return (
    <main className="bg-gray-900 flex flex-col items-center justify-between p-1 w-full h-screen">
      <MyHead />
      <FormularioOrcamento
        dados={<AbaDados />}
        prazos={<AbaPrazo />}
        produtos={<AbaProdutos />}
        envios={<AbaEnvio />}
        produto={<AbaProduto />}
        marca={<AbaMarca />}
        cliente={<AbaCliente />}
      />
    </main>
  );
};