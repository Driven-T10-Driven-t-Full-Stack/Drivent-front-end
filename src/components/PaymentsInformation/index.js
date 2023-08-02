import { Typography } from '@material-ui/core';
import { IconContext } from 'react-icons';
import { FcSimCardChip } from 'react-icons/fc';
import styled from 'styled-components';

export default function PaymentsInformation() {
  return (
    <>
      <StyledTypography variant='h6'>Ingresso escolhido</StyledTypography>
      <BoxConfirmation>
        <Typography variant='subtitle1' component='div' style={{ color: '#454545' }}> Presencial + com Hotel </Typography>
        <Typography variant='body2' component='div' style={{ color: '#898989' }}> R$ 600 </Typography>
      </BoxConfirmation>
      <StyledTypography variant='h6'>Pagamento</StyledTypography>
      <Payment>
        <StyledCard >
          <div style={{ position: 'absolute', top: '15px', left: '20px' }}>
            <FcSimCardChip size={50}/>
          </div>
        </StyledCard>
      </Payment>
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

const Payment = styled.div`
`;

const StyledCard = styled.div`
    width: 300px;
    height: 200px;
    background-color: rgb(146,146,146);
    border-radius: 20px;

    margin-top: 10px;

    position: relative;
`;
