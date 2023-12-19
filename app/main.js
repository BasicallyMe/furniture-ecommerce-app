"use client";

import React from "react";
import { UserContextProvider } from "./(context)/UserContext";

function Main({ children }) {
  return (
    <div className="flex flex-col min-h-screen h-screen">
      <UserContextProvider>{children}</UserContextProvider>
    </div>
  );
}

export default Main;
