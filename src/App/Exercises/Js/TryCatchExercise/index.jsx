import './styles.css';
import { useState } from 'react';

export function Exercise() {
  const [value, setValue] = useState('');
  const [error, setError] = useState();
  const checkIsNumber = (value) => {
    const parsedValue = Number.parseInt(value);

    if (isNaN(parsedValue)) {
      throw 'Input nie jest liczbą!'; //throw odpowiedzialny za wyrzucenie bedu
    }
  };
  const validate = (valueToValidate) => {
    try {
      checkIsNumber(valueToValidate);
    } catch (err) {
      setError(err);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validate(value);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Nasz input:
          <input onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {error && <div>Error: {error}</div>}
    </>
  );
}
