import './styles.css';
import { Menu } from './Menu/Menu';
import { Button } from './Button/Button';
import { GameView } from './GameView/GameView';
import { PlayGround } from './PlayGround/PlayGround';
import { useState } from 'react';

export function HitTheMole() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div className="main_hit_the_mole">
      <h4>HIT THE MOLE GAME</h4>
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
        <>
          <Menu label="CZAS GRY">
            <Button isActive={true}>1 minuta</Button>
            <Button>2 minuty</Button>
            <Button>3 minuty</Button>
          </Menu>
          <Menu label="LICZBA KRETÓW">
            <Button isActive>1 kret</Button>
            <Button>2 krety</Button>
            <Button>3 krety</Button>
          </Menu>

          <Menu label="PRZYCISKI STERUJĄCE">
            <Button onClick={() => setGameStarted(true)}>START</Button>
          </Menu>
        </>
      )}

      {/* <ResultView result={result} /> */}

      {isGameStarted && <PlayGround score={score} setScore={setScore} />}
    </div>
  );
}
