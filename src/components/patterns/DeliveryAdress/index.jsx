import React, { useState } from 'react';
import { useClienteContext } from '@/common/context/cliente';
import { Button, Dialog, Modal, Stack, Typography } from '@mui/material';
import { useMenuContext } from '@/common/context/menu';
import useValorSacola from '@/common/hooks/useValorSacola';

export default function DeliveryAdress() {
  const { cliente } = useClienteContext();
  const { menu } = useMenuContext();
  const { frete } = useValorSacola();
  const enderecoPadrao = localStorage.getItem('pasmaniaAddress') || cliente.endereco[0];

  const minEntrega = (Number(menu.timeDeliverMin.split(':')[0]) * 60) + Number(menu.timeDeliverMin.split(':')[1])
  const maxEntrega = (Number(menu.timeDeliverMax.split(':')[0]) * 60) + Number(menu.timeDeliverMax.split(':')[1])

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div style={{ marginBottom: '2rem', lineHeight: 1.5 }}>
        <Typography variant='h5' color='primary'>Entregar em:</Typography>
        <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h4>{enderecoPadrao.rua}, {enderecoPadrao.numero}, {enderecoPadrao.complemento}</h4>
            <p>Entrega: {frete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            <p>de {minEntrega} a {maxEntrega}min</p>
          </div>
          <Button color='inherit' onClick={() => setOpenModal(true)}>Alterar</Button>
        </Stack>
      </div>
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        Listar Endereços
      </Dialog>
    </>
  )
}
