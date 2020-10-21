(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[2],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-confirm-sign-in_7.entry.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-confirm-sign-in_7.entry.js ***!
  \*************************************************************************************************/
/*! exports provided: amplify_confirm_sign_in, amplify_confirm_sign_up, amplify_forgot_password, amplify_require_new_password, amplify_sign_in, amplify_sign_up, amplify_verify_contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_confirm_sign_in", function() { return AmplifyConfirmSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_confirm_sign_up", function() { return AmplifyConfirmSignUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_forgot_password", function() { return AmplifyForgotPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_require_new_password", function() { return AmplifyRequireNewPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_sign_in", function() { return AmplifySignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_sign_up", function() { return AmplifySignUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_verify_contact", function() { return AmplifyVerifyContact; });
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
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};








var AmplifyConfirmSignIn = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Fires when confirm sign in form is submitted */
        this.handleSubmit = function (event) { return _this.confirm(event); };
        /** Used for header text in confirm sign in component */
        this.headerText = _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SMS_CODE;
        /** Used for the submit button text in confirm sign in component */
        this.submitButtonText = _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM;
        /** Auth state change handler for this component */
        this.handleAuthStateChange = _helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        /**
         * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
         * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
         * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
         * ```
         * [
         *  {
         *    type: string,
         *    label: string,
         *    placeholder: string,
         *    hint: string | Functional Component | null,
         *    required: boolean
         *  }
         * ]
         * ```
         */
        this.formFields = [
            {
                type: 'code',
                required: true,
                handleInputChange: function (event) { return _this.handleCodeChange(event); },
            },
        ];
        /** The MFA option to confirm with */
        this.mfaOption = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["M"].SMS;
        /* Whether or not the confirm-sign-in component is loading */
        this.loading = false;
    }
    class_1.prototype.componentWillLoad = function () {
        if (this.user && this.user['challengeName'] === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["C"].SoftwareTokenMFA) {
            this.mfaOption = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["M"].TOTP;
            // If header text is using default use TOTP string
            if (this.headerText === _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SMS_CODE) {
                this.headerText = _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_TOTP_CODE;
            }
        }
    };
    class_1.prototype.handleCodeChange = function (event) {
        this.code = event.target.value;
    };
    class_1.prototype.confirm = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var mfaType, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (event) {
                            event.preventDefault();
                        }
                        mfaType = this.user['challengeName'] === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["C"].SoftwareTokenMFA ? _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["C"].SoftwareTokenMFA : null;
                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].confirmSignIn !== 'function') {
                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                        }
                        this.loading = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].confirmSignIn(this.user, this.code, mfaType)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, Object(_auth_helpers_2fada98e_js__WEBPACK_IMPORTED_MODULE_7__["c"])(this.user, this.handleAuthStateChange)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        error_1 = _a.sent();
                        Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_1);
                        return [3 /*break*/, 6];
                    case 5:
                        this.loading = false;
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText), handleSubmit: this.handleSubmit, submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.submitButtonText), loading: this.loading, secondaryFooterContent: Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: function () { return _this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn); } }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].BACK_TO_SIGN_IN))) }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth-fields", { formFields: this.formFields })));
    };
    return class_1;
}());
var AmplifyConfirmSignUp = /** @class */ (function () {
    function class_2(hostRef) {
        var _this = this;
        Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Fires when sign up form is submitted */
        this.handleSubmit = function (event) { return _this.confirmSignUp(event); };
        /** Used for header text in confirm sign up component */
        this.headerText = _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_HEADER_TEXT;
        /** Used for the submit button text in confirm sign up component */
        this.submitButtonText = _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT;
        /**
         * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
         * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
         * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
         * ```
         * [
         *  {
         *    type: string,
         *    label: string,
         *    placeholder: string,
         *    hint: string | Functional Component | null,
         *    required: boolean
         *  }
         * ]
         * ```
         */
        this.formFields = [];
        /** Auth state change handler for this components
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = _helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */
        this.usernameAlias = 'username';
        this.loading = false;
        this.userInput = this.user ? this.user.username : null;
        this._signUpAttrs = this.user && this.user.signUpAttrs ? this.user.signUpAttrs : null;
        this.newFormFields = [];
        this.phoneNumber = {
            countryDialCodeValue: _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["h"],
            phoneNumberValue: null,
        };
    }
    class_2.prototype.componentWillLoad = function () {
        Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["c"])(this.usernameAlias);
        this.buildFormFields();
    };
    class_2.prototype.formFieldsHandler = function () {
        this.buildFormFields();
    };
    class_2.prototype.buildDefaultFormFields = function () {
        var _this = this;
        this.newFormFields = [
            {
                type: "" + this.usernameAlias,
                required: true,
                handleInputChange: this.handleFormFieldInputChange("" + this.usernameAlias),
                value: this.userInput,
                disabled: this.userInput ? true : false,
            },
            {
                type: 'code',
                label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_CODE_LABEL),
                placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_CODE_PLACEHOLDER),
                required: true,
                hint: (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_LOST_CODE), ' ', Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: function () { return _this.resendConfirmCode(); } }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_RESEND_CODE)))),
                handleInputChange: this.handleFormFieldInputChange('code'),
            },
        ];
    };
    class_2.prototype.buildFormFields = function () {
        var _this = this;
        if (this.formFields.length === 0) {
            this.buildDefaultFormFields();
        }
        else {
            var newFields_1 = [];
            this.formFields.forEach(function (field) {
                var newField = Object.assign({}, field);
                if (newField.type === 'code') {
                    newField['hint'] = Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["i"])(newField) ? (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_LOST_CODE), ' ', Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: function () { return _this.resendConfirmCode(); } }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_RESEND_CODE)))) : (newField['hint']);
                }
                newField['handleInputChange'] = function (event) { return _this.handleFormFieldInputWithCallback(event, field); };
                newFields_1.push(newField);
            });
            this.newFormFields = newFields_1;
        }
    };
    class_2.prototype.handleFormFieldInputChange = function (fieldType) {
        var _this = this;
        switch (fieldType) {
            case 'username':
            case 'email':
                return function (event) { return (_this.userInput = event.target.value); };
            case 'phone_number':
                return function (event) { return Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["h"])(event, _this.phoneNumber); };
            case 'code':
                return function (event) { return (_this.code = event.target.value); };
            default:
                return;
        }
    };
    class_2.prototype.setFieldValue = function (field) {
        switch (field.type) {
            case 'username':
            case 'email':
                if (field.value === undefined) {
                    this.userInput = '';
                }
                else {
                    this.userInput = field.value;
                }
                break;
            case 'phone_number':
                if (field.dialCode) {
                    this.phoneNumber.countryDialCodeValue = field.dialCode;
                }
                this.phoneNumber.phoneNumberValue = field.value;
                break;
        }
    };
    class_2.prototype.handleFormFieldInputWithCallback = function (event, field) {
        var fnToCall = field['handleInputChange']
            ? field['handleInputChange']
            : function (event, cb) {
                cb(event);
            };
        var callback = this.handleFormFieldInputChange(field.type);
        fnToCall(event, callback.bind(this));
    };
    class_2.prototype.resendConfirmCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (event) {
                            event.preventDefault();
                        }
                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].resendSignUp !== 'function') {
                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        if (!this.userInput)
                            throw new Error('Username can not be empty');
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].resendSignUp(this.userInput)];
                    case 2:
                        _a.sent();
                        this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignUp);
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // TODO: Add validation
    // TODO: Prefix
    class_2.prototype.confirmSignUp = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var confirmSignUpResult, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (event) {
                            event.preventDefault();
                        }
                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].confirmSignUp !== 'function') {
                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                        }
                        this.loading = true;
                        switch (this.usernameAlias) {
                            case 'phone_number':
                                try {
                                    this.userInput = Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this.phoneNumber);
                                }
                                catch (error) {
                                    Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error);
                                }
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, 7, 8]);
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].confirmSignUp(this.userInput, this.code)];
                    case 2:
                        confirmSignUpResult = _a.sent();
                        if (!confirmSignUpResult) {
                            throw new Error(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_FAILED));
                        }
                        if (!(this._signUpAttrs && this._signUpAttrs.password && this._signUpAttrs.password !== '')) return [3 /*break*/, 4];
                        // Auto sign in user if password is available from previous workflow
                        return [4 /*yield*/, Object(_auth_helpers_2fada98e_js__WEBPACK_IMPORTED_MODULE_7__["h"])(this.userInput, this._signUpAttrs.password, this.handleAuthStateChange)];
                    case 3:
                        // Auto sign in user if password is available from previous workflow
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn);
                        _a.label = 5;
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        error_3 = _a.sent();
                        Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_3);
                        return [3 /*break*/, 8];
                    case 7:
                        this.loading = false;
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.render = function () {
        var _this = this;
        return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText), submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.submitButtonText), handleSubmit: this.handleSubmit, secondaryFooterContent: Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: function () { return _this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn); } }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].BACK_TO_SIGN_IN)))) }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth-fields", { formFields: this.newFormFields })));
    };
    Object.defineProperty(class_2, "watchers", {
        get: function () {
            return {
                "formFields": ["formFieldsHandler"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_2;
}());
var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('ForgotPassword');
var AmplifyForgotPassword = /** @class */ (function () {
    function class_3(hostRef) {
        var _this = this;
        Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The header text of the forgot password section */
        this.headerText = _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].RESET_YOUR_PASSWORD;
        /** The text displayed inside of the send code button for the form */
        this.sendButtonText = _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].SEND_CODE;
        /** The text displayed inside of the submit button for the form */
        this.submitButtonText = _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].SUBMIT;
        /** The form fields displayed inside of the forgot password form */
        this.formFields = [];
        /** The function called when making a request to reset password */
        this.handleSend = function (event) { return _this.send(event); };
        /** The function called when submitting a new password */
        this.handleSubmit = function (event) { return _this.submit(event); };
        /** Auth state change handler for this component */
        this.handleAuthStateChange = _helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */
        this.usernameAlias = 'username';
        this.delivery = null;
        this.loading = false;
        this.phoneNumber = {
            countryDialCodeValue: _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["h"],
            phoneNumberValue: null,
        };
        this.newFormFields = [];
        this.forgotPasswordAttrs = {
            userInput: '',
            password: '',
            code: '',
        };
    }
    class_3.prototype.componentWillLoad = function () {
        Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["c"])(this.usernameAlias);
        this.buildFormFields();
    };
    class_3.prototype.formFieldsHandler = function () {
        this.buildFormFields();
    };
    class_3.prototype.buildFormFields = function () {
        var _this = this;
        if (this.formFields.length === 0) {
            this.buildDefaultFormFields();
        }
        else {
            this.formFields.forEach(function (field) {
                var newField = Object.assign({}, field);
                newField['handleInputChange'] = function (event) { return _this.handleFormFieldInputWithCallback(event, field); };
                _this.newFormFields.push(newField);
            });
        }
    };
    class_3.prototype.buildDefaultFormFields = function () {
        switch (this.usernameAlias) {
            case 'email':
                this.newFormFields = [
                    {
                        type: 'email',
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('email'),
                        inputProps: {
                            'data-test': 'forgot-password-email-input',
                        },
                    },
                ];
                break;
            case 'phone_number':
                this.newFormFields = [
                    {
                        type: 'phone_number',
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('phone_number'),
                        inputProps: {
                            'data-test': 'forgot-password-phone-number-input',
                        },
                    },
                ];
                break;
            case 'username':
            default:
                this.newFormFields = [
                    {
                        type: 'username',
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('username'),
                        inputProps: {
                            'data-test': 'forgot-password-username-input',
                        },
                    },
                ];
                break;
        }
    };
    class_3.prototype.handleFormFieldInputChange = function (fieldType) {
        var _this = this;
        switch (fieldType) {
            case 'username':
            case 'email':
                return function (event) { return (_this.forgotPasswordAttrs.userInput = event.target.value); };
            case 'phone_number':
                return function (event) { return Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["h"])(event, _this.phoneNumber); };
            case 'password':
            case 'code':
                return function (event) { return (_this.forgotPasswordAttrs[fieldType] = event.target.value); };
            default:
                return;
        }
    };
    class_3.prototype.setFieldValue = function (field, formAttributes) {
        switch (field.type) {
            case 'username':
            case 'email':
                if (field.value === undefined) {
                    formAttributes.userInput = '';
                }
                else {
                    formAttributes.userInput = field.value;
                }
                break;
            case 'phone_number':
                if (field.dialCode) {
                    this.phoneNumber.countryDialCodeValue = field.dialCode;
                }
                this.phoneNumber.phoneNumberValue = field.value;
                break;
            case 'password':
            case 'code':
                if (field.value === undefined) {
                    formAttributes[field.type] = '';
                }
                else {
                    formAttributes[field.type] = field.value;
                }
                break;
        }
    };
    class_3.prototype.handleFormFieldInputWithCallback = function (event, field) {
        var fnToCall = field['handleInputChange']
            ? field['handleInputChange']
            : function (event, cb) {
                cb(event);
            };
        var callback = this.handleFormFieldInputChange(field.type);
        fnToCall(event, callback.bind(this));
    };
    class_3.prototype.send = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (event) {
                            event.preventDefault();
                        }
                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].forgotPassword !== 'function') {
                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                        }
                        this.loading = true;
                        switch (this.usernameAlias) {
                            case 'phone_number':
                                try {
                                    this.forgotPasswordAttrs.userInput = Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this.phoneNumber);
                                }
                                catch (error) {
                                    Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error);
                                }
                                break;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].forgotPassword(this.forgotPasswordAttrs.userInput)];
                    case 2:
                        data = _a.sent();
                        logger.debug(data);
                        this.newFormFields = [
                            {
                                type: 'code',
                                required: true,
                                handleInputChange: this.handleFormFieldInputChange('code'),
                                inputProps: {
                                    'data-test': 'forgot-password-code-input',
                                },
                            },
                            {
                                type: 'password',
                                required: true,
                                handleInputChange: this.handleFormFieldInputChange('password'),
                                label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].NEW_PASSWORD_LABEL),
                                placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].NEW_PASSWORD_PLACEHOLDER),
                            },
                        ];
                        this.delivery = data.CodeDeliveryDetails;
                        return [3 /*break*/, 5];
                    case 3:
                        error_4 = _a.sent();
                        Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_4);
                        return [3 /*break*/, 5];
                    case 4:
                        this.loading = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    class_3.prototype.submit = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, userInput, code, password, data, error_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (event) {
                            event.preventDefault();
                        }
                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].forgotPasswordSubmit !== 'function') {
                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                        }
                        this.loading = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, 4, 5]);
                        _a = this.forgotPasswordAttrs, userInput = _a.userInput, code = _a.code, password = _a.password;
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].forgotPasswordSubmit(userInput, code, password)];
                    case 2:
                        data = _b.sent();
                        logger.debug(data);
                        this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn);
                        this.delivery = null;
                        return [3 /*break*/, 5];
                    case 3:
                        error_5 = _b.sent();
                        Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_5);
                        return [3 /*break*/, 5];
                    case 4:
                        this.loading = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    class_3.prototype.render = function () {
        var _this = this;
        var submitFn = this.delivery ? function (event) { return _this.handleSubmit(event); } : function (event) { return _this.handleSend(event); };
        var submitButtonText = this.delivery ? this.submitButtonText : this.sendButtonText;
        return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText), handleSubmit: submitFn, loading: this.loading, secondaryFooterContent: Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: function () { return _this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn); }, "data-test": "forgot-password-back-to-sign-in-link" }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].BACK_TO_SIGN_IN)), testDataPrefix: 'forgot-password', submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(submitButtonText) }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth-fields", { formFields: this.newFormFields })));
    };
    Object.defineProperty(class_3, "watchers", {
        get: function () {
            return {
                "formFields": ["formFieldsHandler"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_3;
}());
var logger$1 = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["ConsoleLogger"]('amplify-require-new-password');
var AmplifyRequireNewPassword = /** @class */ (function () {
    function class_4(hostRef) {
        var _this = this;
        Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The header text of the forgot password section */
        this.headerText = _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].CHANGE_PASSWORD;
        /** The text displayed inside of the submit button for the form */
        this.submitButtonText = _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].CHANGE_PASSWORD_ACTION;
        /** The function called when submitting a new password */
        this.handleSubmit = function (event) { return _this.completeNewPassword(event); };
        /** Auth state change handler for this component */
        this.handleAuthStateChange = _helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        /** The form fields displayed inside of the forgot password form */
        this.formFields = [
            {
                type: _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["a"].Password,
                required: true,
                handleInputChange: function (event) { return _this.handlePasswordChange(event); },
                label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].NEW_PASSWORD_LABEL),
                placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].NEW_PASSWORD_PLACEHOLDER),
                inputProps: {
                    'data-test': 'require-new-password-password-input',
                },
            },
        ];
        this.currentUser = this.user;
        this.loading = false;
        this.requiredAttributes = {};
        this.newFormFields = this.formFields;
    }
    class_4.prototype.handleRequiredAttributeInputChange = function (attribute, event) {
        this.requiredAttributes[attribute] = event.target.value;
    };
    class_4.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_6, userRequiredAttributes;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.user) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser()];
                    case 2:
                        user = _a.sent();
                        if (user)
                            this.currentUser = user;
                        return [3 /*break*/, 4];
                    case 3:
                        error_6 = _a.sent();
                        Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_6);
                        return [3 /*break*/, 4];
                    case 4:
                        if (this.currentUser && this.currentUser.challengeParam.requiredAttributes) {
                            userRequiredAttributes = this.currentUser.challengeParam.requiredAttributes;
                            userRequiredAttributes.forEach(function (attribute) {
                                var formField = {
                                    type: attribute,
                                    required: true,
                                    label: _helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["r"][attribute].label,
                                    placeholder: _helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["r"][attribute].placeholder,
                                    handleInputChange: function (event) { return _this.handleRequiredAttributeInputChange(attribute, event); },
                                    inputProps: {
                                        'data-test': "require-new-password-" + attribute + "-input",
                                    },
                                };
                                _this.newFormFields.push(formField);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    class_4.prototype.handlePasswordChange = function (event) {
        this.password = event.target.value;
    };
    class_4.prototype.completeNewPassword = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var user, _a, error_7;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (event) {
                            event.preventDefault();
                        }
                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].completeNewPassword !== 'function') {
                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                        }
                        this.loading = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 8, 9, 10]);
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].completeNewPassword(this.currentUser, this.password, this.requiredAttributes)];
                    case 2:
                        user = _b.sent();
                        logger$1.debug('complete new password', user);
                        _a = user.challengeName;
                        switch (_a) {
                            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["C"].SMSMFA: return [3 /*break*/, 3];
                            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["C"].MFASetup: return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 5];
                    case 3:
                        this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignIn, user);
                        return [3 /*break*/, 7];
                    case 4:
                        logger$1.debug('TOTP setup', user.challengeParam);
                        this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].TOTPSetup, user);
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, Object(_auth_helpers_2fada98e_js__WEBPACK_IMPORTED_MODULE_7__["c"])(user, this.handleAuthStateChange)];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        error_7 = _b.sent();
                        Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_7);
                        return [3 /*break*/, 10];
                    case 9:
                        this.loading = false;
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    class_4.prototype.render = function () {
        var _this = this;
        return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText), handleSubmit: this.handleSubmit, loading: this.loading, secondaryFooterContent: Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: function () { return _this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn); } }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].BACK_TO_SIGN_IN)), submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.submitButtonText) }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth-fields", { formFields: this.newFormFields })));
    };
    return class_4;
}());
var amplifySignInCss = ":host{--footer-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--footer-font-family:var(--amplify-font-family);--font-weight:var(--amplify-font-weight)}.sign-in-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-in-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-in-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-in-form-footer amplify-button{margin-bottom:0}}.sign-in-form-footer *+*{margin-bottom:15px}";
var AmplifySignIn = /** @class */ (function () {
    function class_5(hostRef) {
        var _this = this;
        Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Fires when sign in form is submitted */
        this.handleSubmit = function (event) { return _this.signIn(event); };
        /** Used for header text in sign in component */
        this.headerText = _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_HEADER_TEXT;
        /** Used for the submit button text in sign in component */
        this.submitButtonText = _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_ACTION;
        /** Auth state change handler for this component */
        this.handleAuthStateChange = _helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */
        this.usernameAlias = 'username';
        /**
         * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
         * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
         * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
         * ```
         * [
         *  {
         *    type: string,
         *    label: string,
         *    placeholder: string,
         *    hint: string | Functional Component | null,
         *    required: boolean
         *  }
         * ]
         * ```
         */
        this.formFields = [];
        /** Hides the sign up link */
        this.hideSignUp = false;
        this.newFormFields = [];
        /* Whether or not the sign-in component is loading */
        this.loading = false;
        this.phoneNumber = {
            countryDialCodeValue: _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["h"],
            phoneNumberValue: null,
        };
        this.signInAttributes = {
            userInput: '',
            password: '',
        };
    }
    class_5.prototype.componentWillLoad = function () {
        Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["c"])(this.usernameAlias);
        this.buildFormFields();
    };
    class_5.prototype.formFieldsHandler = function () {
        this.buildFormFields();
    };
    class_5.prototype.handleFormFieldInputChange = function (fieldType) {
        var _this = this;
        switch (fieldType) {
            case 'username':
            case 'email':
                return function (event) { return (_this.signInAttributes.userInput = event.target.value); };
            case 'phone_number':
                return function (event) { return Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["h"])(event, _this.phoneNumber); };
            case 'password':
                return function (event) { return (_this.signInAttributes.password = event.target.value); };
        }
    };
    class_5.prototype.handleFormFieldInputWithCallback = function (event, field) {
        var fnToCall = field['handleInputChange']
            ? field['handleInputChange']
            : function (event, cb) {
                cb(event);
            };
        var callback = this.handleFormFieldInputChange(field.type);
        fnToCall(event, callback.bind(this));
    };
    class_5.prototype.signIn = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // avoid submitting the form
                        if (event) {
                            event.preventDefault();
                        }
                        this.loading = true;
                        switch (this.usernameAlias) {
                            case 'phone_number':
                                try {
                                    this.signInAttributes.userInput = Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this.phoneNumber);
                                }
                                catch (error) {
                                    Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error);
                                }
                        }
                        return [4 /*yield*/, Object(_auth_helpers_2fada98e_js__WEBPACK_IMPORTED_MODULE_7__["h"])(this.signInAttributes.userInput, this.signInAttributes.password, this.handleAuthStateChange)];
                    case 1:
                        _a.sent();
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    class_5.prototype.buildDefaultFormFields = function () {
        var _this = this;
        var formFieldInputs = [];
        switch (this.usernameAlias) {
            case 'email':
                formFieldInputs.push({
                    type: 'email',
                    required: true,
                    handleInputChange: this.handleFormFieldInputChange('email'),
                    inputProps: {
                        'data-test': 'sign-in-email-input',
                    },
                });
                break;
            case 'phone_number':
                formFieldInputs.push({
                    type: 'phone_number',
                    required: true,
                    handleInputChange: this.handleFormFieldInputChange('phone_number'),
                    inputProps: {
                        'data-test': 'sign-in-phone-number-input',
                    },
                });
                break;
            case 'username':
            default:
                formFieldInputs.push({
                    type: 'username',
                    required: true,
                    handleInputChange: this.handleFormFieldInputChange('username'),
                    inputProps: {
                        'data-test': 'sign-in-username-input',
                    },
                });
                break;
        }
        formFieldInputs.push({
            type: 'password',
            hint: (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].FORGOT_PASSWORD_TEXT), ' ', Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: function () { return _this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ForgotPassword); }, "data-test": "sign-in-forgot-password-link" }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].RESET_PASSWORD_TEXT)))),
            required: true,
            handleInputChange: this.handleFormFieldInputChange('password'),
            inputProps: {
                'data-test': 'sign-in-password-input',
            },
        });
        this.newFormFields = __spreadArrays(formFieldInputs);
    };
    class_5.prototype.buildFormFields = function () {
        var _this = this;
        if (this.formFields.length === 0) {
            this.buildDefaultFormFields();
        }
        else {
            var newFields_2 = [];
            this.formFields.forEach(function (field) {
                var newField = Object.assign({}, field);
                // TODO: handle hint better
                if (newField.type === 'password') {
                    newField['hint'] = Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["i"])(newField) ? (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].FORGOT_PASSWORD_TEXT), ' ', Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: function () { return _this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ForgotPassword); }, "data-test": "sign-in-forgot-password-link" }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].RESET_PASSWORD_TEXT)))) : (newField['hint']);
                }
                newField['handleInputChange'] = function (event) { return _this.handleFormFieldInputWithCallback(event, field); };
                _this.setFieldValue(newField, _this.signInAttributes);
                newFields_2.push(newField);
            });
            this.newFormFields = newFields_2;
        }
    };
    class_5.prototype.setFieldValue = function (field, formAttributes) {
        switch (field.type) {
            case 'username':
            case 'email':
                if (field.value === undefined) {
                    formAttributes.userInput = '';
                }
                else {
                    formAttributes.userInput = field.value;
                }
                break;
            case 'phone_number':
                if (field.dialCode) {
                    this.phoneNumber.countryDialCodeValue = field.dialCode;
                }
                this.phoneNumber.phoneNumberValue = field.value;
                break;
            case 'password':
                if (field.value === undefined) {
                    formAttributes.password = '';
                }
                else {
                    formAttributes.password = field.value;
                }
                break;
        }
    };
    class_5.prototype.render = function () {
        var _this = this;
        return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText), handleSubmit: this.handleSubmit, testDataPrefix: 'sign-in' }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { slot: "subtitle" }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "header-subtitle" })), Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "federated-buttons" }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-federated-buttons", { handleAuthStateChange: this.handleAuthStateChange, federated: this.federated })), !Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(this.federated) && Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-strike", null, "or"), Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth-fields", { formFields: this.newFormFields }), Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { slot: "amplify-form-section-footer", class: "sign-in-form-footer" }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "footer" }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "secondary-footer-content" }, !this.hideSignUp ? (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].NO_ACCOUNT_TEXT), ' ', Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: function () { return _this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignUp); }, "data-test": "sign-in-create-account-link" }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].CREATE_ACCOUNT_TEXT)))) : (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null))), Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "primary-footer-content" }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { type: "submit", disabled: this.loading, "data-test": "sign-in-sign-in-button" }, this.loading ? Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-loading-spinner", null) : Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.submitButtonText))))))));
    };
    Object.defineProperty(class_5, "watchers", {
        get: function () {
            return {
                "formFields": ["formFieldsHandler"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_5;
}());
AmplifySignIn.style = amplifySignInCss;
var amplifySignUpCss = ":host{--footer-font-family:var(--amplify-font-family);--footer-font-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--font-weight:var(--amplify-font-weight)}.sign-up-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-font-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-up-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-up-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-up-form-footer amplify-button{margin-bottom:0}}.sign-up-form-footer *+*{margin-bottom:15px}";
var AmplifySignUp = /** @class */ (function () {
    function class_6(hostRef) {
        var _this = this;
        Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Fires when sign up form is submitted */
        this.handleSubmit = function (event) { return _this.signUp(event); };
        /** Used for header text in sign up component */
        this.headerText = _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_HEADER_TEXT;
        /** Used for the submit button text in sign up component */
        this.submitButtonText = _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_SUBMIT_BUTTON_TEXT;
        /** Used for the submit button text in sign up component */
        this.haveAccountText = _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_HAVE_ACCOUNT_TEXT;
        /** Used for the submit button text in sign up component */
        this.signInText = _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_TEXT;
        /**
         * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
         * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
         * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
         * ```
         * [
         *  {
         *    type: string,
         *    label: string,
         *    placeholder: string,
         *    hint: string | Functional Component | null,
         *    required: boolean
         *  }
         * ]
         * ```
         */
        this.formFields = [];
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = _helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */
        this.usernameAlias = 'username';
        // private userInput: string | PhoneNumberInterface;
        this.newFormFields = [];
        this.phoneNumber = {
            countryDialCodeValue: _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["h"],
            phoneNumberValue: null,
        };
        this.loading = false;
        this.signUpAttributes = {
            username: '',
            password: '',
            attributes: {},
        };
    }
    class_6.prototype.handleFormFieldInputChange = function (fieldType) {
        var _this = this;
        switch (fieldType) {
            case 'username':
                return function (event) { return (_this.signUpAttributes.username = event.target.value); };
            case 'password':
                return function (event) { return (_this.signUpAttributes.password = event.target.value); };
            case 'email':
                return function (event) { return (_this.signUpAttributes.attributes.email = event.target.value); };
            case 'phone_number':
                return function (event) { return Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["h"])(event, _this.phoneNumber); };
            default:
                return function (event) { return (_this.signUpAttributes.attributes[fieldType] = event.target.value); };
        }
    };
    class_6.prototype.handleFormFieldInputWithCallback = function (event, field) {
        var fnToCall = field['handleInputChange']
            ? field['handleInputChange']
            : function (event, cb) {
                cb(event);
            };
        var callback = this.handleFormFieldInputChange(field.type);
        fnToCall(event, callback.bind(this));
    };
    // TODO: Add validation
    // TODO: Prefix
    class_6.prototype.signUp = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var data, signUpAttrs, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (event) {
                            event.preventDefault();
                        }
                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].signUp !== 'function') {
                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                        }
                        if (this.phoneNumber.phoneNumberValue) {
                            try {
                                this.signUpAttributes.attributes.phone_number = Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this.phoneNumber);
                            }
                            catch (error) {
                                Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error);
                            }
                        }
                        switch (this.usernameAlias) {
                            case 'email':
                            case 'phone_number':
                                this.signUpAttributes.username = this.signUpAttributes.attributes[this.usernameAlias];
                                break;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].signUp(this.signUpAttributes)];
                    case 2:
                        data = _a.sent();
                        if (!data) {
                            throw new Error(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_FAILED);
                        }
                        if (!data.userConfirmed) return [3 /*break*/, 4];
                        return [4 /*yield*/, Object(_auth_helpers_2fada98e_js__WEBPACK_IMPORTED_MODULE_7__["h"])(this.signUpAttributes.username, this.signUpAttributes.password, this.handleAuthStateChange)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        signUpAttrs = Object.assign({}, this.signUpAttributes);
                        this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignUp, Object.assign(Object.assign({}, data.user), { signUpAttrs: signUpAttrs }));
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_8 = _a.sent();
                        Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_8);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    class_6.prototype.buildDefaultFormFields = function () {
        switch (this.usernameAlias) {
            case 'email':
                this.newFormFields = [
                    {
                        type: 'email',
                        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_EMAIL_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('email'),
                        inputProps: {
                            'data-test': 'sign-up-email-input',
                        },
                    },
                    {
                        type: 'password',
                        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_PASSWORD_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('password'),
                        inputProps: {
                            'data-test': 'sign-up-password-input',
                        },
                    },
                    {
                        type: 'phone_number',
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('phone_number'),
                        inputProps: {
                            'data-test': 'sign-up-phone-number-input',
                        },
                    },
                ];
                break;
            case 'phone_number':
                this.newFormFields = [
                    {
                        type: 'phone_number',
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('phone_number'),
                        inputProps: {
                            'data-test': 'sign-up-phone-number-input',
                        },
                    },
                    {
                        type: 'password',
                        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_PASSWORD_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('password'),
                        inputProps: {
                            'data-test': 'sign-up-password-input',
                        },
                    },
                    {
                        type: 'email',
                        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_EMAIL_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('email'),
                        inputProps: {
                            'data-test': 'sign-up-email-input',
                        },
                    },
                ];
                break;
            case 'username':
            default:
                this.newFormFields = [
                    {
                        type: 'username',
                        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_USERNAME_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('username'),
                        inputProps: {
                            'data-test': 'sign-up-username-input',
                        },
                    },
                    {
                        type: 'password',
                        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_PASSWORD_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('password'),
                        inputProps: {
                            'data-test': 'sign-up-password-input',
                        },
                    },
                    {
                        type: 'email',
                        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_EMAIL_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('email'),
                        inputProps: {
                            'data-test': 'sign-up-email-input',
                        },
                    },
                    {
                        type: 'phone_number',
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('phone_number'),
                        inputProps: {
                            'data-test': 'sign-up-phone-number-input',
                        },
                    },
                ];
                break;
        }
    };
    class_6.prototype.buildFormFields = function () {
        var _this = this;
        if (this.formFields.length === 0) {
            this.buildDefaultFormFields();
        }
        else {
            var newFields_3 = [];
            this.formFields.forEach(function (field) {
                var newField = Object.assign({}, field);
                newField['handleInputChange'] = function (event) { return _this.handleFormFieldInputWithCallback(event, field); };
                _this.setFieldValue(field, _this.signUpAttributes);
                newFields_3.push(newField);
            });
            this.newFormFields = newFields_3;
        }
    };
    class_6.prototype.setFieldValue = function (field, formAttributes) {
        switch (field.type) {
            case 'username':
                if (field.value === undefined) {
                    formAttributes.username = '';
                }
                else {
                    formAttributes.username = field.value;
                }
                break;
            case 'password':
                if (field.value === undefined) {
                    formAttributes.password = '';
                }
                else {
                    formAttributes.password = field.value;
                }
                break;
            case 'email':
                formAttributes.attributes.email = field.value;
                break;
            case 'phone_number':
                if (field.dialCode) {
                    this.phoneNumber.countryDialCodeValue = field.dialCode;
                }
                this.phoneNumber.phoneNumberValue = field.value;
                break;
            default:
                formAttributes.attributes[field.type] = field.value;
                break;
        }
    };
    class_6.prototype.componentWillLoad = function () {
        Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["c"])(this.usernameAlias);
        this.buildFormFields();
    };
    class_6.prototype.formFieldsHandler = function () {
        this.buildFormFields();
    };
    class_6.prototype.render = function () {
        var _this = this;
        return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText), handleSubmit: this.handleSubmit, testDataPrefix: 'sign-up' }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { slot: "subtitle" }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "header-subtitle" })), Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth-fields", { formFields: this.newFormFields }), Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "sign-up-form-footer", slot: "amplify-form-section-footer" }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "footer" }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "secondary-footer-content" }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.haveAccountText), ' ', Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: function () { return _this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn); }, "data-test": "sign-up-sign-in-link" }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.signInText)))), Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "primary-footer-content" }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { type: "submit", "data-test": "sign-up-create-account-button" }, this.loading ? Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-loading-spinner", null) : Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.submitButtonText))))))));
    };
    Object.defineProperty(class_6, "watchers", {
        get: function () {
            return {
                "formFields": ["formFieldsHandler"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_6;
}());
AmplifySignUp.style = amplifySignUpCss;
var logger$2 = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('AmplifyVerifyContact');
var AmplifyVerifyContact = /** @class */ (function () {
    function class_7(hostRef) {
        Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Authentication state handler */
        this.handleAuthStateChange = _helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        this.loading = false;
    }
    class_7.prototype.handleSubmit = function (event) {
        event.preventDefault();
        this.verifyAttr ? this.submit(this.code) : this.verify(this.contact);
    };
    class_7.prototype.submit = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var attr, data, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        attr = this.verifyAttr;
                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].verifyCurrentUserAttributeSubmit !== 'function') {
                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                        }
                        this.loading = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].verifyCurrentUserAttributeSubmit(attr, code)];
                    case 2:
                        data = _a.sent();
                        logger$2.debug(data);
                        this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn, this.user);
                        this.verifyAttr = null;
                        return [3 /*break*/, 5];
                    case 3:
                        error_9 = _a.sent();
                        Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_9);
                        logger$2.error(error_9);
                        return [3 /*break*/, 5];
                    case 4:
                        this.loading = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    class_7.prototype.verify = function (contact) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!contact) {
                            logger$2.error('Neither Email nor Phone Number selected');
                            return [2 /*return*/];
                        }
                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].verifyCurrentUserAttribute !== 'function') {
                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                        }
                        this.loading = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].verifyCurrentUserAttribute(contact)];
                    case 2:
                        data = _a.sent();
                        logger$2.debug(data);
                        this.verifyAttr = contact;
                        return [3 /*break*/, 5];
                    case 3:
                        error_10 = _a.sent();
                        Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_10);
                        logger$2.error(error_10);
                        return [3 /*break*/, 5];
                    case 4:
                        this.loading = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    class_7.prototype.handleInputChange = function (event) {
        var inputName = event.target.name;
        if (inputName === 'code') {
            this.code = event.target.value;
        }
        else if (inputName === 'contact') {
            this.contact = event.target.value;
        }
    };
    class_7.prototype.renderSubmit = function () {
        var _this = this;
        return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-input", { inputProps: {
                autocomplete: 'off',
                'data-test': 'verify-contact-code-input',
            }, name: "code", placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].CODE_PLACEHOLDER), handleInputChange: function (event) { return _this.handleInputChange(event); } })));
    };
    class_7.prototype.renderVerify = function () {
        var _this = this;
        var user = this.user;
        if (!user) {
            logger$2.debug('No user to verify');
            return null;
        }
        var unverified = user.unverified;
        if (!unverified) {
            logger$2.debug('Unverified variable does not exist on user');
            return null;
        }
        var email = unverified.email, phone_number = unverified.phone_number;
        return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, email && (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-radio-button", { label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].VERIFY_CONTACT_EMAIL_LABEL), key: "email", name: "contact", value: "email", handleInputChange: function (event) { return _this.handleInputChange(event); }, inputProps: {
                'data-test': 'verify-contact-email-radio',
            } })), phone_number && (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-radio-button", { label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].VERIFY_CONTACT_PHONE_LABEL), key: "phone_number", name: "contact", value: "phone_number", handleInputChange: function (event) { return _this.handleInputChange(event); }, inputProps: {
                'data-test': 'verify-contact-email-radio',
            } }))));
    };
    class_7.prototype.render = function () {
        var _this = this;
        return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { handleSubmit: function (event) { return _this.handleSubmit(event); }, headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].VERIFY_CONTACT_HEADER_TEXT), loading: this.loading, secondaryFooterContent: Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: function () { return _this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn, _this.user); } }, "Skip")), submitButtonText: this.verifyAttr
                ? _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].VERIFY_CONTACT_SUBMIT_LABEL)
                : _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].VERIFY_CONTACT_VERIFY_LABEL) }, this.verifyAttr ? this.renderSubmit() : this.renderVerify()));
    };
    return class_7;
}());



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS91aS1jb21wb25lbnRzL2Rpc3QvZXNtLWVzNS9hbXBsaWZ5LWNvbmZpcm0tc2lnbi1pbl83LmVudHJ5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGF3cy1hbXBsaWZ5L3VpLWNvbXBvbmVudHMvZGlzdC9lc20tZXM1L2F1dGgtaGVscGVycy0yZmFkYTk4ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQixTQUFJLElBQUksU0FBSTtBQUMvQixhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBLHNCQUFzQixTQUFJLElBQUksU0FBSTtBQUNsQyxpREFBaUQsUUFBUTtBQUN6RCx3Q0FBd0MsUUFBUTtBQUNoRCx3REFBd0QsUUFBUTtBQUNoRTtBQUNBO0FBQ0E7QUFDK0Q7QUFDVTtBQUN5QztBQUN6RTtBQUNzQjtBQUNxQztBQUNxSTtBQUN2SjtBQUNsRjtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFnQjtBQUN4QjtBQUNBLDhDQUE4Qyw2QkFBNkI7QUFDM0U7QUFDQSwwQkFBMEIsMkRBQVk7QUFDdEM7QUFDQSxnQ0FBZ0MsMkRBQVk7QUFDNUM7QUFDQSxxQ0FBcUMsc0RBQTRCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsc0NBQXNDLEVBQUU7QUFDN0YsYUFBYTtBQUNiO0FBQ0E7QUFDQSx5QkFBeUIseURBQVM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QseURBQWE7QUFDckUsNkJBQTZCLHlEQUFTO0FBQ3RDO0FBQ0Esb0NBQW9DLDJEQUFZO0FBQ2hELGtDQUFrQywyREFBWTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUseURBQWEsb0JBQW9CLHlEQUFhO0FBQy9HLDZCQUE2QixzREFBSSxXQUFXLHNEQUFJO0FBQ2hELDRDQUE0Qyx3REFBb0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxzREFBSTtBQUNqRDtBQUNBO0FBQ0EsNkNBQTZDLG1FQUFZO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsOERBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFDLDBCQUEwQixhQUFhLHNEQUFJLDBFQUEwRSxzREFBSSw0RUFBNEUsNERBQUMsZUFBZSw0REFBQyxvQkFBb0IsMENBQTBDLG9DQUFvQyx5REFBUyxTQUFTLEVBQUUsRUFBRSxFQUFFLHNEQUFJLEtBQUssMkRBQVkscUJBQXFCLEVBQUUsNERBQUMseUJBQXlCLDhCQUE4QjtBQUNyYztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNERBQWdCO0FBQ3hCO0FBQ0EsOENBQThDLG1DQUFtQztBQUNqRjtBQUNBLDBCQUEwQiwyREFBWTtBQUN0QztBQUNBLGdDQUFnQywyREFBWTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHNEQUE0QjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx3REFBeUI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhEQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSx1QkFBdUIsc0RBQUksS0FBSywyREFBWTtBQUM1Qyw2QkFBNkIsc0RBQUksS0FBSywyREFBWTtBQUNsRDtBQUNBLHVCQUF1Qiw0REFBQyxjQUFjLHNEQUFJLEtBQUssMkRBQVksa0NBQWtDLDREQUFDLG9CQUFvQiwwQ0FBMEMsa0NBQWtDLEVBQUUsRUFBRSxFQUFFLHNEQUFJLEtBQUssMkRBQVk7QUFDek47QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQSx1Q0FBdUMsOERBQVcsY0FBYyw0REFBQyxjQUFjLHNEQUFJLEtBQUssMkRBQVksa0NBQWtDLDREQUFDLG9CQUFvQiwwQ0FBMEMsa0NBQWtDLEVBQUUsRUFBRSxFQUFFLHNEQUFJLEtBQUssMkRBQVk7QUFDbFE7QUFDQSxrRUFBa0UsNkRBQTZEO0FBQy9IO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsK0NBQStDO0FBQ3hGO0FBQ0EseUNBQXlDLFFBQVEsOERBQXVCLDJCQUEyQjtBQUNuRztBQUNBLHlDQUF5QywwQ0FBMEM7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzREFBSSxXQUFXLHNEQUFJO0FBQ2hELDRDQUE0Qyx3REFBb0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHNEQUFJO0FBQ2pEO0FBQ0E7QUFDQSxtREFBbUQseURBQVM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhEQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzREFBSSxXQUFXLHNEQUFJO0FBQ2hELDRDQUE0Qyx3REFBb0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCw4REFBdUI7QUFDNUU7QUFDQTtBQUNBLG9DQUFvQyw4REFBcUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxzREFBSTtBQUNqRDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsc0RBQUksS0FBSywyREFBWTtBQUNqRTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsbUVBQVk7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCx5REFBUztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4REFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQUMsMEJBQTBCLGFBQWEsc0RBQUkseUNBQXlDLHNEQUFJLHNGQUFzRiw0REFBQyxjQUFjLDREQUFDLGVBQWUsNERBQUMsb0JBQW9CLDBDQUEwQyxvQ0FBb0MseURBQVMsU0FBUyxFQUFFLEVBQUUsRUFBRSxzREFBSSxLQUFLLDJEQUFZLHNCQUFzQixFQUFFLDREQUFDLHlCQUF5QixpQ0FBaUM7QUFDamM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0QsaUJBQWlCLHdEQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNERBQWdCO0FBQ3hCO0FBQ0EsMEJBQTBCLDJEQUFZO0FBQ3RDO0FBQ0EsOEJBQThCLDJEQUFZO0FBQzFDO0FBQ0EsZ0NBQWdDLDJEQUFZO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QywwQkFBMEI7QUFDdEU7QUFDQSw4Q0FBOEMsNEJBQTRCO0FBQzFFO0FBQ0EscUNBQXFDLHNEQUE0QjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHdEQUF5QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQWtCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQyxrRUFBa0UsNkRBQTZEO0FBQy9IO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxtRUFBbUU7QUFDNUc7QUFDQSx5Q0FBeUMsUUFBUSw4REFBdUIsMkJBQTJCO0FBQ25HO0FBQ0E7QUFDQSx5Q0FBeUMsb0VBQW9FO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsc0RBQUksV0FBVyxzREFBSTtBQUNoRCw0Q0FBNEMsd0RBQW9CO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsOERBQXVCO0FBQ2hHO0FBQ0E7QUFDQSxvQ0FBb0MsOERBQXFCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxzREFBSTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsc0RBQUksS0FBSywyREFBWTtBQUM1RCw2Q0FBNkMsc0RBQUksS0FBSywyREFBWTtBQUNsRSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4REFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzREFBSSxXQUFXLHNEQUFJO0FBQ2hELDRDQUE0Qyx3REFBb0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHNEQUFJO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCx5REFBUztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4REFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsa0NBQWtDLEVBQUUscUJBQXFCLGdDQUFnQztBQUNsSjtBQUNBLGdCQUFnQiw0REFBQywwQkFBMEIsYUFBYSxzREFBSSw4RkFBOEYsNERBQUMsb0JBQW9CLDBDQUEwQyxvQ0FBb0MseURBQVMsU0FBUyxFQUFFLHVEQUF1RCxFQUFFLHNEQUFJLEtBQUssMkRBQVkseUVBQXlFLHNEQUFJLHdCQUF3QixFQUFFLDREQUFDLHlCQUF5QixpQ0FBaUM7QUFDamdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNELG1CQUFtQiwrREFBYTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFnQjtBQUN4QjtBQUNBLDBCQUEwQiwyREFBWTtBQUN0QztBQUNBLGdDQUFnQywyREFBWTtBQUM1QztBQUNBLDhDQUE4Qyx5Q0FBeUM7QUFDdkY7QUFDQSxxQ0FBcUMsc0RBQTRCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix5REFBYTtBQUNuQztBQUNBLHFEQUFxRCwwQ0FBMEMsRUFBRTtBQUNqRyx1QkFBdUIsc0RBQUksS0FBSywyREFBWTtBQUM1Qyw2QkFBNkIsc0RBQUksS0FBSywyREFBWTtBQUNsRDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHNEQUFJO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhEQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHNEQUFxQjtBQUNoRSxpREFBaUQsc0RBQXFCO0FBQ3RFLHlFQUF5RSxtRUFBbUUsRUFBRTtBQUM5STtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzREFBSSxXQUFXLHNEQUFJO0FBQ2hELDRDQUE0Qyx3REFBb0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxzREFBSTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHlEQUFhO0FBQzlDLGlDQUFpQyx5REFBYTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxtREFBbUQseURBQVM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHlEQUFTO0FBQzVEO0FBQ0EsaURBQWlELG1FQUFZO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4REFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQUMsMEJBQTBCLGFBQWEsc0RBQUksdUdBQXVHLDREQUFDLG9CQUFvQiwwQ0FBMEMsb0NBQW9DLHlEQUFTLFNBQVMsRUFBRSxFQUFFLEVBQUUsc0RBQUksS0FBSywyREFBWSxzQ0FBc0Msc0RBQUksNkJBQTZCLEVBQUUsNERBQUMseUJBQXlCLGlDQUFpQztBQUN2YjtBQUNBO0FBQ0EsQ0FBQztBQUNELDhCQUE4QixxQ0FBcUMsbUNBQW1DLGdEQUFnRCx5Q0FBeUMscUJBQXFCLHNDQUFzQyw2QkFBNkIsMEJBQTBCLDBCQUEwQixvQkFBb0IsYUFBYSxrQ0FBa0MsOEJBQThCLHNCQUFzQixtQkFBbUIseUJBQXlCLDZCQUE2QixvQ0FBb0MsdUJBQXVCLDBCQUEwQixxQkFBcUIsb0JBQW9CLGFBQWEsdUJBQXVCLG1CQUFtQixzQkFBc0IsOEJBQThCLHdCQUF3QixxQkFBcUIsb0NBQW9DLGlCQUFpQix5QkFBeUIsbUJBQW1CO0FBQ2w0QjtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFnQjtBQUN4QjtBQUNBLDhDQUE4Qyw0QkFBNEI7QUFDMUU7QUFDQSwwQkFBMEIsMkRBQVk7QUFDdEM7QUFDQSxnQ0FBZ0MsMkRBQVk7QUFDNUM7QUFDQSxxQ0FBcUMsc0RBQTRCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHdEQUF5QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4REFBa0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsZ0VBQWdFO0FBQ3pHO0FBQ0EseUNBQXlDLFFBQVEsOERBQXVCLDJCQUEyQjtBQUNuRztBQUNBLHlDQUF5QywrREFBK0Q7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLDhEQUF1QjtBQUM3RjtBQUNBO0FBQ0Esb0NBQW9DLDhEQUFxQjtBQUN6RDtBQUNBO0FBQ0EsNkNBQTZDLG1FQUFZO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw0REFBQyxjQUFjLHNEQUFJLEtBQUssMkRBQVksNkJBQTZCLDREQUFDLG9CQUFvQiwwQ0FBMEMsb0NBQW9DLHlEQUFTLGlCQUFpQixFQUFFLCtDQUErQyxFQUFFLHNEQUFJLEtBQUssMkRBQVk7QUFDelI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQSx1Q0FBdUMsOERBQVcsY0FBYyw0REFBQyxjQUFjLHNEQUFJLEtBQUssMkRBQVksNkJBQTZCLDREQUFDLG9CQUFvQiwwQ0FBMEMsb0NBQW9DLHlEQUFTLGlCQUFpQixFQUFFLCtDQUErQyxFQUFFLHNEQUFJLEtBQUssMkRBQVk7QUFDdFU7QUFDQSxrRUFBa0UsNkRBQTZEO0FBQy9IO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0REFBQywwQkFBMEIsYUFBYSxzREFBSSxtRkFBbUYsRUFBRSw0REFBQyxTQUFTLG1CQUFtQixFQUFFLDREQUFDLFVBQVUsMEJBQTBCLElBQUksNERBQUMsVUFBVSw0QkFBNEIsRUFBRSw0REFBQywrQkFBK0IsK0VBQStFLEtBQUssaUVBQU8sb0JBQW9CLDREQUFDLGdDQUFnQyw0REFBQyx5QkFBeUIsaUNBQWlDLEdBQUcsNERBQUMsU0FBUyxvRUFBb0UsRUFBRSw0REFBQyxVQUFVLGlCQUFpQixFQUFFLDREQUFDLFVBQVUsbUNBQW1DLHNCQUFzQiw0REFBQyxlQUFlLHNEQUFJLEtBQUssMkRBQVksd0JBQXdCLDREQUFDLG9CQUFvQiwwQ0FBMEMsb0NBQW9DLHlEQUFTLFNBQVMsRUFBRSw4Q0FBOEMsRUFBRSxzREFBSSxLQUFLLDJEQUFZLDRCQUE0Qiw0REFBQyxrQkFBa0IsNERBQUMsVUFBVSxpQ0FBaUMsRUFBRSw0REFBQyxvQkFBb0IsZ0ZBQWdGLGlCQUFpQiw0REFBQyxvQ0FBb0MsNERBQUMsZUFBZSxzREFBSTtBQUN2cUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw4QkFBOEIsZ0RBQWdELDBDQUEwQyxtQ0FBbUMseUNBQXlDLHFCQUFxQixzQ0FBc0Msa0NBQWtDLDBCQUEwQiwwQkFBMEIsb0JBQW9CLGFBQWEsa0NBQWtDLDhCQUE4QixzQkFBc0IsbUJBQW1CLHlCQUF5Qiw2QkFBNkIsb0NBQW9DLHVCQUF1QiwwQkFBMEIscUJBQXFCLG9CQUFvQixhQUFhLHVCQUF1QixtQkFBbUIsc0JBQXNCLDhCQUE4Qix3QkFBd0IscUJBQXFCLG9DQUFvQyxpQkFBaUIseUJBQXlCLG1CQUFtQjtBQUM1NEI7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBZ0I7QUFDeEI7QUFDQSw4Q0FBOEMsNEJBQTRCO0FBQzFFO0FBQ0EsMEJBQTBCLDJEQUFZO0FBQ3RDO0FBQ0EsZ0NBQWdDLDJEQUFZO0FBQzVDO0FBQ0EsK0JBQStCLDJEQUFZO0FBQzNDO0FBQ0EsMEJBQTBCLDJEQUFZO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsc0RBQTRCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msd0RBQXlCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsK0RBQStEO0FBQ3hHO0FBQ0EseUNBQXlDLCtEQUErRDtBQUN4RztBQUNBLHlDQUF5Qyx1RUFBdUU7QUFDaEg7QUFDQSx5Q0FBeUMsUUFBUSw4REFBdUIsMkJBQTJCO0FBQ25HO0FBQ0EseUNBQXlDLDRFQUE0RTtBQUNySDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzREFBSSxXQUFXLHNEQUFJO0FBQ2hELDRDQUE0Qyx3REFBb0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGLDhEQUF1QjtBQUN2RztBQUNBO0FBQ0EsZ0NBQWdDLDhEQUFxQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHNEQUFJO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QywyREFBWTtBQUN4RDtBQUNBO0FBQ0EsNkNBQTZDLG1FQUFZO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3RELG1EQUFtRCx5REFBUyw4Q0FBOEMsZUFBZSwyQkFBMkI7QUFDcEo7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsOERBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsc0RBQUksS0FBSywyREFBWTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFDQUFxQyxzREFBSSxLQUFLLDJEQUFZO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUNBQXFDLHNEQUFJLEtBQUssMkRBQVk7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQ0FBcUMsc0RBQUksS0FBSywyREFBWTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsc0RBQUksS0FBSywyREFBWTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFDQUFxQyxzREFBSSxLQUFLLDJEQUFZO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUNBQXFDLHNEQUFJLEtBQUssMkRBQVk7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DLGtFQUFrRSw2REFBNkQ7QUFDL0g7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhEQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0REFBQywwQkFBMEIsYUFBYSxzREFBSSxtRkFBbUYsRUFBRSw0REFBQyxTQUFTLG1CQUFtQixFQUFFLDREQUFDLFVBQVUsMEJBQTBCLElBQUksNERBQUMseUJBQXlCLGlDQUFpQyxHQUFHLDREQUFDLFNBQVMsb0VBQW9FLEVBQUUsNERBQUMsVUFBVSxpQkFBaUIsRUFBRSw0REFBQyxVQUFVLG1DQUFtQyxFQUFFLDREQUFDLGVBQWUsc0RBQUksaUNBQWlDLDREQUFDLG9CQUFvQiwwQ0FBMEMsb0NBQW9DLHlEQUFTLFNBQVMsRUFBRSx1Q0FBdUMsRUFBRSxzREFBSSwwQkFBMEIsNERBQUMsVUFBVSxpQ0FBaUMsRUFBRSw0REFBQyxvQkFBb0IsK0RBQStELGlCQUFpQiw0REFBQyxvQ0FBb0MsNERBQUMsZUFBZSxzREFBSTtBQUNwM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxtQkFBbUIsd0RBQU07QUFDekI7QUFDQTtBQUNBLFFBQVEsNERBQWdCO0FBQ3hCO0FBQ0EscUNBQXFDLHNEQUE0QjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzREFBSSxXQUFXLHNEQUFJO0FBQ2hELDRDQUE0Qyx3REFBb0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxzREFBSTtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxtREFBbUQseURBQVM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsOERBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHNEQUFJLFdBQVcsc0RBQUk7QUFDaEQsNENBQTRDLHdEQUFvQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHNEQUFJO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhEQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFDLGNBQWMsNERBQUMsbUJBQW1CO0FBQ25EO0FBQ0E7QUFDQSxhQUFhLDZCQUE2QixzREFBSSxLQUFLLDJEQUFZLHlEQUF5RCx1Q0FBdUMsRUFBRSxFQUFFO0FBQ25LO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQUMsd0JBQXdCLDREQUFDLDBCQUEwQixRQUFRLHNEQUFJLEtBQUssMkRBQVksa0hBQWtILHVDQUF1QyxFQUFFO0FBQzVQO0FBQ0EsYUFBYSxFQUFFLHFCQUFxQiw0REFBQywwQkFBMEIsUUFBUSxzREFBSSxLQUFLLDJEQUFZLGdJQUFnSSx1Q0FBdUMsRUFBRTtBQUNyUTtBQUNBLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0REFBQywwQkFBMEIsaUNBQWlDLGtDQUFrQyxFQUFFLGNBQWMsc0RBQUksS0FBSywyREFBWSw2RUFBNkUsNERBQUMsZUFBZSw0REFBQyxvQkFBb0IsMENBQTBDLG9DQUFvQyx5REFBUyx1QkFBdUIsRUFBRSxFQUFFO0FBQ3ZYLGtCQUFrQixzREFBSSxLQUFLLDJEQUFZO0FBQ3ZDLGtCQUFrQixzREFBSSxLQUFLLDJEQUFZLCtCQUErQjtBQUN0RTtBQUNBO0FBQ0EsQ0FBQztBQUM0VTs7Ozs7Ozs7Ozs7OztBQ3g0QzdVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQixTQUFJLElBQUksU0FBSTtBQUMvQixhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNvRDtBQUMwQjtBQUNyQztBQUMyQjtBQUNEO0FBQ25FLGlCQUFpQix3REFBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0RBQUksV0FBVyxzREFBSTtBQUM1Qyx3Q0FBd0Msd0RBQW9CO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHNEQUFJO0FBQzdDO0FBQ0E7QUFDQSx5QkFBeUIsaUVBQU8sbUJBQW1CLGlFQUFPO0FBQzFELDhDQUE4Qyx5REFBUztBQUN2RDtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMseURBQVM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOERBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQSx5RUFBeUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0RBQUksV0FBVyxzREFBSTtBQUN4QyxvQ0FBb0Msd0RBQW9CO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHNEQUFJO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyx5REFBYSxrQ0FBa0MseURBQWE7QUFDekc7QUFDQSxzQ0FBc0MseURBQVM7QUFDL0M7QUFDQTtBQUNBLDZDQUE2Qyx5REFBYTtBQUMxRDtBQUNBLHNDQUFzQyx5REFBUztBQUMvQztBQUNBO0FBQ0EsNkNBQTZDLHlEQUFhO0FBQzFEO0FBQ0Esc0NBQXNDLHlEQUFTO0FBQy9DO0FBQ0E7QUFDQSw2Q0FBNkMseURBQWE7QUFDMUQ7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHlEQUFTO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOERBQXFCO0FBQ3JDO0FBQ0E7QUFDQSwwQ0FBMEMseURBQVMsaUJBQWlCLHFCQUFxQjtBQUN6RjtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMseURBQVMsa0JBQWtCLHFCQUFxQjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUU7QUFDNkMiLCJmaWxlIjoic3RhdGljL2NodW5rcy8yLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX3NwcmVhZEFycmF5cyA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheXMpIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgICAgcltrXSA9IGFbal07XG4gICAgcmV0dXJuIHI7XG59O1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBoIH0gZnJvbSAnLi9pbmRleC0zOTk2OTc4NS5qcyc7XG5pbXBvcnQgeyBJMThuLCBMb2dnZXIsIENvbnNvbGVMb2dnZXIsIGlzRW1wdHkgfSBmcm9tICdAYXdzLWFtcGxpZnkvY29yZSc7XG5pbXBvcnQgeyBNIGFzIE1mYU9wdGlvbiwgQyBhcyBDaGFsbGVuZ2VOYW1lLCBBIGFzIEF1dGhTdGF0ZSwgYSBhcyBBdXRoRm9ybUZpZWxkIH0gZnJvbSAnLi9hdXRoLXR5cGVzLTc4ZGYzMDRlLmpzJztcbmltcG9ydCB7IEF1dGggfSBmcm9tICdAYXdzLWFtcGxpZnkvYXV0aCc7XG5pbXBvcnQgeyBUIGFzIFRyYW5zbGF0aW9ucyB9IGZyb20gJy4vVHJhbnNsYXRpb25zLTM5MmFjYjliLmpzJztcbmltcG9ydCB7IE4gYXMgTk9fQVVUSF9NT0RVTEVfRk9VTkQsIGggYXMgQ09VTlRSWV9ESUFMX0NPREVfREVGQVVMVCB9IGZyb20gJy4vY29uc3RhbnRzLWQxYWJlN2RlLmpzJztcbmltcG9ydCB7IGQgYXMgZGlzcGF0Y2hBdXRoU3RhdGVDaGFuZ2VFdmVudCwgYSBhcyBkaXNwYXRjaFRvYXN0SHViRXZlbnQsIGMgYXMgY2hlY2tVc2VybmFtZUFsaWFzLCBpIGFzIGlzSGludFZhbGlkLCBoIGFzIGhhbmRsZVBob25lTnVtYmVyQ2hhbmdlLCBiIGFzIGNvbXBvc2VQaG9uZU51bWJlcklucHV0LCByIGFzIHJlcXVpcmVkQXR0cmlidXRlc01hcCB9IGZyb20gJy4vaGVscGVycy0wMWVjZjVmOS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNoZWNrQ29udGFjdCwgaCBhcyBoYW5kbGVTaWduSW4gfSBmcm9tICcuL2F1dGgtaGVscGVycy0yZmFkYTk4ZS5qcyc7XG52YXIgQW1wbGlmeUNvbmZpcm1TaWduSW4gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMShob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIC8qKiBGaXJlcyB3aGVuIGNvbmZpcm0gc2lnbiBpbiBmb3JtIGlzIHN1Ym1pdHRlZCAqL1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX3RoaXMuY29uZmlybShldmVudCk7IH07XG4gICAgICAgIC8qKiBVc2VkIGZvciBoZWFkZXIgdGV4dCBpbiBjb25maXJtIHNpZ24gaW4gY29tcG9uZW50ICovXG4gICAgICAgIHRoaXMuaGVhZGVyVGV4dCA9IFRyYW5zbGF0aW9ucy5DT05GSVJNX1NNU19DT0RFO1xuICAgICAgICAvKiogVXNlZCBmb3IgdGhlIHN1Ym1pdCBidXR0b24gdGV4dCBpbiBjb25maXJtIHNpZ24gaW4gY29tcG9uZW50ICovXG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uVGV4dCA9IFRyYW5zbGF0aW9ucy5DT05GSVJNO1xuICAgICAgICAvKiogQXV0aCBzdGF0ZSBjaGFuZ2UgaGFuZGxlciBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgICAgICAgdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UgPSBkaXNwYXRjaEF1dGhTdGF0ZUNoYW5nZUV2ZW50O1xuICAgICAgICAvKipcbiAgICAgICAgICogRm9ybSBmaWVsZHMgYWxsb3dzIHlvdSB0byB1dGlsaXplIG91ciBwcmUtYnVpbHQgY29tcG9uZW50cyBzdWNoIGFzIHVzZXJuYW1lIGZpZWxkLCBjb2RlIGZpZWxkLCBwYXNzd29yZCBmaWVsZCwgZW1haWwgZmllbGQsIGV0Yy5cbiAgICAgICAgICogYnkgcGFzc2luZyBhbiBhcnJheSBvZiBzdHJpbmdzIHRoYXQgeW91IHdvdWxkIGxpa2UgdGhlIG9yZGVyIG9mIHRoZSBmb3JtIHRvIGJlIGluLiBJZiB5b3UgbmVlZCBtb3JlIGN1c3RvbWl6YXRpb24sIHN1Y2ggYXMgY2hhbmdpbmdcbiAgICAgICAgICogdGV4dCBmb3IgYSBsYWJlbCBvciBhZGp1c3QgYSBwbGFjZWhvbGRlciwgeW91IGNhbiBmb2xsb3cgdGhlIHN0cnVjdHVyZSBiZWxvdyBpbiBvcmRlciB0byBkbyBqdXN0IHRoYXQuXG4gICAgICAgICAqIGBgYFxuICAgICAgICAgKiBbXG4gICAgICAgICAqICB7XG4gICAgICAgICAqICAgIHR5cGU6IHN0cmluZyxcbiAgICAgICAgICogICAgbGFiZWw6IHN0cmluZyxcbiAgICAgICAgICogICAgcGxhY2Vob2xkZXI6IHN0cmluZyxcbiAgICAgICAgICogICAgaGludDogc3RyaW5nIHwgRnVuY3Rpb25hbCBDb21wb25lbnQgfCBudWxsLFxuICAgICAgICAgKiAgICByZXF1aXJlZDogYm9vbGVhblxuICAgICAgICAgKiAgfVxuICAgICAgICAgKiBdXG4gICAgICAgICAqIGBgYFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mb3JtRmllbGRzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjb2RlJyxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZTogZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfdGhpcy5oYW5kbGVDb2RlQ2hhbmdlKGV2ZW50KTsgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBUaGUgTUZBIG9wdGlvbiB0byBjb25maXJtIHdpdGggKi9cbiAgICAgICAgdGhpcy5tZmFPcHRpb24gPSBNZmFPcHRpb24uU01TO1xuICAgICAgICAvKiBXaGV0aGVyIG9yIG5vdCB0aGUgY29uZmlybS1zaWduLWluIGNvbXBvbmVudCBpcyBsb2FkaW5nICovXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBjbGFzc18xLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlciAmJiB0aGlzLnVzZXJbJ2NoYWxsZW5nZU5hbWUnXSA9PT0gQ2hhbGxlbmdlTmFtZS5Tb2Z0d2FyZVRva2VuTUZBKSB7XG4gICAgICAgICAgICB0aGlzLm1mYU9wdGlvbiA9IE1mYU9wdGlvbi5UT1RQO1xuICAgICAgICAgICAgLy8gSWYgaGVhZGVyIHRleHQgaXMgdXNpbmcgZGVmYXVsdCB1c2UgVE9UUCBzdHJpbmdcbiAgICAgICAgICAgIGlmICh0aGlzLmhlYWRlclRleHQgPT09IFRyYW5zbGF0aW9ucy5DT05GSVJNX1NNU19DT0RFKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJUZXh0ID0gVHJhbnNsYXRpb25zLkNPTkZJUk1fVE9UUF9DT0RFO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5oYW5kbGVDb2RlQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuY29kZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNvbmZpcm0gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1mYVR5cGUsIGVycm9yXzE7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWZhVHlwZSA9IHRoaXMudXNlclsnY2hhbGxlbmdlTmFtZSddID09PSBDaGFsbGVuZ2VOYW1lLlNvZnR3YXJlVG9rZW5NRkEgPyBDaGFsbGVuZ2VOYW1lLlNvZnR3YXJlVG9rZW5NRkEgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFBdXRoIHx8IHR5cGVvZiBBdXRoLmNvbmZpcm1TaWduSW4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTk9fQVVUSF9NT0RVTEVfRk9VTkQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCA0LCA1LCA2XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBBdXRoLmNvbmZpcm1TaWduSW4odGhpcy51c2VyLCB0aGlzLmNvZGUsIG1mYVR5cGUpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2hlY2tDb250YWN0KHRoaXMudXNlciwgdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaFRvYXN0SHViRXZlbnQoZXJyb3JfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoaChcImFtcGxpZnktZm9ybS1zZWN0aW9uXCIsIHsgaGVhZGVyVGV4dDogSTE4bi5nZXQodGhpcy5oZWFkZXJUZXh0KSwgaGFuZGxlU3VibWl0OiB0aGlzLmhhbmRsZVN1Ym1pdCwgc3VibWl0QnV0dG9uVGV4dDogSTE4bi5nZXQodGhpcy5zdWJtaXRCdXR0b25UZXh0KSwgbG9hZGluZzogdGhpcy5sb2FkaW5nLCBzZWNvbmRhcnlGb290ZXJDb250ZW50OiBoKFwic3BhblwiLCBudWxsLCBoKFwiYW1wbGlmeS1idXR0b25cIiwgeyB2YXJpYW50OiBcImFuY2hvclwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLlNpZ25Jbik7IH0gfSwgSTE4bi5nZXQoVHJhbnNsYXRpb25zLkJBQ0tfVE9fU0lHTl9JTikpKSB9LCBoKFwiYW1wbGlmeS1hdXRoLWZpZWxkc1wiLCB7IGZvcm1GaWVsZHM6IHRoaXMuZm9ybUZpZWxkcyB9KSkpO1xuICAgIH07XG4gICAgcmV0dXJuIGNsYXNzXzE7XG59KCkpO1xudmFyIEFtcGxpZnlDb25maXJtU2lnblVwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNsYXNzXzIoaG9zdFJlZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKiogRmlyZXMgd2hlbiBzaWduIHVwIGZvcm0gaXMgc3VibWl0dGVkICovXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfdGhpcy5jb25maXJtU2lnblVwKGV2ZW50KTsgfTtcbiAgICAgICAgLyoqIFVzZWQgZm9yIGhlYWRlciB0ZXh0IGluIGNvbmZpcm0gc2lnbiB1cCBjb21wb25lbnQgKi9cbiAgICAgICAgdGhpcy5oZWFkZXJUZXh0ID0gVHJhbnNsYXRpb25zLkNPTkZJUk1fU0lHTl9VUF9IRUFERVJfVEVYVDtcbiAgICAgICAgLyoqIFVzZWQgZm9yIHRoZSBzdWJtaXQgYnV0dG9uIHRleHQgaW4gY29uZmlybSBzaWduIHVwIGNvbXBvbmVudCAqL1xuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvblRleHQgPSBUcmFuc2xhdGlvbnMuQ09ORklSTV9TSUdOX1VQX1NVQk1JVF9CVVRUT05fVEVYVDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvcm0gZmllbGRzIGFsbG93cyB5b3UgdG8gdXRpbGl6ZSBvdXIgcHJlLWJ1aWx0IGNvbXBvbmVudHMgc3VjaCBhcyB1c2VybmFtZSBmaWVsZCwgY29kZSBmaWVsZCwgcGFzc3dvcmQgZmllbGQsIGVtYWlsIGZpZWxkLCBldGMuXG4gICAgICAgICAqIGJ5IHBhc3NpbmcgYW4gYXJyYXkgb2Ygc3RyaW5ncyB0aGF0IHlvdSB3b3VsZCBsaWtlIHRoZSBvcmRlciBvZiB0aGUgZm9ybSB0byBiZSBpbi4gSWYgeW91IG5lZWQgbW9yZSBjdXN0b21pemF0aW9uLCBzdWNoIGFzIGNoYW5naW5nXG4gICAgICAgICAqIHRleHQgZm9yIGEgbGFiZWwgb3IgYWRqdXN0IGEgcGxhY2Vob2xkZXIsIHlvdSBjYW4gZm9sbG93IHRoZSBzdHJ1Y3R1cmUgYmVsb3cgaW4gb3JkZXIgdG8gZG8ganVzdCB0aGF0LlxuICAgICAgICAgKiBgYGBcbiAgICAgICAgICogW1xuICAgICAgICAgKiAge1xuICAgICAgICAgKiAgICB0eXBlOiBzdHJpbmcsXG4gICAgICAgICAqICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgICAgICAqICAgIHBsYWNlaG9sZGVyOiBzdHJpbmcsXG4gICAgICAgICAqICAgIGhpbnQ6IHN0cmluZyB8IEZ1bmN0aW9uYWwgQ29tcG9uZW50IHwgbnVsbCxcbiAgICAgICAgICogICAgcmVxdWlyZWQ6IGJvb2xlYW5cbiAgICAgICAgICogIH1cbiAgICAgICAgICogXVxuICAgICAgICAgKiBgYGBcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZm9ybUZpZWxkcyA9IFtdO1xuICAgICAgICAvKiogQXV0aCBzdGF0ZSBjaGFuZ2UgaGFuZGxlciBmb3IgdGhpcyBjb21wb25lbnRzXG4gICAgICAgICAqIGUuZy4gU2lnbkluIC0+ICdDcmVhdGUgQWNjb3VudCcgbGluayAtPiBTaWduVXBcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaGFuZGxlQXV0aFN0YXRlQ2hhbmdlID0gZGlzcGF0Y2hBdXRoU3RhdGVDaGFuZ2VFdmVudDtcbiAgICAgICAgLyoqIFVzZXJuYW1lIEFsaWFzIGlzIHVzZWQgdG8gc2V0dXAgYXV0aGVudGljYXRpb24gd2l0aCBgdXNlcm5hbWVgLCBgZW1haWxgIG9yIGBwaG9uZV9udW1iZXJgICAqL1xuICAgICAgICB0aGlzLnVzZXJuYW1lQWxpYXMgPSAndXNlcm5hbWUnO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51c2VySW5wdXQgPSB0aGlzLnVzZXIgPyB0aGlzLnVzZXIudXNlcm5hbWUgOiBudWxsO1xuICAgICAgICB0aGlzLl9zaWduVXBBdHRycyA9IHRoaXMudXNlciAmJiB0aGlzLnVzZXIuc2lnblVwQXR0cnMgPyB0aGlzLnVzZXIuc2lnblVwQXR0cnMgOiBudWxsO1xuICAgICAgICB0aGlzLm5ld0Zvcm1GaWVsZHMgPSBbXTtcbiAgICAgICAgdGhpcy5waG9uZU51bWJlciA9IHtcbiAgICAgICAgICAgIGNvdW50cnlEaWFsQ29kZVZhbHVlOiBDT1VOVFJZX0RJQUxfQ09ERV9ERUZBVUxULFxuICAgICAgICAgICAgcGhvbmVOdW1iZXJWYWx1ZTogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xhc3NfMi5wcm90b3R5cGUuY29tcG9uZW50V2lsbExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoZWNrVXNlcm5hbWVBbGlhcyh0aGlzLnVzZXJuYW1lQWxpYXMpO1xuICAgICAgICB0aGlzLmJ1aWxkRm9ybUZpZWxkcygpO1xuICAgIH07XG4gICAgY2xhc3NfMi5wcm90b3R5cGUuZm9ybUZpZWxkc0hhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYnVpbGRGb3JtRmllbGRzKCk7XG4gICAgfTtcbiAgICBjbGFzc18yLnByb3RvdHlwZS5idWlsZERlZmF1bHRGb3JtRmllbGRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLm5ld0Zvcm1GaWVsZHMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJcIiArIHRoaXMudXNlcm5hbWVBbGlhcyxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZTogdGhpcy5oYW5kbGVGb3JtRmllbGRJbnB1dENoYW5nZShcIlwiICsgdGhpcy51c2VybmFtZUFsaWFzKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy51c2VySW5wdXQsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMudXNlcklucHV0ID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY29kZScsXG4gICAgICAgICAgICAgICAgbGFiZWw6IEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5DT05GSVJNX1NJR05fVVBfQ09ERV9MQUJFTCksXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5DT05GSVJNX1NJR05fVVBfQ09ERV9QTEFDRUhPTERFUiksXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgaGludDogKGgoXCJkaXZcIiwgbnVsbCwgSTE4bi5nZXQoVHJhbnNsYXRpb25zLkNPTkZJUk1fU0lHTl9VUF9MT1NUX0NPREUpLCAnICcsIGgoXCJhbXBsaWZ5LWJ1dHRvblwiLCB7IHZhcmlhbnQ6IFwiYW5jaG9yXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnJlc2VuZENvbmZpcm1Db2RlKCk7IH0gfSwgSTE4bi5nZXQoVHJhbnNsYXRpb25zLkNPTkZJUk1fU0lHTl9VUF9SRVNFTkRfQ09ERSkpKSksXG4gICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U6IHRoaXMuaGFuZGxlRm9ybUZpZWxkSW5wdXRDaGFuZ2UoJ2NvZGUnKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgfTtcbiAgICBjbGFzc18yLnByb3RvdHlwZS5idWlsZEZvcm1GaWVsZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmZvcm1GaWVsZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkRGVmYXVsdEZvcm1GaWVsZHMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBuZXdGaWVsZHNfMSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5mb3JtRmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0ZpZWxkID0gT2JqZWN0LmFzc2lnbih7fSwgZmllbGQpO1xuICAgICAgICAgICAgICAgIGlmIChuZXdGaWVsZC50eXBlID09PSAnY29kZScpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3RmllbGRbJ2hpbnQnXSA9IGlzSGludFZhbGlkKG5ld0ZpZWxkKSA/IChoKFwiZGl2XCIsIG51bGwsIEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5DT05GSVJNX1NJR05fVVBfTE9TVF9DT0RFKSwgJyAnLCBoKFwiYW1wbGlmeS1idXR0b25cIiwgeyB2YXJpYW50OiBcImFuY2hvclwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5yZXNlbmRDb25maXJtQ29kZSgpOyB9IH0sIEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5DT05GSVJNX1NJR05fVVBfUkVTRU5EX0NPREUpKSkpIDogKG5ld0ZpZWxkWydoaW50J10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdGaWVsZFsnaGFuZGxlSW5wdXRDaGFuZ2UnXSA9IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlRm9ybUZpZWxkSW5wdXRXaXRoQ2FsbGJhY2soZXZlbnQsIGZpZWxkKTsgfTtcbiAgICAgICAgICAgICAgICBuZXdGaWVsZHNfMS5wdXNoKG5ld0ZpZWxkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5uZXdGb3JtRmllbGRzID0gbmV3RmllbGRzXzE7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzIucHJvdG90eXBlLmhhbmRsZUZvcm1GaWVsZElucHV0Q2hhbmdlID0gZnVuY3Rpb24gKGZpZWxkVHlwZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBzd2l0Y2ggKGZpZWxkVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAndXNlcm5hbWUnOlxuICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIChfdGhpcy51c2VySW5wdXQgPSBldmVudC50YXJnZXQudmFsdWUpOyB9O1xuICAgICAgICAgICAgY2FzZSAncGhvbmVfbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBoYW5kbGVQaG9uZU51bWJlckNoYW5nZShldmVudCwgX3RoaXMucGhvbmVOdW1iZXIpOyB9O1xuICAgICAgICAgICAgY2FzZSAnY29kZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gKF90aGlzLmNvZGUgPSBldmVudC50YXJnZXQudmFsdWUpOyB9O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzIucHJvdG90eXBlLnNldEZpZWxkVmFsdWUgPSBmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgc3dpdGNoIChmaWVsZC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICd1c2VybmFtZSc6XG4gICAgICAgICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5wdXQgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcklucHV0ID0gZmllbGQudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncGhvbmVfbnVtYmVyJzpcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQuZGlhbENvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waG9uZU51bWJlci5jb3VudHJ5RGlhbENvZGVWYWx1ZSA9IGZpZWxkLmRpYWxDb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnBob25lTnVtYmVyLnBob25lTnVtYmVyVmFsdWUgPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMi5wcm90b3R5cGUuaGFuZGxlRm9ybUZpZWxkSW5wdXRXaXRoQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQsIGZpZWxkKSB7XG4gICAgICAgIHZhciBmblRvQ2FsbCA9IGZpZWxkWydoYW5kbGVJbnB1dENoYW5nZSddXG4gICAgICAgICAgICA/IGZpZWxkWydoYW5kbGVJbnB1dENoYW5nZSddXG4gICAgICAgICAgICA6IGZ1bmN0aW9uIChldmVudCwgY2IpIHtcbiAgICAgICAgICAgICAgICBjYihldmVudCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLmhhbmRsZUZvcm1GaWVsZElucHV0Q2hhbmdlKGZpZWxkLnR5cGUpO1xuICAgICAgICBmblRvQ2FsbChldmVudCwgY2FsbGJhY2suYmluZCh0aGlzKSk7XG4gICAgfTtcbiAgICBjbGFzc18yLnByb3RvdHlwZS5yZXNlbmRDb25maXJtQ29kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGVycm9yXzI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFBdXRoIHx8IHR5cGVvZiBBdXRoLnJlc2VuZFNpZ25VcCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOT19BVVRIX01PRFVMRV9GT1VORCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMudXNlcklucHV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVXNlcm5hbWUgY2FuIG5vdCBiZSBlbXB0eScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgQXV0aC5yZXNlbmRTaWduVXAodGhpcy51c2VySW5wdXQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLkNvbmZpcm1TaWduVXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaFRvYXN0SHViRXZlbnQoZXJyb3JfMik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gVE9ETzogQWRkIHZhbGlkYXRpb25cbiAgICAvLyBUT0RPOiBQcmVmaXhcbiAgICBjbGFzc18yLnByb3RvdHlwZS5jb25maXJtU2lnblVwID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjb25maXJtU2lnblVwUmVzdWx0LCBlcnJvcl8zO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghQXV0aCB8fCB0eXBlb2YgQXV0aC5jb25maXJtU2lnblVwICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5PX0FVVEhfTU9EVUxFX0ZPVU5EKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMudXNlcm5hbWVBbGlhcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3Bob25lX251bWJlcic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbnB1dCA9IGNvbXBvc2VQaG9uZU51bWJlcklucHV0KHRoaXMucGhvbmVOdW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hUb2FzdEh1YkV2ZW50KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDYsIDcsIDhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIEF1dGguY29uZmlybVNpZ25VcCh0aGlzLnVzZXJJbnB1dCwgdGhpcy5jb2RlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1TaWduVXBSZXN1bHQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbmZpcm1TaWduVXBSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSTE4bi5nZXQoVHJhbnNsYXRpb25zLkNPTkZJUk1fU0lHTl9VUF9GQUlMRUQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRoaXMuX3NpZ25VcEF0dHJzICYmIHRoaXMuX3NpZ25VcEF0dHJzLnBhc3N3b3JkICYmIHRoaXMuX3NpZ25VcEF0dHJzLnBhc3N3b3JkICE9PSAnJykpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXV0byBzaWduIGluIHVzZXIgaWYgcGFzc3dvcmQgaXMgYXZhaWxhYmxlIGZyb20gcHJldmlvdXMgd29ya2Zsb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGhhbmRsZVNpZ25Jbih0aGlzLnVzZXJJbnB1dCwgdGhpcy5fc2lnblVwQXR0cnMucGFzc3dvcmQsIHRoaXMuaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEF1dG8gc2lnbiBpbiB1c2VyIGlmIHBhc3N3b3JkIGlzIGF2YWlsYWJsZSBmcm9tIHByZXZpb3VzIHdvcmtmbG93XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLlNpZ25Jbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDU7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaFRvYXN0SHViRXZlbnQoZXJyb3JfMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA4XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18yLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoaChcImFtcGxpZnktZm9ybS1zZWN0aW9uXCIsIHsgaGVhZGVyVGV4dDogSTE4bi5nZXQodGhpcy5oZWFkZXJUZXh0KSwgc3VibWl0QnV0dG9uVGV4dDogSTE4bi5nZXQodGhpcy5zdWJtaXRCdXR0b25UZXh0KSwgaGFuZGxlU3VibWl0OiB0aGlzLmhhbmRsZVN1Ym1pdCwgc2Vjb25kYXJ5Rm9vdGVyQ29udGVudDogaChcImRpdlwiLCBudWxsLCBoKFwic3BhblwiLCBudWxsLCBoKFwiYW1wbGlmeS1idXR0b25cIiwgeyB2YXJpYW50OiBcImFuY2hvclwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLlNpZ25Jbik7IH0gfSwgSTE4bi5nZXQoVHJhbnNsYXRpb25zLkJBQ0tfVE9fU0lHTl9JTikpKSkgfSwgaChcImFtcGxpZnktYXV0aC1maWVsZHNcIiwgeyBmb3JtRmllbGRzOiB0aGlzLm5ld0Zvcm1GaWVsZHMgfSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18yLCBcIndhdGNoZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiZm9ybUZpZWxkc1wiOiBbXCJmb3JtRmllbGRzSGFuZGxlclwiXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc18yO1xufSgpKTtcbnZhciBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdGb3Jnb3RQYXNzd29yZCcpO1xudmFyIEFtcGxpZnlGb3Jnb3RQYXNzd29yZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18zKGhvc3RSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqIFRoZSBoZWFkZXIgdGV4dCBvZiB0aGUgZm9yZ290IHBhc3N3b3JkIHNlY3Rpb24gKi9cbiAgICAgICAgdGhpcy5oZWFkZXJUZXh0ID0gVHJhbnNsYXRpb25zLlJFU0VUX1lPVVJfUEFTU1dPUkQ7XG4gICAgICAgIC8qKiBUaGUgdGV4dCBkaXNwbGF5ZWQgaW5zaWRlIG9mIHRoZSBzZW5kIGNvZGUgYnV0dG9uIGZvciB0aGUgZm9ybSAqL1xuICAgICAgICB0aGlzLnNlbmRCdXR0b25UZXh0ID0gVHJhbnNsYXRpb25zLlNFTkRfQ09ERTtcbiAgICAgICAgLyoqIFRoZSB0ZXh0IGRpc3BsYXllZCBpbnNpZGUgb2YgdGhlIHN1Ym1pdCBidXR0b24gZm9yIHRoZSBmb3JtICovXG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uVGV4dCA9IFRyYW5zbGF0aW9ucy5TVUJNSVQ7XG4gICAgICAgIC8qKiBUaGUgZm9ybSBmaWVsZHMgZGlzcGxheWVkIGluc2lkZSBvZiB0aGUgZm9yZ290IHBhc3N3b3JkIGZvcm0gKi9cbiAgICAgICAgdGhpcy5mb3JtRmllbGRzID0gW107XG4gICAgICAgIC8qKiBUaGUgZnVuY3Rpb24gY2FsbGVkIHdoZW4gbWFraW5nIGEgcmVxdWVzdCB0byByZXNldCBwYXNzd29yZCAqL1xuICAgICAgICB0aGlzLmhhbmRsZVNlbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF90aGlzLnNlbmQoZXZlbnQpOyB9O1xuICAgICAgICAvKiogVGhlIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHN1Ym1pdHRpbmcgYSBuZXcgcGFzc3dvcmQgKi9cbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF90aGlzLnN1Ym1pdChldmVudCk7IH07XG4gICAgICAgIC8qKiBBdXRoIHN0YXRlIGNoYW5nZSBoYW5kbGVyIGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICAgICAgICB0aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZSA9IGRpc3BhdGNoQXV0aFN0YXRlQ2hhbmdlRXZlbnQ7XG4gICAgICAgIC8qKiBVc2VybmFtZSBBbGlhcyBpcyB1c2VkIHRvIHNldHVwIGF1dGhlbnRpY2F0aW9uIHdpdGggYHVzZXJuYW1lYCwgYGVtYWlsYCBvciBgcGhvbmVfbnVtYmVyYCAgKi9cbiAgICAgICAgdGhpcy51c2VybmFtZUFsaWFzID0gJ3VzZXJuYW1lJztcbiAgICAgICAgdGhpcy5kZWxpdmVyeSA9IG51bGw7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBob25lTnVtYmVyID0ge1xuICAgICAgICAgICAgY291bnRyeURpYWxDb2RlVmFsdWU6IENPVU5UUllfRElBTF9DT0RFX0RFRkFVTFQsXG4gICAgICAgICAgICBwaG9uZU51bWJlclZhbHVlOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm5ld0Zvcm1GaWVsZHMgPSBbXTtcbiAgICAgICAgdGhpcy5mb3Jnb3RQYXNzd29yZEF0dHJzID0ge1xuICAgICAgICAgICAgdXNlcklucHV0OiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjbGFzc18zLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hlY2tVc2VybmFtZUFsaWFzKHRoaXMudXNlcm5hbWVBbGlhcyk7XG4gICAgICAgIHRoaXMuYnVpbGRGb3JtRmllbGRzKCk7XG4gICAgfTtcbiAgICBjbGFzc18zLnByb3RvdHlwZS5mb3JtRmllbGRzSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5idWlsZEZvcm1GaWVsZHMoKTtcbiAgICB9O1xuICAgIGNsYXNzXzMucHJvdG90eXBlLmJ1aWxkRm9ybUZpZWxkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuZm9ybUZpZWxkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGREZWZhdWx0Rm9ybUZpZWxkcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mb3JtRmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0ZpZWxkID0gT2JqZWN0LmFzc2lnbih7fSwgZmllbGQpO1xuICAgICAgICAgICAgICAgIG5ld0ZpZWxkWydoYW5kbGVJbnB1dENoYW5nZSddID0gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfdGhpcy5oYW5kbGVGb3JtRmllbGRJbnB1dFdpdGhDYWxsYmFjayhldmVudCwgZmllbGQpOyB9O1xuICAgICAgICAgICAgICAgIF90aGlzLm5ld0Zvcm1GaWVsZHMucHVzaChuZXdGaWVsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMy5wcm90b3R5cGUuYnVpbGREZWZhdWx0Rm9ybUZpZWxkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnVzZXJuYW1lQWxpYXMpIHtcbiAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgICAgICAgICB0aGlzLm5ld0Zvcm1GaWVsZHMgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlOiB0aGlzLmhhbmRsZUZvcm1GaWVsZElucHV0Q2hhbmdlKCdlbWFpbCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLXRlc3QnOiAnZm9yZ290LXBhc3N3b3JkLWVtYWlsLWlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Bob25lX251bWJlcic6XG4gICAgICAgICAgICAgICAgdGhpcy5uZXdGb3JtRmllbGRzID0gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGhvbmVfbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U6IHRoaXMuaGFuZGxlRm9ybUZpZWxkSW5wdXRDaGFuZ2UoJ3Bob25lX251bWJlcicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLXRlc3QnOiAnZm9yZ290LXBhc3N3b3JkLXBob25lLW51bWJlci1pbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd1c2VybmFtZSc6XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMubmV3Rm9ybUZpZWxkcyA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3VzZXJuYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U6IHRoaXMuaGFuZGxlRm9ybUZpZWxkSW5wdXRDaGFuZ2UoJ3VzZXJuYW1lJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtdGVzdCc6ICdmb3Jnb3QtcGFzc3dvcmQtdXNlcm5hbWUtaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18zLnByb3RvdHlwZS5oYW5kbGVGb3JtRmllbGRJbnB1dENoYW5nZSA9IGZ1bmN0aW9uIChmaWVsZFR5cGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgc3dpdGNoIChmaWVsZFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3VzZXJuYW1lJzpcbiAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiAoX3RoaXMuZm9yZ290UGFzc3dvcmRBdHRycy51c2VySW5wdXQgPSBldmVudC50YXJnZXQudmFsdWUpOyB9O1xuICAgICAgICAgICAgY2FzZSAncGhvbmVfbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBoYW5kbGVQaG9uZU51bWJlckNoYW5nZShldmVudCwgX3RoaXMucGhvbmVOdW1iZXIpOyB9O1xuICAgICAgICAgICAgY2FzZSAncGFzc3dvcmQnOlxuICAgICAgICAgICAgY2FzZSAnY29kZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gKF90aGlzLmZvcmdvdFBhc3N3b3JkQXR0cnNbZmllbGRUeXBlXSA9IGV2ZW50LnRhcmdldC52YWx1ZSk7IH07XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMy5wcm90b3R5cGUuc2V0RmllbGRWYWx1ZSA9IGZ1bmN0aW9uIChmaWVsZCwgZm9ybUF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3dpdGNoIChmaWVsZC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICd1c2VybmFtZSc6XG4gICAgICAgICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybUF0dHJpYnV0ZXMudXNlcklucHV0ID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3JtQXR0cmlidXRlcy51c2VySW5wdXQgPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwaG9uZV9udW1iZXInOlxuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5kaWFsQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBob25lTnVtYmVyLmNvdW50cnlEaWFsQ29kZVZhbHVlID0gZmllbGQuZGlhbENvZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucGhvbmVOdW1iZXIucGhvbmVOdW1iZXJWYWx1ZSA9IGZpZWxkLnZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncGFzc3dvcmQnOlxuICAgICAgICAgICAgY2FzZSAnY29kZSc6XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybUF0dHJpYnV0ZXNbZmllbGQudHlwZV0gPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1BdHRyaWJ1dGVzW2ZpZWxkLnR5cGVdID0gZmllbGQudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18zLnByb3RvdHlwZS5oYW5kbGVGb3JtRmllbGRJbnB1dFdpdGhDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCwgZmllbGQpIHtcbiAgICAgICAgdmFyIGZuVG9DYWxsID0gZmllbGRbJ2hhbmRsZUlucHV0Q2hhbmdlJ11cbiAgICAgICAgICAgID8gZmllbGRbJ2hhbmRsZUlucHV0Q2hhbmdlJ11cbiAgICAgICAgICAgIDogZnVuY3Rpb24gKGV2ZW50LCBjYikge1xuICAgICAgICAgICAgICAgIGNiKGV2ZW50KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRoaXMuaGFuZGxlRm9ybUZpZWxkSW5wdXRDaGFuZ2UoZmllbGQudHlwZSk7XG4gICAgICAgIGZuVG9DYWxsKGV2ZW50LCBjYWxsYmFjay5iaW5kKHRoaXMpKTtcbiAgICB9O1xuICAgIGNsYXNzXzMucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRhdGEsIGVycm9yXzQ7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFBdXRoIHx8IHR5cGVvZiBBdXRoLmZvcmdvdFBhc3N3b3JkICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5PX0FVVEhfTU9EVUxFX0ZPVU5EKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMudXNlcm5hbWVBbGlhcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3Bob25lX251bWJlcic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcmdvdFBhc3N3b3JkQXR0cnMudXNlcklucHV0ID0gY29tcG9zZVBob25lTnVtYmVySW5wdXQodGhpcy5waG9uZU51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaFRvYXN0SHViRXZlbnQoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsIDQsIDVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIEF1dGguZm9yZ290UGFzc3dvcmQodGhpcy5mb3Jnb3RQYXNzd29yZEF0dHJzLnVzZXJJbnB1dCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdGb3JtRmllbGRzID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NvZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U6IHRoaXMuaGFuZGxlRm9ybUZpZWxkSW5wdXRDaGFuZ2UoJ2NvZGUnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtdGVzdCc6ICdmb3Jnb3QtcGFzc3dvcmQtY29kZS1pbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZTogdGhpcy5oYW5kbGVGb3JtRmllbGRJbnB1dENoYW5nZSgncGFzc3dvcmQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5ORVdfUEFTU1dPUkRfTEFCRUwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogSTE4bi5nZXQoVHJhbnNsYXRpb25zLk5FV19QQVNTV09SRF9QTEFDRUhPTERFUiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGl2ZXJ5ID0gZGF0YS5Db2RlRGVsaXZlcnlEZXRhaWxzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaFRvYXN0SHViRXZlbnQoZXJyb3JfNCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18zLnByb3RvdHlwZS5zdWJtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hLCB1c2VySW5wdXQsIGNvZGUsIHBhc3N3b3JkLCBkYXRhLCBlcnJvcl81O1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghQXV0aCB8fCB0eXBlb2YgQXV0aC5mb3Jnb3RQYXNzd29yZFN1Ym1pdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOT19BVVRIX01PRFVMRV9GT1VORCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzEsIDMsIDQsIDVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gdGhpcy5mb3Jnb3RQYXNzd29yZEF0dHJzLCB1c2VySW5wdXQgPSBfYS51c2VySW5wdXQsIGNvZGUgPSBfYS5jb2RlLCBwYXNzd29yZCA9IF9hLnBhc3N3b3JkO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgQXV0aC5mb3Jnb3RQYXNzd29yZFN1Ym1pdCh1c2VySW5wdXQsIGNvZGUsIHBhc3N3b3JkKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZShBdXRoU3RhdGUuU2lnbkluKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsaXZlcnkgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzUgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaFRvYXN0SHViRXZlbnQoZXJyb3JfNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18zLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzdWJtaXRGbiA9IHRoaXMuZGVsaXZlcnkgPyBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF90aGlzLmhhbmRsZVN1Ym1pdChldmVudCk7IH0gOiBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF90aGlzLmhhbmRsZVNlbmQoZXZlbnQpOyB9O1xuICAgICAgICB2YXIgc3VibWl0QnV0dG9uVGV4dCA9IHRoaXMuZGVsaXZlcnkgPyB0aGlzLnN1Ym1pdEJ1dHRvblRleHQgOiB0aGlzLnNlbmRCdXR0b25UZXh0O1xuICAgICAgICByZXR1cm4gKGgoXCJhbXBsaWZ5LWZvcm0tc2VjdGlvblwiLCB7IGhlYWRlclRleHQ6IEkxOG4uZ2V0KHRoaXMuaGVhZGVyVGV4dCksIGhhbmRsZVN1Ym1pdDogc3VibWl0Rm4sIGxvYWRpbmc6IHRoaXMubG9hZGluZywgc2Vjb25kYXJ5Rm9vdGVyQ29udGVudDogaChcImFtcGxpZnktYnV0dG9uXCIsIHsgdmFyaWFudDogXCJhbmNob3JcIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5TaWduSW4pOyB9LCBcImRhdGEtdGVzdFwiOiBcImZvcmdvdC1wYXNzd29yZC1iYWNrLXRvLXNpZ24taW4tbGlua1wiIH0sIEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5CQUNLX1RPX1NJR05fSU4pKSwgdGVzdERhdGFQcmVmaXg6ICdmb3Jnb3QtcGFzc3dvcmQnLCBzdWJtaXRCdXR0b25UZXh0OiBJMThuLmdldChzdWJtaXRCdXR0b25UZXh0KSB9LCBoKFwiYW1wbGlmeS1hdXRoLWZpZWxkc1wiLCB7IGZvcm1GaWVsZHM6IHRoaXMubmV3Rm9ybUZpZWxkcyB9KSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzMsIFwid2F0Y2hlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJmb3JtRmllbGRzXCI6IFtcImZvcm1GaWVsZHNIYW5kbGVyXCJdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGNsYXNzXzM7XG59KCkpO1xudmFyIGxvZ2dlciQxID0gbmV3IENvbnNvbGVMb2dnZXIoJ2FtcGxpZnktcmVxdWlyZS1uZXctcGFzc3dvcmQnKTtcbnZhciBBbXBsaWZ5UmVxdWlyZU5ld1Bhc3N3b3JkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNsYXNzXzQoaG9zdFJlZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKiogVGhlIGhlYWRlciB0ZXh0IG9mIHRoZSBmb3Jnb3QgcGFzc3dvcmQgc2VjdGlvbiAqL1xuICAgICAgICB0aGlzLmhlYWRlclRleHQgPSBUcmFuc2xhdGlvbnMuQ0hBTkdFX1BBU1NXT1JEO1xuICAgICAgICAvKiogVGhlIHRleHQgZGlzcGxheWVkIGluc2lkZSBvZiB0aGUgc3VibWl0IGJ1dHRvbiBmb3IgdGhlIGZvcm0gKi9cbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b25UZXh0ID0gVHJhbnNsYXRpb25zLkNIQU5HRV9QQVNTV09SRF9BQ1RJT047XG4gICAgICAgIC8qKiBUaGUgZnVuY3Rpb24gY2FsbGVkIHdoZW4gc3VibWl0dGluZyBhIG5ldyBwYXNzd29yZCAqL1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX3RoaXMuY29tcGxldGVOZXdQYXNzd29yZChldmVudCk7IH07XG4gICAgICAgIC8qKiBBdXRoIHN0YXRlIGNoYW5nZSBoYW5kbGVyIGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICAgICAgICB0aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZSA9IGRpc3BhdGNoQXV0aFN0YXRlQ2hhbmdlRXZlbnQ7XG4gICAgICAgIC8qKiBUaGUgZm9ybSBmaWVsZHMgZGlzcGxheWVkIGluc2lkZSBvZiB0aGUgZm9yZ290IHBhc3N3b3JkIGZvcm0gKi9cbiAgICAgICAgdGhpcy5mb3JtRmllbGRzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IEF1dGhGb3JtRmllbGQuUGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlUGFzc3dvcmRDaGFuZ2UoZXZlbnQpOyB9LFxuICAgICAgICAgICAgICAgIGxhYmVsOiBJMThuLmdldChUcmFuc2xhdGlvbnMuTkVXX1BBU1NXT1JEX0xBQkVMKSxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogSTE4bi5nZXQoVHJhbnNsYXRpb25zLk5FV19QQVNTV09SRF9QTEFDRUhPTERFUiksXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAnZGF0YS10ZXN0JzogJ3JlcXVpcmUtbmV3LXBhc3N3b3JkLXBhc3N3b3JkLWlucHV0JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHRoaXMudXNlcjtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVxdWlyZWRBdHRyaWJ1dGVzID0ge307XG4gICAgICAgIHRoaXMubmV3Rm9ybUZpZWxkcyA9IHRoaXMuZm9ybUZpZWxkcztcbiAgICB9XG4gICAgY2xhc3NfNC5wcm90b3R5cGUuaGFuZGxlUmVxdWlyZWRBdHRyaWJ1dGVJbnB1dENoYW5nZSA9IGZ1bmN0aW9uIChhdHRyaWJ1dGUsIGV2ZW50KSB7XG4gICAgICAgIHRoaXMucmVxdWlyZWRBdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgfTtcbiAgICBjbGFzc180LnByb3RvdHlwZS5jb21wb25lbnRXaWxsTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHVzZXIsIGVycm9yXzYsIHVzZXJSZXF1aXJlZEF0dHJpYnV0ZXM7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhdGhpcy51c2VyKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIEF1dGguY3VycmVudEF1dGhlbnRpY2F0ZWRVc2VyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHVzZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfNiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoVG9hc3RIdWJFdmVudChlcnJvcl82KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VXNlciAmJiB0aGlzLmN1cnJlbnRVc2VyLmNoYWxsZW5nZVBhcmFtLnJlcXVpcmVkQXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJSZXF1aXJlZEF0dHJpYnV0ZXMgPSB0aGlzLmN1cnJlbnRVc2VyLmNoYWxsZW5nZVBhcmFtLnJlcXVpcmVkQXR0cmlidXRlcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyUmVxdWlyZWRBdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybUZpZWxkID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogYXR0cmlidXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogcmVxdWlyZWRBdHRyaWJ1dGVzTWFwW2F0dHJpYnV0ZV0ubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogcmVxdWlyZWRBdHRyaWJ1dGVzTWFwW2F0dHJpYnV0ZV0ucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZTogZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfdGhpcy5oYW5kbGVSZXF1aXJlZEF0dHJpYnV0ZUlucHV0Q2hhbmdlKGF0dHJpYnV0ZSwgZXZlbnQpOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLXRlc3QnOiBcInJlcXVpcmUtbmV3LXBhc3N3b3JkLVwiICsgYXR0cmlidXRlICsgXCItaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm5ld0Zvcm1GaWVsZHMucHVzaChmb3JtRmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzQucHJvdG90eXBlLmhhbmRsZVBhc3N3b3JkQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgfTtcbiAgICBjbGFzc180LnByb3RvdHlwZS5jb21wbGV0ZU5ld1Bhc3N3b3JkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB1c2VyLCBfYSwgZXJyb3JfNztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIUF1dGggfHwgdHlwZW9mIEF1dGguY29tcGxldGVOZXdQYXNzd29yZCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOT19BVVRIX01PRFVMRV9GT1VORCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzEsIDgsIDksIDEwXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBBdXRoLmNvbXBsZXRlTmV3UGFzc3dvcmQodGhpcy5jdXJyZW50VXNlciwgdGhpcy5wYXNzd29yZCwgdGhpcy5yZXF1aXJlZEF0dHJpYnV0ZXMpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlciA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlciQxLmRlYnVnKCdjb21wbGV0ZSBuZXcgcGFzc3dvcmQnLCB1c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gdXNlci5jaGFsbGVuZ2VOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ2hhbGxlbmdlTmFtZS5TTVNNRkE6IHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ2hhbGxlbmdlTmFtZS5NRkFTZXR1cDogcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLkNvbmZpcm1TaWduSW4sIHVzZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgN107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlciQxLmRlYnVnKCdUT1RQIHNldHVwJywgdXNlci5jaGFsbGVuZ2VQYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZShBdXRoU3RhdGUuVE9UUFNldHVwLCB1c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoZWNrQ29udGFjdCh1c2VyLCB0aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDc7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzogcmV0dXJuIFszIC8qYnJlYWsqLywgMTBdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl83ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hUb2FzdEh1YkV2ZW50KGVycm9yXzcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMTBdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc180LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoaChcImFtcGxpZnktZm9ybS1zZWN0aW9uXCIsIHsgaGVhZGVyVGV4dDogSTE4bi5nZXQodGhpcy5oZWFkZXJUZXh0KSwgaGFuZGxlU3VibWl0OiB0aGlzLmhhbmRsZVN1Ym1pdCwgbG9hZGluZzogdGhpcy5sb2FkaW5nLCBzZWNvbmRhcnlGb290ZXJDb250ZW50OiBoKFwiYW1wbGlmeS1idXR0b25cIiwgeyB2YXJpYW50OiBcImFuY2hvclwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLlNpZ25Jbik7IH0gfSwgSTE4bi5nZXQoVHJhbnNsYXRpb25zLkJBQ0tfVE9fU0lHTl9JTikpLCBzdWJtaXRCdXR0b25UZXh0OiBJMThuLmdldCh0aGlzLnN1Ym1pdEJ1dHRvblRleHQpIH0sIGgoXCJhbXBsaWZ5LWF1dGgtZmllbGRzXCIsIHsgZm9ybUZpZWxkczogdGhpcy5uZXdGb3JtRmllbGRzIH0pKSk7XG4gICAgfTtcbiAgICByZXR1cm4gY2xhc3NfNDtcbn0oKSk7XG52YXIgYW1wbGlmeVNpZ25JbkNzcyA9IFwiOmhvc3R7LS1mb290ZXItc2l6ZTp2YXIoLS1hbXBsaWZ5LXRleHQtc20pOy0tZm9vdGVyLWNvbG9yOnZhcigtLWFtcGxpZnktZ3JleSk7LS1mb290ZXItZm9udC1mYW1pbHk6dmFyKC0tYW1wbGlmeS1mb250LWZhbWlseSk7LS1mb250LXdlaWdodDp2YXIoLS1hbXBsaWZ5LWZvbnQtd2VpZ2h0KX0uc2lnbi1pbi1mb3JtLWZvb3Rlcntmb250LWZhbWlseTp2YXIoLS1mb290ZXItZm9udC1mYW1pbHkpO2ZvbnQtc2l6ZTp2YXIoLS1mb290ZXItc2l6ZSk7Y29sb3I6dmFyKC0tZm9vdGVyLWNvbG9yKTtmb250LXdlaWdodDotLWZvbnQtd2VpZ2h0O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZTtmbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6ZGlzdHJpYnV0ZTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kfS5zaWduLWluLWZvcm0tZm9vdGVyIGFtcGxpZnktYnV0dG9ue21hcmdpbi1ib3R0b206MC42MjVyZW19QG1lZGlhIChtaW4td2lkdGg6IDY3MnB4KXsuc2lnbi1pbi1mb3JtLWZvb3RlcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvdzstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47LW1zLWZsZXgtYWxpZ246YmFzZWxpbmU7YWxpZ24taXRlbXM6YmFzZWxpbmV9LnNpZ24taW4tZm9ybS1mb290ZXIgYW1wbGlmeS1idXR0b257bWFyZ2luLWJvdHRvbTowfX0uc2lnbi1pbi1mb3JtLWZvb3RlciAqKyp7bWFyZ2luLWJvdHRvbToxNXB4fVwiO1xudmFyIEFtcGxpZnlTaWduSW4gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfNShob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIC8qKiBGaXJlcyB3aGVuIHNpZ24gaW4gZm9ybSBpcyBzdWJtaXR0ZWQgKi9cbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF90aGlzLnNpZ25JbihldmVudCk7IH07XG4gICAgICAgIC8qKiBVc2VkIGZvciBoZWFkZXIgdGV4dCBpbiBzaWduIGluIGNvbXBvbmVudCAqL1xuICAgICAgICB0aGlzLmhlYWRlclRleHQgPSBUcmFuc2xhdGlvbnMuU0lHTl9JTl9IRUFERVJfVEVYVDtcbiAgICAgICAgLyoqIFVzZWQgZm9yIHRoZSBzdWJtaXQgYnV0dG9uIHRleHQgaW4gc2lnbiBpbiBjb21wb25lbnQgKi9cbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b25UZXh0ID0gVHJhbnNsYXRpb25zLlNJR05fSU5fQUNUSU9OO1xuICAgICAgICAvKiogQXV0aCBzdGF0ZSBjaGFuZ2UgaGFuZGxlciBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgICAgICAgdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UgPSBkaXNwYXRjaEF1dGhTdGF0ZUNoYW5nZUV2ZW50O1xuICAgICAgICAvKiogVXNlcm5hbWUgQWxpYXMgaXMgdXNlZCB0byBzZXR1cCBhdXRoZW50aWNhdGlvbiB3aXRoIGB1c2VybmFtZWAsIGBlbWFpbGAgb3IgYHBob25lX251bWJlcmAgICovXG4gICAgICAgIHRoaXMudXNlcm5hbWVBbGlhcyA9ICd1c2VybmFtZSc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGb3JtIGZpZWxkcyBhbGxvd3MgeW91IHRvIHV0aWxpemUgb3VyIHByZS1idWlsdCBjb21wb25lbnRzIHN1Y2ggYXMgdXNlcm5hbWUgZmllbGQsIGNvZGUgZmllbGQsIHBhc3N3b3JkIGZpZWxkLCBlbWFpbCBmaWVsZCwgZXRjLlxuICAgICAgICAgKiBieSBwYXNzaW5nIGFuIGFycmF5IG9mIHN0cmluZ3MgdGhhdCB5b3Ugd291bGQgbGlrZSB0aGUgb3JkZXIgb2YgdGhlIGZvcm0gdG8gYmUgaW4uIElmIHlvdSBuZWVkIG1vcmUgY3VzdG9taXphdGlvbiwgc3VjaCBhcyBjaGFuZ2luZ1xuICAgICAgICAgKiB0ZXh0IGZvciBhIGxhYmVsIG9yIGFkanVzdCBhIHBsYWNlaG9sZGVyLCB5b3UgY2FuIGZvbGxvdyB0aGUgc3RydWN0dXJlIGJlbG93IGluIG9yZGVyIHRvIGRvIGp1c3QgdGhhdC5cbiAgICAgICAgICogYGBgXG4gICAgICAgICAqIFtcbiAgICAgICAgICogIHtcbiAgICAgICAgICogICAgdHlwZTogc3RyaW5nLFxuICAgICAgICAgKiAgICBsYWJlbDogc3RyaW5nLFxuICAgICAgICAgKiAgICBwbGFjZWhvbGRlcjogc3RyaW5nLFxuICAgICAgICAgKiAgICBoaW50OiBzdHJpbmcgfCBGdW5jdGlvbmFsIENvbXBvbmVudCB8IG51bGwsXG4gICAgICAgICAqICAgIHJlcXVpcmVkOiBib29sZWFuXG4gICAgICAgICAqICB9XG4gICAgICAgICAqIF1cbiAgICAgICAgICogYGBgXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZvcm1GaWVsZHMgPSBbXTtcbiAgICAgICAgLyoqIEhpZGVzIHRoZSBzaWduIHVwIGxpbmsgKi9cbiAgICAgICAgdGhpcy5oaWRlU2lnblVwID0gZmFsc2U7XG4gICAgICAgIHRoaXMubmV3Rm9ybUZpZWxkcyA9IFtdO1xuICAgICAgICAvKiBXaGV0aGVyIG9yIG5vdCB0aGUgc2lnbi1pbiBjb21wb25lbnQgaXMgbG9hZGluZyAqL1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5waG9uZU51bWJlciA9IHtcbiAgICAgICAgICAgIGNvdW50cnlEaWFsQ29kZVZhbHVlOiBDT1VOVFJZX0RJQUxfQ09ERV9ERUZBVUxULFxuICAgICAgICAgICAgcGhvbmVOdW1iZXJWYWx1ZTogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zaWduSW5BdHRyaWJ1dGVzID0ge1xuICAgICAgICAgICAgdXNlcklucHV0OiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xhc3NfNS5wcm90b3R5cGUuY29tcG9uZW50V2lsbExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoZWNrVXNlcm5hbWVBbGlhcyh0aGlzLnVzZXJuYW1lQWxpYXMpO1xuICAgICAgICB0aGlzLmJ1aWxkRm9ybUZpZWxkcygpO1xuICAgIH07XG4gICAgY2xhc3NfNS5wcm90b3R5cGUuZm9ybUZpZWxkc0hhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYnVpbGRGb3JtRmllbGRzKCk7XG4gICAgfTtcbiAgICBjbGFzc181LnByb3RvdHlwZS5oYW5kbGVGb3JtRmllbGRJbnB1dENoYW5nZSA9IGZ1bmN0aW9uIChmaWVsZFR5cGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgc3dpdGNoIChmaWVsZFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3VzZXJuYW1lJzpcbiAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiAoX3RoaXMuc2lnbkluQXR0cmlidXRlcy51c2VySW5wdXQgPSBldmVudC50YXJnZXQudmFsdWUpOyB9O1xuICAgICAgICAgICAgY2FzZSAncGhvbmVfbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBoYW5kbGVQaG9uZU51bWJlckNoYW5nZShldmVudCwgX3RoaXMucGhvbmVOdW1iZXIpOyB9O1xuICAgICAgICAgICAgY2FzZSAncGFzc3dvcmQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIChfdGhpcy5zaWduSW5BdHRyaWJ1dGVzLnBhc3N3b3JkID0gZXZlbnQudGFyZ2V0LnZhbHVlKTsgfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfNS5wcm90b3R5cGUuaGFuZGxlRm9ybUZpZWxkSW5wdXRXaXRoQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQsIGZpZWxkKSB7XG4gICAgICAgIHZhciBmblRvQ2FsbCA9IGZpZWxkWydoYW5kbGVJbnB1dENoYW5nZSddXG4gICAgICAgICAgICA/IGZpZWxkWydoYW5kbGVJbnB1dENoYW5nZSddXG4gICAgICAgICAgICA6IGZ1bmN0aW9uIChldmVudCwgY2IpIHtcbiAgICAgICAgICAgICAgICBjYihldmVudCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLmhhbmRsZUZvcm1GaWVsZElucHV0Q2hhbmdlKGZpZWxkLnR5cGUpO1xuICAgICAgICBmblRvQ2FsbChldmVudCwgY2FsbGJhY2suYmluZCh0aGlzKSk7XG4gICAgfTtcbiAgICBjbGFzc181LnByb3RvdHlwZS5zaWduSW4gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXZvaWQgc3VibWl0dGluZyB0aGUgZm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMudXNlcm5hbWVBbGlhcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3Bob25lX251bWJlcic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZ25JbkF0dHJpYnV0ZXMudXNlcklucHV0ID0gY29tcG9zZVBob25lTnVtYmVySW5wdXQodGhpcy5waG9uZU51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaFRvYXN0SHViRXZlbnQoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBoYW5kbGVTaWduSW4odGhpcy5zaWduSW5BdHRyaWJ1dGVzLnVzZXJJbnB1dCwgdGhpcy5zaWduSW5BdHRyaWJ1dGVzLnBhc3N3b3JkLCB0aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc181LnByb3RvdHlwZS5idWlsZERlZmF1bHRGb3JtRmllbGRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZm9ybUZpZWxkSW5wdXRzID0gW107XG4gICAgICAgIHN3aXRjaCAodGhpcy51c2VybmFtZUFsaWFzKSB7XG4gICAgICAgICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgICAgICAgICAgZm9ybUZpZWxkSW5wdXRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZW1haWwnLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U6IHRoaXMuaGFuZGxlRm9ybUZpZWxkSW5wdXRDaGFuZ2UoJ2VtYWlsJyksXG4gICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLXRlc3QnOiAnc2lnbi1pbi1lbWFpbC1pbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwaG9uZV9udW1iZXInOlxuICAgICAgICAgICAgICAgIGZvcm1GaWVsZElucHV0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Bob25lX251bWJlcicsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZTogdGhpcy5oYW5kbGVGb3JtRmllbGRJbnB1dENoYW5nZSgncGhvbmVfbnVtYmVyJyksXG4gICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLXRlc3QnOiAnc2lnbi1pbi1waG9uZS1udW1iZXItaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndXNlcm5hbWUnOlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBmb3JtRmllbGRJbnB1dHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd1c2VybmFtZScsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZTogdGhpcy5oYW5kbGVGb3JtRmllbGRJbnB1dENoYW5nZSgndXNlcm5hbWUnKSxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtdGVzdCc6ICdzaWduLWluLXVzZXJuYW1lLWlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBmb3JtRmllbGRJbnB1dHMucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgaGludDogKGgoXCJkaXZcIiwgbnVsbCwgSTE4bi5nZXQoVHJhbnNsYXRpb25zLkZPUkdPVF9QQVNTV09SRF9URVhUKSwgJyAnLCBoKFwiYW1wbGlmeS1idXR0b25cIiwgeyB2YXJpYW50OiBcImFuY2hvclwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLkZvcmdvdFBhc3N3b3JkKTsgfSwgXCJkYXRhLXRlc3RcIjogXCJzaWduLWluLWZvcmdvdC1wYXNzd29yZC1saW5rXCIgfSwgSTE4bi5nZXQoVHJhbnNsYXRpb25zLlJFU0VUX1BBU1NXT1JEX1RFWFQpKSkpLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZTogdGhpcy5oYW5kbGVGb3JtRmllbGRJbnB1dENoYW5nZSgncGFzc3dvcmQnKSxcbiAgICAgICAgICAgIGlucHV0UHJvcHM6IHtcbiAgICAgICAgICAgICAgICAnZGF0YS10ZXN0JzogJ3NpZ24taW4tcGFzc3dvcmQtaW5wdXQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubmV3Rm9ybUZpZWxkcyA9IF9fc3ByZWFkQXJyYXlzKGZvcm1GaWVsZElucHV0cyk7XG4gICAgfTtcbiAgICBjbGFzc181LnByb3RvdHlwZS5idWlsZEZvcm1GaWVsZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmZvcm1GaWVsZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkRGVmYXVsdEZvcm1GaWVsZHMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBuZXdGaWVsZHNfMiA9IFtdO1xuICAgICAgICAgICAgdGhpcy5mb3JtRmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0ZpZWxkID0gT2JqZWN0LmFzc2lnbih7fSwgZmllbGQpO1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IGhhbmRsZSBoaW50IGJldHRlclxuICAgICAgICAgICAgICAgIGlmIChuZXdGaWVsZC50eXBlID09PSAncGFzc3dvcmQnKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0ZpZWxkWydoaW50J10gPSBpc0hpbnRWYWxpZChuZXdGaWVsZCkgPyAoaChcImRpdlwiLCBudWxsLCBJMThuLmdldChUcmFuc2xhdGlvbnMuRk9SR09UX1BBU1NXT1JEX1RFWFQpLCAnICcsIGgoXCJhbXBsaWZ5LWJ1dHRvblwiLCB7IHZhcmlhbnQ6IFwiYW5jaG9yXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZShBdXRoU3RhdGUuRm9yZ290UGFzc3dvcmQpOyB9LCBcImRhdGEtdGVzdFwiOiBcInNpZ24taW4tZm9yZ290LXBhc3N3b3JkLWxpbmtcIiB9LCBJMThuLmdldChUcmFuc2xhdGlvbnMuUkVTRVRfUEFTU1dPUkRfVEVYVCkpKSkgOiAobmV3RmllbGRbJ2hpbnQnXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld0ZpZWxkWydoYW5kbGVJbnB1dENoYW5nZSddID0gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfdGhpcy5oYW5kbGVGb3JtRmllbGRJbnB1dFdpdGhDYWxsYmFjayhldmVudCwgZmllbGQpOyB9O1xuICAgICAgICAgICAgICAgIF90aGlzLnNldEZpZWxkVmFsdWUobmV3RmllbGQsIF90aGlzLnNpZ25JbkF0dHJpYnV0ZXMpO1xuICAgICAgICAgICAgICAgIG5ld0ZpZWxkc18yLnB1c2gobmV3RmllbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm5ld0Zvcm1GaWVsZHMgPSBuZXdGaWVsZHNfMjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfNS5wcm90b3R5cGUuc2V0RmllbGRWYWx1ZSA9IGZ1bmN0aW9uIChmaWVsZCwgZm9ybUF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3dpdGNoIChmaWVsZC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICd1c2VybmFtZSc6XG4gICAgICAgICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybUF0dHJpYnV0ZXMudXNlcklucHV0ID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3JtQXR0cmlidXRlcy51c2VySW5wdXQgPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwaG9uZV9udW1iZXInOlxuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5kaWFsQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBob25lTnVtYmVyLmNvdW50cnlEaWFsQ29kZVZhbHVlID0gZmllbGQuZGlhbENvZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucGhvbmVOdW1iZXIucGhvbmVOdW1iZXJWYWx1ZSA9IGZpZWxkLnZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncGFzc3dvcmQnOlxuICAgICAgICAgICAgICAgIGlmIChmaWVsZC52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1BdHRyaWJ1dGVzLnBhc3N3b3JkID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3JtQXR0cmlidXRlcy5wYXNzd29yZCA9IGZpZWxkLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfNS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gKGgoXCJhbXBsaWZ5LWZvcm0tc2VjdGlvblwiLCB7IGhlYWRlclRleHQ6IEkxOG4uZ2V0KHRoaXMuaGVhZGVyVGV4dCksIGhhbmRsZVN1Ym1pdDogdGhpcy5oYW5kbGVTdWJtaXQsIHRlc3REYXRhUHJlZml4OiAnc2lnbi1pbicgfSwgaChcImRpdlwiLCB7IHNsb3Q6IFwic3VidGl0bGVcIiB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFwiaGVhZGVyLXN1YnRpdGxlXCIgfSkpLCBoKFwic2xvdFwiLCB7IG5hbWU6IFwiZmVkZXJhdGVkLWJ1dHRvbnNcIiB9LCBoKFwiYW1wbGlmeS1mZWRlcmF0ZWQtYnV0dG9uc1wiLCB7IGhhbmRsZUF1dGhTdGF0ZUNoYW5nZTogdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UsIGZlZGVyYXRlZDogdGhpcy5mZWRlcmF0ZWQgfSkpLCAhaXNFbXB0eSh0aGlzLmZlZGVyYXRlZCkgJiYgaChcImFtcGxpZnktc3RyaWtlXCIsIG51bGwsIFwib3JcIiksIGgoXCJhbXBsaWZ5LWF1dGgtZmllbGRzXCIsIHsgZm9ybUZpZWxkczogdGhpcy5uZXdGb3JtRmllbGRzIH0pLCBoKFwiZGl2XCIsIHsgc2xvdDogXCJhbXBsaWZ5LWZvcm0tc2VjdGlvbi1mb290ZXJcIiwgY2xhc3M6IFwic2lnbi1pbi1mb3JtLWZvb3RlclwiIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogXCJmb290ZXJcIiB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFwic2Vjb25kYXJ5LWZvb3Rlci1jb250ZW50XCIgfSwgIXRoaXMuaGlkZVNpZ25VcCA/IChoKFwic3BhblwiLCBudWxsLCBJMThuLmdldChUcmFuc2xhdGlvbnMuTk9fQUNDT1VOVF9URVhUKSwgJyAnLCBoKFwiYW1wbGlmeS1idXR0b25cIiwgeyB2YXJpYW50OiBcImFuY2hvclwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLlNpZ25VcCk7IH0sIFwiZGF0YS10ZXN0XCI6IFwic2lnbi1pbi1jcmVhdGUtYWNjb3VudC1saW5rXCIgfSwgSTE4bi5nZXQoVHJhbnNsYXRpb25zLkNSRUFURV9BQ0NPVU5UX1RFWFQpKSkpIDogKGgoXCJzcGFuXCIsIG51bGwpKSksIGgoXCJzbG90XCIsIHsgbmFtZTogXCJwcmltYXJ5LWZvb3Rlci1jb250ZW50XCIgfSwgaChcImFtcGxpZnktYnV0dG9uXCIsIHsgdHlwZTogXCJzdWJtaXRcIiwgZGlzYWJsZWQ6IHRoaXMubG9hZGluZywgXCJkYXRhLXRlc3RcIjogXCJzaWduLWluLXNpZ24taW4tYnV0dG9uXCIgfSwgdGhpcy5sb2FkaW5nID8gaChcImFtcGxpZnktbG9hZGluZy1zcGlubmVyXCIsIG51bGwpIDogaChcInNwYW5cIiwgbnVsbCwgSTE4bi5nZXQodGhpcy5zdWJtaXRCdXR0b25UZXh0KSkpKSkpKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfNSwgXCJ3YXRjaGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcImZvcm1GaWVsZHNcIjogW1wiZm9ybUZpZWxkc0hhbmRsZXJcIl1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gY2xhc3NfNTtcbn0oKSk7XG5BbXBsaWZ5U2lnbkluLnN0eWxlID0gYW1wbGlmeVNpZ25JbkNzcztcbnZhciBhbXBsaWZ5U2lnblVwQ3NzID0gXCI6aG9zdHstLWZvb3Rlci1mb250LWZhbWlseTp2YXIoLS1hbXBsaWZ5LWZvbnQtZmFtaWx5KTstLWZvb3Rlci1mb250LXNpemU6dmFyKC0tYW1wbGlmeS10ZXh0LXNtKTstLWZvb3Rlci1jb2xvcjp2YXIoLS1hbXBsaWZ5LWdyZXkpOy0tZm9udC13ZWlnaHQ6dmFyKC0tYW1wbGlmeS1mb250LXdlaWdodCl9LnNpZ24tdXAtZm9ybS1mb290ZXJ7Zm9udC1mYW1pbHk6dmFyKC0tZm9vdGVyLWZvbnQtZmFtaWx5KTtmb250LXNpemU6dmFyKC0tZm9vdGVyLWZvbnQtc2l6ZSk7Y29sb3I6dmFyKC0tZm9vdGVyLWNvbG9yKTtmb250LXdlaWdodDotLWZvbnQtd2VpZ2h0O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZTtmbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6ZGlzdHJpYnV0ZTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kfS5zaWduLXVwLWZvcm0tZm9vdGVyIGFtcGxpZnktYnV0dG9ue21hcmdpbi1ib3R0b206MC42MjVyZW19QG1lZGlhIChtaW4td2lkdGg6IDY3MnB4KXsuc2lnbi11cC1mb3JtLWZvb3RlcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvdzstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47LW1zLWZsZXgtYWxpZ246YmFzZWxpbmU7YWxpZ24taXRlbXM6YmFzZWxpbmV9LnNpZ24tdXAtZm9ybS1mb290ZXIgYW1wbGlmeS1idXR0b257bWFyZ2luLWJvdHRvbTowfX0uc2lnbi11cC1mb3JtLWZvb3RlciAqKyp7bWFyZ2luLWJvdHRvbToxNXB4fVwiO1xudmFyIEFtcGxpZnlTaWduVXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfNihob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIC8qKiBGaXJlcyB3aGVuIHNpZ24gdXAgZm9ybSBpcyBzdWJtaXR0ZWQgKi9cbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF90aGlzLnNpZ25VcChldmVudCk7IH07XG4gICAgICAgIC8qKiBVc2VkIGZvciBoZWFkZXIgdGV4dCBpbiBzaWduIHVwIGNvbXBvbmVudCAqL1xuICAgICAgICB0aGlzLmhlYWRlclRleHQgPSBUcmFuc2xhdGlvbnMuU0lHTl9VUF9IRUFERVJfVEVYVDtcbiAgICAgICAgLyoqIFVzZWQgZm9yIHRoZSBzdWJtaXQgYnV0dG9uIHRleHQgaW4gc2lnbiB1cCBjb21wb25lbnQgKi9cbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b25UZXh0ID0gVHJhbnNsYXRpb25zLlNJR05fVVBfU1VCTUlUX0JVVFRPTl9URVhUO1xuICAgICAgICAvKiogVXNlZCBmb3IgdGhlIHN1Ym1pdCBidXR0b24gdGV4dCBpbiBzaWduIHVwIGNvbXBvbmVudCAqL1xuICAgICAgICB0aGlzLmhhdmVBY2NvdW50VGV4dCA9IFRyYW5zbGF0aW9ucy5TSUdOX1VQX0hBVkVfQUNDT1VOVF9URVhUO1xuICAgICAgICAvKiogVXNlZCBmb3IgdGhlIHN1Ym1pdCBidXR0b24gdGV4dCBpbiBzaWduIHVwIGNvbXBvbmVudCAqL1xuICAgICAgICB0aGlzLnNpZ25JblRleHQgPSBUcmFuc2xhdGlvbnMuU0lHTl9JTl9URVhUO1xuICAgICAgICAvKipcbiAgICAgICAgICogRm9ybSBmaWVsZHMgYWxsb3dzIHlvdSB0byB1dGlsaXplIG91ciBwcmUtYnVpbHQgY29tcG9uZW50cyBzdWNoIGFzIHVzZXJuYW1lIGZpZWxkLCBjb2RlIGZpZWxkLCBwYXNzd29yZCBmaWVsZCwgZW1haWwgZmllbGQsIGV0Yy5cbiAgICAgICAgICogYnkgcGFzc2luZyBhbiBhcnJheSBvZiBzdHJpbmdzIHRoYXQgeW91IHdvdWxkIGxpa2UgdGhlIG9yZGVyIG9mIHRoZSBmb3JtIHRvIGJlIGluLiBJZiB5b3UgbmVlZCBtb3JlIGN1c3RvbWl6YXRpb24sIHN1Y2ggYXMgY2hhbmdpbmdcbiAgICAgICAgICogdGV4dCBmb3IgYSBsYWJlbCBvciBhZGp1c3QgYSBwbGFjZWhvbGRlciwgeW91IGNhbiBmb2xsb3cgdGhlIHN0cnVjdHVyZSBiZWxvdyBpbiBvcmRlciB0byBkbyBqdXN0IHRoYXQuXG4gICAgICAgICAqIGBgYFxuICAgICAgICAgKiBbXG4gICAgICAgICAqICB7XG4gICAgICAgICAqICAgIHR5cGU6IHN0cmluZyxcbiAgICAgICAgICogICAgbGFiZWw6IHN0cmluZyxcbiAgICAgICAgICogICAgcGxhY2Vob2xkZXI6IHN0cmluZyxcbiAgICAgICAgICogICAgaGludDogc3RyaW5nIHwgRnVuY3Rpb25hbCBDb21wb25lbnQgfCBudWxsLFxuICAgICAgICAgKiAgICByZXF1aXJlZDogYm9vbGVhblxuICAgICAgICAgKiAgfVxuICAgICAgICAgKiBdXG4gICAgICAgICAqIGBgYFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mb3JtRmllbGRzID0gW107XG4gICAgICAgIC8qKiBBdXRoIHN0YXRlIGNoYW5nZSBoYW5kbGVyIGZvciB0aGlzIGNvbXBvbmVudFxuICAgICAgICAgKiBlLmcuIFNpZ25JbiAtPiAnQ3JlYXRlIEFjY291bnQnIGxpbmsgLT4gU2lnblVwXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZSA9IGRpc3BhdGNoQXV0aFN0YXRlQ2hhbmdlRXZlbnQ7XG4gICAgICAgIC8qKiBVc2VybmFtZSBBbGlhcyBpcyB1c2VkIHRvIHNldHVwIGF1dGhlbnRpY2F0aW9uIHdpdGggYHVzZXJuYW1lYCwgYGVtYWlsYCBvciBgcGhvbmVfbnVtYmVyYCAgKi9cbiAgICAgICAgdGhpcy51c2VybmFtZUFsaWFzID0gJ3VzZXJuYW1lJztcbiAgICAgICAgLy8gcHJpdmF0ZSB1c2VySW5wdXQ6IHN0cmluZyB8IFBob25lTnVtYmVySW50ZXJmYWNlO1xuICAgICAgICB0aGlzLm5ld0Zvcm1GaWVsZHMgPSBbXTtcbiAgICAgICAgdGhpcy5waG9uZU51bWJlciA9IHtcbiAgICAgICAgICAgIGNvdW50cnlEaWFsQ29kZVZhbHVlOiBDT1VOVFJZX0RJQUxfQ09ERV9ERUZBVUxULFxuICAgICAgICAgICAgcGhvbmVOdW1iZXJWYWx1ZTogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2lnblVwQXR0cmlidXRlcyA9IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjbGFzc182LnByb3RvdHlwZS5oYW5kbGVGb3JtRmllbGRJbnB1dENoYW5nZSA9IGZ1bmN0aW9uIChmaWVsZFR5cGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgc3dpdGNoIChmaWVsZFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3VzZXJuYW1lJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiAoX3RoaXMuc2lnblVwQXR0cmlidXRlcy51c2VybmFtZSA9IGV2ZW50LnRhcmdldC52YWx1ZSk7IH07XG4gICAgICAgICAgICBjYXNlICdwYXNzd29yZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gKF90aGlzLnNpZ25VcEF0dHJpYnV0ZXMucGFzc3dvcmQgPSBldmVudC50YXJnZXQudmFsdWUpOyB9O1xuICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIChfdGhpcy5zaWduVXBBdHRyaWJ1dGVzLmF0dHJpYnV0ZXMuZW1haWwgPSBldmVudC50YXJnZXQudmFsdWUpOyB9O1xuICAgICAgICAgICAgY2FzZSAncGhvbmVfbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBoYW5kbGVQaG9uZU51bWJlckNoYW5nZShldmVudCwgX3RoaXMucGhvbmVOdW1iZXIpOyB9O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiAoX3RoaXMuc2lnblVwQXR0cmlidXRlcy5hdHRyaWJ1dGVzW2ZpZWxkVHlwZV0gPSBldmVudC50YXJnZXQudmFsdWUpOyB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc182LnByb3RvdHlwZS5oYW5kbGVGb3JtRmllbGRJbnB1dFdpdGhDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCwgZmllbGQpIHtcbiAgICAgICAgdmFyIGZuVG9DYWxsID0gZmllbGRbJ2hhbmRsZUlucHV0Q2hhbmdlJ11cbiAgICAgICAgICAgID8gZmllbGRbJ2hhbmRsZUlucHV0Q2hhbmdlJ11cbiAgICAgICAgICAgIDogZnVuY3Rpb24gKGV2ZW50LCBjYikge1xuICAgICAgICAgICAgICAgIGNiKGV2ZW50KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRoaXMuaGFuZGxlRm9ybUZpZWxkSW5wdXRDaGFuZ2UoZmllbGQudHlwZSk7XG4gICAgICAgIGZuVG9DYWxsKGV2ZW50LCBjYWxsYmFjay5iaW5kKHRoaXMpKTtcbiAgICB9O1xuICAgIC8vIFRPRE86IEFkZCB2YWxpZGF0aW9uXG4gICAgLy8gVE9ETzogUHJlZml4XG4gICAgY2xhc3NfNi5wcm90b3R5cGUuc2lnblVwID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYXRhLCBzaWduVXBBdHRycywgZXJyb3JfODtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIUF1dGggfHwgdHlwZW9mIEF1dGguc2lnblVwICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5PX0FVVEhfTU9EVUxFX0ZPVU5EKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBob25lTnVtYmVyLnBob25lTnVtYmVyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZ25VcEF0dHJpYnV0ZXMuYXR0cmlidXRlcy5waG9uZV9udW1iZXIgPSBjb21wb3NlUGhvbmVOdW1iZXJJbnB1dCh0aGlzLnBob25lTnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoVG9hc3RIdWJFdmVudChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLnVzZXJuYW1lQWxpYXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncGhvbmVfbnVtYmVyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWduVXBBdHRyaWJ1dGVzLnVzZXJuYW1lID0gdGhpcy5zaWduVXBBdHRyaWJ1dGVzLmF0dHJpYnV0ZXNbdGhpcy51c2VybmFtZUFsaWFzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgNiwgLCA3XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBBdXRoLnNpZ25VcCh0aGlzLnNpZ25VcEF0dHJpYnV0ZXMpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihUcmFuc2xhdGlvbnMuU0lHTl9VUF9GQUlMRUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLnVzZXJDb25maXJtZWQpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaGFuZGxlU2lnbkluKHRoaXMuc2lnblVwQXR0cmlidXRlcy51c2VybmFtZSwgdGhpcy5zaWduVXBBdHRyaWJ1dGVzLnBhc3N3b3JkLCB0aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnblVwQXR0cnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNpZ25VcEF0dHJpYnV0ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLkNvbmZpcm1TaWduVXAsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YS51c2VyKSwgeyBzaWduVXBBdHRyczogc2lnblVwQXR0cnMgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA1O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl84ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hUb2FzdEh1YkV2ZW50KGVycm9yXzgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgN107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzYucHJvdG90eXBlLmJ1aWxkRGVmYXVsdEZvcm1GaWVsZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy51c2VybmFtZUFsaWFzKSB7XG4gICAgICAgICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgICAgICAgICAgdGhpcy5uZXdGb3JtRmllbGRzID0gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZW1haWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5TSUdOX1VQX0VNQUlMX1BMQUNFSE9MREVSKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U6IHRoaXMuaGFuZGxlRm9ybUZpZWxkSW5wdXRDaGFuZ2UoJ2VtYWlsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtdGVzdCc6ICdzaWduLXVwLWVtYWlsLWlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogSTE4bi5nZXQoVHJhbnNsYXRpb25zLlNJR05fVVBfUEFTU1dPUkRfUExBQ0VIT0xERVIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZTogdGhpcy5oYW5kbGVGb3JtRmllbGRJbnB1dENoYW5nZSgncGFzc3dvcmQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS10ZXN0JzogJ3NpZ24tdXAtcGFzc3dvcmQtaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Bob25lX251bWJlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlOiB0aGlzLmhhbmRsZUZvcm1GaWVsZElucHV0Q2hhbmdlKCdwaG9uZV9udW1iZXInKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS10ZXN0JzogJ3NpZ24tdXAtcGhvbmUtbnVtYmVyLWlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Bob25lX251bWJlcic6XG4gICAgICAgICAgICAgICAgdGhpcy5uZXdGb3JtRmllbGRzID0gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGhvbmVfbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U6IHRoaXMuaGFuZGxlRm9ybUZpZWxkSW5wdXRDaGFuZ2UoJ3Bob25lX251bWJlcicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLXRlc3QnOiAnc2lnbi11cC1waG9uZS1udW1iZXItaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBJMThuLmdldChUcmFuc2xhdGlvbnMuU0lHTl9VUF9QQVNTV09SRF9QTEFDRUhPTERFUiksXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlOiB0aGlzLmhhbmRsZUZvcm1GaWVsZElucHV0Q2hhbmdlKCdwYXNzd29yZCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLXRlc3QnOiAnc2lnbi11cC1wYXNzd29yZC1pbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZW1haWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5TSUdOX1VQX0VNQUlMX1BMQUNFSE9MREVSKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U6IHRoaXMuaGFuZGxlRm9ybUZpZWxkSW5wdXRDaGFuZ2UoJ2VtYWlsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtdGVzdCc6ICdzaWduLXVwLWVtYWlsLWlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3VzZXJuYW1lJzpcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5uZXdGb3JtRmllbGRzID0gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndXNlcm5hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5TSUdOX1VQX1VTRVJOQU1FX1BMQUNFSE9MREVSKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U6IHRoaXMuaGFuZGxlRm9ybUZpZWxkSW5wdXRDaGFuZ2UoJ3VzZXJuYW1lJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtdGVzdCc6ICdzaWduLXVwLXVzZXJuYW1lLWlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogSTE4bi5nZXQoVHJhbnNsYXRpb25zLlNJR05fVVBfUEFTU1dPUkRfUExBQ0VIT0xERVIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZTogdGhpcy5oYW5kbGVGb3JtRmllbGRJbnB1dENoYW5nZSgncGFzc3dvcmQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS10ZXN0JzogJ3NpZ24tdXAtcGFzc3dvcmQtaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2VtYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBJMThuLmdldChUcmFuc2xhdGlvbnMuU0lHTl9VUF9FTUFJTF9QTEFDRUhPTERFUiksXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlOiB0aGlzLmhhbmRsZUZvcm1GaWVsZElucHV0Q2hhbmdlKCdlbWFpbCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLXRlc3QnOiAnc2lnbi11cC1lbWFpbC1pbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGhvbmVfbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U6IHRoaXMuaGFuZGxlRm9ybUZpZWxkSW5wdXRDaGFuZ2UoJ3Bob25lX251bWJlcicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLXRlc3QnOiAnc2lnbi11cC1waG9uZS1udW1iZXItaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc182LnByb3RvdHlwZS5idWlsZEZvcm1GaWVsZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmZvcm1GaWVsZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkRGVmYXVsdEZvcm1GaWVsZHMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBuZXdGaWVsZHNfMyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5mb3JtRmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0ZpZWxkID0gT2JqZWN0LmFzc2lnbih7fSwgZmllbGQpO1xuICAgICAgICAgICAgICAgIG5ld0ZpZWxkWydoYW5kbGVJbnB1dENoYW5nZSddID0gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfdGhpcy5oYW5kbGVGb3JtRmllbGRJbnB1dFdpdGhDYWxsYmFjayhldmVudCwgZmllbGQpOyB9O1xuICAgICAgICAgICAgICAgIF90aGlzLnNldEZpZWxkVmFsdWUoZmllbGQsIF90aGlzLnNpZ25VcEF0dHJpYnV0ZXMpO1xuICAgICAgICAgICAgICAgIG5ld0ZpZWxkc18zLnB1c2gobmV3RmllbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm5ld0Zvcm1GaWVsZHMgPSBuZXdGaWVsZHNfMztcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfNi5wcm90b3R5cGUuc2V0RmllbGRWYWx1ZSA9IGZ1bmN0aW9uIChmaWVsZCwgZm9ybUF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3dpdGNoIChmaWVsZC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICd1c2VybmFtZSc6XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybUF0dHJpYnV0ZXMudXNlcm5hbWUgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1BdHRyaWJ1dGVzLnVzZXJuYW1lID0gZmllbGQudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncGFzc3dvcmQnOlxuICAgICAgICAgICAgICAgIGlmIChmaWVsZC52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1BdHRyaWJ1dGVzLnBhc3N3b3JkID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3JtQXR0cmlidXRlcy5wYXNzd29yZCA9IGZpZWxkLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgICAgICAgICBmb3JtQXR0cmlidXRlcy5hdHRyaWJ1dGVzLmVtYWlsID0gZmllbGQudmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwaG9uZV9udW1iZXInOlxuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5kaWFsQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBob25lTnVtYmVyLmNvdW50cnlEaWFsQ29kZVZhbHVlID0gZmllbGQuZGlhbENvZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucGhvbmVOdW1iZXIucGhvbmVOdW1iZXJWYWx1ZSA9IGZpZWxkLnZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBmb3JtQXR0cmlidXRlcy5hdHRyaWJ1dGVzW2ZpZWxkLnR5cGVdID0gZmllbGQudmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzYucHJvdG90eXBlLmNvbXBvbmVudFdpbGxMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjaGVja1VzZXJuYW1lQWxpYXModGhpcy51c2VybmFtZUFsaWFzKTtcbiAgICAgICAgdGhpcy5idWlsZEZvcm1GaWVsZHMoKTtcbiAgICB9O1xuICAgIGNsYXNzXzYucHJvdG90eXBlLmZvcm1GaWVsZHNIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmJ1aWxkRm9ybUZpZWxkcygpO1xuICAgIH07XG4gICAgY2xhc3NfNi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gKGgoXCJhbXBsaWZ5LWZvcm0tc2VjdGlvblwiLCB7IGhlYWRlclRleHQ6IEkxOG4uZ2V0KHRoaXMuaGVhZGVyVGV4dCksIGhhbmRsZVN1Ym1pdDogdGhpcy5oYW5kbGVTdWJtaXQsIHRlc3REYXRhUHJlZml4OiAnc2lnbi11cCcgfSwgaChcImRpdlwiLCB7IHNsb3Q6IFwic3VidGl0bGVcIiB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFwiaGVhZGVyLXN1YnRpdGxlXCIgfSkpLCBoKFwiYW1wbGlmeS1hdXRoLWZpZWxkc1wiLCB7IGZvcm1GaWVsZHM6IHRoaXMubmV3Rm9ybUZpZWxkcyB9KSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInNpZ24tdXAtZm9ybS1mb290ZXJcIiwgc2xvdDogXCJhbXBsaWZ5LWZvcm0tc2VjdGlvbi1mb290ZXJcIiB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFwiZm9vdGVyXCIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBcInNlY29uZGFyeS1mb290ZXItY29udGVudFwiIH0sIGgoXCJzcGFuXCIsIG51bGwsIEkxOG4uZ2V0KHRoaXMuaGF2ZUFjY291bnRUZXh0KSwgJyAnLCBoKFwiYW1wbGlmeS1idXR0b25cIiwgeyB2YXJpYW50OiBcImFuY2hvclwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLlNpZ25Jbik7IH0sIFwiZGF0YS10ZXN0XCI6IFwic2lnbi11cC1zaWduLWluLWxpbmtcIiB9LCBJMThuLmdldCh0aGlzLnNpZ25JblRleHQpKSkpLCBoKFwic2xvdFwiLCB7IG5hbWU6IFwicHJpbWFyeS1mb290ZXItY29udGVudFwiIH0sIGgoXCJhbXBsaWZ5LWJ1dHRvblwiLCB7IHR5cGU6IFwic3VibWl0XCIsIFwiZGF0YS10ZXN0XCI6IFwic2lnbi11cC1jcmVhdGUtYWNjb3VudC1idXR0b25cIiB9LCB0aGlzLmxvYWRpbmcgPyBoKFwiYW1wbGlmeS1sb2FkaW5nLXNwaW5uZXJcIiwgbnVsbCkgOiBoKFwic3BhblwiLCBudWxsLCBJMThuLmdldCh0aGlzLnN1Ym1pdEJ1dHRvblRleHQpKSkpKSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc182LCBcIndhdGNoZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiZm9ybUZpZWxkc1wiOiBbXCJmb3JtRmllbGRzSGFuZGxlclwiXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc182O1xufSgpKTtcbkFtcGxpZnlTaWduVXAuc3R5bGUgPSBhbXBsaWZ5U2lnblVwQ3NzO1xudmFyIGxvZ2dlciQyID0gbmV3IExvZ2dlcignQW1wbGlmeVZlcmlmeUNvbnRhY3QnKTtcbnZhciBBbXBsaWZ5VmVyaWZ5Q29udGFjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc183KGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqIEF1dGhlbnRpY2F0aW9uIHN0YXRlIGhhbmRsZXIgKi9cbiAgICAgICAgdGhpcy5oYW5kbGVBdXRoU3RhdGVDaGFuZ2UgPSBkaXNwYXRjaEF1dGhTdGF0ZUNoYW5nZUV2ZW50O1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgY2xhc3NfNy5wcm90b3R5cGUuaGFuZGxlU3VibWl0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudmVyaWZ5QXR0ciA/IHRoaXMuc3VibWl0KHRoaXMuY29kZSkgOiB0aGlzLnZlcmlmeSh0aGlzLmNvbnRhY3QpO1xuICAgIH07XG4gICAgY2xhc3NfNy5wcm90b3R5cGUuc3VibWl0ID0gZnVuY3Rpb24gKGNvZGUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGF0dHIsIGRhdGEsIGVycm9yXzk7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyID0gdGhpcy52ZXJpZnlBdHRyO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFBdXRoIHx8IHR5cGVvZiBBdXRoLnZlcmlmeUN1cnJlbnRVc2VyQXR0cmlidXRlU3VibWl0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5PX0FVVEhfTU9EVUxFX0ZPVU5EKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgNCwgNV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgQXV0aC52ZXJpZnlDdXJyZW50VXNlckF0dHJpYnV0ZVN1Ym1pdChhdHRyLCBjb2RlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIkMi5kZWJ1ZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5TaWduZWRJbiwgdGhpcy51c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmVyaWZ5QXR0ciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfOSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoVG9hc3RIdWJFdmVudChlcnJvcl85KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlciQyLmVycm9yKGVycm9yXzkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfNy5wcm90b3R5cGUudmVyaWZ5ID0gZnVuY3Rpb24gKGNvbnRhY3QpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRhdGEsIGVycm9yXzEwO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb250YWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyJDIuZXJyb3IoJ05laXRoZXIgRW1haWwgbm9yIFBob25lIE51bWJlciBzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghQXV0aCB8fCB0eXBlb2YgQXV0aC52ZXJpZnlDdXJyZW50VXNlckF0dHJpYnV0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOT19BVVRIX01PRFVMRV9GT1VORCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsIDQsIDVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIEF1dGgudmVyaWZ5Q3VycmVudFVzZXJBdHRyaWJ1dGUoY29udGFjdCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyJDIuZGVidWcoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcmlmeUF0dHIgPSBjb250YWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzEwID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hUb2FzdEh1YkV2ZW50KGVycm9yXzEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlciQyLmVycm9yKGVycm9yXzEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzcucHJvdG90eXBlLmhhbmRsZUlucHV0Q2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBpbnB1dE5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICAgICAgaWYgKGlucHV0TmFtZSA9PT0gJ2NvZGUnKSB7XG4gICAgICAgICAgICB0aGlzLmNvZGUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5wdXROYW1lID09PSAnY29udGFjdCcpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFjdCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfNy5wcm90b3R5cGUucmVuZGVyU3VibWl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gKGgoXCJkaXZcIiwgbnVsbCwgaChcImFtcGxpZnktaW5wdXRcIiwgeyBpbnB1dFByb3BzOiB7XG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiAnb2ZmJyxcbiAgICAgICAgICAgICAgICAnZGF0YS10ZXN0JzogJ3ZlcmlmeS1jb250YWN0LWNvZGUtaW5wdXQnLFxuICAgICAgICAgICAgfSwgbmFtZTogXCJjb2RlXCIsIHBsYWNlaG9sZGVyOiBJMThuLmdldChUcmFuc2xhdGlvbnMuQ09ERV9QTEFDRUhPTERFUiksIGhhbmRsZUlucHV0Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KTsgfSB9KSkpO1xuICAgIH07XG4gICAgY2xhc3NfNy5wcm90b3R5cGUucmVuZGVyVmVyaWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgdXNlciA9IHRoaXMudXNlcjtcbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICBsb2dnZXIkMi5kZWJ1ZygnTm8gdXNlciB0byB2ZXJpZnknKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciB1bnZlcmlmaWVkID0gdXNlci51bnZlcmlmaWVkO1xuICAgICAgICBpZiAoIXVudmVyaWZpZWQpIHtcbiAgICAgICAgICAgIGxvZ2dlciQyLmRlYnVnKCdVbnZlcmlmaWVkIHZhcmlhYmxlIGRvZXMgbm90IGV4aXN0IG9uIHVzZXInKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbWFpbCA9IHVudmVyaWZpZWQuZW1haWwsIHBob25lX251bWJlciA9IHVudmVyaWZpZWQucGhvbmVfbnVtYmVyO1xuICAgICAgICByZXR1cm4gKGgoXCJkaXZcIiwgbnVsbCwgZW1haWwgJiYgKGgoXCJhbXBsaWZ5LXJhZGlvLWJ1dHRvblwiLCB7IGxhYmVsOiBJMThuLmdldChUcmFuc2xhdGlvbnMuVkVSSUZZX0NPTlRBQ1RfRU1BSUxfTEFCRUwpLCBrZXk6IFwiZW1haWxcIiwgbmFtZTogXCJjb250YWN0XCIsIHZhbHVlOiBcImVtYWlsXCIsIGhhbmRsZUlucHV0Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KTsgfSwgaW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICdkYXRhLXRlc3QnOiAndmVyaWZ5LWNvbnRhY3QtZW1haWwtcmFkaW8nLFxuICAgICAgICAgICAgfSB9KSksIHBob25lX251bWJlciAmJiAoaChcImFtcGxpZnktcmFkaW8tYnV0dG9uXCIsIHsgbGFiZWw6IEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5WRVJJRllfQ09OVEFDVF9QSE9ORV9MQUJFTCksIGtleTogXCJwaG9uZV9udW1iZXJcIiwgbmFtZTogXCJjb250YWN0XCIsIHZhbHVlOiBcInBob25lX251bWJlclwiLCBoYW5kbGVJbnB1dENoYW5nZTogZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfdGhpcy5oYW5kbGVJbnB1dENoYW5nZShldmVudCk7IH0sIGlucHV0UHJvcHM6IHtcbiAgICAgICAgICAgICAgICAnZGF0YS10ZXN0JzogJ3ZlcmlmeS1jb250YWN0LWVtYWlsLXJhZGlvJyxcbiAgICAgICAgICAgIH0gfSkpKSk7XG4gICAgfTtcbiAgICBjbGFzc183LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoaChcImFtcGxpZnktZm9ybS1zZWN0aW9uXCIsIHsgaGFuZGxlU3VibWl0OiBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF90aGlzLmhhbmRsZVN1Ym1pdChldmVudCk7IH0sIGhlYWRlclRleHQ6IEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5WRVJJRllfQ09OVEFDVF9IRUFERVJfVEVYVCksIGxvYWRpbmc6IHRoaXMubG9hZGluZywgc2Vjb25kYXJ5Rm9vdGVyQ29udGVudDogaChcInNwYW5cIiwgbnVsbCwgaChcImFtcGxpZnktYnV0dG9uXCIsIHsgdmFyaWFudDogXCJhbmNob3JcIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5TaWduZWRJbiwgX3RoaXMudXNlcik7IH0gfSwgXCJTa2lwXCIpKSwgc3VibWl0QnV0dG9uVGV4dDogdGhpcy52ZXJpZnlBdHRyXG4gICAgICAgICAgICAgICAgPyBJMThuLmdldChUcmFuc2xhdGlvbnMuVkVSSUZZX0NPTlRBQ1RfU1VCTUlUX0xBQkVMKVxuICAgICAgICAgICAgICAgIDogSTE4bi5nZXQoVHJhbnNsYXRpb25zLlZFUklGWV9DT05UQUNUX1ZFUklGWV9MQUJFTCkgfSwgdGhpcy52ZXJpZnlBdHRyID8gdGhpcy5yZW5kZXJTdWJtaXQoKSA6IHRoaXMucmVuZGVyVmVyaWZ5KCkpKTtcbiAgICB9O1xuICAgIHJldHVybiBjbGFzc183O1xufSgpKTtcbmV4cG9ydCB7IEFtcGxpZnlDb25maXJtU2lnbkluIGFzIGFtcGxpZnlfY29uZmlybV9zaWduX2luLCBBbXBsaWZ5Q29uZmlybVNpZ25VcCBhcyBhbXBsaWZ5X2NvbmZpcm1fc2lnbl91cCwgQW1wbGlmeUZvcmdvdFBhc3N3b3JkIGFzIGFtcGxpZnlfZm9yZ290X3Bhc3N3b3JkLCBBbXBsaWZ5UmVxdWlyZU5ld1Bhc3N3b3JkIGFzIGFtcGxpZnlfcmVxdWlyZV9uZXdfcGFzc3dvcmQsIEFtcGxpZnlTaWduSW4gYXMgYW1wbGlmeV9zaWduX2luLCBBbXBsaWZ5U2lnblVwIGFzIGFtcGxpZnlfc2lnbl91cCwgQW1wbGlmeVZlcmlmeUNvbnRhY3QgYXMgYW1wbGlmeV92ZXJpZnlfY29udGFjdCB9O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IExvZ2dlciwgaXNFbXB0eSB9IGZyb20gJ0Bhd3MtYW1wbGlmeS9jb3JlJztcbmltcG9ydCB7IEEgYXMgQXV0aFN0YXRlLCBDIGFzIENoYWxsZW5nZU5hbWUgfSBmcm9tICcuL2F1dGgtdHlwZXMtNzhkZjMwNGUuanMnO1xuaW1wb3J0IHsgQXV0aCB9IGZyb20gJ0Bhd3MtYW1wbGlmeS9hdXRoJztcbmltcG9ydCB7IE4gYXMgTk9fQVVUSF9NT0RVTEVfRk9VTkQgfSBmcm9tICcuL2NvbnN0YW50cy1kMWFiZTdkZS5qcyc7XG5pbXBvcnQgeyBhIGFzIGRpc3BhdGNoVG9hc3RIdWJFdmVudCB9IGZyb20gJy4vaGVscGVycy0wMWVjZjVmOS5qcyc7XG52YXIgbG9nZ2VyID0gbmV3IExvZ2dlcignYXV0aC1oZWxwZXJzJyk7XG5mdW5jdGlvbiBjaGVja0NvbnRhY3QodXNlciwgaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSwgbmV3VXNlciwgZXJyb3JfMTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFBdXRoIHx8IHR5cGVvZiBBdXRoLnZlcmlmaWVkQ29udGFjdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5PX0FVVEhfTU9EVUxFX0ZPVU5EKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBBdXRoLnZlcmlmaWVkQ29udGFjdCh1c2VyKV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzRW1wdHkoZGF0YS52ZXJpZmllZCkgfHwgaXNFbXB0eShkYXRhLnVudmVyaWZpZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLlNpZ25lZEluLCB1c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1VzZXIgPSBPYmplY3QuYXNzaWduKHVzZXIsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5WZXJpZnlDb250YWN0LCBuZXdVc2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoVG9hc3RIdWJFdmVudChlcnJvcl8xKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxudmFyIGhhbmRsZVNpZ25JbiA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQsIGhhbmRsZUF1dGhTdGF0ZUNoYW5nZSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdXNlciwgZXJyb3JfMjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAoIUF1dGggfHwgdHlwZW9mIEF1dGguc2lnbkluICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOT19BVVRIX01PRFVMRV9GT1VORCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDksICwgMTBdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBBdXRoLnNpZ25Jbih1c2VybmFtZSwgcGFzc3dvcmQpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB1c2VyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1Zyh1c2VyKTtcbiAgICAgICAgICAgICAgICBpZiAoISh1c2VyLmNoYWxsZW5nZU5hbWUgPT09IENoYWxsZW5nZU5hbWUuU01TTUZBIHx8IHVzZXIuY2hhbGxlbmdlTmFtZSA9PT0gQ2hhbGxlbmdlTmFtZS5Tb2Z0d2FyZVRva2VuTUZBKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdjb25maXJtIHVzZXIgd2l0aCAnICsgdXNlci5jaGFsbGVuZ2VOYW1lKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLkNvbmZpcm1TaWduSW4sIHVzZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDhdO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGlmICghKHVzZXIuY2hhbGxlbmdlTmFtZSA9PT0gQ2hhbGxlbmdlTmFtZS5OZXdQYXNzd29yZFJlcXVpcmVkKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdyZXF1aXJlIG5ldyBwYXNzd29yZCcsIHVzZXIuY2hhbGxlbmdlUGFyYW0pO1xuICAgICAgICAgICAgICAgIGhhbmRsZUF1dGhTdGF0ZUNoYW5nZShBdXRoU3RhdGUuUmVzZXRQYXNzd29yZCwgdXNlcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgaWYgKCEodXNlci5jaGFsbGVuZ2VOYW1lID09PSBDaGFsbGVuZ2VOYW1lLk1GQVNldHVwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdUT1RQIHNldHVwJywgdXNlci5jaGFsbGVuZ2VQYXJhbSk7XG4gICAgICAgICAgICAgICAgaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5UT1RQU2V0dXAsIHVzZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDhdO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGlmICghKHVzZXIuY2hhbGxlbmdlTmFtZSA9PT0gQ2hhbGxlbmdlTmFtZS5DdXN0b21DaGFsbGVuZ2UgJiZcbiAgICAgICAgICAgICAgICAgICAgdXNlci5jaGFsbGVuZ2VQYXJhbSAmJlxuICAgICAgICAgICAgICAgICAgICB1c2VyLmNoYWxsZW5nZVBhcmFtLnRyaWdnZXIgPT09ICd0cnVlJykpIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnY3VzdG9tIGNoYWxsZW5nZScsIHVzZXIuY2hhbGxlbmdlUGFyYW0pO1xuICAgICAgICAgICAgICAgIGhhbmRsZUF1dGhTdGF0ZUNoYW5nZShBdXRoU3RhdGUuQ3VzdG9tQ29uZmlybVNpZ25JbiwgdXNlcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XG4gICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoZWNrQ29udGFjdCh1c2VyLCBoYW5kbGVBdXRoU3RhdGVDaGFuZ2UpXTtcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgX2EubGFiZWwgPSA4O1xuICAgICAgICAgICAgY2FzZSA4OiByZXR1cm4gWzMgLypicmVhayovLCAxMF07XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgZXJyb3JfMiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaFRvYXN0SHViRXZlbnQoZXJyb3JfMik7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yXzIuY29kZSA9PT0gJ1VzZXJOb3RDb25maXJtZWRFeGNlcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygndGhlIHVzZXIgaXMgbm90IGNvbmZpcm1lZCcpO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLkNvbmZpcm1TaWduVXAsIHsgdXNlcm5hbWU6IHVzZXJuYW1lIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlcnJvcl8yLmNvZGUgPT09ICdQYXNzd29yZFJlc2V0UmVxdWlyZWRFeGNlcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygndGhlIHVzZXIgcmVxdWlyZXMgYSBuZXcgcGFzc3dvcmQnKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5Gb3Jnb3RQYXNzd29yZCwgeyB1c2VybmFtZTogdXNlcm5hbWUgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDEwXTtcbiAgICAgICAgICAgIGNhc2UgMTA6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG5leHBvcnQgeyBjaGVja0NvbnRhY3QgYXMgYywgaGFuZGxlU2lnbkluIGFzIGggfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=