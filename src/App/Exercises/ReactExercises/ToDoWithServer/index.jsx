import { useEffect } from 'react';
import './styles.css';
import { useState } from 'react';
import { ToDoElement } from './TODO/TODO';
import { AddTask } from './AddTask/AddTask';
import { requestHandler } from './helpers';

export function ToDoWithServer({}) {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editObject, setEditObject] = useState();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const addTask = () => {
    return <AddTask />;
  };
  const getData = async () => {
    setIsLoading(true);
    setIsError(false);

    requestHandler('GET')
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        setIsError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (isError) {
      getData();
    }
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (showCreateForm) {
    return (
      <AddTask
        getData={getData}
        editObject={editObject}
        setEditObject={setEditObject}
        setShowCreateForm={setShowCreateForm}
      />
    );
  }
  if (data.length === 0) {
    return (
      <>
        <div> Brawo! Nie masz aktualnie żadnych zadań do zrealizowania.</div>
        <button
          className="button-add-addtask"
          onClick={() => {
            setEditObject();
            setShowCreateForm(true);
          }}
        >
          DODAJ
        </button>
      </>
    );
  }
  return (
    <div>
      <>
        <p className="todopar">Tutaj znajdziesz listę swoich zadań.</p>
      </>
      {isError && <div>Coś poszło nie tak</div>}
      {!isError &&
        data.map((element) => {
          const { id, title, author, note, createdAt } = element;
          return (
            <ToDoElement
              title={title}
              author={author}
              note={note}
              id={id}
              doneDate={element?.doneDate}
              setEditObject={setEditObject}
              getData={getData}
              setShowCreateForm={setShowCreateForm}
              isDone={element?.isDone}
              createdAt={createdAt}
            />
          );
        })}

      <button
        className="button-add-addtask"
        onClick={() => {
          setEditObject();
          setShowCreateForm(true);
        }}
      >
        DODAJ
      </button>
    </div>
  );
}
