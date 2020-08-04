webpackHotUpdate("static\\development\\pages\\index.js",{

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
  var textButton = props.text && props.text == 2 ? 'Mas Información' : 'Solicitar servicio';

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
  }, "Solicitar servicio"))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlcnZpY2VzLWxpc3QtaXRlbS5qcyJdLCJuYW1lcyI6WyJTZXJ2aWNlTGlzdEl0ZW0iLCJwcm9wcyIsImltZyIsImRhdGEiLCJpbWdfcHJldmlldyIsImxlbmd0aCIsIkpTT04iLCJwYXJzZSIsImZvbGRlciIsInRleHRCdXR0b24iLCJ0ZXh0IiwiY2FwaXRhbGl6ZSIsInMiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwibGluayIsIkNvbmZpZyIsIlVSTF9CQUNLIiwiZGVzY3JpcHRpb24iLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUUvQixNQUFNQyxHQUFHLEdBQUdELEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxXQUFYLENBQXVCQyxNQUF2QixHQUE4QixDQUE5QixHQUFrQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdOLEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxXQUF0QixFQUFtQyxDQUFuQyxDQUFsQyxHQUEwRSxFQUF0RjtBQUNBLE1BQU1JLE1BQU0sR0FBR1AsS0FBSyxDQUFDRSxJQUFOLENBQVdLLE1BQTFCO0FBRUEsTUFBTUMsVUFBVSxHQUFHUixLQUFLLENBQUNTLElBQU4sSUFBY1QsS0FBSyxDQUFDUyxJQUFOLElBQWMsQ0FBNUIsR0FBZ0MsaUJBQWhDLEdBQW9ELG9CQUF2RTs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxDQUFELEVBQU87QUFDdEIsV0FBT0EsQ0FBQyxDQUFDQyxNQUFGLENBQVMsQ0FBVCxFQUFZQyxXQUFaLEtBQTRCRixDQUFDLENBQUNHLEtBQUYsQ0FBUSxDQUFSLENBQW5DO0FBQ0gsR0FGRDs7QUFJQSxTQUNJO0FBQUssYUFBUyxFQUFFZCxLQUFLLFNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRUEsS0FBSyxDQUFDZSxJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLZCxHQUFHLENBQUNHLE1BQUosR0FBVyxDQUFYLElBQ0c7QUFBSyxPQUFHLEVBQUVZLCtDQUFNLENBQUNDLFFBQVAsR0FBa0IsV0FBbEIsR0FBZ0NWLE1BQWhDLEdBQXlDLEdBQXpDLEdBQStDTixHQUEvQyxHQUFxRCxNQUEvRDtBQUF1RSxPQUFHLEVBQUVELEtBQUssQ0FBQ0UsSUFBTixDQUFXZ0IsV0FBdkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZSLENBREosQ0FESixFQVFJO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS1IsVUFBVSxDQUFDVixLQUFLLENBQUNFLElBQU4sQ0FBV2lCLEtBQVosQ0FBZixDQUFoQyxDQURKLEVBRUk7QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRCbkIsS0FBSyxDQUFDRSxJQUFOLENBQVdnQixXQUF2QyxDQUZKLEVBR0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRWxCLEtBQUssQ0FBQ2UsSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixDQUhKLENBREosQ0FSSixDQURKLENBREo7QUF3QkgsQ0FuQ0Q7O0tBQU1oQixlO0FBcUNTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMTA2NGNhMGMyMDk2YjYyZThhZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3RIdG1sUGFyc2VyIGZyb20gJ3JlYWN0LWh0bWwtcGFyc2VyJ1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuLi9jb25maWdcIlxyXG5cclxuY29uc3QgU2VydmljZUxpc3RJdGVtID0gKHByb3BzKSA9PiB7IFxyXG4gICAgICAgIFxyXG4gICAgY29uc3QgaW1nID0gcHJvcHMuZGF0YS5pbWdfcHJldmlldy5sZW5ndGg+MiA/IEpTT04ucGFyc2UocHJvcHMuZGF0YS5pbWdfcHJldmlldylbMF0gOiAnJ1xyXG4gICAgY29uc3QgZm9sZGVyID0gcHJvcHMuZGF0YS5mb2xkZXJcclxuXHJcbiAgICBjb25zdCB0ZXh0QnV0dG9uID0gcHJvcHMudGV4dCAmJiBwcm9wcy50ZXh0ID09IDIgPyAnTWFzIEluZm9ybWFjacOzbicgOiAnU29saWNpdGFyIHNlcnZpY2lvJ1xyXG5cclxuICAgIGNvbnN0IGNhcGl0YWxpemUgPSAocykgPT4geyAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICggICAgICAgICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc30+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXItY2hpbGRyZW5cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb3BzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW1nLmxlbmd0aD4wICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtDb25maWcuVVJMX0JBQ0sgKyBcIi91cGxvYWRzL1wiICsgZm9sZGVyICsgXCIvXCIgKyBpbWcgKyBcIj92PTJcIn0gYWx0PXtwcm9wcy5kYXRhLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmVudC10aXRsZS0yXCI+PGgyPntjYXBpdGFsaXplKHByb3BzLmRhdGEudGl0bGUpfTwvaDI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e3Byb3BzLmRhdGEuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9wcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbi1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU29saWNpdGFyIHNlcnZpY2lvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlTGlzdEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9