import './styles.css';
import { useState } from 'react';
import { MenuView } from './MenuView/MenuView';
import { GameView } from './GameView/GameView';

export function MemoryGame() {
  const [isGameStarted, setGameStarted] = useState(false);
  return (
    <div className="main_hit_the_mole">
      <h2>MEMORY GAME</h2>
      <p className="hit_the_mole_par">
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary.{' '}
      </p>
      <MenuView />
      <GameView />
      {/* {isGameStarted ? <GameView /> : <MenuView />} */}
    </div>
  );
}
