const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content font-size-14">
        {/* Privacy Policy Cookie policy */}
        Designed and built by © Eduard Vallvé,
        {` ${new Date().getFullYear()}`}. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
