// Images
import { FcGoogle } from "react-icons/fc"; // Google
import { FaFacebook } from "react-icons/fa"; // Facebook
import { FaApple } from "react-icons/fa"; // Apple

import Logo from "../../assets/logo.svg"; // Z-Energy Logo

//Styles
import styles from "./Login.module.css";

// React
import { useEffect, useState } from "react";

function Login() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.Login}>
      {isLoading ? (
        <img src={Logo} alt="Z-Energy Logo" className={styles.loadingLogo} />
      ) : (
        <div className={styles.LoginContainer}>
          <div className={styles.LoginHeader}>
            <div className={styles.Title}>
              <img src={Logo} alt="Z-Energy Logo" />
              <h1>ENERGY</h1>
            </div>
            <div className={styles.SubTitle}>
              <p>Sign up, it's free!</p>
            </div>
          </div>
          
          <div className={styles.LoginOptions}>
            <h2>Login</h2>
            <form action="submit">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Login</button>
            </form>
          </div>

        </div>
      )}
    </div>
  );
}

export default Login;
