import useAsync from '../useAsync';
import useToken from '../useToken';

import * as bookingApi from '../../services/bookingApi.js';

export default function useCreateBooking() {
  const token = useToken();

  const {
    loading: createBookingLoading,
    error: createBookingError,
    act: createBooking
  } = useAsync((data) => bookingApi.create(data, token), false);
  
  return {
    createBookingLoading,
    createBookingError,
    createBooking
  };
}
