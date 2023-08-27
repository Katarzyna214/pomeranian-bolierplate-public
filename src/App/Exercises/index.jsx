import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { JsExerciseItem, JsExercises } from './Js';
import { HtmlCssExercises, HtmlCssExerciseItem } from './HtmlCss';
import { Categories } from './Categories';
import { ReactExercises, ReactExercisesItem } from './ReactExercises';
import { NotFound } from '../Components/NotFound/NotFound';
import { Link } from 'react-router-dom';

import './styles.css';

export function Exercises() {
  return (
    <Routes>
      <Route path="" element={<BlockLayout />}>
        <Route path="" element={<p>Wybierz kategorie</p>} />
        <Route path="html-css" element={<HtmlCssExercises />} />
        <Route path="js" element={<JsExercises />} />
        <Route path="react" element={<ReactExercises />} />
      </Route>
      <Route path="html-css/*" element={<HtmlCssExerciseItem />} />
      <Route path="js/*" element={<JsExerciseItem />} />
      <Route path="react/*" element={<ReactExercisesItem />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function BlockLayout() {
  return (
    <>
      {' '}
      <Link to=".." relative="path" className="linktoformularzzamowienia">
        {' '}
        {'< ĆWICZENIA'}{' '}
      </Link>
      <p className="cwiczeniaparagraph">
        Tutaj znajdziesz wszystkie ćwiczenia, które realizowane były na kursie.
      </p>
      {/* <h1>Ćwiczenia</h1> */}
      <div className="exercise-main-container">
        <Categories />
        <Outlet />
      </div>
    </>
  );
}
