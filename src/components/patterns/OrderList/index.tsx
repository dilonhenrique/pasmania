import React from 'react';
import styles from './OrderList.module.scss';
import OrderCard from '../OrderCard';
import { IOrder } from '@/common/interfaces/interfaces'
import { Typography } from '@mui/material';

interface OrderListProps {
  orders?: IOrder[];
}

export default function OrderList({ orders }: OrderListProps) {
  return (
    <>
      <section className='container'>
        <div className={styles.categoryList}>
          <Typography variant='h3'>Meus pedidos</Typography>
          {orders?.length
            ? <ul className={styles.productList}>
              {orders?.map((order: IOrder) => <OrderCard key={order.id} order={order} />)}
            </ul>
            : <>Nenhum histórico de compra encontrado.</>}
        </div>
      </section>
    </>
  )
}
