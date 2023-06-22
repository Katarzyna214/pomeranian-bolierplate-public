import { useEffect } from 'react';
import { useState } from 'react';
import './AddToDo.css';
import { Button } from './Button/Button';

export const AddToDo = ({}) => {
  return (
    <div>
      <p className="addtodopar">Dodawanie zadania</p>
      <form className="form">
        <label className="label" htmlFor="title">
          Tytuł:
        </label>
        <input
          className="input"
          type="text"
          id="title"
          // valur={formData.title}
          onChange
        />{' '}
        <label className="label" htmlFor="title">
          Autor:
        </label>
        <input className="input" type="text" id="note" onChange />{' '}
        <label className="label" htmlFor="title">
          Treść:
        </label>
        <input
          className="input"
          type="text"
          id="author"
          // valur={formData.author}
          onChange
        />
        <div className="buttons">
          <Button type="submit">Cofnij</Button>{' '}
          <Button type="submit">Dodaj</Button>{' '}
        </div>
      </form>
    </div>
  );
};
