import { useEffect } from 'react';
import './styles.css';
import { useState } from 'react';
import { ToDoElement } from './TODO/TODO';
import { AddTask } from './AddTask/AddTask';
import { API_URL, FORM_SCHEMA } from './constants';
import { EmptyTaskList } from './EmptyTaskList/EmptyTaskList';
import { setStateAsync } from './helpers';

export function ToDoWithServer({}) {
  const [data, setData] = useState([]);
  const [errorList, setErrorList] = useState([]);
  const [formData, setFormData] = useState(FORM_SCHEMA);
  const [isEdited, setIsEdited] = useState(false);
  const [isForm, setIsForm] = useState(false);
  const isError = errorList.length > 0;
  const [errorIds, setErrorIds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isDataEmpty = data.length === 0;

  const getData = async () => {
    setIsLoading(true);
    try {
      setErrorList([]);
      const dataFromServer = await fetch(`${API_URL}/todo`);
      if (!dataFromServer.ok) {
        throw new Error(dataFromServer.json());
      }
      const response = await dataFromServer.json();
      setData(response);
    } catch (err) {
      await setStateAsync(() => {
        setErrorList((prevState) => [...prevState, err]);
      });
    } finally {
      // await setStateAsync(() => {
      setIsLoading(false);
      // });
    }
  };
  useEffect(() => {
    console.log(errorList, 'lista błędów');
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
    try {
      const response = await fetch(`${API_URL}/todo/${id}/markAsDone`, {
        method: 'PUT',
        headers: { 'Content-type': 'appliction/json' },
      });
      if (!response.ok) {
        throw new Error(response.json());
      }
    } catch (err) {
      await setStateAsync(() => {
        setErrorList((prevState) => [...prevState, err]);
      });
    } finally {
      getData();
    }
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
              isDone={element.isDone}
              doneDate={element?.doneDate}
            />
          );
        })}
      {!isForm && !isDataEmpty && !isError && (
        <button className="button-add-addtask" onClick={handleIsForm}>
          DODAJ
        </button>
      )}
      {isDataEmpty && (
        <EmptyTaskList
          addTask={handleIsForm}
          isError={isError}
          getData={getData}
        />
      )}
    </div>
  );
}
