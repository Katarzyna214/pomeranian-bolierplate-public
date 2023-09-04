import './styles.css';
import React from 'react';
import { useState } from 'react';
import { ReactComponent as Vector } from '../Components/Icons/Vector.svg';

export const SingleQuestion = (props) => {
  const question = props.question;
  const answear = props.answear;

  const [isVisible, setVisibility] = useState(false);

  const clickHandler = () => {
    setVisibility(!isVisible);
  };

  return (
    <div className="pierwszybox">
      <h2 className="naglowek2">{question}</h2>
      <div className="nonebutton">
        <button
          className={`button1 ${isVisible ? 'rotateButton' : ''}`}
          onClick={clickHandler}
        >
          {' '}
          <Vector className="button1" />{' '}
        </button>
      </div>
      {/* <hr className="hr" /> */}
      <p className="par2">{isVisible && answear}</p>
    </div>
  );
};
