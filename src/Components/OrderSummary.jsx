import React, { useContext, useState } from "react";
import styles from "./OrderSummary.module.css";
import PizzaAppContext from "../Store/PizzaAppContext";
import { BsTrash3Fill } from "react-icons/bs";

function OrderSummary() {
  let { orderArray, orderTotal } = useContext(PizzaAppContext);
  let [checkout, setCheckout] = useState(false);
  function onCheckoutClick() {
    setCheckout(true);
  }
  console.log(orderTotal);
  return (
    <div className={styles.orderContainer}>
      <p className={styles.orderHead}>Your Basket</p>

      <div className={styles.orderItems}>
        {orderArray.length === 0 ? (
          <div className={styles.emptyMessage}>
            <div className={styles.icon}>
              <BsTrash3Fill />
            </div>
            <p>
              Your basket looks a little empty. Why not check out some of our
              unbeatable deals?
            </p>
          </div>
        ) : (
          orderArray.map((item, index) => (
            <div key={index} className={styles.orderItem}>
              <p>
                <b>Item {index + 1}</b> : {item.itemName}
              </p>
              <p>₹{item.price}</p>
            </div>
          ))
        )}
      </div>

      <div className={styles.totalPrice}>
        <p>
          <b>Total Payable Amount :</b>
        </p>
        <p className={styles.finalPrice}>₹{orderTotal}</p>
      </div>

      <>
        {orderArray.length === 0 ? (
          <div className={styles.noItems}>
            <p>No Items</p>
          </div>
        ) : checkout ? (
          <div className={styles.orderCompleteContainer}>
            <p>Order Complete</p>
            <p>It will be delevered within 30 mins</p>
          </div>
        ) : (
          <div className={styles.checkout}>
            <p>Minimum cart value for delivery is ₹200.</p>
            <button onClick={onCheckoutClick}>Checkout</button>
          </div>
        )}
      </>
    </div>
  );
}

export default OrderSummary;
