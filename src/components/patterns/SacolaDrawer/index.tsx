import React from 'react';
import { Box, Drawer, IconButton, Stack } from '@mui/material';
import { MdClose } from 'react-icons/md';
import Sacola from '../Sacola';
import { useSacolaContext } from '@/common/context/sacola';
import useMobile from '@/common/hooks/useMobile';
import { useOpenContext } from '@/common/context/open';
import DrawerTitle from '@/components/elements/DrawerTitle';

export default function SacolaDrawer() {
  const { openDraw, setOpenDraw } = useOpenContext();
  const { sacola } = useSacolaContext();
  const isMobile = useMobile();

  const handleClose = () => {
    setOpenDraw(null)
  };

  return (
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
        <DrawerTitle handleClose={handleClose}>Minha sacola</DrawerTitle>
        {sacola.length
          ? <Sacola sacola={sacola} />
          : <>Nenhum item na sua sacola :(</>
        }
      </Stack>
    </Drawer>
  )
}
