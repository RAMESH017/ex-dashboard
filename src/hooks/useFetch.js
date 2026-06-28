import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const useFetch = (url, options = { lazy: false }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(!options.lazy);
  const [error, setError] = useState(null);

  const executeFetch = useCallback(async (customUrl = url, body = null, method = 'GET') => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios({
        url: customUrl,
        method,
        data: body,
      });
      setData(response.data);
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Data channel query processing failure';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    if (!options.lazy) {
      executeFetch();
    }
  }, [options.lazy, executeFetch]);

  return { data, loading, error, refetch: executeFetch };
};