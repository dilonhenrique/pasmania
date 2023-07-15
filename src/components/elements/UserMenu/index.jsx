import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, MenuItem as MenuItemMui, Typography, styled } from '@mui/material';
import { useClienteContext } from '@/common/context/cliente';
import { TbUserEdit, TbMapPin, TbReceipt } from 'react-icons/tb';

const Icon = styled(ListItemIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: 25,
}))

const MenuItem = styled(MenuItemMui)(() => ({
  fontSize: 18,
  paddingTop: '1rem',
  paddingBottom: '1rem',
}))

export default function UserMenu({ handleClose }) {
  const { cliente } = useClienteContext();

  return (
    <div>
      <>
        <ListItem sx={{ mt: 1 }}>
          <Typography variant='h4'>Olá, {cliente.nome}</Typography>
        </ListItem>
        <MenuItem onClick={handleClose}>
          <Icon>
            <TbUserEdit />
          </Icon>
          Meus dados
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Icon>
            <TbReceipt />
          </Icon>
          Meus pedidos
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Icon>
            <TbMapPin />
          </Icon>
          Meus endereços
        </MenuItem>
      </>
    </div>
  )
}
