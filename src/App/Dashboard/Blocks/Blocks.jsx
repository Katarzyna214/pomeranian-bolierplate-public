import { WavingHand } from '../../Components/Icons/WavingHandIcon';
import { PersonalCardIcon } from '../../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../../Components/Icons/EditIcon';
import { NoteIcon } from '../../Components/Icons/NoteIcon';
import { CodeIcon } from '../../Components/Icons/CodeIcon';
import { Link } from 'react-router-dom';
import { MessagesIcon } from '../../Components/Icons/MessagesIcon';
import { FolderIcon } from '../../Components/Icons/FolderIcon';

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
          <FolderIcon className="my-icons" />
          <p className="dashboard-tile-description">Moje własne projekty</p>
          {/* <p className="dashboard-tile-description">zobacz więcej </p> */}
          <Link to="/menugame/">Zobacz więcej</Link>
        </div>{' '}
        <div>
          <p className="dashboard-tile-title">Ćwiczenia </p>{' '}
          <EditIcon className="my-icons" />
          <p className="dashboard-tile-description">
            Wszystkie wykonane ćwiczenia
          </p>
          {/* <p className="dashboard-tile-description">zobacz więcej</p> */}
          <Link to="/exercises/">Zobacz więcej</Link>
        </div>{' '}
        <div>
          {' '}
          <p className="dashboard-tile-title">Formularz</p>{' '}
          <NoteIcon className="my-icons" />
          <p className="dashboard-tile-description">
            Formularz kontaktowy do zamówienia
          </p>
          {/* <p className="dashboard-tile-description">zobacz więcej</p> */}
          <Link to="/basic-forms/">Zobacz więcej</Link>
        </div>{' '}
        <div>
          {' '}
          <p className="dashboard-tile-title">Tech stack</p>{' '}
          <CodeIcon className="my-icons" />
          <p className="dashboard-tile-description">
            {' '}
            Stack technologiczny realizowany na kursie
          </p>{' '}
          <Link to="/techstack/">Zobacz więcej</Link>
        </div>{' '}
        <div>
          {' '}
          <p className="dashboard-tile-title">FAQ</p>
          <MessagesIcon className="my-icons" />
          <p className="dashboard-tile-description">
            Odpowiedzi na najczęściej zadawane pytania
          </p>
          <Link to="/faq/">Zobacz więcej</Link>
          {/* <p className="dashboard-tile-description">zobacz więcej</p> */}
        </div>{' '}
      </div>{' '}
    </div>
  );
};
