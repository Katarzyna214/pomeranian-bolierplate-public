import './GameView.css';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import { useEffect, useState } from 'react';
import { isDisabled } from '@testing-library/user-event/dist/utils';

export const GameView = ({ setGameStartedMemo }) => {
  const [time1, setTime1] = useState(0);
  useEffect(() => {
    const timeoutID1 = setTimeout(() => {
      time1 >= 0 && setTime1(time1 + 1);
    }, 1000);
    return () => clearTimeout(timeoutID1); //remove timeout on component unmount
  }, [time1]);
  return (
    <>
      <Menu label="CZAS GRY">
        <Button isDisabled={true}>{time1}</Button>
      </Menu>
      <Menu label="LICZBA RUCHÓW">
        <Button isDisabled={true}>2</Button>
      </Menu>
      <Menu label="PRZYCISKI STERUJĄCE">
        <Button
          onClick={() => {
            setGameStartedMemo(false);
            // setScore(0);
          }}
        >
          PASS
        </Button>
      </Menu>
    </>
  );
};
