import Head from 'next/head';
import { useMenuContext } from '@/common/context/menu';
import { useRouter } from 'next/router';
import { ICategory, IProduct } from '@/common/interfaces/interfaces';
import ProductPage from '@/components/patterns/ProductPage';

export default function Product() {
  const { menu } = useMenuContext();

  if (menu.isLoading) return;

  const router = useRouter();
  const product = getProduct();

  function getProduct() {
    let retorno = undefined as IProduct | undefined;
    menu?.menu?.forEach((categoria: ICategory) => {
      if (retorno !== undefined) return;
      categoria.products.forEach(item => {
        if (String(item.sku) === router.query.sku) {
          retorno = item;
        }
      })
    })

    return retorno;
  }

  return (
    <>
      <Head>
        <title>Pasmania pastéis | Gravataí e Cachoeirinha</title>
        <meta name="description" content="Pasmania pastéis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ProductPage product={product} />
      </main>
    </>
  )
}
