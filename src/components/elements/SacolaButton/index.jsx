import React, { useState } from 'react'
import { Badge, Button, Collapse, styled } from '@mui/material'
import { TbPaperBag } from 'react-icons/tb';
import { useSacolaContext } from '@/common/context/sacola';
import SacolaDrawer from '@/components/patterns/SacolaDrawer';
import useValorSacola from '@/common/hooks/useValorSacola';

const StyledButton = styled(Button)(() => ({
  padding: '8px',
  minWidth: 0,
  borderRadius: '1.5rem',
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

  svg: {
    color: 'rgba(0, 0, 0, 0.54)',
  },

  p: {
    whiteSpace: 'nowrap',
  },

  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },

  '&.withProduct': {
    gap: '1rem',
    backgroundColor: '#212121',
    paddingRight: '1rem',

    svg: {
      color: '#FFFFFF',
    },

    '&:hover': {
      backgroundColor: '#000000',
    },
  }
}))

export default function SacolaButton() {
  const [openMenu, setOpenMenu] = useState(false);
  const { sacola } = useSacolaContext();
  const { total } = useValorSacola();

  const handleOpen = () => {
    setOpenMenu(true);
    // setSacola(!sacola.length ? [1,2,3] : []);
  };

  return (
    <div>
      <StyledButton onClick={handleOpen} color='secondary' className={sacola.length ? 'withProduct' : ''}>
        <Badge
          badgeContent={sacola.length}
          color="secondary"
          sx={{
            '.MuiBadge-badge': {
              height: '15px',
              minWidth: '15px',
              fontSize: '10px',
              padding: '0 4px'
            }
          }}
        >
          <TbPaperBag size='1.5rem' />
        </Badge>
        <Collapse in={Boolean(sacola.length)} orientation='horizontal'>
          <p><small>R$</small> {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).slice(3)}</p>
        </Collapse>
      </StyledButton>
      <SacolaDrawer openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  )
}
