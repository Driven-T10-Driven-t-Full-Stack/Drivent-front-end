import styled from 'styled-components';
import useEnrollment from '../../hooks/api/useEnrollment';
import TicketType from '../Tickets';
import { useTicketUser } from '../../hooks/api/useTicketType';

export default function TicketInfo() {
  const { enrollment } = useEnrollment();
  
  return (
    <MainContainer>
      {enrollment ?
        <>
          <span>Primeiro, escolha sua modalidade de ingresso</span>
          <TicketType />
        </>
        :
        <>
          <DivSpan>
            <span>Você precisa completar sua inscrição antes</span>
            <span> de prosseguir pra escolha de ingresso</span>
          </DivSpan>
        </>
      }
    </MainContainer>
    
  );
}

const MainContainer = styled.div`

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

