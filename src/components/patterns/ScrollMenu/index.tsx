import React, { } from 'react';
import styles from './ScrollMenu.module.scss';
import { ICategory } from '@/common/interfaces/interfaces';
import { MenuItem, Slide } from '@mui/material';
import useActiveMenu from '@/common/hooks/useActiveMenu';


interface ScrollMenuProps {
  menu: ICategory[];
}

export default function ScrollMenu({ menu }: ScrollMenuProps) {
  const categoryIds = menu?.map(categoria => (String(categoria.categorySKU)));
  const anchorOffset = 120;
  const activeCategory = categoryIds ? useActiveMenu(categoryIds, anchorOffset) : undefined;

  function navigate(id: number) {
    if (id) {
      const section = document.getElementById(String(id));

      window.scrollTo({
        behavior: 'smooth',
        top: section?.offsetTop! - anchorOffset + 1,
      })
    }
  }

  return (
    <Slide in={Boolean(activeCategory)}>
      <div className={styles.menuContainer}>
        <div className='container' id='scrollMenu'>
          {menu?.map(categoria => (
            <MenuItem
              key={categoria.categorySKU}
              className={`${styles.menuItem} ${activeCategory === String(categoria.categorySKU) ? styles.active : ''}`}
              onClick={() => navigate(categoria.categorySKU)}
              id={`button-${categoria.categorySKU}`}
            >
              {categoria.category}
            </MenuItem>
          ))}
        </div>
      </div>
    </Slide>
  )
}
