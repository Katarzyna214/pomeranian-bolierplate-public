import './GameView.css';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

export const GameView = ({ setGameStarted, score, setScore }) => {
  return (
    <>
      <Menu label="CZAS DO KOŃCA">
        <div className="value-field">[czasss]</div>
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
