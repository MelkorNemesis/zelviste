import { useEffect, useState } from "react";

export function useFetchStatus(promiseFactory) {
  return function useFetchStatusInner(deps) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    useEffect(() => {
      setLoading(true);
      promiseFactory()
        .then(setResult)
        .catch(setError)
        .finally(() => {
          setLoading(false);
        });
    }, deps);

    return {
      error,
      loading,
      result
    };
  };
}
