import { useEffect } from "react";

const useScript = (url) => {
  useEffect(() => {
    console.log("hi");
    const script = document.createElement("script");

    script.src = url;
    script.async = false;

    document.body.appendChild(script);
    console.log(document.body);

    return () => {
      // document.body.removeChild(script);
    };
  }, [url]);
};

export default useScript;
