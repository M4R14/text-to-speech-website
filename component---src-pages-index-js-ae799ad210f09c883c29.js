(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{173:function(e,t,r){"use strict";r.r(t);r(86),r(12),r(183);var n=r(0),i=r.n(n),o=r(176),a=r(186),u=r.n(a),s=r(179);function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).state={inputText:"",number:[],pitch:0,rate:0},r.handleChange=r.handleChange.bind(c(r)),r.handleKeyPress=r.handleKeyPress.bind(c(r)),r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=n.prototype;return o.componentWillMount=function(){this.setState({pitch:Number(u.a.load("pitch"))||0,rate:Number(u.a.load("rate"))||0})},o.handleChange=function(e){var t=e.target;this.setState({inputText:t.value})},o.handleKeyPress=function(e){var t=this,r=e.key;if(console.log(e.key,e),"Enter"==r&&""!=this.state.inputText){var n=Number(this.state.inputText),i=this.state.number;i=n>0?[n].concat(i.filter(function(e){return e!=n})):i.filter(function(e){return e!=-1*n}),this.setState({inputText:"",number:i},function(){if(n>0){for(var e="คิวที่, ",r=0;r<i[0].toString().length;r++)e+=i[0].toString()[r]+", ";e+="ค่ะ";var o=window.speechSynthesis,a=new SpeechSynthesisUtterance(e);a.lang="th-TH",a.pitch=t.state.pitch,a.rate=t.state.rate,o.speak(a)}})}},o.render=function(){return i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",{style:{width:"80%",textAlign:"center"}},i.a.createElement("h1",{style:{fontSize:"15rem"}},this.state.number[0]),i.a.createElement("audio",{id:"myAudio"},i.a.createElement("source",{src:"horse.ogg",type:"audio/ogg"}),i.a.createElement("source",{src:"horse.mp3",type:"audio/mpeg"}),"Your browser does not support the audio element.")),i.a.createElement("div",{style:{width:"20%"}},i.a.createElement("input",{onKeyPress:this.handleKeyPress,onChange:this.handleChange,value:this.state.inputText}),i.a.createElement("ol",null,this.state.number.map(function(e){return i.a.createElement("li",{key:e},e)}))))},n}(i.a.Component);t.default=function(){return i.a.createElement(s.a,null,i.a.createElement(o.a,{to:"/setup"},"setup"),i.a.createElement(l,null))}},176:function(e,t,r){"use strict";var n=r(0),i=r.n(n),o=r(11),a=r.n(o),u=r(58),s=r.n(u);r.d(t,"a",function(){return s.a});r(177),i.a.createContext({});a.a.object,a.a.string.isRequired,a.a.func,a.a.func},177:function(e,t,r){var n;e.exports=(n=r(178))&&n.default||n},178:function(e,t,r){"use strict";r.r(t);r(22);var n=r(0),i=r.n(n),o=r(11),a=r.n(o),u=r(84),s=function(e){var t=e.location,r=e.pageResources;return r?i.a.createElement(u.a,Object.assign({location:t,pageResources:r},r.json)):null};s.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=s},179:function(e,t,r){"use strict";var n=r(0),i=r.n(n),o=r(11),a=r.n(o),u=r(176),s=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(u.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};s.propTypes={siteTitle:a.a.string},s.defaultProps={siteTitle:""};var c=s,l=(r(180),function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c,{siteTitle:"Text to speech"}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))});l.propTypes={children:a.a.node.isRequired};t.a=l},183:function(e,t,r){"use strict";var n=r(3),i=r(17),o=r(30),a=r(117),u=r(60),s=r(8),c=r(82).f,l=r(85).f,f=r(13).f,p=r(184).trim,d=n.Number,h=d,m=d.prototype,y="Number"==o(r(61)(m)),v="trim"in String.prototype,g=function(e){var t=u(e,!1);if("string"==typeof t&&t.length>2){var r,n,i,o=(t=v?t.trim():p(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+t}for(var a,s=t.slice(2),c=0,l=s.length;c<l;c++)if((a=s.charCodeAt(c))<48||a>i)return NaN;return parseInt(s,n)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof d&&(y?s(function(){m.valueOf.call(r)}):"Number"!=o(r))?a(new h(g(t)),r,d):g(t)};for(var w,E=r(9)?c(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;E.length>b;b++)i(h,w=E[b])&&!i(d,w)&&f(d,w,l(h,w));d.prototype=m,m.constructor=d,r(14)(n,"Number",d)}},184:function(e,t,r){var n=r(6),i=r(36),o=r(8),a=r(185),u="["+a+"]",s=RegExp("^"+u+u+"*"),c=RegExp(u+u+"*$"),l=function(e,t,r){var i={},u=o(function(){return!!a[e]()||"​"!="​"[e]()}),s=i[e]=u?t(f):a[e];r&&(i[r]=s),n(n.P+n.F*u,"String",i)},f=l.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(c,"")),e};e.exports=l},185:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},186:function(e,t,r){"use strict";(function(e){r(29),r(21),r(12),r(44),r(34),r(59),r(45),Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.load=f,t.loadAll=p,t.select=d,t.save=h,t.remove=m,t.setRawCookie=y,t.plugToRequest=v;var i=a(r(188)),o=a(r(83));function a(e){return e&&e.__esModule?e:{default:e}}var u="undefined"==typeof document||void 0!==e&&{}&&!1,s={},c=void 0;function l(){return c&&!c.headersSent}function f(e,t){var r=u?s:i.default.parse(document.cookie),n=r&&r[e];if(void 0===t&&(t=!n||"{"!==n[0]&&"["!==n[0]),!t)try{n=JSON.parse(n)}catch(o){}return n}function p(e){var t=u?s:i.default.parse(document.cookie);if(void 0===e&&(e=!t||"{"!==t[0]&&"["!==t[0]),!e)try{t=JSON.parse(t)}catch(r){}return t}function d(e){var t=u?s:i.default.parse(document.cookie);return t?e?Object.keys(t).reduce(function(r,n){if(!e.test(n))return r;var i={};return i[n]=t[n],(0,o.default)({},r,i)},{}):t:{}}function h(e,t,r){s[e]=t,"object"===(void 0===t?"undefined":n(t))&&(s[e]=JSON.stringify(t)),u||(document.cookie=i.default.serialize(e,s[e],r)),l()&&c.cookie&&c.cookie(e,t,r)}function m(e,t){delete s[e],t=void 0===t?{}:"string"==typeof t?{path:t}:(0,o.default)({},t),"undefined"!=typeof document&&(t.expires=new Date(1970,1,1,0,0,1),t.maxAge=0,document.cookie=i.default.serialize(e,"",t)),l()&&c.clearCookie&&c.clearCookie(e,t)}function y(e){s=e?i.default.parse(e):{}}function v(e,t){return e.cookie?s=e.cookie:e.cookies?s=e.cookies:e.headers&&e.headers.cookie?y(e.headers.cookie):s={},c=t,function(){c=null,s={}}}t.default={setRawCookie:y,load:f,loadAll:p,select:d,save:h,remove:m,plugToRequest:v}}).call(this,r(187))},187:function(e,t){var r,n,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var s,c=[],l=!1,f=-1;function p(){l&&s&&(l=!1,s.length?c=s.concat(c):f=-1,c.length&&d())}function d(){if(!l){var e=u(p);l=!0;for(var t=c.length;t;){for(s=c,c=[];++f<t;)s&&s[f].run();f=-1,t=c.length}s=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new h(e,t)),1!==c.length||l||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},188:function(e,t,r){"use strict";r(35),t.parse=function(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var r={},i=t||{},a=e.split(o),s=i.decode||n,c=0;c<a.length;c++){var l=a[c],f=l.indexOf("=");if(!(f<0)){var p=l.substr(0,f).trim(),d=l.substr(++f,l.length).trim();'"'==d[0]&&(d=d.slice(1,-1)),null==r[p]&&(r[p]=u(d,s))}}return r},t.serialize=function(e,t,r){var n=r||{},o=n.encode||i;if("function"!=typeof o)throw new TypeError("option encode is invalid");if(!a.test(e))throw new TypeError("argument name is invalid");var u=o(t);if(u&&!a.test(u))throw new TypeError("argument val is invalid");var s=e+"="+u;if(null!=n.maxAge){var c=n.maxAge-0;if(isNaN(c))throw new Error("maxAge should be a Number");s+="; Max-Age="+Math.floor(c)}if(n.domain){if(!a.test(n.domain))throw new TypeError("option domain is invalid");s+="; Domain="+n.domain}if(n.path){if(!a.test(n.path))throw new TypeError("option path is invalid");s+="; Path="+n.path}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");s+="; Expires="+n.expires.toUTCString()}n.httpOnly&&(s+="; HttpOnly");n.secure&&(s+="; Secure");if(n.sameSite){var l="string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite;switch(l){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;default:throw new TypeError("option sameSite is invalid")}}return s};var n=decodeURIComponent,i=encodeURIComponent,o=/; */,a=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function u(e,t){try{return t(e)}catch(r){return e}}}}]);
//# sourceMappingURL=component---src-pages-index-js-ae799ad210f09c883c29.js.map