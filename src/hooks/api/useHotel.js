import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi.js';

export default function useHotel() {
  const token = useToken();

  const {
    data: hotels,
    loading: hotelsLoading,
    error: hotelsError,
    act: getHotels
  } = useAsync(() => hotelApi.getHotelsList(token));

  return {
    hotels,
    hotelsLoading,
    hotelsError,
    getHotels
  };
}
