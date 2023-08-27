import { Link } from 'react-router-dom';
import { blockRouterMetaData } from './view-router-data';
import './js_styles.css';
import { ReactComponent as Textfile } from '../../Images/file-text.svg';
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
