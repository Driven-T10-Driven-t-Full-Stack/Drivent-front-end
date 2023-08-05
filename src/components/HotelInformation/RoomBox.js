import styled from 'styled-components';
import { BsFillPersonFill, BsPerson } from 'react-icons/bs';

export default function RoomBox({ room, selectedHotel }) {
  console.log(room);
  console.log(selectedHotel);
  return (
    <RoomContainer>
      <span>{selectedHotel}</span>
      <span>
        <ArrayTest capacity={room.capacity} />
      </span>
    </RoomContainer>
  );
}

function ArrayTest({ capacity }) {
  return Array.from({ length: capacity }, (_, i) => <BsPerson fontSize={'30px'} />);
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
