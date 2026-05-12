import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "en";

  return (
    <footer className="footer">
      <div className="footer__content font-size-14">
        <NavLink
          to={`/${currentLang}/privacy`}
          className="footer__link"
          aria-label={i18n.t("a11y.linkTo") + i18n.t("nav.privacy")}
        >
          {i18n.t("nav.privacy")}
        </NavLink>
        <NavLink
          to={`/${currentLang}/privacy#cookies`}
          className="footer__link"
          aria-label={i18n.t("a11y.linkTo") + i18n.t("nav.cookies")}
        >
          {i18n.t("nav.cookies")}
        </NavLink>
        {i18n.t("copyright.designedBy")}
        <a
          href="https://www.linkedin.com/in/eduardvallve/"
          target="_blank"
          rel="noopener noreferrer"
          style={{color:'inherit'}}
        >
          {' '}Eduard Vallvé ©
        </a>
        , {new Date().getFullYear()}. {i18n.t("copyright.rights")}
      </div>
    </footer>
  );
};

export default Footer;
