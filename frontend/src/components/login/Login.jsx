// Icons
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import Logo from "../../assets/logo.svg";

// Styles
import styles from "./Login.module.css";

// Supabase
import { supabase } from "./Supabase.Jsx";

// React
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Login component
function Login() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const requestLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Lat:", position.coords.latitude);
          console.log("Lng:", position.coords.longitude);
        },
        (error) => console.error("Location denied or failed:", error.message),
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const handleLogin = async () => {
    setError("");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) return setError(error.message);
    requestLocation();
    navigate("/");
  };

  // Google login
  const handleGoogle = async () => {
    await supabase.auth.signInWithOAuth({ provider: "google" });
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
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
              <img src={Logo} alt="Z-Energy Logo" className={styles.logo} />
              <h1>ENERGY</h1>
            </div>
            <p className={styles.SubTitle}>Sign up, it's free!</p>
          </div>

          <div className={styles.Card}>
            <h2 className={styles.CardTitle}>Login</h2>

            <div className={styles.Form}>
              <input
                className={styles.Input}
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className={styles.Input}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && (
                <p style={{ color: "red", fontSize: "14px" }}>{error}</p>
              )}
              <button
                onClick={handleLogin}
                className={styles.LoginBtn}
                type="button"
              >
                Login
              </button>
            </div>

            <div className={styles.Divider}>
              <span>or</span>
            </div>

            <p className={styles.NoAccount}>Don't have an account?</p>

            <div className={styles.SocialButtons}>
              <button className={styles.SocialBtn} type="button" disabled>
                <FaApple className={styles.SocialIcon} />
                Sign in with Apple
              </button>
              <button className={styles.SocialBtn} type="button">
                <FaFacebook
                  className={`${styles.SocialIcon} ${styles.Facebook}`}
                />
                Sign in with Facebook
              </button>
              <button
                className={styles.SocialBtn}
                type="button"
                onClick={handleGoogle}
              >
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
