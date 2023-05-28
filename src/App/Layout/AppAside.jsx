import { NavLink } from 'react-router-dom';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { MessagesIcon } from '../Components/Icons/MessagesIcon';
import './styles/aside.css';
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
            <NavLink to="cv">CV</NavLink>
          </li>
          <li>
            <ElementIcon className="Icon" />
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li>
            <EditIcon className="Icon" />
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li>
            <CalendarIcon className="Icon" />
            <NavLink to="calendar">Kalendarz</NavLink>
          </li>
          <li>
            <MessagesIcon className="Icon" />
            <NavLink to="faq">FAQ</NavLink>
          </li>
          <li>
            <SettingIcon className="Icon" />
            <NavLink to="settings">Ustawienia</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '4rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
