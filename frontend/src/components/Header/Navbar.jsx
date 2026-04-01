import {useState} from 'react'
import styles from "./Navbar.module.css" 
import {Link} from "react-router-dom"

export default function Navbar({openMenu, toggleMenu}) {
 
 
    return (
    <>
        <div className={styles.navBar}>
            <div className={styles.leftMainNav}>
                <li><img src="/home-images/Z.png" alt="Z-Logo" /></li>
                <li><button>For Personal</button></li>
                <li>For Business</li>
            </div>
            <div className={styles.rightMainNav}>
                <ul>
                    <li>Download Z App</li>
                    <li>About Z</li>
                    <li><i class="fa-solid fa-magnifying-glass"></i></li>
                    <Link to="/account" className={styles.login}>
                        <button onClick={()=>toggleMenu("login")}>
                        Login
                        {/* <img src="/down-arrow.png" alt="" width="10px"/> */}
                        <i class="fa-solid fa-angle-down"></i>
                    </button>
                    {openMenu === "login" && (
                        <ul className={styles.dropdown}>
                            <li>Login</li>
                            <li>Sign up</li>
                        </ul>
                    )}
                    </Link>
                </ul>
            </div>
        </div>
        {/* //testing */}
        
    </>
  )
}
