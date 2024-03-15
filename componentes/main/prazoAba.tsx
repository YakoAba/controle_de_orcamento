import React from 'react';
import PrazoFabricacao from '../checkPrazoFabricacao';
import PrazoEntrega from '../checkPrazoEntrega';
import Observacao from '../checkPrazoObservacao';

export default function AbaPrazo() {
  return (
    <fieldset className="mt-3 mb-3 text-white">
      <legend style={{ fontSize: 'large', color: 'white' }}>Prazos</legend>
      <PrazoFabricacao />
      <PrazoEntrega />
      <Observacao />
    </fieldset>
  );
}
