function Button({ children, className, type, url }) {
  if (type === "external-link") {
    return (
      <a
        className={`button ${className}`}
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Link to external site: ${url}`}
      >
        {children}
      </a>
    );
  } else {
    return <button className={`button ${className}`}>{children}</button>;
  }
}

export default Button;
