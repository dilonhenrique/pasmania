import React, { useState } from 'react'
import { IconButton, Menu, MenuItem, Tooltip, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material'
import { TbMenu2 } from 'react-icons/tb';

export default function SideMenu() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpen = () => {
    setOpenMenu(true)
  };

  const handleClose = () => {
    setOpenMenu(false)
  };

  return (
    <div>
      <>
        <IconButton onClick={handleOpen}>
          <TbMenu2 />
        </IconButton>
        <Drawer
          anchor='left'
          open={openMenu}
          onClose={handleClose}
        >
          <List>
            <ListItemButton onClick={handleClose}>
              <ListItemIcon>
                <TbMenu2 />
              </ListItemIcon>
              <ListItemText primary='Item' />
            </ListItemButton>
            <ListItemButton onClick={handleClose}>
              <ListItemIcon>
                <TbMenu2 />
              </ListItemIcon>
              <ListItemText primary='Item' />
            </ListItemButton>
            <Divider />
            <ListItemButton onClick={handleClose}>
              <ListItemIcon>
                <TbMenu2 />
              </ListItemIcon>
              <ListItemText primary='Item' />
            </ListItemButton>
          </List>
        </Drawer>
      </>
    </div>
  )
}
