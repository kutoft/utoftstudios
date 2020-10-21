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
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container */ "./components/container.js");
/* harmony import */ var _filter_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter-button */ "./components/filter-button.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\kevin\\github\\utoftstudios\\components\\filter.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Filter = function Filter(_ref) {
  _s();

  var category = _ref.category,
      handleCategoryChange = _ref.handleCategoryChange;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([{
    id: "develop-code",
    name: "Develop Code"
  }, {
    id: "enable-experiences",
    name: "Enable Experiences"
  }, {
    id: "build-brands",
    name: "Build Brands"
  }, {
    id: "design-products",
    name: "Design Products"
  }, {
    id: "create-art",
    name: "Create Art"
  }, {
    id: "cook-food",
    name: "Cook Food"
  }, {
    id: "write-articles",
    name: "write-articles"
  }, {
    id: "make-music",
    name: "Make Music"
  }]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      categories = _React$useState2[0],
      setCategories = _React$useState2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-450182402" + " " + "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, categories.map(function (c) {
    return __jsx(_filter_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: c.id,
      category: c,
      isActive: c.id === category,
      handleClick: handleCategoryChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    });
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "450182402",
    __self: _this
  }, ".wrap.jsx-450182402{padding-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xca2V2aW5cXGdpdGh1YlxcdXRvZnRzdHVkaW9zXFxjb21wb25lbnRzXFxmaWx0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURTLEFBRzhCLGlCQUNuQiIsImZpbGUiOiJDOlxcVXNlcnNcXGtldmluXFxnaXRodWJcXHV0b2Z0c3R1ZGlvc1xcY29tcG9uZW50c1xcZmlsdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5cbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vY29udGFpbmVyXCJcbmltcG9ydCBGaWx0ZXJCdXR0b24gZnJvbSBcIi4vZmlsdGVyLWJ1dHRvblwiXG5cbmNvbnN0IEZpbHRlciA9ICh7IGNhdGVnb3J5LCBoYW5kbGVDYXRlZ29yeUNoYW5nZSB9KSA9PiB7XG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IFJlYWN0LnVzZVN0YXRlKFtcbiAgICB7XG4gICAgICBpZDogXCJkZXZlbG9wLWNvZGVcIixcbiAgICAgIG5hbWU6IFwiRGV2ZWxvcCBDb2RlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcImVuYWJsZS1leHBlcmllbmNlc1wiLFxuICAgICAgbmFtZTogXCJFbmFibGUgRXhwZXJpZW5jZXNcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiYnVpbGQtYnJhbmRzXCIsXG4gICAgICBuYW1lOiBcIkJ1aWxkIEJyYW5kc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogXCJkZXNpZ24tcHJvZHVjdHNcIixcbiAgICAgIG5hbWU6IFwiRGVzaWduIFByb2R1Y3RzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcImNyZWF0ZS1hcnRcIixcbiAgICAgIG5hbWU6IFwiQ3JlYXRlIEFydFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogXCJjb29rLWZvb2RcIixcbiAgICAgIG5hbWU6IFwiQ29vayBGb29kXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcIndyaXRlLWFydGljbGVzXCIsXG4gICAgICBuYW1lOiBcIndyaXRlLWFydGljbGVzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcIm1ha2UtbXVzaWNcIixcbiAgICAgIG5hbWU6IFwiTWFrZSBNdXNpY1wiXG4gICAgfVxuICBdKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBcIj5cbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoYyA9PiAoXG4gICAgICAgICAgICA8RmlsdGVyQnV0dG9uIGtleT17Yy5pZH0gY2F0ZWdvcnk9e2N9IGlzQWN0aXZlPXtjLmlkID09PSBjYXRlZ29yeX0gaGFuZGxlQ2xpY2s9e2hhbmRsZUNhdGVnb3J5Q2hhbmdlfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAud3JhcCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbkZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIGNhdGVnb3J5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoYW5kbGVDYXRlZ29yeUNoYW5nZTogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\kevin\\\\github\\\\utoftstudios\\\\components\\\\filter.js */"));
};

_s(Filter, "UGY8BDWacPPQBh83hgngCLZPYmI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9maWx0ZXIuanMiXSwibmFtZXMiOlsiRmlsdGVyIiwiY2F0ZWdvcnkiLCJoYW5kbGVDYXRlZ29yeUNoYW5nZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJpZCIsIm5hbWUiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsIm1hcCIsImMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBd0M7QUFBQTs7QUFBQSxNQUFyQ0MsUUFBcUMsUUFBckNBLFFBQXFDO0FBQUEsTUFBM0JDLG9CQUEyQixRQUEzQkEsb0JBQTJCOztBQUFBLHdCQUNqQkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQ2pEO0FBQ0VDLE1BQUUsRUFBRSxjQUROO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBRGlELEVBS2pEO0FBQ0VELE1BQUUsRUFBRSxvQkFETjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQUxpRCxFQVNqRDtBQUNFRCxNQUFFLEVBQUUsY0FETjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQVRpRCxFQWFqRDtBQUNFRCxNQUFFLEVBQUUsaUJBRE47QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FiaUQsRUFpQmpEO0FBQ0VELE1BQUUsRUFBRSxZQUROO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBakJpRCxFQXFCakQ7QUFDRUQsTUFBRSxFQUFFLFdBRE47QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FyQmlELEVBeUJqRDtBQUNFRCxNQUFFLEVBQUUsZ0JBRE47QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0F6QmlELEVBNkJqRDtBQUNFRCxNQUFFLEVBQUUsWUFETjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQTdCaUQsQ0FBZixDQURpQjtBQUFBO0FBQUEsTUFDOUNDLFVBRDhDO0FBQUEsTUFDbENDLGFBRGtDOztBQW1DckQsU0FDRSxtRUFDRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHVDQUFlLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxVQUFVLENBQUNFLEdBQVgsQ0FBZSxVQUFBQyxDQUFDO0FBQUEsV0FDZixNQUFDLHNEQUFEO0FBQWMsU0FBRyxFQUFFQSxDQUFDLENBQUNMLEVBQXJCO0FBQXlCLGNBQVEsRUFBRUssQ0FBbkM7QUFBc0MsY0FBUSxFQUFFQSxDQUFDLENBQUNMLEVBQUYsS0FBU0osUUFBekQ7QUFBbUUsaUJBQVcsRUFBRUMsb0JBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEZTtBQUFBLEdBQWhCLENBREgsQ0FERixDQURGO0FBQUE7QUFBQTtBQUFBLHcxRUFERjtBQWtCRCxDQXJERDs7R0FBTUYsTTs7S0FBQUEsTTtBQXVETkEsTUFBTSxDQUFDVyxTQUFQLEdBQW1CO0FBQ2pCVixVQUFRLEVBQUVXLGlEQUFTLENBQUNDLE1BREg7QUFFakJYLHNCQUFvQixFQUFFVSxpREFBUyxDQUFDRTtBQUZmLENBQW5CO0FBS2VkLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU3YmZmZTc1YWQyYThhMTE5NWU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcblxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9jb250YWluZXJcIlxuaW1wb3J0IEZpbHRlckJ1dHRvbiBmcm9tIFwiLi9maWx0ZXItYnV0dG9uXCJcblxuY29uc3QgRmlsdGVyID0gKHsgY2F0ZWdvcnksIGhhbmRsZUNhdGVnb3J5Q2hhbmdlIH0pID0+IHtcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gUmVhY3QudXNlU3RhdGUoW1xuICAgIHtcbiAgICAgIGlkOiBcImRldmVsb3AtY29kZVwiLFxuICAgICAgbmFtZTogXCJEZXZlbG9wIENvZGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiZW5hYmxlLWV4cGVyaWVuY2VzXCIsXG4gICAgICBuYW1lOiBcIkVuYWJsZSBFeHBlcmllbmNlc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogXCJidWlsZC1icmFuZHNcIixcbiAgICAgIG5hbWU6IFwiQnVpbGQgQnJhbmRzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcImRlc2lnbi1wcm9kdWN0c1wiLFxuICAgICAgbmFtZTogXCJEZXNpZ24gUHJvZHVjdHNcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiY3JlYXRlLWFydFwiLFxuICAgICAgbmFtZTogXCJDcmVhdGUgQXJ0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcImNvb2stZm9vZFwiLFxuICAgICAgbmFtZTogXCJDb29rIEZvb2RcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwid3JpdGUtYXJ0aWNsZXNcIixcbiAgICAgIG5hbWU6IFwid3JpdGUtYXJ0aWNsZXNcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwibWFrZS1tdXNpY1wiLFxuICAgICAgbmFtZTogXCJNYWtlIE11c2ljXCJcbiAgICB9XG4gIF0pXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcFwiPlxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcChjID0+IChcbiAgICAgICAgICAgIDxGaWx0ZXJCdXR0b24ga2V5PXtjLmlkfSBjYXRlZ29yeT17Y30gaXNBY3RpdmU9e2MuaWQgPT09IGNhdGVnb3J5fSBoYW5kbGVDbGljaz17aGFuZGxlQ2F0ZWdvcnlDaGFuZ2V9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC53cmFwIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgY2F0ZWdvcnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhhbmRsZUNhdGVnb3J5Q2hhbmdlOiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=