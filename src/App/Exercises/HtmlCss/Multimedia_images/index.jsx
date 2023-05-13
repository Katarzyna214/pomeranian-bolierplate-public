import './styles.css';
import png from '../../../Images/rower.png';
import jpg from '../../../Images/jak-zrobic-dobre-zdjecie-ustawienia-aparatu.jpg';
import gif from '../../../Images/spongebob.gif';
import { RoundImage } from '../../../Components/RoundImage/RoundImage';

export function Images() {
  const images = [
    {
      title: 'To jest png!',
      src: png,
      width: 1000,
      height: 700,
      color: 'red',
    },
    {
      title: 'To jest jpg!',
      src: jpg,
      width: 1050,
      height: 750,
      color: 'blue',
    },
    {
      title: 'To jest gif!',
      src: gif,
      width: 500,
      height: 300,
      color: 'green',
    },
  ];
  return (
    <div>
      {images.map((el) => (
        <RoundImage
          title={el.title}
          src={el.src}
          width={el.width}
          height={el.height}
          color={el.color}
        />
      ))}
    </div>
  );
}
/* // <div>
    //   <img className="obr1" src={png} alt="rower" />
    //   <img src={jpg} alt="krajobraz" />
    //   <img src={gif} alt="spongebob" />

    //   {/* background url */
/* //   <div className="imageBackground">test</div>
    // </div>  */
