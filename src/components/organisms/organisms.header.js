import logo from "../../static/images/evp-logo-white.svg";

const Header = ({basename}) => {
  return (
    <header className="header">
      <div className="header__content">
        <a href={`${basename}#hello`}>
          <img src={logo} alt="eduvallve logo" width={30} height={30}></img>
        </a>
        <nav className="header__navigation">
          <ul className="header__navigation-list">
            <li className="header__navigation-item">
              <a href={`${basename}#hello`}>Hello</a>
            </li>
            <li className="header__navigation-item">
              <a href={`${basename}#about`}>About</a>
            </li>
            <li className="header__navigation-item">
              <a href={`${basename}#portfolio`}>portfolio</a>
            </li>
            <li className="header__navigation-item">
              <a href={`${basename}#follow`}>Follow</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
