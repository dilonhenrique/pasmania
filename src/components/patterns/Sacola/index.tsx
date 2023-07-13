import React from 'react';
import styles from './Sacola.module.scss';
import productStyles from './SacolaProduct/SacolaProduct.module.scss';
import SacolaProduct from './SacolaProduct';
import { useSacolaContext } from '@/common/context/sacola';
import { Box, Collapse, Drawer, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';
import useValorSacola from '@/common/hooks/useValorSacola';
import { TbPaperBagOff } from 'react-icons/tb';
import { MdClose } from 'react-icons/md';

interface SacolaProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sacola({ openMenu, setOpenMenu }: SacolaProps) {
  const { sacola, setSacola } = useSacolaContext();
  const { subtotal, frete, total } = useValorSacola();

  function limparSacola() {
    setSacola([]);
  }

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
          padding: '5rem 3rem',
          width: '500px',
          maxWidth: '100%',
        }
      }}
    >
      <Stack alignItems='flex-end'>
        <IconButton onClick={handleClose}>
          <MdClose />
        </IconButton>
      </Stack>
      {sacola.length
        ? <div>
          <Stack className={styles.title}>
            <Typography variant='h5' color='primary' sx={{ mb: 2 }}>Sua sacola:</Typography>
            {/* <Tooltip title='Limpar sacola' slotProps={{ tooltip: { sx: { fontSize: '0.8rem' } } }}>
              <IconButton color='error' onClick={limparSacola}>
                <TbPaperBagOff />
              </IconButton>
            </Tooltip> */}
          </Stack>
          <TransitionGroup>
            {sacola.map(item => {
              return (
                <Collapse key={item.id} className={styles.product}>
                  <SacolaProduct product={item} />
                </Collapse>
              )
            })}
          </TransitionGroup>
          <hr style={{ marginBottom: '1rem', marginTop: '.5rem' }} />
          <div className={productStyles.productContainer}>
            <div>Subtotal</div>
            <div>{subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
          </div>
          <div className={productStyles.productContainer}>
            <div>Frete</div>
            <div>{frete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
          </div>
          <div className={productStyles.productContainer}>
            <div>Total</div>
            <div>{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
          </div>
        </div>
        : <>Nenhum item na sua sacola :(</>
      }
    </Drawer>
  )
}
