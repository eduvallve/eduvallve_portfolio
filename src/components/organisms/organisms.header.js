import logo from "../../static/images/evp-logo-white.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import { TranslationContext } from "../../Layout";

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { translations } = useContext(TranslationContext);
  const currentLang = i18n.language || 'en';

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const changeLanguage = (newLang) => {
    if (newLang === currentLang) return;
    closeMenu();

    if (translations[newLang]) {
      if (location.pathname.includes('/blog/')) {
        navigate(`/${newLang}/blog/${translations[newLang]}`, { state: { fromLanguageSwitcher: true } });
        return;
      }
    }

    const newPath = location.pathname.replace(/^\/(en|ca)/, `/${newLang}`);
    navigate(newPath, { state: { fromLanguageSwitcher: true } });
  };

  return (
    <header className={`header ${isMenuOpen ? 'header--menu-open' : ''}`}>
      <div className="header__content">
        <NavLink to={`/${currentLang}`} className="header__logo" onClick={closeMenu} aria-label={i18n.t('a11y.linkTo') + i18n.t('nav.home')}>
          <img src={logo} alt="eduvallve logo" width={30} height={30}></img>
        </NavLink>

        <button
          className={`header__hamburger ${isMenuOpen ? 'is-active' : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Tancar menú' : 'Obrir menú'}
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <nav className={`header__navigation ${isMenuOpen ? 'header__navigation--open' : ''}`}>
          <ul className="header__navigation-list">
            <li className="header__navigation-item">
              <NavLink to={`/${currentLang}#hello`} onClick={closeMenu} aria-label={i18n.t('a11y.linkTo') + i18n.t('nav.home')}>{t('nav.home')}</NavLink>
            </li>
            <li className="header__navigation-item">
              <NavLink to={`/${currentLang}#about`} onClick={closeMenu} aria-label={i18n.t('a11y.linkTo') + i18n.t('nav.about')}>{t('nav.about')}</NavLink>
            </li>
            <li className="header__navigation-item">
              <NavLink to={`/${currentLang}#portfolio`} onClick={closeMenu} aria-label={i18n.t('a11y.linkTo') + i18n.t('nav.projects')}>{t('nav.projects')}</NavLink>
            </li>
            <li className="header__navigation-item">
              <NavLink to={`/${currentLang}/blog`} onClick={closeMenu} aria-label={i18n.t('a11y.linkTo') + i18n.t('nav.blog')}>{t('nav.blog')}</NavLink>
            </li>
            <li className="header__navigation-item">
              <NavLink to={`/${currentLang}#follow`} onClick={closeMenu} aria-label={i18n.t('a11y.linkTo') + i18n.t('nav.follow')}>{t('nav.follow')}</NavLink>
            </li>

            {/* Language Switcher */}
            <li className="header__navigation-item header__navigation-item--language">
              <div className="header__language-switcher">
                <button
                  onClick={() => changeLanguage('en')}
                  className={`header__language-btn ${currentLang === 'en' ? 'active' : ''}`}
                  aria-label="Change to English"
                >
                  EN
                </button>
                <button
                  onClick={() => changeLanguage('ca')}
                  className={`header__language-btn ${currentLang === 'ca' ? 'active' : ''}`}
                  aria-label="Canviar a Català"
                >
                  CA
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
