import { BsFillPersonFill, BsPerson } from 'react-icons/bs';

export default function PersonSlots({ capacity, bookings, selectedRoom, roomId }) {
  const filled = Array.from({ length: bookings }, (_, i) => (
    <BsFillPersonFill key={i} color={capacity === bookings ? '#8C8C8C' : 'black'} />
  ));

  const remainingCapacity = capacity - bookings;
  let shouldHighlight = false;

  if (selectedRoom === roomId && remainingCapacity >= 1) {
    shouldHighlight = true;
  }

  const allPeople = [...filled];

  // Renderização condicional do componente selecionado
  if (shouldHighlight) {
    allPeople.push(<BsFillPersonFill key='highlighted' color='#ff4791' />);
  }

  const available = Array.from(
    { length: shouldHighlight ? remainingCapacity - 1 : remainingCapacity },
    (_, i) => <BsPerson key={i + bookings} />
  );

  allPeople.push(...available);

  return allPeople;
}
