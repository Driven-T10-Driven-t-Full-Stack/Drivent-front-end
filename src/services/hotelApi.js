import api from './api';

export async function getHotelsList(token) {
  const response = await api.get('/hotels', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

//body vazio
export async function getHotelRooms(hotelId, token) {
  const response = await api.get(
    `/hotels/${hotelId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}
