import { Link } from 'react-router-dom';
import './html_css_styles.css';
import { ReactComponent as Textfile } from '../../Images/file-text.svg';

import { blockRouterMetaData } from './view-router-data';

export const ExerciseLinks = () => {
  return (
    <ul className="htms_css_list">
      {blockRouterMetaData.map((blockMetaData) => (
        <li className="listyle" key={blockMetaData.path}>
          <Textfile />{' '}
          <Link to={blockMetaData.path}>{blockMetaData.linkLabel}</Link>
        </li>
      ))}
    </ul>
  );
};
