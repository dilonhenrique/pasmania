import React from 'react';
import { TextField } from '@mui/material';
import { TbSearch } from 'react-icons/tb';

export default function SearchBar() {
  return (
    <TextField
      size='small'
      sx={{
        '.MuiInputBase-root': {
          height: '30px',
          paddingRight: '10px',
          fontSize: '14px',
          borderRadius: '2rem',
          transition: '0.3s',
          '&:has(:focus)': {
            backgroundColor: '#ffffff',
          }
        },
      }}
      placeholder='Busque seu prato...'
      InputProps={{
        endAdornment: <TbSearch size={22} />
      }}
    >

    </TextField>
  )
}
