import useAsync from '../useAsync';
import useToken from '../useToken';
import * as ticketTypeApi from '../../services/ticketTypeApi';

export function useTicket() {
  const token = useToken();
  const {
    data: ticket,
    loading: ticketLoading,
    error: ticketError,
    act: getTicket
  } = useAsync(() => ticketTypeApi.ticketTypes(token));

  return {
    ticket,
    ticketLoading,
    ticketError,
    getTicket
  };
}

export function useTicketUser() {
  const token = useToken();
  const {
    data: ticket,
    loading: ticketLoading,
    error: ticketError,
    act: getTicketUser
  } = useAsync(() => ticketTypeApi.ticketUser(token));

  return {
    ticket,
    ticketLoading,
    ticketError,
    getTicketUser
  };
}

export function useTicketPost() {
  const token = useToken();
  const {
    data: ticket,
    loading: ticketLoading,
    error: ticketError,
    act: postTicket
  } = useAsync((data) => ticketTypeApi.postTicket(token, data));

  return {
    ticket,
    ticketLoading,
    ticketError,
    postTicket
  };
}
