import './styles.css';
import { Link } from 'react-router-dom';
export const Settings = () => {
  return (
    <div className="dashboard">
      <Link to=".." relative="path">
        {' '}
        {'< USTAWIENIA'}{' '}
      </Link>
      <p className="settingsParagraph">
        Ustaw rozmiar fontu zgodnie z Twoimi potrzebami oraz preferencjami.
      </p>
      <div>
        <h4 className="settingsHeading">Wybierz rozmiar fontu</h4>
        <div className="radiobuttonssettings">
          <input type="radio" id="font-size-small" />
          <label htmlForfor="font-size-small">font size - small</label>
          <input type="radio" id="font-size-medium" />
          <label htmlForfor="font-size-medium">font size - medium</label>
          <input type="radio" id="font-size-large" />
          <label htmlForfor="font-size-large">font size - large</label>
        </div>
      </div>
    </div>
  );
};
