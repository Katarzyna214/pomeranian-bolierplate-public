import './styles.css';

// typu tablic: boolean przyjmuje tylko wartosci true/false
// array  = [true] kontener moze zawierac wszystkie boolean number i object
//number =  1; itd.
//object = { ma swoj klucz unikalny i przyjmuje wartosc}
// string = "wartosc tekstowa"
// na dole tablica wielu typow i mozemy wsadzic tam te wszystkie z gory;
//tu na dole umieszczamy jak najwiecej danych a potem funkcja .map mozemy je potem wylistowac, rozne rzeczy wyciagnac z niej w rozny sposob
// .length() mowi nam ile jest elementow w tablicy
//petla while do poki warunek jest prawdziwy to funkcja bedzie dzialac

const arrayOfMultipleTypes = [true, 1, 'Cześć to ja', { kasia: 'nazwisko' }];
const arrayOfNumbers = [1, 2, 3, 4, 5];

const arrayOfNumbers1 = [1, 2, 3];
const arrayOfNumbers2 = [4, 5, 6];
export function Exercise() {
  function getValueByIndex(array) {
    return console.log(array[0]);
  }
  getValueByIndex(arrayOfMultipleTypes);

  function deletedElement(arrayOfNumbers) {
    return console.log(arrayOfNumbers.shift());
  }
  deletedElement(arrayOfNumbers);

  function popElementOfArray(arrayParam) {
    return console.log('popElementOfArray', arrayParam.pop(arrayParam));
  }
  popElementOfArray(arrayOfNumbers);

  function pushElementToArray(arrayToPush) {
    return console.log(
      'pushElementToarray',
      arrayToPush.push('Cześć JS jest bardzo intuicyjny..')
    );
  }
  pushElementToArray(arrayOfNumbers);

  function concatArrays(arrayNumber1, arrayNumber2) {
    const newArray = [].concat(arrayNumber1, arrayNumber2);
    return console.log('concatArrays', newArray);
  }
  concatArrays(arrayOfNumbers1, arrayOfNumbers2);

  function spreadTwoArrays() {
    const a = [1, 2, 3];
    const b = [4, 5, 6];
    return console.log('spreadTwoArrays', [...a, ...b]);
  }
  spreadTwoArrays();

  function forLoop() {
    for (let count = 0; count <= 5; count++) {
      console.log(count);
    }
  }
  forLoop();
  function whileLoop() {
    let whileCount = 0;
    while (whileCount <= 5) {
      console.log('whileLoop', whileCount);
      whileCount++;
    }
  }
  whileLoop();

  function whileLoopWithBreak() {
    let whileCount = 0;
    while (whileCount <= 10) {
      console.log('whileLoopWithBreak', whileCount);
      if (whileCount === 5) {
        break;
      }
      whileCount++;
    }
  }
  whileLoopWithBreak();

  return (
    <div>
      <p>Działania na tablicach:</p>
      <pre>
        <code></code>
      </pre>
    </div>
  );
}
