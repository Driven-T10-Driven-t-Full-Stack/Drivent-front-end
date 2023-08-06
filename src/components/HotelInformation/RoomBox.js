import styled from 'styled-components';
import { BsFillPersonFill, BsPerson } from 'react-icons/bs';

export default function RoomBox({ room, selectedHotel }) {
  return (
    <RoomContainer>
      <span>{selectedHotel}</span>
      <span>
        <ArrayTest capacity={room.capacity} bookings={room.bookings} />
      </span>
    </RoomContainer>
  );
}

function ArrayTest({ capacity, bookings }) {
  const filled = Array.from({ length: bookings }, (_, i) => <BsFillPersonFill key={i} />);

  const remainingCapacity = capacity - bookings;
  const available = Array.from({ length: remainingCapacity }, (_, i) => <BsPerson key={i} />);

  const allPersons = [...filled, ...available];

  return allPersons;
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
  span {
    font-size: 30px;
  }
`;
