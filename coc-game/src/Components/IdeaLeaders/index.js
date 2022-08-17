import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    palette: {
      primary: { main: "#98C9A3" },
      error: { main: "#FFAC1C" },
    },
  });

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('John Smith', "Team Energy Savings", "Cycle to work day", 43, 24),
    createData('Lewis Leah', "Team Energy Savings", "Plug Socket Timers for overnight", 39, 18),
  createData('Luke Stewart', "Team Recycling", "Waste Paper Collection", 11, 14),
  createData('Steven Cheung', "Tean Recycling", "Water waste prevention", 28, 9),
  createData('Jordan Linton', "Team Energy Savings", "Carpool Day", 24, 5),
];

export default function IdeaLeadersTable() {
  return (
    <ThemeProvider theme={theme}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} size="small" aria-label="a dense table" >
        <TableHead style={{backgroundColor:'#BFD8BD',}}>
          <TableRow style={{backgroundColor:'#BFD8BD',}}>
            <TableCell style={{backgroundColor:'#BFD8BD',}} >Username</TableCell>
            <TableCell style={{backgroundColor:'#BFD8BD',}} align="right">Team</TableCell>
            <TableCell style={{backgroundColor:'#BFD8BD',}} align="right">Idea</TableCell>
            <TableCell style={{backgroundColor:'#BFD8BD',}} align="right">Carbon Saved (kg)</TableCell>
            <TableCell style={{backgroundColor:'#BFD8BD',}} align="right">Number of Votes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{backgroundColor:'#BFD8BD',}} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{backgroundColor:'#BFD8BD',}} align="right">{row.calories}</TableCell>
              <TableCell style={{backgroundColor:'#BFD8BD',}} align="right">{row.fat}</TableCell>
              <TableCell style={{backgroundColor:'#BFD8BD',}} align="right">{row.carbs}</TableCell>
              <TableCell style={{backgroundColor:'#BFD8BD',}} align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </ThemeProvider>
  );
}