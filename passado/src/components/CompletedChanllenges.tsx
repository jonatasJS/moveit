import Head from 'next/head'
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChanllenges.module.css'

export function CompletedChanllenges() {
  const { challengesCompleted, completeChallenge } = useContext(ChallengesContext);

  return (
    <div className={styles.completedChanllengesContainer}>
      <Head>
        {/* <title>Inicio | {dataUser.name ? dataUser.name : 'Usuario'}</title> */}
        <title>Inicio | Usuario</title>
      </Head>
      <span>Desafios Completos</span>
      <span>{ challengesCompleted }</span>
    </div>
  );
}