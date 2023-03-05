import React from "react";

const initialState = {
  count: 0,
  text: "hello",
};

// children
type Props = {
  children: React.ReactNode;
};

export const Context = React.createContext(initialState);

export const ContextProvider = ({ children }: Props) => {
  return <Context.Provider value={initialState}>{children}</Context.Provider>;
};
