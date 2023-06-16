import { useState } from 'react';
import './styles.css';
import { useEffect } from 'react';

export function JsPromisesWithUseEffectExercise() {
  const [promiseResult, setPromiseResult] = useState('');

  useEffect(() => {
    const myPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("I'm resolved :)");
      }, 2000);
    });

    myPromise
      .then((result) => {
        setPromiseResult(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="js-promises-with-use-effect">
      {' '}
      <h1>Promise Example</h1> {promiseResult && <p>{promiseResult}</p>}
    </div>
  );
}
