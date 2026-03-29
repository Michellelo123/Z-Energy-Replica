import React from 'react'
import styles from "./UserDisplay.module.css"
export default function UserDisplay() {
  return (
    <>
        <div className={styles.userDisplay}>
            <h2>Kia ora Alex,</h2>
            <button>
                Find a Z 
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </>
  )
}
