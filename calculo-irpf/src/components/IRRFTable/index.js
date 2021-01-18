import React from 'react';
// styles
import {
  TableContainer, TableRow, TableHead
} from './styles';

export const IRRFTable = ({ tableContent }) => {
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
        <p>INSS</p>
        <p>{currencyFormater(tableContent.inss)}</p>
      </TableRow>

      <TableRow>
        <p>Qtd dependentes</p>
        <p>{tableContent.dependentes}</p>
      </TableRow>

      <TableRow>
        <p>Valor dependentes</p>
        <p>{currencyFormater(tableContent.valorDependentes)}</p>
      </TableRow>

      <TableRow>
        <p>Pensao alimenticia</p>
        <p>{currencyFormater(tableContent.pensaoAlimenticia)}</p>
      </TableRow>

      <TableRow>
        <p>Valor total descontos</p>
        <p>{currencyFormater(tableContent.valorTotalDescontos)}</p>
      </TableRow>

      <TableRow>
        <p>Base Calculo</p>
        <p>{currencyFormater(tableContent.baseCalculo)}</p>
      </TableRow>

      <TableRow>
        <p>Aliquota IRRF</p>
        <p>{`${tableContent.porcentagemAliquota}%`}</p>
      </TableRow>

      <TableRow>
        <p>Parcela a deduzir</p>
        <p>{currencyFormater(tableContent.parcelaADeduzir)}</p>
      </TableRow>

      <TableRow>
        <p>IRRF(Imposto retido na fonte)</p>
        <p>{currencyFormater(tableContent.irrf)}</p>
      </TableRow>

    </TableContainer>
  );
};
