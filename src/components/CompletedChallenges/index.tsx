import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { FiAward } from "react-icons/fi";

import { Container } from './styles';

const CompletedCahallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext);
  return (
    <Container>
      <span><FiAward size={16} />Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  );
};

export default CompletedCahallenges;
