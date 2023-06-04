import './styles.css';

import { useEffect } from 'react';

import { GameView } from './GameView/GameView';
import { PlayGround } from './PlayGround/PlayGround';
import { useState } from 'react';
import { MenuView } from './MenuView/MenuView';

export function HitTheMole() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);
  const [initialTime, setInitialTime] = useState(60);
  const [isGameStopped, setIsGameStopped] = useState(false);

  useEffect(() => {
    time === 0 && setGameStarted(false);
  }, [time]);

  return (
    <div className="main_hit_the_mole">
      <h2>HIT THE MOLE GAME</h2>
      <p className="hit_the_mole_par">
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.{' '}
      </p>
      {isGameStarted ? (
        <GameView
          setGameStarted={setGameStarted}
          score={score}
          setScore={setScore}
          time={time}
          setTime={setTime}
          isGameStarted={isGameStarted}
          setIsGameStopped={setIsGameStopped}
        />
      ) : (
        <MenuView
          time={time}
          initialTime={initialTime}
          score={score}
          setGameStarted={setGameStarted}
          setTime={setTime}
          setInitialTime={setInitialTime}
          setScore={setScore}
          isGameStopped={isGameStopped}
        />
      )}
      {isGameStarted && <PlayGround score={score} setScore={setScore} />}
    </div>
  );
}
