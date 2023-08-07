import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi.js';

export default function useHotelRooms() {
  const token = useToken();

  const {
    data: hotelRooms,
    loading: hotelRoomsLoading,
    error: hotelRoomsError,
    act: getHotelRooms,
  } = useAsync((hotelId) => {
    // Verifica se hotelId é nulo ou indefinido e retorna null para hotelRooms
    // if (!hotelId) {
    //   return null;
    // }

    // Caso hotelId tenha valor, faz a chamada da API normalmente
    return hotelApi.getHotelRooms(hotelId, token);
  });

  return {
    hotelRooms,
    hotelRoomsLoading,
    hotelRoomsError,
    getHotelRooms,
  };
}
