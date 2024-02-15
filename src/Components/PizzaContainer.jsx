import React, { useContext } from "react";
import styles from "./PizzaContainer.module.css";
import Item from "./Item";
import pizzaArray from "./data";

function PizzaContainer() {
  return (
    <div className={styles.pizzaContainer}>
      {pizzaArray.map((item, index) => (
        <Item
          key={index}
          img={item.img}
          about={item.about}
          price={item.price}
          pizzaName={item.pizzaName}
          index={index}
        />
      ))}
    </div>
  );
}

export default PizzaContainer;
