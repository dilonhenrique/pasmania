import React from 'react';
import styles from './OrderCard.module.scss';
import { ICategory, IOrder, IProduct, ISacolaProduct } from '@/common/interfaces/interfaces';
import { Button, ButtonBase, ButtonBaseProps, styled } from '@mui/material';
import { useSacolaContext } from '@/common/context/sacola';
import { LinkProps } from 'next/link';
import { useMenuContext } from '@/common/context/menu';
import { CiReceipt } from 'react-icons/ci';

interface OrderCardProps {
  order: IOrder;
}

const OrderContainer = styled(ButtonBase)<ButtonBaseProps & LinkProps>(() => ({
  borderRadius: '8px',
  background: '#FFF',
  flexShrink: 1,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  gap: '20px',

  boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  marginBottom: 0,
}))

export default function OrderCard({ order }: OrderCardProps) {
  const { addItemSacola } = useSacolaContext();
  const { menu } = useMenuContext();

  function repetirPedido(products: ISacolaProduct[]) {
    const updatedProducts = products.reduce((array: ISacolaProduct[], produto: ISacolaProduct) => {
      let novoProd: IProduct | undefined = undefined;

      menu.menu.forEach((categoria: ICategory) => {
        if (novoProd === undefined) {
          novoProd = categoria.products.find(item => item.sku === produto.sku);
        } else { return }
      })

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
    <li>
      <OrderContainer href={`/pedidos/${order.id}`}>
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
              {order.products?.map((produto, index) => {
                if (index === 2) return <p><em>mais {order.products.length - 2}...</em></p>;
                if (index > 2) return;
                return (
                  <p><span>{produto.qtd || 1}</span> {produto.product}</p>
                )
              })}
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
      </OrderContainer>
    </li>
  )
}
