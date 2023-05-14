import { NavLink } from 'react-router-dom';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { ReactComponent as Messages} from '../Components/Icons/messages.svg';
import './styles/aside.css';
export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <HouseIcon />
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li>
            {' '}
            <PersonalCardIcon />
            <NavLink to="cv">CV</NavLink>
          </li>
          <li>
            <ElementIcon />
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li>
            <EditIcon />
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li>
            <CalendarIcon />
            <NavLink to="calendar">Kalendarz</NavLink>
          </li>
          <li>
            <Messages />
            <NavLink to="faq">FAQ</NavLink>
          </li>
          <li>
            <SettingIcon />
            <NavLink to="settings">Ustawienia</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
