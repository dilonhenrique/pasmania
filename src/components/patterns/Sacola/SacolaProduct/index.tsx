import React from 'react';
import styles from '../Sacola.module.scss';
import { useSacolaContext } from '@/common/context/sacola';
import { ISacolaProduct } from '@/common/interfaces/interfaces';
import { TiDelete } from 'react-icons/ti';
import { IconButton, Tooltip } from '@mui/material';

interface SacolaProductProps {
  product: ISacolaProduct;
}

export default function SacolaProduct({ product }: SacolaProductProps) {
  const { removeItemSacola } = useSacolaContext();

  return (
    <div className={styles.sacolaLine}>
      <div>
        <h4><span className={styles.sacolaQtd}>{product.qtd || 1}</span> {product.product}</h4>
      </div>
      <div>
        <p>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      </div>
      <div>
        <Tooltip title='Tirar da sacola' slotProps={{ tooltip: { sx: { fontSize: '0.8rem' } } }}>
          <IconButton onClick={() => removeItemSacola(product.id)} edge='end'>
            <TiDelete />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  )
}
