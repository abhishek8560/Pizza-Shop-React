import React, { useEffect, useState } from "react";
import PizzaAppContext from "./PizzaAppContext";
import pizzaArray from "../Components/data";

function PizzaAppProvider({ children }) {
  let [orderArray, setOrderArray] = useState([]);
  let [orderTotal, setOrderTotal] = useState(0);

  function onAddClick(index) {
    setOrderArray([
      ...orderArray,
      { itemName: pizzaArray[index].pizzaName, price: pizzaArray[index].price },
    ]);
  }
  useEffect(() => {
    if (orderArray.length === 0) {
      setOrderTotal(0);
    } else if (orderArray.length === 1) {
      setOrderTotal(orderArray[0].price);
    } else {
      function generateTotal() {
        let sum = 0;
        for (let i = 0; i < orderArray.length; i++) {
          sum = sum + orderArray[i].price;
        }
        return sum;
      }
      setOrderTotal(generateTotal());
    }
  }, [orderArray]);

  return (
    <PizzaAppContext.Provider
      value={{
        orderArray,
        onAddClick,
        orderTotal,
      }}
    >
      {children}
    </PizzaAppContext.Provider>
  );
}

export default PizzaAppProvider;
