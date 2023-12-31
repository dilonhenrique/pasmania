import { IOrder } from "@/common/interfaces/interfaces";
import OrderList from "@/components/patterns/OrderList";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { myOrders } from '@/mock/server';

export default function Orders({ orders }: { orders?: IOrder[] }) {
  return (
    <>
      <Head>
        <title>Pasmania pastéis | Gravataí e Cachoeirinha</title>
        <meta name="description" content="Pasmania pastéis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='contentfull'>
        <OrderList orders={orders} />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{ orders: IOrder[] }> = async (context) => {
  const orders = myOrders;

  return {
    props: {
      orders
    },
  };
};