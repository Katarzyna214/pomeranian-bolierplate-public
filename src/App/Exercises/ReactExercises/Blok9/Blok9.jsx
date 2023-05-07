import React, { useState } from 'react';

import './style.css';

// function Wynik(props) {
//   return <h2>{props.wynik}</h2>;
// }

export function Blok9() {
  const [ilosc, setIlosc] = useState(0);
  const [text, setText] = useState('Kliknij');
  const [isClicked5, setClicked5] = useState(false);
  const [pokaz, setPokaz] = useState(false);
  const [liczba, setliczba] = useState('Podaj liczbę');
  const [text1, setText1] = useState('');

  const [argA, setArgA] = useState('');
  const [argB, setArgB] = useState('');
  const [odpowiedz, setodpowiedz] = useState('');
  const [op, setOp] = useState('');

  function clickHandler() {
    const nowa_ilosc = ilosc + 1;
    setIlosc(nowa_ilosc);

    if (nowa_ilosc >= 5) {
      setClicked5(true);
      setText('Gratulacje wyklikałeś przycisk');
    } else {
      setText('kliknięto ' + nowa_ilosc + ' razy');
    }
  }

  function clickHandler2() {
    setPokaz(!pokaz);
  }
  function chHandler3(ev) {
    setliczba(ev.target.value);
    if (parseFloat(ev.target.value) > 10) {
      setText1('Tak');
    } else {
      setText1('Nie');
    }
  }

  function handlerA(ev) {
    const wartosc = ev.target.value;
    setArgA(wartosc);
    if (parseFloat(wartosc) > parseFloat(argB)) {
      setodpowiedz('Tak');
    } else {
      setodpowiedz('Nie');
    }
  }

  function handlerB(ev) {
    const wartosc = ev.target.value;
    setArgB(wartosc);
    if (parseFloat(argA) > parseFloat(wartosc)) {
      setodpowiedz('Tak');
    } else {
      setodpowiedz('Nie');
    }
  }

  // if (parseFloat(argA) > parseFloat(wartosc)) {
  //   wynik ='Tak'
  // } else {
  //   wynik = 'Nie'
  // }to też inna metoda
  function handleOp(ev) {
    setOp(ev.target.value);
  }
  console.log(op);
  let wynik120 = 0;

  if (op === '+') {
    wynik120 = parseFloat(argA) + parseFloat(argB);
  }
  if (op === '-') {
    wynik120 = parseFloat(argA) - parseFloat(argB);
  }
  if (op === '*') {
    wynik120 = parseFloat(argA) * parseFloat(argB);
  }
  return (
    <div>
      <h2>Kliknij 5 razy</h2>
      <button onClick={clickHandler} className="ifbtn">
        {text}
      </button>
      {isClicked5 && <h2>Kliknąłeś więcej niż 5 razy.</h2>}
      <hr></hr>
      <button onClick={clickHandler2} className="ifbtn">
        Ukryj/pokaż
      </button>
      {pokaz && <p>Teraz mnie widać.</p>}
      <hr></hr>
      <h2>Czy A jest większe od 10?</h2>
      <br></br>
      <input value={liczba} onChange={chHandler3}></input>
      <br />
      {text1}
      <br />
      <h2>Czy A jest większe od B</h2>
      <input value={argA} onChange={handlerA} placeholder="A" /> <br />
      <input value={argB} onChange={handlerB} placeholder="B" />
      <br />
      {odpowiedz}
      <br />
      <select value={op} onChange={handleOp}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
      </select>
      <p>{wynik120}</p>
      {/* <Wynik wynik='Tak'/>  */}
      {/* inna metoda przekazania komponentu*/}
      <hr />
      <h2>Jaką jestem liczbą?</h2>
      <button className="ifbtn">Start</button>
      <br />
      <input placeholder="A" />
      <br />
    </div>
  );
}
