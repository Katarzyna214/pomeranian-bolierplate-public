import './styles.css';
import { React } from 'react';
import { useState, useEffect } from 'react';

export function SavedInput() {
  const [table, setTable] = useState([]);
  const [idCounter, setIdCounter] = useState('');
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const newTableNamestoLocalStorage =
      JSON.parse(localStorage.getItem('list-nicks')) || [];
    setTable(newTableNamestoLocalStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem('list-nicks', JSON.stringify(table));
  }, [table]);

  const addName = () => {
    if (idCounter.trim() !== '') {
      if (!table.includes(idCounter.trim())) {
        setTable([...table, idCounter.trim()]);
        setIdCounter('');
        setNotification('Your nick added to the list.');
        setTimeout(() => {
          setNotification('');
        }, 2000);
      } else {
        setNotification('You cannot provide the same nick.');
        setTimeout(() => {
          setNotification('');
        }, 2000);
      }
    }
  };
  const deleteName = (index) => {
    const newTableofNames = [...table];
    newTableofNames.splice(index, 1);
    setTable(newTableofNames);
  };
  return (
    <div>
      <div className="SavedInput">
        <h3 className="nick">NICK </h3>
        <input
          type="text"
          className="input-nick"
          placeholder="Provide your nick."
          value={idCounter}
          onChange={(e) => setIdCounter(e.target.value)}
        />
        <button className="button" onClick={addName}>
          DODAJ
        </button>
        <p>{notification}</p>
        <div className="table-container">
          {table.map((person, id, index) => {
            return (
              <div key={id} className="table">
                {person}
                <button onClick={() => deleteName(index)}>X</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
