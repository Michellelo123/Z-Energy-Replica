import React from 'react'
import styles from "./Subfooter.module.css"
export default function Subfooter() {
  return (
    <>
    <div className={styles.subfooter}>
        <ul>
            <li>Privacy</li>
            <li>Terms of use</li>
            <li>Fuel Safety Data Sheets</li>
            <li>Investor relations</li>
        </ul>
        <div className={styles.privacy}>
            <p>&copy; Z Energy Limited. All trademarks are used under license  </p>
            <img src="/privacy-img.png" alt="" width="30px"/>
        </div>

    </div>
       
    </>
  )
}
