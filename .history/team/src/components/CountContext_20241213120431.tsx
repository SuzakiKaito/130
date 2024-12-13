import React, { createContext, useState, useContext } from "react";

type CountContextType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CountContext = createContext<CountContextType | undefined>(undefined);

export const CountProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = (): CountContextType => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};