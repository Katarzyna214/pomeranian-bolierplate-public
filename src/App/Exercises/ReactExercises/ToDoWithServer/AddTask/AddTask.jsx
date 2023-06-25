import { useEffect, useState } from 'react';
import './AddTask.css';
import { FORM_SCHEMA, API_URL } from '../constants';
import { requestHandler } from '../helpers';

export function AddTask({
  getData,
  formData,
  setFormData,
  isEdited,
  setIsForm,
  setIsEdited,
}) {
  const [isError, setIsError] = useState(false);

  const handleChange = (e, name) => {
    const { value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSendData = () => {
    const method = isEdited ? 'PUT' : 'POST';
    const id = isEdited ? formData.id : null;
    requestHandler(method, id, formData)
      .then(() => {
        setFormData(FORM_SCHEMA);
        getData();
        setIsForm(false);
        isEdited && setIsEdited(false);
      })
      .catch((jsonError) => {
        //jsonError zmienna tylko co przechwytuje jsonResponse z reject z requestHandler a wyzej bierze z resolve w then
        setIsError(true);
      })
      .finally(() => {
        getData();
      });

    // console.log('wywoluje sie handlesenddata', formData);
    // fetch(`${API_URL}/todo${isEdited ? `/${formData.id}` : ''}`, {
    //   method: isEdited ? 'PUT' : 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error(response);
    //     }
    //     setFormData(FORM_SCHEMA);
    //     getData();
    //     setIsForm(false);
    //     isEdited && setIsEdited(false);
    //   })
    //   .catch(() => {
    //     setIsError(true);
    //   });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendData();
  };
  useEffect(() => {
    console.log('formData', formData);
  }, [formData]);

  const handleBack = () => {
    setFormData(FORM_SCHEMA);
    setIsForm(false);
    setIsEdited(false);
  };

  return (
    <div className="add-task-page">
      <p>Dodawanie zadania</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="add-task-label">
          Tytuł
        </label>
        <br />
        <input
          type="text"
          id="title"
          value={formData.title}
          name="title"
          placeholder="Kupić parasol na balkon"
          autoFocus
          className="add-task-input"
          onChange={(e) => handleChange(e, 'title')}
        />
        <br />
        <label htmlFor="author" className="add-task-label">
          Autor
        </label>
        <br />
        <input
          type="text"
          id="author"
          value={formData.author}
          name="author"
          placeholder="Wojtek"
          className="add-task-input"
          onChange={(e) => handleChange(e, 'author')}
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
          value={formData.note}
          className="add-task-input text-area"
          onChange={(e) => handleChange(e, 'note')}
          placeholder="Zmierzyć ile mamy miejsca na balkonie od barierki do kanapy i ile musi mieć max średnicy - miarka!!"
        ></textarea>
        {isError && <p className="blad">Wystąpił błąd, spróbuj ponownie.</p>}
        <div className="threebuttons">
          <button className="button-delete-addtask" onClick={handleBack}>
            COFNIJ
          </button>
          {!isEdited && (
            <button type="submit" className="button-add-addtask">
              DODAJ
            </button>
          )}
          {isEdited && (
            <button type="submit" className="button-add-addtask">
              EDYTUJ
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
