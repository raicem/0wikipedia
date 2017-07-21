window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();

function redirect (requestDetails) {
    return {
        redirectUrl: requestDetails.url.replace("wikipedia.org", "0wikipedia.org")
    }
}

browser.webRequest.onBeforeRequest.addListener(
    redirect,
    {urls: ["*://*.wikipedia.org/*"], types: ["main_frame"]},
    ["blocking"]  
);