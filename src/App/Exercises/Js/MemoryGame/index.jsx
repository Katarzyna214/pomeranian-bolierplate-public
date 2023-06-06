import './styles.css';
import { useState } from 'react';
import { MenuView } from './MenuView/MenuView';
import { GameView } from './GameView/GameView';
import { BoardView } from './BoardView/BoardView';

export function MemoryGame() {
  const [isGameStarted, setGameStarted] = useState(false);
  return (
    <div className="main_memory_game">
      <h2>MEMORY GAME</h2>
      <p className="memory_game_par">
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary.{' '}
      </p>
      <MenuView />
      <GameView />
      <BoardView />
      {/* {isGameStarted ? <GameView /> : <MenuView />} */}
    </div>
  );
}
