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

  const user_id = 1;
  const { data: advertisements, isLoading } = useQuery(
    ["advertisements"],
    () => {
      return getUserAdvertisements(user_id)
        .then((res) => {
          console.log(res.results);
          return res.results;
        })
        .catch((error) => {
          return error;
        });
    },
    { user_id }
  );

  return (
    <Autocomplete
      id="country-select-demo"
      options={advertisements}
      autoHighlight
      getOptionLabel={(option) => option.advertisement_name}
      onChange={handleAutocompleteChange}
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

// const advertisements = [
//   {
//     adertisementName: "The Shawshank Redemption",
//     advertisementfile:
//       "https://images.unsplash.com/photo-1654157925394-4b7809721149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80",
//     date: "1/2/2012",
//   },
//   {
//     adertisementName: "The Godfather",
//     advertisementfile:
//       "https://images.unsplash.com/photo-1654157925394-4b7809721149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80",
//     date: "1/2/2012",
//   },
//   {
//     adertisementName: "The Godfather: Part II",
//     advertisementfile:
//       "https://images.unsplash.com/photo-1654157925394-4b7809721149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80",
//     date: "1/2/2012",
//   },
//   {
//     adertisementName: "The Dark Knight",
//     advertisementfile:
//       "https://images.unsplash.com/photo-1654157925394-4b7809721149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80",
//     date: "1/2/2012",
//   },
//   {
//     adertisementName: "12 Angry Men",
//     advertisementfile:
//       "https://images.unsplash.com/photo-1654157925394-4b7809721149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80",
//     date: "1/2/2012",
//   },
//   {
//     adertisementName: "Schindler's List",
//     advertisementfile:
//       "https://images.unsplash.com/photo-1654157925394-4b7809721149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80",
//     date: "1/2/2012",
//   },
//   {
//     adertisementName: "Pulp Fiction",
//     advertisementfile:
//       "https://images.unsplash.com/photo-1654157925394-4b7809721149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80",
//     date: "1/2/2012",
//   },
// ];
