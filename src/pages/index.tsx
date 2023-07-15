import Head from 'next/head';
import Banner from '@/components/patterns/Banner';
import ProductList from '@/components/patterns/ProductList';
import RestaurantStatus from '@/components/patterns/RestaurantStatus';
import { useMenuContext } from '@/common/context/menu';
import BottomNav from '@/components/patterns/BottomNav';
import useMobile from '@/common/hooks/useMobile';
import { Slide } from '@mui/material';
import SacolaMobile from '@/components/elements/SacolaMobile';
import { useSacolaContext } from '@/common/context/sacola';

export default function Home() {
  const { menu } = useMenuContext();
  const isMobile = useMobile();
  const { sacola } = useSacolaContext();

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
            <Slide direction='up' in={Boolean(sacola.length)}>
              <SacolaMobile sacola={sacola} />
            </Slide>
          </>}
        </>}
      </main>
    </>
  )
}
