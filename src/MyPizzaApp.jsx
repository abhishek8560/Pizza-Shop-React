import React, { useState } from "react";
import Header from "./Components/Header";
import styles from "./MyPizzaApp.module.css";
import PizzaContainer from "./Components/PizzaContainer";
import OrderSummary from "./Components/OrderSummary";
import PizzaAppProvider from "./Store/PizzaAppProvider";
import Welcome from "./Components/Welcome";

function MyPizzaApp() {
  let [uName, setUName] = useState("");
  function onUNameChange(event) {
    setUName(event.target.value);
  }
  let [password, setPassword] = useState("");
  function onPassChange(event) {
    setPassword(event.target.value);
  }
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  function onLoginClick() {
    if (uName === "" || password === "") {
      return;
    } else {
      setIsLoggedIn(true);
    }
  }
  console.log(uName);
  console.log(password);
  console.log(isLoggedIn);
  return (
    <PizzaAppProvider>
      {isLoggedIn ? (
        <div className={styles.appContainer}>
          <div className={styles.appSidebar}>
            <Header />
            <PizzaContainer />
          </div>
          <OrderSummary />
        </div>
      ) : (
        <Welcome
          onUNameChange={onUNameChange}
          onPassChange={onPassChange}
          onLoginClick={onLoginClick}
        />
      )}
    </PizzaAppProvider>
  );
}

export default MyPizzaApp;
