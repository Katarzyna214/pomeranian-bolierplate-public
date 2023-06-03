import './MenuView.css';
import { Menu } from '../Menu/Menu';
import { Button } from '../Button/Button';
import { SelectButtons } from '../SelectButtons/SelectButtons';

export const MenuView = ({ setGameStarted, score, isGameEnded }) => {
  return (
    <>
      {isGameEnded && (
        <div>
          Gratulacje! Twój wynik to {score} złapane krety w czasie 1 minuty!
        </div>
      )}
      <Menu label="CZAS GRY">
        <SelectButtons
          options={[
            {
              label: '1 minuta',
              isActive: false,
              value: 1,
            },
            {
              label: '2 minuty',
              isActive: false,
              value: 2,
            },
            {
              label: '3 minuty',
              isActive: false,
              value: 3,
            },
          ]}
        />
      </Menu>
      <Menu label="LICZBA KRETÓW">
        <SelectButtons
          options={[
            {
              label: '1 kret',
              isActive: false,
              value: 1,
            },
            {
              label: '2 krety',
              isActive: false,
              value: 2,
            },
            {
              label: '3 krety',
              isActive: false,
              value: 3,
            },
          ]}
        />
      </Menu>
      <Menu label="PRZYCISKI STERUJĄCE">
        <Button onClick={() => setGameStarted(true)}>START</Button>
      </Menu>
    </>
  );
};
