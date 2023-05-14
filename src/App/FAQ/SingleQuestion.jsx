import './styles.css';
import React from 'react';
import { useState } from 'react';

export const SingleQuestion = (props) => {
  const question = props.question;
  const answear = props.answear;

  const [isTrue, setIsTrue] = useState(true);

  const clickHandler = () => {
    setIsTrue(!isTrue);
  };

  return (
    <div className="pierwszybox">
      <h2 className="naglowek2" onClick={clickHandler}>
        {question}
      </h2>
      <hr className="hr" />
      <p className="par2">{isTrue && answear}</p>
    </div>
  );
};
