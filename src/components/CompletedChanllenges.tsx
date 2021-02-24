import styles from '../styles/components/CompletedChanllenges.module.css'

export function CompletedChanllenges() {
  return (
    <div className={styles.completedChanllengesContainer}>
      <span>Desafios Completos</span>
      <span>10</span>
    </div>
  );
}