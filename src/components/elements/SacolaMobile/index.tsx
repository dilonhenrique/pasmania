import React, { useState, forwardRef } from 'react';
import useValorSacola from '@/common/hooks/useValorSacola';
import Sacola from '@/components/patterns/Sacola';
import { Badge, Button } from '@mui/material';
import { TbPaperBag } from 'react-icons/tb';
import styles from './Sacola.module.scss';
import { ISacolaProduct } from '@/common/interfaces/interfaces';

interface SacolaMobileProps {
  sacola: ISacolaProduct[];
}

const SacolaMobile = forwardRef<HTMLDivElement,SacolaMobileProps>(({ sacola }, ref) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { total } = useValorSacola();

  const handleOpen = () => {
    setOpenMenu(true);
  };

  return (
    <div className={styles.sacolaContainer} ref={ref}>
      <Button onClick={handleOpen} className={styles.sacolaButton} fullWidth>
        <Badge
          badgeContent={sacola.length}
          sx={{
            '.MuiBadge-badge': {
              height: '15px',
              minWidth: '15px',
              fontSize: '10px',
              padding: '0 4px',
              backgroundColor: '#FFFFFF',
            }
          }}
        >
          <TbPaperBag size='1.5rem' />
        </Badge>
        <p>Ver sacola</p>
        <p><small>R$</small> {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).slice(3)}</p>
      </Button>
      <Sacola openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  )
})


export default SacolaMobile;
