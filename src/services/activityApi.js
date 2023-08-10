import api from './api';

export async function getActivities(token) {
  const response = await api.get('/activity', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function postActivities(body, token) {
  const response = await api.post('/activity', body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function getUserActivities(token) {
  const response = await api.get('/activity/user', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}
