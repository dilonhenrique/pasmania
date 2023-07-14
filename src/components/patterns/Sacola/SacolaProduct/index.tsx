import React from 'react';
import styles from './SacolaProduct.module.scss';
import { useSacolaContext } from '@/common/context/sacola';
import { ISacolaProduct } from '@/common/interfaces/interfaces';
import { TiDelete } from 'react-icons/ti';
import { IconButton, Tooltip } from '@mui/material';

interface SacolaProductProps {
  product: ISacolaProduct;
}

export default function SacolaProduct({ product }: SacolaProductProps) {
  const { sacola, setSacola } = useSacolaContext();

  function removeProductFromSacola() {
    setSacola(sacolaAtual => {
      const novaSacola = sacolaAtual.filter(item => item.id !== product.id);
      return novaSacola;
    })
  }

  return (
    <div className={styles.productContainer}>
      <div>
        <h4>{product.product}</h4>
      </div>
      <div>
        <p>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      </div>
      <div>
        <Tooltip title='Tirar da sacola' slotProps={{ tooltip: { sx: { fontSize: '0.8rem' } } }}>
          <IconButton onClick={removeProductFromSacola}>
            <TiDelete />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  )
}
