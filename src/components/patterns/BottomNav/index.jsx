import React, { useState } from 'react';
import styles from './BottomNav.module.scss';
import { ButtonBase, Drawer, IconButton, List, Stack } from '@mui/material';
import { TbToolsKitchen2, TbSearch, TbReceipt, TbUser } from 'react-icons/tb';
import UserMenu from '@/components/elements/UserMenu';
import { MdClose } from 'react-icons/md';

export default function BottomNav() {
  const [openUser, setOpenUser] = useState(false);
  function handleClose() {
    setOpenUser(false);
  }

  return (
    <>
      <div className={styles.bottomNavContainer}>
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
              <ButtonBase onClick={() => setOpenUser(true)}>
                <TbUser size={30} />
                <span className={styles.bottomNavLink__label}>Perfil</span>
              </ButtonBase>
            </li>
          </ul>
        </nav>
      </div >
      <Drawer
        open={openUser}
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
