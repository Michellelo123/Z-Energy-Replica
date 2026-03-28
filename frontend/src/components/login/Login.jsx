import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

import Logo from "../../assets/logo.svg";
import styles from "./Login.module.css";

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

          {/* Header / Hero */}
          <div className={styles.LoginHeader}>
            <div className={styles.Title}>
              <img src={Logo} alt="Z-Energy Logo" className={styles.logo} />
              <h1>ENERGY</h1>
            </div>
            <p className={styles.SubTitle}>Sign up, it's free!</p>
          </div>

          {/* Card */}
          <div className={styles.Card}>
            <h2 className={styles.CardTitle}>Login</h2>

            <div className={styles.Form}>
              <input
                className={styles.Input}
                type="email"
                placeholder="Email address"
              />
              <input
                className={styles.Input}
                type="password"
                placeholder="Password"
              />
              <button className={styles.LoginBtn} type="button">
                Login
              </button>
            </div>

            <div className={styles.Divider}>
              <span>or</span>
            </div>

            <p className={styles.NoAccount}>Don't have an account?</p>

            <div className={styles.SocialButtons}>
              <button className={styles.SocialBtn} type="button">
                <FaApple className={styles.SocialIcon} />
                Sign in with Apple
              </button>
              <button className={styles.SocialBtn} type="button">
                <FaFacebook className={`${styles.SocialIcon} ${styles.Facebook}`} />
                Sign in with Facebook
              </button>
              <button className={styles.SocialBtn} type="button">
                <FaGoogle className={styles.SocialIcon} />
                Sign in with Google
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default Login;