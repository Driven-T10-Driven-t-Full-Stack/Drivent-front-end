import * as ticketApi from '../../services/ticketApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export function useTicket() {
  const token = useToken();
  const {
    data: ticket,
    loading: ticketLoading,
    error: ticketError,
    act: getTicket
  } = useAsync(() => ticketApi.ticketTypes(token));

  return {
    ticket,
    ticketLoading,
    ticketError,
    getTicket
  };
}

export function useTicketPost() {
  const token = useToken();
  const {
    data: ticket,
    loading: ticketLoading,
    error: ticketError,
    act: postTicket
  } = useAsync((data) => ticketApi.postTicket(token, data));

  return {
    ticket,
    ticketLoading,
    ticketError,
    postTicket
  };
}
