import {useState, useEffect} from 'react'
import Navbar from '../../../../src/components/navbar/Navbar'
import Hero from '../../../../src/components/homepage/hero-section/Hero'
import More from '../../../../src/components/homepage/more-section/More'
import Footer from '../../../../src/components/footer/Footer'
import Subfooter from '../../../../src/components/footer/Subfooter'
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
