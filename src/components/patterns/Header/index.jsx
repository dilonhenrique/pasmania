import React from 'react';
import PasmaniaLogo from './PasmaniaLogo';
import SideMenu from '@/components/elements/SideMenu';
import SearchBar from '@/components/elements/SearchBar';
import UserMenuButton from '@/components/elements/UserMenu/UserMenuButton';
import SacolaButton from '@/components/elements/SacolaButton';
import styles from './Header.module.scss';
import { useTheme } from '@emotion/react';
import useMobile from '@/common/hooks/useMobile';

export default function Header() {
  const theme = useTheme();
  const isMobile = useMobile();

  return (
    <header className={styles.header} style={{ backgroundColor: theme.palette.secondary.main }}>
      <div className='container'>
        <div className={ `${styles.iconContainer} ${isMobile ? styles.mobile : ''}`}>
          <SideMenu />
          <PasmaniaLogo />
        </div>
        {!isMobile &&
          <>
            <SearchBar />
            <div className={styles.iconContainer}>
              <UserMenuButton />
              <SacolaButton />
            </div>
          </>}
      </div>
    </header>
  )
}
