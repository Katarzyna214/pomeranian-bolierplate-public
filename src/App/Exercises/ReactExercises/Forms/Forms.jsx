import React, { useState } from 'react';

import './style.css';

export function Forms() {
  // const [isConfirmedPasswordDisabled, setIsConfirmedPasswordDisabled] =
  //   useState(true);

  // const handlePasswordChange = (event) => {
  //   const password = event.target.value;
  //   if (password.length > 3) {
  //     setIsConfirmedPasswordDisabled(false);
  //   }
  //   if (password.length <= 3) {
  //     setIsConfirmedPasswordDisabled(true);
  //   }
  // }; // Walidacja przy uzyciu value.length
  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <label htmlFor="name">Wpisz swoje imię</label>
        <input maxLength="15" type="text" id="name" placeholder="Imię" />
      </div>
      <div className="flex">
        <label htmlFor="surname">Wpisz swoje nazwisko</label>
        <input minLength="3" type="text" id="surname" placeholder="Nazwisko" />
      </div>
      <div className="flex">
        {' '}
        <label htmlFor="address">Wpisz swój adres</label>
        <input required type="text" id="address" placeholder="Adres" />
      </div>
      <div className="flex">
        <label htmlFor="password">Wpisz swoje hasło</label>
        <input
          // walidacja z uzyciem value.length ---> onChange={handlePasswordChange}
          type="password"
          id="password"
          placeholder="Hasło"
        />
      </div>
      <div className="flex">
        {' '}
        <label htmlFor="confirmPassword">Potwierdź swoje hasło</label>
        <input
          // disabled={isConfirmedPasswordDisabled} value.length walidacja
          type="password"
          id="confirmPassword"
          placeholder="Hasło"
        />
      </div>
      <div className="flex">
        <label htmlFor="select">Wybierz płeć z podanej puli</label>
        <select name="select" id="select" placeholder="Wybierz swoją płeć">
          <option value="woman">Kobieta</option>
          <option value="man">Mężczyzna</option>
          <option value="other">Nieokreślony</option>
        </select>
      </div>
      <div className="flex">
        <label htmlFor="textarea">Opisz swój problem</label>
        <textarea
          name="textarea"
          id="textarea"
          cols="30"
          rows="10"
          placeholder="Opisz jaki masz problem"
        />
      </div>
      <button type="submit"> Wyślij </button>
    </form>
  );
}
//typ inputu "password" oznacza ze jak bedzie pisanie hasla to beda gwiazdki
