//head.tsx
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

export default function MyHead() {
  useEffect(() => {
    
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Crie e imprima orçamentos facilmente com nosso sistema online. Gerencie dados do orçamento, produtos, prazos e formas de pagamento de forma eficiente."
      />
      <title>Espaço Orçamento</title>
    </Head>
  );
}
