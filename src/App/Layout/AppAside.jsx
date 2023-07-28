import { NavLink } from 'react-router-dom';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { MessagesIcon } from '../Components/Icons/MessagesIcon';
import { CodeIcon } from '../Components/Icons/CodeIcon';
import './styles/aside.css';
import { MoleIcon } from '../Components/Icons/MoleIcon';
import { MemoryIcon } from '../Components/Icons/GameBoyIcon';
import { NoteIcon } from '../Components/Icons/NoteIcon';
export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <HouseIcon className="Icon" />
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li>
            {' '}
            <PersonalCardIcon className="Icon" />
            <NavLink to="cv">Moje CV</NavLink>
          </li>
          <li>
            <CodeIcon className="Icon" />
            <NavLink to="/techstack/">Tech stack</NavLink>
          </li>
          <li>
            <EditIcon className="Icon" />
            <NavLink to="/exercises/">Ćwiczenia</NavLink>
          </li>
          <li>
            <MoleIcon className="Icon" />
            <NavLink to="hit-the-mole">Gra kret</NavLink>
          </li>
          <li>
            <MemoryIcon className="Icon" />
            <NavLink to="memory-game">Gra memo</NavLink>
          </li>
          <li>
            <NoteIcon className="Icon" />
            <NavLink to="basic-forms">Formularz</NavLink>
          </li>
          <li>
            <CalendarIcon className="Icon" />
            <NavLink to="calendar">Kalendarz</NavLink>
          </li>
          <li>
            <MessagesIcon className="Icon" />
            <NavLink to="faq">FAQ</NavLink>
          </li>
          <hr />
          <li>
            <SettingIcon className="Icon" />
            <NavLink to="settings">Ustawienia</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
