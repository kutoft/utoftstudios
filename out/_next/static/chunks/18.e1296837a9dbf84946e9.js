(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"/Zhs":function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return d}));var a=n("Nt7R"),r=n("HzrR"),i=n("ejdb"),s=n("v4IS"),o=n("dYVZ"),u=n("1M8p"),c=function(t,e,n,a){return new(n||(n=Promise))((function(r,i){function s(t){try{u(a.next(t))}catch(e){i(e)}}function o(t){try{u(a.throw(t))}catch(e){i(e)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,o)}u((a=a.apply(t,e||[])).next())}))},l=function(t,e){var n,a,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,a=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(o){i=[6,o],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}},h=new a.a("auth-helpers");function f(t,e){return c(this,void 0,void 0,(function(){var n,a,c;return l(this,(function(l){switch(l.label){case 0:if(!s.a||"function"!==typeof s.a.verifiedContact)throw new Error(o.d);l.label=1;case 1:return l.trys.push([1,3,,4]),[4,s.a.verifiedContact(t)];case 2:return n=l.sent(),!Object(r.d)(n.verified)||Object(r.d)(n.unverified)?e(i.a.SignedIn,t):(a=Object.assign(t,n),e(i.a.VerifyContact,a)),[3,4];case 3:return c=l.sent(),Object(u.a)(c),[3,4];case 4:return[2]}}))}))}var d=function(t,e,n){return c(void 0,void 0,void 0,(function(){var a,r;return l(this,(function(c){switch(c.label){case 0:if(!s.a||"function"!==typeof s.a.signIn)throw new Error(o.d);c.label=1;case 1:return c.trys.push([1,9,,10]),[4,s.a.signIn(t,e)];case 2:return a=c.sent(),h.debug(a),a.challengeName!==i.b.SMSMFA&&a.challengeName!==i.b.SoftwareTokenMFA?[3,3]:(h.debug("confirm user with "+a.challengeName),n(i.a.ConfirmSignIn,a),[3,8]);case 3:return a.challengeName!==i.b.NewPasswordRequired?[3,4]:(h.debug("require new password",a.challengeParam),n(i.a.ResetPassword,a),[3,8]);case 4:return a.challengeName!==i.b.MFASetup?[3,5]:(h.debug("TOTP setup",a.challengeParam),n(i.a.TOTPSetup,a),[3,8]);case 5:return a.challengeName===i.b.CustomChallenge&&a.challengeParam&&"true"===a.challengeParam.trigger?(h.debug("custom challenge",a.challengeParam),n(i.a.CustomConfirmSignIn,a),[3,8]):[3,6];case 6:return[4,f(a,n)];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:return r=c.sent(),Object(u.a)(r),"UserNotConfirmedException"===r.code?(h.debug("the user is not confirmed"),n(i.a.ConfirmSignUp,{username:t})):"PasswordResetRequiredException"===r.code&&(h.debug("the user requires a new password"),n(i.a.ForgotPassword,{username:t})),[3,10];case 10:return[2]}}))}))}},uDa5:function(t,e,n){"use strict";n.r(e),n.d(e,"amplify_authenticator",(function(){return b}));var a=n("Cx7U"),r=n("Nt7R"),i=n("Qycn"),s=n("ejdb"),o=n("TESy"),u=n("v4IS"),c=(n("NHSa"),n("dYVZ")),l=n("1M8p"),h=n("/Zhs"),f=function(t,e,n,a){return new(n||(n=Promise))((function(r,i){function s(t){try{u(a.next(t))}catch(e){i(e)}}function o(t){try{u(a.throw(t))}catch(e){i(e)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,o)}u((a=a.apply(t,e||[])).next())}))},d=function(t,e){var n,a,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,a=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(o){i=[6,o],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}},p=new r.a("Authenticator"),b=function(){function t(t){var e=this;Object(a.k)(this,t),this.initialAuthState=s.a.SignIn,this.handleAuthStateChange=function(){},this.authState=s.a.Loading,this.toastMessage="",this.handleExternalAuthEvent=function(t){var n=t.payload;switch(n.event){case"cognitoHostedUI":case"signIn":Object(h.a)(n.data,l.d);break;case"cognitoHostedUI_failure":case"parsingUrl_failure":case"signOut":case"customGreetingSignOut":return Object(l.d)(e.initialAuthState)}},this.handleToastEvent=function(t){var n=t.payload;switch(n.event){case c.h:n.message&&(e.toastMessage=n.message)}}}return t.prototype.componentWillLoad=function(){return f(this,void 0,void 0,(function(){var t,e=this;return d(this,(function(n){switch(n.label){case 0:return Object(l.h)((function(t,n){e.onAuthStateChange(t,n),e.toastMessage=""})),i.a.listen(c.i,this.handleToastEvent),i.a.listen(c.a,this.handleExternalAuthEvent),Object(o.j)("amplify-authenticator"),t=localStorage.getItem(c.f),localStorage.removeItem(c.f),"true"===t?[3,2]:[4,this.checkUser()];case 1:n.sent(),n.label=2;case 2:return[2]}}))}))},t.prototype.checkUser=function(){return f(this,void 0,void 0,(function(){var t,e,n;return d(this,(function(a){switch(a.label){case 0:if(!u.a||"function"!==typeof u.a.currentAuthenticatedUser)throw new Error(c.d);a.label=1;case 1:return a.trys.push([1,3,,9]),[4,u.a.currentAuthenticatedUser()];case 2:return t=a.sent(),Object(l.d)(s.a.SignedIn,t),[3,9];case 3:a.sent(),e=null;try{e=localStorage.getItem(c.l)}catch(r){p.debug("Failed to get the auth state from local storage",r)}a.label=4;case 4:return a.trys.push([4,7,,8]),e!==s.a.SignedIn?[3,6]:[4,u.a.signOut()];case 5:a.sent(),a.label=6;case 6:return Object(l.d)(this.initialAuthState),[3,8];case 7:return n=a.sent(),p.debug("Failed to sign out",n),[3,8];case 8:return[3,9];case 9:return[2]}}))}))},t.prototype.onAuthStateChange=function(t,e){return f(this,void 0,void 0,(function(){return d(this,(function(n){return void 0===t?[2,p.error("nextAuthState cannot be undefined")]:(p.info("Inside onAuthStateChange Method current authState:",this.authState),t===s.a.SignedOut?this.authState=this.initialAuthState:this.authState=t,this.authData=e,this.authData&&p.log("Auth Data was set:",this.authData),this.authState===t&&(this.handleAuthStateChange(this.authState,this.authData),p.info("authState has been updated to "+this.authState)),[2])}))}))},t.prototype.renderAuthComponent=function(t){switch(t){case s.a.SignIn:return Object(a.i)("slot",{name:"sign-in"},Object(a.i)("amplify-sign-in",{federated:this.federated,usernameAlias:this.usernameAlias}));case s.a.ConfirmSignIn:return Object(a.i)("slot",{name:"confirm-sign-in"},Object(a.i)("amplify-confirm-sign-in",{user:this.authData}));case s.a.SignUp:return Object(a.i)("slot",{name:"sign-up"},Object(a.i)("amplify-sign-up",{usernameAlias:this.usernameAlias}));case s.a.ConfirmSignUp:return Object(a.i)("slot",{name:"confirm-sign-up"},Object(a.i)("amplify-confirm-sign-up",{user:this.authData,usernameAlias:this.usernameAlias}));case s.a.ForgotPassword:return Object(a.i)("slot",{name:"forgot-password"},Object(a.i)("amplify-forgot-password",{usernameAlias:this.usernameAlias}));case s.a.ResetPassword:return Object(a.i)("slot",{name:"require-new-password"},Object(a.i)("amplify-require-new-password",{user:this.authData}));case s.a.VerifyContact:return Object(a.i)("slot",{name:"verify-contact"},Object(a.i)("amplify-verify-contact",{user:this.authData}));case s.a.TOTPSetup:return Object(a.i)("slot",{name:"totp-setup"},Object(a.i)("amplify-totp-setup",{user:this.authData}));case s.a.Loading:return Object(a.i)("slot",{name:"loading"},Object(a.i)("div",null,"Loading..."));case s.a.SignedIn:return[Object(a.i)("slot",{name:"greetings"}),Object(a.i)("slot",null)];default:throw new Error("Unhandled auth state: "+t)}},t.prototype.componentWillUnload=function(){return i.a.remove(c.a,this.handleExternalAuthEvent),i.a.remove(c.i,this.handleToastEvent),l.h},t.prototype.render=function(){var t=this;return Object(a.i)(a.b,null,this.toastMessage?Object(a.i)("amplify-toast",{message:this.toastMessage,handleClose:function(){t.toastMessage=""},"data-test":"authenticator-error"}):null,this.renderAuthComponent(this.authState))},t}();b.style=":host{--background-color:var(--amplify-background-color);--width:28.75rem;--min-width:20rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);--border-radius:6px;--padding:35px 40px;--margin-bottom:20px}"}}]);