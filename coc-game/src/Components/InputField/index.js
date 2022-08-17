import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    palette: {
        secondary: { main: "#98C9A3" },
      error: { main: "#FFAC1C" },
    },
  });

export default function IdeaInput() {
  return (
    <ThemeProvider theme={theme}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField id="filled-basic" label="Your Username" variant="filled"/>
      <TextField id="filled-basic" label="Your Idea" variant="filled"/>
      <TextField id="filled-basic" label="Carbon Savings" variant="filled"/>
    </Box>
    <TextField id="filled-basic" label="Your Carbon Savings Calculations" variant="filled" />
    </ThemeProvider>
  );
}