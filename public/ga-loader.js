// Cookieless GA4 configuration - Load after page interactive
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }

// Defer GA loading until after page is interactive (3s delay to optimize TBT)
if (document.readyState === 'complete') {
  setTimeout(loadGA, 3000);
} else {
  window.addEventListener('load', function() {
    setTimeout(loadGA, 3000);
  });
}

function loadGA() {
  var script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-PHMH5V5651';
  script.async = true;
  script.onload = function() {
    gtag('js', new Date());
    gtag('config', 'G-PHMH5V5651', {
      client_storage: 'none',
      anonymize_ip: true
    });
  };
  document.head.appendChild(script);
}
