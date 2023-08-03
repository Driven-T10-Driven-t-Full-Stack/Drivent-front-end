import api from './api';

export async function ticketTypes(token) {
  const response = api.get('/tickets/types', {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return response;
}

export async function postTicket(token, body) {
  const response = api.post('/tickets', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return response;
}
