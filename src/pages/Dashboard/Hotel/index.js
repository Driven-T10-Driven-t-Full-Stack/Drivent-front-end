import styled from 'styled-components';
import HotelInformation from '../../../components/HotelInformation/index.js';
import Typography from '@material-ui/core/Typography';
import useGetBooking from '../../../hooks/api/useGetBooking.js';
import BookingInformationWrapper from '../../../components/HotelInformation/BookingInformationWrapper.js';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Hotel() {
  const { booking, bookingLoading } = useGetBooking();
  const [bookingView, setBookingView] = useState(false);
  useEffect(() => {
    if (booking) setBookingView(true);
  }, [booking]);

  if (bookingLoading) {
    return 'Carregando...';
  }

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {bookingView && <BookingInformationWrapper booking={booking} setBookingView={setBookingView} />}
      {(!booking || !bookingView) && <HotelInformation hasBooking={booking} />}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
