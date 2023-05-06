import './styles.css';
import { ReactComponent as LogoSVG } from '../../Images/start-it-logo.svg';
// ../../ wychodze do app i potem podaje images bo tam jest to zdjecie
export const Logo = () => {
  return (
    <div>
      <LogoSVG />
    </div>
  );
};
