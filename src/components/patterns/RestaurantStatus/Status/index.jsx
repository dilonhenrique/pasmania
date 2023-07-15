import React from 'react';
import { Typography } from '@mui/material';
import useRestaurantStatus from '@/common/hooks/useRestaurantStatus';

export default function Status() {
  const status = useRestaurantStatus();
  const semana = ['dom.', 'seg.', 'ter.', 'qua.', 'qui.', 'sex.', 'sab.'];

  return (
    <div>
      {status.isOpen
        ? <p>
          <Typography component='span' sx={{ color: theme => theme.palette.success.light }}>&#9679;</Typography>
          <strong> Aberto</strong> até às {status.nextEvent.time.slice(0, -3)}
        </p>
        : <p>
          <Typography component='span' sx={{ color: theme => theme.palette.error.light }}>&#9679;</Typography>
          <strong> Fechado</strong> abre{'day' in status.nextEvent ? ` ${semana[status.nextEvent.day]}` : ''} às {status.nextEvent.time?.slice(0, -3)}
        </p>
      }
    </div>
  )
}
