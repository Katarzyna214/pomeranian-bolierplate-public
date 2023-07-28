import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { NotFound } from './App/Components/NotFound/NotFound';
import { Blocks } from './App/Blocks';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { Exercises } from './App/Exercises';
import { CV } from './App/CV';
import { Calendar } from './App/Calendar';
import { Settings } from './App/Settings';
import { FAQ } from './App/FAQ';
import { TechStack } from './App/Components/TechStack/TechStack';
import { BasicForms } from './App/Form/BasicForms';
import { HitTheMole } from './App/Exercises/Js/HitTheMoleGame';
import { MenuGame } from './App/MenuGame';
import { MemoryGame } from './App/Exercises/Js/MemoryGame';
import { SettingIcon } from './App/Components/Icons/SettingIcon';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="techstack/*" element={<TechStack />} />

          <Route path="cv/*" element={<CV />} />
          <Route path="calendar/*" element={<Calendar />} />
          <Route path="faq/*" element={<FAQ />} />
          <Route path="settings/*" element={<Settings />} />
          <Route path="settings/*" element={<SettingIcon />} />
          <Route path="exercises/*" element={<Exercises />} />
          {/* <Route path="blocks/*" element={<Blocks />} /> */}
          <Route path="basic-forms/*" element={<BasicForms />} />
          <Route path="hit-the-mole/*" element={<HitTheMole />} />
          <Route path="menugame/*" element={<MenuGame />} />
          <Route path="memory-game/*" element={<MemoryGame />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
