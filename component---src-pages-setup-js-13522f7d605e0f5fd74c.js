(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{175:function(e,t,n){"use strict";n.r(t);n(34),n(183);var r=n(0),a=n.n(r),i=n(176),o=n(186),u=n.n(o),c=n(179);function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={pitch:1,rate:1},n.hanbleChange=n.hanbleChange.bind(s(n)),n.hanbleClickSave=n.hanbleClickSave.bind(s(n)),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.componentWillMount=function(){this.setState({pitch:Number(u.a.load("pitch"))||1,rate:Number(u.a.load("rate"))||1})},o.hanbleChange=function(e){var t,n=e.target;this.setState(((t={})[n.name]=n.value,t))},o.hanbleClickSave=function(){u.a.save("pitch",this.state.pitch,{path:"/"}),u.a.save("rate",this.state.rate,{path:"/"})},o.render=function(){return a.a.createElement(c.a,null,a.a.createElement("h1",null,"setup"),"คิวที่ xxx ค่ะ ",a.a.createElement("br",null),a.a.createElement("label",null,"Pitch:")," ",a.a.createElement("input",{name:"pitch",value:this.state.pitch,onChange:this.hanbleChange}),a.a.createElement("br",null),a.a.createElement("label",null,"Rate:")," ",a.a.createElement("input",{name:"rate",value:this.state.rate,onChange:this.hanbleChange}),a.a.createElement("br",null),a.a.createElement("button",{onClick:this.hanbleClickSave},"บันทึก"),a.a.createElement("br",null),a.a.createElement(i.a,{to:"/"},"Go back to the homepage"))},r}(a.a.Component);t.default=l},176:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(11),o=n.n(i),u=n(58),c=n.n(u);n.d(t,"a",function(){return c.a});n(177),a.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},177:function(e,t,n){var r;e.exports=(r=n(178))&&r.default||r},178:function(e,t,n){"use strict";n.r(t);n(22);var r=n(0),a=n.n(r),i=n(11),o=n.n(i),u=n(84),c=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},179:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(11),o=n.n(i),u=n(176),c=function(e){var t=e.siteTitle;return a.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},a.a.createElement("h1",{style:{margin:0}},a.a.createElement(u.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};c.propTypes={siteTitle:o.a.string},c.defaultProps={siteTitle:""};var s=c,l=(n(180),function(e){var t=e.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(s,{siteTitle:"Text to speech"}),a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},a.a.createElement("main",null,t),a.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",a.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))});l.propTypes={children:o.a.node.isRequired};t.a=l},183:function(e,t,n){"use strict";var r=n(3),a=n(17),i=n(30),o=n(117),u=n(60),c=n(8),s=n(82).f,l=n(85).f,f=n(13).f,p=n(184).trim,h=r.Number,d=h,m=h.prototype,v="Number"==i(n(61)(m)),g="trim"in String.prototype,y=function(e){var t=u(e,!1);if("string"==typeof t&&t.length>2){var n,r,a,i=(t=g?t.trim():p(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var o,c=t.slice(2),s=0,l=c.length;s<l;s++)if((o=c.charCodeAt(s))<48||o>a)return NaN;return parseInt(c,r)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof h&&(v?c(function(){m.valueOf.call(n)}):"Number"!=i(n))?o(new d(y(t)),n,h):y(t)};for(var b,w=n(9)?s(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;w.length>E;E++)a(d,b=w[E])&&!a(h,b)&&f(h,b,l(d,b));h.prototype=m,m.constructor=h,n(14)(r,"Number",h)}},184:function(e,t,n){var r=n(6),a=n(36),i=n(8),o=n(185),u="["+o+"]",c=RegExp("^"+u+u+"*"),s=RegExp(u+u+"*$"),l=function(e,t,n){var a={},u=i(function(){return!!o[e]()||"​"!="​"[e]()}),c=a[e]=u?t(f):o[e];n&&(a[n]=c),r(r.P+r.F*u,"String",a)},f=l.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(s,"")),e};e.exports=l},185:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},186:function(e,t,n){"use strict";(function(e){n(29),n(21),n(12),n(44),n(34),n(59),n(45),Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.load=f,t.loadAll=p,t.select=h,t.save=d,t.remove=m,t.setRawCookie=v,t.plugToRequest=g;var a=o(n(188)),i=o(n(83));function o(e){return e&&e.__esModule?e:{default:e}}var u="undefined"==typeof document||void 0!==e&&{}&&!1,c={},s=void 0;function l(){return s&&!s.headersSent}function f(e,t){var n=u?c:a.default.parse(document.cookie),r=n&&n[e];if(void 0===t&&(t=!r||"{"!==r[0]&&"["!==r[0]),!t)try{r=JSON.parse(r)}catch(i){}return r}function p(e){var t=u?c:a.default.parse(document.cookie);if(void 0===e&&(e=!t||"{"!==t[0]&&"["!==t[0]),!e)try{t=JSON.parse(t)}catch(n){}return t}function h(e){var t=u?c:a.default.parse(document.cookie);return t?e?Object.keys(t).reduce(function(n,r){if(!e.test(r))return n;var a={};return a[r]=t[r],(0,i.default)({},n,a)},{}):t:{}}function d(e,t,n){c[e]=t,"object"===(void 0===t?"undefined":r(t))&&(c[e]=JSON.stringify(t)),u||(document.cookie=a.default.serialize(e,c[e],n)),l()&&s.cookie&&s.cookie(e,t,n)}function m(e,t){delete c[e],t=void 0===t?{}:"string"==typeof t?{path:t}:(0,i.default)({},t),"undefined"!=typeof document&&(t.expires=new Date(1970,1,1,0,0,1),t.maxAge=0,document.cookie=a.default.serialize(e,"",t)),l()&&s.clearCookie&&s.clearCookie(e,t)}function v(e){c=e?a.default.parse(e):{}}function g(e,t){return e.cookie?c=e.cookie:e.cookies?c=e.cookies:e.headers&&e.headers.cookie?v(e.headers.cookie):c={},s=t,function(){s=null,c={}}}t.default={setRawCookie:v,load:f,loadAll:p,select:h,save:d,remove:m,plugToRequest:g}}).call(this,n(187))},187:function(e,t){var n,r,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,s=[],l=!1,f=-1;function p(){l&&c&&(l=!1,c.length?s=c.concat(s):f=-1,s.length&&h())}function h(){if(!l){var e=u(p);l=!0;for(var t=s.length;t;){for(c=s,s=[];++f<t;)c&&c[f].run();f=-1,t=s.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function m(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new d(e,t)),1!==s.length||l||u(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=m,a.addListener=m,a.once=m,a.off=m,a.removeListener=m,a.removeAllListeners=m,a.emit=m,a.prependListener=m,a.prependOnceListener=m,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},188:function(e,t,n){"use strict";n(35),t.parse=function(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var n={},a=t||{},o=e.split(i),c=a.decode||r,s=0;s<o.length;s++){var l=o[s],f=l.indexOf("=");if(!(f<0)){var p=l.substr(0,f).trim(),h=l.substr(++f,l.length).trim();'"'==h[0]&&(h=h.slice(1,-1)),null==n[p]&&(n[p]=u(h,c))}}return n},t.serialize=function(e,t,n){var r=n||{},i=r.encode||a;if("function"!=typeof i)throw new TypeError("option encode is invalid");if(!o.test(e))throw new TypeError("argument name is invalid");var u=i(t);if(u&&!o.test(u))throw new TypeError("argument val is invalid");var c=e+"="+u;if(null!=r.maxAge){var s=r.maxAge-0;if(isNaN(s))throw new Error("maxAge should be a Number");c+="; Max-Age="+Math.floor(s)}if(r.domain){if(!o.test(r.domain))throw new TypeError("option domain is invalid");c+="; Domain="+r.domain}if(r.path){if(!o.test(r.path))throw new TypeError("option path is invalid");c+="; Path="+r.path}if(r.expires){if("function"!=typeof r.expires.toUTCString)throw new TypeError("option expires is invalid");c+="; Expires="+r.expires.toUTCString()}r.httpOnly&&(c+="; HttpOnly");r.secure&&(c+="; Secure");if(r.sameSite){var l="string"==typeof r.sameSite?r.sameSite.toLowerCase():r.sameSite;switch(l){case!0:c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"strict":c+="; SameSite=Strict";break;default:throw new TypeError("option sameSite is invalid")}}return c};var r=decodeURIComponent,a=encodeURIComponent,i=/; */,o=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function u(e,t){try{return t(e)}catch(n){return e}}}}]);
//# sourceMappingURL=component---src-pages-setup-js-13522f7d605e0f5fd74c.js.map