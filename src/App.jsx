import React from "react";
import MyPizzaApp from "./MyPizzaApp";
import "./App.css";
import PizzaAppProvider from "./Store/PizzaAppProvider";

function App() {
  return (
    <div>
      <PizzaAppProvider>
        <MyPizzaApp />
      </PizzaAppProvider>
    </div>
  );
}

export default App;
