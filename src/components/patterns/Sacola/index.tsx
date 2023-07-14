import React from 'react';
import styles from './Sacola.module.scss';
import productStyles from './SacolaProduct/SacolaProduct.module.scss';
import SacolaProduct from './SacolaProduct';
import { useSacolaContext } from '@/common/context/sacola';
import { Collapse, Divider, Stack, Typography } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';
import useValorSacola from '@/common/hooks/useValorSacola';

export default function Sacola() {
  const { sacola, emptySacola } = useSacolaContext();
  const { subtotal, frete, total } = useValorSacola();

  return (
    <>
      {sacola.length
        ? <div>
          <Stack className={styles.title}>
            <Typography variant='h3' color='secondary'>Sua sacola:</Typography>
            {/* <Tooltip title='Limpar sacola' slotProps={{ tooltip: { sx: { fontSize: '0.8rem' } } }}>
              <IconButton color='error' onClick={emptySacola}>
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

          <Divider sx={{ marginBottom: '1rem', marginTop: '.5rem' }} />

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
    </>
  )
}
