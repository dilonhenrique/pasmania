import React from 'react';
import useRestaurantStatus from '@/common/hooks/useRestaurantStatus';
import styles from './RestaurantStatus.module.scss';
import { Button, Typography } from '@mui/material';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useMenuContext } from '@/common/context/menu';

export default function RestaurantStatus() {
  const status = useRestaurantStatus();
  const semana = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];

  const { menu } = useMenuContext();
  const temposEntrega = {
    delivery: {
      min: Number(menu.timeDeliverMin.split(':')[0] * 60) + Number(menu.timeDeliverMin.split(':')[1]),
      max: Number(menu.timeDeliverMax.split(':')[0] * 60) + Number(menu.timeDeliverMax.split(':')[1]),
    },
    takeAway: {
      min: Number(menu.timeDeliverMin.split(':')[0] * 60) + Number(menu.timeDeliverMin.split(':')[1]),
      max: Number(menu.timeTakeAwayMax.split(':')[0] * 60) + Number(menu.timeTakeAwayMax.split(':')[1]),
    }
  }

  return (
    <section className={`container ${styles.statusContainer}`}>
      <div>
        {status.isOpen
          ? <p>
            <Typography component='span' sx={{ color: theme => theme.palette.success.light }}>&#9679;</Typography>
            <strong> Aberto</strong> até às {status.nextEvent.time.slice(0, -3)}
          </p>
          : <p>
            <Typography component='span' sx={{ color: theme => theme.palette.error.light }}>&#9679;</Typography>
            <strong> Fechado</strong> abre{status.nextEvent.day ? ` ${semana[status.nextEvent.day]}` : ''} às {status.nextEvent.time?.slice(0, -3)}
          </p>
        }
      </div>
      <div>
        <Button
          endIcon={<MdKeyboardArrowRight />}
          sx={{
            textTransform: 'none',
            fontSize: 'inherit',
            backgroundColor: theme => theme.palette.grey[200],
            color: 'inherit',
            paddingLeft: '1rem',
            '&:hover': {
              backgroundColor: theme => theme.palette.grey[300],
            }
          }}
        >
          <strong>Entrega</strong> - {temposEntrega.delivery.min} a {temposEntrega.delivery.max} min
        </Button>
      </div>
    </section>
  )
}
