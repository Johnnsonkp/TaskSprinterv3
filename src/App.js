import "./App.css";

import * as React from "react";

import { useEffect, useState } from "react";

import { DefaultContainer } from "./Containers/DefaultContainer";
import Main from "./Pages/Main";

function App() {
  return (
    <div className="App">
      <DefaultContainer
        content={<h2 style={{ textAlign: "left" }}>Main WorkSpace</h2>}
      />
      <Main />
    </div>
  );
}

export default App;
