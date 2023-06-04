import './PlayGround.css';
import { ReactComponent as Mole } from '../../../../Images/Mole.svg';
import { useEffect, useState } from 'react';

const fields = [
  {
    id: 1,
    hasClicked: false,
  },
  {
    id: 2,
    hasClicked: false,
  },
  {
    id: 3,
    hasClicked: false,
  },
  {
    id: 4,
    hasClicked: false,
  },
  {
    id: 5,
    hasClicked: false,
  },
  {
    id: 6,
    hasClicked: false,
  },
  {
    id: 7,
    hasClicked: false,
  },
  {
    id: 8,
    hasClicked: false,
  },
  {
    id: 9,
    hasClicked: false,
  },
  {
    id: 10,
    hasClicked: false,
  },
];
const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;

export const PlayGround = ({ score, setScore }) => {
  const [modifiedFields, setModifiedFields] = useState(fields);
  const [fieldWithMoleId, setFieldWithMoleId] = useState(getRandomInt(10));
  const resetClickFlags = () => {
    setTimeout(() => {
      setModifiedFields(
        modifiedFields.map((field) => {
          return {
            ...field,
            hasClicked: false,
          };
        })
      );
    }, 300);
  };

  const handlescoreUpdate = (isMolePresent) => {
    isMolePresent ? setScore(score + 1) : setScore(score - 1);
  };
  const handleClick = (clickedField, isMolePresent) => {
    setModifiedFields(
      modifiedFields.map((field) => {
        return {
          ...field,
          hasClicked: field.id === clickedField.id,
        };
      })
    );
    resetClickFlags();
    handlescoreUpdate(isMolePresent);
  };
  useEffect(() => {
    setInterval(() => {
      setFieldWithMoleId(getRandomInt(10));
    }, 700);
  }, []);

  return (
    <div className="playground">
      {modifiedFields.map((field) => {
        const isMolePresent = field.id === fieldWithMoleId;
        const isClickedFieldWithMole =
          isMolePresent && field.hasClicked ? 'field-green' : '';
        const isClickedFieldWitouthMole =
          !isMolePresent && field.hasClicked ? 'field-red' : '';
        return (
          <div
            className={`field ${isClickedFieldWithMole} ${isClickedFieldWitouthMole}`}
            key={field.id}
            onClick={() => handleClick(field, isMolePresent)}
          >
            {isMolePresent && <Mole />}
          </div>
        );
      })}
    </div>
  );
  // return (
  //   <div className="playground">
  //     <button className="field">
  //       {' '}
  //       <Mole className="svg" />
  //     </button>

  //     <button className="field"></button> na poczatku bylo divami
  //     <button className="field"></button>
  //     <button className="field"></button>
  //     <button className="field"></button>
  //     <button className="field"></button>
  //     <button className="field"></button>
  //     <button className="field"></button>
  //     <button className="field"></button>
  //     <button className="field"></button>
  //   </div>
  // );
};
