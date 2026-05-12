import logo from "../../static/images/evp-logo-white.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { TranslationContext } from "../../Layout";

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { translations } = useContext(TranslationContext);
  const currentLang = i18n.language || 'en';

  const changeLanguage = (newLang) => {
    if (newLang === currentLang) return;

    if (translations[newLang]) {
      if (location.pathname.includes('/blog/')) {
        navigate(`/${newLang}/blog/${translations[newLang]}`);
        return;
      }
    }

    const newPath = location.pathname.replace(/^\/(en|ca)/, `/${newLang}`);
    navigate(newPath);
  };

  return (
    <header className="header">
      <div className="header__content">
        <NavLink to={`/${currentLang}`} className="header__logo" aria-label={i18n.t('a11y.linkTo') + i18n.t('nav.home')}>
          <img src={logo} alt="eduvallve logo" width={30} height={30}></img>
        </NavLink>
        <nav className="header__navigation">
          <ul className="header__navigation-list">
            <li className="header__navigation-item">
              <NavLink to={`/${currentLang}#hello`} aria-label={i18n.t('a11y.linkTo') + i18n.t('nav.home')}>{t('nav.home')}</NavLink>
            </li>
            <li className="header__navigation-item">
              <NavLink to={`/${currentLang}#about`} aria-label={i18n.t('a11y.linkTo') + i18n.t('nav.about')}>{t('nav.about')}</NavLink>
            </li>
            <li className="header__navigation-item">
              <NavLink to={`/${currentLang}#portfolio`} aria-label={i18n.t('a11y.linkTo') + i18n.t('nav.projects')}>{t('nav.projects')}</NavLink>
            </li>
            <li className="header__navigation-item">
              <NavLink to={`/${currentLang}/blog`} aria-label={i18n.t('a11y.linkTo') + i18n.t('nav.blog')}>{t('nav.blog')}</NavLink>
            </li>
            <li className="header__navigation-item">
              <NavLink to={`/${currentLang}#follow`} aria-label={i18n.t('a11y.linkTo') + i18n.t('nav.follow')}>{t('nav.follow')}</NavLink>
            </li>

            {/* Language Switcher */}
            <li className="header__navigation-item">
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
