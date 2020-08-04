webpackHotUpdate("static\\development\\pages\\servicios\\[namecat].js",{

/***/ "./components/services-list-item.js":
/*!******************************************!*\
  !*** ./components/services-list-item.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config.js");
var _this = undefined,
    _jsxFileName = "D:\\frank-proyectos\\data\\Proyectos\\notaria-roman\\frontend\\components\\services-list-item.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var ServiceListItem = function ServiceListItem(props) {
  var img = props.data.img_preview.length > 2 ? JSON.parse(props.data.img_preview)[0] : '';
  var folder = props.data.folder;
  var textButton = props.text && props;

  var capitalize = function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return __jsx("div", {
    className: props["class"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "wrapper-children",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: props.link,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, img.length > 0 && __jsx("img", {
    src: _config__WEBPACK_IMPORTED_MODULE_4__["default"].URL_BACK + "/uploads/" + folder + "/" + img + "?v=2",
    alt: props.data.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "caption",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "parent-title-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 57
    }
  }, capitalize(props.data.title))), __jsx("p", {
    className: "description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, props.data.description), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: props.link,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "button-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }, "Solicitar servici o"))))));
};

_c = ServiceListItem;
/* harmony default export */ __webpack_exports__["default"] = (ServiceListItem);

var _c;

$RefreshReg$(_c, "ServiceListItem");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlcnZpY2VzLWxpc3QtaXRlbS5qcyJdLCJuYW1lcyI6WyJTZXJ2aWNlTGlzdEl0ZW0iLCJwcm9wcyIsImltZyIsImRhdGEiLCJpbWdfcHJldmlldyIsImxlbmd0aCIsIkpTT04iLCJwYXJzZSIsImZvbGRlciIsInRleHRCdXR0b24iLCJ0ZXh0IiwiY2FwaXRhbGl6ZSIsInMiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwibGluayIsIkNvbmZpZyIsIlVSTF9CQUNLIiwiZGVzY3JpcHRpb24iLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUUvQixNQUFNQyxHQUFHLEdBQUdELEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxXQUFYLENBQXVCQyxNQUF2QixHQUE4QixDQUE5QixHQUFrQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdOLEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxXQUF0QixFQUFtQyxDQUFuQyxDQUFsQyxHQUEwRSxFQUF0RjtBQUNBLE1BQU1JLE1BQU0sR0FBR1AsS0FBSyxDQUFDRSxJQUFOLENBQVdLLE1BQTFCO0FBRUEsTUFBTUMsVUFBVSxHQUFHUixLQUFLLENBQUNTLElBQU4sSUFBY1QsS0FBakM7O0FBRUEsTUFBTVUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3RCLFdBQU9BLENBQUMsQ0FBQ0MsTUFBRixDQUFTLENBQVQsRUFBWUMsV0FBWixLQUE0QkYsQ0FBQyxDQUFDRyxLQUFGLENBQVEsQ0FBUixDQUFuQztBQUNILEdBRkQ7O0FBSUEsU0FDSTtBQUFLLGFBQVMsRUFBRWQsS0FBSyxTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVBLEtBQUssQ0FBQ2UsSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS2QsR0FBRyxDQUFDRyxNQUFKLEdBQVcsQ0FBWCxJQUNHO0FBQUssT0FBRyxFQUFFWSwrQ0FBTSxDQUFDQyxRQUFQLEdBQWtCLFdBQWxCLEdBQWdDVixNQUFoQyxHQUF5QyxHQUF6QyxHQUErQ04sR0FBL0MsR0FBcUQsTUFBL0Q7QUFBdUUsT0FBRyxFQUFFRCxLQUFLLENBQUNFLElBQU4sQ0FBV2dCLFdBQXZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGUixDQURKLENBREosRUFRSTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtSLFVBQVUsQ0FBQ1YsS0FBSyxDQUFDRSxJQUFOLENBQVdpQixLQUFaLENBQWYsQ0FBaEMsQ0FESixFQUVJO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0Qm5CLEtBQUssQ0FBQ0UsSUFBTixDQUFXZ0IsV0FBdkMsQ0FGSixFQUdJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVsQixLQUFLLENBQUNlLElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosQ0FISixDQURKLENBUkosQ0FESixDQURKO0FBd0JILENBbkNEOztLQUFNaEIsZTtBQXFDU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNlcnZpY2lvc1xcW25hbWVjYXRdLmpzLjg1ZDg5Y2ZlODY0YWNkODViOWQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlYWN0SHRtbFBhcnNlciBmcm9tICdyZWFjdC1odG1sLXBhcnNlcidcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vY29uZmlnXCJcclxuXHJcbmNvbnN0IFNlcnZpY2VMaXN0SXRlbSA9IChwcm9wcykgPT4geyBcclxuICAgICAgICBcclxuICAgIGNvbnN0IGltZyA9IHByb3BzLmRhdGEuaW1nX3ByZXZpZXcubGVuZ3RoPjIgPyBKU09OLnBhcnNlKHByb3BzLmRhdGEuaW1nX3ByZXZpZXcpWzBdIDogJydcclxuICAgIGNvbnN0IGZvbGRlciA9IHByb3BzLmRhdGEuZm9sZGVyXHJcblxyXG4gICAgY29uc3QgdGV4dEJ1dHRvbiA9IHByb3BzLnRleHQgJiYgcHJvcHNcclxuXHJcbiAgICBjb25zdCBjYXBpdGFsaXplID0gKHMpID0+IHsgICAgICAgIFxyXG4gICAgICAgIHJldHVybiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoICAgICAgICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuY2xhc3N9PiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyLWNoaWxkcmVuXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9wcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ltZy5sZW5ndGg+MCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Q29uZmlnLlVSTF9CQUNLICsgXCIvdXBsb2Fkcy9cIiArIGZvbGRlciArIFwiL1wiICsgaW1nICsgXCI/dj0yXCJ9IGFsdD17cHJvcHMuZGF0YS5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJlbnQtdGl0bGUtMlwiPjxoMj57Y2FwaXRhbGl6ZShwcm9wcy5kYXRhLnRpdGxlKX08L2gyPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntwcm9wcy5kYXRhLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvcHMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24tbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbGljaXRhciBzZXJ2aWNpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmljZUxpc3RJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==