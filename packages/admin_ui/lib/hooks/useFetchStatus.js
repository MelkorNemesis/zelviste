import { useEffect, useState } from "react";

export function useFetchStatus(fn, ...args) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    setLoading(true);
    fn(...args)
      .then(res => {
        setResult(res.json);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [fn, ...args]);

  return { error, loading, done: !error && !loading, result };
}
