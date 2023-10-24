import React from 'react';
import './Ohabolana.css';
import AutocompleteSearch from './AutocompleteSearch';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Ohabolana() {
  return (
    <div className="Ohabolana">
      <header className="App-header">
        
        <Box sx={{ width: '100%', maxWidth: 500 }}>
          <Typography variant="h1" gutterBottom>
            Ohabolana
          </Typography>
        </Box>

        <AutocompleteSearch
        />

      </header>
    </div>
  );
}

export default Ohabolana;
