import './TODO.css';
import { useState } from 'react';
import { parseDate, requestHandler } from '../helpers';
import { EditIcon } from '../../../../Components/Icons/EditIcon';
import { GreyTickIcon } from '../../../../Components/Icons/GreyTickIcon';
import { TrashIcon } from '../../../../Components/Icons/TrashIcon';

export const ToDoElement = ({
  author,
  note,
  title,
  id,
  isError,
  isDone,
  doneDate,
  getData,
  createdAt,
  setEditObject,
  setShowCreateForm,
}) => {
  const [deleteError, setDeleteError] = useState('');
  const [markAsDoneError, setMarkAsDoneError] = useState('');

  const markAsDone = async (id) => {
    setMarkAsDoneError('');
    requestHandler('PUT', `${id}/markAsDone`)
      .then((response) => {
        getData();
      })
      .catch(() => {
        setMarkAsDoneError('Nie udało się ukończyć');
      });
  };
  const deleteToDo = async (id) => {
    setDeleteError('');
    requestHandler('DELETE', id)
      .then(() => {
        getData();
      })
      .catch(() => {
        setDeleteError('Nie udało się usunąć');
      });
  };
  return (
    <div key={id} className="proba">
      <div>
        <div className="todo-containers">
          <div>
            <p className="boxpar">{title}</p>
            <p className="name_date">{author}</p>
            <p className="parinfo">{note}</p>
            <p>{parseDate(createdAt)}</p>
            {isError && <p className="delpar">nie udało się usunąć</p>}
            <button className="delelement" onClick={() => deleteToDo(id)}>
              <TrashIcon />
            </button>
            <button
              className="delelement"
              onClick={() => {
                setShowCreateForm(true);
                setEditObject({ id, title, author, note });
              }}
            >
              <EditIcon />
            </button>
            {!isDone && (
              <button
                className="delelement"
                onClick={() => {
                  markAsDone(id);
                }}
              >
                <GreyTickIcon />
              </button>
            )}
            {deleteError && <p>{deleteError}</p>}
            {markAsDoneError && <p>{markAsDoneError}</p>}
            {isDone && <p>Zakończone {parseDate(doneDate)}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
