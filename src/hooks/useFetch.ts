import { useState } from 'react';

interface IUseFetch<T> {
  fetch: (body: any) => Promise<void>;
  response: Response | null;
  body: T | null;
  isLoading: boolean;
  error?: Error | null;
}
export const useFetch = <T>(url: string, method: string): IUseFetch<T> => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<Response | null>(null);
  const [bodyContent, setBodyContent] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fetchCallback = async (body: any) => {
    resetState();
    setIsLoading(true);
    try {
      const res = await fetch(url, { method: method, body: JSON.stringify(body) });
      const bodyContent = await res.json();
      setResponse(res);
      setBodyContent(bodyContent);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetState = () => {
    setIsLoading(false);
    setResponse(null);
    setBodyContent(null);
    setError(null);
  };

  return {
    fetch: fetchCallback,
    response,
    isLoading,
    body: bodyContent,
    error,
  };
};
