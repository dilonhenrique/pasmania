import React, { useState } from 'react';
import { useClienteContext } from '@/common/context/cliente';
import { Button, Dialog, DialogContent, DialogTitle, Modal, Stack, Typography } from '@mui/material';
import { useMenuContext } from '@/common/context/menu';
import useValorSacola from '@/common/hooks/useValorSacola';
import { TbMapPin } from 'react-icons/tb';
import ButtonChoice from '@/components/elements/ButtonChoice';
import styles from './DeliveryAddress.module.scss';

export default function DeliveryAdress() {
  const { cliente } = useClienteContext();
  const { menu } = useMenuContext();
  const { frete } = useValorSacola();
  const enderecoPadrao = JSON.parse(localStorage.getItem('pasmaniaAddress')) || cliente.endereco[0];

  const minEntrega = (Number(menu.timeDeliverMin.split(':')[0]) * 60) + Number(menu.timeDeliverMin.split(':')[1])
  const maxEntrega = (Number(menu.timeDeliverMax.split(':')[0]) * 60) + Number(menu.timeDeliverMax.split(':')[1])

  const [openModal, setOpenModal] = useState(false);
  function isSameAddress(ad1, ad2) {
    return (ad1.rua == ad2.rua
      && ad1.numero == ad2.numero
      && ad1.complemento == ad2.complemento
      && ad1.bairro == ad1.bairro
      && ad1.cidade == ad2.cidade
      && ad1.uf == ad2.uf)
  }

  function selectAddress(endereco){
    localStorage.setItem('pasmaniaAddress',JSON.stringify(endereco));
    setOpenModal(false);
  }

  return (
    <>
      <div className={styles.addressDescription}>
        <Typography variant='h3' color='secondary' sx={{mb:'1rem'}}>Entregar em:</Typography>
        <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h4 style={{marginBottom: '0.5rem'}}>{enderecoPadrao.rua}, {enderecoPadrao.numero}, {enderecoPadrao.complemento}</h4>
            <p>Entrega: {frete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            <p>de {minEntrega} a {maxEntrega}min</p>
          </div>
          <Button variant='outlined' onClick={() => setOpenModal(true)}>Alterar</Button>
        </Stack>
      </div>
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <DialogTitle color='primary'>
          Onde quer receber seu pedido?
        </DialogTitle>
        <DialogContent>
          <Stack alignItems='flex-start' gap={1}>
            {cliente.endereco.map(endereco => (
              <ButtonChoice startIcon={<TbMapPin size={30} />} onClick={() => selectAddress(endereco)} ativo={isSameAddress(endereco, enderecoPadrao)}>
                <h4>{endereco.rua}, {endereco.numero}, {endereco.complemento}</h4>
                <p>{endereco.bairro}, {endereco.cidade} - {endereco.uf}</p>
              </ButtonChoice>
            ))}
            <Button>Cadastrar endereço</Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  )
}
