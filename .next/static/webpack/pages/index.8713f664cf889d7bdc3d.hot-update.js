webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/title */ "./components/title.js");
/* harmony import */ var _components_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/filter */ "./components/filter.js");
/* harmony import */ var _components_thing_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/thing-list */ "./components/thing-list.js");
/* harmony import */ var _components_quote__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/quote */ "./components/quote.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/main */ "./components/main.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\kevin\\github\\utoftstudios\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











var Home = function Home() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  console.log(router.query);
  var categoryAll = "Do Things";
  var quoteDefault = "Always The Next One";

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      category = _React$useState2[0],
      setCateogry = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(router.query.category),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      title = _React$useState4[0],
      setTitle = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(quoteDefault),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      quote = _React$useState6[0],
      setQuote = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState7, 2),
      data = _React$useState8[0],
      setData = _React$useState8[1];

  var handleCategoryChange = function handleCategoryChange(cat) {
    if (cat !== category) {
      setCateogry(cat);
      router.push({
        pathname: '/',
        query: {
          category: cat.replace(/\s/g, '-')
        }
      })["catch"](function (error) {
        console.log(error);
      });
    } else {
      setCateogry(categoryAll);
      router.push({
        pathname: '/'
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }; // React.useEffect(() => {
  //   const getData = await fetch(`/test/${category}`).catch(error => {
  //     console.log(error)
  //   })
  //   if(getData) {
  //     setData(getData)
  //   }
  // }, [category])


  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (router.query.category) {
      setTitle(router.query.category.replace('-', ' '));
    }
  }, [router.query.category]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3440151529" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("title", {
    className: "jsx-3440151529",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, "Do Things | Utoft Studios"), __jsx("meta", {
    property: "og:title",
    content: "Do Things | Utoft Studios",
    className: "jsx-3440151529",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  })), __jsx(_components_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), __jsx(_components_main__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(_components_title__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "I ".concat(title),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }), __jsx(_components_filter__WEBPACK_IMPORTED_MODULE_7__["default"], {
    category: category,
    handleCategoryChange: handleCategoryChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }), __jsx(_components_thing_list__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }), __jsx(_components_quote__WEBPACK_IMPORTED_MODULE_9__["default"], {
    quote: quote,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  })), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3440151529",
    __self: _this
  }, ".container.jsx-3440151529{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:auto;min-height:100vh;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xca2V2aW5cXGdpdGh1YlxcdXRvZnRzdHVkaW9zXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEVTLEFBR3dCLFdBQ0UsMEVBQ0MsY0FDRyxpQkFDRSw2RkFDRyw4RUFDSyx5R0FDN0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxrZXZpblxcZ2l0aHViXFx1dG9mdHN0dWRpb3NcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiIFxuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IFRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvdGl0bGUnXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZmlsdGVyJ1xuaW1wb3J0IFRoaW5nTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL3RoaW5nLWxpc3QnXG5pbXBvcnQgUXVvdGUgZnJvbSAnLi4vY29tcG9uZW50cy9xdW90ZSdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi4vY29tcG9uZW50cy9tYWluXCJcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkpXG5cbiAgY29uc3QgY2F0ZWdvcnlBbGwgPSBcIkRvIFRoaW5nc1wiXG4gIGNvbnN0IHF1b3RlRGVmYXVsdCA9IFwiQWx3YXlzIFRoZSBOZXh0IE9uZVwiXG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZW9ncnldID0gUmVhY3QudXNlU3RhdGUobnVsbCkgXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gUmVhY3QudXNlU3RhdGUocm91dGVyLnF1ZXJ5LmNhdGVnb3J5KVxuICBjb25zdCBbcXVvdGUsIHNldFF1b3RlXSA9IFJlYWN0LnVzZVN0YXRlKHF1b3RlRGVmYXVsdClcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGUobnVsbClcblxuICBjb25zdCBoYW5kbGVDYXRlZ29yeUNoYW5nZSA9IChjYXQpID0+IHtcbiAgICBpZihjYXQgIT09IGNhdGVnb3J5KSB7XG4gICAgICBzZXRDYXRlb2dyeShjYXQpXG4gICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiAnLycsXG4gICAgICAgIHF1ZXJ5OiB7IGNhdGVnb3J5OiBjYXQucmVwbGFjZSgvXFxzL2csICctJykgfSxcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDYXRlb2dyeShjYXRlZ29yeUFsbClcbiAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgcGF0aG5hbWU6ICcvJ1xuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zdCBnZXREYXRhID0gYXdhaXQgZmV0Y2goYC90ZXN0LyR7Y2F0ZWdvcnl9YCkuY2F0Y2goZXJyb3IgPT4ge1xuICAvLyAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gIC8vICAgfSlcbiAgICBcbiAgLy8gICBpZihnZXREYXRhKSB7XG4gIC8vICAgICBzZXREYXRhKGdldERhdGEpXG4gIC8vICAgfVxuXG4gIC8vIH0sIFtjYXRlZ29yeV0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihyb3V0ZXIucXVlcnkuY2F0ZWdvcnkpIHtcbiAgICAgIHNldFRpdGxlKHJvdXRlci5xdWVyeS5jYXRlZ29yeS5yZXBsYWNlKCctJywgJyAnKSlcbiAgICB9XG4gIH0sIFtyb3V0ZXIucXVlcnkuY2F0ZWdvcnldKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkRvIFRoaW5ncyB8IFV0b2Z0IFN0dWRpb3M8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiRG8gVGhpbmdzIHwgVXRvZnQgU3R1ZGlvc1wiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cbiAgICAgICAgPE1haW4+XG4gICAgICAgICAgPFRpdGxlIHRpdGxlPXtgSSAke3RpdGxlfWB9PjwvVGl0bGU+XG4gICAgICAgICAgPEZpbHRlciBjYXRlZ29yeT17Y2F0ZWdvcnl9IGhhbmRsZUNhdGVnb3J5Q2hhbmdlPXtoYW5kbGVDYXRlZ29yeUNoYW5nZX0+PC9GaWx0ZXI+XG4gICAgICAgICAgPFRoaW5nTGlzdCBkYXRhPXtkYXRhfT48L1RoaW5nTGlzdD5cbiAgICAgICAgICA8UXVvdGUgcXVvdGU9e3F1b3RlfT48L1F1b3RlPlxuICAgICAgICA8L01haW4+XG4gICAgICAgIDxGb290ZXI+PC9Gb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\kevin\\\\github\\\\utoftstudios\\\\pages\\\\index.js */"));
};

_s(Home, "Ie5rwWjDTSd2TW5PL38R+0MQQQY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsImNhdGVnb3J5QWxsIiwicXVvdGVEZWZhdWx0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImNhdGVnb3J5Iiwic2V0Q2F0ZW9ncnkiLCJ0aXRsZSIsInNldFRpdGxlIiwicXVvdGUiLCJzZXRRdW90ZSIsImRhdGEiLCJzZXREYXRhIiwiaGFuZGxlQ2F0ZWdvcnlDaGFuZ2UiLCJjYXQiLCJwdXNoIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiZXJyb3IiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFNLENBQUNJLEtBQW5CO0FBRUEsTUFBTUMsV0FBVyxHQUFHLFdBQXBCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLHFCQUFyQjs7QUFOaUIsd0JBT2VDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJQUFmLENBUGY7QUFBQTtBQUFBLE1BT1ZDLFFBUFU7QUFBQSxNQU9BQyxXQVBBOztBQUFBLHlCQVFTSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWVSLE1BQU0sQ0FBQ0ksS0FBUCxDQUFhSyxRQUE1QixDQVJUO0FBQUE7QUFBQSxNQVFWRSxLQVJVO0FBQUEsTUFRSEMsUUFSRzs7QUFBQSx5QkFTU0wsNENBQUssQ0FBQ0MsUUFBTixDQUFlRixZQUFmLENBVFQ7QUFBQTtBQUFBLE1BU1ZPLEtBVFU7QUFBQSxNQVNIQyxRQVRHOztBQUFBLHlCQVVPUCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBZixDQVZQO0FBQUE7QUFBQSxNQVVWTyxJQVZVO0FBQUEsTUFVSkMsT0FWSTs7QUFZakIsTUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxHQUFELEVBQVM7QUFDcEMsUUFBR0EsR0FBRyxLQUFLVCxRQUFYLEVBQXFCO0FBQ25CQyxpQkFBVyxDQUFDUSxHQUFELENBQVg7QUFDQWxCLFlBQU0sQ0FBQ21CLElBQVAsQ0FBWTtBQUNWQyxnQkFBUSxFQUFFLEdBREE7QUFFVmhCLGFBQUssRUFBRTtBQUFFSyxrQkFBUSxFQUFFUyxHQUFHLENBQUNHLE9BQUosQ0FBWSxLQUFaLEVBQW1CLEdBQW5CO0FBQVo7QUFGRyxPQUFaLFdBR1MsVUFBQUMsS0FBSyxFQUFJO0FBQ2hCcEIsZUFBTyxDQUFDQyxHQUFSLENBQVltQixLQUFaO0FBQ0QsT0FMRDtBQU1ELEtBUkQsTUFRTztBQUNMWixpQkFBVyxDQUFDTCxXQUFELENBQVg7QUFDQUwsWUFBTSxDQUFDbUIsSUFBUCxDQUFZO0FBQ1ZDLGdCQUFRLEVBQUU7QUFEQSxPQUFaLFdBRVMsVUFBQUUsS0FBSyxFQUFJO0FBQ2hCcEIsZUFBTyxDQUFDQyxHQUFSLENBQVltQixLQUFaO0FBQ0QsT0FKRDtBQUtEO0FBQ0YsR0FqQkQsQ0FaaUIsQ0ErQmpCO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUVBZiw4Q0FBSyxDQUFDZ0IsU0FBTixDQUFnQixZQUFNO0FBQ3BCLFFBQUd2QixNQUFNLENBQUNJLEtBQVAsQ0FBYUssUUFBaEIsRUFBMEI7QUFDeEJHLGNBQVEsQ0FBQ1osTUFBTSxDQUFDSSxLQUFQLENBQWFLLFFBQWIsQ0FBc0JZLE9BQXRCLENBQThCLEdBQTlCLEVBQW1DLEdBQW5DLENBQUQsQ0FBUjtBQUNEO0FBQ0YsR0FKRCxFQUlHLENBQUNyQixNQUFNLENBQUNJLEtBQVAsQ0FBYUssUUFBZCxDQUpIO0FBT0EsU0FDRSxtRUFDRTtBQUFBLHdDQUFlLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERixFQUVFO0FBQU0sWUFBUSxFQUFDLFVBQWY7QUFBMEIsV0FBTyxFQUFDLDJCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQU8sU0FBSyxjQUFPRSxLQUFQLENBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQywwREFBRDtBQUFRLFlBQVEsRUFBRUYsUUFBbEI7QUFBNEIsd0JBQW9CLEVBQUVRLG9CQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLDhEQUFEO0FBQVcsUUFBSSxFQUFFRixJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRSxNQUFDLHlEQUFEO0FBQU8sU0FBSyxFQUFFRixLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQU5GLEVBWUUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsQ0FERjtBQUFBO0FBQUE7QUFBQSx1dElBREY7QUErQkQsQ0FoRkQ7O0dBQU1kLEk7VUFDV0UscUQ7OztLQURYRixJO0FBa0ZTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NzEzZjY2NGNmODg5ZDdiZGMzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCIgXG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy90aXRsZSdcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9maWx0ZXInXG5pbXBvcnQgVGhpbmdMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvdGhpbmctbGlzdCdcbmltcG9ydCBRdW90ZSBmcm9tICcuLi9jb21wb25lbnRzL3F1b3RlJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcbmltcG9ydCBNYWluIGZyb20gXCIuLi9jb21wb25lbnRzL21haW5cIlxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeSlcblxuICBjb25zdCBjYXRlZ29yeUFsbCA9IFwiRG8gVGhpbmdzXCJcbiAgY29uc3QgcXVvdGVEZWZhdWx0ID0gXCJBbHdheXMgVGhlIE5leHQgT25lXCJcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlb2dyeV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKSBcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSBSZWFjdC51c2VTdGF0ZShyb3V0ZXIucXVlcnkuY2F0ZWdvcnkpXG4gIGNvbnN0IFtxdW90ZSwgc2V0UXVvdGVdID0gUmVhY3QudXNlU3RhdGUocXVvdGVEZWZhdWx0KVxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IGhhbmRsZUNhdGVnb3J5Q2hhbmdlID0gKGNhdCkgPT4ge1xuICAgIGlmKGNhdCAhPT0gY2F0ZWdvcnkpIHtcbiAgICAgIHNldENhdGVvZ3J5KGNhdClcbiAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgcGF0aG5hbWU6ICcvJyxcbiAgICAgICAgcXVlcnk6IHsgY2F0ZWdvcnk6IGNhdC5yZXBsYWNlKC9cXHMvZywgJy0nKSB9LFxuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldENhdGVvZ3J5KGNhdGVnb3J5QWxsKVxuICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICBwYXRobmFtZTogJy8nXG4gICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnN0IGdldERhdGEgPSBhd2FpdCBmZXRjaChgL3Rlc3QvJHtjYXRlZ29yeX1gKS5jYXRjaChlcnJvciA9PiB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgLy8gICB9KVxuICAgIFxuICAvLyAgIGlmKGdldERhdGEpIHtcbiAgLy8gICAgIHNldERhdGEoZ2V0RGF0YSlcbiAgLy8gICB9XG5cbiAgLy8gfSwgW2NhdGVnb3J5XSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKHJvdXRlci5xdWVyeS5jYXRlZ29yeSkge1xuICAgICAgc2V0VGl0bGUocm91dGVyLnF1ZXJ5LmNhdGVnb3J5LnJlcGxhY2UoJy0nLCAnICcpKVxuICAgIH1cbiAgfSwgW3JvdXRlci5xdWVyeS5jYXRlZ29yeV0pXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+RG8gVGhpbmdzIHwgVXRvZnQgU3R1ZGlvczwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJEbyBUaGluZ3MgfCBVdG9mdCBTdHVkaW9zXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxuICAgICAgICA8TWFpbj5cbiAgICAgICAgICA8VGl0bGUgdGl0bGU9e2BJICR7dGl0bGV9YH0+PC9UaXRsZT5cbiAgICAgICAgICA8RmlsdGVyIGNhdGVnb3J5PXtjYXRlZ29yeX0gaGFuZGxlQ2F0ZWdvcnlDaGFuZ2U9e2hhbmRsZUNhdGVnb3J5Q2hhbmdlfT48L0ZpbHRlcj5cbiAgICAgICAgICA8VGhpbmdMaXN0IGRhdGE9e2RhdGF9PjwvVGhpbmdMaXN0PlxuICAgICAgICAgIDxRdW90ZSBxdW90ZT17cXVvdGV9PjwvUXVvdGU+XG4gICAgICAgIDwvTWFpbj5cbiAgICAgICAgPEZvb3Rlcj48L0Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=