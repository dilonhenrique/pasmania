import React from 'react';
import { Box, Drawer, IconButton, Stack } from '@mui/material';
import { MdClose } from 'react-icons/md';
import Sacola from '../Sacola';
import { useSacolaContext } from '@/common/context/sacola';
import useMobile from '@/common/hooks/useMobile';

interface SacolaDrawerProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SacolaDrawer({ openMenu, setOpenMenu }: SacolaDrawerProps) {
  const { sacola } = useSacolaContext();
  const isMobile = useMobile();

  const handleClose = () => {
    setOpenMenu(false)
  };

  return (
    <Drawer
      anchor={isMobile ? 'bottom' : 'right'}
      open={openMenu}
      onClose={handleClose}
      PaperProps={{
        sx: {
          px: isMobile ? '2rem' : '3rem',
          width: '500px',
          maxWidth: '100%',
          height: '100%',
          justifyItems: 'stretch',
        }
      }}
    >
      <Stack gap={2} flexGrow={1} py={2}>
        <div style={{ textAlign: isMobile ? 'right' : 'left', marginLeft:'-.5em',marginTop:'-.5em' }}>
          <IconButton onClick={handleClose}>
            <MdClose />
          </IconButton>
        </div>
        {sacola.length
          ? <Sacola sacola={sacola} />
          : <>Nenhum item na sua sacola :(</>
        }
      </Stack>
    </Drawer>
  )
}
