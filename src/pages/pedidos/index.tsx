import OrderList from "@/components/patterns/OrderList";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pasmania pastéis | Gravataí e Cachoeirinha</title>
        <meta name="description" content="Pasmania pastéis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='contentfull'>
        <OrderList />
      </main>
    </>
  )
}