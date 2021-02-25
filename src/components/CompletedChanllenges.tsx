import Head from 'next/head'
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChanllenges.module.css'

export function CompletedChanllenges() {
  const { challengesCompleted, completeChallenge } = useContext(ChallengesContext);
  let { dataUser, getDataUser } = useContext(ChallengesContext);
  
  setTimeout(getDataUser, 1000)

  console.log(dataUser)

  return (
    <div className={styles.completedChanllengesContainer}>
      <Head>
        <title>Inicio | {dataUser.name ? dataUser.name : 'Usuario'}</title>
      </Head>
      <span>Desafios Completos</span>
      <span>{ challengesCompleted }</span>
    </div>
  );
}