import './styles.css';

export function PromiseUsage() {
  const getJokes = async () => {
    //daje async zeby pokazac ze oczekuje na promisa na jakies info z serwera
    try {
      const response = await fetch(`https://api.chucknorris.io/jokes/random`);
      console.log('Response before .json():', response);
      const data = await response.json(); //informacje ktore mi przyjda z api musze przerobic na json zebym mogla wyswietlic to na stronie
      console.log('Response after .json()', data);
      const joke = data.value;
      console.log(`Heres a joke about ${joke}`);
    } catch (err) {
      console.log(err, 'Error');
    }
  };
  return (
    <div>
      {' '}
      <h2>Promise Usage</h2>
      <button onClick={() => getJokes('')}> Click on me </button>
    </div>
  );
}
