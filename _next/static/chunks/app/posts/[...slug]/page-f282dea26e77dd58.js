(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[49],{7180:function(e,t,n){Promise.resolve().then(n.t.bind(n,6996,23)),Promise.resolve().then(n.t.bind(n,9297,23)),Promise.resolve().then(n.t.bind(n,190,23)),Promise.resolve().then(n.t.bind(n,2666,23)),Promise.resolve().then(n.t.bind(n,2011,23)),Promise.resolve().then(n.t.bind(n,7951,23)),Promise.resolve().then(n.bind(n,1753))},1753:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var o=n(9268),l=n(6006),r=n(8505),s=n.n(r);function i(){return(0,l.useEffect)(()=>(s().init({tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3",collapseDepth:5,scrollSmooth:!1}),()=>s().destroy()),[]),(0,o.jsx)("div",{className:"js-toc my-toc"})}},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=n(6006),l=Symbol.for("react.element"),r=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};t.jsx=function(e,t,n){var o,c={},a=null,u=null;for(o in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(u=t.ref),t)r.call(t,o)&&!i.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{$$typeof:l,type:e,key:a,ref:u,props:c,_owner:s.current}}},9268:function(e,t,n){"use strict";e.exports=n(3177)},8042:function(e){e.exports=function(e){var t,n=[].forEach,o=[].some,l=document.body,r=!0;function s(t){var n=e.orderedList?"ol":"ul",o=document.createElement(n),l=e.listClass+" "+e.extraListClasses;return t&&(l=(l=l+" "+e.collapsibleClass)+" "+e.isCollapsedClass),o.setAttribute("class",l),o}return{enableTocAnimation:function(){r=!0},disableTocAnimation:function(t){var n=t.target||t.srcElement;"string"==typeof n.className&&-1!==n.className.indexOf(e.linkClass)&&(r=!1)},render:function(o,l){var r=s(!1);return(l.forEach(function(t){!function t(o,l){var r,i,c=l.appendChild((r=document.createElement("li"),i=document.createElement("a"),e.listItemClass&&r.setAttribute("class",e.listItemClass),e.onClick&&(i.onclick=e.onClick),e.includeTitleTags&&i.setAttribute("title",o.textContent),e.includeHtml&&o.childNodes.length?n.call(o.childNodes,function(e){i.appendChild(e.cloneNode(!0))}):i.textContent=o.textContent,i.setAttribute("href",e.basePath+"#"+o.id),i.setAttribute("class",e.linkClass+" node-name--"+o.nodeName+" "+e.extraLinkClasses),r.appendChild(i),r));if(o.children.length){var a=s(o.isCollapsed);o.children.forEach(function(e){t(e,a)}),c.appendChild(a)}}(t,r)}),null===(t=o||t))?void 0:(t.firstChild&&t.removeChild(t.firstChild),0===l.length)?t:t.appendChild(r)},updateToc:function(s){var i,c;if(i=e.scrollContainer&&document.querySelector(e.scrollContainer)?document.querySelector(e.scrollContainer).scrollTop:document.documentElement.scrollTop||l.scrollTop,e.positionFixedSelector&&function(){if(e.scrollContainer&&document.querySelector(e.scrollContainer)){var n;n=document.querySelector(e.scrollContainer).scrollTop}else n=document.documentElement.scrollTop||l.scrollTop;var o=document.querySelector(e.positionFixedSelector);"auto"===e.fixedSidebarOffset&&(e.fixedSidebarOffset=t.offsetTop),n>e.fixedSidebarOffset?-1===o.className.indexOf(e.positionFixedClass)&&(o.className+=" "+e.positionFixedClass):o.className=o.className.split(" "+e.positionFixedClass).join("")}(),r&&null!==t&&s.length>0){o.call(s,function(t,n){return function t(n){var o=0;return null!==n&&(o=n.offsetTop,e.hasInnerContainers&&(o+=t(n.offsetParent))),o}(t)>i+e.headingsOffset+10?(c=s[0===n?n:n-1],!0):n===s.length-1?(c=s[s.length-1],!0):void 0});var a=t.querySelector("."+e.activeLinkClass),u=t.querySelector("."+e.linkClass+".node-name--"+c.nodeName+'[href="'+e.basePath+"#"+c.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g,"\\$1")+'"]');if(a===u)return;var d=t.querySelectorAll("."+e.linkClass);n.call(d,function(t){t.className=t.className.split(" "+e.activeLinkClass).join("")});var f=t.querySelectorAll("."+e.listItemClass);n.call(f,function(t){t.className=t.className.split(" "+e.activeListItemClass).join("")}),u&&-1===u.className.indexOf(e.activeLinkClass)&&(u.className+=" "+e.activeLinkClass);var m=u&&u.parentNode;m&&-1===m.className.indexOf(e.activeListItemClass)&&(m.className+=" "+e.activeListItemClass);var h=t.querySelectorAll("."+e.listClass+"."+e.collapsibleClass);n.call(h,function(t){-1===t.className.indexOf(e.isCollapsedClass)&&(t.className+=" "+e.isCollapsedClass)}),u&&u.nextSibling&&-1!==u.nextSibling.className.indexOf(e.isCollapsedClass)&&(u.nextSibling.className=u.nextSibling.className.split(" "+e.isCollapsedClass).join("")),function t(n){return n&&-1!==n.className.indexOf(e.collapsibleClass)&&-1!==n.className.indexOf(e.isCollapsedClass)?(n.className=n.className.split(" "+e.isCollapsedClass).join(""),t(n.parentNode.parentNode)):n}(u&&u.parentNode.parentNode)}}}}},7272:function(e){e.exports={tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3",ignoreSelector:".js-toc-ignore",hasInnerContainers:!1,linkClass:"toc-link",extraLinkClasses:"",activeLinkClass:"is-active-link",listClass:"toc-list",extraListClasses:"",isCollapsedClass:"is-collapsed",collapsibleClass:"is-collapsible",listItemClass:"toc-list-item",activeListItemClass:"is-active-li",collapseDepth:0,scrollSmooth:!0,scrollSmoothDuration:420,scrollSmoothOffset:0,scrollEndCallback:function(e){},headingsOffset:1,throttleTimeout:50,positionFixedSelector:null,positionFixedClass:"is-position-fixed",fixedSidebarOffset:"auto",includeHtml:!1,includeTitleTags:!1,onClick:function(e){},orderedList:!0,scrollContainer:null,skipRendering:!1,headingLabelCallback:!1,ignoreHiddenElements:!1,headingObjectCallback:null,basePath:"",disableTocScrollSync:!1,tocScrollOffset:0}},8505:function(e,t,n){var o,l;void 0!==(l="function"==typeof(o=function(e){"use strict";var t,o,l,r=n(7272),s={},i={},c=n(8042),a=n(6644),u=n(930),d=!!e&&!!e.document&&!!e.document.querySelector&&!!e.addEventListener;if("undefined"!=typeof window||d){var f=Object.prototype.hasOwnProperty;return i.destroy=function(){var e=h(s);null!==e&&(!s.skipRendering&&e&&(e.innerHTML=""),s.scrollContainer&&document.querySelector(s.scrollContainer)?(document.querySelector(s.scrollContainer).removeEventListener("scroll",this._scrollListener,!1),document.querySelector(s.scrollContainer).removeEventListener("resize",this._scrollListener,!1),t&&document.querySelector(s.scrollContainer).removeEventListener("click",this._clickListener,!1)):(document.removeEventListener("scroll",this._scrollListener,!1),document.removeEventListener("resize",this._scrollListener,!1),t&&document.removeEventListener("click",this._clickListener,!1)))},i.init=function(e){if(d){s=function(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)f.call(n,o)&&(e[o]=n[o])}return e}(r,e||{}),this.options=s,this.state={},s.scrollSmooth&&(s.duration=s.scrollSmoothDuration,s.offset=s.scrollSmoothOffset,i.scrollSmooth=n(4150).initSmoothScrolling(s)),t=c(s),o=a(s),this._buildHtml=t,this._parseContent=o,this._headingsArray=l,i.destroy();var p=function(e){try{return e.contentElement||document.querySelector(e.contentSelector)}catch(t){return console.warn("Contents element not found: "+e.contentSelector),null}}(s);if(null!==p){var C=h(s);if(null!==C&&null!==(l=o.selectHeadings(p,s.headingSelector))){var v=o.nestHeadingsArray(l).nest;s.skipRendering||t.render(C,v),this._scrollListener=m(function(e){t.updateToc(l),s.disableTocScrollSync||u(s);var n=e&&e.target&&e.target.scrollingElement&&0===e.target.scrollingElement.scrollTop;(e&&(0===e.eventPhase||null===e.currentTarget)||n)&&(t.updateToc(l),s.scrollEndCallback&&s.scrollEndCallback(e))},s.throttleTimeout),this._scrollListener(),s.scrollContainer&&document.querySelector(s.scrollContainer)?(document.querySelector(s.scrollContainer).addEventListener("scroll",this._scrollListener,!1),document.querySelector(s.scrollContainer).addEventListener("resize",this._scrollListener,!1)):(document.addEventListener("scroll",this._scrollListener,!1),document.addEventListener("resize",this._scrollListener,!1));var g=null;return this._clickListener=m(function(e){s.scrollSmooth&&t.disableTocAnimation(e),t.updateToc(l),g&&clearTimeout(g),g=setTimeout(function(){t.enableTocAnimation()},s.scrollSmoothDuration)},s.throttleTimeout),s.scrollContainer&&document.querySelector(s.scrollContainer)?document.querySelector(s.scrollContainer).addEventListener("click",this._clickListener,!1):document.addEventListener("click",this._clickListener,!1),this}}}},i.refresh=function(e){i.destroy(),i.init(e||this.options)},e.tocbot=i,i}function m(e,t,n){var o,l;return t||(t=250),function(){var r=n||this,s=+new Date,i=arguments;o&&s<o+t?(clearTimeout(l),l=setTimeout(function(){o=s,e.apply(r,i)},t)):(o=s,e.apply(r,i))}}function h(e){try{return e.tocElement||document.querySelector(e.tocSelector)}catch(t){return console.warn("TOC element not found: "+e.tocSelector),null}}}(void 0!==n.g?n.g:window||n.g))?o.apply(t,[]):o)&&(e.exports=l)},6644:function(e){e.exports=function(e){var t=[].reduce;function n(e){return e[e.length-1]}function o(t){if(!(t instanceof window.HTMLElement))return t;if(e.ignoreHiddenElements&&(!t.offsetHeight||!t.offsetParent))return null;let n=t.getAttribute("data-heading-label")||(e.headingLabelCallback?String(e.headingLabelCallback(t.textContent)):t.textContent.trim());var o={id:t.id,children:[],nodeName:t.nodeName,headingLevel:+t.nodeName.toUpperCase().replace("H",""),textContent:n};return(e.includeHtml&&(o.childNodes=t.childNodes),e.headingObjectCallback)?e.headingObjectCallback(o,t):o}return{nestHeadingsArray:function(l){return t.call(l,function(t,l){var r=o(l);return r&&function(t,l){for(var r=o(t),s=r.headingLevel,i=l,c=n(i),a=s-(c?c.headingLevel:0);a>0&&(!(c=n(i))||s!==c.headingLevel);)c&&void 0!==c.children&&(i=c.children),a--;s>=e.collapseDepth&&(r.isCollapsed=!0),i.push(r)}(r,t.nest),t},{nest:[]})},selectHeadings:function(t,n){var o=n;e.ignoreSelector&&(o=n.split(",").map(function(t){return t.trim()+":not("+e.ignoreSelector+")"}));try{return t.querySelectorAll(o)}catch(e){return console.warn("Headers not found with selector: "+o),null}}}}},4150:function(e,t){t.initSmoothScrolling=function(e){var t=e.duration,n=e.offset,o=location.hash?l(location.href):location.href;function l(e){return e.slice(0,e.lastIndexOf("#"))}document.body.addEventListener("click",function(r){var s,i,c,a,u,d,f,m,h;if(!(!("a"===(s=r.target).tagName.toLowerCase()&&(s.hash.length>0||"#"===s.href.charAt(s.href.length-1))&&(l(s.href)===o||l(s.href)+"#"===o))||r.target.className.indexOf("no-smooth-scroll")>-1)&&("#"!==r.target.href.charAt(r.target.href.length-2)||"!"!==r.target.href.charAt(r.target.href.length-1))&&-1!==r.target.className.indexOf(e.linkClass)){i=r.target.hash,c={duration:t,offset:n,callback:function(){var e,t;e=r.target.hash,(t=document.getElementById(e.substring(1)))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())}},u=window.pageYOffset,d={duration:c.duration,offset:c.offset||0,callback:c.callback,easing:c.easing||function(e,t,n,o){return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}},f=document.querySelector('[id="'+decodeURI(i).split("#").join("")+'"]')||document.querySelector('[id="'+i.split("#").join("")+'"]'),m="string"==typeof i?d.offset+(i?f&&f.getBoundingClientRect().top||0:-(document.documentElement.scrollTop||document.body.scrollTop)):i,h="function"==typeof d.duration?d.duration(m):d.duration,requestAnimationFrame(function(e){!function t(n){a=n-e,window.scrollTo(0,d.easing(a,u,m,h)),a<h?requestAnimationFrame(t):(window.scrollTo(0,u+m),"function"==typeof d.callback&&d.callback())}(e)})}},!1)}},930:function(e){e.exports=function(e){var t=e.tocElement||document.querySelector(e.tocSelector);if(t&&t.scrollHeight>t.clientHeight){var n=t.querySelector("."+e.activeListItemClass);n&&(t.scrollTop=n.offsetTop-e.tocScrollOffset)}}}},function(e){e.O(0,[110,667,139,744],function(){return e(e.s=7180)}),_N_E=e.O()}]);