import './MenuView.css';
import { Menu } from '../Menu/Menu';
import { Button } from '../Button/Button';
import { SelectButtonsMemo } from '../SelectButtonsMemo/SelectButtonsMemo';

export const MenuView = ({ setGameStartedMemo, setBoardSize, amount, isGameEndedMemo, boardSize, myTime, setAmount}) => {
  // console.log(time, 'time in line 8/MenuView.jsx')
  console.log(myTime, 'myTime in line 8/MenuView.jsx')
  return (
    <> {isGameEndedMemo && <p>Gratulacje! Twój wynik to {amount} par w czasie: {myTime} dla {boardSize} elementów!</p>}
      <Menu label="LICZBA ELEMENTÓW">
        <SelectButtonsMemo
        setValue={setBoardSize}
        options={[
          {
            value: 8,
            content: '8 elementów',
            isActive: false,
          },
          {
            value: 16,
            content: '16 elementów',
            isActive: false,
          },
          {
            value: 20,
            content: '20 elementów',
            isActive: false,
          },
        ]}/>
      </Menu>
      <Menu label="PRZYCISKI STERUJĄCE">
        <Button
          onClick={() => {
            setGameStartedMemo(true);
            setAmount(0);
          }}
        >
          START
        </Button>
      </Menu>
    </>
  );
};
