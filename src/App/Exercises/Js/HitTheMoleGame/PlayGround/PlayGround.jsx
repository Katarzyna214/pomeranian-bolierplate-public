import './PlayGround.css';
import { ReactComponent as Mole } from '../../../../Images/Mole.svg';

export const PlayGround = ({}) => {
  return (
    <div className="playground">
      <div className="field">
        <Mole className="svg" />
      </div>
      <div className="field"></div>
      <div className="field"></div>
      <div className="field"></div>
      <div className="field"></div>
      <div className="field"></div>
      <div className="field"></div>
      <div className="field"></div>
      <div className="field"></div>
      <div className="field"></div>
    </div>
  );
};
