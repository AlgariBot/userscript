// ==UserScript==
// @name Multi Site Short
// @match *://*/*
// @grant none
// @run-at document-start
// ==/UserScript==
// @match    *://modsfire.com/*

(function(){

const rm=s=>{
  const f=()=>document.querySelectorAll(s).forEach(e=>e.remove());
  f(); new MutationObserver(f)
  .observe(document,{childList:1,subtree:1});
};

const speed=()=>{
  const st=document.createElement("style");
  st.textContent="*,*::before,*::after{animation:none!important;transition:none!important}";
  document.documentElement.appendChild(st);
  const t=setTimeout,i=setInterval;
  window.setTimeout=f=>t(f,0);
  window.setInterval=f=>i(f,0);
  window.requestAnimationFrame=f=>t(f,0);
};

const sites={
  "modsfire.com":()=>{
    speed();
    rm("#.links-explore-wrp");
  }
};

const h=location.hostname;
for(const d in sites)
  if(h.includes(d)) return sites[d]();


})();
