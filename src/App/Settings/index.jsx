import './styles.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
export const Settings = () => {
  const [fontSize, setFontSize] = useState('medium'); // Początkowa wartość: średnia czcionka

  useEffect(() => {
    document.body.classList.remove('small-font', 'medium-font', 'large-font');
    document.body.classList.add(`${fontSize}-font`);
  }, [fontSize]);

  const handleFontSizeChange = (newSize) => {
    setFontSize(newSize);
  };

  return (
    <div className="dashboard">
      <Link to=".." relative="path">
        {' '}
        {'< USTAWIENIA'}{' '}
      </Link>
      <p className="settingsParagraph">
        Ustaw rozmiar fontu zgodnie z Twoimi potrzebami oraz preferencjami.
      </p>
      <form className="font-size-options">
        <div>
          <label>
            <input
              className="radiobutton"
              type="radio"
              name="fontSize"
              value="small"
              checked={fontSize === 'small'}
              onChange={() => handleFontSizeChange('small')}
            />
            Mała czcionka
          </label>
        </div>
        <div>
          <label>
            <input
              className="radiobutton"
              type="radio"
              name="fontSize"
              value="medium"
              checked={fontSize === 'medium'}
              onChange={() => handleFontSizeChange('medium')}
            />
            Średnia czcionka
          </label>
        </div>
        <div>
          <label>
            <input
              className="radiobutton"
              type="radio"
              name="fontSize"
              value="large"
              checked={fontSize === 'large'}
              onChange={() => handleFontSizeChange('large')}
            />
            Duża czcionka
          </label>
        </div>
      </form>
    </div>
  );
};
