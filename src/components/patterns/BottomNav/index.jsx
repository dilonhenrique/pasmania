import React, { useState } from 'react';
import styles from './BottomNav.module.scss';
import SacolaMobile from '@/components/elements/SacolaMobile';
import { useSacolaContext } from '@/common/context/sacola';
import { BottomNavigation, BottomNavigationAction, Button, Slide } from '@mui/material';
import { TbToolsKitchen2, TbSearch, TbReceipt, TbUser } from 'react-icons/tb';
import Link from 'next/link';

export default function BottomNav() {
  const { sacola } = useSacolaContext();
  const [value, setValue] = useState(0);

  return (
    <div className={styles.bottomNavContainer}>
      <Slide direction='up' in={Boolean(sacola.length)}>
        <SacolaMobile sacola={sacola} />
      </Slide>
      <nav className={styles.bottomNav}>
        <ul>
          <li className={styles.bottomNavLink}>
            <Link href='/' unselectable='on'>
              <TbToolsKitchen2 size={30} />
              <span className={styles.bottomNavLink__label}>Cardápio</span>
            </Link>
          </li>
          <li className={styles.bottomNavLink}>
            <Link href='/'>
              <TbSearch size={30} />
              <span className={styles.bottomNavLink__label}>Busca</span>
            </Link>
          </li>
          <li className={styles.bottomNavLink}>
            <Link href='/'>
              <TbReceipt size={30} />
              <span className={styles.bottomNavLink__label}>Pedidos</span>
            </Link>
          </li>
          <li className={styles.bottomNavLink}>
            <Link href='/'>
              <TbUser size={30} />
              <span className={styles.bottomNavLink__label}>Perfil</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div >
  )
}
