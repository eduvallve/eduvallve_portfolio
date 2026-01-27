const Marquee = ({ texts }) => {
  return (
    <div className="marquee">
      {texts.map((text, i) => {
        return (
          <span key={i} className="marquee__item">
            {text}
          </span>
        );
      })}
    </div>
  );
};

export default Marquee;