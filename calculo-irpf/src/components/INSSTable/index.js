import React from 'react';
// styles
import {
  TableContainer, TableRow, TableHead
} from './styles';

export const INSSTable = ({ tableContent }) => {
  const currencyFormater = (currencyValue) => new Intl.NumberFormat(
    'pt-BR', { style: 'currency', currency: 'BRL' }
  ).format(currencyValue);

  return (
    <TableContainer>
      <TableHead>
        <p>{tableContent.nome}</p>
      </TableHead>

      <TableRow>
        <p>Salario bruto</p>
        <p>{currencyFormater(tableContent.salarioMensalBruto)}</p>
      </TableRow>

      <TableRow>
        <p>Aliquota</p>
        <p>{`${tableContent.porcentagemAliquota}%`}</p>
      </TableRow>

      <TableRow>
        <p>Deducao aliquota</p>
        <p>{currencyFormater(tableContent.deducaoAliquota)}</p>
      </TableRow>

      <TableRow>
        <p>Parcela a deduzir</p>
        <p>{currencyFormater(tableContent.parcelaADeduzir)}</p>
      </TableRow>

      <TableRow>
        <p>INSS</p>
        <p>{currencyFormater(tableContent.inss)}</p>
      </TableRow>

    </TableContainer>
  );
};
