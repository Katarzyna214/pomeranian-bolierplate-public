import './styles.css';
import { useEffect, useState } from 'react';
import { MenuView } from './MenuView/MenuView';
import { GameView } from './GameView/GameView';
import { BoardView } from './BoardView/BoardView';

export function MemoryGame() {
  const [isGameStartedMemo, setGameStartedMemo] = useState(false);
  const [time, setTime] = useState(0);
  const [timeInterval, setTimeInterval] = useState()
  const [boardSize, setBoardSize] = useState()
  const [amount, setAmount] = useState(0);
  const [isGameEndededMemo, setGameEndedMemo] = useState(false);
  // const [myTime, setMyTime] = useState(0);
  const [myNewTime, setMyNewTime] = useState(0);

  useEffect(()=>{
    if (isGameStartedMemo) {
      const gameInterval = setInterval(()=>{
        setTime((prev) => prev + 1) //previous value from current state:time poprzedni czas
      }, 1000);
      setTimeInterval(gameInterval)
    } else {
      clearInterval(timeInterval)
      setTime(0);
    }
  }, [isGameStartedMemo])

  console.log(time, 'time in line 29/index.jsx')
  console.log(myNewTime, 'myTime in line 30/index.jsx')

  return (
    <div className="main_memory_game">
      <h2>MEMORY GAME</h2>
      <p className="memory_game_par">
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary.{' '}
      </p>
      {isGameStartedMemo ? (
        <GameView
          setGameStartedMemo={setGameStartedMemo}
          time={time}
          amount={amount}
          setAmount={setAmount}
          setGameEndedMemo={setGameEndedMemo}
         
        />
      ) : (
        <MenuView 
          setGameStartedMemo={setGameStartedMemo}
          setBoardSize={setBoardSize}  
          setGameEndedMemo={setGameEndedMemo}
          myTime={myNewTime}
          amount={amount}
          time={time}
          isGameEndedMemo={isGameEndededMemo}
          boardSize={boardSize}
          setAmount={setAmount}
       />
      )}

      {isGameStartedMemo && <BoardView
        time={time}
        boardSize={boardSize} 
        amount={amount} 
        setAmount={setAmount} 
        setGameEndedMemo={setGameEndedMemo} 
        setTime={setTime}
        setGameStartedMemo={setGameStartedMemo}
        isGameEndedMemo={isGameEndededMemo}
        setMyTime={setMyNewTime}/>
      }
    </div>
  );
}
