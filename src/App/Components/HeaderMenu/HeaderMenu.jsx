import './styles.css';
import { SettingIcon } from '../Icons/SettingIcon';
import { MenuArrow } from '../Icons/MenuArrow';
import { RightCornerMenuPopup } from '../RighCornerMenuPopup/RightCornerMenuPopup';
import { useState } from 'react';
import { ReactComponent as MyPhoto1 } from '../../Images/Myphoto1.jpg';

export const HeaderMenu = () => {
  const [isVisible, setVisibility] = useState(false);

  const clickHandler = () => {
    setVisibility(!isVisible);
  };
  return (
    <div className="images-container">
      <SettingIcon />
      <div className="circular_image">
        {' '}
        <img src="http://placekitten.com/500/500" alt="kitten" />
      </div>
      <div className="name-surname-container">
        <h4>Katarzyna</h4>
        <h5>kursantka</h5>
      </div>
      <button onClick={clickHandler} className="header_button">
        <MenuArrow className="menu-arrow" />{' '}
      </button>
      <div className="rightcornermenupopup">
        {isVisible && <RightCornerMenuPopup />}
      </div>
    </div>
  );
};
