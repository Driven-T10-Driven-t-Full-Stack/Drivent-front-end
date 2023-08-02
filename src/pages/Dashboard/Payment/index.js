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
