import React from "react";
import { Helmet } from "react-helmet";

const AdComponent = () => {
  const adCode = `
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4138948380889817" crossorigin="anonymous"></script>
    <ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4138948380889817"
      data-ad-slot="6492796744"
      data-ad-format="auto"
      data-full-width-responsive="true">
    </ins>
    <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
  `;

  return (
    <div>
      <Helmet>
        <script type="text/javascript">{adCode}</script>
      </Helmet>
    </div>
  );
};

export default AdComponent;
