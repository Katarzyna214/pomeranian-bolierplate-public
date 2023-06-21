import { useEffect } from 'react';
import './TODO.css';
import { useState } from 'react';
import { TickIcon } from '../../../Components/Icons/TickIcon';

export const ToDoElement = ({
  title,
  note,
  author,
  isDone,
  deleteToDo,
  id,
  isError,
}) => {
  return (
    <div className="proba">
      <div>
        <div className="todo-containers">
          <div>
            <p className="boxpar">{title}</p>
            <p className="name_date">{author}</p>
            <p className="parinfo">{note}</p>
            {isError && <p className="delpar">nie udało się usunąć</p>}
            <button className="delelement" onClick={() => deleteToDo(id)}>
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
