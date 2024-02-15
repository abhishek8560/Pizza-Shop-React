import React, { useContext } from "react";
import styles from "./Item.module.css";
import PizzaAppContext from "../Store/PizzaAppContext";

function Item({ img, about, price, pizzaName, index }) {
  let { onAddClick } = useContext(PizzaAppContext);
  return (
    <div className={styles.itemContainer}>
      <img src={img} alt="" />
      <p className={styles.pizzaName}>{pizzaName}</p>
      <p>{about}</p>
      <p className={styles.price}>Price: ₹ {price}</p>
      <button onClick={() => onAddClick(index)}>Add</button>
    </div>
  );
}

export default Item;
