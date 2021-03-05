import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';
import { useSession } from 'next-auth/client';

import { Container } from './styles';

const Profile = () => {
  const { level } = useContext(ChallengesContext);
  const [ session ] = useSession();
  console.log(session)

  return (
    <Container>
      <img src={session.user.image} alt={session.user.name} />

      <div>
        <strong>{session.user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </Container>
  );
};

export default Profile;
