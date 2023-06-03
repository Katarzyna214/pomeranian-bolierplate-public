import './styles.css';
import { GameView } from './GameView/GameView';
import { PlayGround } from './PlayGround/PlayGround';
import { useState } from 'react';
import { MenuView } from './MenuView/MenuView';

export function HitTheMole() {
  const [isGameStarted, setGameStarted] = useState(false);

  const [score, setScore] = useState(0);

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
        />
      ) : (
        <MenuView score={score} setGameStarted={setGameStarted} />
      )}

      {isGameStarted && <PlayGround score={score} setScore={setScore} />}
    </div>
  );
}
