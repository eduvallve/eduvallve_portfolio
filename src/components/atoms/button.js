function Button({ children, classes, type, url }) {
  if (type === "link") {
    return (
      <a
        className={`button ${classes}`}
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  } else {
    return <button className={`button ${classes}`}>{children}</button>;
  }
}

export default Button;
