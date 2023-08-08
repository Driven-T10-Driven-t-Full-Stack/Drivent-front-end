import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import PersonSlots from './PersonSlots.js';

export default function RoomBox({ room, selectedHotel, selectedRoom, setSelectedRoom }) {
  return (
    <RoomContainer
      capacity={room.capacity}
      bookings={room.bookings}
      selectedRoom={selectedRoom}
      roomId={room.id}
      onClick={() => setSelectedRoom(room.id)}
    >
      <Typography variant="subtitle1" component="p" style={{ fontSize: '20px', fontWeight: 'bold' }}>
        {selectedHotel}
      </Typography>
      <span>
        <PersonSlots capacity={room.capacity} bookings={room.bookings} selectedRoom={selectedRoom} roomId={room.id} />
      </span>
    </RoomContainer>
  );
}

function roomBgColor(capacity, bookings, selectedRoom, roomId) {
  if (capacity === bookings) return '#dddddd';
  else if (selectedRoom === roomId) return '#FFEED2';
  else return '#FFFFFF';
}

const RoomContainer = styled.div`
  box-sizing: border-box;
  min-width: 190px;
  min-height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  border: solid #cecece 1px;
  padding: 0 10px;
  background-color: ${({ capacity, bookings, selectedRoom, roomId }) =>
    roomBgColor(capacity, bookings, selectedRoom, roomId)};
  span {
    font-size: 30px;
  }
`;
