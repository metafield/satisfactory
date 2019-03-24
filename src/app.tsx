import * as React from "react";
import * as items from "./Atlas";
import { render } from "react-dom";
import ItemDisplay from "./components/ItemDisplay/ItemDisplay";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ItemDisplay item={items.reinforcedIronPlate} amount={5} />
      <hr />
    </div>
  );
}

render(<App />, document.getElementById("root"));
