import React, { useState } from 'react';
import { ICategory, IOrder, IProduct, ISacolaProduct } from '@/common/interfaces/interfaces';
import { Button, FormGroup, IconButton, Stack, TextField, Typography } from '@mui/material';
import styles from './OrderPage.module.scss';
import { HiCurrencyDollar, HiMinus, HiPlus } from 'react-icons/hi';
import { TiPlusOutline } from 'react-icons/ti';
import { useSacolaContext } from '@/common/context/sacola';
import { CiReceipt } from 'react-icons/ci';
import { useMenuContext } from '@/common/context/menu';

interface OrderPageProps {
  order?: IOrder;
}

export default function OrderPage({ order }: OrderPageProps) {
  if (!order) return <>Não encontrado</>;

  const { addItemSacola } = useSacolaContext();
  const { menu } = useMenuContext();

  function repetirPedido(products: ISacolaProduct[]) {
    const updatedProducts = products.reduce((array: ISacolaProduct[], produto: ISacolaProduct) => {
      let novoProd: IProduct | undefined = undefined;

      if (!menu.isLoading) {
        menu.menu.forEach((categoria: ICategory) => {
          if (novoProd === undefined) {
            novoProd = categoria.products.find(item => item.sku === produto.sku);
          } else { return }
        })
      }

      if (novoProd) {
        array.push(novoProd);
        addItemSacola(novoProd, produto.qtd);
      } else {
        console.log(`Produto ${produto.product} não está disponível.`)
      }
      return array;
    }, [])
  }

  return (
    <section className={`container ${styles.orderContainer}`}>
      <div className={styles.orderInfos}>
        <div className={styles.orderHeader}>
          <div className={styles.orderIcon}>
            <CiReceipt color='inherit' size={45} />
          </div>
          <div>
            <h3 className={styles.orderName}>{new Date(order.date).toLocaleDateString('pt-BR', { dateStyle: 'long' })}</h3>
            <p className={styles.orderStatus}>{order.status}</p>
          </div>
        </div>
        <div className={styles.orderBottom}>
          <div className={styles.orderProducts}>
            {order.products?.map((produto) => <p><span>{produto.qtd || 1}</span> {produto.product}</p>)}
          </div>
          <div className={styles.orderQuickAdd}>
            <Button
              variant='outlined'
              color='secondary'
              aria-label={`Adicionar pedido à sacola de compras`}
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.preventDefault();
                repetirPedido(order.products);
              }}
            >
              Adicionar à sacola
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.orderValues}>
        <div className={styles.orderLine}>
          <p><strong>Subtotal</strong></p>
          <p>{order.values.subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        </div>
        <div className={styles.orderLine}>
          <p><strong>Frete</strong></p>
          <p>{order.values.frete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        </div>
        <div className={styles.orderLine}>
          <p><strong>Cashback</strong></p>
          <p>{order.values.cashback.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        </div>
        {order.values.cupom?.discount && <div className={styles.orderLine}>
          <p><strong>Cashback</strong></p>
          <p>{order.values.cupom.discount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        </div>}
        <div className={styles.orderLine}>
          <p><strong>Total</strong></p>
          <p><strong>{order.values.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong></p>
        </div>
      </div>
    </section>
  )
}
