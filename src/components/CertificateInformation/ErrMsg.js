import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export default function ErrorMsg() {
  return(
    <ErroContainer>
      <StyledTypography variant='h6' style={{ marginBottom: '15px' }}>O certificado ficará disponível apenas 1 dia após a realização do evento.</StyledTypography>
    </ErroContainer>
  );
};

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
  color:#8E8E8E;
`;

const ErroContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 80%;
`;
