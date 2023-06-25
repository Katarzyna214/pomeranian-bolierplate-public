import { useRef, useEffect } from 'react';
import './styles.css';

export function Exercise() {
  const pointRef = useRef();

  useEffect(() => {
    document.getElementById('root').addEventListener('mousemove', (event) => {
      console.log(event, 'event-triggered');
      const { x, y } = event;
      pointRef.current.style.top = `${y}px`;
      pointRef.current.style.left = `${x}px`;
    }); //root to jest div id root z index.html strony div calej naszej strony
  }, []);
  return (
    <>
      <div ref={pointRef} className="point">
        Tekst!
      </div>
    </>
  );
}
