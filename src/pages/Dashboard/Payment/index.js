import styled from 'styled-components';
import PaymentsInformation from '../../../components/PaymentsInformation';
import TicketInfo from '../../../components/TicketInfo';
import { Typography } from '@material-ui/core';
import { useTicketUser } from '../../../hooks/api/useTicketType';

export default function Payment() {
  const { ticket } = useTicketUser();

  return (
    <>
      <StyledTypography variant='h4'>Ingresso e pagamento</StyledTypography>
      {!ticket ?
        <TicketInfo/>
        :
        <div></div>
      }
      {ticket ?
        <PaymentsInformation />
        :
        <div></div>
      }
    </>);
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
