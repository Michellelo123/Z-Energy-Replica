import {useState, useEffect} from 'react'
import Navbar from '../navbar/Navbar'
import Hero from './hero-section/Hero'
import More from './more-section/More'
import Footer from '../footer/Footer'
import Subfooter from '../footer/Subfooter'
import axios from "axios"

export default function Home() {
  const [cards, setCards] = useState([])
  
  useEffect(()=>{
    const fetchCards = async()=>{
      try {
        const res = await axios.get("http://localhost:5000/api/home")
   console.log(res)
        setCards(res.data)
      }catch(err){
        console.error("unable to fetch information", err)
      }
    }
    fetchCards()
  },[])
  
  return (
    <>
        <Navbar/>
        <Hero/>
        <More cards={cards}/>
        <Footer/>
        <Subfooter/>

    </>
    
  )
}
