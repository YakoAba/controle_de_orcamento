import { Item } from '@/orcamentos/interface';
import React from 'react';
import { formatarDataBrasil, formatarMoedaBrasil } from '../tools';

interface GridProps {
  items: Item[];
  total: string;
}
export default function Grid({ items, total  }: GridProps) {
  const estiloCelula = {
    width: '40pt',
    borderTopStyle: 'solid',
    borderTopWidth: '1pt',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1pt',
    border: '1px solid black'
  } as React.CSSProperties;

  const estiloParagrafo = {
    padding: '1pt 6pt 0pt',
    textIndent: '0pt',
    textAlign: 'left',
  } as React.CSSProperties;

  const estiloSubtotal = {
    padding: '1pt 5pt 0pt',
    paddingLeft: '33pt',
    textIndent: '0pt',
    textAlign: 'left',
  } as React.CSSProperties;

  return (
    <table id="gridDados" style={{ borderCollapse: 'collapse', marginLeft: '5.56pt' }} cellSpacing="0">
      <tbody>
        <tr style={{ height: '15pt' }}>
          <td style={{ ...estiloCelula, width: '40pt' }}>
            <p className="s2" style={{ ...estiloParagrafo, textAlign: 'center' }}>Item</p>
          </td>
          <td style={{ ...estiloCelula, width: '200pt' }}>
            <p className="s2" style={{ ...estiloParagrafo, textAlign: 'center' }}>Modelo</p>
          </td>
          <td style={{ ...estiloCelula, width: '116pt' }}>
            <p className="s2" style={{ ...estiloParagrafo, textAlign: 'center' }}>Marca</p>
          </td>
         {/*  <td style={{ ...estiloCelula, width: '44pt' }}>
            <p className="s2" style={{ ...estiloParagrafo, textAlign: 'center' }}>Unid.</p>
          </td> */}
          <td style={{ ...estiloCelula, width: '35pt' }}>
            <p className="s2" style={{ ...estiloParagrafo, textAlign: 'center' }}>Qtd.</p>
          </td>
          <td style={{ ...estiloCelula, width: '86pt' }}>
            <p className="s2" style={{ ...estiloParagrafo, textAlign: 'center' }}>Valor</p>
          </td>
          <td style={{ ...estiloCelula, width: '99pt' }}>
            <p className="s2" style={{ ...estiloParagrafo, textAlign: 'center' }}>Total</p>
          </td>
        </tr>
        {/* Exemplo de linha na tabela */}
        {items &&  items.map((item) => <tr style={{ height: '17pt' }}>
          <td style={{ ...estiloCelula, width: '40pt' }}>
            <p className="s2" style={{ ...estiloParagrafo, textAlign: 'center' }}>{item.produto_id}</p>
          </td>
          <td style={{ ...estiloCelula, width: '106pt' }}>
            <p className="s2" style={{ ...estiloParagrafo, textAlign: 'center' }}>{item.nome}</p>
          </td>
          <td style={{ ...estiloCelula, width: '116pt' }}>
            <p className="s2" style={{ ...estiloParagrafo, textAlign: 'center' }}>{item.marca}</p>
          </td>
          {/* <td style={{ ...estiloCelula, width: '44pt' }}>
            <p className="s2" style={{ ...estiloParagrafo, textAlign: 'center' }}>{}</p>
          </td> */}
          <td style={{ ...estiloCelula, width: '35pt' }}>
            <p className="s2" style={{ ...estiloParagrafo, textAlign: 'center' }}>{item.quantidade}</p>
          </td>
          <td style={{ ...estiloCelula, width: '86pt' }}>
            <p className="s2" style={{ ...estiloParagrafo, textAlign: 'center' }}>{formatarMoedaBrasil(item.valorUnitario.toString())}</p>
          </td>
          <td style={{ ...estiloCelula, width: '99pt' }}>
            <p className="s2" style={{ ...estiloParagrafo, textAlign: 'center' }}>{formatarMoedaBrasil(item.total.toString())}</p>
          </td>
        </tr>)}
        <tr style={{ height: '17pt' }}>
          <td style={{ ...estiloCelula, width: '40pt' }}>
            <p className="s2" style={{ ...estiloParagrafo, paddingLeft: '6pt' }}></p>
          </td>
          <td style={{ ...estiloCelula, width: '106pt' }}>
            <p className="s2" style={{ ...estiloParagrafo, paddingLeft: '9pt' }}></p>
          </td>
          <td style={{ ...estiloCelula, width: '116pt' }}>
            <p className="s2" style={{ ...estiloParagrafo, paddingLeft: '59pt' }}></p>
          </td>
          <td style={{ ...estiloCelula, width: '44pt' }}>
            <p className="s2" style={{ ...estiloParagrafo, paddingRight: '7pt', textAlign: 'right' }}></p>
          </td>
          {/* <td style={{ ...estiloCelula, width: '35pt' }}>
            <p className="s2" style={{ ...estiloParagrafo, paddingLeft: '6pt', paddingRight: '5pt', textAlign: 'center' }}></p>
          </td> */}
          <td style={{ ...estiloCelula, width: '86pt' }}>
            <p className="s2" style={{ ...estiloParagrafo, textAlign: 'center' }}>Subotal:</p>
          </td>
          <td style={{ ...estiloCelula, width: '99pt' }}>
            <p className="s2" style={{ ...estiloParagrafo, textAlign: 'center' }}>{total }</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
