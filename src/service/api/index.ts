import axios from 'axios';

const baseURL = import.meta.env.VITE_INTYPE_API_ENDPOINT;

export const apiGet = async (
  path: string,
  options?: {
    token?: string | null;
    withoutBaseUrl?: boolean;
  }
) => {
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
  const res = await axios.post(path, data, {
    baseURL: withoutBaseUrl ? undefined : baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
