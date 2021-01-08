/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  TableContainer, TableRow, TableHead
} from './styles';

export const IRRFTable = ({ userCalc }) => {
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
        <p>INSS</p>
        <p>{currencyFormater(userCalc.inss)}</p>
      </TableRow>
      <TableRow>
        <p>Qtd dependentes</p>
        <p>{userCalc.dependentes}</p>
      </TableRow>
      <TableRow>
        <p>Valor dependentes</p>
        <p>{currencyFormater(userCalc.valorDependentes)}</p>
      </TableRow>
      <TableRow>
        <p>Pensao alimenticia</p>
        <p>{currencyFormater(userCalc.pensaoAlimenticia)}</p>
      </TableRow>
      <TableRow>
        <p>Valor total descontos</p>
        <p>{currencyFormater(userCalc.valorTotalDescontos)}</p>
      </TableRow>
      <TableRow>
        <p>Base Calculo</p>
        <p>{currencyFormater(userCalc.baseCalculo)}</p>
      </TableRow>
      <TableRow>
        <p>Aliquota IRRF</p>
        <p>{`${userCalc.porcentagemAliquota}%`}</p>
      </TableRow>
      <TableRow>
        <p>Parcela a deduzir</p>
        <p>{currencyFormater(userCalc.parcelaADeduzir)}</p>
      </TableRow>
      <TableRow>
        <p>IRRF(Imposto retido na fonte)</p>
        <p>{currencyFormater(userCalc.irrf)}</p>
      </TableRow>
    </TableContainer>
  );
};
