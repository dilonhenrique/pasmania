import React, { useState } from 'react'
import { Badge, Button, Collapse } from '@mui/material'
import { TbPaperBag } from 'react-icons/tb';
import styles from './Sacola.module.scss';
import { useSacolaContext } from '@/common/context/sacola';
import Sacola from '@/components/patterns/Sacola';
import useValorSacola from '@/common/hooks/useValorSacola';

export default function SacolaButton() {
  const [openMenu, setOpenMenu] = useState(false);
  const { sacola } = useSacolaContext();
  const { total } = useValorSacola();

  const handleOpen = () => {
    setOpenMenu(true)
    // setSacola(!sacola.length ? [1,2,3] : [])
  };

  return (
    <div>
      <Button onClick={handleOpen} className={`${styles.sacolaButton} ${sacola.length ? styles.withProduct : ''}`}>
        <Badge
          badgeContent={sacola.length}
          color="primary"
          sx={{
            '.MuiBadge-badge': {
              height: '15px',
              minWidth: '15px',
              fontSize: '10px',
              padding: '0 4px'
            }
          }}
        >
          <TbPaperBag size='1.5rem' />
        </Badge>
        <Collapse in={Boolean(sacola.length)} orientation='horizontal'>
          <p><small>R$</small> {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).slice(3)}</p>
        </Collapse>
      </Button>
      <Sacola openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  )
}
