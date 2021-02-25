import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  let { dataUser, getDataUser } = useContext(ChallengesContext);
  
  setTimeout(getDataUser, 1000)

  return (
    <div className={styles.profileContainer}>
      <img
        // src={dataUser.avatar_url ? dataUser.avatar_url : 'images/user.png'}
        src="images/user.png"
        // alt={dataUser.name ? dataUser.name : "Usuario"}
        alt="Usuario"
      />

      <div>
        {/* <strong>{dataUser.name ? dataUser.name : "Usuario"}</strong> */}
        <strong>Usuario</strong>
        
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}

// "https://cdn.discordapp.com/avatars/563106455025352726/c0fd3465de28c1d48f2e1f821e7ae445.png?size=128"