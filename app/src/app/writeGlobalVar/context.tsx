"use client";

import React, { useContext } from "react";

interface ContextProps {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const Context = React.createContext<ContextProps>({
  state: "",
  setState: () => {},
});

export const useSampleContext = () => useContext(Context);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // 初期値は""の文字列
  const [state, setState] = React.useState<string>("");
  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
};
