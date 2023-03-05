import React from "react";
import { ContextProvider, Context } from "../readGlobalVar/context";

const TestButton = () => {
  const state = React.useContext(Context);

  const onClickInput = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    alert("hello" + state.count);
  };

  return <button onClick={onClickInput}>Push</button>;
};
export default TestButton;
