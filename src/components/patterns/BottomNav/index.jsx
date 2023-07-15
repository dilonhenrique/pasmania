import React, { useState } from 'react';
import styles from './BottomNav.module.scss';
import { ButtonBase, Drawer, IconButton, List, Slide, Stack } from '@mui/material';
import { TbToolsKitchen2, TbSearch, TbReceipt, TbUser } from 'react-icons/tb';
import UserMenu from '@/components/elements/UserMenu';
import { MdClose } from 'react-icons/md';
import useMobile from '@/common/hooks/useMobile';
import SacolaMobile from '@/components/elements/SacolaMobile';
import { useSacolaContext } from '@/common/context/sacola';
import { useOpenContext } from '@/common/context/open';

export default function BottomNav() {
  const isMobile = useMobile();
  const { openDraw, setOpenDraw } = useOpenContext();
  const { sacola } = useSacolaContext();

  function handleClose() {
    setOpenDraw(null);
  }

  return (
    <>
      <div className={styles.bottomNavContainer}>
        {isMobile &&
          <Slide direction='up' in={openDraw !== 'sacola' && Boolean(sacola.length)}>
            <SacolaMobile sacola={sacola} />
          </Slide>}
        <nav className={styles.bottomNav}>
          <ul>
            <li className={styles.bottomNavLink}>
              <ButtonBase href='/' onClick={handleClose}>
                <TbToolsKitchen2 size={30} />
                <span className={styles.bottomNavLink__label}>Cardápio</span>
              </ButtonBase>
            </li>
            <li className={styles.bottomNavLink}>
              <ButtonBase href='/buscar' onClick={handleClose}>
                <TbSearch size={30} />
                <span className={styles.bottomNavLink__label}>Busca</span>
              </ButtonBase>
            </li>
            <li className={styles.bottomNavLink}>
              <ButtonBase href='/pedidos' onClick={handleClose}>
                <TbReceipt size={30} />
                <span className={styles.bottomNavLink__label}>Pedidos</span>
              </ButtonBase>
            </li>
            <li className={styles.bottomNavLink}>
              <ButtonBase onClick={() => setOpenDraw('perfil')}>
                <TbUser size={30} />
                <span className={styles.bottomNavLink__label}>Perfil</span>
              </ButtonBase>
            </li>
          </ul>
        </nav>
      </div >
      <Drawer
        open={openDraw === 'perfil'}
        onClose={handleClose}
        anchor='bottom'
        PaperProps={{
          sx: { height: '100%' }
        }}
      >
        <Stack sx={{ flexDirection: 'row', justifyContent: 'flex-end', px: '2rem', marginBottom: '-1rem' }}>
          <IconButton onClick={handleClose}>
            <MdClose />
          </IconButton>
        </Stack>
        <List disablePadding>
          <UserMenu />
        </List>
      </Drawer>
    </>
  )
}
