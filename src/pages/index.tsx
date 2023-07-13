import Head from 'next/head';
import Banner from '@/components/patterns/Banner';
import ProductList from '@/components/patterns/ProductList';
import RestaurantStatus from '@/components/patterns/RestaurantStatus';
import { useMenuContext } from '@/common/context/menu';
import BottomNav from '@/components/patterns/BottomNav';
import useMobile from '@/common/hooks/useMobile';

export default function Home() {
  const { menu } = useMenuContext();
  const isMobile = useMobile();

  return (
    <>
      <Head>
        <title>Pasmania pastéis | Gravataí e Cachoeirinha</title>
        <meta name="description" content="Pasmania pastéis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {!menu.isLoading && <>
          <Banner />
          <RestaurantStatus />
          <ProductList />
          {isMobile && <>
            <BottomNav />
          </>}
        </>}
      </main>
    </>
  )
}
