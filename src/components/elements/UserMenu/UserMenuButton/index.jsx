import React, { useState } from 'react';
import { IconButton, Menu } from '@mui/material';
import { TbUser } from 'react-icons/tb';
import UserMenu from '@/components/elements/UserMenu';

export default function UserMenuButton() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null)
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
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{
            disablePadding: true
          }}
        >
          <UserMenu handleClose={handleClose} />
        </Menu>
      </>
    </div>
  )
}
