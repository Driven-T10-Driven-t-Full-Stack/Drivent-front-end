import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export default function HotelBookingBox({ booking }) {
  const roomCapacityType = {
    1: 'Single',
    2: 'Double',
    3: 'Triple',
    default: 'Sem vagas',
  };

  const otherBookingsValue = {
    1: 'Você',
    2: 'Você e mais 1',
    3: 'Você e mais 2',
    default: 'Sala lotada!'
  };

  return (
    <HotelBookingContainer>
      <ImgBox>
        <img src={booking.Room.Hotel.image} alt="HotelImg" />
      </ImgBox>
      <Typography variant="subtitle1" component="p" style={{ fontSize: '20px', lineBreak: 'normal' }}>
        {booking.Room.Hotel.name}
      </Typography>
      <HotelInfo>
        <div>
          <Typography variant="subtitle2" component="p" style={{ fontWeight: 'bold' }}>
            Quarto reservado
          </Typography>
          <Typography variant="subtitle2" component="p" style={{ lineHeight: '1em' }}>
            {`${booking.Room.id} (${roomCapacityType[booking.Room.capacity]})`}
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle2" component="p" style={{ fontWeight: 'bold' }}>
            Pessoas no seu quarto
          </Typography>
          <Typography variant="subtitle2" component="p" style={{ lineHeight: '1em' }}>
            {otherBookingsValue[booking.totalBookings]}
          </Typography>
        </div>
      </HotelInfo>
    </HotelBookingContainer>
  );
}

const HotelInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 40%;
  min-height: 40%;
  background-color: white;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HotelBookingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
  min-width: 196px;
  width: 196px;
  min-height: 264px;
  background-color: #ffeed2;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
`;
