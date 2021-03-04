import Cookies from 'js-cookie';
import { createContext, ReactNode, ReactNodeArray, useEffect, useState } from 'react';

import challenges from '../../challenges.json';
import LevelUpModal from '../components/modals/LevelUpModal';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface User {
  name: string;
  avatar_url: string;
}

interface ChallengesContextData {
  dataUser: User;
  startNewChallenge: () => void;
  levelUp: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
  level: number;
  activeChallenge: Challenge;
  currentExperience: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({
  children,
  ...rest
}: ChallengesProviderProps) {
  let data = require('../pages/api/axios');

  const [ level, setLevel ] = useState(rest.level ?? 1);
  const [ currentExperience, setCurrentExperience ] = useState(rest.currentExperience ?? 0);
  const [ challengesCompleted, setChallengesCompleted ] = useState(rest.challengesCompleted ?? 0);
  const [ activeChallenge, setActiveChallenge ] = useState(null);
  const [ dataUser, setDataUser ] = useState(data);
  const [ isLevelUpModalOpen, setIsLevelUpModalOpen ] = useState(false);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));
  }, [ level, currentExperience, challengesCompleted ]);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const interval = setInterval(() => {
    if(data) {
      clearInterval(interval)
      data = require('../pages/api/axios');
    }
  },500)

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('./notification.mp3').play();

    if(Notification.permission === "granted") {
      new Notification('Novo desafio! 🎉', {
        body: `Valendo ${challenge.amount}xp!`,
        icon: './icons/level-up.svg',
        image: './icons/level-up.svg',
        vibrate: [200, 100, 200]
      });
    } else Notification.requestPermission();
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if(!activeChallenge) return

    const { amount } = activeChallenge;
    let finalExperience = currentExperience + amount;

    if ( finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return (
    <ChallengesContext.Provider value={{
      startNewChallenge,
      experienceToNextLevel,
      level,
      levelUp,
      currentExperience,
      challengesCompleted,
      activeChallenge,
      resetChallenge,
      completeChallenge,
      dataUser,
      closeLevelUpModal
      }}
    >
      { children }

      { isLevelUpModalOpen ? <LevelUpModal /> : '' }
    </ChallengesContext.Provider>
  );
}

