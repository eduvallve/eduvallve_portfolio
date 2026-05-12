import i18n from '../../i18n'

function Button({ children, className, type, url }) {
  if (type === "external-link") {
    return (
      <a
        className={`button ${className}`}
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label={`${i18n.t('a11y.externalSite')}: ${url}`}
      >
        {children}
      </a>
    );
  } else {
    return <button className={`button ${className}`}>{children}</button>;
  }
}

export default Button;
