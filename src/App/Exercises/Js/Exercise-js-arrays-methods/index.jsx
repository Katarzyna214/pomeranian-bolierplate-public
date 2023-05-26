import './styles.css';

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayOfMultipleTypes = [true, 1, 'Cześć to ja', { kasia: 'nazwisko' }];
//obiekty na dole:
const objectOfMultipleTypes = {
  katarzyna: 'nazwisko',
  kursFe: { test: 2 },
  kursFe1: 1,
  kursFe2: true,
  kursFe3: [1, 2, 3, 4],
  kursFe4: () => 'Lubię Vanilla JS.', //funkcja
};

export function Exercise() {
  const { katarzyna, kursFe3 } = objectOfMultipleTypes; //destrukturyzacja obiektów
  const [kursFe2] = arrayOfMultipleTypes; // destrukturyzacja tablicy

  function filterMethod(arrayOfNumbersParam) {
    const greaterThan5 = arrayOfNumbersParam.filter(function (arrayNumber) {
      return arrayNumber > 5;
    });
    return console.log('filterMethod', greaterThan5);
  }
  filterMethod(arrayOfNumbers);

  function thisSameElementsFromArray() {
    const arrOne = [1, 2, 3, 4, 5];
    const arrTwo = [3, 5, 7, 9];
    const result = arrOne.filter(function (numberElement) {
      return arrTwo.includes(numberElement); //tutaj szuka elementow z arrone ktore sa takie same jak arrtwo
    });
    return console.log('thisSameElementsFromArray', result);
  }
  thisSameElementsFromArray();

  function mergeObjects() {
    const object1 = { foo: 'bar' };
    const object2 = { name: 'Kasia' };
    const resultofMerging = { ...object1, ...object2 };
    console.log('mergeObjects', resultofMerging);
    return resultofMerging.name;
  }

  return (
    <div>
      <p>Metody na tablicach:</p>
      <pre>
        <code>{objectOfMultipleTypes.kursFe.test}</code>
        <br />
        <code>{objectOfMultipleTypes['kursFe']['test']}</code> <br />
        <code>{objectOfMultipleTypes.katarzyna}</code> <br />
        <code>{objectOfMultipleTypes.kursFe4()}</code> <br />
        <code>{objectOfMultipleTypes.kursFe1}</code> <br />
        <code>{objectOfMultipleTypes.kursFe3}</code> <br />
        <code>{mergeObjects()}</code> <br />
        <code>{kursFe3}</code>
        {String(kursFe2)}
      </pre>
    </div>
  );
}
