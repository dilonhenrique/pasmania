import React from 'react';
import styles from './ProductCard.module.scss';
import { IProduct } from '@/common/interfaces/interfaces';
import { HiCurrencyDollar } from 'react-icons/hi';
import { TiPlus } from 'react-icons/ti';
import { Button, ButtonBase, ButtonBaseProps, styled } from '@mui/material';
import { useSacolaContext } from '@/common/context/sacola';
import { LinkProps } from 'next/link';

interface ProductCardProps {
  product: IProduct;
}

const ProductContainer = styled(ButtonBase)<ButtonBaseProps & LinkProps>(() => ({
  borderRadius: '8px',
  background: '#FFF',
  flexShrink: 1,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  marginBottom: '1rem',
  gap: '20px',
  
 '@media (min-width:600px)':{
    boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    marginBottom: 0,
  }
}))

export default function ProductCard({ product }: ProductCardProps) {
  const { addItemSacola } = useSacolaContext();

  return (
    <li>
      <ProductContainer href={`/produto/${product.sku}`}>
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
                color='secondary'
                variant='contained'
                size='large'
                disableElevation
                onMouseDown={(e) => e.stopPropagation()}
                onClick={(e) => {
                  e.preventDefault();
                  addItemSacola(product);
                }}
                aria-label={`Adicionar ${product.product} a sacola de compras`}
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
        <div className={styles.productPhoto}>
          <img src={product.image} alt={product.description} loading='lazy' />
        </div>
      </ProductContainer>
    </li>
  )
}
