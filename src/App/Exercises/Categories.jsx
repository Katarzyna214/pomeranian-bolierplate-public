import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Html } from '../Images/tech-stack/html.svg';
import { ReactComponent as JS } from '../Images/tech-stack/js.svg';
import { ReactComponent as REACT1 } from '../Images/tech-stack/react.svg';
import './categories.css';
import { useState } from 'react';
import { ReactComponent as Html_red } from '../Images/tech-stack/html_red.svg';

export const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
  };
  return (
    <div className="positionofcategory">
      <div>
        <p>kategorie</p>
      </div>
      <div
        className={`exercises-categories ${
          activeCategory === 'html-css' ? 'active' : ''
        }`}
        onClick={() => handleCategoryClick('html-css')}
      >
        <NavLink to="html-css">
          {activeCategory === 'html-css' ? (
            <Html_red className="znaki" />
          ) : (
            <Html className="znaki" />
          )}
          HTML & CSS
        </NavLink>
      </div>
      <div
        className={`exercises-categories ${
          activeCategory === 'js' ? 'active' : ''
        }`}
        onClick={() => handleCategoryClick('js')}
      >
        <NavLink to="js">
          {activeCategory === 'js' ? (
            <JS className="znaki" />
          ) : (
            <JS className="znaki" />
          )}
          JS
        </NavLink>
      </div>
      <div
        className={`exercises-categories ${
          activeCategory === 'react' ? 'active' : ''
        }`}
        onClick={() => handleCategoryClick('react')}
      >
        <NavLink to="react">
          {activeCategory === 'react' ? (
            <REACT1 className="znaki" />
          ) : (
            <REACT1 className="znaki" />
          )}
          React
        </NavLink>
      </div>
      {/* <NavLink to="web-api">Web API</NavLink>
        <NavLink to="async">Asynchroniczność</NavLink>
        <NavLink to="firebase">Firebase</NavLink> */}
    </div>
  );
};
