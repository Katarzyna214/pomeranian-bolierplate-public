import { Link } from 'react-router-dom';
import './react_styles.css';
import { blockRouterMetaData } from './view-router-data';
import { ReactComponent as Textfile } from '../../Images/file-text.svg';
export const ExerciseLinks = () => {
  function getClassName(path) {
    if (window.location.path !== path) {
      return '';
    }

    return 'active';
  }
  return (
    <ul className="htms_css_list">
      {blockRouterMetaData.map((blockMetaData) => (
        <li className="listyle" key={blockMetaData.path}>
          <Textfile />{' '}
          <Link
            to={blockMetaData.path}
            className={getClassName(blockMetaData.path)}
          >
            {blockMetaData.linkLabel}
          </Link>
        </li>
      ))}
    </ul>
  );
};
