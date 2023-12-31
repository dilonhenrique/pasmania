import React from 'react';
import styles from './Sacola.module.scss';
import SacolaProduct from './SacolaProduct';
import { Button, Collapse, Divider, IconButton } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';
import useValorSacola from '@/common/hooks/useValorSacola';
import { ISacolaProduct } from '@/common/interfaces/interfaces';
import { TbEditCircle } from 'react-icons/tb';
import { RiQuestionLine } from 'react-icons/ri';

interface SacolaProps {
  sacola: ISacolaProduct[];
  inDrawer?: boolean;
}

export default function Sacola({ sacola, inDrawer = true }: SacolaProps) {
  const { cashback, cupom, subtotal, frete, total } = useValorSacola();

  return (
    <div className={styles.sacolaContainer}>
      <div>
        <TransitionGroup>
          {sacola.map(item => {
            return (
              <Collapse key={item.id} className={styles.product}>
                <SacolaProduct product={item} />
              </Collapse>
            )
          })}
        </TransitionGroup>

        <Divider sx={{ my: '1rem' }} />

        <div className={styles.sacolaLine}>
          <div>
            <p>
              <strong>Cashback</strong>
              <IconButton size='small' href='https://pasmaniacos.com.br/p/como-funciona-o-programa' target='_blank'><RiQuestionLine /></IconButton>
            </p>
            <p><small>CPF: 009.553.790-24</small></p>
          </div>
          <p>{cashback.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        </div>

        <Divider sx={{ my: '1rem' }} />

        <div className={styles.sacolaLine}>
          <div>
            <p><strong>Cupom</strong></p>
          </div>
          <div>
            <IconButton>
              <TbEditCircle />
            </IconButton>
          </div>
        </div>

        <Divider sx={{ marginBottom: '1rem', marginTop: '.5rem' }} />

        <div className={styles.sacolaLine}>
          <p>Subtotal</p>
          <p>{subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        </div>
        <div className={styles.sacolaLine}>
          <p>Frete</p>
          <p>{frete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        </div>
        {cupom.name && cupom.discount
          ? <div className={styles.sacolaLine}>
            <p>Cupom: {cupom.name}</p>
            <p>- {cupom.discount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
          </div>
          : ''
        }

      </div>

      <div>
        <div className={styles.sacolaLine}>
          <h3><strong>Total</strong></h3>
          <h3><strong>{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong></h3>
        </div>
        {inDrawer && <Button fullWidth variant='contained' color='secondary' href='/finalizar'><strong>Escolher forma de pagamento</strong></Button>}
      </div>
    </div>
  )
}
