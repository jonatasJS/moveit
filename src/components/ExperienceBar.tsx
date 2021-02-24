import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  return (
    <header className={styles.experienceBar}>
      <span>600 xp</span>
      <div>
        <div style={{ width: '50%' }}/>

        <span
          className={styles.currentExperience}
          style={{ left: '50%' }}
        >
          900 xp
        </span>
      </div>
      <span>1200 xp</span>
    </header>
  )
}