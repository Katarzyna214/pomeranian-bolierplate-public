import { MyData } from '../Dashboard/MyData/MyData';
import './styles.css';
import { Link } from 'react-router-dom';
import { LinkedInIcon } from '../Components/Icons/LinkedInIcon';
import { GitHubIconIcon } from '../Components/Icons/GitHubIcon';
import { FacebookIcon } from '../Components/Icons/FacebookIcon';

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
          <div className="mypagesicon">
            {' '}
            <Link to="https://www.linkedin.com/in/katarzynamazur1994/">
              <LinkedInIcon />
            </Link>
            <Link to="https://github.com/katarzyna214">
              <GitHubIconIcon className="gitHubIcon" />
            </Link>
            <Link to="https://facebook.com/katarzyna.mazur.921230">
              <FacebookIcon className="gitHubIcon" />
            </Link>
          </div>
          <MyData />
          <p className="skillsparagraph">Skills</p>

          <div className="skillscontainer">
            HTML5,CSS3, XML, JavaScript, Jest, React.js, React Redux,
            TypeScript, REST API, JSON, WSL, Node, Prettier, ESLint, Husky,
            Visual Studio Code, Git/GitHub
          </div>
        </div>
      </div>
    </div>
  );
};
