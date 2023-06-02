import './styles.css';
import mis from '../../../Images/mis.svg';

export function FloatsAndPositioning() {
  return (
    <div className="maindiv">
      {' '}
      <div className="div1">
        {' '}
        <p className="par1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p className="par2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>{' '}
      </div>{' '}
      <div className="div2">
        {' '}
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestiea iaculis at. Dictum varius duis at
          consectetur lorem donec.{' '}
        </p>{' '}
        <div className="div2_div1">
          {' '}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{' '}
        </div>{' '}
      </div>{' '}
      <div className="div3">
        {' '}
        <img
          width="100px"
          height="100px"
          src={mis}
          alt="Image not found"
        />{' '}
        <div className="parentparagraf">
          {' '}
          <p className="paragraf1234">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{' '}
          </p>
          <div className="div3_div1">zapisz na później</div>
        </div>{' '}
      </div>{' '}
      <div className="div5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus
        mattis molestiea iaculis at. Dictum varius duis at consectetur lorem
        donec.
        <div className="div5_div1">Zapisz na później</div>{' '}
      </div>
      <div className="div6">
        {' '}
        <p className="paragraf12345">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestie a iaculis at. Dictum varius duis at
          consectetur lorem donec. Sit amet dictum sit amet justo. Fringilla
          phasellus faucibus scelerisque eleifend donec. Elementum pulvinar
          etiam non quam lacus suspendisse faucibus interdum posuere. Arcu
          dictum varius duis at consectetur lorem. Massa ultricies mi quis
          hendrerit.{' '}
        </p>
        <p className="paragraf123456">
          Leo vel orci porta non pulvinar neque laoreet. In egestas erat
          imperdiet sed euismod nisi porta lorem. Ut porttitor leo a diam
          sollicitudin tempor id. Tortor at auctor urna nunc id. Gravida quis
          blandit turpis cursus in. Ornare quam viverra orci sagittis eu. Metus
          dictum at tempor commodo ullamcorper a. Vestibulum mattis ullamcorper
          velit sed ullamcorper morbi. Amet massa vitae tortor condimentum
          lacinia quis. Quis enim lobortis scelerisque fermentum dui faucibus in
          ornare. Auctor elit sed vulputate mi.
        </p>{' '}
      </div>{' '}
      <div className="div7">
        {' '}
        <div className="div7_div div_relative">
          {' '}
          <div className="div7_div div_absolute"></div>{' '}
          <div className="div7_div div_absolute"></div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}
