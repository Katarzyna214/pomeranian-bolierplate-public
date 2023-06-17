import { useEffect } from 'react';
import './styles.css';
import { useState } from 'react';

export function PromiseUsage() {
  const [data, setData] = useState();
  const getJokes = async () => {
    //daje async zeby pokazac ze oczekuje na promisa na jakies info z serwera
    try {
      const response = await fetch(`https://api.chucknorris.io/jokes/random`);
      console.log('Response before .json():', response);
      const data = await response.json(); //informacje ktore mi przyjda z api musze przerobic na json zebym mogla wyswietlic to na stronie
      console.log('Response after .json()', data);
      const joke = data;

      setData(joke);
    } catch (err) {
      console.log(err, 'Error');
    }
  };
  useEffect(() => {
    getJokes();
  }, []);
  return (
    <div>
      <h2>Promise Usage</h2>
      {/* <button onClick={() => getJokes('')}> Get Data! </button> */}
      <p>{data?.value}</p>
    </div>
  );
}
