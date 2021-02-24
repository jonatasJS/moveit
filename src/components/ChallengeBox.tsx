import { useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenges, resetChallenge } = useContext(ChallengesContext);

  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenges ? (
        <div className={styles.challengeActive}>
          <header>Ganhe { activeChallenges.amount } xp</header>

          <main>
            <img src={`icons/${activeChallenges.type}.svg`}/>
            <strong>Novo desafio</strong>
            <p>{ activeChallenges.description }</p>
          </main>

          <footer>
            <button 
              type='button'
              className={styles.challengeFailedButton}
              onClick={resetChallenge}
            >Falhei</button>
            <button 
              type='button'
              className={styles.challengeSucceededButton}
            >Completei</button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeBoxNotActive}>
          <strong>Inicie um ciclo para receber desafios a serem completados</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Complete-os e ganhe experiência e avance de leve.
          </p>
        </div>
      ) }
    </div>
  );
}