"use client";

import React from "react";
import TestButton from "./components/testButton";
import styles from "./page.module.css";
import { ContextProvider } from "./context";

export default function Home() {
  return (
    <main className={styles.main}>
      <ContextProvider>
        <TestButton />
      </ContextProvider>
    </main>
  );
}
