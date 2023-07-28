import React from 'react';
import styles from './ProductList.module.scss';
import { useMenuContext } from '@/common/context/menu';
import ProductCard from '../ProductCard';
import ScrollMenu from '@/components/patterns/ScrollMenu';
import { Typography } from '@mui/material';
import { ICategory } from '@/common/interfaces/interfaces';
import useMobile from '@/common/hooks/useMobile';
import Page404 from '@/pages/404';
import IllustrationSearch from '@/components/elements/IllustrationSearch';

interface ProductListProps {
  search?: ICategory[] | null;
}

export default function ProductList({ search }: ProductListProps) {
  const isMobile = useMobile();
  const { menu } = useMenuContext();
  if (menu.isLoading) return;

  const menuFiltrado = search || menu.menu;

  return (
    <>
      {(search === undefined || !isMobile) && <ScrollMenu menu={menu.menu} />}
      <section className='container'>
        {search === null
          ? <center><IllustrationSearch /></center>
          : menuFiltrado.length
            ? menuFiltrado?.map((categoria: ICategory) => {
              if (categoria.products?.length === 0) return;
              return (
                <div key={categoria.categorySKU} id={String(categoria.categorySKU)} className={styles.categoryList}>
                  <Typography variant='h3'>{categoria.category}</Typography>
                  <ul className={styles.productList}>
                    {categoria.products && categoria.products.map(produto => (
                      <ProductCard key={produto.sku} product={produto} />
                    ))}
                  </ul>
                </div>
              )
            }
            )
            : <Page404 />}
      </section>
    </>
  )
}
