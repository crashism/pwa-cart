(this["webpackJsonppwa-cart"]=this["webpackJsonppwa-cart"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r,c=n(1),i=n.n(c),o=n(6),l=n.n(o),a=(n(12),n(2)),s=n(7);n(13);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function j(e,t){var n=e.title,i=e.titleId,o=d(e,["title","titleId"]);return c.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",ref:t,"aria-labelledby":i},o),void 0===n?c.createElement("title",{id:i},"Close"):n?c.createElement("title",{id:i},n):null,r||(r=c.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:32,d:"M368 368L144 144M368 144L144 368"})))}var b,h=c.forwardRef(j);n.p;function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function O(e,t){var n=e.title,r=e.titleId,i=p(e,["title","titleId"]);return c.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",ref:t,"aria-labelledby":r},i),void 0===n?c.createElement("title",{id:r},"Add"):n?c.createElement("title",{id:r},n):null,b||(b=c.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:32,d:"M256 112v288M400 256H112"})))}var v=c.forwardRef(O),g=(n.p,n(0)),m=function(e){var t=Object(c.useState)(window.innerWidth),n=Object(a.a)(t,2),r=n[0],i=n[1],o=(Object(c.useRef)(),Object(c.useState)(0)),l=Object(a.a)(o,2),u=l[0],d=l[1],j=Object(c.useState)([{id:0,title:"",price:"",num:1}]),b=Object(a.a)(j,2),f=b[0],p=b[1],O=Object(c.useState)(0),m=Object(a.a)(O,2),x=(m[0],m[1]);Object(c.useEffect)((function(){i(window.innerWidth)})),Object(c.useEffect)((function(){var t=0;f.forEach((function(e){e.price.length>0&&(t+=parseFloat(e.price)*e.num)})),"undefined"!==typeof t&&x(t),e.onSum(t)}),[f]),Object(c.useEffect)((function(){d(u+1)}),[f.length]);var w=function(e,t,n,r){var c=f.map((function(c){return c.id===e?{id:e,title:t,price:n,num:r}:c}));p(c)},y=Object(g.jsxs)("colgroup",{children:[Object(g.jsx)("col",{style:{width:"60%"}}),Object(g.jsx)("col",{style:{width:"20%"}}),Object(g.jsx)("col",{style:{width:"10%"}}),Object(g.jsx)("col",{style:{width:"10%"}})]}),k=Object(g.jsxs)("colgroup",{children:[Object(g.jsx)("col",{style:{width:"45%"}}),Object(g.jsx)("col",{style:{width:"25%"}}),Object(g.jsx)("col",{style:{width:"20%"}}),Object(g.jsx)("col",{style:{width:"10%"}})]});return Object(g.jsxs)("section",{children:[Object(g.jsx)("div",{className:"tbl-header",children:Object(g.jsxs)("table",{children:[r>720?y:k,Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Title"}),Object(g.jsx)("th",{children:"Price"}),Object(g.jsx)("th",{children:"Count"}),Object(g.jsx)("th",{})]})})]})}),Object(g.jsx)("div",{className:"inputField",children:f.map((function(e){return Object(g.jsx)("div",{className:"tbl-content",children:Object(g.jsxs)("table",{children:[r>720?y:k,Object(g.jsx)("tbody",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:Object(g.jsx)("div",{className:"inputContainer",children:Object(g.jsx)("input",{className:"inputPrompt",type:"text",name:"item",onChange:function(t){return w(e.id,t.target.value,e.price,e.num)},value:e.title})})}),Object(g.jsx)("td",{children:Object(g.jsx)("div",{className:"inputContainer",children:Object(g.jsx)("input",{className:"inputPrompt",type:"number",name:"price",onChange:function(t){return w(e.id,e.title,t.target.value,e.num)},value:e.price.toLocaleString()})})}),Object(g.jsx)("td",{children:Object(g.jsx)("div",{className:"inputContainer",children:Object(g.jsx)("input",{style:{textAlign:"center"},className:"inputPrompt numbers",type:"number",name:"count",onChange:function(t){return w(e.id,e.title,e.price,t.target.value)},value:e.num})})}),Object(g.jsx)("td",{children:Object(g.jsx)("div",{className:"inputContainer",children:Object(g.jsx)("button",{onClick:function(t){return function(e){var t=f.filter((function(t){return t.id!==e}));p(t)}(e.id)},children:Object(g.jsx)(h,{className:"close-svg"})})})})]})})]})})}))}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{onClick:function(){p([].concat(Object(s.a)(f),[{id:u,title:"",price:"",num:1}]))},children:Object(g.jsx)(v,{className:"add-svg"})})})]})};n(15);var x=function(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("header",{style:{alignItems:"flex-end"},className:"App-header",children:Object(g.jsx)("div",{style:{marginRight:20,color:"rgb(204, 83, 27)"},children:Object(g.jsxs)("h3",{children:["Sum = ",n.toLocaleString()]})})}),Object(g.jsx)("div",{children:Object(g.jsx)(m,{onSum:function(e){return r(e)}})})]})},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),i(e),o(e)}))};l.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(x,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pwa-cart",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/pwa-cart","/service-worker.js");w?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):y(t,e)}))}}(),k()}},[[16,1,2]]]);
//# sourceMappingURL=main.cb1c1a8e.chunk.js.map