import React, { useEffect } from "react";
import { ICategory, IMenu, IProduct, ISacolaProduct } from "@/common/interfaces/interfaces";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { bitbar } from "@/common/infra/apiServices";
import { useMenuContext } from "@/common/context/menu";
import { useSacolaContext } from "@/common/context/sacola";
import Sacola from "@/components/patterns/Sacola";
import CheckoutPage from "@/components/patterns/CheckoutPage";

export default function Checkout({ newMenu }: { newMenu?: IMenu }) {
  const { menu, setMenu } = useMenuContext();
  if(menu.isLoading) return;

  const { sacola, setSacola, addItemSacola, emptySacola } = useSacolaContext();

  useEffect(() => {
    if (newMenu) {
      setMenu(newMenu);

      if (!menu.isLoading) {
        //atualizar produtos da sacola de acordo com menu atualizado
        emptySacola();
        const updatedProducts = sacola.reduce((array, produto) => {
          let novoProd: IProduct | undefined = undefined;

          menu.menu.forEach((categoria) => {
            if (novoProd === undefined) {
              novoProd = categoria.products.find(item => item.sku === produto.sku);
            } else { return }
          })

          if (novoProd) {
            array.push(novoProd);
            addItemSacola(novoProd);
          } else {
            console.log(`Produto ${produto.product} não está disponível.`)
          }
          return array;
        }, [])
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>Pasmania pastéis | Gravataí e Cachoeirinha</title>
        <meta name="description" content="Pasmania pastéis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='contentfull'>
        <CheckoutPage />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{ newMenu?: IMenu | undefined }> = async (context) => {
  try {
    const newMenu = await bitbar.getMenu();
    return {
      props: {
        newMenu
      },
    }
  } catch (err) {
    console.log(err);
    return {
      props: {},
    }
  }
};