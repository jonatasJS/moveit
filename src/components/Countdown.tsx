import { useEffect, useState } from 'react';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const [ Time, setTime ] = useState(25 * 60);
  const [ Active, setActive ] = useState(false);
  const minutes = Math.floor(Time / 60);
  const seconds = Time % 60;
  const [ minuteLeft, minuteRight ] = String(minutes).padStart(2, '0').split('');
  const [ secondLeft, secondRight ] = String(seconds).padStart(2, '0').split('');
  const [ textButton, setTextButton ] = useState("Iniciar um ciclo");

  function startCountdown() {
    if(Active) {
      setActive(false);
      setTextButton("Continuar o ciclo");
    } else {
      setActive(true);
      setTextButton("Pausar");
    }
  }

  useEffect(() => {
    if (Active && Time > 0) {
      setTimeout(() => {
        setTime(Time - 1);
      }, 1000);
    }
  }, [ Active, Time ])

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      <button
        type='button'
        className={styles.countdownButton}
        onClick={startCountdown}
      >
        {textButton}
      </button>
    </div>
  )
}