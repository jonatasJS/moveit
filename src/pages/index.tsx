import { GetServerSideProps } from 'next';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { signIn, useSession } from 'next-auth/client';

import HomePage from '../templates/HomePage';

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
  <>
  {loading ? <div>Carregando...</div> : <div>
    {!session ?
    <>
      Not signed in <br/>
      <button onClick={(): Promise<void> => signIn('auth0')}>Sign in</button>
    </> :
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <HomePage />
    </ChallengesProvider>}
  </div> }
  </>
)}

