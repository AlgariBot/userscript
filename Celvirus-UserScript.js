// ==UserScript==
// @name         Celvirus simple Bypass
// @namespace    http://tampermonkey.net/
// @version      1.0
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const remove = s =>
        document.querySelectorAll(s).forEach(e => e.remove());

    const edit = (s, fn) =>
        document.querySelectorAll(s).forEach(fn);

    const speed = () => {
        const style = document.createElement("style");
        style.textContent = `
            * {
                animation-duration: 0.000001s !important;
                animation-delay: 0s !important;
                transition-duration: 0.000001s !important;
                transition-delay: 0s !important;
                scroll-behavior: auto !important;
            }
        `;
        document.documentElement.appendChild(style);

        const t = window.setTimeout;
        const i = window.setInterval;

        window.setTimeout = (f) => t(f, 0);
        window.setInterval = (f) => i(f, 0);
    };

    const sites = {

        "youtube.com": () => {
          console.log("this is test")
        },


    };

    const host = location.hostname;

    for (const d in sites)
        if (host.includes(d))
            return sites[d
              ]();

})();
