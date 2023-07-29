import React, { useState } from 'react';
import { Button, Dialog, DialogContent, DialogTitle, Drawer, IconButton, Stack, Tooltip } from '@mui/material';
import Sacola from '../Sacola';
import { useSacolaContext } from '@/common/context/sacola';
import useMobile from '@/common/hooks/useMobile';
import { useOpenContext } from '@/common/context/open';
import DrawerTitle from '@/components/elements/DrawerTitle';
import { TbPaperBagOff } from 'react-icons/tb';
import IllustrationEmptyBag from '@/components/elements/IllustrationEmptyBag';

export default function SacolaDrawer() {
  const { openDraw, setOpenDraw } = useOpenContext();
  const { sacola, emptySacola } = useSacolaContext();
  const isMobile = useMobile();

  const handleClose = () => {
    setOpenDraw(null)
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Drawer
        disableScrollLock
        anchor={isMobile ? 'bottom' : 'right'}
        open={openDraw === 'sacola'}
        onClose={handleClose}
        PaperProps={{
          sx: {
            px: '2rem',
            width: '500px',
            maxWidth: '100%',
            height: '100%',
            justifyItems: 'stretch',
          }
        }}
      >
        <Stack gap={2} flexGrow={1} py={2}>
          <DrawerTitle handleClose={handleClose} action={
            <Tooltip title='Limpar sacola'>
              <IconButton edge='end' aria-label='Limpar sacola' onClick={() => setOpenModal(true)}>
                <TbPaperBagOff />
              </IconButton>
            </Tooltip>
          }>Minha sacola</DrawerTitle>
          {sacola.length
            ? <Sacola sacola={sacola} />
            : <IllustrationEmptyBag />
          }
        </Stack>
      </Drawer>
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <DialogTitle>
          Esvaziar carrinho?
        </DialogTitle>
        <DialogContent>
          <Stack direction='row' gap={2} justifyContent='center'>
            <Button variant='outlined' onClick={() => setOpenModal(false)}>Cancelar</Button>
            <Button
              color='secondary'
              variant='outlined'
              onClick={() => {
                emptySacola();
                setOpenModal(false);
              }}
            >Esvaziar</Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  )
}
