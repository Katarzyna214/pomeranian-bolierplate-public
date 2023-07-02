import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  incrementByValue,
  multiplication,
  division,
} from '../../../../Store/slices/counterSlice';
import './style.css';
import { ReduxTest } from '../TestowyKomponent/TestowyKomponent';

// export function Redux() {
//   //!! Przykładowe pobranie stanu aplikacji z pierwszej implementacji
//   // const testValue = useSelector((state) => {
//   //   console.log(state, 'store aplikacji w ćwiczeniu Reduxa');
//   //   return state?.storeTest?.value ?? 'Not working';
//   // });
//   return (
//     <div>
//       <p>Jestem przykładowym routem</p>
//       {/* <div>{testValue} - wyswietlam stan naszego Store'a</div> */}
//     </div>
//   );
// }

export function Redux() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementValue, setIncrementValue] = useState('1');
  const handleAdd = () => dispatch(increment());
  const handleDec = () => dispatch(decrement());
  const handleMul = () => dispatch(multiplication());
  const handleDiv = () => dispatch(division());
  const handleSubVal = () => dispatch(incrementByValue(Number(incrementValue)));
  const handleIncByVal = (event) => {
    const value = event.target.value;
    setIncrementValue(value);
  };

  return (
    <div>
      <div>Nasz count: {count}</div>

      <button onClick={handleAdd}>Dodaj</button>
      <button onClick={handleDec}>Odejmij</button>
      <input
        onChange={handleIncByVal}
        type="text"
        value={incrementValue}
      ></input>
      <button onClick={handleSubVal}>Dodaj {incrementValue}</button>
      <button onClick={handleMul}>Pomnóż przez 2</button>
      <button onClick={handleDiv}>Podziel przez 2</button>
      {/* <ReduxTest /> */}
    </div>
  );
}
