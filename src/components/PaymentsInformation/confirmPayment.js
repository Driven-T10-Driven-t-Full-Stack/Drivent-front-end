import styled from 'styled-components';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Typography } from '@material-ui/core';

export default function ConfirmPayment() {
  return (
    <ContainerConfirm>
      <Icone>
        <AiFillCheckCircle style={{ fontSize: '50px', color: '#33BA53' }}/>
      </Icone>
      <Texto>
        <Typography variant='body1' component='div' style={{ fontWeight: 'bolder', color: '#3E3E3E' }}> Pagamento Confirmado! </Typography>
        <Typography variant='body2' component='div' style={{ color: '#454545' }}> Prossiga para escolha de hospedagem e atividades </Typography>
      </Texto>
    </ContainerConfirm>
  );
}

const ContainerConfirm = styled.div`
    display: flex;
    margin-top: 20px;
`;

const Icone = styled.div`
`;

const Texto = styled.div`
margin-left: 10px;
`;
