import React from 'react';
import styles from './SearchBarMobile.module.scss';
import SearchBar from '../';

export default function SearchBarMobile() {
  return (
    <div className={styles.searchBarMobile}>
      <div className='container'>
        <SearchBar />
      </div>
    </div>
  )
}
