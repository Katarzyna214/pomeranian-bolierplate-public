import { useEffect } from 'react';
import './styles.css';
import { useState } from 'react';
const API_URL = 'http://localhost:3333/api';
const FORM_SCHEMA = { title: '', note: '', author: '' };
export function PromiseUsageFetch() {
  const [data, setData] = useState([]); //bo to bedzie tablica danych a tu ja zapisujemy do wyswietlenia
  const [formData, setFormData] = useState(FORM_SCHEMA);
  // const getData = async () => {
  //   const response = await fetch('http://localhost:3333/api/todo');
  //   const jsonData = await response.json();
  //   console.log(jsonData);
  // }; // pobór danych
  const handleSubmit = (e) => {
    e.preventDefault(); //zeby nam nie przeladowalo strony nie uaktualnia localhosta przy kazdym dodaniu nowego inputut
    handleSendData();
  };
  const handleChange = (e, name) => {
    const { value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  // useEffect(() => {
  //   getData();
  // }, []); //podglad danych
  const handleSendData = () => {
    //funkcja do wysylania danych
    fetch(`${API_URL}/todo`, {
      method: 'POST', //moze byc put delete itd
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(formData),
    }).then((res) => {
      setFormData(FORM_SCHEMA);
    });
  };
  useEffect(() => {
    console.log(formData, 'formData');
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          valur={formData.title}
          onChange={(e) => handleChange(e, 'title')}
        />{' '}
        <label htmlFor="title">Note:</label>
        <input
          type="text"
          id="note"
          valur={formData.note}
          onChange={(e) => handleChange(e, 'note')}
        />{' '}
        <label htmlFor="title">Author:</label>
        <input
          type="text"
          id="author"
          valur={formData.author}
          onChange={(e) => handleChange(e, 'author')}
        />
        <button type="submit">Wyślij</button>{' '}
      </form>
    </div>
  );
}
