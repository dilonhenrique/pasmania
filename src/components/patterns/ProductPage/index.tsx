import React, { useState } from 'react';
import { IProduct } from '@/common/interfaces/interfaces';
import { Button, FormGroup, IconButton, Stack, TextField, Typography } from '@mui/material';
import styles from './ProductPage.module.scss';
import { HiCurrencyDollar, HiMinus, HiPlus } from 'react-icons/hi';
import { TiPlusOutline } from 'react-icons/ti';
import { useSacolaContext } from '@/common/context/sacola';
import NotFoundMessage from '@/components/elements/NotFoundMessage';

interface ProductPageProps {
  product?: IProduct;
}

export default function ProductPage({ product }: ProductPageProps) {
  if (!product) return <NotFoundMessage message='Produto não encontrado' />;

  const { addItemSacola } = useSacolaContext();
  const [qtd, setQtd] = useState(1);

  function aumentarQtd() {
    setQtd(atual => ++atual);
  }

  function diminuirQtd() {
    setQtd(atual => atual > 0 ? --atual : atual);
  }

  return (
    <section className={`container ${styles.productContainer}`}>
      <div className={styles.productPhoto}>
        <img src={product.image} alt={product.description} />
      </div>
      <div className={styles.productInfos}>
        <div className={styles.productTitle}>
          <Typography variant='h2'>{product.product}</Typography>
          <p>{product.description}</p>
        </div>
        <div className={styles.productPrices}>
          <p className={styles.productPrice}>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
          <p className={styles.productCashback} title='Cashback'><HiCurrencyDollar size={20} style={{ marginRight: '.2rem' }} />{product.cashback.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        </div>
        <div className={styles.productActions}>
          <TextField fullWidth label='Observações' />
          <Stack
            sx={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              gap: 3,
              flexWrap: 'wrap',
            }}
          >
            <FormGroup row>
              <IconButton disabled={qtd < 2} onClick={diminuirQtd}><HiMinus /></IconButton>
              <TextField
                type='number'
                size='small'
                value={qtd}
                onChange={(evento) => setQtd(Number(evento.target.value))}
                sx={{ width: '50px', textAlign: 'center' }}
              />
              <IconButton onClick={aumentarQtd}><HiPlus /></IconButton>
            </FormGroup>
            <Button
              variant='contained'
              color='secondary'
              size='large'
              sx={{ width: '250px', maxWidth: '100%' }}
              startIcon={<TiPlusOutline />}
              onClick={() => addItemSacola(product, qtd)}
            >
              <strong>Adicionar</strong> | {(product.price * qtd).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </Button>
          </Stack>
        </div>
      </div>
    </section>
  )
}
