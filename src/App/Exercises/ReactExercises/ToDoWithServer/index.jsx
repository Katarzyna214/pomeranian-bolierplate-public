import { useEffect } from 'react';
import './styles.css';
import { useState } from 'react';
import { ToDoElement } from './TODO';

const API_URL = 'http://localhost:3333/api';
export function ToDoWithServer() {
  const [data, setData] = useState([]);
  const [errorList, setErrorList] = useState([]);

  const getData = async () => {
    const resp = await fetch(`${API_URL}/todo`);
    const jsonData = await resp.json();
    console.log(jsonData, 'to dane z serwera');
    setData(jsonData);
  };
  const deleteToDo = async (id) => {
    console.log('sprawdzanie funkcji');
    const response = await fetch(`${API_URL}/todo/${id}`, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
    });
    const { status } = await response;
    if (status === 200) {
      getData();
    } else if (status === 500 || status === 404) {
      console.log('status 400 lub 500');
      setErrorList((prevErrorList) => [...prevErrorList, id]);
      console.log(errorList, 'newerrorList');
    }
  };

  // const data = [
  //   {
  //     id: 8,
  //     title: 'Todo 8',
  //     note: 'cokolwiek',
  //     author: 'Anonymous1',
  //     isDone: false,
  //   },
  //   {
  //     id: 9,
  //     title: 'Todo 9',
  //     note: 'cokolwiek2',
  //     author: 'Anonymous2',
  //     isDone: false,
  //   },
  //   {
  //     id: 10,
  //     title: 'Todo 10',
  //     note: 'cokolwiek3',
  //     author: 'Anonymous3',
  //     isDone: false,
  //   },
  // ];
  useEffect(() => {
    console.log(errorList, 'newerrorListuseEffect');
  }, [errorList]);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <p className="todopar">Tutaj znajdziesz listę swoich zadań.</p>
      {data.map((element) => {
        const isError = errorList.includes(element.id);
        return (
          <ToDoElement
            title={element.title}
            author={element.author}
            note={element.note}
            deleteToDo={deleteToDo}
            id={element.id}
            isError={isError}
          />
        );
      })}
    </div>
  );
}
