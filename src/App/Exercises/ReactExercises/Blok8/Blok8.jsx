import React from 'react';

import './style.css';

export function Blok8() {
  function clickHandler() {
    console.log('Kliknięto przycisk');
  }
  return (
    <div>
      <p>Przykład blok 8.</p>
      <button onClick={clickHandler}>Przycisk</button>
    </div>
  );
}
