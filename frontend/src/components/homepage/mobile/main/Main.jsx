import React from 'react'
import styles from "./Main.module.css"
export default function Main() {
  return (
    <>
    <div className={styles.main}>
        <div className={styles.cards}>
            <img src="/z-coin.png" alt="rewards-icon" width="30px" height="30px"/>
            <h4>Z Rewards</h4>
            <p>See my Rewards Points</p>
            <i className={`fa-solid fa-arrow-right ${styles.arrow}`}></i>
        </div>
        <div className={styles.cards}>
            <i class="fa-solid fa-utensils"></i>
            <h4>Order drinks & food</h4>
            <i className={`fa-solid fa-arrow-right ${styles.arrow}`}></i>
        </div>
        <div className={styles.cards}>
            <img src="/fuel.svg" alt="fuel-icon"width="30px" height="30px"/>
            <h4>Pre-buy fuel</h4>
            <i className={`fa-solid fa-arrow-right ${styles.arrow}`}></i>
        </div>
        <div className={styles.cards}>
            <img src="evcharge.svg" alt="ev-charger-icon" width="30px" height="30px"/>
            <h4>Charge my EV</h4>
            <i className={`fa-solid fa-arrow-right ${styles.arrow}`}></i>
        </div>
    </div>
    </>
  )
}
