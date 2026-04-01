import React from 'react'
import {useState} from 'react'
import styles from "./Subnavbar.module.css" 
export default function Subnavbar({openMenu, toggleMenu}) {
    const [activeDropdown, setActiveDropdown] = useState(null);
  return (
    <>
        <div className={styles.subNavbar}>
            <ul>
                <li onClick ={()=>{toggleMenu("station"); setActiveDropdown(activeDropdown === "station"? null: "station")}} 
                className={styles.subnavList} >
                    <span
                     className={
                        activeDropdown === "station"?
                            styles.activeSubnav : ""
                     }
                    >At the station  
                     <i className={`fa-solid fa-angle-down ${styles.dropdownArrow}`}></i>

                    </span> 
                    {openMenu === "station" && (
                        <ul className={styles.dropdown} >
                            <li>Food and drink</li>
                            <li>Food and drink</li> 
                            {/* testing is above */}
                        </ul>
                    )}
                </li>
                <li onClick ={()=>{toggleMenu("rewards"); setActiveDropdown(activeDropdown === "rewards"? null : "rewards")}} className={styles.subnavList}>
                    <span className={
                        activeDropdown === "rewards"?
                            styles.activeSubnav : ""
                     }>Rewards and promotions
                    <i className={`fa-solid fa-angle-down ${styles.dropdownArrow}`}></i>
                    </span>
                      
                    {openMenu === "rewards" &&(
                        <ul className = {styles.dropdown}>
                            <li>Rewards</li>
                        </ul>
                    )}
                </li>
                <li onClick={()=>{toggleMenu("app"); setActiveDropdown( activeDropdown === "app"? null : "app")}} className={styles.subnavList}>
                    <span   className={
                        activeDropdown === "app"?
                            styles.activeSubnav : ""
                     }>Z App
                    <i className={`fa-solid fa-angle-down ${styles.dropdownArrow}`}></i>
                    </span>
                    {openMenu === "app" && (
                        <ul className={styles.dropdown}>
                            <li>Download Z app</li>
                        </ul>
                    )}
               </li>
                <li className={styles.subnavList}><span>Locations</span></li>
            </ul>
        </div> 
    </>
  )
}

