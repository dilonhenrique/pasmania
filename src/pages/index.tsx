import Head from 'next/head';
import Banner from '@/components/patterns/Banner';
import ProductList from '@/components/patterns/ProductList';
import RestaurantStatus from '@/components/patterns/RestaurantStatus';
import { useMenuContext } from '@/common/context/menu';

export default function Home() {
  const { menu } = useMenuContext();
  if (menu.isLoading) return;

  return (
    <>
      <Head>
        <title>Pasmania pastéis | Gravataí e Cachoeirinha</title>
        <meta name="description" content="Pasmania pastéis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ paddingTop: 0 }}>
        <Banner />
        <RestaurantStatus />
        <ProductList />
      </main>
    </>
  )
}
