import {useState, useEffect} from 'react'
import Navbar from '../Header/Navbar'
import Hero from './hero-section/Hero'
import More from './more-section/More'
import Footer from '../footer/Footer'
import Subfooter from '../footer/Subfooter'
import axios from "axios"
import styles from "./Home.module.css"
import Mobile from "./mobile/Mobile"
import Subnavbar from '../Header/Subnavbar'

export default function Home() {
  const [cards, setCards] = useState([])

  const [openMenu, setOpenMenu] = useState(null)
  
   const toggleMenu = (menuName)=>{
      if(openMenu === menuName){
          setOpenMenu(null)
      }else{
          setOpenMenu(menuName)
      }
   }
  
  useEffect(()=>{
    const fetchCards = async()=>{
      try {
        const res = await axios.get("/api/home")
        setCards(res.data)
      }catch(err){
        console.error("unable to fetch information", err)
      }
    }
    fetchCards()
  },[])
  
  return (
    <>
      <div className={styles.home}>
          <Navbar openMenu={openMenu} toggleMenu={toggleMenu}/>
          <Subnavbar openMenu={openMenu} toggleMenu={toggleMenu}/>
          <Hero/>
          <More cards={cards}/>
          <Footer/>
          <Subfooter/>
      </div>
      <div className={styles.mobile}>
        <Mobile/>
      </div>
          

    </>
    
  )
}
