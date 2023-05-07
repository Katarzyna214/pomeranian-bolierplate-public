import React, { useState } from 'react';
// usestate umozliwia przechowywanie danych
import './style.css';

export function Blok8() {
  // const wartosc = 10;
  // const [iloscklikniec, setIlosc] = useState(0);
  const [text, setText] = useState('Tekst do wpisania');
  const [placeholder, setPlaceholder] = useState('Placeholder');
  const [n1, setn1] = useState('Podaj pierwszą liczbę');
  const [n2, setn2] = useState('Podaj drugą liczbę');
  // const [dodawanie, setdodawanie] = useState('Wynik dodawania');
  const [suma, setSuma] = useState(0);
 
  // function clickHandler(ev) {
  //   console.log('Kliknięto przycisk', ev);
  //   setIlosc(iloscklikniec + 1);
    // alert('Kliknięto przycisk');
    // alert pokaze mi okienko na przeglądarce nie w konsoli jak to co wyżej}
  function changeHandler(ev) {
    console.log(ev.target.value);
    setText(ev.target.value);
    setPlaceholder(ev.target.value);
  }
  function changeHandler1(ev) {
    console.log(ev.target.value);
    setn1(ev.target.value);
  }
  function changeHandler2(ev) {
    console.log(ev.target.value);
    setn2(ev.target.value);
  }
  function dodawanie() {
    const x1 = parseFloat(n1);
    const x2 = parseFloat(n2);
    const wynik = x1 + x2;
    setSuma(wynik);
  }
  return (
    <div>
      {/* <p onClick={clickHandler}>Przykład blok 8.</p>
      <button onClick={clickHandler} type="button"> Przycisk </button>
      <p>{wartosc * 2}</p> */}
      <h2>Cześć!</h2>
      <h4>Wpisz tekst</h4>

      <input
        value={text}
        onChange={changeHandler}
        placeholder="Tekst do wpisania"
      />
      <span className="przesun">{text}</span>
      <br />
      {/* <button className="btn" onClick={clickHandler} type="button">
        Kliknięto mnie {iloscklikniec} razy.
      </button> */}
      <input value={n1} onChange={changeHandler1} />
      <button>+</button>
      <input value={n2} onChange={changeHandler2} />
      <button onClick={dodawanie}>=</button>
      <input value={suma} />
    </div>
  );
}
