import Head from 'next/head';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from '../contexts/CountdownContext';


export default function Home() {
  return (
    <main className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <ChallengeBox />
        </section>
      </CountdownProvider>

    </main >
  )
}
