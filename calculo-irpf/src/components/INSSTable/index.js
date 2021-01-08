/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  TableContainer, TableRow, TableHead
} from './styles';

export const INSSTable = ({ userCalc }) => {
  const currencyFormater = (currencyValue) => new Intl.NumberFormat(
    'pt-BR', { style: 'currency', currency: 'BRL' }
  ).format(currencyValue);

  return (
    <TableContainer>
      <TableHead>
        <p>{userCalc.nome}</p>
      </TableHead>
      <TableRow>
        <p>Salario bruto</p>
        <p>{currencyFormater(userCalc.salarioBruto)}</p>
      </TableRow>
      <TableRow>
        <p>Aliquota</p>
        <p>{`${userCalc.porcentagemAliquota}%`}</p>
      </TableRow>
      <TableRow>
        <p>Deducao aliquota</p>
        <p>{currencyFormater(userCalc.deducaoAliquota)}</p>
      </TableRow>
      <TableRow>
        <p>Parcela a deduzir</p>
        <p>{currencyFormater(userCalc.parcelaADeduzir)}</p>
      </TableRow>
      <TableRow>
        <p>INSS</p>
        <p>{currencyFormater(userCalc.inss)}</p>
      </TableRow>
    </TableContainer>

  );
};
