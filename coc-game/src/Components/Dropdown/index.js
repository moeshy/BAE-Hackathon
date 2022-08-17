import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TeamDropDown() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    
    <Box sx={{ maxWidth: 190 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Choose your team</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          variant="filled"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Team Recycling</MenuItem>
          <MenuItem value={20}>Team Energy Savings</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
