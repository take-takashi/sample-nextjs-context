"use client";

import { NextPage } from "next";
import React from "react";
import { SampleButton } from "./sampleButton";

export const SampleContextPageContext = React.createContext(
  {} as {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
  }
);

const SampleContextPage: NextPage = () => {
  const [count, setCount] = React.useState(0);
  return (
    <main>
      <SampleContextPageContext.Provider value={{ count, setCount }}>
        <SampleButton />
      </SampleContextPageContext.Provider>
    </main>
  );
};
export default SampleContextPage;
