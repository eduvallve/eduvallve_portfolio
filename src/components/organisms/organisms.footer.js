import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  return (
    <footer className="footer">
      <div className="footer__content font-size-14">
        <NavLink to={`/${currentLang}/privacy`} className="footer__link" aria-label="Link to Privacy Policy page">Privacy Policy</NavLink>
        <NavLink to={`/${currentLang}/privacy#cookies`} className="footer__link" aria-label="Link to Cookie Policy page">Cookie Policy</NavLink>
        Designed and built by © Eduard Vallvé,
        {` ${new Date().getFullYear()}`}. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
