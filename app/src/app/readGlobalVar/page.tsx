"use client";

import React from "react";
import TestButton from "../components/testButton";
import { ContextProvider } from "./context";

export default function ReadGlobalVar() {
  return (
    <main>
      <ContextProvider>
        <TestButton />
      </ContextProvider>
    </main>
  );
}
