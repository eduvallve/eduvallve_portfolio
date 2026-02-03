import logo from "../../static/images/evp-logo-white.svg";

const Header = ({basename}) => {
  return (
    <header className="header">
      <div className="header__content">
        <a href={`${basename}#hello`} className="header__logo" aria-label="Link to homepage">
          <img src={logo} alt="eduvallve logo" width={30} height={30}></img>
        </a>
        <nav className="header__navigation">
          <ul className="header__navigation-list">
            <li className="header__navigation-item">
              <a href={`${basename}#hello`} aria-label="Link to Hello section">Hello</a>
            </li>
            <li className="header__navigation-item">
              <a href={`${basename}#about`} aria-label="Link to About section">About</a>
            </li>
            <li className="header__navigation-item">
              <a href={`${basename}#portfolio`} aria-label="Link to Portfolio section">Portfolio</a>
            </li>
            <li className="header__navigation-item">
              <a href={`${basename}#follow`} aria-label="Link to Follow section">Follow</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
