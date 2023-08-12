import { useState, useEffect } from 'react';
import styled from 'styled-components';
import useHotel from '../../hooks/api/useHotel.js';
import Typography from '@material-ui/core/Typography';
import HotelBox from './HotelBox.js';
import errorMsgType from './ErrorMsgType.js';
import useHotelRooms from '../../hooks/api/useHotelRooms.js';
import RoomBox from './RoomBox.js';
import Button from '../Form/Button.js';
import useCreateBooking from '../../hooks/api/useCreateBooking.js';
import { toast } from 'react-toastify';
import useChangeBooking from '../../hooks/api/useChangeBooking.js';

export default function HotelInformation({ hasBooking }) {
  const [dynamicInputIsLoading, setDynamicInputIsLoading] = useState(false);
  const { hotels, hotelsError, hotelsLoading } = useHotel();
  const [selectedHotel, setSelectedHotel] = useState(false);
  const { getHotelRooms, hotelRooms } = useHotelRooms();
  const [selectedRoom, setSelectedRoom] = useState(false);
  const { createBooking, createBookingError } = useCreateBooking();
  const { changeBooking } = useChangeBooking();

  useEffect(() => {
    if (selectedHotel) {
      // Chamamos a função getRooms com o novo valor de hotel.id quando selectedHotel mudar
      getHotelRooms(selectedHotel);
    }
  }, [selectedHotel, createBookingError]);

  if (hotelsLoading) {
    return 'Carregando...';
  }

  if (hotelsError) {
    return (
      <ErrorContainer>
        <StyledError>{errorMsgType(hotelsError.response.data.message)}</StyledError>
      </ErrorContainer>
    );
  }

  function bookRoom(roomId) {
    setDynamicInputIsLoading(true);
    try {
      //se houver booking, altera a reserva
      if (hasBooking) changeBooking({ roomId }, hasBooking.id);
      //se não, cria uma reserva
      else createBooking({ roomId });
      toast('Reserva feita com sucesso!');
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } catch (err) {
      toast('Não foi possível reservar o seu quarto! Tente novamente');
      setDynamicInputIsLoading(false);
    }
  }

  return (
    <>
      <HotelPageContainer>
        <StyledMessage variant="h6" style={{ fontSize: '20px', lineBreak: 'normal' }}>
          Primeiro, escolha seu hotel
        </StyledMessage>
        {hotels && (
          <HotelListWrapper>
            {hotels.map((hotel) => (
              <HotelBox
                key={hotel.id}
                hotel={hotel}
                setSelectedHotel={setSelectedHotel}
                selectedHotel={selectedHotel}
                getRooms={getHotelRooms}
              />
            ))}
          </HotelListWrapper>
        )}

        {selectedHotel && (
          <>
            <StyledMessage variant="h6" style={{ fontSize: '20px', lineBreak: 'normal' }}>
              Ótima pedida! Agora escolha seu quarto:
            </StyledMessage>
            {hotelRooms && (
              <RoomsWrapper>
                {hotelRooms.Rooms.map((room) => (
                  <RoomBox key={room.id} room={room} selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />
                ))}
              </RoomsWrapper>
            )}
            {/* INSERIR LOADING (COM VALORES TRUE/FALSE) NO DISABLED PARA DESABILITAR DE ACORDO */}
            {selectedRoom && (
              <ButtonStyle onClick={() => bookRoom(selectedRoom)} disabled={dynamicInputIsLoading}>
                Reservar Quarto
              </ButtonStyle>
            )}
          </>
        )}
      </HotelPageContainer>
    </>
  );
}

const ButtonStyle = styled(Button)`
  width: 182px;
`;

const RoomsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
`;

const HotelListWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  overflow-x: auto;
  margin-bottom: 20px;
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

const StyledError = styled(Typography)`
  && {
    max-width: 388px;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
    color: #8e8e8e;
  }
`;

const HotelPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ErrorContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
