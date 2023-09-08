import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function createData(number, item, qty, price) {
  return { number, item, qty, price };
}

const rows = [
  createData("Profit & Loss",),
  createData("Profit & Loss %"),
  createData("Total trades"),
  createData("Start date"),
  createData("End date"),
  createData("Drawdown"),
  createData("Drawdown %"),
  createData("Max profit"),
  createData("Max loss"),
  createData("Calmer"),
  createData("Winning streak"),
  createData("Losing streak"),
  createData("Avg Winning streak"),
];

export default function BasicTable() {
  return (
    <TableContainer className='border-white overflow-y-scroll h-full'>
      <Table aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.number} >
              <TableCell component="th" scope="row">
                <h1 className='text-white'>{row.number}</h1>
              </TableCell>
              <TableCell align="right"><h1 className='text-white'>{row.item}</h1></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}