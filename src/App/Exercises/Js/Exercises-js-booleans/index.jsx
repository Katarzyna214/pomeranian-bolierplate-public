import './styles.css';

export function Exercise() {
  const isValid = true;
  const passStyles = true;
  const checkStatemenet = isValid && true; // zwraca true
  const checkStatemenet1 = false && isValid; //zwraca false
  const checkStatemenet2 = false && true && false; //zwraca false
  const checkStatemenet3 = false && true && false; //zwraca false
  const checkStatemenet4 = false || (true && false); //zwraca false
  // wyrenderuj komponent w zależnosci od zmiennej isValid

  let x = 10;
  let y = 10;
  let z = 10;
  let w = 10;
  let s = 10;

  // x = x + 5;
  x += 5;

  // y = y * 5;
  y *= 5;
  // z = z / 5;
  z /= 5;

  // w = w ** 5; //potega
  w **= 5;

  // s = s % 5; //modulo
  s %= 5;

  // const notValid = !isValid; //inny zapis negacji dla is Valis
  // if (x == 5) {
  //   //instrukcja warunkowa w (deklarujemy dla jakieo elementu chcemy warunek)
  //   //console.log ('magia')
  // } else if (x == 15) {
  //   //console.log('brakmagii')
  // } else {
  //   //console.log('inna wartosc niz wskazane')
  // }
  if (x >= 5) {
    //instrukcja warunkowa w (deklarujemy dla jakieo elementu chcemy warunek)
    //console.log ('magia')
  } else {
    //console.log('brak magii')
  }
  // (x>5) ? console.log('wieksze od 5'): console.log('mniejsze lib rowne 5') //inny zapis dla if

  // (x>5)
  // ? ((x==7)
  // ? console.log('7'):
  // console.log('większe od 5'))
  // :console.log('mniejsze lub rowne 5') //wiecej warunkow if CONDITIONAL (TERNARY) OPERATOR

  // if (x) {
  //   if (y) {
  //     if(z) {
  //       if (w)
  // {}    }
  //   }
  // } ifoza niemile widziane

  // switch (x) { //pętla ktora trzeba przerywac slowem break w przypadku 5 wyswietl w konsoli 5 w przypadku 6 itd
  //   case 5:
  //     console.log('5!');
  //   case 6:
  //     console.log('6!');
  //     break;
  //     default: console.log('inna wartosc!') //w innych przypadkach niz 5 i 6 dajemy default i wtedy mi pokazuje co chce dla default. case musimy przerywac default juz nie
  // }

  return (
    <>
      {isValid && (
        <div style={{ backgroundColor: passStyles ? 'red' : 'black' }}>
          JS boolean.
        </div>
      )}
      {}
    </>
  );
}
