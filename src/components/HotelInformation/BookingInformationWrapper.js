import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import HotelBookingBox from './HotelBookingBox.js';
import Button from '../Form/Button.js';

export default function BookingInformationWrapper({ booking, setBookingView }) {
  return (
    <BookingPageContainer>
      <StyledMessage variant="h6" style={{ fontSize: '20px', lineBreak: 'normal' }}>
        Você já escolheu seu quarto:
      </StyledMessage>
      <HotelBookingBox key={booking.id} booking={booking} />
      <ButtonStyle onClick={() => setBookingView(false)} >
        Trocar de Quarto
      </ButtonStyle>
    </BookingPageContainer>
  );
}

const ButtonStyle = styled(Button)`
  width: 182px;
`;

const StyledMessage = styled(Typography)`
  && {
    max-width: 388px;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    color: #8e8e8e;
  }
`;

const BookingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
