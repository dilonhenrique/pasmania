import React from 'react';
import Head from 'next/head';
import { useMenuContext } from '@/common/context/menu';
import { useSearchContext } from '@/common/context/search';
import { ICategory } from '@/common/interfaces/interfaces';
import ProductList from '@/components/patterns/ProductList';
import useMobile from '@/common/hooks/useMobile';
import SearchBarMobile from '@/components/elements/SearchBar/SearchBarMobile';

export default function Search() {
  const { menu } = useMenuContext();
  if (menu.isLoading) return;

  const isMobile = useMobile();
  const { search } = useSearchContext();

  const menuFiltrado = menu.menu.reduce((filtrado: ICategory[] | null, categoria: ICategory) => {
    const searchTerm = search.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (searchTerm === '') return null;

    const prodFilter = categoria.products.filter(product => product.product.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchTerm) || product.description.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchTerm));
    if(prodFilter.length && filtrado !== null) filtrado.push({ ...categoria, products: prodFilter });
    
    return filtrado;
  }, []);

  return (
    <>
      <Head>
        <title>Pasmania pastéis | Gravataí e Cachoeirinha</title>
        <meta name="description" content="Pasmania pastéis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='contentfull'>
        {isMobile && <SearchBarMobile />}
        <ProductList search={menuFiltrado} />
      </main>
    </>
  )
}
