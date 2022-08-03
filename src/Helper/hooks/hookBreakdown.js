import React from "react";

// Step 1: Make a custom hook which takes in an initial value and return a state and setter (mimicing the React.useState)
export const useLocalStorage1 = (initialValue) => {
  const [data, setData] = React.useState(initialValue);

  return React.useMemo(() => [data, setData], [data]);
};
