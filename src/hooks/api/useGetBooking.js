import useAsync from '../useAsync';
import useToken from '../useToken';

import * as bookingApi from '../../services/bookingApi.js';

export default function useGetBooking() {
  const token = useToken();

  const {
    data: booking,
    loading: bookingLoading,
    error: bookingError,
    act: getBooking
  } = useAsync(() => bookingApi.get(token));
  
  return {
    booking,
    bookingLoading,
    bookingError,
    getBooking
  };
}
