import React from 'react'
import Card from './Card'
import styles from "./More.module.css"
export default function More({cards}) {
  return (
    <>
        <h1 className={styles.title}>Make the most of Z</h1>
        <div className={styles.cards}>
            {cards.map(card=>(
                
                <Card 
                key={card.id}
                title={card.title}
                subtitle={card.subtitle}
                info={card.info}
                 />
            ))}
        </div>
    </>
  )
}
