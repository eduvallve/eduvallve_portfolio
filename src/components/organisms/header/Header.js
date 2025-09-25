import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
        Header here. Logo.
    <nav>
      <ul>
        <li>
          <NavLink to="/">Hello</NavLink>
        </li>
        <li>
          <NavLink to="/#about">About</NavLink>
        </li>
        <li>
          <NavLink to="/#portfolio">portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/#follow">Follow</NavLink>
        </li>
      </ul>
    </nav>
    </header>
  );
};

export default Header;
