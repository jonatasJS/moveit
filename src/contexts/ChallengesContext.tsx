import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  startNewChallenge: () => void;
  levelUp: () => void;
  resetChallenge: () => void;
  level: number;
  activeChallenges: Challenge;
  currentExperience: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [ level, setLevel ] = useState(0);
  const [ currentExperience, setCurrentExperience ] = useState(0);
  const [ challengesCompleted, setChallengesCompleted ] = useState(0);
  const [ activeChallenges, setActiveChallenges ] = useState(null);
  const experienceToNextLevel = Math.pow((level + 1) * 8, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenges(challenge);
  }

  function resetChallenge() {
    setActiveChallenges(null);
  }

  return (
    <ChallengesContext.Provider value={{
      startNewChallenge,
      experienceToNextLevel,
      level,
      levelUp,
      currentExperience,
      challengesCompleted,
      activeChallenges,
      resetChallenge
      }}
    >
      { children }
    </ChallengesContext.Provider>
  );
}

