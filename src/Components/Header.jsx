import React from "react";
import styles from "./Header.module.css";
import { GiFullPizza } from "react-icons/gi";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.appName}>
        <p className={styles.logo}>
          <GiFullPizza />
        </p>
        <p className={styles.appTitle}>Pizza Palace</p>
      </div>
      <p className={styles.open}>Open from 10:00 AM to 10:00 PM</p>
    </div>
  );
}

export default Header;
