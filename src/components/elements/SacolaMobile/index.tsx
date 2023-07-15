import React, { useState, forwardRef } from 'react';
import useValorSacola from '@/common/hooks/useValorSacola';
import SacolaDrawer from '@/components/patterns/SacolaDrawer';
import { Badge, Button, styled } from '@mui/material';
import { TbPaperBag } from 'react-icons/tb';
import styles from './Sacola.module.scss';
import { ISacolaProduct } from '@/common/interfaces/interfaces';

interface SacolaMobileProps {
  sacola: ISacolaProduct[];
}

const StyledButton = styled(Button)`
  padding: 8px 1rem;
  min-width: 0;
  -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #F7BA00;
  gap: 1rem;
  justify-content: space-between;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  color: #212121;
  font-weight: 700;

  p {
    white-space: nowrap;
  }

  &:hover {
    background-color: #edb201;
  }
`

const SacolaMobile = forwardRef<HTMLDivElement, SacolaMobileProps>(({ sacola }, ref) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { total } = useValorSacola();

  const handleOpen = () => {
    setOpenMenu(true);
  };

  return (
    <div className={styles.sacolaContainer} ref={ref}>
      <StyledButton onClick={handleOpen} fullWidth>
        <Badge
          badgeContent={sacola.length}
          sx={{
            '.MuiBadge-badge': {
              height: '15px',
              minWidth: '15px',
              fontSize: '10px',
              padding: '0 4px',
              backgroundColor: '#FFFFFF',
            }
          }}
        >
          <TbPaperBag size='1.5rem' />
        </Badge>
        <p>Ver sacola</p>
        <p><small>R$</small> {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).slice(3)}</p>
      </StyledButton>
      <SacolaDrawer openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  )
})


export default SacolaMobile;
