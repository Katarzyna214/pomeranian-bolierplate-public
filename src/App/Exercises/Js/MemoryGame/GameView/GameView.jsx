import './GameView.css';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import { useEffect, useState } from 'react';
import { isDisabled } from '@testing-library/user-event/dist/utils';

export const GameView = ({ setGameStartedMemo, time, amount, setAmount }) => {
  return (
    <>
      <Menu label="CZAS GRY">
        <Button isDisabled={true}>{time}</Button>
      </Menu>
      <Menu label="LICZBA RUCHÓW">
        <Button isDisabled={true}>{amount}</Button>
      </Menu>
      <Menu label="PRZYCISKI STERUJĄCE">
        <Button
          onClick={() => {
            setGameStartedMemo(false);
            setAmount(0);
          }}
        >
          PASS
        </Button>
      </Menu>
    </>
  );
};
