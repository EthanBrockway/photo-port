import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import About from "./components/About";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
