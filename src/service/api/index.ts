import axios from 'axios';

export const apiGet = async (
  path: string,
  {
    token,
    withoutBaseUrl,
  }: {
    token?: string;
    withoutBaseUrl?: boolean;
  }
) => {
  const baseURL = 'http://localhost:3000';
  const res = await axios.get(path, {
    baseURL: withoutBaseUrl ? undefined : baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const apiPost = async (
  path: string,
  {
    data,
    token,
    withoutBaseUrl,
  }: {
    data?: any;
    token?: string;
    withoutBaseUrl?: boolean;
  }
) => {
  const baseURL = 'http://localhost:3000';
  const res = await axios.post(path, data, {
    baseURL: withoutBaseUrl ? undefined : baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
