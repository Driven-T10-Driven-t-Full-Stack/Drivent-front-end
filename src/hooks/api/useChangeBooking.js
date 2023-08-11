import useAsync from '../useAsync';
import useToken from '../useToken';

import * as bookingApi from '../../services/bookingApi.js';

export default function useChangeBooking() {
  const token = useToken();

  const {
    data: newBooking,
    loading: newBookingLoading,
    error: newBookingError,
    act: changeBooking
  } = useAsync((data, bookingId) => bookingApi.change(data, bookingId, token), false);
  
  return {
    newBooking,
    newBookingLoading,
    newBookingError,
    changeBooking
  };
}
