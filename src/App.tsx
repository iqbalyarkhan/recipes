import React from "react";
import { Recipe } from "../src/Recipe";
import { Ingredients } from "./Ingredients";
import { Instructions } from "./Instructions";
import { Title } from "./Title";

function App() {
  return (
    <div className="App">
      <h1>Main App Component</h1>
      <Title />
      <Recipe />
      <Ingredients />
      <Instructions />
    </div>
  );
}

export default App;
