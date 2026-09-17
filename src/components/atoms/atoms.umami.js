import { useEffect } from "react";

const Umami = () => {
  const umamiId = process.env.REACT_APP_UMAMI_ID;

  useEffect(() => {
    if (!umamiId) {
      console.warn("Umami ID missing");
      return;
    }

    // 1. Comprovació de desactivació nativa d'Umami guardada al navegador
    if (typeof window !== "undefined" && window.localStorage?.getItem("umami.disabled") === "1") {
      console.info("Umami desactivat per a aquest navegador (admin).");
      return;
    }

    // 2. Comprovació d'entorn de desenvolupament o xarxa local
    const isLocal =
      process.env.NODE_ENV === "development" ||
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname.startsWith("192.168.");

    if (isLocal) {
      console.info("Entorn local. NO inicialitza Umami.");
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cloud.umami.is/script.js";
    script.defer = true;
    script.setAttribute("data-website-id", umamiId);

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [umamiId]);

  return null;
};

export default Umami;
