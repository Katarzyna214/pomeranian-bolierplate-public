import { useEffect } from 'react';
import './styles.css';

export function PromiseUsageMethods() {
  const promises = [
    new Promise((resolve) =>
      setTimeout(() => {
        console.log('trigger 1 setTimeout');
        resolve(1);
      }, 1000)
    ),
    new Promise((resolve) =>
      setTimeout(() => {
        console.log('trigger 2 setTimeout');
        resolve(2);
      }, 2000)
    ),
    new Promise((resolve) =>
      setTimeout(() => {
        console.log('trigger 3 setTimeout');
        resolve(3);
      }, 3000)
    ),
  ];
  useEffect(() => {
    // Promise.all(promises).then(alert); //alert sie wywola gdy wszystkie promisy sie zakoncza beda resolved z gory, tak dziala all, wszystkie musza sie spelnic bo jak jeden nie to sie wysypie
    // Promise.allSettled(promises).then((results) => console.log(results)); // musze byc wszystkie zapoczątkowane a nie wazne czy wszystkie beda success, wyswietli po prostu tablice tych promisow
    // Promise.race(promises).then(alert); //race dziala w ten sposob ze jak mam liste promisow ktory pierwszy bedzie resolved ten wygrywa ten sie wyswietli
    Promise.any(promises).then(alert); // ktory pierwszy sie zakonczy,

    // const result = await Promise.any(promises) ale w funkcji w use effect musze dodac async useEffect (async())
    // const result = await Promise.all(promises)
    // const result = await Promise.allSettled(promises)
    // const result = await Promise.race(promises)
  }, []);

  return (
    <div>
      <h2>Promise Usage Methods</h2>
    </div>
  );
}
