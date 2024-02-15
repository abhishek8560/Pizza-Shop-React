import React, { useState } from "react";
import styles from "./Welcome.module.css";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { SiInstagram } from "react-icons/si";

function Welcome({ onUNameChange, onPassChange, onLoginClick }) {
  let [time, setTime] = useState();
  function handelTime() {
    let currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  }

  setTimeout(handelTime, 1000);
  return (
    <div className={styles.welcome}>
      <div className={styles.aboutApp}>
        <p className={styles.welcomeText}>Welcome to!</p>
        <h1>The Pizza Palace</h1>
        <p>
          "Savor the moment with every slice! Welcome to a world of irresistible
          flavors at our online pizza shop."
        </p>
        <p>
          "Elevate your pizza experience with a warm welcome to The Pizza Palace
          - where every bite tells a delicious story."
        </p>

        <p className={styles.create}>
          Created by : <span>Abhishek Yadav</span>
        </p>
        <p className={styles.icons}>
          <FaGithub /> <BsLinkedin /> <SiInstagram /> <IoMdMail />
        </p>
      </div>

      <div className={styles.loginForm}>
        <h1>Login</h1>
        <input onChange={onUNameChange} type="text" placeholder="Username" />
        <input onChange={onPassChange} type="password" placeholder="Password" />
        <button onClick={onLoginClick}>Login</button>
        <p className={styles.time}>{time}</p>
      </div>
    </div>
  );
}

export default Welcome;
