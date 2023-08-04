import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketTypeApi from '../../services/ticketTypeApi';

export default function useTicketType() {
  const token = useToken();
  
  const {
    data: tickets,
    loading: ticketLoading,
    error: ticketError,
    act: ticketType,
  } = useAsync(() => ticketTypeApi.getTicketType(token));

  // eslint-disable-next-line no-console
  console.log(tickets);

  return {
    tickets,
    ticketLoading,
    ticketError,
    ticketType,
  };
}
