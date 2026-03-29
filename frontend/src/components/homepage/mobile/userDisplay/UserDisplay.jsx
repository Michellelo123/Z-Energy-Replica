import React, { useEffect, useState } from 'react'
import styles from "./UserDisplay.module.css"
import { supabase } from "../../../login/Supabase";

export default function UserDisplay() {
  const [user, setUser] = useState();
  
  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  const rawName = user?.user_metadata?.full_name || user?.email?.split("@")[0];
  const displayName = rawName?.charAt(0).toUpperCase() + rawName?.slice(1);

  return (
    <>
      <div className={styles.userDisplay}>
        <h2>Kia ora {displayName},</h2>
        <button>
          Find a Z
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </>
  )
}