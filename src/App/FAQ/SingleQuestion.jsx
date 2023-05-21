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
      <button
        className={`button ${isVisible ? 'rotateButton' : ''}`}
        onClick={clickHandler}
      >
        {' '}
        <Vector />{' '}
      </button>
      <hr className="hr" />
      <p className="par2">{isVisible && answear}</p>
    </div>
  );
};
