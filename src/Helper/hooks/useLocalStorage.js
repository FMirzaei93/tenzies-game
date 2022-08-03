import React from "react";

export const defaultUseLocalStorageOptions = {
  serialise: JSON.stringify,
  deserialise: JSON.parse,
};

export const useLocalStorage = (
  key,
  initialValue,
  options = defaultUseLocalStorageOptions
) => {
  const { serialise, deserialise } = options;
  const [data, setData] = React.useState(() => {
    const storedValue = localStorage.getItem(key);

    try {
      if (storedValue !== null) {
        return deserialise(storedValue);
      }
    } catch {
      return typeof initialValue === "function" ? initialValue() : initialValue;
    }

    return typeof initialValue === "function" ? initialValue() : initialValue;
  });
  const keyRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = keyRef.current;

    if (prevKey !== key) {
      localStorage.removeItem(prevKey);
    }

    keyRef.current = key;
    localStorage.setItem(key, serialise(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, key]);

  return React.useMemo(() => [data, setData], [data]);
};

export default useLocalStorage;
