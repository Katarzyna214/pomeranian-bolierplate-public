import React, { useState } from 'react';
// usestate umozliwia przechowywanie danych
import './style.css';

export function Blok8() {
  const wartosc = 10;

  const [iloscklikniec, setIlosc] = useState(0);
  
  function clickHandler(ev) {
    console.log('Kliknięto przycisk', ev);
    setIlosc(iloscklikniec + 1)
    // alert('Kliknięto przycisk');
    // alert pokaze mi okienko na przeglądarce nie w konsoli jak to co wyżej
  }
  return (
    <div>
      {/* <p onClick={clickHandler}>Przykład blok 8.</p>
      <button onClick={clickHandler} type="button"> Przycisk </button>
      <p>{wartosc * 2}</p> */}
      <h2>Cześć!</h2>
      <button className="btn" onClick={clickHandler} type="button">Kliknięto mnie {iloscklikniec} razy.</button>
    </div>
  );
}
