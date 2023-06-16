import { useState } from 'react';
import './styles.css';
import { useEffect } from 'react';
import { ApiSymulationSuccess } from './ApiSymulationSuccess/ApiSymulationSuccess';

export function JsPromisesExercise({ parameterToEffect }) {
  // const [getState, setState] = useState(null);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log('Wykonuje operację cykliczną');
  //   }, 5000);
  //   // cleanup function inside useEffect
  //   return () => {
  //     clearInterval(timer);
  //     console.log('Zatrzymaj operację cykliczną - wykonuje cleanup');
  //   };
  //   // two possible options in useEffect array od dependencies to kick useEffect and cause rendering of the component
  // }, [parameterToEffect, getState]);
  function logPromiseState(promise) {
    promise
      .then(() => {
        //success
        console.log('Stan: fulfilled');
        console.log('Promise zakończony sukcesem');
      })
      .catch(() => {
        //failed
        console.log('Stan: rejected');
        console.log('Promise zakończony błędem');
      })
      .finally(() => {
        //respectivelly what happened I will do this
        console.log('Stan: fulfilled/rejected');
        console.log('Promise zakończony.');
      });
  }
  const myPromise = new Promise((resolve, rejected) => {
    //deklaracja promisa moze miec dwa stany obslugujemy asynchroniczne!!!!
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        resolve();
      } else {
        rejected();
      }
    }, 2000);
  });
  logPromiseState(myPromise);

  return (
    <div className="playing-with-js-promises">
      {' '}
      <ApiSymulationSuccess />{' '}
    </div>
  );
}
