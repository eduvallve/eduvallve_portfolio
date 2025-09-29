import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
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
      </div>
    </header>
  );
};

export default Header;
