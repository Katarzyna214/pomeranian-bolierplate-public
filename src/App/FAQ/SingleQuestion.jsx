import './styles.css';
import React from 'react';

export const SingleQuestion = (props) => {
  
   const question = props.question
   const answear = props.answear
  
  return (
    <div className="pierwszybox">
    <h2 className="naglowek2">{question}</h2>
    <hr className="hr" />
    <p className="par2">
      {answear}
    </p>
  </div>
  );
};
