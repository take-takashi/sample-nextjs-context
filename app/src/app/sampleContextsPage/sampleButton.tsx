import { NextPage } from "next";
import React from "react";
import { SampleContextsPageContext } from "./page";

export const SampleButton: NextPage = () => {
  const { state, setState } = React.useContext(SampleContextsPageContext);

  return (
    <button
      onClick={() =>
        setState({ name: "aaa" + state.count, count: state.count + 1 })
      }
    >
      push! {state.count} - {state.name}
    </button>
  );
};
