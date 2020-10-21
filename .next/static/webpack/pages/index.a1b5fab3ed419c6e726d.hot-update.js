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
  var categoryAll = "Do Things";
  var quoteDefault = "Always The Next One";

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      category = _React$useState2[0],
      setCateogry = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(categoryAll),
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
          category: cat.replace(/\s/g, '-').toLowerCase()
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
      var newCategory = router.query.category.replace('-', ' ');
      setTitle(newCategory);
      setCateogry(newCategory);
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
  }, ".container.jsx-3440151529{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:auto;min-height:100vh;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xca2V2aW5cXGdpdGh1YlxcdXRvZnRzdHVkaW9zXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEVTLEFBR3dCLFdBQ0UsMEVBQ0MsY0FDRyxpQkFDRSw2RkFDRyw4RUFDSyx5R0FDN0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxrZXZpblxcZ2l0aHViXFx1dG9mdHN0dWRpb3NcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiIFxuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IFRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvdGl0bGUnXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZmlsdGVyJ1xuaW1wb3J0IFRoaW5nTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL3RoaW5nLWxpc3QnXG5pbXBvcnQgUXVvdGUgZnJvbSAnLi4vY29tcG9uZW50cy9xdW90ZSdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi4vY29tcG9uZW50cy9tYWluXCJcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCBjYXRlZ29yeUFsbCA9IFwiRG8gVGhpbmdzXCJcbiAgY29uc3QgcXVvdGVEZWZhdWx0ID0gXCJBbHdheXMgVGhlIE5leHQgT25lXCJcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlb2dyeV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKSBcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSBSZWFjdC51c2VTdGF0ZShjYXRlZ29yeUFsbClcbiAgY29uc3QgW3F1b3RlLCBzZXRRdW90ZV0gPSBSZWFjdC51c2VTdGF0ZShxdW90ZURlZmF1bHQpXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXG5cbiAgY29uc3QgaGFuZGxlQ2F0ZWdvcnlDaGFuZ2UgPSAoY2F0KSA9PiB7XG4gICAgaWYoY2F0ICE9PSBjYXRlZ29yeSkge1xuICAgICAgc2V0Q2F0ZW9ncnkoY2F0KVxuICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICBwYXRobmFtZTogJy8nLFxuICAgICAgICBxdWVyeTogeyBjYXRlZ29yeTogY2F0LnJlcGxhY2UoL1xccy9nLCAnLScpLnRvTG93ZXJDYXNlKCkgfSxcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDYXRlb2dyeShjYXRlZ29yeUFsbClcbiAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgcGF0aG5hbWU6ICcvJ1xuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zdCBnZXREYXRhID0gYXdhaXQgZmV0Y2goYC90ZXN0LyR7Y2F0ZWdvcnl9YCkuY2F0Y2goZXJyb3IgPT4ge1xuICAvLyAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gIC8vICAgfSlcbiAgICBcbiAgLy8gICBpZihnZXREYXRhKSB7XG4gIC8vICAgICBzZXREYXRhKGdldERhdGEpXG4gIC8vICAgfVxuXG4gIC8vIH0sIFtjYXRlZ29yeV0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihyb3V0ZXIucXVlcnkuY2F0ZWdvcnkpIHtcbiAgICAgIGNvbnN0IG5ld0NhdGVnb3J5ID0gcm91dGVyLnF1ZXJ5LmNhdGVnb3J5LnJlcGxhY2UoJy0nLCAnICcpXG4gICAgICBzZXRUaXRsZShuZXdDYXRlZ29yeSlcbiAgICAgIHNldENhdGVvZ3J5KG5ld0NhdGVnb3J5KVxuICAgIH1cbiAgfSwgW3JvdXRlci5xdWVyeS5jYXRlZ29yeV0pXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+RG8gVGhpbmdzIHwgVXRvZnQgU3R1ZGlvczwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJEbyBUaGluZ3MgfCBVdG9mdCBTdHVkaW9zXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxuICAgICAgICA8TWFpbj5cbiAgICAgICAgICA8VGl0bGUgdGl0bGU9e2BJICR7dGl0bGV9YH0+PC9UaXRsZT5cbiAgICAgICAgICA8RmlsdGVyIGNhdGVnb3J5PXtjYXRlZ29yeX0gaGFuZGxlQ2F0ZWdvcnlDaGFuZ2U9e2hhbmRsZUNhdGVnb3J5Q2hhbmdlfT48L0ZpbHRlcj5cbiAgICAgICAgICA8VGhpbmdMaXN0IGRhdGE9e2RhdGF9PjwvVGhpbmdMaXN0PlxuICAgICAgICAgIDxRdW90ZSBxdW90ZT17cXVvdGV9PjwvUXVvdGU+XG4gICAgICAgIDwvTWFpbj5cbiAgICAgICAgPEZvb3Rlcj48L0Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\kevin\\\\github\\\\utoftstudios\\\\pages\\\\index.js */"));
};

_s(Home, "GphnKwY8+BjdjMs3X5Qv0TMUI5I=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInJvdXRlciIsInVzZVJvdXRlciIsImNhdGVnb3J5QWxsIiwicXVvdGVEZWZhdWx0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImNhdGVnb3J5Iiwic2V0Q2F0ZW9ncnkiLCJ0aXRsZSIsInNldFRpdGxlIiwicXVvdGUiLCJzZXRRdW90ZSIsImRhdGEiLCJzZXREYXRhIiwiaGFuZGxlQ2F0ZWdvcnlDaGFuZ2UiLCJjYXQiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIm5ld0NhdGVnb3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLE1BQU1DLFdBQVcsR0FBRyxXQUFwQjtBQUNBLE1BQU1DLFlBQVksR0FBRyxxQkFBckI7O0FBSmlCLHdCQUtlQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBZixDQUxmO0FBQUE7QUFBQSxNQUtWQyxRQUxVO0FBQUEsTUFLQUMsV0FMQTs7QUFBQSx5QkFNU0gsNENBQUssQ0FBQ0MsUUFBTixDQUFlSCxXQUFmLENBTlQ7QUFBQTtBQUFBLE1BTVZNLEtBTlU7QUFBQSxNQU1IQyxRQU5HOztBQUFBLHlCQU9TTCw0Q0FBSyxDQUFDQyxRQUFOLENBQWVGLFlBQWYsQ0FQVDtBQUFBO0FBQUEsTUFPVk8sS0FQVTtBQUFBLE1BT0hDLFFBUEc7O0FBQUEseUJBUU9QLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJQUFmLENBUlA7QUFBQTtBQUFBLE1BUVZPLElBUlU7QUFBQSxNQVFKQyxPQVJJOztBQVVqQixNQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLEdBQUQsRUFBUztBQUNwQyxRQUFHQSxHQUFHLEtBQUtULFFBQVgsRUFBcUI7QUFDbkJDLGlCQUFXLENBQUNRLEdBQUQsQ0FBWDtBQUNBZixZQUFNLENBQUNnQixJQUFQLENBQVk7QUFDVkMsZ0JBQVEsRUFBRSxHQURBO0FBRVZDLGFBQUssRUFBRTtBQUFFWixrQkFBUSxFQUFFUyxHQUFHLENBQUNJLE9BQUosQ0FBWSxLQUFaLEVBQW1CLEdBQW5CLEVBQXdCQyxXQUF4QjtBQUFaO0FBRkcsT0FBWixXQUdTLFVBQUFDLEtBQUssRUFBSTtBQUNoQkMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRCxPQUxEO0FBTUQsS0FSRCxNQVFPO0FBQ0xkLGlCQUFXLENBQUNMLFdBQUQsQ0FBWDtBQUNBRixZQUFNLENBQUNnQixJQUFQLENBQVk7QUFDVkMsZ0JBQVEsRUFBRTtBQURBLE9BQVosV0FFUyxVQUFBSSxLQUFLLEVBQUk7QUFDaEJDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0QsT0FKRDtBQUtEO0FBQ0YsR0FqQkQsQ0FWaUIsQ0E2QmpCO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUVBakIsOENBQUssQ0FBQ29CLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQixRQUFHeEIsTUFBTSxDQUFDa0IsS0FBUCxDQUFhWixRQUFoQixFQUEwQjtBQUN4QixVQUFNbUIsV0FBVyxHQUFHekIsTUFBTSxDQUFDa0IsS0FBUCxDQUFhWixRQUFiLENBQXNCYSxPQUF0QixDQUE4QixHQUE5QixFQUFtQyxHQUFuQyxDQUFwQjtBQUNBVixjQUFRLENBQUNnQixXQUFELENBQVI7QUFDQWxCLGlCQUFXLENBQUNrQixXQUFELENBQVg7QUFDRDtBQUNGLEdBTkQsRUFNRyxDQUFDekIsTUFBTSxDQUFDa0IsS0FBUCxDQUFhWixRQUFkLENBTkg7QUFTQSxTQUNFLG1FQUNFO0FBQUEsd0NBQWUsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLEVBRUU7QUFBTSxZQUFRLEVBQUMsVUFBZjtBQUEwQixXQUFPLEVBQUMsMkJBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBTyxTQUFLLGNBQU9FLEtBQVAsQ0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDBEQUFEO0FBQVEsWUFBUSxFQUFFRixRQUFsQjtBQUE0Qix3QkFBb0IsRUFBRVEsb0JBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsOERBQUQ7QUFBVyxRQUFJLEVBQUVGLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFLE1BQUMseURBQUQ7QUFBTyxTQUFLLEVBQUVGLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBTkYsRUFZRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixDQURGO0FBQUE7QUFBQTtBQUFBLG14SUFERjtBQStCRCxDQWhGRDs7R0FBTVgsSTtVQUNXRSxxRDs7O0tBRFhGLEk7QUFrRlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmExYjVmYWIzZWQ0MTljNmU3MjZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIiBcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL3RpdGxlJ1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi9jb21wb25lbnRzL2ZpbHRlcidcbmltcG9ydCBUaGluZ0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy90aGluZy1saXN0J1xuaW1wb3J0IFF1b3RlIGZyb20gJy4uL2NvbXBvbmVudHMvcXVvdGUnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuaW1wb3J0IE1haW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvbWFpblwiXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgY2F0ZWdvcnlBbGwgPSBcIkRvIFRoaW5nc1wiXG4gIGNvbnN0IHF1b3RlRGVmYXVsdCA9IFwiQWx3YXlzIFRoZSBOZXh0IE9uZVwiXG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZW9ncnldID0gUmVhY3QudXNlU3RhdGUobnVsbCkgXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gUmVhY3QudXNlU3RhdGUoY2F0ZWdvcnlBbGwpXG4gIGNvbnN0IFtxdW90ZSwgc2V0UXVvdGVdID0gUmVhY3QudXNlU3RhdGUocXVvdGVEZWZhdWx0KVxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IGhhbmRsZUNhdGVnb3J5Q2hhbmdlID0gKGNhdCkgPT4ge1xuICAgIGlmKGNhdCAhPT0gY2F0ZWdvcnkpIHtcbiAgICAgIHNldENhdGVvZ3J5KGNhdClcbiAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgcGF0aG5hbWU6ICcvJyxcbiAgICAgICAgcXVlcnk6IHsgY2F0ZWdvcnk6IGNhdC5yZXBsYWNlKC9cXHMvZywgJy0nKS50b0xvd2VyQ2FzZSgpIH0sXG4gICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q2F0ZW9ncnkoY2F0ZWdvcnlBbGwpXG4gICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiAnLydcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc3QgZ2V0RGF0YSA9IGF3YWl0IGZldGNoKGAvdGVzdC8ke2NhdGVnb3J5fWApLmNhdGNoKGVycm9yID0+IHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAvLyAgIH0pXG4gICAgXG4gIC8vICAgaWYoZ2V0RGF0YSkge1xuICAvLyAgICAgc2V0RGF0YShnZXREYXRhKVxuICAvLyAgIH1cblxuICAvLyB9LCBbY2F0ZWdvcnldKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYocm91dGVyLnF1ZXJ5LmNhdGVnb3J5KSB7XG4gICAgICBjb25zdCBuZXdDYXRlZ29yeSA9IHJvdXRlci5xdWVyeS5jYXRlZ29yeS5yZXBsYWNlKCctJywgJyAnKVxuICAgICAgc2V0VGl0bGUobmV3Q2F0ZWdvcnkpXG4gICAgICBzZXRDYXRlb2dyeShuZXdDYXRlZ29yeSlcbiAgICB9XG4gIH0sIFtyb3V0ZXIucXVlcnkuY2F0ZWdvcnldKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkRvIFRoaW5ncyB8IFV0b2Z0IFN0dWRpb3M8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiRG8gVGhpbmdzIHwgVXRvZnQgU3R1ZGlvc1wiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cbiAgICAgICAgPE1haW4+XG4gICAgICAgICAgPFRpdGxlIHRpdGxlPXtgSSAke3RpdGxlfWB9PjwvVGl0bGU+XG4gICAgICAgICAgPEZpbHRlciBjYXRlZ29yeT17Y2F0ZWdvcnl9IGhhbmRsZUNhdGVnb3J5Q2hhbmdlPXtoYW5kbGVDYXRlZ29yeUNoYW5nZX0+PC9GaWx0ZXI+XG4gICAgICAgICAgPFRoaW5nTGlzdCBkYXRhPXtkYXRhfT48L1RoaW5nTGlzdD5cbiAgICAgICAgICA8UXVvdGUgcXVvdGU9e3F1b3RlfT48L1F1b3RlPlxuICAgICAgICA8L01haW4+XG4gICAgICAgIDxGb290ZXI+PC9Gb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwic291cmNlUm9vdCI6IiJ9