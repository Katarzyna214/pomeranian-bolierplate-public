import './styles.css';
import { useState } from 'react';

export function BoxModel() {
  const [isTrue, setIsTrue] = useState(true);

  const clickHandler = () => {
    setIsTrue(!isTrue);
  };
  return (
    <div>
      <p className="paragraf1" onClick={clickHandler}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        {/* conditional rendering renderuje od nowa a display none nie renderuje od nowa */}
        {isTrue && <span className="inlinespan"> Test inlinowy.</span>}
      </p>
    </div>
  );
}
