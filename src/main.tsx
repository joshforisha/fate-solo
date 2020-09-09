import "~/main.css";
import * as React from "react";
import { render } from "react-dom";
import { StateProvider } from "~/data/state";

function Main() {
  return (
    <StateProvider>
      <h1>Hello world</h1>
    </StateProvider>
  );
}

render(<Main />, document.getElementById("Root"));
