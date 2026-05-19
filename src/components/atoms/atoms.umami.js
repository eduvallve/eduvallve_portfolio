import { useEffect } from "react";

const Umami = () => {
    useEffect(() => {
        const id = process.env.REACT_APP_UMAMI_ID;

        if (!id) {
            console.warn("Umami ID missing");
            return;
        }

        const script = document.createElement("script");
        script.src = "https://cloud.umami.is/script.js";
        script.defer = true;
        script.setAttribute("data-website-id", id);

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return null;
};

export default Umami;