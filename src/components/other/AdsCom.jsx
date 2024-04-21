import React, { useEffect, useLayoutEffect } from "react";

const AdsCom = () => {
  useEffect(() => {
    // Load Google AdSense script asynchronously
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4138948380889817";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up: remove script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  useLayoutEffect(() => {
    // Render ad after script has loaded
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="ad-container" style={{ width: "100%", minHeight: "200px" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4138948380889817"
        data-ad-slot="6492796744"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdsCom;
