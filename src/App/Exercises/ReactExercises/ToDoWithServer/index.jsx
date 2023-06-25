import { useEffect } from 'react';
import './styles.css';
import { useState } from 'react';
import { ToDoElement } from './TODO/TODO';
import { AddTask } from './AddTask/AddTask';
import { API_URL, FORM_SCHEMA } from './constants';
import { EmptyTaskList } from './EmptyTaskList/EmptyTaskList';
import { requestHandler, setStateAsync } from './helpers';

export function ToDoWithServer({}) {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState([]);
  const [formData, setFormData] = useState(FORM_SCHEMA);
  const [isEdited, setIsEdited] = useState(false);
  const [isForm, setIsForm] = useState(false);
  // const isError = errorList.length > 0;
  const [errorIds, setErrorIds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isToDoError, setIsToDoError] = useState('');
  const isDataEmpty = data.length === 0;

  const getData = async () => {
    setIsError(false);
    setIsLoading(true);
    requestHandler('GET')
      .then((response) => {
        setData(response);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    console.log(data, 'todo');
  });
  useEffect(() => {
    getData();
  }, []);

  const deleteToDo = async (id) => {
    try {
      const response = await fetch(`${API_URL}/todo/${id}`, {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json' },
      });
      if (!response.ok) {
        throw new Error(response.json());
      }
    } catch {
      await setStateAsync(() => {
        setErrorIds((prevState) => [...prevState, id]);
      });
    } finally {
      getData();
    }
  };

  const handleEditTask = (id) => {
    const foundToDo = data.find((todo) => todo.id === id);
    setFormData(foundToDo);
    setIsEdited(true);
    setIsForm(true);
  };
  const markAsDone = async (id) => {
    setIsToDoError(false);
    requestHandler('PUT', `${id}`)
      .then((response) => {
        if (!response.isDone) {
          setIsToDoError(true);
          setErrorIds((prevState) => [...prevState, id]);
        } else {
          getData();
        }
      })
      .catch(() => {
        setIsToDoError(true);
        setErrorIds((prevState) => [...prevState, id]);
      });
  };

  const handleIsForm = () => {
    setIsForm(true);
  };
  if (isLoading) {
    return <div>Ładowanie...</div>;
  }
  return (
    <div>
      {!isForm && !isError && (
        <>
          <p className="todopar">Tutaj znajdziesz listę swoich zadań.</p>
          <button className="button-add-addtask" onClick={handleIsForm}>
            Dodaj
          </button>
        </>
      )}
      {isForm && !isError && (
        <AddTask
          getData={getData}
          formData={formData}
          setFormData={setFormData}
          isEdited={isEdited}
          setIsForm={setIsForm}
          setIsEdited={setIsEdited}
        />
      )}
      {!isForm &&
        !isDataEmpty &&
        !isError &&
        data.map((element) => {
          const isErrorIncluded = errorIds.includes(element.id);
          return (
            <ToDoElement
              title={element.title}
              author={element.author}
              note={element.note}
              deleteToDo={deleteToDo}
              id={element.id}
              isError={isErrorIncluded}
              handleEditTask={handleEditTask}
              markAsDone={markAsDone}
              isDone={element.isDone && !isToDoError}
              doneDate={element?.doneDate}
            />
          );
        })}
      {!isForm && !isDataEmpty && !isError && (
        <button className="button-add-addtask" onClick={handleIsForm}>
          DODAJ
        </button>
      )}
      {(isDataEmpty || isError) && (
        <EmptyTaskList
          addTask={handleIsForm}
          isError={isError}
          getData={getData}
        />
      )}
    </div>
  );
}
