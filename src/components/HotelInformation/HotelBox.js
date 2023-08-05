import { Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function HotelBox({ hotel, selectedHotel, setSelectedHotel, getRooms }) {
  function getHotelRooms(hotelId) {
    setSelectedHotel(hotelId);
    getRooms(hotelId);
    //add função de retornar lista de quartos
  }
  
  return (
    <HotelContainer selectedHotel={selectedHotel} hotelId={hotel.id} onClick={() => setSelectedHotel(hotel.id)}>
      <ImgBox>
        <img src={hotel.image} alt="HotelImg" />
      </ImgBox>
      <Typography variant="subtitle1" component="p" style={{ fontSize: '20px', lineBreak: 'normal' }}>
        {hotel.name}
      </Typography>
      <HotelInfo>
        <div>
          <Typography variant="subtitle2" component="p" style={{ fontWeight: 'bold' }}>
            Tipo de acomodação
          </Typography>
          <Typography variant="subtitle2" component="p" style={{ lineHeight: '1em' }}>
            Single e Double
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle2" component="p" style={{ fontWeight: 'bold' }}>
            Vagas disponíveis
          </Typography>
          <Typography variant="subtitle2" component="p" style={{ lineHeight: '1em' }}>
            20
          </Typography>
        </div>
      </HotelInfo>
    </HotelContainer>
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

const HotelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
  min-width: 196px;
  width: 196px;
  min-height: 264px;
  background-color: ${({ selectedHotel, hotelId }) => (selectedHotel === hotelId ? '#FFEED2' : '#ddd')};
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
`;
