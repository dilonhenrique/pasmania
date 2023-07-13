import React, { useState } from 'react'
import { IconButton, Menu, MenuItem, Tooltip, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material'
import { TbUser } from 'react-icons/tb';

export default function UserMenu() {
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
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            Item 1
          </MenuItem>
          <MenuItem onClick={handleClose}>
            Item 2
          </MenuItem>
          <MenuItem onClick={handleClose}>
            Item 3
          </MenuItem>
        </Menu>
      </>
    </div>
  )
}
