import './styles.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Mole } from '../Images/Mole.svg';
import { MemoryIcon } from '../Components/Icons/GameBoyIcon';

export const MenuGame = () => {
  return (
    <div className="dashboard">
      <Link to=".." relative="path">
        {' '}
        {'< Dashboard'}{' '}
      </Link>
      <p className="naglowek">Poniżej znajdziesz moje projekty.</p>
      <div className="menuGameContainer">
        <div className="molecontainer">
          {' '}
          <div>
            <Mole />
          </div>
          <p className="moleparagraph">
            <Link to="/hit-the-mole/">Gra kret </Link>
          </p>{' '}
        </div>
        <div className="memocontainer">
          <div className="memoryIcon">
            <MemoryIcon />
          </div>
          <p className="memoparagraph">
            <Link to="/memory-game/">Gra memo</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
