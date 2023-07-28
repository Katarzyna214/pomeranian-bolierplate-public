import { MyData } from '../Dashboard/MyData/MyData';
import './styles.css';
import { Link } from 'react-router-dom';
import { LinkedInIcon } from '../Components/Icons/LinkedInIcon';
import { GitHubIconIcon } from '../Components/Icons/GitHubIcon';

export const CV = () => {
  return (
    <div className="cv">
      <Link to=".." relative="path" className="linkCv">
        {' '}
        {'< CV'}{' '}
      </Link>
      <p className="naglowek">
        Poniżej znajdziesz informacje na temat mojego wykształcenia oraz
        doświadczenia.
      </p>
      <div className="cvContainer">
        <div>Moje CV</div>
        <div className="myData">
          <Link to="https://www.linkedin.com/in/katarzynamazur1994/">
            <LinkedInIcon />
          </Link>
          <Link to="https://github.com/katarzyna214">
            <GitHubIconIcon className="gitHubIcon" />
          </Link>
          <Link to="https://www.facebook.com/katarzyna.mazur.921230"></Link>
          <MyData />
        </div>
      </div>
    </div>
  );
};
