import styled from 'styled-components';
import { BsFillPersonFill, BsPerson } from 'react-icons/bs';
import Typography from '@material-ui/core/Typography';

export default function RoomBox({ room, selectedHotel }) {
  function ArrayTest({ capacity, bookings }) {
    const filled = Array.from({ length: bookings }, (_, i) => <BsFillPersonFill key={i} />);

    const remainingCapacity = capacity - bookings;
    const available = Array.from({ length: remainingCapacity }, (_, i) => <BsPerson key={i + bookings} />);

    const allPersons = [...filled, ...available];

    return allPersons;
  }

  return (
    <RoomContainer capacity={room.capacity} bookings={room.bookings}>
      <Typography variant="subtitle1" component="p" style={{ fontSize: '20px', fontWeight: 'bold' }}>{selectedHotel}</Typography>
      <span>
        <ArrayTest capacity={room.capacity} bookings={room.bookings} />
      </span>
    </RoomContainer>
  );
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
  background-color: ${({ capacity, bookings }) => (capacity === bookings ? '#dddddd' : '#FFFFFF')};
  //#8C8C8C
  span {
    font-size: 30px;
  }
`;
