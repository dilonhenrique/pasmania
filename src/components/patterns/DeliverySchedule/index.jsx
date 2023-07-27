import React, { useState } from 'react';
import ButtonChoice from '@/components/elements/ButtonChoice';
import { useMenuContext } from '@/common/context/menu';
import { Dialog, DialogContent, DialogTitle, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, Typography } from '@mui/material';
import usePeriodFromDate from '@/common/hooks/usePeriodFromDate';
import useRestaurantStatus from '@/common/hooks/useRestaurantStatus';
import styles from './DeliverySchedule.module.scss';
import dayjs from 'dayjs';

export default function DeliverySchedule({ takeAway = false }) {
  const [openModal, setOpenModal] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);
  const { isOpen } = useRestaurantStatus();

  const { menu } = useMenuContext();
  const temposEntrega = {
    delivery: {
      min: Number(menu.timeDeliverMin.split(':')[0] * 60) + Number(menu.timeDeliverMin.split(':')[1]),
      max: Number(menu.timeDeliverMax.split(':')[0] * 60) + Number(menu.timeDeliverMax.split(':')[1]),
    },
    takeAway: {
      min: Number(menu.timeTakeAwayMin.split(':')[0] * 60) + Number(menu.timeTakeAwayMin.split(':')[1]),
      max: Number(menu.timeTakeAwayMax.split(':')[0] * 60) + Number(menu.timeTakeAwayMax.split(':')[1]),
    }
  }

  const timeAvailable = getTimesAvailable(dayjs());
  function getTimesAvailable(today = dayjs()) {
    let times = [];

    const deliveryTime = takeAway ? temposEntrega.takeAway.max : temposEntrega.delivery.max;
    let data = dayjs(today).set('second', 0).add(deliveryTime, 'minute')

    const statusInDate = usePeriodFromDate(today);

    //próxima hora redonda
    if (data.minute() > 30) {
      data = dayjs(data).set('minute', 0).add(1, 'hour');
    } else {
      data = dayjs(data).set('minute', 30);
    }

    //percorrendo os períodos em que a loja está aberta
    if (statusInDate.willOpen) {
      times = listHalfHours(statusInDate, today, data);
    }

    if (!times.length) {
      const tomorrowStatus = usePeriodFromDate(dayjs(today).add(1, 'day'));
      times = listHalfHours(tomorrowStatus, today);
      return { day: 'amanhã', time: times };
    } else {
      return { day: 'hoje', time: times };
    }
  }

  function listHalfHours(statusInDate, today, data) {
    let times = [];

    statusInDate.openPeriod.forEach(periodo => {
      const openTime = dayjs(`${today.format('YYYY-MM-DD')}T${periodo.openTime}`);
      const closeTime = dayjs(`${today.format('YYYY-MM-DD')}T${periodo.closeTime}`).second(1);

      if (!data || openTime.isAfter(data)) {
        data = dayjs(openTime);
      }

      while (data.isBefore(closeTime)) {
        times.push(data.format('HH:mm'));
        data = dayjs(data).add(30, 'minutes');
      }
    })

    return times;
  }

  const [timeSchedule, setTimeSchedule] = useState(timeAvailable.time[0]);
  function changeValue(event) {
    setTimeSchedule(event.target.value);
    setIsScheduled(true);
    setOpenModal(false);
  }

  return (
    <>
      <div>
        <Typography variant='h4' sx={{ marginTop: 2, marginBottom: 1 }}>Quando?</Typography>
        <Stack direction='row' gap={2}>
          {isOpen &&
            <ButtonChoice onClick={() => setIsScheduled(false)} ativo={!isScheduled}>
              <p className={styles.buttonTitle}>{takeAway ? 'Retirada imediata' : 'Entrega imediata'}</p>
              <p className={styles.buttonInfo}>
                {takeAway
                  ? `em até ${temposEntrega.takeAway.max} min`
                  : `${temposEntrega.delivery.min} a ${temposEntrega.delivery.max} min`
                }
              </p>
            </ButtonChoice>}
          {menu.scheduled && timeAvailable.time.length > 0 &&
            <ButtonChoice onClick={() => setOpenModal(true)} ativo={isScheduled}>
              <p className={styles.buttonTitle}>Programar</p>
              <p className={styles.buttonInfo}>{timeAvailable.day}, {timeSchedule}</p>
            </ButtonChoice>}
        </Stack>
      </div>
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <DialogTitle>
          Programar {takeAway ? 'retirada' : 'entrega'}
        </DialogTitle>
        <DialogContent>
          <FormControl>
            <RadioGroup name="delivery-schedule" value={timeSchedule} onChange={changeValue}>
              {timeAvailable.time.map(time =>
                <FormControlLabel key={time} value={time} control={<Radio />} label={time} />
              )}
            </RadioGroup>
          </FormControl>
        </DialogContent>
      </Dialog>
    </>
  )
}
