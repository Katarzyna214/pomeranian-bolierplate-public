import './GameView.css';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';

export const GameView = ({}) => {
  return (
    <>
      <Menu label="CZAS GRY">
        <Button isDisabled={true}>1:35</Button>
      </Menu>
      <Menu label="LICZBA RUCHÓW">
        <Button isDisabled={true}>2</Button>
      </Menu>
      <Menu label="PRZYCISKI STERUJĄCE">
        <Button isDisabled={false}>PASS</Button>
      </Menu>
    </>
  );
};
