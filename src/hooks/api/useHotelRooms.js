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
  } = useAsync((hotelId) => hotelApi.getHotelRooms(hotelId, token), false);

  return {
    hotelRooms,
    hotelRoomsLoading,
    hotelRoomsError,
    getHotelRooms,
  };
}
