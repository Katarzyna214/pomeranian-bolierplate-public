import './styles.css';
import { Link } from 'react-router-dom';
import jsSvg from '../../Images/tech-stack/js.svg';
import discordIcon from '../../Images/tech-stack/discord-icon-svgrepo-com 3.png';
import githuub from '../../Images/tech-stack/githuub.svg';
import html from '../../Images/tech-stack/html.svg';
import jira from '../../Images/tech-stack/jira 1.png';
import react from '../../Images/tech-stack/react.svg';
import redmine from '../../Images/tech-stack/redmine.png';
import redux from '../../Images/tech-stack/redux.png';
import ts from '../../Images/tech-stack/ts.svg';
import vscode from '../../Images/tech-stack/vscode-alt 1.png';
import css from '../../Images/tech-stack/css.svg';
import firebase from '../../Images/tech-stack/firebase-svgrepo-com 1.png';

export const TechStack = () => {
  return (
    <div className="dashboard">
      {' '}
      <div className="dashboard-tech-stack-container">
        {' '}
        <Link to=".." relative="path" className="linktoformularzzamowienia">
          {' '}
          {'< TECHSTACK'}{' '}
        </Link>{' '}
        <p>
          {' '}
          Poniżej znajdziesz tech stack oraz nadzędzia, jakich nauczylem się
          podczas kursu.{' '}
        </p>{' '}
        <div className="dashboard-tech-stack-flex">
          {' '}
          <div className="ikona">
            <img src={jsSvg} alt="javascript" />{' '}
            <p className="parIcon">java script</p>
          </div>
          <div className="ikona">
            <img src={discordIcon} alt="discord" />
            <p className="parIcon">discord</p>{' '}
          </div>
          <div className="ikona">
            {' '}
            <img src={githuub} alt="github" />
            <p className="parIcon">github</p>
          </div>
          <div className="ikona">
            {' '}
            <img src={html} alt="javascript" />
            <p className="parIcon">html</p>
          </div>
          <div className="ikona">
            <img src={jira} alt="javascript" />
            <p className="parIcon">jira</p>
          </div>
          <div className="ikona">
            {' '}
            <img src={react} alt="javascript" />
            <p className="parIcon"> react</p>
          </div>
          <div className="ikona">
            <img src={redmine} alt="javascript" />
            <p className="parIcon">readmine</p>
          </div>
          <div className="ikona">
            {' '}
            <img src={redux} alt="javascript" />
            <p className="parIcon"> redux</p>
          </div>
          <div className="ikona">
            <img src={ts} alt="javascript" />
            <p className="parIcon">type script</p>
          </div>
          <div className="ikona">
            {' '}
            <img src={vscode} alt="javascript" />
            <p className="parIcon">v studio</p>
          </div>
          <div className="ikona">
            {' '}
            <img src={css} alt="javascript" />
            <p className="parIcon">css</p>
          </div>
          <div className="ikona">
            {' '}
            <img src={firebase} alt="javascript" />
            <p className="parIcon">firebase</p>
          </div>
        </div>{' '}
      </div>
    </div>
  );
};
