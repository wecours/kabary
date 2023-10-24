import React from 'react';
import './Ohabolana.css';
import { useAutocomplete, AutocompleteGetTagProps } from '@mui/base/useAutocomplete';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['Option 1', 'Option 2'];

function AutocompleteSearch() {
    const [value, setValue] = React.useState<string | null>(options[0]);
    const [inputValue, setInputValue] = React.useState('');

  return (
    <div className="AutocompleteSearch">

        <Autocomplete
          value={value}
          onChange={(event: any, newValue: string | null) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Controllable" />}
          filterOptions={(x) => x}
        />

    </div>
  );
}

export default AutocompleteSearch;
