import { useState, useEffect } from 'react';
import styled from 'styled-components';
import useHotel from '../../hooks/api/useHotel.js';
import Typography from '@material-ui/core/Typography';
import HotelBox from './HotelBox.js';
import errorMsgType from './ErrorMsgType.js';
import useHotelRooms from '../../hooks/api/useHotelRooms.js';
import RoomBox from './RoomBox.js';
import Button from '../Form/Button.js';

export default function HotelInformation() {
  const { hotels, hotelsError, hotelsLoading } = useHotel();
  const [selectedHotel, setSelectedHotel] = useState(false);
  const { getHotelRooms, hotelRooms } = useHotelRooms();
  const [selectedRoom, setSelectedRoom] = useState(false);

  useEffect(() => {
    if (selectedHotel) {
      // Chamamos a função getRooms com o novo valor de hotel.id quando selectedHotel mudar
      getHotelRooms(selectedHotel);
    }
  }, [selectedHotel]);

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
                  <RoomBox
                    key={room.id}
                    room={room}
                    selectedRoom={selectedRoom}
                    setSelectedRoom={setSelectedRoom}
                  />
                ))}
              </RoomsWrapper>
            )}
            {/* INSERIR LOADING (COM VALORES TRUE/FALSE) NO DISABLED PARA DESABILITAR DE ACORDO */}
            {selectedRoom && <ButtonStyle onClick={() => alert('selecionando a sala de id '+selectedRoom)} disabled={false}>
              Reservar Quarto
            </ButtonStyle>}
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
