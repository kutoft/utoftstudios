(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(i.default.useContext(s.AmpStateContext))};var r,i=(r=n("q1tI"))&&r.__esModule?r:{default:r},s=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,s=e.hasQuery,o=void 0!==s&&s;return n||i&&o}},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=s.cssRules();return s.flush(),e},t.default=void 0;var r,i=n("q1tI");var s=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),o=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return s.computeId(t,n)})).join(" ")};var i=r.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){s.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&s.remove(this.prevProps),s.add(this.props),this.prevProps=this.props),null},r}(i.Component);t.default=o},"7/uR":function(e,t,n){"use strict";var r=n("MX0m"),i=n.n(r),s=n("q1tI"),o=n.n(s),a=o.a.createElement;t.a=function(e){var t=e.children;return a(o.a.Fragment,null,a("div",{className:"jsx-3282370727 main"},t),a(i.a,{id:"3282370727"},[".main.jsx-3282370727{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#f5f5f5;}"]))}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),s=(r=n("Xuae"))&&r.__esModule?r:{default:r},o=n("lwAK"),a=n("FYa8"),c=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var s=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var o=i.key.slice(i.key.indexOf("$")+1);e.has(o)?s=!1:e.add(o)}switch(i.type){case"title":case"base":t.has(i.type)?s=!1:t.add(i.type);break;case"meta":for(var a=0,c=p.length;a<c;a++){var l=p[a];if(i.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?s=!1:n.add(l);else{var u=i.props[l],f=r[l]||new Set;f.has(u)?s=!1:(f.add(u),r[l]=f)}}}return s}}()).reverse().map((function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,i.useContext)(o.AmpStateContext),r=(0,i.useContext)(a.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},"8oxB":function(e,t){var n,r,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:s}catch(e){n=s}try{r="function"===typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,l=[],u=!1,f=-1;function p(){u&&c&&(u=!1,c.length?l=c.concat(l):f=-1,l.length&&d())}function d(){if(!u){var e=a(p);u=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||u||a(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},MX0m:function(e,t,n){e.exports=n("3niX")},RIqP:function(e,t,n){var r=n("Ijbi"),i=n("EbDI"),s=n("ZhPi"),o=n("Bnag");e.exports=function(e){return r(e)||i(e)||s(e)||o()}},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=s(n("9kyW")),i=s(n("bVZc"));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,s=t.optimizeForSpeed,o=void 0!==s&&s,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),r&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var s=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=s,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var i=String(n),s=t+i;return e[s]||(e[s]="jsx-"+(0,r.default)(t+"-"+i)),e[s]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var i=n+r;return t[i]||(t[i]=r.replace(e,n)),t[i]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,i=e.id;if(r){var s=this.computeId(i,r);return{styleId:s,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(s,e)})):[this.computeSelector(s,n)]}}return{styleId:this.computeId(i),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),i=n("lwsE"),s=n("W8MJ"),o=(n("PJYZ"),n("7W2i")),a=n("a1gu"),c=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var i=c(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return a(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),f=function(e){o(n,e);var t=l(n);function n(e){var s;return i(this,n),(s=t.call(this,e))._hasHeadManager=void 0,s.emitChange=function(){s._hasHeadManager&&s.props.headManager.updateHead(s.props.reduceComponentsToState(r(s.props.headManager.mountedInstances),s.props))},s._hasHeadManager=s.props.headManager&&s.props.headManager.mountedInstances,s}return s(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},ZHh6:function(e,t,n){"use strict";var r=n("MX0m"),i=n.n(r),s=n("q1tI"),o=n.n(s),a=n("YFqc"),c=n.n(a),l=n("nOHt"),u=o.a.createElement;t.a=function(){var e=Object(l.useRouter)();return u(o.a.Fragment,null,u("div",{className:"jsx-3924004253 container"},u("div",{className:"jsx-3924004253 container1"},u("div",{className:"jsx-3924004253 container2"},u("img",{src:"/playground_assets/Logo-1100h.png",className:"jsx-3924004253 thqImage image"})),"/admin"!==e.pathname&&u("div",{className:"jsx-3924004253 container3"},u(c.a,{href:"/",className:"thqLink text"},u("a",{className:"jsx-3924004253 "+"link ".concat("/"===e.pathname?"link-active":"")},"HOME")),u(c.a,{href:"/about",className:"thqLink text"},u("a",{className:"jsx-3924004253 "+"link ".concat("/about"===e.pathname?"link-active":"")},"ABOUT"))),"/admin"===e.pathname&&u("div",{className:"jsx-3924004253 container3"},u(c.a,{href:"/",className:"thqLink text"},u("a",{className:"jsx-3924004253 link"},"LOGOUT"))))),u(i.a,{id:"3924004253"},[".container.jsx-3924004253{width:100%;height:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:auto;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#110730;}",".container1.jsx-3924004253{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:20px;padding-right:20px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",".container2.jsx-3924004253{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".image.jsx-3924004253{height:50px;object-fit:cover;}",".container3.jsx-3924004253{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}",".link.jsx-3924004253{color:#ffffff;font-weight:900;padding-top:10px;padding-left:20px;padding-right:20px;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;padding-bottom:10px;text-transform:uppercase;border-bottom-width:3px;border-color:transparent;}",".link-active.jsx-3924004253{border-color:#fff;}","@media (max-width:479px){.container.jsx-3924004253{height:80px;}.image.jsx-3924004253{width:100px;height:auto;}.text.jsx-3924004253{font-size:12px;padding-left:10px;padding-right:10px;}}"]))}},"a3/r":function(e,t,n){"use strict";var r=n("MX0m"),i=n.n(r),s=n("q1tI"),o=n.n(s),a=o.a.createElement,c=function(e){var t=e.label,n=e.options;return a(o.a.Fragment,null,a("button",{className:i.a.dynamic([["4202077114",[n.fullWidth?"100%":"auto"]]])+" thqButton button"},t),a(i.a,{id:"4202077114",dynamic:[n.fullWidth?"100%":"auto"]},[".button.__jsx-style-dynamic-selector{color:#ffffff;width:".concat(n.fullWidth?"100%":"auto",";display:block;padding:10px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;text-align:center;border-color:transparent;border-width:0;background-color:#130930;text-transform:uppercase;}")]))};c.defaultProps={options:{fullWidth:!1,variant:"contained",color:"primary"}},t.a=c},aIN1:function(e,t,n){"use strict";var r=n("MX0m"),i=n.n(r),s=n("q1tI"),o=n.n(s),a=n("a3/r"),c=o.a.createElement;t.a=function(){return c(o.a.Fragment,null,c("div",{className:"jsx-3818205484 container"},c("div",{className:"jsx-3818205484 space-between"},c("div",{className:"jsx-3818205484 section section-flex-start"},c("div",{className:"jsx-3818205484 wrapper"},c("svg",{viewBox:"0 0 877.7142857142857 1024",className:"jsx-3818205484 thqIcon icon"},c("title",{className:"jsx-3818205484"},"linkedin-square"),c("path",{d:"M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z",className:"jsx-3818205484"}))),c("div",{className:"jsx-3818205484 wrapper"},c("svg",{viewBox:"0 0 877.7142857142857 1024",className:"jsx-3818205484 thqIcon icon"},c("title",{className:"jsx-3818205484"},"twitter-square"),c("path",{d:"M731.429 348.571c-21.714 9.714-44.571 16-69.143 19.429 25.143-14.857 44-38.857 53.143-66.857-23.429 13.714-49.143 24-76.571 29.143-21.714-23.429-53.143-37.714-87.429-37.714-66.286 0-120 53.714-120 120 0 9.143 0.571 18.857 2.857 27.429-100-5.143-188.571-52.571-248-125.714-10.286 17.714-16.571 38.857-16.571 60.571 0 41.714 19.429 78.286 52 100-20-0.571-38.857-6.286-57.143-14.857v1.143c0 58.286 44 106.857 98.857 117.714-10.286 2.857-18.286 4.571-29.143 4.571-7.429 0-14.857-1.143-22.286-2.286 15.429 47.429 59.429 82.286 112 83.429-41.143 32-92.571 51.429-149.143 51.429-9.714 0-19.429-0.571-28.571-1.714 53.143 33.714 116 53.714 184 53.714 220.571 0 341.714-182.857 341.714-341.714 0-5.143 0-10.286-0.571-15.429 23.429-16.571 44-37.714 60-62.286zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z",className:"jsx-3818205484"}))),c("div",{className:"jsx-3818205484 wrapper"},c("svg",{viewBox:"0 0 877.7142857142857 1024",className:"jsx-3818205484 thqIcon icon"},c("title",{className:"jsx-3818205484"},"github-square"),c("path",{d:"M296.571 685.714v0c1.143-1.714 0.571-5.143-1.714-7.429-2.857-2.286-6.286-2.857-8-1.143-1.143 1.714-0.571 5.143 1.714 7.429 2.857 2.286 6.286 2.857 8 1.143zM280.571 662.286c-1.714-2.286-4.571-3.429-6.857-2.286-1.714 1.143-1.714 4.571 0 6.857 2.286 2.857 5.143 4 6.857 2.857v0c1.714-1.143 1.714-4.571 0-7.429zM257.143 639.429v0c0.571-1.143-0.571-3.429-2.857-4.571-1.714-0.571-4-0.571-4.571 1.143-1.143 1.714 0 3.429 2.286 4.571 2.286 0.571 4.571 0.571 5.143-1.143zM269.143 652.571v0c1.143-1.143 1.143-4-1.143-5.714-1.714-2.286-4.571-2.857-5.714-1.714-1.714 1.714-1.143 4 0.571 6.286 1.714 1.714 4.571 2.857 6.286 1.143zM318.286 695.429v0c0.571-2.286-1.714-5.143-5.143-6.286s-6.286 0-7.429 2.286c-0.571 2.286 1.714 5.143 5.143 6.286s6.286 0 7.429-2.286zM342.286 697.143v0c0-2.286-2.857-4.571-6.857-4.571-3.429 0-5.714 2.286-5.714 4.571s2.857 4.571 6.286 4.571 6.286-2.286 6.286-4.571zM364.571 693.143v0c-0.571-2.286-4-3.429-7.429-2.857s-5.714 2.857-5.143 5.143 3.429 4 6.857 3.429 5.714-3.429 5.714-5.714zM731.429 512c0-161.714-130.857-292.571-292.571-292.571s-292.571 130.857-292.571 292.571c0 129.143 84 238.857 200 277.714 14.857 2.857 20-6.286 20-14.286 0-6.857 0-29.714-0.571-54.286 0 0-81.143 17.714-98.286-34.857 0 0-13.143-33.714-32.571-42.286 0 0-26.286-18.286 2.286-18.286 0 0 28.571 2.286 44.571 30.286 25.714 45.143 68.571 32 85.143 24.571 2.857-18.857 10.286-32 18.857-39.429-65.143-7.429-133.714-32.571-133.714-144.571 0-32 11.429-57.714 30.286-78.286-2.857-7.429-13.143-37.143 2.857-77.714 24.571-7.429 80.571 30.286 80.571 30.286 23.429-6.857 48-9.714 73.143-9.714s49.714 2.857 73.143 9.714c0 0 56-37.714 80.571-30.286 16 40.571 5.714 70.286 2.857 77.714 18.857 20.571 30.286 46.286 30.286 78.286 0 112.571-68.571 137.143-133.714 144.571 10.286 9.143 20 26.857 20 54.286 0 38.857-0.571 70.286-0.571 80 0 8 5.143 17.143 20 14.286 116-38.857 200-148.571 200-277.714zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z",className:"jsx-3818205484"})))),c("div",{className:"jsx-3818205484 section section-flex-end"},c("div",{className:"jsx-3818205484 wrapper"},c(a.a,{label:"Login"}))))),c(i.a,{id:"3818205484"},[".container.jsx-3818205484{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:auto;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:20px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#110730;}",".space-between.jsx-3818205484{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",".section.jsx-3818205484{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}",".section-flex-start.jsx-3818205484{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}",".section-flex-end.jsx-3818205484{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}",".button.jsx-3818205484{color:#ffffff;width:100%;display:block;padding:10px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;text-align:center;border-color:transparent;border-width:0;background-color:#130930;}",".wrapper.jsx-3818205484{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:20px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}",".icon.jsx-3818205484{fill:#ffffff;width:24px;height:24px;}"]))}},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,n=t.name,s=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,c=void 0===a?r:a,l=t.isBrowser,u=void 0===l?"undefined"!==typeof window:l;o(i(s),"`name` must be a string"),this._name=s,this._deletedRulePlaceholder="#"+s+"-deleted-rule____{}",o("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,s,a,c=e.prototype;return c.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(o(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var s=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(s){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];o(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,n){t&&o(i(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return n?s.insertBefore(r,n):s.appendChild(r),r},t=e,(s=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,s),a&&n(t,a),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s}).call(this,n("8oxB"))},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),i=n("284h");t.__esModule=!0,t.default=void 0;var s,o=i(n("q1tI")),a=n("elyg"),c=n("nOHt"),l=new Map,u=window.IntersectionObserver,f={};var p=function(e,t){var n=s||(u?s=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function d(e,t,n,r){(0,a.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=o.default.useState(),i=r(n,2),s=i[0],l=i[1],h=(0,c.useRouter)(),m=h&&h.pathname||"/",x=o.default.useMemo((function(){var t=(0,a.resolveHref)(m,e.href);return{href:t,as:e.as?(0,a.resolveHref)(m,e.as):t}}),[m,e.href,e.as]),w=x.href,v=x.as;o.default.useEffect((function(){if(t&&u&&s&&s.tagName&&(0,a.isLocalURL)(w)&&!f[w+"%"+v])return p(s,(function(){d(h,w,v)}))}),[t,s,w,v,h]);var y=e.children,b=e.replace,g=e.shallow,_=e.scroll;"string"===typeof y&&(y=o.default.createElement("a",null,y));var k=o.Children.only(y),S={ref:function(e){e&&l(e),k&&"object"===typeof k&&k.ref&&("function"===typeof k.ref?k.ref(e):"object"===typeof k.ref&&(k.ref.current=e))},onClick:function(e){k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,s,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[i?"replace":"push"](n,r,{shallow:s}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,w,v,b,g,_)}};return t&&(S.onMouseEnter=function(e){(0,a.isLocalURL)(w)&&(k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),d(h,w,v,{priority:!0}))}),(e.passHref||"a"===k.type&&!("href"in k.props))&&(S.href=(0,a.addBasePath)(v)),o.default.cloneElement(k,S)};t.default=h},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var i=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i}}]);