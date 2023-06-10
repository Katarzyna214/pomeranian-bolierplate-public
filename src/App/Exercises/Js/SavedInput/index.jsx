import './styles.css';
import {React}  from 'react';

export function SavedInput() {
 const table = [
  {
    nick: 'Janek',
    id: 1,
    button: <button/>,
  },
  {
    nick: 'Zenek',
    id: 2,
    button: <button/>,
  }
 ]
    return (
      <div>
      <div className='nick'>NICK </div>
      <input type="text" className='input-nick'/>
      <button className='button'>DODAJ</button>
      </div>
)}
