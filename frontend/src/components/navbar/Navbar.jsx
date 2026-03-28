import {useState} from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faUser} from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css" 

export default function Navbar() {
 const [openMenu, setOpenMenu] = useState(null)

 const toggleMenu = (menuName)=>{
    if(openMenu === menuName){
        setOpenMenu(null)
    }else{
        setOpenMenu(menuName)
    }
 }
 
    return (
    <>
        <div className={styles.navBar}>
            <div className={styles.leftMainNav}>
                <li><img src="/Z.png" alt="Z-Logo" /></li>
                <li><button>For Personal</button></li>
                <li>For Business</li>
            </div>
            <div className={styles.rightMainNav}>
                <ul>
                    <li>Download Z App</li>
                    <li>About Z</li>
                    <li><i class="fa-solid fa-magnifying-glass"></i></li>
                    <li className={styles.login}>
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
                    </li>
                </ul>
            </div>
        </div>
        {/* //testing */}
        <div className={styles.subNavbar}>
            <ul>
                <li onClick ={()=>toggleMenu("station")}>
                    At the station 
                     <i class="fa-solid fa-angle-down"></i>

                    {openMenu === "station" && (
                        <ul className={styles.dropdown}>
                            <li>Food and drink</li>
                        </ul>
                    )}
                </li>
                <li onClick ={()=>toggleMenu("rewards")}>
                    Rewards and promotions
                    <i class="fa-solid fa-angle-down"></i>
                    {openMenu === "rewards" &&(
                        <ul className = {styles.dropdown}>
                            <li>Rewards</li>
                        </ul>
                    )}
                </li>
                <li onClick={()=>toggleMenu("app")}>
                    Z App
                    <i class="fa-solid fa-angle-down"></i>
                    {openMenu === "app" && (
                        <ul className={styles.dropdown}>
                            <li>Download Z app</li>
                        </ul>
                    )}
               </li>
                <li>Locations</li>
            </ul>
        </div>
    </>
  )
}
