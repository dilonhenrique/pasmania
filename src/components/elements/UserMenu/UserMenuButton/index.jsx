import React, { useState } from 'react';
import { IconButton, ListItem, Menu, Typography } from '@mui/material';
import { TbUser } from 'react-icons/tb';
import UserMenu from '@/components/elements/UserMenu';
import { useOpenContext } from '@/common/context/open';
import { useClienteContext } from '@/common/context/cliente';

export default function UserMenuButton() {
  const { cliente } = useClienteContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const { openDraw, setOpenDraw } = useOpenContext();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenDraw(atual => atual === 'perfil' ? null : 'perfil');
  };

  const handleClose = () => {
    setOpenDraw(null)
  };

  return (
    <div>
      <>
        <IconButton onClick={handleMenu} aria-label='Menu de usuário'>
          <TbUser />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={openDraw === 'perfil'}
          onClose={handleClose}
        // MenuListProps={{
        //   disablePadding: true
        // }}
        >
          <ListItem>
            <Typography variant='h5'>Olá, {cliente.nome}</Typography>
          </ListItem>
          <UserMenu handleClose={handleClose} />
        </Menu>
      </>
    </div>
  )
}
