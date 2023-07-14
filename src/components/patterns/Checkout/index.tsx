import React from 'react';
import { Divider, Drawer, IconButton, Stack } from '@mui/material';
import { MdClose } from 'react-icons/md';
import Sacola from '../Sacola';
import DeliveryAddress from '../DeliveryAdress';

interface CheckoutProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Checkout({ openMenu, setOpenMenu }: CheckoutProps) {
  const handleClose = () => {
    setOpenMenu(false)
  };

  return (
    <Drawer
      anchor='right'
      open={openMenu}
      onClose={handleClose}
      PaperProps={{
        sx: {
          padding: '5rem 3rem',
          width: '500px',
          maxWidth: '100%',
        }
      }}
    >
      <Stack alignItems='flex-end'>
        <IconButton onClick={handleClose}>
          <MdClose />
        </IconButton>
      </Stack>
      <Stack gap={4}>
        <Sacola />
        <DeliveryAddress />
      </Stack>
    </Drawer>
  )
}
