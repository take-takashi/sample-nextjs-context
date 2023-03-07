"use client";

import React from "react";
import { NextPage } from "next";
import { SampleButton } from "./sampleButton";

type PageState = {
  name: string;
  count: number;
};

export const SampleContextsPageContext = React.createContext(
  {} as {
    state: PageState;
    setState: React.Dispatch<React.SetStateAction<PageState>>;
  }
);

const SampleContextsPage: NextPage = () => {
  const [state, setState] = React.useState<PageState>({
    name: "",
    count: 0,
  });
  return (
    <main>
      <SampleContextsPageContext.Provider value={{ state, setState }}>
        <SampleButton />
      </SampleContextsPageContext.Provider>
    </main>
  );
};
export default SampleContextsPage;
