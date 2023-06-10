import './Menu.css';

export const Menu = ({ children, label }) => {
  return (
    <div className="menu">
      <div className="menu-label"> {label} </div>
      {children}
    </div>
  );
};
