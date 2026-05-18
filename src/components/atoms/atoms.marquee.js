import { useEffect, useState } from "react";

const Marquee = ({ texts }) => {
  const [activeText, setActiveText] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setActiveText((prev) => {
        if (prev === texts.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 3500);

    return () => clearInterval(intervalo);
  }, [texts.length]);

  return texts.map((text, i) => {
    return (
      <span key={i} className={`marquee__item ${i === activeText ? 'active' : ''}`} style={{ '--steps': text.length * 2 }} >
        {text}
      </span >
    );
  });
};

export default Marquee;