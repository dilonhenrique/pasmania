import React from 'react';
import { Button, ButtonProps, styled } from '@mui/material';

interface ButtonChoiceProps extends ButtonProps {
  ativo?: boolean;
};

const StyledButton = styled(Button)(({ theme }) => ({
  paddingTop: '1rem',
  paddingBottom: '1rem',
  justifyContent: 'flex-start',
  textTransform: 'none',
  fontSize: 'inherit',
  'svg': {
    color: theme.palette.secondary.main,
  },
  '&.ativo': {
    borderColor: theme.palette.secondary.main,
    '&:hover': {
      borderColor: theme.palette.secondary.main,
    }
  }
}))

export default function ButtonChoice({ ativo, children, ...props }: ButtonChoiceProps) {
  return (
    <StyledButton fullWidth variant='outlined' className={ativo ? 'ativo' : ''} {...props}>
      <div style={{ textAlign: 'left', color: '#212121', lineHeight: '1.2em' }}>
        {children}
      </div>
    </StyledButton>
  )
}
