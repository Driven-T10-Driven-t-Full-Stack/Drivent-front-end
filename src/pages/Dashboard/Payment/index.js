import styled from 'styled-components';
import PaymentsInformation from '../../../components/PaymentsInformation';
import TicketInfo from '../../../components/TicketInfo';
import { Typography } from '@material-ui/core';
import { useTicketUser } from '../../../hooks/api/useTicket';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Payment() {
  const { ticket } = useTicketUser();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const ticketTotalPrice = localStorage.getItem('totalPrice');
    if (ticketTotalPrice !== null) {
      setTotalPrice(parseFloat(ticketTotalPrice));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('totalPrice', totalPrice);
  }, [totalPrice]);

  return (
    <>
      <StyledTypography variant='h4'>Ingresso e pagamento</StyledTypography>
      {!ticket ?
        <TicketInfo setTotalPrice={setTotalPrice} />
        :
        <div></div>
      }
      {ticket ?
        <PaymentsInformation totalPrice={totalPrice} />
        :
        <div></div>
      }
    </>);
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
