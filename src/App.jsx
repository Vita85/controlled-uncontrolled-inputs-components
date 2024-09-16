import React from "react";
import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import ApiComponent from "./components/FetchApi";

import "./App.css";

function App() {
  return (
    <>
      <ControlledForm />
      <hr />
      <UncontrolledForm />

      <ApiComponent/>
    </>
  );
}

export default App;
