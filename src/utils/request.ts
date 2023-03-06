import axios from 'axios';

const instance = axios.create({
  baseURL: `${
    process.env.NODE_ENV === 'production'
      ? process.env.URL
      : process.env['REACT_APP_BASE_URL']
  }/`,
});

instance.defaults.timeout = 25000;

function checkStatus(response: any) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  if (response.response.status === 405) {
    return response.response;
  }

  const error = new Error(response.statusText);
  throw error;
}

export async function axiosGet(path: string) {
  const res = await instance
    .get(path)
    .then(checkStatus)
    .catch((error) => {
      if (!JSON.parse(JSON.stringify(error)).response) throw error;
    });
  return res;
}

export async function axiosPost(path: string, body: any) {
  const res = await instance
    .post(path, body)
    .then(checkStatus)
    .catch((error) => {
      if (!JSON.parse(JSON.stringify(error)).response) throw error;
    });
  return res;
}

export async function axiosDelete(path: string) {
  const res = await instance
    .delete(path)
    .then(checkStatus)
    .catch((error) => {
      throw error;
    });
  return res;
}

export async function axiosPut(path: any, body: any) {
  const res = await instance
    .put(path, body)
    .then(checkStatus)
    .catch((error) => {
      if (!JSON.parse(JSON.stringify(error)).response) throw error;
    });
  return res;
}
