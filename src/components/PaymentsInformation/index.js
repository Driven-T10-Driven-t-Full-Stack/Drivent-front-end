import { useEffect, useState } from 'react';
import { useTicketUser } from '../../hooks/api/useTicket';
import CreditCardPayment from './CreditCardPayment';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import ConfirmPayment from './confirmPayment';
import { useTicketUser } from '../../hooks/api/useTicketType';

export default function PaymentsInformation() {
  const [ticket, setTicket] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const { getTicketUser } = useTicketUser();

  useEffect(async() => {
    const tickets = await getTicketUser();
    setTicket(tickets.data);
    setTotalPrice(300 + tickets.data?.TicketType.price);
  }, []);

  return (
    <>
      <StyledTypography variant='h6'>Ingresso escolhido</StyledTypography>
      <BoxConfirmation>
        <Typography variant='subtitle1' component='div' style={{ color: '#454545' }}> {ticket?.TicketType.isRemote ? 'Online' : ticket?.TicketType.includesHotel ? 'Presencial + Com Hotel' : 'Presencial + Sem Hotel'} </Typography>
        <Typography variant='body2' component='div' style={{ color: '#898989' }}> R$ {totalPrice} </Typography>
      </BoxConfirmation>
      <StyledTypography variant='h6'>Pagamento</StyledTypography>

      {(ticket?.status === 'RESERVED' || ticket === undefined)  ? <CreditCardPayment ticket={ticket} totalPrice={totalPrice}/> : <ConfirmPayment />}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-top: 40px!important;
  color:#8E8E8E;
`;

const BoxConfirmation = styled.div`
    width: 290px;
    height: 108px;
    background-color: #FFEED2;
    border-radius: 20px;
    margin-top: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
