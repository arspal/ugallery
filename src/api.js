const BASE_URL = process.env.REACT_APP_BASE_URL;
const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;

async function request(url, { method = 'GET', ...params } = {}) {
  const resp = await fetch(`${BASE_URL}${url}`, {
    ...params,
    method,
    headers: {
      Authorization: AUTH_TOKEN,
      'Accept-Version': 'v1',
    },
  });

  if (!resp.ok) {
    throw new Error('There was an error contacting the server');
  }

  return resp.json();
}

export async function getPhotos() {
  return request('/photos');
}

export async function getPhoto(id) {
  return request(`/photos/${id}`);
}
