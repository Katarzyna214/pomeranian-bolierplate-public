import { MyData } from '../Dashboard/MyData/MyData';
import './styles.css';
import { Link } from 'react-router-dom';
import { LinkedInIcon } from '../Components/Icons/LinkedInIcon';
import { GitHubIcon } from '../Components/Icons/GitHubIcon';
import { FacebookIcon } from '../Components/Icons/FacebookIcon';
import { Table } from './Table';

export const CV = () => {
  return (
    <div className="cv">
      <Link to=".." relative="path" className="linkCv">
        {' '}
        {'< Moje CV'}{' '}
      </Link>
      <p className="naglowek">
        Poniżej znajdziesz informacje na temat mojego wykształcenia oraz
        doświadczenia.
      </p>
      <div className="cvContainer">
        <div>
          <Table />
        </div>
        <div className="myData">
          <div className="mypagesicon">
            {' '}
            <Link to="https://www.linkedin.com/in/katarzynamazur1994/">
              <LinkedInIcon />
            </Link>
            <Link to="https://github.com/katarzyna214">
              <GitHubIcon className="gitHubIcon" />
            </Link>
            <Link to="https://facebook.com/katarzyna.mazur.921230">
              <FacebookIcon className="gitHubIcon" />
            </Link>
          </div>
          <MyData />
          <p className="skillsparagraph">Skills</p>
          <hr className="hr" />
          <div className="skillscontainer">
            <div className="eachskill">HTML5</div>
            <div className="eachskill">CSS3</div>
            <div className="eachskill">XML</div>
            <div className="eachskill">JavaScript</div>
            <div className="eachskill">Jest</div>
            <div className="eachskill">React.js</div>
            <div className="eachskill">React Redux</div>
            <div className="eachskill">TypeScript</div>
            <div className="eachskill">REST API</div>
            <div className="eachskill">JSON</div>
            <div className="eachskill">WSL</div>
            <div className="eachskill">Node</div>
            <div className="eachskill">Prettier</div>
            <div className="eachskill">ESLint</div>
            <div className="eachskill">Husky</div>
            <div className="eachskill">Visual Studio Code</div>
            <div className="eachskill">Git/GitHub</div>
          </div>
        </div>
      </div>
    </div>
  );
};
