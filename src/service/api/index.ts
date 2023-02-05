import axios from 'axios';

export const apiGet = (
  path: string,
  token?: string,
  withoutBaseUrl?: boolean
) => {
  const baseURL = 'http://localhost:3000';
  return axios.get(path, {
    baseURL: withoutBaseUrl ? undefined : baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const apiPost = (
  path: string,
  data?: any,
  token?: string,
  withoutBaseUrl?: boolean
) => {
  const baseURL = 'http://localhost:3000';
  return axios.post(path, data, {
    baseURL: withoutBaseUrl ? undefined : baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
