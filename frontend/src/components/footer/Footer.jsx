import styles from "./Footer.module.css"
export default function Footer() {
  return (
    <>
        <div className={styles.footer}>
            <div>
                <img src="/home-images/Z.png" alt="Z-logo" width="80px"/>
            </div>
            <div>
                <h3>At the station</h3>
                <ul className={styles.footerLinks}>
                    <li>Food and drink</li>
                    <li>Payment options</li>
                    <li>Station services</li>
                    <li>EV charging</li>
                    <li>Fuel types, safety and pricing</li>
                </ul>
            </div>
            <div>
                <h3>Z App</h3>
                <ul className={styles.footerLinks}>
                    <li>Pay with Z App</li>
                    <li>Sharetank</li>
                    <li>Pre-order food and drinks</li>
                    <li>Help using Z App</li>
                    <li>Z App terms and conditions</li>
                </ul>
            </div>
            <div>
                <h3>Rewards and promotions</h3>
                <ul className={styles.footerLinks}>
                    <li>Z Rewards</li>
                    <li>Fuel up</li>
                    <li>New World Clubcard</li>
                    <li>Airpoints</li>
                    <li>Promotions</li>
                    <li>Customer survey</li>
                </ul>
            </div>
            <div>
                <h3>For businesses</h3>
                <ul className={styles.footerLinks}>
                    <li>Z Business fuel card</li>
                    <li>Business chargin solutions</li>
                    <li>Fuels and services</li>
                    <li>Business tips and stories</li>
                </ul>
            </div>
            <div>
                <h3>About Z</h3>
                <ul className={styles.footerLinks}>
                    <li>Our story</li>
                    <li>Our people</li>
                    <li>What we stand for</li>                
                    <li>Sustainability</li>
                    <li>Our commitment to Te Ao Maori</li>
                    <li>News</li>
                    <li>Careers at Z</li>
                    <li>Corporate centre</li>
                </ul>
            </div>
            <div className={styles.footerRightSide}>
                <button className={styles.contactBtn}>
                    <p>Contact us</p>
                    <i class="fa-solid fa-location-dot"></i>
                </button>
                <div className={styles.icons}>
                    <i class="fa-brands fa-tiktok"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>
                <img src="/home-images/googleplay.png" alt="" width="120px" />
                <img src="/home-images/app-store.png" alt="" width="110px"/>
            </div>
    
        </div>
    
    </>
  )
}
