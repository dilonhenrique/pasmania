import React, { useState } from 'react'
import { IconButton, Menu, MenuItem, Tooltip, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Divider, styled } from '@mui/material'
import { TbMenu2,TbCurrencyDollar,TbClock,TbMap2,TbMessages } from 'react-icons/tb';
import { HiCurrencyDollar, HiChatAlt2, HiLocationMarker,HiClock } from 'react-icons/hi';
import useMobile from '@/common/hooks/useMobile';

const Icon = styled(ListItemIcon)(({theme}) => ({
  color: theme.palette.secondary.main,
  minWidth: 0,
  marginRight: 15,
  'svg': {
    fontSize: 25
  }
}));

const ListButton = styled(ListItemButton)(({theme}) => ({
  padding: '1rem 3rem 1rem 2rem',
  fontWeight: 700,
}))

export default function SideMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const isMobile = useMobile();

  const handleOpen = () => {
    setOpenMenu(atual => !atual)
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
          anchor={isMobile ? 'right' : 'left'}
          open={openMenu}
          onClose={handleClose}
        >
          <List>
            <ListButton onClick={handleClose}>
              <Icon>
                <TbCurrencyDollar />
              </Icon>
              Cashback
            </ListButton>
            <ListButton onClick={handleClose}>
              <Icon>
                <TbClock />
              </Icon>
              Horários de atendimento
            </ListButton>
            <ListButton onClick={handleClose}>
              <Icon>
                <TbMap2 />
              </Icon>
              Áreas de entrega
            </ListButton>
            <ListButton onClick={handleClose}>
              <Icon>
                <TbMessages />
              </Icon>
              Fale conosco
            </ListButton>
          </List>
        </Drawer>
      </>
    </div>
  )
}
