"use client";

import { NextPage } from "next";
import React from "react";
import { Context } from "./context";

const ButtonComponent: NextPage = () => {
  const [inputText, setInputText] = React.useState("");
  const { text, setText } = React.useContext(Context);

  const onClickInput = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setText("aaaaaaa");
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <span>{text}</span>
      <input type="text" value={inputText} onChange={onChangeInput} />
      {/*<button onClick={onClickInput}>button</button>*/}
      <button onClick={() => setText("foo")}>foo</button>
    </div>
  );
};
export default ButtonComponent;
