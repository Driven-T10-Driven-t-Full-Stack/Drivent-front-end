import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import ActivitiesInformations from '../../../components/ActivitiesInformation';

export default function Activities() {
  return (
    <>
      <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
      <ActivitiesInformations />
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
