import React from 'react';
import { Route, Routes, useLocation, useRoutes } from 'react-router-dom';
import './js_styles.css';
import { GoBackLink } from '../../Components/GoBack/GoBack';
import { getRouterMetaDataByCurrentPath } from '../../router-data/getRouterMetaDataByCurrentPath';

import { ExerciseItemHeader } from '../ExerciseItemHeader';

import { ExerciseLinks } from './ExerciseLinks';
import {
  blockRouterData as jsBlockRouterData,
  blockRouterMetaData as jsBlockRouterMetaData,
} from './view-router-data';
import { ReactComponent as CloseSquare } from '../../Images/close-square.svg';
export function JsExercises() {
  const element = useRoutes(jsBlockRouterData);

  return (
    <div>
      <div className="closesquareposition">
        <p>JS - ćwiczenia</p>
        <GoBackLink label={<CloseSquare />} />
      </div>
      <hr />

      <Routes>
        <Route path="" element={<ExerciseLinks />} />
      </Routes>

      {element}
    </div>
  );
}

export function JsExerciseItem() {
  const element = useRoutes(jsBlockRouterData);

  const location = useLocation();

  const { pathname } = location;
  // const pathname = location.pathname

  const exerciseRouteData = getRouterMetaDataByCurrentPath(
    pathname,
    jsBlockRouterMetaData
  );

  return (
    <div className="exercise-item-layout">
      <ExerciseItemHeader data={exerciseRouteData} />

      <hr />

      <div className="exercise-item-content">{element}</div>
    </div>
  );
}
