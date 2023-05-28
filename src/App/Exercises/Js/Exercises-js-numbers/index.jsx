import './styles.css';
import React from 'react';

export function Exercise() {
  let age = 18;
  let hasDriverLicense = true;
  let hasCar = true;
  let r = 3;
  let string = 'loko';
  let a = 4;
  let b = 5;
  let c = 2;
  let d = 5.9576;
  let no1 = 5;
  let no2 = 7;
  let x = 8;
  let y = 9;
  let h = 15;
  let num = 7;

  function canDrive(age, hasDriverLicense, hasCar) {
    if (age >= 18 && hasDriverLicense && hasCar) {
      return 'You can drive your car!';
    } else if (!hasCar) {
      return 'You can drive a rental car.';
    } else if (!hasDriverLicense) {
      return "You can't drive without a driver's license.";
    } else {
      return 'You are too young to drive.';
    }
  }
  function hasEnough(hasEnough) {
    return hasEnough ? 'true' : 'false';
  }
  function circleArea(r) {
    return Math.PI * Math.pow(r, 2);
  }
  function isStringShort(string) {
    return string.length < 10 ? 'true' : 'false';
  }
  function changeNumbertoText(a) {
    if (a == 1) {
      return 'niedostateczny';
    } else if (a == 2) {
      return 'dopuszczający';
    } else if (a == 3) {
      return 'dostateczny';
    } else if (a == 4) {
      return 'dobry';
    } else if (a == 5) {
      return 'bardzo dobry';
    } else if (a == 6) {
      return 'celujacy';
    } else {
      return 'złe wejście';
    }
  }
  function sumFloat(c, d) {
    let suma = c + d;
    return suma.toFixed(4);
  }

  function ownMax(a, b) {
    if (no1 > no2) {
      return no1;
    } else {
      return no2;
    }
  }

  function mathRevenge(a, b, c) {
    const delta = b * b - 4 * a * c;
    if (delta > 0) {
      const x_1 = (-b - Math.sqrt(delta)) / (2 * a);
      const x_2 = (-b + Math.sqrt(delta)) / (2 * a);
      return `Pierwiastkami tego równania kwadratowego są x1= ${x_1.toFixed(
        2
      )} oraz x2= ${x_2.toFixed(2)} `;
    } else if (delta === 0) {
      const x_3 = -b / (2 * a);
      return `Równanie ma tylko jeden pierwiastek x = ${x_3.toFixed(2)}`;
    } else {
      return 'To równanie nie ma pierwiastków.';
    }
  }
  function getRandom() {
    return (Math.random() * 4 + 1.0).toFixed(1);
  }
  function getRandomA() {
    return Math.floor(Math.random() * 6) + 1;
  }
  function getRandomB(x, y) {
    return Math.floor(Math.random() * (y - x + 1)) + x;
  }
  function average(a, b) {
    let wynik = (a + b) / 2;
    if (!wynik) {
      return 'Błędne dane.';
    } else {
      return wynik;
    }
  }
  function absoluteValue(a) {
    if (a >= 0) {
      return a;
    } else {
      return -a;
    }
  }
  function trueorfalse(h) {
    if (h % 3 === 0 && h % 5 === 0) {
      return 'Prawda.';
    } else {
      return 'Nieprawda.';
    }
  }
  // function isPrime(num) {
  //   let b1 = 3;
  //   if (num % 1 === 0 && num % num === 0 && num % b1 === 0) {
  //     return `Liczba ${num} jest liczbą pierwszą.`;
  //   } else if (num < 2) {
  //     return `Liczba ${num} nie jest liczbą pierwszą.`;
  //   } else {
  //     return `Liczba ${num} nie jest liczbą pierwszą.`;
  //   }
  // }
  // function isPrime(num) {
  //   if (num == 1 && num == 0) {
  //     return `Liczba ${num} nie jest liczbą pierwszą.`;
  //   }
  //   for (let i = 1; i <= num; i++) {}
  //   return `Liczba ${num} jest liczbą pierwszą.`;
  // }
  function isPrime(num) {
    if (num <= 1) {
      return `Liczba ${num} nie jest liczbą pierwszą.`;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return `Liczba ${num} nie jest liczbą pierwszą.`;
      }
    }
    return `Liczba ${num} jest liczbą pierwszą.`;
  }
  return (
    <div>
      <p>Can I drive a car?</p>
      <div>Zadanie 1. {canDrive(18, true, true)}</div>
      <div>Zadanie 1.1 {hasEnough(true)}</div>
      <div>Zadanie 2. {isStringShort(string)}</div>
      <div>Zadanie 3. {circleArea(r)}</div>
      <div>Zadanie 4. {changeNumbertoText(a)}</div>
      <div>Zadanie 5. {ownMax(no1, no2)}</div>
      <div>Zadanie 6. {sumFloat(c, d)}</div>
      <div>Zadanie 7. {mathRevenge(a, b, c)}</div>
      <div>
        Zadanie 8. Losowa liczba z zakresu (1,5) to {getRandom()}.
        <div>
          Zadanie 8 A. Losowa liczba całkowita z zakresu (1,5) to {getRandomA()}
          .
        </div>
        <div>
          Zadanie 8 B. Losowa liczba całkowita z zakresu (x,y) to{' '}
          {getRandomB(x, y)}
        </div>
      </div>
      <div>
        Zadanie 9. Średnia arytmetyczna dwóch dowolnych liczb to:{' '}
        {average(a, b)}
      </div>
      <div>
        Zadanie 10. Wartość bezwzględna z liczby {a} wynosi: {absoluteValue(a)}
      </div>
      <div>
        Zadanie 11. Liczba {h} jest podzielna przez 3 i 5: {trueorfalse(h)}
      </div>
      <div>Zadanie 12. {isPrime(num)}</div>
    </div>
  );
}
