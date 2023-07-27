import React, { useEffect, useState } from 'react';
import { Button, Collapse, Divider, Stack, Tab, Tabs, TextField } from '@mui/material';
import DeliveryAddress from '@/components/patterns/DeliveryAddress';
import DeliverySchedule from '@/components/patterns/DeliverySchedule';
import TakeAwayAddress from '@/components/patterns/TakeAwayAddress';
import PaymentMethod from '@/components/patterns/PaymentMethod';
import { useMenuContext } from '@/common/context/menu';

export default function DeliveryOptions() {
  const { menu } = useMenuContext();
  const [deliveryTab, setDeliveryTab] = useState(0);
  const [paymentTab, setPaymentTab] = useState(0);

  function deliveryTabChanger(event, newValue) {
    setDeliveryTab(newValue);
    localStorage.setItem('pasmania-entregaMode', newValue === 0 ? 'delivery' : 'takeAway');
  }

  function paymentTabChanger(event, newValue) {
    setPaymentTab(newValue);
  }

  useEffect(() => {
    const modoEntrega = localStorage.getItem('pasmania-entregaMode') || 'delivery';
    if (modoEntrega !== 'delivery') {
      setDeliveryTab(1);
    }
  }, [])

  function submit(){
    alert('Função não disponível na versão de demonstração')
  }

  return (
    <>
      <div>
        <Tabs value={deliveryTab} onChange={deliveryTabChanger} indicatorColor='secondary'>
          <Tab label='Entrega' />
          <Tab label='Retirada' />
        </Tabs>
        <Collapse in={deliveryTab === 0} sx={{ margin: '1rem 0' }}>
          <DeliveryAddress />
          <DeliverySchedule />
        </Collapse>
        <Collapse in={deliveryTab === 1} sx={{ margin: '1rem 0' }}>
          <TakeAwayAddress />
          <DeliverySchedule takeAway />
        </Collapse>
      </div>
      <Divider sx={{my:'2rem'}} />
      <div>
        <Tabs value={paymentTab} onChange={paymentTabChanger} indicatorColor='secondary'>
          {menu.physicalPayments !== 'OFF' && <Tab label='Pague na entrega' />}
          {menu.onlinePayments !== 'OFF' && <Tab label='Pague pelo site' />}
        </Tabs>
        <Collapse in={paymentTab === 0} sx={{ margin: '1rem 0' }}>
          <PaymentMethod />
        </Collapse>
        <Collapse in={paymentTab === 1} sx={{ margin: '1rem 0' }}>
          <>Função indisponível</>
        </Collapse>
      </div>
      <Divider sx={{my:'2rem'}} />
      <Stack gap={2}>
        <TextField label='Observações' fullWidth />
        <Button color='secondary' variant='contained' onClick={submit}>Finalizar compra</Button>
      </Stack>
    </>
  )
}
