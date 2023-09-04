import React from 'react';
import { Route, Routes, useLocation, useRoutes } from 'react-router-dom';

import { GoBackLink } from '../../Components/GoBack/GoBack';
import { getRouterMetaDataByCurrentPath } from '../../router-data/getRouterMetaDataByCurrentPath';

import { ExerciseItemHeader } from '../ExerciseItemHeader';

import { ExerciseLinks } from './ExerciseLinks';
import {
  blockRouterData as reactBlockRouterData,
  blockRouterMetaData as reactBlockRouterMetaData,
} from './view-router-data';
import { ReactComponent as CloseSquare } from '../../Images/close-square.svg';
export function ReactExercises() {
  const element = useRoutes(reactBlockRouterData);

  return (
    <div>
      <div className="closesquareposition">
        <p>React - ćwiczenia</p>
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

export function ReactExercisesItem() {
  const element = useRoutes(reactBlockRouterData);

  const location = useLocation();

  const { pathname } = location;
  // const pathname = location.pathname

  const exerciseRouteData = getRouterMetaDataByCurrentPath(
    pathname,
    reactBlockRouterMetaData
  );

  return (
    <div className="exercise-item-layout">
      <ExerciseItemHeader data={exerciseRouteData} />

      <hr />

      <div className="exercise-item-content">{element}</div>
    </div>
  );
}
