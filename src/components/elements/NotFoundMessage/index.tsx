import React from 'react';
import Illustration404 from './Illustration404';
import { Typography } from '@mui/material';

interface NotFoundProps {
  message?: string;
}

export default function NotFoundMessage({ message }: NotFoundProps) {
  return (
    <center>
      <Illustration404 />
      <Typography variant='h2'>{message || 'Não encontrado'}</Typography>
    </center>
  )
}
