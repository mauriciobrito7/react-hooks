import React from "react";
import "./App.css";
import ContextAndReducer from "./components/reducer-hook/ContextAndReducer";
import DataFeching from "./components/reducer-hook/DataFetching";

function App() {
  return (
    <div className="App">
      <DataFeching />
    </div>
  );
}

export default App;
