import React from 'react';
import styles from './DrawerTitle.module.scss';
import { IconButton, Typography } from '@mui/material';
import { MdClose, MdKeyboardArrowDown } from 'react-icons/md';
import useMobile from '@/common/hooks/useMobile';

interface DrawerTitleProps {
  children?: React.ReactNode;
  handleClose?: () => void;
  action?: React.ReactNode;
}

export default function DrawerTitle({ children, handleClose, action }: DrawerTitleProps) {
  const isMobile = useMobile();

  return (
    <div className={styles.titleContainer}>
      <div>
        {handleClose &&
          <IconButton onClick={handleClose} sx={{ mx: '-.5em' }}>
            {isMobile ? <MdKeyboardArrowDown /> : <MdClose />}
          </IconButton>}
      </div>
      <div>
        <Typography variant='h5' sx={{ width: '100%', textAlign: 'center' }}>{children}</Typography>
      </div>
      <div>
        {action}
      </div>
    </div>
  )
}
