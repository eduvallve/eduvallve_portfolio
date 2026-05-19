import { useEffect } from "react";

const Umami = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cloud.umami.is/script.js';
        script.async = true;
        script.dataset.websiteId = process.env.REACT_APP_UMAMI_ID;
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script);
        };
    }, []);
}

export default Umami;