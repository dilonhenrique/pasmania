import { IOrder } from "@/common/interfaces/interfaces";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { myOrders } from '@/mock/server';
import OrderPage from "@/components/patterns/OrderPage";

export default function Orders({ order }: { order?: IOrder }) {
  return (
    <>
      <Head>
        <title>Pasmania pastéis | Gravataí e Cachoeirinha</title>
        <meta name="description" content="Pasmania pastéis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='contentfull'>
        <OrderPage order={order} />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{ order: IOrder | undefined }> = async (context) => {
  const id = context.params?.id;
  const orders = myOrders;
  const order = orders.find(order => order.id === id);

  if (order)
  return {
    props: {
      order
    },
  };

  return {
    notFound:true
  };
};