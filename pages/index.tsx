//index.tsx
import React from 'react';
import MyHead from "@/componentes/head";
import FormularioOrcamento from "@/componentes/formulario";
import AbaDados from "@/componentes/main/dadosAba";
import AbaPrazo from '@/componentes/main/prazoAba';
import AbaProdutos from '@/componentes/main/produtosAba';
import AbaEnvio from '@/componentes/main/envioAba';
import AbaProduto from '@/componentes/main/produtoAba';
import AbaMarca from '@/componentes/main/marcaAba';

export default function  Home(){
  return (
    <>
      <MyHead />
      <main className="bg-dark flex min-h-screen flex-col items-center justify-between p-1">
        <FormularioOrcamento  dados={<AbaDados />}
                              prazos={<AbaPrazo />}
                              produtos={<AbaProdutos />}
                              envios={<AbaEnvio />} 
                              produto={<AbaProduto />} 
                              marca={<AbaMarca />} 
                              
                              />
      </main>
    </>
  );
};