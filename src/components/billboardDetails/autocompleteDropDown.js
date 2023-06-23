import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useQuery } from "@tanstack/react-query";
import { getUserAdvertisements } from "../../services/advertisement";

export default function AdvertisementSelect({ onData }) {
  const handleAutocompleteChange = (event, value) => {
    onData(value);
  };

  const currentPage = 1;
  const { data: advertisements } = useQuery(
    ["advertisements"],
    () => {
      return getUserAdvertisements({ currentPage })
        .then((res) => {
          return res.results;
        })
        .catch((error) => {
          return error;
        });
    },
    []
  );
  return (
    <Autocomplete
      id="country-select-demo"
      options={advertisements ?? []}
      autoHighlight
      getOptionLabel={(option) => option.advertisement_name}
      onChange={handleAutocompleteChange}
      required
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
            <img
              class="object-cover w-full h-full rounded-full"
              src={option.advertisement_file}
              alt=""
              loading="lazy"
            />
            <div
              class="absolute inset-0 rounded-full shadow-inner"
              aria-hidden="true"
            ></div>
          </div>
          <div>
            <p class="font-semibold">{option.advertisement_name}</p>
            <p class="text-xs text-gray-600 dark:text-black">
              {new Date(option.created_at).toLocaleDateString()}
            </p>
          </div>
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose an Ad"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
