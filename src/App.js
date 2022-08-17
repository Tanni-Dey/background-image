import React from "react";
import "./App.css";
import Header from "./components/Header";
import RemoveBackground from "./components/RemoveBackground";

function App() {
  return (
    <div className="App">
      <div className="container py-5">
        <Header />
        <RemoveBackground />
      </div>
    </div>
  );
}

export default App;
