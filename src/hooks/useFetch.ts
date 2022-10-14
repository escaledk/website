import { useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

interface IUserFetchState<T> {
  isLoading: boolean;
  response: {
    statusCode: number;
    body: T;
  } | null;
  error: Error | null;
}

const init: IUserFetchState<any> = {
  isLoading: false,
  response: null,
  error: null,
};

export function useFetch<T>(url: string): [state: IUserFetchState<any>, execute: (options: AxiosRequestConfig<T>) => Promise<Response | undefined>] {
  const [state, setState] = useState<IUserFetchState<T>>(init);

  const execute = async (options: AxiosRequestConfig<any>) => {
    setState((state) => ({
      ...state,
      isLoading: true,
      error: null,
      response: null,
    }));
    try {
      if (state.isLoading) return;

      const res = await axios(url, options);
      console.log(res);
      setState((state) => ({
        ...state,
        isLoading: false,
        error: null,
        response: {
          statusCode: res.status,
          body: res.data,
        },
      }));

      return res as any;
    } catch (error) {
      console.log(error);
      setState((state) => ({
        ...state,
        isLoading: false,
        error: error as any,
        response: null,
      }));
    }
  };

  return [state, execute];
}
