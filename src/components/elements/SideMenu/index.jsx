import React, { useState } from 'react'
import { IconButton, Menu, MenuItem, Tooltip, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Divider, styled } from '@mui/material'
import { TbMenu2, TbCurrencyDollar, TbClock, TbMap2, TbMessages } from 'react-icons/tb';
import { HiCurrencyDollar, HiChatAlt2, HiLocationMarker, HiClock } from 'react-icons/hi';
import useMobile from '@/common/hooks/useMobile';
import { useOpenContext } from '@/common/context/open';

const Icon = styled(ListItemIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
  minWidth: 0,
  marginRight: 15,
  justifyContent: 'flex-end',
  'svg': {
    fontSize: 25
  }
}));

const ListButton = styled(MenuItem)(({ theme }) => ({
  padding: '1rem 3rem 1rem 2rem',
  fontWeight: 700,
}))

export default function SideMenu() {
  const { openDraw, setOpenDraw } = useOpenContext();
  const isMobile = useMobile();

  const handleOpen = () => {
    setOpenDraw(atual => atual === 'infos' ? null : 'infos')
  };

  const handleClose = () => {
    setOpenDraw(null)
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <TbMenu2 />
      </IconButton>
      <Drawer
        anchor={isMobile ? 'right' : 'left'}
        open={openDraw === 'infos'}
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
  )
}
