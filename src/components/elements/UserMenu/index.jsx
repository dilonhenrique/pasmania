import React from 'react';
import { ListItemIcon, MenuItem as MenuItemMui, styled } from '@mui/material';
import { TbUserEdit, TbMapPin, TbReceipt } from 'react-icons/tb';
import { useOpenContext } from '@/common/context/open';

const Icon = styled(ListItemIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: 25,
}))

const MenuItem = styled(MenuItemMui)(() => ({
  fontSize: 18,
  paddingTop: '1rem',
  paddingBottom: '1rem',
}))

export default function UserMenu() {
  const { setOpenDraw } = useOpenContext();

  function handleClose() {
    setOpenDraw(null);
  }

  return (
    <div>
      <>
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
