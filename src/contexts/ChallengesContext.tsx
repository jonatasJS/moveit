import { truncate } from 'fs/promises';
import { createContext, ReactNode, ReactNodeArray, useEffect, useState } from 'react';
import challenges from '../../challenges.json';

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
  getDataUser: () => void;
  level: number;
  activeChallenge: Challenge;
  currentExperience: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  let data = require('../pages/api/axios');

  const [ level, setLevel ] = useState(1);
  const [ currentExperience, setCurrentExperience ] = useState(0);
  const [ challengesCompleted, setChallengesCompleted ] = useState(0);
  const [ activeChallenge, setActiveChallenge ] = useState(null);
  const [ dataUser, setDataUser ] = useState(data);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const interval = setInterval(() => {
    if(data) {
      clearInterval(interval)
      data = require('../pages/api/axios');
    }
  },500)

  function getDataUser() {
    console.log('chegou')
    setDataUser(data);
    console.log(dataUser)
  }

  function levelUp() {
    setLevel(level + 1);
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
      getDataUser,
      dataUser
      }}
    >
      { children }
    </ChallengesContext.Provider>
  );
}

