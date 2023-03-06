import { NextPage } from "next";
import React from "react";
import { SampleContextPageContext } from "./page";

export const SampleButton: NextPage = () => {
  const { count, setCount } = React.useContext(SampleContextPageContext);

  return <button onClick={() => setCount(count + 1)}>push! {count}</button>;
};
