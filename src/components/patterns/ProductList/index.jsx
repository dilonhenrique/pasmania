import React from 'react';
import styles from './ProductList.module.scss';
import { useMenuContext } from '@/common/context/menu';
import ProductCard from '../ProductCard';
import ScrollMenu from '@/components/patterns/ScrollMenu';

export default function ProductList() {
  const { menu } = useMenuContext();

  return (
    <>
      <ScrollMenu menu={menu.menu} />
      <section className='container'>
        {menu.menu && menu.menu.map(categoria => (
          <div key={categoria.categorySKU} id={categoria.categorySKU} className={styles.categoryList}>
            <h2 className={styles.category}>{categoria.category}</h2>
            <ul className={styles.productList}>
              {categoria.products && categoria.products.map(produto => (
                <ProductCard key={produto.sku} product={produto} />
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  )
}
