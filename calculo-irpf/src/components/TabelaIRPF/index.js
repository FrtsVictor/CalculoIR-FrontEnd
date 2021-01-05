/* eslint-disable react/jsx-filename-extension */
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { StyledTableCell, StyledTableRow, TableContainer } from './styles';

const createData = (BaseDeCalculo, Aliquota, ParcelaADeduzir) => ({
  BaseDeCalculo,
  Aliquota,
  ParcelaADeduzir,
});

const rows = [
  createData('Até R$ 22.847,76', '0%', '0%'),
  createData('De R$ 22.847,77 até R$ 33.919,80', '7.5%', 'R$ 1.713,58'),
  createData('De R$ 33.919,81 até R$ 45.012,60', '15%', 'R$ 4.257,57'),
  createData('De R$ 45.012,61 até R$ 55.976,16', '22.5%', 'R$ 7.633,51'),
  createData('Acima de R$ 55.976,16', '27.5%', 'R$ 10.432,32'),
];

export const AliquotaTable = () => (
  <TableContainer>
    <Table aria-label="customized table">
      <TableHead>
        <TableRow style={{ maxHeight: '10px' }}>
          <StyledTableCell>Base De Calculo</StyledTableCell>
          <StyledTableCell align="center">Aliquota</StyledTableCell>
          <StyledTableCell align="right">Parcela a Deduzir</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow key={row.name}>
            <StyledTableCell align="left">{row.BaseDeCalculo}</StyledTableCell>
            <StyledTableCell align="center">{row.Aliquota}</StyledTableCell>
            <StyledTableCell align="right">{row.ParcelaADeduzir}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>

);
