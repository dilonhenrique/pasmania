import React from 'react';
import styles from './RestaurantStatus.module.scss';
import DeliveryMode from '@/components/patterns/DeliveryMode';
import Status from '@/components/patterns/RestaurantStatus/Status';

export default function RestaurantStatus() {
  return (
    <>
      <section className={`container ${styles.statusContainer}`}>
        <Status />
        <DeliveryMode />
      </section>
    </>
  )
}
