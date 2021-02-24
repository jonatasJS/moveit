import Head from 'next/head';

import { CompletedChanllenges } from '../components/CompletedChanllenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  const name = "Jônatas Souza Soares"

  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | {name}</title>
      </Head>

      <ExperienceBar />

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
    </div>
  )
}
