import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChanllenges.module.css'

export function CompletedChanllenges() {
  const { challengesCompleted } = useContext(ChallengesContext);
  
  return (
    <div className={styles.completedChanllengesContainer}>
      <span>Desafios Completos</span>
      <span>{ challengesCompleted }</span>
    </div>
  );
}