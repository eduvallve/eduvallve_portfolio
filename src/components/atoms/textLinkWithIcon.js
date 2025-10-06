const TextLinkWithIcon = ({ iconUrl, alt, label }) => {
  return (
    <p className="text-link-with-icon">
      <img src={iconUrl} alt={alt}></img> {label}
    </p>
  );
};

export default TextLinkWithIcon;
