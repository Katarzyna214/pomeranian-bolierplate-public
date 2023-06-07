import './BoardView.css';
import { useState } from 'react';

const fields = [
  {
    id: 1,
    hasClicked: false,
    label: 'A',
  },
  {
    id: 2,
    hasClicked: false,
    label: '2',
  },
  {
    id: 3,
    hasClicked: false,
    label: 'R',
  },
  {
    id: 4,
    hasClicked: false,
    label: '8',
  },
  {
    id: 5,
    hasClicked: false,
    label: 'U',
  },
  {
    id: 6,
    hasClicked: false,
    label: 'K',
  },
  {
    id: 7,
    hasClicked: false,
    label: '2',
  },
  {
    id: 8,
    hasClicked: false,
    label: 'Z',
  },
  {
    id: 9,
    hasClicked: false,
    label: 'K',
  },
  {
    id: 10,
    hasClicked: false,
    label: '8',
  },
  {
    id: 11,
    hasClicked: false,
    label: 'A',
  },
  {
    id: 12,
    hasClicked: false,
    label: '4',
  },
  {
    id: 13,
    hasClicked: false,
    label: 'R',
  },
  {
    id: 14,
    hasClicked: false,
    label: '4',
  },
  {
    id: 15,
    hasClicked: false,
    label: 'Z',
  },
  {
    id: 16,
    hasClicked: false,
    label: 'U',
  },
];
export const BoardView = ({ fields }) => {
  const handleClick = (hasClicked, fields, id) => {
    {
      fields.id = true ? 'green-field' : 'red-field';
    }
  };
  return (
    <div className="board_view_main_field">
      {fields.map(({ id, hasClicked, label }) => {
        return (
          <div
            className="field"
            key={fields.id}
            onClick={() => handleClick(hasClicked)}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
};
