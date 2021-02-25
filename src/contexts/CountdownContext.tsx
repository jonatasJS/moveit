import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

let countdownTimeout: NodeJS.Timeout;

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  resetCountdown: () => void;
  startCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContex = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const timeValue = 25 * 60;
  const [ Time, setTime ] = useState(timeValue);
  const [ isActive, setIsActive ] = useState(false);
  const [ hasFinished, setHasFinished ] = useState(false);
  const minutes = Math.floor(Time / 60);
  const seconds = Time % 60;

  function startCountdown() {
    setIsActive(true);
    setHasFinished(false);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(timeValue);
  }

  useEffect(() => {
    if (isActive && Time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(Time - 1);
      }, 1000);
    } else if (isActive && Time == 0) {
      setHasFinished(true);
      setIsActive(false);
      // setTime(timeValue);
      startNewChallenge();
    }
  }, [ isActive, Time ])

  return (
    <CountdownContex.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown
    }}>
      { children }
    </CountdownContex.Provider>
  );
}
