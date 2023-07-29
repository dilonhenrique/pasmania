import Head from 'next/head';
import { useMenuContext } from '@/common/context/menu';
import { ICategory, IMenu, IProduct } from '@/common/interfaces/interfaces';
import ProductPage from '@/components/patterns/ProductPage';
import { GetServerSideProps } from 'next';
import { bitbar } from '@/common/infra/apiServices';

interface ProductProps{
  product?: IProduct;
}

export default function Product({product}:ProductProps) {
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
      <main>
        <ProductPage product={product} />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{ product: IProduct | undefined }> = async (context) => {
  try {
    const sku = context.params?.sku;
    const { menu } = await bitbar.getMenu();
    
    let product = undefined as IProduct | undefined;
    menu.forEach((categoria: ICategory) => {
      if (product !== undefined) return;
      categoria.products.forEach(item => {
        if (String(item.sku) === sku) {
          product = item;
        }
      })
    })

    if (product){
      return {
        props: {
          product
        },
      }
    }

    throw new Error();
  } catch(err){
    return {
      notFound: true
    }
  }
};
