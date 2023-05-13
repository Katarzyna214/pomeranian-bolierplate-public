import './styles.css';
import png from '../../../Images/rower.png';
import jpg from '../../../Images/jak-zrobic-dobre-zdjecie-ustawienia-aparatu.jpg';
import gif from '../../../Images/spongebob.gif';

export function Images() {
  return (
    <div>
      <img className="obr1" src={png} alt="rower" />
      <img src={jpg} alt="krajobraz" />
      <img src={gif} alt="spongebob" />

      {/* background url */}
      <div className="imageBackground">test</div>
    </div>
  );
}
