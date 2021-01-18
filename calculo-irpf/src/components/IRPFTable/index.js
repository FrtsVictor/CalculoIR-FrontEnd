import React from 'react';
// styles
import {
  TableContainer, TableRow, TableHead
} from './styles';

import { currencyFormater } from '../../utils';

export const IRPFTable = ({ tableContent }) => {
  return (
    <TableContainer>
      <TableHead>
        <p>{tableContent.nome}</p>
      </TableHead>
      <TableRow>
        <p>Rendimento Anual Bruto</p>
        <p>{currencyFormater(tableContent.rendimentoAnualBruto)}</p>
      </TableRow>

      <TableRow>
        <p>Dedudao Simplificada</p>
        <p>{currencyFormater(tableContent.deducaoSimplificada)}</p>
      </TableRow>

      <TableRow>
        <p>Base Calculo</p>
        <p>{currencyFormater(tableContent.baseDeCalculo)}</p>
      </TableRow>

      <TableRow>
        <p>Aliquota</p>
        <p>{`${tableContent.porcentagemAliquota}%`}</p>
      </TableRow>

      <TableRow>
        <p>Imposto Inicial</p>
        <p>{currencyFormater(tableContent.impostoInicial)}</p>
      </TableRow>

      <TableRow>
        <p>Parcela Dedutivel</p>
        <p>{currencyFormater(tableContent.parcelaDedutivel)}</p>
      </TableRow>

      <TableRow>
        <p>Imposto de Renda</p>
        <p>{currencyFormater(tableContent.impostoRenda)}</p>
      </TableRow>

    </TableContainer>

  );
};
