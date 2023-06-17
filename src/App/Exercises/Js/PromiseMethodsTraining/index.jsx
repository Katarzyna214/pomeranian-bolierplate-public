import { useEffect } from 'react';
import './styles.css';

export function PromiseMethodsTraining() {
  const fetchDataFast = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 1, time: 300 });
      }, 300)
    );

  const fetchDataLong = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 2, time: 700 });
      }, 700)
    );
  const fetchDataError = () =>
    new Promise((_, reject) =>
      setTimeout(() => {
        reject(new Error('Błąd pobierania danych'));
      }, 500)
    );
  const handleClick1 = () => {
    Promise.all([fetchDataFast(), fetchDataLong()]).then((response) => {
      console.log(response, 'fetchDataFast all i long all');
    });
  };
  const handleClick2 = () => {
    Promise.all([fetchDataFast(), fetchDataLong(), fetchDataError()]).then(
      (response) => console.log(response, 'fetchDataFast all, long, error all')
    );
  };
  const handleClick3 = () => {
    Promise.allSettled([fetchDataFast(), fetchDataLong()]).then((response) =>
      console.log(response, 'fast i data settled')
    );
  };
  const handleClick4 = () => {
    Promise.allSettled([
      fetchDataFast(),
      fetchDataLong(),
      fetchDataError(),
    ]).then((response) => console.log(response, 'fast, data, error settled'));
  };
  const handleClick5 = () => {
    Promise.any([fetchDataFast(), fetchDataLong()]).then((response) =>
      console.log(response, 'fast, data any')
    );
  };
  const handleClick6 = () => {
    Promise.any([fetchDataFast(), fetchDataLong(), fetchDataError()]).then(
      (response) => console.log(response, 'fast, data, error any')
    );
  };
  const handleClick7 = () => {
    Promise.race([fetchDataFast(), fetchDataLong(), fetchDataError()]).then(
      (response, rejected) =>
        console.log(response, rejected, 'fast, data, error race')
    );
  };
  const handleClick8 = () => {
    Promise.race([fetchDataLong(), fetchDataError()]).then(
      (response, rejected) =>
        console.log(response, rejected, 'data, error race')
    );
  };

  return (
    <div>
      <h2>Promise Usage Methods</h2>
      <div>
        <button className="buttons" onClick={handleClick1}>
          Fetch Data Fast i Fetch Data Long
        </button>
      </div>
      <div>
        {' '}
        <button className="buttons" onClick={handleClick2}>
          {' '}
          Fetch Data Fast, Fetch Data Long i Fetch Data Error
        </button>
      </div>
      <div>
        <button className="buttons" onClick={handleClick3}>
          {' '}
          AllSettled Fetch Data Fast i Fetch Data Long
        </button>
      </div>
      <div>
        <button className="buttons" onClick={handleClick4}>
          {' '}
          AllSettled Fetch Data Fast i Fetch Data Long Fetch Data Error
        </button>
      </div>
      <div>
        <button className="buttons" onClick={handleClick5}>
          {' '}
          Any Fetch Data Fast i Fetch Data Long
        </button>
      </div>
      <div>
        <button className="buttons" onClick={handleClick6}>
          {' '}
          Any Fetch Data Fast i Fetch Data Long Fetch Data Error
        </button>
      </div>
      <div>
        <button className="buttons" onClick={handleClick7}>
          {' '}
          Race Fetch Data Fast i Fetch Data Long Fetch Data Error
        </button>
      </div>
      <div>
        <button className="buttons" onClick={handleClick8}>
          {' '}
          Race Fetch Data Long Fetch Data Error
        </button>
      </div>
    </div>
  );
}
