import React from "react";
import { TextField, Autocomplete } from "@mui/material";

export default function MultiSelect({ onData, items }) {
  const handleAutocompleteChange = (event, value) => {
    onData(value);
  };
  return (
    <Autocomplete
      sx={{ m: 1, width: 500 }}
      multiple
      options={items}
      getOptionLabel={(option) => option?.channel_name || option?.description}
      disableCloseOnSelect
      onChange={handleAutocompleteChange}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Select Media"
          placeholder="Select Media"
        />
      )}
    />
  );
}
