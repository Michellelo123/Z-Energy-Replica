import React from 'react'
import styles from "./Bottomnav.module.css"
export default function Bottomnav() {
  return (
    <div className={styles.bottomNav}>
        <ul className={styles.navbar}>
            <li>
                <i class="fa-solid fa-house"></i>
                <p>Home</p>
            </li>
            <li>
                <i class="fa-regular fa-map"></i>
                <p>Fuel Map</p>
            </li>
            <li>
                <img src="/home-images/barcode.svg" alt="barcode"></img>
                <p>Z Card</p>
            </li>
            <li>
                <i class="fa-solid fa-user"></i>
                <p>My Profile</p>
            </li>
        </ul>
    </div>
  )
}
