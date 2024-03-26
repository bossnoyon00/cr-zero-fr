import React from "react";
import { Helmet } from "react-helmet";

const AdsCom = () => {
  const adCode = `
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4138948380889817"
crossorigin="anonymous"></script>

<ins class="adsbygoogle"
style="display:block"
data-ad-client="ca-pub-4138948380889817"
data-ad-slot="6492796744"
data-ad-format="auto"
data-full-width-responsive="true"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
  `;

  return (
    <div>
      <Helmet>
        <script type="text/javascript">

          {`
            (function() {
              var ad = document.createElement('div');
              ad.className = 'adsbygoogle';
              ad.style.display = 'block';
              ad.style.backgroundColor = 'transparent';
              ad.style.height = '90px'; // Adjust the height as needed
              ad.style.width = '728px'; // Adjust the width as needed
              ad.setAttribute('data-ad-client', 'ca-pub-4138948380889817');
              ad.setAttribute('data-ad-slot', '6492796744');
              document.getElementById('ad-container').appendChild(ad);
            })();
          `}
        </script>
      </Helmet>
      <div id="ad-container" style={{ textAlign: "center" }}></div>
    </div>
  );
};

export default AdsCom;
