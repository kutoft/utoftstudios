if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return s[e]||(c=new Promise(async c=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=c}else importScripts(e),c()})),c.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},c=(c,s)=>{Promise.all(c.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(c)};self.define=(c,a,t)=>{s[c]||(s[c]=Promise.resolve().then(()=>{let s={};const n={uri:location.origin+c.slice(1)};return Promise.all(a.map(c=>{switch(c){case"exports":return s;case"module":return n;default:return e(c)}})).then(e=>{const c=t(...e);return s.default||(s.default=c),s})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/T-npk-qhNjGy4ssElkCtB/_buildManifest.js",revision:"c454538ae4f2503427f84e2040345e7d"},{url:"/_next/static/T-npk-qhNjGy4ssElkCtB/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/0eceb729.a619aaf6e4f2e5f63ba2.js",revision:"e7591dadbdbbb90a59363fc318373f2d"},{url:"/_next/static/chunks/17.f179cf809e8bd2cf3176.js",revision:"364033365e42baee45d44b896476f565"},{url:"/_next/static/chunks/18.e1296837a9dbf84946e9.js",revision:"5724f121aa3e5aab3a0fe2e3e9f06ce7"},{url:"/_next/static/chunks/19.90ac1d2513cbd999b37c.js",revision:"7df8389357cf6c7a8ad5fceda6b5a565"},{url:"/_next/static/chunks/20.a7d9468303aab24f5462.js",revision:"b990de20eec2389c67e2682b75bda1ad"},{url:"/_next/static/chunks/21.fc0d4e9bd9ccb8a5f9ee.js",revision:"eafa75d11072998078079904911b2673"},{url:"/_next/static/chunks/22.5a335c500d628005f6b6.js",revision:"9a4f050dfd2e04c50ad161b157dcc97d"},{url:"/_next/static/chunks/23.63c138a700d80764c33d.js",revision:"8eee8b0fed5f061bdbc108dce67663a5"},{url:"/_next/static/chunks/24.35c758003de60c60979d.js",revision:"27ab8e3560284d0e289ee2f73daa6ffc"},{url:"/_next/static/chunks/25.08be79ea613be0e41003.js",revision:"2f1729d420284e4401e4339de6d36725"},{url:"/_next/static/chunks/26.105cf348414021947e2e.js",revision:"a831a6d825794c8f56e0fb0541a8d514"},{url:"/_next/static/chunks/27.b81567f8682113704562.js",revision:"8ad4cc7a2da5d221be3dcf62b7db267c"},{url:"/_next/static/chunks/28.3ee80b05bc51b6c02752.js",revision:"8cc59a0e352c0c1dfe900c28bec49c07"},{url:"/_next/static/chunks/29.718dc205461fc21072ac.js",revision:"02bee725b3e6bbc1c54130979fc0d474"},{url:"/_next/static/chunks/30.dc81e7d2e1b48f576649.js",revision:"124c2b0352693a911936f80c568b4036"},{url:"/_next/static/chunks/31.246bd2fefe2485c3f82f.js",revision:"7fbd652ccd76295bb9d5046c2bb51a8e"},{url:"/_next/static/chunks/32.9f32f21178dcdda88924.js",revision:"05075303b648de6e4ee38a5a13319b89"},{url:"/_next/static/chunks/33.6b76eea1d27812f31fee.js",revision:"15b66d43f7ebd737023b2202500f062e"},{url:"/_next/static/chunks/34.f040e918d336f4b4d0f6.js",revision:"7a5b988688d2e6b9c4ad6661f177dcbe"},{url:"/_next/static/chunks/35.a3b2550feaf8204494b9.js",revision:"e915462fc182bc0ff4b6a51f44ab79b8"},{url:"/_next/static/chunks/36.eaaea689e12fe2060958.js",revision:"5b5dff62887bda1b2a9895112cc32b9f"},{url:"/_next/static/chunks/37.d10b1ad85665afc70dad.js",revision:"301bb99bc8fbeb340456c67bf13c2bdb"},{url:"/_next/static/chunks/38.acd3ac81b220bdf75d8e.js",revision:"a30489995b2c70668e0d5cdd39390900"},{url:"/_next/static/chunks/39.af45da21a505cdd1ef64.js",revision:"b7400de126e7d248676d01133a7312a0"},{url:"/_next/static/chunks/40.016d7b6dcad3b3c7a05f.js",revision:"dde52348b83c451abccea787b11d8b3f"},{url:"/_next/static/chunks/41.d7ac6b21380111761d1c.js",revision:"2c4b614608d4e5fa819625aae6943fd2"},{url:"/_next/static/chunks/42.e301f8e33791741d32bc.js",revision:"8d37dad6e291a4ffff1a6a454350f434"},{url:"/_next/static/chunks/43.130b64c2177bce703b6d.js",revision:"7f74b1ba39f56324a4ba6a381576bd9a"},{url:"/_next/static/chunks/44.a559ea61d3e20b933f0b.js",revision:"957c79d0e8282e0290bd1bc802213fce"},{url:"/_next/static/chunks/45.7e56a1809912d5382625.js",revision:"727a42dba95b3140d6457ac771d34b38"},{url:"/_next/static/chunks/a3b138f9d471a6386d1174197a811daa900314f5.b4ff4e2389ec5231b746.js",revision:"213f0b55a620fb67a66dbdf20bf83903"},{url:"/_next/static/chunks/cdf8b540ffbcacb31ea1bff13d19dcf3e0e64964.1b8ba00e1c0e036c1129.js",revision:"b77e23a34f63a282dd3731a85f5aa1c2"},{url:"/_next/static/chunks/commons.213e98f8dd537c8d52f6.js",revision:"b3810167ba1249f06efcfe94071878cf"},{url:"/_next/static/chunks/d6a9949e.c20a2f042d0769ab622d.js",revision:"ece985c89f10fa0b592e0e86111ea25f"},{url:"/_next/static/chunks/framework.36aa54da8d6db084ffa6.js",revision:"f443bdf5b54adde299bf7b06cf0b87d6"},{url:"/_next/static/chunks/main-02877b1b8ecddda89d65.js",revision:"811ff4ecb92cdf518aff5423c9c41cc2"},{url:"/_next/static/chunks/pages/_app-e80f2a9ddba9ac21a568.js",revision:"8a5952fd3dc584adbb0890ed603a978a"},{url:"/_next/static/chunks/pages/_error-f057ccec6fc5cadc4a20.js",revision:"c137c91b927c4146ebb3dddeeb9b8716"},{url:"/_next/static/chunks/pages/about-dd459d09df23c6f0b01b.js",revision:"6585469f4721adc5302397a3f657c0d0"},{url:"/_next/static/chunks/pages/admin-6dd1d6afaa385383fa1a.js",revision:"0cd1e75e8d68dfecf3197c5769040274"},{url:"/_next/static/chunks/pages/index-45fcedc2d16f53280ef4.js",revision:"80205819c63911fc0aa67c59787cc4b4"},{url:"/_next/static/chunks/polyfills-16f3bcf7ae493ab60968.js",revision:"d0ba0e1c96d5e29f2e6ba1a4d029f004"},{url:"/_next/static/chunks/polyfills-core-js.856edb7d2d140cfb9fb3.js",revision:"c5f2424ba00077247c146220b333a8bc"},{url:"/_next/static/chunks/polyfills-css-shim.c57986b08564b20b8405.js",revision:"76c4c2af66e426ba475ca3a72e0975c0"},{url:"/_next/static/chunks/polyfills-dom.e0add37a2ada69de8d73.js",revision:"734dc3d7e60bfdc92fb2f852fdfb4232"},{url:"/_next/static/chunks/webpack-d82cf946fe6e1f05c9ef.js",revision:"3d394e25d492679ff13975ec93ac5d75"},{url:"/_next/static/css/e87b8ce1fdaa230ed409.css",revision:"22575091092e92e4052df7c996370ceb"},{url:"/favicon.ico",revision:"4bf5236d26cf2b5519eec3b2702cc0da"},{url:"/manifest.json",revision:"87c91d6ae2536d4a4469cff9394c4bef"},{url:"/static/Untitled.zip",revision:"87e8cd3b79a7b8087cf91be913593519"},{url:"/static/utoft_icon_192.png",revision:"74efdd01c2e42ff889e8fa6564ade642"},{url:"/static/utoft_icon_384.png",revision:"2f9560dcab47a17a0f22a1056fa00c64"},{url:"/static/utoft_icon_512.png",revision:"2340fa3e2bb453e4c59e0b41d78cad8d"},{url:"/static/utoft_icon_mask_384.png",revision:"cec1c583f6120a5715caa938f528a6f1"},{url:"/static/utoft_icon_mask_512.png",revision:"2fbb2e35b4266b28cff4b3f369ba74a1"},{url:"/static/utoft_logo.png",revision:"f5a3950bb3105bb732b229d1488cf6d5"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
