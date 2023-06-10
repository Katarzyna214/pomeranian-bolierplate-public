import './Button.css';

export const Button = ({ onClick, id, children, isDisabled, isActive }) => {
  const activeClass = isActive ? 'active' : '';
  return (
    <button
      className={`button ${activeClass}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}{' '}
    </button>
  );
};
