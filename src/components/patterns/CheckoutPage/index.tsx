import React from 'react';
import styles from './CheckoutPage.module.scss';
import { useSacolaContext } from '@/common/context/sacola';
import Sacola from '../Sacola';
import DeliveryOptions from '@/components/patterns/DeliveryOptions';

export default function CheckoutPage() {
  const { sacola } = useSacolaContext();

  return (
    <section className={`container ${styles.checkoutContainer}`}>
      <div className={styles.checkoutInfos}>
        <DeliveryOptions />
      </div>
      <div className={styles.sacolaDescription}>
        <Sacola sacola={sacola} inDrawer={false} />
      </div>
    </section>
  )
}
