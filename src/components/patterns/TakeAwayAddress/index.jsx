import React, { useState } from 'react';
import { useClienteContext } from '@/common/context/cliente';
import { Button, ButtonBase, Dialog, DialogContent, DialogTitle, Modal, Stack, Typography, styled } from '@mui/material';
import { useMenuContext } from '@/common/context/menu';
import useValorSacola from '@/common/hooks/useValorSacola';
import { TbMapPin } from 'react-icons/tb';
import ButtonChoice from '@/components/elements/ButtonChoice';

const StyledButton = styled(Button)`
  line-height: 1.5;
  text-align: inherit;
  text-transform: inherit;
  padding: 1.5em;
  font-size: inherit;
`

export default function DeliveryAdress() {
  const { cliente } = useClienteContext();
  const { menu } = useMenuContext();
  const [selected, setSelected] = useState(0);

  const minEntrega = (Number(menu.timeTakeAwayMin.split(':')[0]) * 60) + Number(menu.timeTakeAwayMin.split(':')[1])
  const maxEntrega = (Number(menu.timeTakeAwayMax.split(':')[0]) * 60) + Number(menu.timeTakeAwayMax.split(':')[1])

  const [openModal, setOpenModal] = useState(false);
  function isSameAddress(ad1, ad2) {
    return (ad1.rua == ad2.rua
      && ad1.numero == ad2.numero
      && ad1.complemento == ad2.complemento
      && ad1.bairro == ad1.bairro
      && ad1.cidade == ad2.cidade
      && ad1.uf == ad2.uf)
  }

  function selectAddress(index) {
    setSelected(index);
    setOpenModal(false);
  }

  return (
    <>
      <StyledButton onClick={() => setOpenModal(true)} fullWidth variant='outlined'>
        {/* <Typography variant='h3' color='secondary' sx={{mb:'1rem'}}>Entregar em:</Typography> */}
        <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'flex-start', flexGrow: 1, gap: 1 }}>
          <div>
            <h4 style={{ marginBottom: '0.5rem' }}>{menu.storesLocations[selected].address}</h4>
            <p>Retirar em até {maxEntrega}min</p>
          </div>
          <Button onClick={() => setOpenModal(true)} onMouseDown={(e) => e.stopPropagation()} variant='outlined'>Trocar</Button>
        </Stack>
      </StyledButton>
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <DialogTitle color='primary'>
          Onde quer retirar seu pedido?
        </DialogTitle>
        <DialogContent>
          <Stack alignItems='flex-start' gap={1}>
            {menu.storesLocations.map((endereco, index) => (
              <ButtonChoice key={index} startIcon={<TbMapPin size={30} />} onClick={() => selectAddress(index)} ativo={selected === index}>
                <h4>{endereco.address}</h4>
                {/* <p>{endereco.bairro}, {endereco.cidade} - {endereco.uf}</p> */}
              </ButtonChoice>
            ))}
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  )
}
