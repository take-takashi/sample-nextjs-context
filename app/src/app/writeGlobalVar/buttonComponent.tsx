"use client";

import { NextPage } from "next";
import React from "react";
import { useSampleContext } from "./context";

const ButtonComponent: NextPage = () => {
  const [inputText, setInputText] = React.useState("");
  const { state, setState } = useSampleContext();

  const onClickInput = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setState("aaaaaaa");
    console.log("aaa" + state);
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const onChangeInput2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  return (
    <div>
      <span>{state}</span>
      <form>
        <input type="text" value={inputText} onChange={onChangeInput} />
        <button onClick={onClickInput}>button</button>
        <input type="text" value={state} onChange={onChangeInput2} />
        {/*<button onClick={() => setState("foo")}>foo</button>*/}
      </form>
    </div>
  );
};
export default ButtonComponent;
