import './GameView.css';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';

export const GameView = ({}) => {
  return (
    <>
      <Menu label="CZAS DO KOŃCA">
        <div className="value-field">[czasss]</div>
      </Menu>

      <Menu label="WYNIK">
        <div className="value-field">{2}</div>
      </Menu>

      <Menu label="PRZYCISKI STREUJĄCE">
        <Button onClick={() => {}}>Stop</Button>
      </Menu>
    </>
  );
};
