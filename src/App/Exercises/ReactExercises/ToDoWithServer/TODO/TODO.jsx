import { useEffect } from 'react';
import './TODO.css';
import { useState } from 'react';
import { parseDate } from '../helpers';
import { EditIcon } from '../../../../Components/Icons/EditIcon';
import { GreyTickIcon } from '../../../../Components/Icons/GreyTickIcon';
import { ReactComponent as TrashIcon } from '../../../../Components/Icons/trash.svg';

export const ToDoElement = ({
  name,
  author,
  note,
  title,
  deleteToDo,
  id,
  isError,
  handleEditTask,
  markAsDone,
  isDone,
  doneDate,
}) => {
  // const parsedDate = new Date(doneDate);
  // const finalDate = `${parsedDate.getDate()}.${parsedDate.getMonth()}.${parsedDate.getFullYear()}, ${parsedDate.getHours()}:${parsedDate.getMinutes()}`;

  return (
    <div className="proba">
      <div>
        <div className="todo-containers">
          <div>
            <p className="boxpar">{title}</p>
            <p className="name_date">{author}</p>
            <p className="name_date">{name}</p>
            <p className="parinfo">{note}</p>
            {isError && <p className="delpar">nie udało się usunąć</p>}
            <button className="delelement" onClick={() => deleteToDo(id)}>
              <TrashIcon />
            </button>
            <button className="delelement" onClick={() => handleEditTask(id)}>
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
            {isDone && <p>Zakończone {parseDate(doneDate)}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
