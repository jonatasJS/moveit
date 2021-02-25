import Head from 'next/head';

import { CompletedChanllenges } from '../components/CompletedChanllenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChanllenges />
            <Countdown />
          </div>
            <ChallengeBox />
          <div>

          </div>
        </section>
        </CountdownProvider>
    </div>
  )
}
