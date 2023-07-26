import './styles.css';
import { Link } from 'react-router-dom';

export const CV = () => {
  return (
    <div className="dashboard">
      <Link to=".." relative="path">
        {' '}
        {'< CV'}{' '}
      </Link>
      <p className="naglowek">
        Poniżej znajdziesz informacje na temat mojego wykształcenia oraz
        doświadczenia.
      </p>
    </div>
  );
};
