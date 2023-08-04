import { useState, useEffect } from 'react';
import styled from 'styled-components';
import useHotel from '../../hooks/api/useHotel.js';
import Typography from '@material-ui/core/Typography';
import HotelBox from './HotelBox.js';
import errorMsgType from './ErrorMsgType.js';

export default function HotelInformation() {
  const { hotels, hotelsError, hotelsLoading } = useHotel();
  const [hotelRooms, setHotelRooms] = useState(); //recupera salas clicadas atuais
  const [selectedHotel, setSelectedHotel] = useState(false);

  if (hotelsLoading) {
    return 'Carregando...';
  }

  if (hotelsError) {
    return (
      <ErrorContainer>
        <StyledError>{errorMsgType(hotelsError.response.data)}</StyledError>
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
              />
            ))}
          </HotelListWrapper>
        )}

        {selectedHotel && (
          <>
            <StyledMessage variant="h6" style={{ fontSize: '20px', lineBreak: 'normal' }}>
              Ótima pedida! Agora escolha seu quarto:
            </StyledMessage>
            <RoomsWrapper>Quartos do hotel de ID {selectedHotel}</RoomsWrapper>
          </>
        )}
      </HotelPageContainer>
    </>
  );
}

const RoomsWrapper = styled.div`
  display: flex;
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
  height: 80%;
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
