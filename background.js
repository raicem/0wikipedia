window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();

browser.webRequest.onBeforeRequest.addListener((request) => {
    const newUrl = request.url.replace('wikipedia.org', '0wikipedia.org');
    console.log(newUrl);
    browser.tabs.update({ url: newUrl });
}, {urls: ["*://*.wikipedia.org/*"], types: ["main_frame"]});
