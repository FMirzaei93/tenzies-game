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

