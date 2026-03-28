import React from 'react'
import styles from "./Hero.module.css"
export default function Hero() {
  return (
    <>
        <div className={styles.hero}>
            <div className={styles.mainInfo}>
                <h1>There where you need us</h1>
                <button>Find your closest Z <span>{'>'}</span>
                    
                </button>
            </div>
        </div>
    </>
  )
}
