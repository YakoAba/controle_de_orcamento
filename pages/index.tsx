import MyHead from "@/componentes/head";
import FormularioOrcamento from "@/componentes/formulario";
import AbaDados from "@/orcamentos/componentes/dadosAba";
import AbaProdutos from "@/orcamentos/componentes/produtosAba";
import AbaProduto from "@/produtos/componentes/aba";
import AbaMarca from "@/marcas/componentes/aba";
import AbaCliente from "@/clientes/componentes/aba";
import { OrcamentoProvider } from "@/orcamentos/context";
import { ClienteProvider } from "@/clientes/context";
import { MarcaProvider } from "@/marcas/context";
import { ProdutoProvider } from "@/produtos/context";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-1 w-full h-screen">
      <MyHead />
      <OrcamentoProvider>
        <ClienteProvider>
          <MarcaProvider>
            <ProdutoProvider>
            <FormularioOrcamento
              dados={<AbaDados />}
              produtos={<AbaProdutos />}
              produto={<AbaProduto />}
              marca={<AbaMarca />}
              cliente={<AbaCliente />}
            />
            </ProdutoProvider>
          </MarcaProvider>
        </ClienteProvider>
      </OrcamentoProvider>
    </main>
  );
}
