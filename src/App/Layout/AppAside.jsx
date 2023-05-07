import { NavLink } from 'react-router-dom';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import {ElementIcon} from '../Components/Icons/ElementIcon';
import {HouseIcon} from '../Components/Icons/HouseIcon';
import {PersonalCardIcon} from '../Components/Icons/PersonalCardIcon';
import {SettingIcon} from '../Components/Icons/SettingIcon';
import './styles/aside.css';
export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="cv">CV</NavLink>
          </li>
          <li>
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li>
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li>
            <CalendarIcon />
            <NavLink to="calendar">Kalendarz</NavLink>
          </li>
          <li>
            <NavLink to="settings">Ustawienia</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
