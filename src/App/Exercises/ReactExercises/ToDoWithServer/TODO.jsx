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
            {isError && <p>Nie da się usunąć elementu</p>}
            <button onClick={() => deleteToDo(id)}>Usuń element</button>
            {/* <div className="lastdiv_div">
              <div>
                <TickIcon />
              </div>{' '}
              <div className="name_date">20.04.2024, 18:06</div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
