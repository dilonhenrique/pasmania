import React from 'react';
import styles from './ProductCard.module.scss';
import { IProduct } from '@/common/interfaces/interfaces';
import { HiCurrencyDollar } from 'react-icons/hi';
import { TiPlus } from 'react-icons/ti';
import { Button, IconButton } from '@mui/material';
import { useSacolaContext } from '@/common/context/sacola';
import { v4 as uuid } from 'uuid';

interface ProductCardProps {
  product: IProduct;
}


export default function ProductCard({ product }: ProductCardProps) {
  const { setSacola } = useSacolaContext();
  function addProduct() {
    setSacola((sacolaAtual) => [...sacolaAtual, { ...product, id: uuid() }])
  }

  return (
    <li className={styles.productContainer}>
      <div className={styles.productInfos}>
        <div>
          <h3 className={styles.productName}>{product.product}</h3>
          <p className={styles.productDescription}>{product.description}</p>
        </div>
        <div className={styles.productBuy}>
          <div className={styles.productPrices}>
            <p className={styles.productPrice}>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            <p className={styles.productCashback} title='Cashback'><HiCurrencyDollar size={20} style={{ marginRight: '.2rem' }} />{product.cashback.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          </div>
          <div className={styles.productQuickAdd}>
            <Button
              color='primary'
              variant='contained'
              size='large'
              disableElevation
              onClick={addProduct}
              sx={{
                minWidth: 0,
                width: '40px',
                height: '40px',
                padding: 0,
                borderRadius: '50%',
                color: theme => theme.palette.common.white,
              }}
            >
              <TiPlus size={20} />
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.productPhoto} style={{ backgroundImage: `url(${product.image})` }}>
      </div>
    </li>
  )
}
