import React from 'react';
import styles from './OrderList.module.scss';
import OrderCard from '../OrderCard';
import { IOrder } from '@/common/interfaces/interfaces';
import { myOrders } from '@/mock/server';
import { Typography } from '@mui/material';

export default function OrderList() {
  return (
    <>
      <section className='container'>
        <div className={styles.categoryList}>
          <Typography variant='h3'>Meus pedidos</Typography>
          {myOrders.length
            ? <ul className={styles.productList}>
              {myOrders?.map((order: IOrder) => <OrderCard key={order.id} order={order} />)}
            </ul>
            : <>Busque o produto que quiser...</>}
        </div>
      </section>
    </>
  )
}
