import { GetServerSideProps } from 'next';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { useSession } from 'next-auth/client';

import HomePage from '../templates/HomePage';
import LoadScreen from '../components/LoadScreen';
import LoginInterface from '../components/LoginInterface';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};

export default function Home (props: HomeProps) {
  const [ session, loading ] = useSession();
  
  return (
  <ChallengesProvider
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
  >
    {loading ?
      <LoadScreen /> :
      <div>
        {!session ? <LoginInterface /> : <HomePage />}
      </div>
    }
  </ChallengesProvider>
)}

