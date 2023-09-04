import './styles.css';
import React from 'react';
import { SettingIcon } from '../Icons/SettingIcon';
import { MenuArrow } from '../Icons/MenuArrow';
import { RightCornerMenuPopup } from '../RighCornerMenuPopup/RightCornerMenuPopup';
import { useState } from 'react';
import MyPhoto1 from '../../Images/Myphoto1.jpg';
import { Link } from 'react-router-dom';

export const HeaderMenu = () => {
  const [isVisible, setVisibility] = useState(false);

  const clickHandler = () => {
    setVisibility(!isVisible);
  };

  return (
    <div className="images-container">
      <Link to="/settings/">
        <SettingIcon className="settingIcon" />
      </Link>

      <div className="circular_image">
        {' '}
        {/* <img src="http://placekitten.com/500/500" alt="kitten" /> */}
        <img src={MyPhoto1} alt="Katarzyna" />
      </div>
      <div className="name-surname-container">
        <h4>Katarzyna</h4>
        <h5>kursantka</h5>
      </div>
      <button onClick={clickHandler} className="header_button">
        <MenuArrow className="menu-arrow" />{' '}
      </button>
      <div className={`rightcornermenupopup ${isVisible ? 'visible' : ''}`}>
        {isVisible && <RightCornerMenuPopup />}
      </div>
    </div>
  );
};
