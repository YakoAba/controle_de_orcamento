import React from 'react';
/* PrazosTable.module.css */interface PrazosTableProps {
  prazoEntrega: string;
  envio: string;
  cep: string;
  ufEnvio: string;
  frete: string;
  formaPagamento: string;
  agencia: string;
  conta: string;
  banco: string;
  total: string;
  prazo_fabricacao: string;
  prazo_observacao: string;
}

function PrazosTable({
  prazoEntrega,
  envio,
  cep,
  ufEnvio,
  frete,
  formaPagamento,
  agencia,
  conta,
  banco,
  total,
  prazo_fabricacao,
  prazo_observacao
}: PrazosTableProps): React.ReactElement {

  return (
    <table id="gridDados" style={{ borderCollapse: 'collapse', marginLeft: '5.56pt' }}>
      <tbody>
        <tr style={{ height: '0pt' }}>
          <td
            style={{
              width: '190pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
            }}
            colSpan={1}
          >
            <p className="s4" style={{ paddingTop: '6pt', paddingLeft: '1pt', textAlign: 'left' }}>Prazos</p>
            <p className="s5" style={{ paddingTop: '6pt', paddingLeft: '1pt', textAlign: 'left' }}>
              Prazo de entrega: <span id="prazoEntrega" className="s6">{prazoEntrega}</span>
            </p>
          </td>
          <td
            style={{
              width: '190pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
            }}
            colSpan={2}
          >
            {/* <p className="s4" style={{ paddingLeft: '1pt', textAlign: 'left' }}>Prazos</p> */}
            <p className="s5" style={{ paddingTop: '30pt',paddingLeft: '1pt', textAlign: 'left' }}>
            Prazo de fabricação:  <span id="prazoEntrega" className="s6">{prazo_fabricacao}</span>
            </p>
          </td>
        </tr>
        <tr>
        <td
            style={{
              width: '190pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
            }}
            colSpan={2}
          >
            {/* <p className="s4" style={{ paddingLeft: '1pt', textAlign: 'left' }}>Prazos</p> */}
            <p className="s5" style={{ paddingTop: '15pt',paddingLeft: '1pt', textAlign: 'left' }}>
              observação: <span id="prazoEntrega" className="s6">{prazo_observacao}</span>
            </p>
            </td>
        </tr>
        <tr style={{ height: '25pt' }}></tr>
        <tr style={{}}>
          <td style={{ width: '165pt', borderTopStyle: 'solid', borderTopWidth: '1pt' }}>
            <p className="s4" style={{ paddingLeft: '1pt', textAlign: 'left' }}>Forma de envio:</p>
          </td>
          <td style={{ width: '130pt', borderTopStyle: 'solid', borderTopWidth: '1pt' }}></td>
          <td style={{ width: '65pt', borderTopStyle: 'solid', borderTopWidth: '1pt' }}></td>
          <td style={{ width: '166pt', borderTopStyle: 'solid', borderTopWidth: '1pt' }}></td>
        </tr>
        <tr style={{ height: '0pt' }}>
          <td style={{ width: '165pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt' }}>
            <p className="s5" style={{ paddingTop: '6pt', paddingLeft: '1pt', textAlign: 'left' }}>
              Enviado por: <span id="envio" className="s6">{envio}</span>
            </p>
          </td>
          <td style={{ width: '130pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt' }}>
            <p className="s5" style={{ paddingTop: '6pt', textAlign: 'left' }}>
              CEP: <span id="cep" className="s6">{cep}</span>
            </p>
          </td>
          <td style={{ width: '65pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt' }}>
            <p className="s5" style={{ paddingTop: '6pt', paddingLeft: '11pt', textAlign: 'left' }}>
              UF: <span id="uf_envio" className="s6">{ufEnvio}</span>
            </p>
          </td>
          <td style={{ width: '166pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt' }}>
            <p className="s5" style={{ paddingTop: '6pt', paddingLeft: '10pt', textAlign: 'left' }}>
              Valor do frete: <span id="frete" className="s6">{frete}</span>
            </p>
          </td>
        </tr>
        <tr style={{ height: '25pt' }}></tr>
        <tr style={{ height: '0pt' }}>
          <td style={{ width: '165pt', borderTopStyle: 'solid', borderTopWidth: '1pt' }}>
            <p className="s4" style={{ paddingLeft: '1pt', textAlign: 'left' }}>Condições do pagamento</p>
          </td>
          <td style={{ width: '130pt', borderTopStyle: 'solid', borderTopWidth: '1pt' }}></td>
          <td style={{ width: '65pt', borderTopStyle: 'solid', borderTopWidth: '1pt' }}></td>
          <td style={{ width: '166pt', borderTopStyle: 'solid', borderTopWidth: '1pt' }}></td>
        </tr>
        <tr style={{ height: '29pt' }}>
          <td style={{ width: '200pt' }} colSpan={4}>
            <p className="s5" style={{ paddingTop: '6pt', paddingLeft: '1pt', textAlign: 'left' }}>
              Pagamento via: <span id="formaPagamento" className="s6">{formaPagamento}
                {formaPagamento === 'PIX' ? <p className="s6">email: financeiro@espacocadeiraderodas.com.br</p> : <></>}</span>
            </p>
          </td>
        </tr>

        {formaPagamento === 'depósito' ? <tr style={{ height: '29pt' }}>
          <td style={{ width: '165pt' }}>
            <p className="s5" style={{ paddingTop: '6pt', paddingLeft: '1pt', textAlign: 'left' }}>
              Agência: <span id="agencia" className="s6">{agencia}</span>
            </p>
          </td>
          <td style={{ width: '130pt' }}>
            <p className="s5" style={{ paddingTop: '6pt', paddingLeft: '11pt', textAlign: 'left' }}>
              Conta: <span id="conta" className="s6">{conta}</span>
            </p>
          </td>
          <td style={{ width: '231pt' }} colSpan={2}>
            <p className="s5" style={{ paddingTop: '6pt', paddingLeft: '55pt', textAlign: 'left' }}>
              Banco: <span id="banco" className="s6">{banco}</span>
            </p>
          </td> </tr> : <></>
        }
        <tr style={{ height: '35pt' }}>
          <td style={{ width: '295pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt' }} colSpan={2}>
            <p className="s5" style={{ paddingTop: '6pt', paddingLeft: '1pt', textAlign: 'left' }}>
              Valor total do orçamento: <span id="total" className="s6">{total}</span>
            </p>
          </td>
          <td style={{ width: '231pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt' }} colSpan={2}></td>
        </tr>
      </tbody>
    </table>
  );
}

export default PrazosTable;
