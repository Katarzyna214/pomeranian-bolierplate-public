import { useEffect } from 'react';
import './styles.css';
import { useState } from 'react';
import { ToDoElement } from './TODO/TODO';
import { AddTask } from './AddTask/AddTask';
import { API_URL, FORM_SCHEMA } from './constants';

export function ToDoWithServer({}) {
  const [data, setData] = useState([]);
  const [errorList, setErrorList] = useState([]);
  const [formData, setFormData] = useState(FORM_SCHEMA);
  const [isEdited, setIsEdited] = useState(false);

  const getData = async () => {
    const resp = await fetch(`${API_URL}/todo`);
    const jsonData = await resp.json();
    setData(jsonData);
  };

  useEffect(() => {
    getData();
  }, []);

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

  useEffect(() => {
    console.log(errorList, 'newerrorListuseEffect');
  }, [errorList]);

  const handleEditTask = (id) => {
    const foundToDo = data.find((todo) => todo.id === id);
    console.log('id:', foundToDo);
    setFormData(foundToDo);
    setIsEdited(true);
  };
  const markAsDone = async (id) => {
    const response = await fetch(`${API_URL}/todo/${id}/markAsDone`, {
      method: 'PUT',
      headers: { 'Content-type': 'appliction/json' },
    });
    const { status } = await response;
    if (status === 200) {
      getData();
    } else if (status === 500 || status === 404) {
      console.log('status 500 albo 404');
      setErrorList((prevState) => [...prevState, id]);
    }
  };
  return (
    <div>
      <AddTask
        getData={getData}
        formData={formData}
        setFormData={setFormData}
        isEdited={isEdited}
      />
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
            handleEditTask={handleEditTask}
            markAsDone={markAsDone}
            isDone={element.isDone}
            doneDate={element?.doneDate}
          />
        );
      })}
    </div>
  );
}
