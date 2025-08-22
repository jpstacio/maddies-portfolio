import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="nav">
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          About
        </NavLink>
      </nav>
    </header>
  );
}
