import './GameView.css';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import { useEffect, useState } from 'react';

export const GameView = ({ setGameStarted, score, setScore }) => {
  const [count, setCount] = useState(60);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      count > 0 && setCount(count - 1);
    }, 1000);

    return () => clearTimeout(timeoutID); //remove timeout on component unmount
  }, [count]);
  return (
    <>
      <Menu label="CZAS DO KOŃCA">
        <div className="value-field">{count}</div>
      </Menu>

      <Menu label="WYNIK">
        <div className="value-field">{score}</div>
      </Menu>

      <Menu label="PRZYCISKI STREUJĄCE">
        <Button
          onClick={() => {
            setGameStarted(false);
            setScore(0);
          }}
        >
          Stop
        </Button>
      </Menu>
    </>
  );
};
