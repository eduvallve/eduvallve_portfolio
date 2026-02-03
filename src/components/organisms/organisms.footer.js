const Footer = ({basename}) => {
  return (
    <footer className="footer">
      <div className="footer__content font-size-14">
        <a href={`${basename}privacy`} className="footer__link" aria-label="Link to Priivacy Policy page">Privacy Policy</a>
        <a href={`${basename}privacy#cookies`} className="footer__link" aria-label="Link to Cookie Policy page">Cookie Policy</a>
        Designed and built by © Eduard Vallvé,
        {` ${new Date().getFullYear()}`}. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
