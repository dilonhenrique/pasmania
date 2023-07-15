import React from 'react';
import { Drawer, IconButton, Stack } from '@mui/material';
import { MdClose } from 'react-icons/md';
import Sacola from '../Sacola';
import { useSacolaContext } from '@/common/context/sacola';

interface SacolaDrawerProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SacolaDrawer({ openMenu, setOpenMenu }: SacolaDrawerProps) {
  const { sacola } = useSacolaContext();

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
          px: '3rem',
          paddingTop: '5rem',
          paddingBottom: '3rem',
          width: '500px',
          maxWidth: '100%',
          justifyItems: 'stretch',
        }
      }}
    >
      <Stack gap={2} flexGrow={1}>
        <div>
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
