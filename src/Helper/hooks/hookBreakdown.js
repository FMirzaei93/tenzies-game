import React from "react";

// Step 1: Make a custom hook which takes in an initial value and return a state and setter (mimicing the React.useState)
export const useLocalStorage1 = (initialValue) => {
  const [data, setData] = React.useState(initialValue);

  return React.useMemo(() => [data, setData], [data]);
};

// Step 2: Save the data to the localStorage on every value change
export const useLocalStorage2 = (key, initialValue) => {
  const [data, setData] = React.useState(initialValue);

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return React.useMemo(() => [data, setData], [data]);
};

// Step 3: Read out the saved data from the localStorage
export const useLocalStorage3 = (key, initialValue) => {
  const [data, setData] = React.useState(() => {
    const storedValue = localStorage.getItem(key);

    if (storedValue !== null) {
      return JSON.parse(storedValue);
    }

    return initialValue;
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return React.useMemo(() => [data, setData], [data]);
};

// Step 4: Guard against key value change by cleaing up the old state from the localStorage
export const useLocalStorage4 = (key, initialValue) => {
  const [data, setData] = React.useState(() => {
    const storedValue = localStorage.getItem(key);

    if (storedValue !== null) {
      return JSON.parse(storedValue);
    }

    return initialValue;
  });
  const keyRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = keyRef.current;

    if (prevKey !== key) {
      localStorage.removeItem(prevKey);
    }
    keyRef.current = key;
    localStorage.setItem(key, JSON.stringify(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, key]);

  return React.useMemo(() => [data, setData], [data]);
};

// Step 5: Make the initialValue more flexible in terms of its type
export const useLocalStorage5 = (key, initialValue) => {
  const [data, setData] = React.useState(() => {
    const storedValue = localStorage.getItem(key);

    if (storedValue !== null) {
      return JSON.parse(storedValue);
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
    localStorage.setItem(key, JSON.stringify(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, key]);

  return React.useMemo(() => [data, setData], [data]);
};

// Step 6: Add additonal options argument for more flexible data handling
// Default the options to JSON.stringify and JSON.parse
export const defaultOptions = {
  serialise: JSON.stringify,
  deserialise: JSON.parse,
};

export const useLocalStorage6 = (
  key,
  initialValue,
  options = defaultOptions
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
      localStorage.removeItem(prevKey);
    }
    keyRef.current = key;
    localStorage.setItem(key, serialise(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, key]);

  return React.useMemo(() => [data, setData], [data]);
};

// Step 7: Guard agains malformed localStorage data
export const useLocalStorage7 = (
  key,
  initialValue,
  options = defaultOptions
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

// Step 8: Subscribe to localStorage change to keep the state up to date in other browser tabs
export const useLocalStorage8 = (
  key,
  initialValue,
  options = defaultOptions
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

  React.useEffect(() => {
    const prevKey = keyRef.current;

    const handleStorage = (event) => {
      if (event.key === prevKey && event.newValue) {
        try {
          setData(deserialise(event.newValue));
        } catch {
          setData(
            typeof defaultValue === "function" ? initialValue() : initialValue
          );
        }
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return React.useMemo(() => [data, setData], [data]);
};
