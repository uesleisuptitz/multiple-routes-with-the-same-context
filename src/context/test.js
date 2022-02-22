import React, { createContext, useEffect, useContext, useState } from "react";

const TestContext = createContext({});

const TestProvider = ({ children }) => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    console.log("CONTEXTO CRIADO");
    setValue(true);
  }, []);

  return (
    <TestContext.Provider value={{ value }}>{children}</TestContext.Provider>
  );
};

const useTest = () => useContext(TestProvider);

export { useTest, TestProvider };
