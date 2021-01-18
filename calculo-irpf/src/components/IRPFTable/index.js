import React from 'react';
import {
  TableContainer, TableRow, TableHead
} from './styles';

export const IRPFTable = ({ userCalc }) => {
  const currencyFormater = (currencyValue) => new Intl.NumberFormat(
    'pt-BR', { style: 'currency', currency: 'BRL' }
  ).format(currencyValue);

  return (
    <TableContainer>
      <TableHead>
        <p>{userCalc.nome}</p>
      </TableHead>
      <TableRow>
        <p>Rendimento Anual Bruto</p>
        <p>{currencyFormater(userCalc.rendimentoAnualBruto)}</p>
      </TableRow>
      <TableRow>
        <p>Dedudao Simplificada</p>
        <p>{currencyFormater(userCalc.deducaoSimplificada)}</p>
      </TableRow>
      <TableRow>
        <p>Base Calculo</p>
        <p>{currencyFormater(userCalc.baseDeCalculo)}</p>
      </TableRow>
      <TableRow>
        <p>Aliquota</p>
        <p>{`${userCalc.porcentagemAliquota}%`}</p>
      </TableRow>
      <TableRow>
        <p>Imposto Inicial</p>
        <p>{currencyFormater(userCalc.impostoInicial)}</p>
      </TableRow>
      <TableRow>
        <p>Parcela Dedutivel</p>
        <p>{currencyFormater(userCalc.parcelaDedutivel)}</p>
      </TableRow>
      <TableRow>
        <p>Imposto de Renda</p>
        <p>{currencyFormater(userCalc.impostoRenda)}</p>
      </TableRow>
    </TableContainer>

  );
};
