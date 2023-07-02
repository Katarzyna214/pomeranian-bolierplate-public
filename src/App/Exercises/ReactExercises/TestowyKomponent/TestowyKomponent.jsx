// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   increment,
//   decrement,
//   incrementByValue,
// } from '../../../../Store/slices/counterSlice';
// import './style.css';
// export function ReduxTest() {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();
//   const [incrementValue, setIncrementValue] = useState('1');
//   const handleAdd = () => dispatch(increment());
//   const handleDec = () => dispatch(decrement());
//   const handleSubVal = () => dispatch(incrementByValue(Number(incrementValue)));
//   const handleIncByVal = (event) => {
//     const value = event.target.value;
//     setIncrementValue(value);
//   };

//   return (
//     <div>
//       <div>Nasz count: {count}</div>

//       <button onClick={handleAdd}>Dodaj</button>
//       <button onClick={handleDec}>Odejmij</button>
//       <input
//         onChange={handleIncByVal}
//         type="text"
//         value={incrementValue}
//       ></input>
//       <button onClick={handleSubVal}>Dodaj {incrementValue}</button>
//     </div>
//   );
// }
import React from 'react';
import { Redux } from '../Redux/Redux';
import './style.css';

export function ReduxTest() {
  return (
    <div>
      <Redux />
    </div>
  );
}
