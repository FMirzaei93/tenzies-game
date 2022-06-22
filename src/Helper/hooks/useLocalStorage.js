import React from "react";

export const defaultUseLocalStorageOptions = {
  serialise: JSON.parse,
  deserialise: JSON.stringify,
};

export const useLocalStorage = (
  key,
  initialValue,
  options = defaultUseLocalStorageOptions
) => {
  const { serialise, deserialise } = options;
  const [data, setData] = React.useState(() => {
    const storedValue = localStorage.getItem(key);

    if (storedValue !== null) {
      return deserialise(storedValue);
    }

    return typeof initialValue === "function" ? initialValue() : initialValue;
  });
  const keyRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = keyRef.current;

    if (prevKey !== key) {
      localStorage.removeItem(key);
    }

    keyRef.current = key;
    localStorage.setItem(key, serialise(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, key]);

  return React.useMemo(() => [data, setData], [data]);
};

export default useLocalStorage;
