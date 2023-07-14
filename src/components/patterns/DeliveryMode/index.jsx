import React, { useState } from 'react';
import { Button, Dialog, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useMenuContext } from '@/common/context/menu';
import ButtonChoice from '@/components/elements/ButtonChoice';
import { MdOutlineSportsMotorsports, MdDirectionsWalk } from 'react-icons/md';

export default function DeliveryMode() {
  const { menu } = useMenuContext();
  const temposEntrega = {
    delivery: {
      min: Number(menu.timeDeliverMin.split(':')[0] * 60) + Number(menu.timeDeliverMin.split(':')[1]),
      max: Number(menu.timeDeliverMax.split(':')[0] * 60) + Number(menu.timeDeliverMax.split(':')[1]),
    },
    takeAway: {
      min: Number(menu.timeTakeAwayMin.split(':')[0] * 60) + Number(menu.timeTakeAwayMin.split(':')[1]),
      max: Number(menu.timeTakeAwayMax.split(':')[0] * 60) + Number(menu.timeTakeAwayMax.split(':')[1]),
    }
  }

  const modoEntrega = localStorage.getItem('pasmania-entregaMode') || 'delivery';
  const [openModal, setOpenModal] = useState(false);

  function setEntregaMode(mode) {
    localStorage.setItem('pasmania-entregaMode', mode);
    setOpenModal(false);
  }

  return (
    <>
      <Button
        endIcon={<MdKeyboardArrowRight />}
        sx={{
          textTransform: 'none',
          fontSize: 'inherit',
          backgroundColor: theme => theme.palette.grey[200],
          color: 'inherit',
          paddingLeft: '1rem',
          '&:hover': {
            backgroundColor: theme => theme.palette.grey[300],
          }
        }}
        onClick={() => setOpenModal(true)}
      >
        <strong>{modoEntrega === 'delivery' ? 'Entrega' : 'Retirada'}</strong> - {temposEntrega[modoEntrega].min} a {temposEntrega[modoEntrega].max} min
      </Button>
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <DialogTitle>
          Como quer receber o pedido?
        </DialogTitle>
        <DialogContent>
          <Stack alignItems='flex-start' gap={1}>
            <ButtonChoice onClick={() => setEntregaMode('delivery')} startIcon={<MdOutlineSportsMotorsports size={30} />}>
              <h4>Entrega</h4>
              <p>A gente leva até você</p>
            </ButtonChoice>
            <ButtonChoice onClick={() => setEntregaMode('takeAway')} startIcon={<MdDirectionsWalk size={30} />}>
              <h4>Retirada</h4>
              <p>Você retira no local</p>
            </ButtonChoice>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  )
}
