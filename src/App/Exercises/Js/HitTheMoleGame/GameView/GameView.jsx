import './GameView.css';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import { useEffect, useState } from 'react';
import { Result } from '../ResultView/ResultView';

export const GameView = ({
  setGameStarted,
  score,
  setScore,
  setTime,
  time,
  setIsGameStopped,
}) => {
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      time > 0 && setTime(time - 1);
    }, 1000);
    return () => clearTimeout(timeoutID); //remove timeout on component unmount
  }, [time]);

  return (
    <>
      <Menu label="CZAS DO KOŃCA">
        <div className="value-field">{time}</div>
      </Menu>

      <Menu label="WYNIK">
        <div className="value-field">{score}</div>
      </Menu>

      <Menu label="PRZYCISKI STERUJĄCE">
        <Button
          onClick={() => {
            setGameStarted(false);
            setIsGameStopped(true);
          }}
        >
          Stop
        </Button>
      </Menu>
    </>
  );
};
