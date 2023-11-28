import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const data = {
    count,
    setCount,
  };

  return (
    <CounterContext.Provider value={data}>{children}</CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
