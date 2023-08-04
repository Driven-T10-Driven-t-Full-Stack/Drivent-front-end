import styled from 'styled-components';
import useTicketType from '../../hooks/api/useTicketType';

export default function TicketsType() {
  // eslint-disable-next-line no-console
  const { tickets } = useTicketType();
  return(
    <>
      {tickets.map((ticket, index) => <TicketType key={index} name={ticket.ticketType} price={tickets.price} isRemote={ticket.isRemote} includesHotel={ticket.includesHotel}/>)}
    </>
  );
}

function TicketType(props) {
  return(
    <>
      <DivButton>
        <button>
          {props.isRemote}
          <span> {props.price}</span>
        </button>

        <button>
               Online
          <span> R$ 150</span>
        </button>
      </DivButton><span>Ótimo! Agora escolha sua modalidade de hospedagem</span><DivButton>
        <button type='submit'>
              Sem Hotel
          <span> + R$ 0</span>
        </button>

        <button type='submit'>
              Com Hotel
          <span> + R$ 350</span>
        </button>
      </DivButton>
    </>
  );
}

const DivButton = styled.div`
  display: flex;
  margin-top: 20px;
   
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    margin-bottom: 23px;

    width: 145px;
    height: 145px;

    border: 1px solid #CECECE;
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
