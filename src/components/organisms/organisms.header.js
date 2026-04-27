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
        <NavLink to={`/${currentLang}`} className="header__logo" aria-label="Link to homepage">
          <img src={logo} alt="eduvallve logo" width={30} height={30}></img>
        </NavLink>
        <nav className="header__navigation">
          <ul className="header__navigation-list">
            <li className="header__navigation-item">
              <NavLink to={`/${currentLang}#hello`} aria-label="Link to Hello section">{t('nav.home')}</NavLink>
            </li>
            <li className="header__navigation-item">
              <NavLink to={`/${currentLang}#about`} aria-label="Link to About section">{t('nav.about')}</NavLink>
            </li>
            <li className="header__navigation-item">
              <NavLink to={`/${currentLang}#portfolio`} aria-label="Link to Portfolio section">{t('nav.projects')}</NavLink>
            </li>
            <li className="header__navigation-item">
              <NavLink to={`/${currentLang}/blog`} aria-label="Link to Blog">{t('nav.blog')}</NavLink>
            </li>
            <li className="header__navigation-item">
              <NavLink to={`/${currentLang}#follow`} aria-label="Link to Follow section">{t('nav.follow')}</NavLink>
            </li>
            
            {/* Language Switcher */}
            <li className="header__navigation-item header__language-switcher">
              <button 
                onClick={() => changeLanguage('en')} 
                className={currentLang === 'en' ? 'active' : ''}
                aria-label="Change to English"
              >
                EN
              </button>
              <span className="separator">|</span>
              <button 
                onClick={() => changeLanguage('ca')} 
                className={currentLang === 'ca' ? 'active' : ''}
                aria-label="Canviar a Català"
              >
                CA
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
