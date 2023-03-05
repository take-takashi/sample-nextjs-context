"use client";

import React from "react";

// as が大事らしい
export const Context = React.createContext(
  {} as {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
  }
);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // 初期値は""の文字列
  const [text, setText] = React.useState<string>("");
  return (
    <Context.Provider value={{ text, setText }}>{children}</Context.Provider>
  );
};
