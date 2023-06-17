import './MenuView.css';
import { Menu } from '../Menu/Menu';
import { Button } from '../Button/Button';
import { SelectButtons } from '../SelectButtons/SelectButtons';
import { Result } from '../ResultView/ResultView';

export const MenuView = ({
  setGameStarted,
  setTime,
  setInitialTime,
  time,
  initialTime,
  score,
  setScore,
  isGameStopped,
}) => {
  return (
    <>
      {(time === 0 || isGameStopped) && (
        <Result score={score} resultTime={initialTime - time} />
      )}
      <Menu label="CZAS GRY">
        <SelectButtons
          setOptionChosen={setTime}
          setInitialTime={setInitialTime}
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
        <Button
          onClick={() => {
            setGameStarted(true);
            setScore(0);
          }}
        >
          START
        </Button>
      </Menu>
    </>
  );
};
