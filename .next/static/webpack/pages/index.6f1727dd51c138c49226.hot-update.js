webpackHotUpdate_N_E("pages/index",{

/***/ "./components/filter.js":
/*!******************************!*\
  !*** ./components/filter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _filter_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-button */ "./components/filter-button.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\kevin\\github\\utoftstudios\\components\\filter.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Filter = function Filter(_ref) {
  _s();

  var category = _ref.category,
      handleCategoryChange = _ref.handleCategoryChange;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(["Develop Code", "Enable Experiences", "Build Brands", "Design Products", "Create Art", "Cook Food", "Write Articles", "Make Music"]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      categories = _React$useState2[0],
      setCategories = _React$useState2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2516166922" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, categories.map(function (c, index) {
    return __jsx(_filter_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: c,
      isActive: c.toLowerCase() === category,
      handleClick: handleCategoryChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2516166922",
    __self: _this
  }, ".container.jsx-2516166922{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:auto;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-top:10px;border-width:0;padding-left:20px;padding-right:20px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;border-bottom-width:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xca2V2aW5cXGdpdGh1YlxcdXRvZnRzdHVkaW9zXFxjb21wb25lbnRzXFxmaWx0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJTLEFBR3dCLFdBQ0UsMEVBQ0MsY0FDQyx5REFDQyxnQkFDRyw2RkFDRixpQkFDRixlQUNHLGtCQUNDLG1CQUNBLHFFQUNRLHlHQUNMLHNCQUN4QiIsImZpbGUiOiJDOlxcVXNlcnNcXGtldmluXFxnaXRodWJcXHV0b2Z0c3R1ZGlvc1xcY29tcG9uZW50c1xcZmlsdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgRmlsdGVyQnV0dG9uIGZyb20gXCIuL2ZpbHRlci1idXR0b25cIlxuXG5jb25zdCBGaWx0ZXIgPSAoeyBjYXRlZ29yeSwgaGFuZGxlQ2F0ZWdvcnlDaGFuZ2UgfSkgPT4ge1xuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSBSZWFjdC51c2VTdGF0ZShbXG4gICAgXCJEZXZlbG9wIENvZGVcIixcbiAgICBcIkVuYWJsZSBFeHBlcmllbmNlc1wiLFxuICAgIFwiQnVpbGQgQnJhbmRzXCIsXG4gICAgXCJEZXNpZ24gUHJvZHVjdHNcIixcbiAgICBcIkNyZWF0ZSBBcnRcIixcbiAgICBcIkNvb2sgRm9vZFwiLFxuICAgIFwiV3JpdGUgQXJ0aWNsZXNcIixcbiAgICBcIk1ha2UgTXVzaWNcIlxuICBdKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGMsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEZpbHRlckJ1dHRvbiB0aXRsZT17Y30gaXNBY3RpdmU9e2MudG9Mb3dlckNhc2UoKSA9PT0gY2F0ZWdvcnl9IGhhbmRsZUNsaWNrPXtoYW5kbGVDYXRlZ29yeUNoYW5nZX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5GaWx0ZXIucHJvcFR5cGVzID0ge1xuICBjYXRlZ29yeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGFuZGxlQ2F0ZWdvcnlDaGFuZ2U6IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\kevin\\\\github\\\\utoftstudios\\\\components\\\\filter.js */"));
};

_s(Filter, "5y3RRs4dtk8OFPqiKt5PGfbpR5g=");

_c = Filter;
Filter.propTypes = {
  category: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  handleCategoryChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Filter);

var _c;

$RefreshReg$(_c, "Filter");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9maWx0ZXIuanMiXSwibmFtZXMiOlsiRmlsdGVyIiwiY2F0ZWdvcnkiLCJoYW5kbGVDYXRlZ29yeUNoYW5nZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsIm1hcCIsImMiLCJpbmRleCIsInRvTG93ZXJDYXNlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXdDO0FBQUE7O0FBQUEsTUFBckNDLFFBQXFDLFFBQXJDQSxRQUFxQztBQUFBLE1BQTNCQyxvQkFBMkIsUUFBM0JBLG9CQUEyQjs7QUFBQSx3QkFDakJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUNqRCxjQURpRCxFQUVqRCxvQkFGaUQsRUFHakQsY0FIaUQsRUFJakQsaUJBSmlELEVBS2pELFlBTGlELEVBTWpELFdBTmlELEVBT2pELGdCQVBpRCxFQVFqRCxZQVJpRCxDQUFmLENBRGlCO0FBQUE7QUFBQSxNQUM5Q0MsVUFEOEM7QUFBQSxNQUNsQ0MsYUFEa0M7O0FBV3JELFNBQ0UsbUVBQ0U7QUFBQSx3Q0FBZSxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsVUFBVSxDQUFDRSxHQUFYLENBQWUsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKO0FBQUEsV0FDZCxNQUFDLHNEQUFEO0FBQWMsV0FBSyxFQUFFRCxDQUFyQjtBQUF3QixjQUFRLEVBQUVBLENBQUMsQ0FBQ0UsV0FBRixPQUFvQlQsUUFBdEQ7QUFBZ0UsaUJBQVcsRUFBRUMsb0JBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEYztBQUFBLEdBQWYsQ0FESCxDQURGO0FBQUE7QUFBQTtBQUFBLHV6RkFERjtBQTRCRCxDQXZDRDs7R0FBTUYsTTs7S0FBQUEsTTtBQXlDTkEsTUFBTSxDQUFDVyxTQUFQLEdBQW1CO0FBQ2pCVixVQUFRLEVBQUVXLGlEQUFTLENBQUNDLE1BREg7QUFFakJYLHNCQUFvQixFQUFFVSxpREFBUyxDQUFDRTtBQUZmLENBQW5CO0FBS2VkLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZmMTcyN2RkNTFjMTM4YzQ5MjI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBGaWx0ZXJCdXR0b24gZnJvbSBcIi4vZmlsdGVyLWJ1dHRvblwiXG5cbmNvbnN0IEZpbHRlciA9ICh7IGNhdGVnb3J5LCBoYW5kbGVDYXRlZ29yeUNoYW5nZSB9KSA9PiB7XG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IFJlYWN0LnVzZVN0YXRlKFtcbiAgICBcIkRldmVsb3AgQ29kZVwiLFxuICAgIFwiRW5hYmxlIEV4cGVyaWVuY2VzXCIsXG4gICAgXCJCdWlsZCBCcmFuZHNcIixcbiAgICBcIkRlc2lnbiBQcm9kdWN0c1wiLFxuICAgIFwiQ3JlYXRlIEFydFwiLFxuICAgIFwiQ29vayBGb29kXCIsXG4gICAgXCJXcml0ZSBBcnRpY2xlc1wiLFxuICAgIFwiTWFrZSBNdXNpY1wiXG4gIF0pXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoYywgaW5kZXgpID0+IChcbiAgICAgICAgICA8RmlsdGVyQnV0dG9uIHRpdGxlPXtjfSBpc0FjdGl2ZT17Yy50b0xvd2VyQ2FzZSgpID09PSBjYXRlZ29yeX0gaGFuZGxlQ2xpY2s9e2hhbmRsZUNhdGVnb3J5Q2hhbmdlfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbkZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIGNhdGVnb3J5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoYW5kbGVDYXRlZ29yeUNoYW5nZTogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyXG4iXSwic291cmNlUm9vdCI6IiJ9