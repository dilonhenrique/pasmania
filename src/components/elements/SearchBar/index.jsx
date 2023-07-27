import React from 'react';
import { IconButton, TextField } from '@mui/material';
import { TbSearch } from 'react-icons/tb';
import { useSearchContext } from '@/common/context/search';

export default function SearchBar() {
  const { search, setSearch } = useSearchContext();

  function submit(evento) {
    evento.preventDefault();
    setSearch(evento.target.elements.searchTerm.value);
  }

  return (
    <form onSubmit={submit}>
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
          endAdornment: <IconButton size='small' edge='end' type='submit' aria-label='Buscar'><TbSearch size={20} /></IconButton>
        }}
        name='searchTerm'
        type='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  )
}
