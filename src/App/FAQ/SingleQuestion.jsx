import './styles.css';
import React from 'react';
import { useState } from 'react';
import {ReactComponent as Vector} from '../Components/Icons/Vector.svg'

export const SingleQuestion = (props) => {
  const question = props.question;
  const answear = props.answear;

  const [isTrue, setIsTrue] = useState(true);

  const clickHandler = () => {
    setIsTrue(!isTrue);
    
    };
 const rotatePick =() => {
  Vector.transform = 'rotate (45deg)';
 };
  return (
    <div className="pierwszybox">
      <h2 className="naglowek2" >
        {question}
      </h2>
      <button onClick={()=> 
      {clickHandler ()
      rotatePick () }}> <Vector/> </button>
      <hr className="hr" />
      <p className="par2">{isTrue && answear}</p>
    </div>
  );
};
