import { React } from 'react';

export const Result = ({ score, resultTime }) => {
  return (
    <>
      <h2>
        Gratulacje! Twój wynik to {score} złapane krety w czasie {resultTime}{' '}
        sekund.
      </h2>
    </>
  );
};
