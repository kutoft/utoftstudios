(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-authenticator.entry.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-authenticator.entry.js ***!
  \*********************************************************************************************/
/*! exports provided: amplify_authenticator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_authenticator", function() { return AmplifyAuthenticator; });
/* harmony import */ var _index_39969785_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-39969785.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-39969785.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-types-78df304e.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-392acb9b.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/Translations-392acb9b.js");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/constants-d1abe7de.js");
/* harmony import */ var _helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-01ecf5f9.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/helpers-01ecf5f9.js");
/* harmony import */ var _auth_helpers_2fada98e_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-helpers-2fada98e.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-helpers-2fada98e.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var amplifyAuthenticatorCss = ":host{--background-color:var(--amplify-background-color);--width:28.75rem;--min-width:20rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);--border-radius:6px;--padding:35px 40px;--margin-bottom:20px}";
var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('Authenticator');
var AmplifyAuthenticator = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Initial starting state of the Authenticator component. E.g. If `signup` is passed the default component is set to AmplifySignUp */
        this.initialAuthState = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn;
        /** Callback for Authenticator state machine changes */
        this.handleAuthStateChange = function () { };
        this.authState = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].Loading;
        this.toastMessage = '';
        this.handleExternalAuthEvent = function (_a) {
            var payload = _a.payload;
            switch (payload.event) {
                case 'cognitoHostedUI':
                case 'signIn':
                    Object(_auth_helpers_2fada98e_js__WEBPACK_IMPORTED_MODULE_7__["c"])(payload.data, _helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["d"]);
                    break;
                case 'cognitoHostedUI_failure':
                case 'parsingUrl_failure':
                case 'signOut':
                case 'customGreetingSignOut':
                    return Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["d"])(_this.initialAuthState);
            }
        };
        this.handleToastEvent = function (_a) {
            var payload = _a.payload;
            switch (payload.event) {
                case _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["T"]:
                    if (payload.message)
                        _this.toastMessage = payload.message;
                    break;
            }
        };
    }
    class_1.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var byHostedUI;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["o"])(function (authState, authData) {
                            _this.onAuthStateChange(authState, authData);
                            _this.toastMessage = '';
                        });
                        _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Hub"].listen(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["U"], this.handleToastEvent);
                        _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Hub"].listen(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["A"], this.handleExternalAuthEvent);
                        Object(_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["appendToCognitoUserAgent"])('amplify-authenticator');
                        byHostedUI = localStorage.getItem(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["R"]);
                        localStorage.removeItem(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["R"]);
                        if (!(byHostedUI !== 'true')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.checkUser()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.checkUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_1, cachedAuthState, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser !== 'function') {
                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 9]);
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser()];
                    case 2:
                        user = _a.sent();
                        Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["d"])(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn, user);
                        return [3 /*break*/, 9];
                    case 3:
                        error_1 = _a.sent();
                        cachedAuthState = null;
                        try {
                            cachedAuthState = localStorage.getItem(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["c"]);
                        }
                        catch (error) {
                            logger.debug('Failed to get the auth state from local storage', error);
                        }
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 7, , 8]);
                        if (!(cachedAuthState === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn)) return [3 /*break*/, 6];
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].signOut()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["d"])(this.initialAuthState);
                        return [3 /*break*/, 8];
                    case 7:
                        error_2 = _a.sent();
                        logger.debug('Failed to sign out', error_2);
                        return [3 /*break*/, 8];
                    case 8: return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.onAuthStateChange = function (nextAuthState, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (nextAuthState === undefined)
                    return [2 /*return*/, logger.error('nextAuthState cannot be undefined')];
                logger.info('Inside onAuthStateChange Method current authState:', this.authState);
                if (nextAuthState === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedOut) {
                    this.authState = this.initialAuthState;
                }
                else {
                    this.authState = nextAuthState;
                }
                this.authData = data;
                if (this.authData)
                    logger.log('Auth Data was set:', this.authData);
                if (this.authState === nextAuthState) {
                    this.handleAuthStateChange(this.authState, this.authData);
                    logger.info("authState has been updated to " + this.authState);
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.renderAuthComponent = function (authState) {
        switch (authState) {
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn:
                return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "sign-in" }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-in", { federated: this.federated, usernameAlias: this.usernameAlias })));
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignIn:
                return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "confirm-sign-in" }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-confirm-sign-in", { user: this.authData })));
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignUp:
                return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "sign-up" }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-up", { usernameAlias: this.usernameAlias })));
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignUp:
                return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "confirm-sign-up" }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-confirm-sign-up", { user: this.authData, usernameAlias: this.usernameAlias })));
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ForgotPassword:
                return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "forgot-password" }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-forgot-password", { usernameAlias: this.usernameAlias })));
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ResetPassword:
                return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "require-new-password" }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-require-new-password", { user: this.authData })));
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].VerifyContact:
                return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "verify-contact" }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-verify-contact", { user: this.authData })));
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].TOTPSetup:
                return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "totp-setup" }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-totp-setup", { user: this.authData })));
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].Loading:
                return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "loading" }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "Loading...")));
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn:
                return [Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "greetings" }), Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)];
            default:
                throw new Error("Unhandled auth state: " + authState);
        }
    };
    class_1.prototype.componentWillUnload = function () {
        _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Hub"].remove(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["A"], this.handleExternalAuthEvent);
        _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Hub"].remove(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["U"], this.handleToastEvent);
        return _helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["o"];
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, this.toastMessage ? (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-toast", { message: this.toastMessage, handleClose: function () {
                _this.toastMessage = '';
            }, "data-test": "authenticator-error" })) : null, this.renderAuthComponent(this.authState)));
    };
    return class_1;
}());
AmplifyAuthenticator.style = amplifyAuthenticatorCss;



/***/ }),

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-helpers-2fada98e.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-helpers-2fada98e.js ***!
  \***************************************************************************************/
/*! exports provided: c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return checkContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return handleSignIn; });
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-types-78df304e.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/constants-d1abe7de.js");
/* harmony import */ var _helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers-01ecf5f9.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/helpers-01ecf5f9.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["Logger"]('auth-helpers');
function checkContact(user, handleAuthStateChange) {
    return __awaiter(this, void 0, void 0, function () {
        var data, newUser, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].verifiedContact !== 'function') {
                        throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_3__["N"]);
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].verifiedContact(user)];
                case 2:
                    data = _a.sent();
                    if (!Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(data.verified) || Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(data.unverified)) {
                        handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].SignedIn, user);
                    }
                    else {
                        newUser = Object.assign(user, data);
                        handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].VerifyContact, newUser);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_4__["a"])(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
var handleSignIn = function (username, password, handleAuthStateChange) { return __awaiter(void 0, void 0, void 0, function () {
    var user, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].signIn !== 'function') {
                    throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_3__["N"]);
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 9, , 10]);
                return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].signIn(username, password)];
            case 2:
                user = _a.sent();
                logger.debug(user);
                if (!(user.challengeName === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["C"].SMSMFA || user.challengeName === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["C"].SoftwareTokenMFA)) return [3 /*break*/, 3];
                logger.debug('confirm user with ' + user.challengeName);
                handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].ConfirmSignIn, user);
                return [3 /*break*/, 8];
            case 3:
                if (!(user.challengeName === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["C"].NewPasswordRequired)) return [3 /*break*/, 4];
                logger.debug('require new password', user.challengeParam);
                handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].ResetPassword, user);
                return [3 /*break*/, 8];
            case 4:
                if (!(user.challengeName === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["C"].MFASetup)) return [3 /*break*/, 5];
                logger.debug('TOTP setup', user.challengeParam);
                handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].TOTPSetup, user);
                return [3 /*break*/, 8];
            case 5:
                if (!(user.challengeName === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["C"].CustomChallenge &&
                    user.challengeParam &&
                    user.challengeParam.trigger === 'true')) return [3 /*break*/, 6];
                logger.debug('custom challenge', user.challengeParam);
                handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].CustomConfirmSignIn, user);
                return [3 /*break*/, 8];
            case 6: return [4 /*yield*/, checkContact(user, handleAuthStateChange)];
            case 7:
                _a.sent();
                _a.label = 8;
            case 8: return [3 /*break*/, 10];
            case 9:
                error_2 = _a.sent();
                Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_4__["a"])(error_2);
                if (error_2.code === 'UserNotConfirmedException') {
                    logger.debug('the user is not confirmed');
                    handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].ConfirmSignUp, { username: username });
                }
                else if (error_2.code === 'PasswordResetRequiredException') {
                    logger.debug('the user requires a new password');
                    handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].ForgotPassword, { username: username });
                }
                return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}); };



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS91aS1jb21wb25lbnRzL2Rpc3QvZXNtLWVzNS9hbXBsaWZ5LWF1dGhlbnRpY2F0b3IuZW50cnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYXdzLWFtcGxpZnkvdWktY29tcG9uZW50cy9kaXN0L2VzbS1lczUvYXV0aC1oZWxwZXJzLTJmYWRhOThlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QiwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUJBQW1CLFNBQUksSUFBSSxTQUFJO0FBQy9CLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FB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O0FBQ0Esc0NBQXNDLHlEQUFTO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOERBQXFCO0FBQ3JDO0FBQ0E7QUFDQSwwQ0FBMEMseURBQVMsaUJBQWlCLHFCQUFxQjtBQUN6RjtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMseURBQVMsa0JBQWtCLHFCQUFxQjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUU7QUFDNkMiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgaCwgSCBhcyBIb3N0IH0gZnJvbSAnLi9pbmRleC0zOTk2OTc4NS5qcyc7XG5pbXBvcnQgeyBMb2dnZXIsIEh1YiB9IGZyb20gJ0Bhd3MtYW1wbGlmeS9jb3JlJztcbmltcG9ydCB7IEEgYXMgQXV0aFN0YXRlIH0gZnJvbSAnLi9hdXRoLXR5cGVzLTc4ZGYzMDRlLmpzJztcbmltcG9ydCB7IGFwcGVuZFRvQ29nbml0b1VzZXJBZ2VudCwgQXV0aCB9IGZyb20gJ0Bhd3MtYW1wbGlmeS9hdXRoJztcbmltcG9ydCAnLi9UcmFuc2xhdGlvbnMtMzkyYWNiOWIuanMnO1xuaW1wb3J0IHsgVCBhcyBUT0FTVF9BVVRIX0VSUk9SX0VWRU5ULCBVIGFzIFVJX0FVVEhfQ0hBTk5FTCwgQSBhcyBBVVRIX0NIQU5ORUwsIFIgYXMgUkVESVJFQ1RFRF9GUk9NX0hPU1RFRF9VSSwgTiBhcyBOT19BVVRIX01PRFVMRV9GT1VORCwgYyBhcyBBVVRIRU5USUNBVE9SX0FVVEhTVEFURSB9IGZyb20gJy4vY29uc3RhbnRzLWQxYWJlN2RlLmpzJztcbmltcG9ydCB7IGQgYXMgZGlzcGF0Y2hBdXRoU3RhdGVDaGFuZ2VFdmVudCwgbyBhcyBvbkF1dGhVSVN0YXRlQ2hhbmdlIH0gZnJvbSAnLi9oZWxwZXJzLTAxZWNmNWY5LmpzJztcbmltcG9ydCB7IGMgYXMgY2hlY2tDb250YWN0IH0gZnJvbSAnLi9hdXRoLWhlbHBlcnMtMmZhZGE5OGUuanMnO1xudmFyIGFtcGxpZnlBdXRoZW50aWNhdG9yQ3NzID0gXCI6aG9zdHstLWJhY2tncm91bmQtY29sb3I6dmFyKC0tYW1wbGlmeS1iYWNrZ3JvdW5kLWNvbG9yKTstLXdpZHRoOjI4Ljc1cmVtOy0tbWluLXdpZHRoOjIwcmVtOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy0tYm94LXNoYWRvdzoxcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7LS1ib3JkZXItcmFkaXVzOjZweDstLXBhZGRpbmc6MzVweCA0MHB4Oy0tbWFyZ2luLWJvdHRvbToyMHB4fVwiO1xudmFyIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0F1dGhlbnRpY2F0b3InKTtcbnZhciBBbXBsaWZ5QXV0aGVudGljYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18xKGhvc3RSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqIEluaXRpYWwgc3RhcnRpbmcgc3RhdGUgb2YgdGhlIEF1dGhlbnRpY2F0b3IgY29tcG9uZW50LiBFLmcuIElmIGBzaWdudXBgIGlzIHBhc3NlZCB0aGUgZGVmYXVsdCBjb21wb25lbnQgaXMgc2V0IHRvIEFtcGxpZnlTaWduVXAgKi9cbiAgICAgICAgdGhpcy5pbml0aWFsQXV0aFN0YXRlID0gQXV0aFN0YXRlLlNpZ25JbjtcbiAgICAgICAgLyoqIENhbGxiYWNrIGZvciBBdXRoZW50aWNhdG9yIHN0YXRlIG1hY2hpbmUgY2hhbmdlcyAqL1xuICAgICAgICB0aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgdGhpcy5hdXRoU3RhdGUgPSBBdXRoU3RhdGUuTG9hZGluZztcbiAgICAgICAgdGhpcy50b2FzdE1lc3NhZ2UgPSAnJztcbiAgICAgICAgdGhpcy5oYW5kbGVFeHRlcm5hbEF1dGhFdmVudCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBfYS5wYXlsb2FkO1xuICAgICAgICAgICAgc3dpdGNoIChwYXlsb2FkLmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnY29nbml0b0hvc3RlZFVJJzpcbiAgICAgICAgICAgICAgICBjYXNlICdzaWduSW4nOlxuICAgICAgICAgICAgICAgICAgICBjaGVja0NvbnRhY3QocGF5bG9hZC5kYXRhLCBkaXNwYXRjaEF1dGhTdGF0ZUNoYW5nZUV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnY29nbml0b0hvc3RlZFVJX2ZhaWx1cmUnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3BhcnNpbmdVcmxfZmFpbHVyZSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnc2lnbk91dCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnY3VzdG9tR3JlZXRpbmdTaWduT3V0JzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoQXV0aFN0YXRlQ2hhbmdlRXZlbnQoX3RoaXMuaW5pdGlhbEF1dGhTdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlVG9hc3RFdmVudCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBfYS5wYXlsb2FkO1xuICAgICAgICAgICAgc3dpdGNoIChwYXlsb2FkLmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBUT0FTVF9BVVRIX0VSUk9SX0VWRU5UOlxuICAgICAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudG9hc3RNZXNzYWdlID0gcGF5bG9hZC5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY29tcG9uZW50V2lsbExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBieUhvc3RlZFVJO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQXV0aFVJU3RhdGVDaGFuZ2UoZnVuY3Rpb24gKGF1dGhTdGF0ZSwgYXV0aERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5vbkF1dGhTdGF0ZUNoYW5nZShhdXRoU3RhdGUsIGF1dGhEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy50b2FzdE1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgSHViLmxpc3RlbihVSV9BVVRIX0NIQU5ORUwsIHRoaXMuaGFuZGxlVG9hc3RFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBIdWIubGlzdGVuKEFVVEhfQ0hBTk5FTCwgdGhpcy5oYW5kbGVFeHRlcm5hbEF1dGhFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRUb0NvZ25pdG9Vc2VyQWdlbnQoJ2FtcGxpZnktYXV0aGVudGljYXRvcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnlIb3N0ZWRVSSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFJFRElSRUNURURfRlJPTV9IT1NURURfVUkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oUkVESVJFQ1RFRF9GUk9NX0hPU1RFRF9VSSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShieUhvc3RlZFVJICE9PSAndHJ1ZScpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuY2hlY2tVc2VyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNoZWNrVXNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHVzZXIsIGVycm9yXzEsIGNhY2hlZEF1dGhTdGF0ZSwgZXJyb3JfMjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghQXV0aCB8fCB0eXBlb2YgQXV0aC5jdXJyZW50QXV0aGVudGljYXRlZFVzZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTk9fQVVUSF9NT0RVTEVfRk9VTkQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgOV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgQXV0aC5jdXJyZW50QXV0aGVudGljYXRlZFVzZXIoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaEF1dGhTdGF0ZUNoYW5nZUV2ZW50KEF1dGhTdGF0ZS5TaWduZWRJbiwgdXNlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA5XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlZEF1dGhTdGF0ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlZEF1dGhTdGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEFVVEhFTlRJQ0FUT1JfQVVUSFNUQVRFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnRmFpbGVkIHRvIGdldCB0aGUgYXV0aCBzdGF0ZSBmcm9tIGxvY2FsIHN0b3JhZ2UnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbNCwgNywgLCA4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShjYWNoZWRBdXRoU3RhdGUgPT09IEF1dGhTdGF0ZS5TaWduZWRJbikpIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgQXV0aC5zaWduT3V0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDY7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoQXV0aFN0YXRlQ2hhbmdlRXZlbnQodGhpcy5pbml0aWFsQXV0aFN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDhdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8yID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdGYWlsZWQgdG8gc2lnbiBvdXQnLCBlcnJvcl8yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDhdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6IHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5vbkF1dGhTdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uIChuZXh0QXV0aFN0YXRlLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV4dEF1dGhTdGF0ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbG9nZ2VyLmVycm9yKCduZXh0QXV0aFN0YXRlIGNhbm5vdCBiZSB1bmRlZmluZWQnKV07XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ0luc2lkZSBvbkF1dGhTdGF0ZUNoYW5nZSBNZXRob2QgY3VycmVudCBhdXRoU3RhdGU6JywgdGhpcy5hdXRoU3RhdGUpO1xuICAgICAgICAgICAgICAgIGlmIChuZXh0QXV0aFN0YXRlID09PSBBdXRoU3RhdGUuU2lnbmVkT3V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFN0YXRlID0gdGhpcy5pbml0aWFsQXV0aFN0YXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU3RhdGUgPSBuZXh0QXV0aFN0YXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhEYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRoRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmxvZygnQXV0aCBEYXRhIHdhcyBzZXQ6JywgdGhpcy5hdXRoRGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0aFN0YXRlID09PSBuZXh0QXV0aFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKHRoaXMuYXV0aFN0YXRlLCB0aGlzLmF1dGhEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oXCJhdXRoU3RhdGUgaGFzIGJlZW4gdXBkYXRlZCB0byBcIiArIHRoaXMuYXV0aFN0YXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUucmVuZGVyQXV0aENvbXBvbmVudCA9IGZ1bmN0aW9uIChhdXRoU3RhdGUpIHtcbiAgICAgICAgc3dpdGNoIChhdXRoU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgQXV0aFN0YXRlLlNpZ25JbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gKGgoXCJzbG90XCIsIHsgbmFtZTogXCJzaWduLWluXCIgfSwgaChcImFtcGxpZnktc2lnbi1pblwiLCB7IGZlZGVyYXRlZDogdGhpcy5mZWRlcmF0ZWQsIHVzZXJuYW1lQWxpYXM6IHRoaXMudXNlcm5hbWVBbGlhcyB9KSkpO1xuICAgICAgICAgICAgY2FzZSBBdXRoU3RhdGUuQ29uZmlybVNpZ25JbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gKGgoXCJzbG90XCIsIHsgbmFtZTogXCJjb25maXJtLXNpZ24taW5cIiB9LCBoKFwiYW1wbGlmeS1jb25maXJtLXNpZ24taW5cIiwgeyB1c2VyOiB0aGlzLmF1dGhEYXRhIH0pKSk7XG4gICAgICAgICAgICBjYXNlIEF1dGhTdGF0ZS5TaWduVXA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChoKFwic2xvdFwiLCB7IG5hbWU6IFwic2lnbi11cFwiIH0sIGgoXCJhbXBsaWZ5LXNpZ24tdXBcIiwgeyB1c2VybmFtZUFsaWFzOiB0aGlzLnVzZXJuYW1lQWxpYXMgfSkpKTtcbiAgICAgICAgICAgIGNhc2UgQXV0aFN0YXRlLkNvbmZpcm1TaWduVXA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChoKFwic2xvdFwiLCB7IG5hbWU6IFwiY29uZmlybS1zaWduLXVwXCIgfSwgaChcImFtcGxpZnktY29uZmlybS1zaWduLXVwXCIsIHsgdXNlcjogdGhpcy5hdXRoRGF0YSwgdXNlcm5hbWVBbGlhczogdGhpcy51c2VybmFtZUFsaWFzIH0pKSk7XG4gICAgICAgICAgICBjYXNlIEF1dGhTdGF0ZS5Gb3Jnb3RQYXNzd29yZDpcbiAgICAgICAgICAgICAgICByZXR1cm4gKGgoXCJzbG90XCIsIHsgbmFtZTogXCJmb3Jnb3QtcGFzc3dvcmRcIiB9LCBoKFwiYW1wbGlmeS1mb3Jnb3QtcGFzc3dvcmRcIiwgeyB1c2VybmFtZUFsaWFzOiB0aGlzLnVzZXJuYW1lQWxpYXMgfSkpKTtcbiAgICAgICAgICAgIGNhc2UgQXV0aFN0YXRlLlJlc2V0UGFzc3dvcmQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChoKFwic2xvdFwiLCB7IG5hbWU6IFwicmVxdWlyZS1uZXctcGFzc3dvcmRcIiB9LCBoKFwiYW1wbGlmeS1yZXF1aXJlLW5ldy1wYXNzd29yZFwiLCB7IHVzZXI6IHRoaXMuYXV0aERhdGEgfSkpKTtcbiAgICAgICAgICAgIGNhc2UgQXV0aFN0YXRlLlZlcmlmeUNvbnRhY3Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChoKFwic2xvdFwiLCB7IG5hbWU6IFwidmVyaWZ5LWNvbnRhY3RcIiB9LCBoKFwiYW1wbGlmeS12ZXJpZnktY29udGFjdFwiLCB7IHVzZXI6IHRoaXMuYXV0aERhdGEgfSkpKTtcbiAgICAgICAgICAgIGNhc2UgQXV0aFN0YXRlLlRPVFBTZXR1cDpcbiAgICAgICAgICAgICAgICByZXR1cm4gKGgoXCJzbG90XCIsIHsgbmFtZTogXCJ0b3RwLXNldHVwXCIgfSwgaChcImFtcGxpZnktdG90cC1zZXR1cFwiLCB7IHVzZXI6IHRoaXMuYXV0aERhdGEgfSkpKTtcbiAgICAgICAgICAgIGNhc2UgQXV0aFN0YXRlLkxvYWRpbmc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChoKFwic2xvdFwiLCB7IG5hbWU6IFwibG9hZGluZ1wiIH0sIGgoXCJkaXZcIiwgbnVsbCwgXCJMb2FkaW5nLi4uXCIpKSk7XG4gICAgICAgICAgICBjYXNlIEF1dGhTdGF0ZS5TaWduZWRJbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gW2goXCJzbG90XCIsIHsgbmFtZTogXCJncmVldGluZ3NcIiB9KSwgaChcInNsb3RcIiwgbnVsbCldO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmhhbmRsZWQgYXV0aCBzdGF0ZTogXCIgKyBhdXRoU3RhdGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBIdWIucmVtb3ZlKEFVVEhfQ0hBTk5FTCwgdGhpcy5oYW5kbGVFeHRlcm5hbEF1dGhFdmVudCk7XG4gICAgICAgIEh1Yi5yZW1vdmUoVUlfQVVUSF9DSEFOTkVMLCB0aGlzLmhhbmRsZVRvYXN0RXZlbnQpO1xuICAgICAgICByZXR1cm4gb25BdXRoVUlTdGF0ZUNoYW5nZTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIHRoaXMudG9hc3RNZXNzYWdlID8gKGgoXCJhbXBsaWZ5LXRvYXN0XCIsIHsgbWVzc2FnZTogdGhpcy50b2FzdE1lc3NhZ2UsIGhhbmRsZUNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudG9hc3RNZXNzYWdlID0gJyc7XG4gICAgICAgICAgICB9LCBcImRhdGEtdGVzdFwiOiBcImF1dGhlbnRpY2F0b3ItZXJyb3JcIiB9KSkgOiBudWxsLCB0aGlzLnJlbmRlckF1dGhDb21wb25lbnQodGhpcy5hdXRoU3RhdGUpKSk7XG4gICAgfTtcbiAgICByZXR1cm4gY2xhc3NfMTtcbn0oKSk7XG5BbXBsaWZ5QXV0aGVudGljYXRvci5zdHlsZSA9IGFtcGxpZnlBdXRoZW50aWNhdG9yQ3NzO1xuZXhwb3J0IHsgQW1wbGlmeUF1dGhlbnRpY2F0b3IgYXMgYW1wbGlmeV9hdXRoZW50aWNhdG9yIH07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsgTG9nZ2VyLCBpc0VtcHR5IH0gZnJvbSAnQGF3cy1hbXBsaWZ5L2NvcmUnO1xuaW1wb3J0IHsgQSBhcyBBdXRoU3RhdGUsIEMgYXMgQ2hhbGxlbmdlTmFtZSB9IGZyb20gJy4vYXV0aC10eXBlcy03OGRmMzA0ZS5qcyc7XG5pbXBvcnQgeyBBdXRoIH0gZnJvbSAnQGF3cy1hbXBsaWZ5L2F1dGgnO1xuaW1wb3J0IHsgTiBhcyBOT19BVVRIX01PRFVMRV9GT1VORCB9IGZyb20gJy4vY29uc3RhbnRzLWQxYWJlN2RlLmpzJztcbmltcG9ydCB7IGEgYXMgZGlzcGF0Y2hUb2FzdEh1YkV2ZW50IH0gZnJvbSAnLi9oZWxwZXJzLTAxZWNmNWY5LmpzJztcbnZhciBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdhdXRoLWhlbHBlcnMnKTtcbmZ1bmN0aW9uIGNoZWNrQ29udGFjdCh1c2VyLCBoYW5kbGVBdXRoU3RhdGVDaGFuZ2UpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhLCBuZXdVc2VyLCBlcnJvcl8xO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIUF1dGggfHwgdHlwZW9mIEF1dGgudmVyaWZpZWRDb250YWN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTk9fQVVUSF9NT0RVTEVfRk9VTkQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIEF1dGgudmVyaWZpZWRDb250YWN0KHVzZXIpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNFbXB0eShkYXRhLnZlcmlmaWVkKSB8fCBpc0VtcHR5KGRhdGEudW52ZXJpZmllZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUF1dGhTdGF0ZUNoYW5nZShBdXRoU3RhdGUuU2lnbmVkSW4sIHVzZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VXNlciA9IE9iamVjdC5hc3NpZ24odXNlciwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLlZlcmlmeUNvbnRhY3QsIG5ld1VzZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hUb2FzdEh1YkV2ZW50KGVycm9yXzEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG52YXIgaGFuZGxlU2lnbkluID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCwgaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB1c2VyLCBlcnJvcl8yO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGlmICghQXV0aCB8fCB0eXBlb2YgQXV0aC5zaWduSW4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5PX0FVVEhfTU9EVUxFX0ZPVU5EKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgOSwgLCAxMF0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIEF1dGguc2lnbkluKHVzZXJuYW1lLCBwYXNzd29yZCldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHVzZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKHVzZXIpO1xuICAgICAgICAgICAgICAgIGlmICghKHVzZXIuY2hhbGxlbmdlTmFtZSA9PT0gQ2hhbGxlbmdlTmFtZS5TTVNNRkEgfHwgdXNlci5jaGFsbGVuZ2VOYW1lID09PSBDaGFsbGVuZ2VOYW1lLlNvZnR3YXJlVG9rZW5NRkEpKSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoJ2NvbmZpcm0gdXNlciB3aXRoICcgKyB1c2VyLmNoYWxsZW5nZU5hbWUpO1xuICAgICAgICAgICAgICAgIGhhbmRsZUF1dGhTdGF0ZUNoYW5nZShBdXRoU3RhdGUuQ29uZmlybVNpZ25JbiwgdXNlcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgaWYgKCEodXNlci5jaGFsbGVuZ2VOYW1lID09PSBDaGFsbGVuZ2VOYW1lLk5ld1Bhc3N3b3JkUmVxdWlyZWQpKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoJ3JlcXVpcmUgbmV3IHBhc3N3b3JkJywgdXNlci5jaGFsbGVuZ2VQYXJhbSk7XG4gICAgICAgICAgICAgICAgaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5SZXNldFBhc3N3b3JkLCB1c2VyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA4XTtcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBpZiAoISh1c2VyLmNoYWxsZW5nZU5hbWUgPT09IENoYWxsZW5nZU5hbWUuTUZBU2V0dXApKSByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoJ1RPVFAgc2V0dXAnLCB1c2VyLmNoYWxsZW5nZVBhcmFtKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLlRPVFBTZXR1cCwgdXNlcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgaWYgKCEodXNlci5jaGFsbGVuZ2VOYW1lID09PSBDaGFsbGVuZ2VOYW1lLkN1c3RvbUNoYWxsZW5nZSAmJlxuICAgICAgICAgICAgICAgICAgICB1c2VyLmNoYWxsZW5nZVBhcmFtICYmXG4gICAgICAgICAgICAgICAgICAgIHVzZXIuY2hhbGxlbmdlUGFyYW0udHJpZ2dlciA9PT0gJ3RydWUnKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdjdXN0b20gY2hhbGxlbmdlJywgdXNlci5jaGFsbGVuZ2VQYXJhbSk7XG4gICAgICAgICAgICAgICAgaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5DdXN0b21Db25maXJtU2lnbkluLCB1c2VyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA4XTtcbiAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFs0IC8qeWllbGQqLywgY2hlY2tDb250YWN0KHVzZXIsIGhhbmRsZUF1dGhTdGF0ZUNoYW5nZSldO1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDg7XG4gICAgICAgICAgICBjYXNlIDg6IHJldHVybiBbMyAvKmJyZWFrKi8sIDEwXTtcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICBlcnJvcl8yID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoVG9hc3RIdWJFdmVudChlcnJvcl8yKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JfMi5jb2RlID09PSAnVXNlck5vdENvbmZpcm1lZEV4Y2VwdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCd0aGUgdXNlciBpcyBub3QgY29uZmlybWVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUF1dGhTdGF0ZUNoYW5nZShBdXRoU3RhdGUuQ29uZmlybVNpZ25VcCwgeyB1c2VybmFtZTogdXNlcm5hbWUgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVycm9yXzIuY29kZSA9PT0gJ1Bhc3N3b3JkUmVzZXRSZXF1aXJlZEV4Y2VwdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCd0aGUgdXNlciByZXF1aXJlcyBhIG5ldyBwYXNzd29yZCcpO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLkZvcmdvdFBhc3N3b3JkLCB7IHVzZXJuYW1lOiB1c2VybmFtZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMTBdO1xuICAgICAgICAgICAgY2FzZSAxMDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbmV4cG9ydCB7IGNoZWNrQ29udGFjdCBhcyBjLCBoYW5kbGVTaWduSW4gYXMgaCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==