import axios from 'axios';

type APIOptions = {
  token?: string;
  withoutBaseUrl?: boolean;
};

const baseURL = 'process.env.REACT_APP_API_URL';

export const apiGet = async (
  path: string,
  options?: {
    token?: string | null;
    withoutBaseUrl?: boolean;
  }
) => {
  const baseURL = 'http://localhost:3000';
  const res = await axios.get(path, {
    baseURL: options?.withoutBaseUrl ? undefined : baseURL,
    headers: {
      Authorization: `Bearer ${options?.token}`,
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
