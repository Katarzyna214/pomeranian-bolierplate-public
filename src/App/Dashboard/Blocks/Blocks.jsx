import { WavingHand } from '../../Components/Icons/WavingHandIcon';
import { ReactComponent as PersonalCardIcon } from '../../Images/tiles/personalcard.svg';
import { ReactComponent as Edit } from '../../Images/tiles/edit.svg';
import { ReactComponent as Code } from '../../Images/tiles/code.svg';
import { ReactComponent as Folder } from '../../Images/tiles/folder-2.svg';
import { ReactComponent as Status } from '../../Images/tiles/status-up.svg';
import { ReactComponent as Teacher } from '../../Images/tiles/teacher.svg';
import { Link } from 'react-router-dom';

export const Blocks = () => {
  return (
    <div className="dashboard-tiles-container">
      <h2>
        {' '}
        <WavingHand className="wavingHand" /> Hej tu Kasia!
      </h2>{' '}
      <p className="dashboardpar1">
        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności.
      </p>
      <div className="dashboard-tiles">
        {' '}
        <div className="box1">
          <p className="dashboard-tile-title">Moje CV </p>{' '}
          <PersonalCardIcon className="my-icons" />
          <p className="dashboard-tile-description">
            Podgląd CV wraz z doświadczeniem
          </p>
          {/* <p className="dashboard-tile-description">zobacz więcej </p> */}
          <Link to="/cv/">Zobacz więcej</Link>
        </div>{' '}
        <div>
          <p className="dashboard-tile-title">Projekty</p>{' '}
          <Folder className="my-icons" />
          <p className="dashboard-tile-description">Moje własne projekty</p>
          <p className="dashboard-tile-description">zobacz więcej </p>
        </div>{' '}
        <div>
          <p className="dashboard-tile-title">Ćwiczenia </p>{' '}
          <Edit className="my-icons" />
          <p className="dashboard-tile-description">
            Wszystkie wykonane ćwiczenia
          </p>
          {/* <p className="dashboard-tile-description">zobacz więcej</p> */}
          <Link to="/exercises/">Zobacz więcej</Link>
        </div>{' '}
        <div>
          {' '}
          <p className="dashboard-tile-title">Edukacja</p>{' '}
          <Teacher className="my-icons" />
          <p className="dashboard-tile-description">Ukończone szkoły i kursy</p>
          <p className="dashboard-tile-description">zobacz więcej</p>
        </div>{' '}
        <div>
          {' '}
          <p className="dashboard-tile-title">Tech stack</p>{' '}
          <Code className="my-icons" />
          <p className="dashboard-tile-description">
            {' '}
            Stack technologiczny realizowany na kursie
          </p>{' '}
          <Link to="/techstack/">Zobacz więcej</Link>
        </div>{' '}
        <div>
          {' '}
          <p className="dashboard-tile-title">Doświadczenie</p>
          <Status className="my-icons" />
          <p className="dashboard-tile-description">
            Poprzednie stanowiska pracy i szkolenia
          </p>
          <p className="dashboard-tile-description">zobacz więcej</p>
        </div>{' '}
      </div>{' '}
    </div>
  );
};
