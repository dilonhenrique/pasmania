import React, { useState } from 'react';
import { IconButton, Menu } from '@mui/material';
import { TbUser } from 'react-icons/tb';
import UserMenu from '@/components/elements/UserMenu';
import { useOpenContext } from '@/common/context/open';

export default function UserMenuButton() {
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
        <IconButton onClick={handleMenu}>
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
          <UserMenu handleClose={handleClose} />
        </Menu>
      </>
    </div>
  )
}
