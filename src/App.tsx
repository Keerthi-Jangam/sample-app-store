import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import StateVsProp from "./Components/StateVsProp";
import { Events } from "./Components/Events";

function App() {
  const [changeName, setChangeName] = useState("Keerthi");
  return (
    <div className="App">
      {/* <StateVsProp changeName={changeName} setChangeName={setChangeName} /> */}
      <Events changeName={changeName} setChangeName={setChangeName} />
    </div>
  );
}

export default App;
