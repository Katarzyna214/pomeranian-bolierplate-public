import { useState } from 'react';
import './styles.css';
import { useEffect } from 'react';

export function JsPromisesExercise({ parameterToEffect }) {
  const [getState, setState] = useState(null);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Wykonuje operację cykliczną');
    }, 5000);
    // cleanup function inside useEffect
    return () => {
      clearInterval(timer);
      console.log('Zatrzymaj operację cykliczną - wykonuje cleanup');
    };
    // two possible options in useEffect array od dependencies to kick useEffect and cause rendering of the component
  }, [parameterToEffect, getState]);
  return <div className="playing-with-js-promises"> Test </div>;
}
