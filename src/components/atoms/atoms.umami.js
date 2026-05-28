import { useEffect } from "react";

const Umami = () => {
  const adminIp = process.env.REACT_APP_ADMIN_IP;
  const umamiId = process.env.REACT_APP_UMAMI_ID;

  useEffect(() => {
    if (!umamiId) {
      console.warn("Umami ID missing");
      return;
    }

    let script;

    fetch("https://api.ipify.org?format=json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`IP fetch failed (${response.status})`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("IP fetched:", data.ip);

        if (data.ip === adminIp) {
          console.warn("Xarxa local. NO inicialitza Umami.");
          return;
        }

        script = document.createElement("script");
        script.src = "https://cloud.umami.is/script.js";
        script.defer = true;
        script.setAttribute("data-website-id", umamiId);

        document.head.appendChild(script);
      })
      .catch((error) => console.error("Error al obtener la IP:", error));

    return () => {
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, [adminIp, umamiId]);

  return null;
};

export default Umami;
