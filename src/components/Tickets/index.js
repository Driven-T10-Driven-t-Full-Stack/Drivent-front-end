import { useState } from 'react';
import styled from 'styled-components';
import { useTicket, useTicketPost, useTicketUser } from '../../hooks/api/useTicketType';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function TicketType({ setTotalPrice }) {
  const [ticketTypeIds, setTicketsTypeIds] = useState([]);
  const [ticketAlreadyReserved, setTicketAlreadyReserved] = useState();
  const [presencialTicket, setPresencialTicket] = useState([]);
  const [onlineTicket, setOnlineTicket] = useState([]);
  const [checkoutDisplay, setCheckoutDisplay] = useState('none');
  const [display, setDisplay] = useState(false);
  const [firstColor, setFirstColor] = useState('black');
  const [secondColor, setSecondColor] = useState('black');
  const [thirdColor, setThirdColor] = useState('black');
  const [forthColor, setForthColor] = useState('black');
  const [disableFirstButton, setDisableFirstButton] = useState(false);
  const [disableSecondButton, setDisableSecondButton] = useState(false);
  const [disableThirdButton, setDisableThirdButton] = useState(false);
  const [disableForthButton, setDisableForthButton] = useState(false);
  const [disabledCheckoutButton, setDisabledCheckoutButton] = useState(false);
  const { getTicket } = useTicket();
  const { postTicket } = useTicketPost();
  const { getTicketUser } = useTicketUser();
  const [price, setPrice] = useState(0);

  useEffect(async() => {
    const tickets = await getTicket();
    // eslint-disable-next-line no-console
    const presencialTickets = tickets?.data[0];
    const ticketTypeId = tickets?.data[1];
    const onlineTickets = tickets?.data[2];
    setPresencialTicket(presencialTickets);
    setOnlineTicket(onlineTickets);
    setTicketsTypeIds(ticketTypeId);
    const ticket = await getTicketUser();
    setTicketAlreadyReserved(ticket?.status);
  }, []);

  function changeColor() {
    setFirstColor('color');
    setSecondColor('white');
  }
  function changeColor2() {
    setSecondColor('color2');
    setFirstColor('white');
  }

  function changeColor3() {
    setThirdColor('color3');
    setForthColor('white');
  }
  function changeColor4() {
    setForthColor('color4');
    setThirdColor('white');
  }

  async function ticketOnline() {
    changeColor();
    setDisplay('flex');
    presencial();
    if (price === 150) {
      changePlanOnline();
    }
    setDisableSecondButton(false);
    setDisableFirstButton(true);
  }

  function ticketOnline2() {
    changeColor2();
    setCheckoutDisplay('block');
    online();
    if (price === 250) {
      changePlanPresencial();
    }

    if (price === 600) {
      changePresencialToOnline();
    }
    setDisableSecondButton(true);
    setDisableFirstButton(false);
  }

  function ticketOnline3() {
    setCheckoutDisplay('block');
    changeColor3();
    noHotel();

    if (price === 600) {
      changeNoHotel();
    }
    setDisableThirdButton(true);
    setDisableForthButton(false);
  }

  function ticketOnline4() {
    setCheckoutDisplay('block');
    changeColor4();
    withHotel();

    if (price === 250) {
      changeWithHotel();
    }
    setDisableThirdButton(false);
    setDisableForthButton(true);
  }

  function changePlanPresencial() {
    setPrice(price - 250 + 150);
    setDisplay(false);
  }

  function changePlanOnline() {
    setPrice(price - 150 + 250);
  }

  function changeNoHotel() {
    setPrice(price - 350 + 0);
  }

  function changeWithHotel() {
    setPrice(price - 0 + 350);
  }

  function changePresencialToOnline() {
    setPrice(price - 600 + 150);
    setDisplay(false);
  }

  function presencial() {
    setPrice(price + 250);
  }

  function online() {
    setPrice(price + 150);
  }

  function noHotel() {
    setPrice(price + 0);
  }

  function withHotel() {
    setPrice(price + 350);
  }

  async function reservedOnline() {
    setTotalPrice(price);
    try {
      if (ticketAlreadyReserved === 200) {
        return toast('Você já possui um ticket reservado');
      } else if (presencialTicket.price === price && ticketAlreadyReserved !== 200) {
        const tickedTypeIdNoHotel = presencialTicket.id;
        await postTicket({ ticketTypeId: tickedTypeIdNoHotel });

        setDisabledCheckoutButton(true);
        toast('Ticket reservado com sucesso!');
      } else if (ticketTypeIds.price === price && ticketAlreadyReserved !== 200) {
        const ticketTypeWithHotel = ticketTypeIds.id;
        await postTicket({ ticketTypeId: ticketTypeWithHotel });

        setDisabledCheckoutButton(true);
        toast('Ticket reservado com sucesso!');
      } else if (onlineTicket.price === price && ticketAlreadyReserved !== 200) {
        const ticketTypeIdOnline = onlineTicket.id;
        await postTicket({ ticketTypeId: ticketTypeIdOnline });

        setDisabledCheckoutButton(true);
        toast('Ticket reservado com sucesso!');
      }
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch {
      toast('Algo inesperado aconteceu!');
    }
  }

  return (
    <>
      <Container>
        <DivButton>
          <button className={firstColor} onClick={ticketOnline} disabled={disableFirstButton}>
            <h2>{presencialTicket?.name}</h2>
            <h2>R$ {presencialTicket?.price}</h2>
          </button>
          <button className={secondColor} onClick={ticketOnline2} disabled={disableSecondButton}>
            <h2>{onlineTicket?.name}</h2>
            <h2>R$ {onlineTicket?.price}</h2>
          </button>
        </DivButton>
        {display ? (
          <>
            <>
              <span>Ótimo! Agora escolha sua modalidade de hospedagem</span>
            </>
            <DivButton>
              <button className={thirdColor} onClick={ticketOnline3} disabled={disableThirdButton}>
                <h2>Sem Hotel</h2>
                <h2>+ R$ 0</h2>
              </button>
              <button className={forthColor} onClick={ticketOnline4} disabled={disableForthButton}>
                <h2>Com Hotel</h2>
                <h2>+ R$ 350</h2>
              </button>
            </DivButton>
          </>
        ) : (
          <div></div>
        )}
        <Checkout checkoutDisplay={checkoutDisplay}>
          <h2>
            Fechado! O total ficou em <strong>R$ {price}</strong>. Agora é só confirmar:
          </h2>
          <button onClick={() => reservedOnline()} disabled={disabledCheckoutButton}>
            RESERVAR INGRESSO
          </button>
        </Checkout>
      </Container>
    </>
  );
}

const DivButton = styled.div`
  display: flex;
  margin-top: 20px;
  display: ${(props) => props.checkoutDisplay};
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    margin-bottom: 23px;

    width: 145px;
    height: 145px;

    border: 1px solid #cecece;
    border-radius: 20px;
    color: #454545;
    font-weight: 400;
    font-size: 19px;

    span {
      margin-top: 5px;
      color: #898989;
      font-size: 14px;
      font-weight: 400;
    }
  }

  button:hover {
    border: 1px solid blue;
    cursor: pointer;
  }
`;
const Container = styled.div`
  margin-bottom: 15px;
  h2 {
    color: #8e8e8e;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
  div:nth-last-child(2) {
    margin-bottom: 15px;
  }
`;

const Checkout = styled.div`
  display: ${(props) => props.checkoutDisplay};
  h2 {
    color: #8e8e8e;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    margin-bottom: 15px;
  }
  button {
    width: 170px;
    height: 37px;
    border-radius: 4px;
    border: 0;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
  }
`;
