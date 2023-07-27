import React, { useState } from 'react';
import ButtonChoice from '@/components/elements/ButtonChoice';
import styles from './PaymentMethod.module.scss';
import { useMenuContext } from '@/common/context/menu';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Button, Checkbox, Dialog, DialogContent, DialogTitle, FormControlLabel, Stack, TextField } from '@mui/material';

export default function PaymentMethod() {
  const { menu } = useMenuContext();
  const [pagamentoSelecionado, setPagamentoSelecionado] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [troco, setTroco] = useState(null);

  function pagamentoHandler(code) {
    setPagamentoSelecionado(code);
    if (code === 'DIN') {
      setOpenModal(true);
    } else {
      setTroco(null);
    }
  }

  function submit(evento) {
    evento.preventDefault();

    //depois: melhorar validação do valor digitado
    if (evento.target.elements.naoPrecisa.checked) {
      setTroco('Não preciso de troco');
      setOpenModal(false);
    } else if (evento.target.elements.valorTroco.value !== '') {
      setTroco(`Troco para ${Number(evento.target.elements.valorTroco.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
      setOpenModal(false);
    } else {
      alert('Digite o valor ou sinalize que não precisa de troco');
    }
  }

  return (
    <>
      <div className={styles.buttonContainer}>
        {menu.paymentTypes.map(pagamento => (
          <ButtonChoice
            key={pagamento.code}
            ativo={pagamentoSelecionado === pagamento.code}
            onClick={() => pagamentoHandler(pagamento.code)}
            sx={{ '>div': { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flex: 1, height: '2rem' } }}
          >
            <div>
              <p>{pagamento.description}</p>
              {pagamentoSelecionado === pagamento.code && pagamentoSelecionado === 'DIN' && <small>{troco}</small>}
            </div>
            {pagamentoSelecionado === pagamento.code && <AiFillCheckCircle size={20} />}
          </ButtonChoice>
        ))}
      </div>
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <DialogTitle>
          Troco para quanto?
        </DialogTitle>
        <DialogContent>
          <form onSubmit={submit}>
            <Stack agap={2}>
              <TextField name='valorTroco' type='number' />
              <FormControlLabel name='naoPrecisa' control={<Checkbox />} label='Não preciso de troco' />
              <Button type='submit' variant='contained' color='secondary'>Ok</Button>
            </Stack>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
