import './GameView.css';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import { useEffect, useState } from 'react';
import { isDisabled } from '@testing-library/user-event/dist/utils';

export const GameView = ({ setGameStarted }) => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      time >= 0 && setTime(time + 1);
    }, 1000);
    return () => clearTimeout(timeoutID); //remove timeout on component unmount
  }, [time]);
  return (
    <>
      <Menu label="CZAS GRY">
        <Button isDisabled={true}>{time}</Button>
      </Menu>
      <Menu label="LICZBA RUCHÓW">
        <Button isDisabled={true}>2</Button>
      </Menu>
      <Menu label="PRZYCISKI STERUJĄCE">
        <Button
          onClick={() => {
            setGameStarted(false);
            // setScore(0);
          }}
        >
          PASS
        </Button>
      </Menu>
    </>
  );
};
