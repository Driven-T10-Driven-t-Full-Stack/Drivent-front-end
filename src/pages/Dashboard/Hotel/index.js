import styled from 'styled-components';
import HotelInformation from '../../../components/HotelInformation/index.js';
import Typography from '@material-ui/core/Typography';

export default function Hotel() {
  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      <HotelInformation />
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
