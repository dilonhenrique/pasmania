import React from 'react';
import styles from './BottomNav.module.scss';
import { ButtonBase, Drawer, List, ListItem, Slide } from '@mui/material';
import { TbToolsKitchen2, TbSearch, TbReceipt, TbUser } from 'react-icons/tb';
import UserMenu from '@/components/elements/UserMenu';
import useMobile from '@/common/hooks/useMobile';
import SacolaMobile from '@/components/elements/SacolaMobile';
import { useSacolaContext } from '@/common/context/sacola';
import { useOpenContext } from '@/common/context/open';
import { useRouter } from 'next/router';
import DrawerTitle from '@/components/elements/DrawerTitle';
import { useClienteContext } from '@/common/context/cliente';

export default function BottomNav() {
  const isMobile = useMobile();
  const { openDraw, setOpenDraw } = useOpenContext();
  const { sacola } = useSacolaContext();
  const { cliente } = useClienteContext();
  const router = useRouter();

  function handleClose() {
    setOpenDraw(null);
  }

  const isOpenDrawPageLike = openDraw === 'perfil' || openDraw === 'sacola';

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
              <ButtonBase href='/' onClick={handleClose} className={!isOpenDrawPageLike && router.asPath === '/' && 'active'}>
                <TbToolsKitchen2 size={30} />
                <span className={styles.bottomNavLink__label}>Cardápio</span>
              </ButtonBase>
            </li>
            <li className={styles.bottomNavLink}>
              <ButtonBase href='/buscar' onClick={handleClose} className={!isOpenDrawPageLike && router.asPath === '/buscar' && 'active'}>
                <TbSearch size={30} />
                <span className={styles.bottomNavLink__label}>Busca</span>
              </ButtonBase>
            </li>
            <li className={styles.bottomNavLink}>
              <ButtonBase href='/pedidos' onClick={handleClose} className={!isOpenDrawPageLike && router.asPath === '/pedidos' && 'active'}>
                <TbReceipt size={30} />
                <span className={styles.bottomNavLink__label}>Pedidos</span>
              </ButtonBase>
            </li>
            <li className={styles.bottomNavLink}>
              <ButtonBase onClick={() => setOpenDraw('perfil')} className={openDraw === 'perfil' && 'active'}>
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
        <List disablePadding>
          <ListItem sx={{ mt: 1 }}>
            <DrawerTitle handleClose={handleClose}>Olá, {cliente.nome}</DrawerTitle>
          </ListItem>
          <UserMenu />
        </List>
      </Drawer>
    </>
  )
}
