export function getRoomAvailabilityText(availability) {
  const types = ['Single', 'Double', 'Triple'];
  const availableTypes = types.filter((type) => availability[type.toLowerCase()]);

  if (availableTypes.length === 0) {
    return 'Nenhum quarto disponível';
  }

  if (availableTypes.length === 1) {
    return availableTypes[0];
  }

  if (availableTypes.length === 2) {
    return `${availableTypes[0]} e ${availableTypes[1]}`;
  }

  const lastType = availableTypes.pop();
  return `${availableTypes.join(', ')} e ${lastType}`;
}
