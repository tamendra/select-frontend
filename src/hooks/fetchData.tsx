import { useState, useEffect } from 'react';

function useFetchData<T>(restFn: Function, params?: any) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const result = await restFn(params);

        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [restFn, params]);  // Add dependencies here


  return { data, loading, error };
}

export default useFetchData;
