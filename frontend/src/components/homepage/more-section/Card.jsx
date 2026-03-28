import styles from "./More.module.css"
export default function Card({title, subtitle, info}) {
  return (
    <div className={styles.card}>
        <div className={styles.cardTitle}>
            <h3>{title}</h3>
        <i class="fa-solid fa-arrow-right"></i>
        </div>
        
        <div className={styles.cardInfo}>
            <h2>{subtitle}</h2>    
            <p>{info}</p>
        </div>
    </div>
  )
}
