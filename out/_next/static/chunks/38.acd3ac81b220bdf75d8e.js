(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[38],{uQrF:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_s3_image_picker",(function(){return p}));var r=n("Cx7U"),i=n("Nt7R"),a=n("JIIv"),o=n("8Dar"),c=n("NHSa"),l=(n("dYVZ"),n("l1VB"),n("/T4O")),u=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{l(r.next(e))}catch(t){a(t)}}function c(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}l((r=r.apply(e,t||[])).next())}))},s=function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(c){a=[6,c],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},h=new i.a("S3ImagePicker"),p=function(){function e(e){var t=this;Object(r.k)(this,e),this.contentType="binary/octet-stream",this.level=o.a.Public,this.headerTitle=c.a.IMAGE_PICKER_TITLE,this.headerHint=c.a.IMAGE_PICKER_HINT,this.placeholderHint=c.a.IMAGE_PICKER_PLACEHOLDER_HINT,this.buttonText=c.a.IMAGE_PICKER_BUTTON_TEXT,this.handlePick=function(e){return u(t,void 0,void 0,(function(){var t,n,r,i,a,o,c,u,p,f;return s(this,(function(s){switch(s.label){case 0:n=(t=this).path,r=void 0===n?"":n,i=t.level,a=t.track,o=t.identityId,c=t.fileToKey,u=r+Object(l.b)(e,c),s.label=1;case 1:return s.trys.push([1,4,,5]),[4,Object(l.e)(u,e,i,a,e.type,h)];case 2:return s.sent(),p=this,[4,Object(l.c)(u,i,a,o,h)];case 3:return p.src=s.sent(),[3,5];case 4:throw f=s.sent(),h.error(f),new Error(f);case 5:return[2]}}))}))}}return e.prototype.render=function(){return Object(r.i)(r.b,null,Object(r.i)("slot",{name:"photo-picker"},Object(r.i)("amplify-photo-picker",{previewSrc:this.src,handleClick:this.handlePick,headerTitle:a.a.get(this.headerTitle),headerHint:a.a.get(this.headerHint),placeholderHint:a.a.get(this.placeholderHint),buttonText:a.a.get(this.buttonText)})))},e}()}}]);