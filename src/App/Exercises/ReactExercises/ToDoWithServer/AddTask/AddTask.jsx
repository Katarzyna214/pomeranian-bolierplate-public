import { useState } from 'react';
import './AddTask.css';
import { requestHandler } from '../helpers';

export function AddTask({
  editObject,
  setEditObject,
  getData,
  setShowCreateForm,
}) {
  const isEditMode = Boolean(editObject);
  const [message, setMessage] = useState();
  const [isPopupShown, setPopupVisibility] = useState(false);
  const [title, setTitle] = useState(isEditMode ? editObject.title : '');
  const [note, setNote] = useState(isEditMode ? editObject.note : '');
  const [author, setAuthor] = useState(isEditMode ? editObject.author : '');

  const addToDo = async () => {
    requestHandler('POST', undefined, {
      title,
      note,
      author,
    })
      .then((response) => {
        setMessage(`Dodałeś zadanie o tytule:${response.title}`);
      })
      .catch((response) => {
        setMessage(`Nie udało Ci się dodać zadania${response.title}`);
      })
      .finally(() => {
        getData();
        setShowCreateForm(false);
      });
  };
  const editToDo = async () => {
    requestHandler('PUT', editObject.id, {
      title,
      note,
      author,
    })
      .then((response) => {
        setMessage(`Zaktualizowałeś zadanie o tytule: ${response.title}`);
      })
      .catch((response) => {
        setMessage(`Nie udało Ci się zaktualizować zadania: ${response.title}`);
      })
      .finally(() => {
        getData();
        setShowCreateForm(false);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== '' && note !== '' && author !== '') {
      if (isEditMode) {
        editToDo();
      } else {
        addToDo();
      }
    }
  };
  const handleBack = () => {
    setShowCreateForm(false);
    getData();
    setEditObject();
  };
  return (
    <div className="add-task-page">
      {!isEditMode ? <p>Dodawanie zadania</p> : <p>Edycja zadania.</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="add-task-label">
          Tytuł
        </label>
        <br />
        <input
          type="text"
          id="title"
          value={title}
          name="title"
          placeholder="Kupić parasol na balkon"
          autoFocus
          className="add-task-input"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="author" className="add-task-label">
          Autor
        </label>
        <br />
        <input
          type="text"
          id="author"
          value={author}
          name="author"
          placeholder="Wojtek"
          className="add-task-input"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <label htmlFor="text" className="add-task-label">
          Treść
        </label>
        <br />
        <textarea
          name="text"
          id="text"
          cols="60"
          rows="10"
          value={note}
          className="add-task-input text-area"
          onChange={(e) => setNote(e.target.value)}
          placeholder="Zmierzyć ile mamy miejsca na balkonie od barierki do kanapy i ile musi mieć max średnicy - miarka!!"
        ></textarea>
        <div className="threebuttons">
          <button type="submit" className="button-add-addtask">
            {isEditMode ? 'ZAPISZ ZMIANY' : 'DODAJ'}
          </button>
          <button onClick={handleBack} className="button-delete-addtask">
            Cofnij
          </button>
        </div>
      </form>
    </div>
  );
}
