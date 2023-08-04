import styled from 'styled-components';
import useEnrollment from '../../hooks/api/useEnrollment';
import TicketsType from '../Tickets';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../../services/api';

export default function TicketInfo() {
  const { enrollment } = useEnrollment();
  const [tickets, setTickets] = useState();
  // const token = window.localStorage.getItem('token');

  // useEffect(() => {
  //   function subscribePlan() {
  //     const config = {
  //       headers: { Authorization: `Bearer ${token}` }
  //     };
  //     const promise = api.get('/tickets/types', config);
  //     promise.then((res) => {
  //       // eslint-disable-next-line no-console
  //       console.log(res.data);
  //       setTickets(res.data);
  //     });
  //     promise.catch((err) => {
  //       // eslint-disable-next-line no-console
  //       console.log(err);
  //       alert(`Erro: ${err}`);
  //     });  
  //   };
  //   subscribePlan();
  // }, []);

  return (
    <MainContainer>
      <h1>Ingresso e pagamento</h1>
      {enrollment ?
        <>
          <span>Primeiro, escolha sua modalidade de ingresso</span>
          <TicketsType tickets={tickets} />
        </>
        :
        <DivSpan>
          <span>Você precisa completar sua inscrição antes</span>
          <span> de prosseguir pra escolha de ingresso</span>
        </DivSpan>
      }
    </MainContainer>
    
  );
}

const MainContainer = styled.form`

  h1 {
    color: #000000; 
    font-weight: 400;
    font-size: 34px;
    margin-bottom: 30px
  }

  span {
    color: #8E8E8E;
    font-weight: 400;
    font-size: 20px;
  }
`; 

const DivSpan = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span:first-child{
    width: 420px;
    font-size: 20px;
    margin-top: 190px;
    line-height: 24px;
  }

`;
