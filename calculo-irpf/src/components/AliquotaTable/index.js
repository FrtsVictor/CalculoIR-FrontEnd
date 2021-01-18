import React from 'react';
import { TableContainer, TableHead, TableRow } from './styles';

const createData = (BaseDeCalculo, Aliquota, ParcelaADeduzir, color) => ({
  BaseDeCalculo,
  Aliquota,
  ParcelaADeduzir,
  color
});

const rows = [
  createData('Até R$ 22.847,76', '0%', '0%', '#FFFFFF'),
  createData('De R$ 22.847,77 até R$ 33.919,80', '7.5%', 'R$ 1.713,58', '#e4e4e4'),
  createData('De R$ 33.919,81 até R$ 45.012,60', '15%', 'R$ 4.257,57', '#FFFFFF'),
  createData('De R$ 45.012,61 até R$ 55.976,16', '22.5%', 'R$ 7.633,51', '#e4e4e4'),
  createData('Acima de R$ 55.976,16', '27.5%', 'R$ 10.432,32', '#FFFFFF'),
];

export const AliquotaTable = () => (
  <TableContainer>
    <TableHead>Base De Calculo</TableHead>
    <TableHead>Aliquota</TableHead>
    <TableHead>Parcela a Deduzir</TableHead>

    {rows.map((row, index) => (
      <>
        <TableRow
          key={index}
          style={{
            justifyContent: 'flex-start',
            background: row.color
          }}
        >
          {row.BaseDeCalculo}

        </TableRow>
        <TableRow
          key={index + 1}
          style={{
            justifyContent: 'center',
            background: row.color
          }}
        >
          {row.Aliquota}
        </TableRow>
        <TableRow
          key={index + 2}
          style={{
            justifyContent: 'flex-end',
            background: row.color
          }}
        >
          {row.ParcelaADeduzir}

        </TableRow>
      </>
    ))}
  </TableContainer>

);
