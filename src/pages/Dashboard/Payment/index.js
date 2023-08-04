/* import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTicket, useTicketPost } from '../../../hooks/api/useTicket';
import { toast } from 'react-toastify';

export default function Payment() {
  const [ticketTypes, setTicketTypes] = useState(['', '']);
  const [display, setDisplay] = useState('none');
  const { getTicket } = useTicket();
  const { postTicket } = useTicketPost();  
  useEffect(async() => {
    const tickets = await getTicket();
    setTicketTypes(tickets.data);
  }, []);

  function ticketOnline() {
    setDisplay('block');
  };

  async function reservedOnline(ticketType) {
    try {
      await postTicket({ ticketTypeId: ticketType.id });
      toast('Ticket Reservado');
    }catch {
      toast('Algo inesperado aconteceu!');
    };
  };

  return (
    <>
      <Header>
        <h1>Ingresso e pagamento</h1>
      </Header>

      <Container>
        <div><h2>Primeiro, escolha a modalidade de ingresso</h2></div>
        <div>
          <Button>
            <h2>{ticketTypes[1].name ? ticketTypes[1].name : ''}</h2>
            <h2>R$ {ticketTypes[1].price ? ticketTypes[1].price : ''}</h2>
          </Button>
          <Button onClick={ticketOnline}>
            <h2>{ticketTypes[0].name ? ticketTypes[0].name : ''}</h2>
            <h2>R$ {ticketTypes[0].price ? ticketTypes[0].price : ''}</h2>
          </Button>
        </div>

        <Checkout display={display}>
          <h2>Fechado! O total ficou em <strong>R$ 100</strong>. Agora é só confirmar:</h2>
          <button onClick={() => reservedOnline(ticketTypes[0])}>RESERVAR INGRESSO</button>
        </Checkout>
      </Container>
    </>
  );
}

const Header = styled.div`
  margin-bottom: 40px;
  h1{
    font-size: 34px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
`;

const Container = styled.div`
  div:first-child{
    margin-bottom: 15px;
    h2{
      color: #8E8E8E;
      font-size: 20px;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
    }
  }
  div:nth-last-child(2){
    margin-bottom: 15px;
  }
`;

const Checkout = styled.div`
  display: ${props => props.display};
  h2{
    color: #8E8E8E;
      font-size: 20px;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      margin-bottom: 15px;
  }
  button{
    width: 170px;
    height: 37px;
    border-radius: 4px;
    border: 0;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
}
`;

const Button = styled.button`
  width: 145px;
  height: 145px;
  border-radius: 20px;
  border: 1px solid #CECECE;
  background: #FFFFFF;
  margin-right: 20px;
  cursor: pointer;
  :hover{
    background-color: #FFEED2;
  }
`; */

import styled from 'styled-components';
import PaymentsInformation from '../../../components/PaymentsInformation';
import { Typography } from '@material-ui/core';

export default function Payment() {
  return (<>
    <StyledTypography variant='h4'>Ingresso e pagamento</StyledTypography>
    <PaymentsInformation />
  </>);
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
