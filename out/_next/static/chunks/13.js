(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[13],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-button_3.entry.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-button_3.entry.js ***!
  \****************************************************************************************/
/*! exports provided: amplify_button, amplify_loading_spinner, amplify_section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_button", function() { return AmplifyButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_loading_spinner", function() { return AmplifyLoadingSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_section", function() { return AmplifySection; });
/* harmony import */ var _index_39969785_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-39969785.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-39969785.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-types-78df304e.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-392acb9b.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/Translations-392acb9b.js");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/constants-d1abe7de.js");
/* harmony import */ var _helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-01ecf5f9.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/helpers-01ecf5f9.js");







var amplifyButtonCss = ":host{--background-color:var(--amplify-primary-color);--background-color-active:var(--amplify-primary-shade);--background-color-disable:var(--amplify-primary-tint);--color:var(--amplify-primary-contrast);--border-width:0;--border-color:initial;--border-style:initial;--link-color:var(--amplify-primary-color);--link-hover:var(--amplify-primary-tint);--link-active:var(--amplify-primary-shade);--text-transform:uppercase;--icon-fill:var(--amplify-white);--icon-height:1.25rem;--padding:1rem;--width:100%;width:var(--width);text-align:center}@media (min-width: 672px){:host{width:inherit}}.button{width:100%;min-width:153px;display:inline-block;margin-bottom:0;font-size:var(--amplify-text-sm);font-family:var(--amplify-font-family);font-weight:600;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;color:var(--color);padding:var(--padding);letter-spacing:0.75px;text-transform:var(--text-transform);background-color:var(--background-color);border-width:var(--border-width);border-color:var(--border-color);border-style:var(--border-style)}.button:active{opacity:1;background-color:var(--background-color-active)}.button:hover{opacity:0.8}.button:disabled{opacity:0.65;cursor:auto;background-color:var(--background-color-disable)}.icon{background-color:inherit;border:none;font:inherit;cursor:pointer;padding:var(--padding)}.icon amplify-icon{--icon-fill-color:var(--icon-fill);--height:var(--icon-height)}.anchor{color:var(--link-color);background-color:inherit;padding:0;border:none;font:inherit;cursor:pointer}.anchor:link{color:var(--link-color);text-decoration:none}.anchor:hover{color:var(--link-hover);text-decoration:underline}.anchor:active{color:var(--link-active);text-decoration:underline}";
var AmplifyButton = /** @class */ (function () {
    function AmplifyButton(hostRef) {
        var _this = this;
        Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Type of the button: 'button', 'submit' or 'reset' */
        this.type = 'button';
        /** Variant of a button: 'button' | 'anchor' */
        this.variant = 'button';
        /** Disabled state of the button */
        this.disabled = false;
        this.handleClick = function (ev) {
            if (_this.handleButtonClick) {
                _this.handleButtonClick(ev);
            }
            else if (Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["e"])(_this.el) && _this.type == 'submit') {
                // this button wants to specifically submit a form
                // climb up the dom to see if we're in a <form>
                // and if so, then use JS to submit it
                var form = _this.el.closest('form');
                if (!form) {
                    // Check for form inside of form section's shadow dom
                    var formSection = _this.el.closest('amplify-form-section');
                    form = formSection && formSection.shadowRoot.querySelector('form');
                }
                if (form) {
                    ev.preventDefault();
                    var fakeButton = document.createElement('button');
                    fakeButton.type = _this.type;
                    fakeButton.style.display = 'none';
                    form.appendChild(fakeButton);
                    fakeButton.click();
                    fakeButton.remove();
                }
            }
        };
    }
    AmplifyButton.prototype.render = function () {
        var _a;
        return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: (_a = {},
                _a[this.variant] = true,
                _a), type: this.type, disabled: this.disabled, onClick: this.handleClick }, this.variant === 'icon' && Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-icon", { name: this.icon }), Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    Object.defineProperty(AmplifyButton.prototype, "el", {
        get: function () { return Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    return AmplifyButton;
}());
AmplifyButton.style = amplifyButtonCss;
var amplifyLoadingSpinnerCss = ":host{--spinner-circle-fill:var(--amplify-smoke-white);--spinner-bar-fill:var(--amplify-primary-color);--width:0.875rem;--height:0.875rem}.loading-spinner svg{-webkit-animation:loading-spinner 1s linear infinite;animation:loading-spinner 1s linear infinite;width:var(--width);height:var(--height)}.loading-spinner svg #spinner-circle{fill:var(--spinner-circle-fill)}.loading-spinner svg #spinner-bar{fill:var(--spinner-bar-fill)}@-webkit-keyframes loading-spinner{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading-spinner{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";
var AmplifyLoadingSpinner = /** @class */ (function () {
    function AmplifyLoadingSpinner(hostRef) {
        Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    AmplifyLoadingSpinner.prototype.render = function () {
        return Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-icon", { class: "loading-spinner", name: "loading" });
    };
    return AmplifyLoadingSpinner;
}());
AmplifyLoadingSpinner.style = amplifyLoadingSpinnerCss;
var amplifySectionCss = ":host{--font-family:var(--amplify-font-family);--background-color:var(--amplify-background-color)}.section{position:relative;margin-bottom:var(--margin-bottom);background-color:var(--background-color);padding:var(--padding);text-align:left;display:inline-block;border-radius:var(--border-radius);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--font-family);width:100%;min-width:var(--min-width)}@media (min-width: 672px){.section{width:var(--width)}}";
var AmplifySection = /** @class */ (function () {
    function AmplifySection(hostRef) {
        Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Equivalent to html section role */
        this.role = 'application';
    }
    AmplifySection.prototype.render = function () {
        return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", { class: "section", role: this.role }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    Object.defineProperty(AmplifySection.prototype, "el", {
        get: function () { return Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    return AmplifySection;
}());
AmplifySection.style = amplifySectionCss;



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS91aS1jb21wb25lbnRzL2Rpc3QvZXNtLWVzNS9hbXBsaWZ5LWJ1dHRvbl8zLmVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdGO0FBQ3JEO0FBQ087QUFDUDtBQUNTO0FBQ0g7QUFDeUI7QUFDMUQsOEJBQThCLGdEQUFnRCx1REFBdUQsdURBQXVELHdDQUF3QyxpQkFBaUIsdUJBQXVCLHVCQUF1QiwwQ0FBMEMseUNBQXlDLDJDQUEyQywyQkFBMkIsaUNBQWlDLHNCQUFzQixlQUFlLGFBQWEsbUJBQW1CLGtCQUFrQiwwQkFBMEIsTUFBTSxlQUFlLFFBQVEsV0FBVyxnQkFBZ0IscUJBQXFCLGdCQUFnQixpQ0FBaUMsdUNBQXVDLGdCQUFnQixrQkFBa0IsbUJBQW1CLHNCQUFzQiw4QkFBOEIsMEJBQTBCLGVBQWUseUJBQXlCLHNCQUFzQixxQkFBcUIsaUJBQWlCLHNCQUFzQixtQkFBbUIsdUJBQXVCLHNCQUFzQixxQ0FBcUMseUNBQXlDLGlDQUFpQyxpQ0FBaUMsaUNBQWlDLGVBQWUsVUFBVSxnREFBZ0QsY0FBYyxZQUFZLGlCQUFpQixhQUFhLFlBQVksaURBQWlELE1BQU0seUJBQXlCLFlBQVksYUFBYSxlQUFlLHVCQUF1QixtQkFBbUIsbUNBQW1DLDRCQUE0QixRQUFRLHdCQUF3Qix5QkFBeUIsVUFBVSxZQUFZLGFBQWEsZUFBZSxhQUFhLHdCQUF3QixxQkFBcUIsY0FBYyx3QkFBd0IsMEJBQTBCLGVBQWUseUJBQXlCLDBCQUEwQjtBQUN0M0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsOERBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0REFBQyxZQUFZLGdCQUFnQjtBQUM3QztBQUNBLDBGQUEwRiw2QkFBNkIsNERBQUMsa0JBQWtCLGtCQUFrQixHQUFHLDREQUFDO0FBQ2hLO0FBQ0E7QUFDQSwwQkFBMEIsUUFBUSw0REFBVSxPQUFPLEVBQUU7QUFDckQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBLHNDQUFzQyxpREFBaUQsZ0RBQWdELGlCQUFpQixrQkFBa0IscUJBQXFCLHFEQUFxRCw2Q0FBNkMsbUJBQW1CLHFCQUFxQixxQ0FBcUMsZ0NBQWdDLGtDQUFrQyw2QkFBNkIsbUNBQW1DLEtBQUssK0JBQStCLHVCQUF1QixHQUFHLGlDQUFpQywwQkFBMEIsMkJBQTJCLEtBQUssK0JBQStCLHVCQUF1QixHQUFHLGlDQUFpQywwQkFBMEI7QUFDN3ZCO0FBQ0E7QUFDQSxRQUFRLDREQUFnQjtBQUN4QjtBQUNBO0FBQ0EsZUFBZSw0REFBQyxrQkFBa0IsNENBQTRDO0FBQzlFO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwrQkFBK0IseUNBQXlDLG1EQUFtRCxTQUFTLGtCQUFrQixtQ0FBbUMseUNBQXlDLHVCQUF1QixnQkFBZ0IscUJBQXFCLG1DQUFtQyxxQ0FBcUMsNkJBQTZCLDhCQUE4QixzQkFBc0IsK0JBQStCLFdBQVcsMkJBQTJCLDBCQUEwQixTQUFTLG9CQUFvQjtBQUNuakI7QUFDQTtBQUNBLFFBQVEsNERBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFDLGFBQWEsb0NBQW9DLEVBQUUsNERBQUM7QUFDckU7QUFDQTtBQUNBLDBCQUEwQixRQUFRLDREQUFVLE9BQU8sRUFBRTtBQUNyRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ2dJIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGgsIGcgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtMzk5Njk3ODUuanMnO1xuaW1wb3J0ICdAYXdzLWFtcGxpZnkvY29yZSc7XG5pbXBvcnQgJy4vYXV0aC10eXBlcy03OGRmMzA0ZS5qcyc7XG5pbXBvcnQgJ0Bhd3MtYW1wbGlmeS9hdXRoJztcbmltcG9ydCAnLi9UcmFuc2xhdGlvbnMtMzkyYWNiOWIuanMnO1xuaW1wb3J0ICcuL2NvbnN0YW50cy1kMWFiZTdkZS5qcyc7XG5pbXBvcnQgeyBlIGFzIGhhc1NoYWRvd0RvbSB9IGZyb20gJy4vaGVscGVycy0wMWVjZjVmOS5qcyc7XG52YXIgYW1wbGlmeUJ1dHRvbkNzcyA9IFwiOmhvc3R7LS1iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWFtcGxpZnktcHJpbWFyeS1jb2xvcik7LS1iYWNrZ3JvdW5kLWNvbG9yLWFjdGl2ZTp2YXIoLS1hbXBsaWZ5LXByaW1hcnktc2hhZGUpOy0tYmFja2dyb3VuZC1jb2xvci1kaXNhYmxlOnZhcigtLWFtcGxpZnktcHJpbWFyeS10aW50KTstLWNvbG9yOnZhcigtLWFtcGxpZnktcHJpbWFyeS1jb250cmFzdCk7LS1ib3JkZXItd2lkdGg6MDstLWJvcmRlci1jb2xvcjppbml0aWFsOy0tYm9yZGVyLXN0eWxlOmluaXRpYWw7LS1saW5rLWNvbG9yOnZhcigtLWFtcGxpZnktcHJpbWFyeS1jb2xvcik7LS1saW5rLWhvdmVyOnZhcigtLWFtcGxpZnktcHJpbWFyeS10aW50KTstLWxpbmstYWN0aXZlOnZhcigtLWFtcGxpZnktcHJpbWFyeS1zaGFkZSk7LS10ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7LS1pY29uLWZpbGw6dmFyKC0tYW1wbGlmeS13aGl0ZSk7LS1pY29uLWhlaWdodDoxLjI1cmVtOy0tcGFkZGluZzoxcmVtOy0td2lkdGg6MTAwJTt3aWR0aDp2YXIoLS13aWR0aCk7dGV4dC1hbGlnbjpjZW50ZXJ9QG1lZGlhIChtaW4td2lkdGg6IDY3MnB4KXs6aG9zdHt3aWR0aDppbmhlcml0fX0uYnV0dG9ue3dpZHRoOjEwMCU7bWluLXdpZHRoOjE1M3B4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1ib3R0b206MDtmb250LXNpemU6dmFyKC0tYW1wbGlmeS10ZXh0LXNtKTtmb250LWZhbWlseTp2YXIoLS1hbXBsaWZ5LWZvbnQtZmFtaWx5KTtmb250LXdlaWdodDo2MDA7dGV4dC1hbGlnbjpjZW50ZXI7d2hpdGUtc3BhY2U6bm93cmFwO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTstbXMtdG91Y2gtYWN0aW9uOm1hbmlwdWxhdGlvbjt0b3VjaC1hY3Rpb246bWFuaXB1bGF0aW9uO2N1cnNvcjpwb2ludGVyOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtiYWNrZ3JvdW5kLWltYWdlOm5vbmU7Y29sb3I6dmFyKC0tY29sb3IpO3BhZGRpbmc6dmFyKC0tcGFkZGluZyk7bGV0dGVyLXNwYWNpbmc6MC43NXB4O3RleHQtdHJhbnNmb3JtOnZhcigtLXRleHQtdHJhbnNmb3JtKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJhY2tncm91bmQtY29sb3IpO2JvcmRlci13aWR0aDp2YXIoLS1ib3JkZXItd2lkdGgpO2JvcmRlci1jb2xvcjp2YXIoLS1ib3JkZXItY29sb3IpO2JvcmRlci1zdHlsZTp2YXIoLS1ib3JkZXItc3R5bGUpfS5idXR0b246YWN0aXZle29wYWNpdHk6MTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJhY2tncm91bmQtY29sb3ItYWN0aXZlKX0uYnV0dG9uOmhvdmVye29wYWNpdHk6MC44fS5idXR0b246ZGlzYWJsZWR7b3BhY2l0eTowLjY1O2N1cnNvcjphdXRvO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYmFja2dyb3VuZC1jb2xvci1kaXNhYmxlKX0uaWNvbntiYWNrZ3JvdW5kLWNvbG9yOmluaGVyaXQ7Ym9yZGVyOm5vbmU7Zm9udDppbmhlcml0O2N1cnNvcjpwb2ludGVyO3BhZGRpbmc6dmFyKC0tcGFkZGluZyl9Lmljb24gYW1wbGlmeS1pY29uey0taWNvbi1maWxsLWNvbG9yOnZhcigtLWljb24tZmlsbCk7LS1oZWlnaHQ6dmFyKC0taWNvbi1oZWlnaHQpfS5hbmNob3J7Y29sb3I6dmFyKC0tbGluay1jb2xvcik7YmFja2dyb3VuZC1jb2xvcjppbmhlcml0O3BhZGRpbmc6MDtib3JkZXI6bm9uZTtmb250OmluaGVyaXQ7Y3Vyc29yOnBvaW50ZXJ9LmFuY2hvcjpsaW5re2NvbG9yOnZhcigtLWxpbmstY29sb3IpO3RleHQtZGVjb3JhdGlvbjpub25lfS5hbmNob3I6aG92ZXJ7Y29sb3I6dmFyKC0tbGluay1ob3Zlcik7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX0uYW5jaG9yOmFjdGl2ZXtjb2xvcjp2YXIoLS1saW5rLWFjdGl2ZSk7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX1cIjtcbnZhciBBbXBsaWZ5QnV0dG9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFtcGxpZnlCdXR0b24oaG9zdFJlZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKiogVHlwZSBvZiB0aGUgYnV0dG9uOiAnYnV0dG9uJywgJ3N1Ym1pdCcgb3IgJ3Jlc2V0JyAqL1xuICAgICAgICB0aGlzLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgLyoqIFZhcmlhbnQgb2YgYSBidXR0b246ICdidXR0b24nIHwgJ2FuY2hvcicgKi9cbiAgICAgICAgdGhpcy52YXJpYW50ID0gJ2J1dHRvbic7XG4gICAgICAgIC8qKiBEaXNhYmxlZCBzdGF0ZSBvZiB0aGUgYnV0dG9uICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgaWYgKF90aGlzLmhhbmRsZUJ1dHRvbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlQnV0dG9uQ2xpY2soZXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaGFzU2hhZG93RG9tKF90aGlzLmVsKSAmJiBfdGhpcy50eXBlID09ICdzdWJtaXQnKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBidXR0b24gd2FudHMgdG8gc3BlY2lmaWNhbGx5IHN1Ym1pdCBhIGZvcm1cbiAgICAgICAgICAgICAgICAvLyBjbGltYiB1cCB0aGUgZG9tIHRvIHNlZSBpZiB3ZSdyZSBpbiBhIDxmb3JtPlxuICAgICAgICAgICAgICAgIC8vIGFuZCBpZiBzbywgdGhlbiB1c2UgSlMgdG8gc3VibWl0IGl0XG4gICAgICAgICAgICAgICAgdmFyIGZvcm0gPSBfdGhpcy5lbC5jbG9zZXN0KCdmb3JtJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFmb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGZvciBmb3JtIGluc2lkZSBvZiBmb3JtIHNlY3Rpb24ncyBzaGFkb3cgZG9tXG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JtU2VjdGlvbiA9IF90aGlzLmVsLmNsb3Nlc3QoJ2FtcGxpZnktZm9ybS1zZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0gPSBmb3JtU2VjdGlvbiAmJiBmb3JtU2VjdGlvbi5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZvcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZha2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgZmFrZUJ1dHRvbi50eXBlID0gX3RoaXMudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgZmFrZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGZha2VCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICBmYWtlQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIGZha2VCdXR0b24ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBBbXBsaWZ5QnV0dG9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIChoKFwiYnV0dG9uXCIsIHsgY2xhc3M6IChfYSA9IHt9LFxuICAgICAgICAgICAgICAgIF9hW3RoaXMudmFyaWFudF0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hKSwgdHlwZTogdGhpcy50eXBlLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgb25DbGljazogdGhpcy5oYW5kbGVDbGljayB9LCB0aGlzLnZhcmlhbnQgPT09ICdpY29uJyAmJiBoKFwiYW1wbGlmeS1pY29uXCIsIHsgbmFtZTogdGhpcy5pY29uIH0pLCBoKFwic2xvdFwiLCBudWxsKSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFtcGxpZnlCdXR0b24ucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEFtcGxpZnlCdXR0b247XG59KCkpO1xuQW1wbGlmeUJ1dHRvbi5zdHlsZSA9IGFtcGxpZnlCdXR0b25Dc3M7XG52YXIgYW1wbGlmeUxvYWRpbmdTcGlubmVyQ3NzID0gXCI6aG9zdHstLXNwaW5uZXItY2lyY2xlLWZpbGw6dmFyKC0tYW1wbGlmeS1zbW9rZS13aGl0ZSk7LS1zcGlubmVyLWJhci1maWxsOnZhcigtLWFtcGxpZnktcHJpbWFyeS1jb2xvcik7LS13aWR0aDowLjg3NXJlbTstLWhlaWdodDowLjg3NXJlbX0ubG9hZGluZy1zcGlubmVyIHN2Z3std2Via2l0LWFuaW1hdGlvbjpsb2FkaW5nLXNwaW5uZXIgMXMgbGluZWFyIGluZmluaXRlO2FuaW1hdGlvbjpsb2FkaW5nLXNwaW5uZXIgMXMgbGluZWFyIGluZmluaXRlO3dpZHRoOnZhcigtLXdpZHRoKTtoZWlnaHQ6dmFyKC0taGVpZ2h0KX0ubG9hZGluZy1zcGlubmVyIHN2ZyAjc3Bpbm5lci1jaXJjbGV7ZmlsbDp2YXIoLS1zcGlubmVyLWNpcmNsZS1maWxsKX0ubG9hZGluZy1zcGlubmVyIHN2ZyAjc3Bpbm5lci1iYXJ7ZmlsbDp2YXIoLS1zcGlubmVyLWJhci1maWxsKX1ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZGluZy1zcGlubmVye2Zyb217LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIGxvYWRpbmctc3Bpbm5lcntmcm9tey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19XCI7XG52YXIgQW1wbGlmeUxvYWRpbmdTcGlubmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFtcGxpZnlMb2FkaW5nU3Bpbm5lcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgfVxuICAgIEFtcGxpZnlMb2FkaW5nU3Bpbm5lci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gaChcImFtcGxpZnktaWNvblwiLCB7IGNsYXNzOiBcImxvYWRpbmctc3Bpbm5lclwiLCBuYW1lOiBcImxvYWRpbmdcIiB9KTtcbiAgICB9O1xuICAgIHJldHVybiBBbXBsaWZ5TG9hZGluZ1NwaW5uZXI7XG59KCkpO1xuQW1wbGlmeUxvYWRpbmdTcGlubmVyLnN0eWxlID0gYW1wbGlmeUxvYWRpbmdTcGlubmVyQ3NzO1xudmFyIGFtcGxpZnlTZWN0aW9uQ3NzID0gXCI6aG9zdHstLWZvbnQtZmFtaWx5OnZhcigtLWFtcGxpZnktZm9udC1mYW1pbHkpOy0tYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1hbXBsaWZ5LWJhY2tncm91bmQtY29sb3IpfS5zZWN0aW9ue3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbi1ib3R0b206dmFyKC0tbWFyZ2luLWJvdHRvbSk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtwYWRkaW5nOnZhcigtLXBhZGRpbmcpO3RleHQtYWxpZ246bGVmdDtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpOy13ZWJraXQtYm94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtmb250LWZhbWlseTp2YXIoLS1mb250LWZhbWlseSk7d2lkdGg6MTAwJTttaW4td2lkdGg6dmFyKC0tbWluLXdpZHRoKX1AbWVkaWEgKG1pbi13aWR0aDogNjcycHgpey5zZWN0aW9ue3dpZHRoOnZhcigtLXdpZHRoKX19XCI7XG52YXIgQW1wbGlmeVNlY3Rpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQW1wbGlmeVNlY3Rpb24oaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKiogRXF1aXZhbGVudCB0byBodG1sIHNlY3Rpb24gcm9sZSAqL1xuICAgICAgICB0aGlzLnJvbGUgPSAnYXBwbGljYXRpb24nO1xuICAgIH1cbiAgICBBbXBsaWZ5U2VjdGlvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKGgoXCJzZWN0aW9uXCIsIHsgY2xhc3M6IFwic2VjdGlvblwiLCByb2xlOiB0aGlzLnJvbGUgfSwgaChcInNsb3RcIiwgbnVsbCkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBbXBsaWZ5U2VjdGlvbi5wcm90b3R5cGUsIFwiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQW1wbGlmeVNlY3Rpb247XG59KCkpO1xuQW1wbGlmeVNlY3Rpb24uc3R5bGUgPSBhbXBsaWZ5U2VjdGlvbkNzcztcbmV4cG9ydCB7IEFtcGxpZnlCdXR0b24gYXMgYW1wbGlmeV9idXR0b24sIEFtcGxpZnlMb2FkaW5nU3Bpbm5lciBhcyBhbXBsaWZ5X2xvYWRpbmdfc3Bpbm5lciwgQW1wbGlmeVNlY3Rpb24gYXMgYW1wbGlmeV9zZWN0aW9uIH07XG4iXSwic291cmNlUm9vdCI6IiJ9