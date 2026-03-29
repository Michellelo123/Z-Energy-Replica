import React from 'react'
import styles from "./TopNav.module.css"
export default function TopNav() {
  return (
    <>
        <div className={styles.topNav}>
            <i class="fa-solid fa-bars"></i>
            <i class="fa-solid fa-bell"></i>
        </div>
    </>
  )
}
