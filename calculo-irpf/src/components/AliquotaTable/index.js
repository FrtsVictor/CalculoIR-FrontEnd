import React from 'react';
// styles
import { TableContainer, TableHead, TableRow } from './styles';

const createData = (BaseDeCalculo, Aliquota, ParcelaADeduzir, color) => ({
  BaseDeCalculo,
  Aliquota,
  ParcelaADeduzir,
  color
});

export const aliquotaAnualIRPF = [
  createData('Até R$ 22.847,76', '0%', '0', '#FFFFFF'),
  createData('De R$ 22.847,77 até R$ 33.919,80', '7.5%', 'R$ 1.713,58', '#e4e4e4'),
  createData('De R$ 33.919,81 até R$ 45.012,60', '15%', 'R$ 4.257,57', '#FFFFFF'),
  createData('De R$ 45.012,61 até R$ 55.976,16', '22.5%', 'R$ 7.633,51', '#e4e4e4'),
  createData('Acima de R$ 55.976,16', '27.5%', 'R$ 10.432,32', '#FFFFFF'),
];


export const aliquotaMensalIRPF = [
  createData('Até R$ 1903.98', '0%', '0', '#FFFFFF'),
  createData('De R$ 1903.99 até R$ 2826.65', '7.5%', 'R$ 142.80', '#e4e4e4'),
  createData('De R$ 2826.66 até 3751.05', '15%', 'R$ 354.80', '#FFFFFF'),
  createData('De R$ 3751.06 até R$ 4664.68', '22.5%', 'R$ 636.13', '#e4e4e4'),
  createData('Acima de R$ 4664.69', '27.5%', 'R$ 869.36', '#FFFFFF'),
];


export const aliquotaMensalINSS = [
  createData('Até R$ 1045.00', '7.5%', '0', '#FFFFFF'),
  createData('De R$ 1045.01 até R$ 2089.60', '9%', 'R$ 15.67', '#e4e4e4'),
  createData('De R$ 2089.61 até 3134.40', '12%%', 'R$ 78.36', '#FFFFFF'),
  createData('De R$ 3134.41 até R$ 6101.06', '14%', 'R$ 141.05', '#e4e4e4'),
];

export const AliquotaTable = ({ tableData }) => (
  <TableContainer style={{border: '0.5px solid'}}>
      <TableHead>Base De Calculo</TableHead>
      <TableHead>Aliquota</TableHead>
      <TableHead>Parcela a Deduzir</TableHead>

      {tableData &&
      tableData.map((row, index) => (
        <>
          <TableRow
            key={index}
            style={{
              background: row.color,
              paddingLeft: '4px',
            }}
          >
            {row.BaseDeCalculo}

          </TableRow>
          <TableRow
            key={index + 1}
            style={{
              background: row.color,
            }}
          >
            {row.Aliquota}
          </TableRow>
          <TableRow
            key={index + 2}
            style={{
              background: row.color,
              paddingRight: '4px',
            }}
          >
            {row.ParcelaADeduzir}

          </TableRow>
        </>
      ))}
    </TableContainer>
);
