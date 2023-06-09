import './BoardView.css';
import { useState, useEffect } from 'react';

function shuffleArray(s) {
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

const alpha = Array.from(Array(26)).map((e, i) => i + 65); //listy na bazie liczby
const alphabet = alpha.map((x) => String.fromCharCode(x));
const getRandomLetters = (amount) => {
  const shuffled = [...alphabet].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, amount);
};

function generateBoard(size) {
  const randomLetters = getRandomLetters(size / 2); //bo polowa liter zawsze odkrywane dwie karty na raz
  const letters = randomLetters.map((letter) => {
    return {
      id: null,
      value: letter,
      isPaired: false,
    };
  });
  const mergedLetters = [...letters, ...letters];
  return shuffleArray(mergedLetters).map((obj, index) => {
    return { ...obj, id: index + 1 };
  });
}
export const BoardView = ({ boardSize }) => {
  const [firstClickedFieldId, setFirstClickedFieldId] = useState();
  const [secondClickedFieldId, setSecondClickedFieldId] = useState();
  const [board, setBoard] = useState(generateBoard(16));
  const handleClick = (object) => {
    const isFirstClickedSetAndIsDifferentThanPrev =
      firstClickedFieldId && firstClickedFieldId != object.id;
    if (isFirstClickedSetAndIsDifferentThanPrev) {
      setSecondClickedFieldId(object.id);
      resetSecondClickedFieldId();
    } else {
      setFirstClickedFieldId(object.id);
      resetFirstClickedFieldId();
    }
  };

  const resetFirstClickedFieldId = () => {
    setTimeout(() => {
      setFirstClickedFieldId(undefined);
    }, 5000);
  };
  const resetSecondClickedFieldId = () => {
    setTimeout(() => {
      setSecondClickedFieldId(undefined);
    }, 1000);
  };
  useEffect(() => {
    if (firstClickedFieldId && secondClickedFieldId) {
      const firstClickedFieldValue = board.find(
        (item) => item.id === firstClickedFieldId
      );
      const secondClickedFieldValue = board.find(
        (item) => item.id === secondClickedFieldId
      );
      if (firstClickedFieldValue === secondClickedFieldValue) {
        setBoard(
          board.map((field) => {
            const isClickedFieldPaired =
              field.id === firstClickedFieldId ||
              field.id === secondClickedFieldId;
            return {
              ...field,
              isPaired: field.isPaired ? true : isClickedFieldPaired,
            };
          })
        );
      }
    }
  }, [firstClickedFieldId, secondClickedFieldId]);
  console.log(board);
  return (
    <div className="board_view_main_field">
      {board.map((element) => {
        const isClicked =
          firstClickedFieldId === element.id ||
          secondClickedFieldId === element.id;
        const canShowValue = isClicked || element.isPaired;
        const clickedFliedClassName = isClicked ? 'field-clicked' : '';
        const pairedFieldClassName = element.isPaired ? 'green-field' : '';
        return (
          <div
            className={`field ${clickedFliedClassName} ${pairedFieldClassName}`}
            onClick={() => handleClick(element)}
          >
            {canShowValue && element.value}
          </div>
        );
      })}
    </div>
  );
};
