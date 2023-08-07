import { BsFillPersonFill, BsPerson } from 'react-icons/bs';

export default function PersonSlots({ capacity, bookings }) {
  const filled = Array.from({ length: bookings }, (_, i) => (
    <BsFillPersonFill key={i} color={capacity === bookings ? '#8C8C8C' : 'black'} />
  ));

  const remainingCapacity = capacity - bookings;
  const available = Array.from({ length: remainingCapacity }, (_, i) => <BsPerson key={i + bookings} />);

  const allPersons = [...filled, ...available];

  return allPersons;
}
