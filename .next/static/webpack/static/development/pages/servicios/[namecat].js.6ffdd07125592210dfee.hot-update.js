webpackHotUpdate("static\\development\\pages\\servicios\\[namecat].js",{

/***/ "./pages/servicios/[namecat]/index.js":
/*!********************************************!*\
  !*** ./pages/servicios/[namecat]/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/container */ "./components/container.js");
/* harmony import */ var _components_breadcrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/breadcrumb */ "./components/breadcrumb.js");
/* harmony import */ var _components_services_list_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/services-list-item */ "./components/services-list-item.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../config */ "./config.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);



var _this = undefined,
    _jsxFileName = "D:\\frank-proyectos\\data\\Proyectos\\notaria-roman\\frontend\\pages\\servicios\\[namecat]\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var ServicioCat = function ServicioCat(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props.listServiciosShort),
      dataService = _useState[0],
      setDataService = _useState[1];

  var capitalize = function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    function searchInObject(nameKey, myArray) {
      for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].linkCat === nameKey) {
          return true;
        }
      }
    }

    if (props.currentUrl != 'todos') {
      var verifyUrl = searchInObject(props.currentUrl, dataService);
      !verifyUrl && next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
    }
  }, []);
  var dataCatList = dataService.map(function (item, index) {
    return props.currentUrl == 'todos' ? __jsx("div", {
      className: "box-cat",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, typeof item.data != "undefined" && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h2", {
      className: "title-cat",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 25
      }
    }, capitalize(item.titleCat)), __jsx("div", {
      className: "row slideshow-type-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 25
      }
    }, item.data.map(function (itemInner, index2) {
      return __jsx(_components_services_list_item__WEBPACK_IMPORTED_MODULE_7__["default"], {
        key: index2,
        text: 2,
        data: itemInner,
        link: item.linkCat + '/' + itemInner.linkCat,
        "class": 'col col-md-3 col-sm-6 col-xs-12',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 44
        }
      });
    })))) : props.currentUrl == item.linkCat ? __jsx("div", {
      className: "box-cat",
      style: {
        marginTop: '0'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }, typeof item.data != "undefined" && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: "row slideshow-type-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 25
      }
    }, item.data.map(function (itemInner, index2) {
      return __jsx(_components_services_list_item__WEBPACK_IMPORTED_MODULE_7__["default"], {
        key: index2,
        text: 2,
        data: itemInner,
        link: item.linkCat + '/' + itemInner.linkCat,
        "class": 'col col-md-3 col-sm-6 col-xs-12',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 44
        }
      });
    })))) : "";
  });
  var doNavService = dataService.map(function (item, index) {
    return typeof item.data != "undefined" && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/servicios/" + item.linkCat,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: item.linkCat == props.currentUrl ? 'active' : '',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }
    }, item.titleCat));
  });
  var doNavServiceMobile = dataService.map(function (item, index) {
    return typeof item.data != "undefined" && __jsx("option", {
      selected: item.linkCat == props.currentUrl ? true : false,
      value: item.linkCat,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }
    }, item.titleCat);
  });

  var redirectCats = function redirectCats(e) {
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/servicios/' + e.target.value);
  };

  return __jsx(_components_container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    namePage: "servicios margins-body-type-2",
    titlePage: "Servicios",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx(_components_breadcrumb__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "section list-nav-type-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container-fluid wrapper-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "list-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/servicios/todos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: props.currentUrl == 'todos' ? 'active' : '',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 29
    }
  }, "Ver Todos")), doNavService), __jsx("div", {
    className: "list-nav mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, __jsx("select", {
    onChange: function onChange(e) {
      return redirectCats(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 25
    }
  }, __jsx("option", {
    value: "todos",
    selected: props.currentUrl == 'todos' ? true : false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 29
    }
  }, "Ver Todos"), doNavServiceMobile)))), __jsx("div", {
    className: "section services-list-style-1 margin-type-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container-fluid wrapper-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, dataCatList)));
};

_s(ServicioCat, "8U2a+LiHB+LgbR0g7EpV2/zEwCw=");

_c = ServicioCat;

ServicioCat.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var getServiciosShort;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_10___default()(_config__WEBPACK_IMPORTED_MODULE_8__["default"].API_PATH + '/servicios-short');

          case 2:
            getServiciosShort = _context.sent;
            return _context.abrupt("return", {
              currentUrl: ctx.query.namecat,
              listServiciosShort: getServiciosShort.data.listCategoriasShort
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (ServicioCat);

var _c;

$RefreshReg$(_c, "ServicioCat");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zZXJ2aWNpb3MvW25hbWVjYXRdL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlcnZpY2lvQ2F0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxpc3RTZXJ2aWNpb3NTaG9ydCIsImRhdGFTZXJ2aWNlIiwic2V0RGF0YVNlcnZpY2UiLCJjYXBpdGFsaXplIiwicyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ1c2VFZmZlY3QiLCJzZWFyY2hJbk9iamVjdCIsIm5hbWVLZXkiLCJteUFycmF5IiwiaSIsImxlbmd0aCIsImxpbmtDYXQiLCJjdXJyZW50VXJsIiwidmVyaWZ5VXJsIiwiUm91dGVyIiwicHVzaCIsImRhdGFDYXRMaXN0IiwibWFwIiwiaXRlbSIsImluZGV4IiwiZGF0YSIsInRpdGxlQ2F0IiwiaXRlbUlubmVyIiwiaW5kZXgyIiwibWFyZ2luVG9wIiwiZG9OYXZTZXJ2aWNlIiwiZG9OYXZTZXJ2aWNlTW9iaWxlIiwicmVkaXJlY3RDYXRzIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiYXhpb3MiLCJDb25maWciLCJBUElfUEFUSCIsImdldFNlcnZpY2lvc1Nob3J0IiwicXVlcnkiLCJuYW1lY2F0IiwibGlzdENhdGVnb3JpYXNTaG9ydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUVXQyxzREFBUSxDQUFDRCxLQUFLLENBQUNFLGtCQUFQLENBRm5CO0FBQUEsTUFFcEJDLFdBRm9CO0FBQUEsTUFFUEMsY0FGTzs7QUFJM0IsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3RCLFdBQU9BLENBQUMsQ0FB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QUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1YsV0FETCxDQURKLENBdkJKLENBREo7QUFpQ0gsQ0FoSEQ7O0dBQU10QixXOztLQUFBQSxXOztBQW1ITkEsV0FBVyxDQUFDcUMsZUFBWjtBQUFBLDhMQUE4QixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNNQyw2Q0FBSyxDQUFDQywrQ0FBTSxDQUFDQyxRQUFQLEdBQWtCLGtCQUFuQixDQURYOztBQUFBO0FBQ3BCQyw2QkFEb0I7QUFBQSw2Q0FFbkI7QUFDSHhCLHdCQUFVLEVBQUVvQixHQUFHLENBQUNLLEtBQUosQ0FBVUMsT0FEbkI7QUFFSHpDLGdDQUFrQixFQUFFdUMsaUJBQWlCLENBQUNoQixJQUFsQixDQUF1Qm1CO0FBRnhDLGFBRm1COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTlCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVlN0MsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNlcnZpY2lvc1xcW25hbWVjYXRdLmpzLjZmZmRkMDcxMjU1OTIyMTBkZmVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvY29udGFpbmVyXCJcclxuaW1wb3J0IEJyZWFkQ3J1bWIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYnJlYWRjcnVtYlwiXHJcbmltcG9ydCBTZXJ2aWNlTGlzdEl0ZW0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvc2VydmljZXMtbGlzdC1pdGVtXCJcclxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vLi4vLi4vY29uZmlnXCJcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5cclxuXHJcbmNvbnN0IFNlcnZpY2lvQ2F0ID0gKHByb3BzKSA9PiB7ICAgIFxyXG5cclxuICAgIGNvbnN0IFtkYXRhU2VydmljZSwgc2V0RGF0YVNlcnZpY2VdID0gdXNlU3RhdGUocHJvcHMubGlzdFNlcnZpY2lvc1Nob3J0KSAgICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBjYXBpdGFsaXplID0gKHMpID0+IHsgICAgICAgIFxyXG4gICAgICAgIHJldHVybiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IFxyXG4gICAgICAgIGZ1bmN0aW9uIHNlYXJjaEluT2JqZWN0KG5hbWVLZXksIG15QXJyYXkpe1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7IGkgPCBteUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobXlBcnJheVtpXS5saW5rQ2F0ID09PSBuYW1lS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiggcHJvcHMuY3VycmVudFVybCAhPSAndG9kb3MnICl7XHJcbiAgICAgICAgICAgIGxldCB2ZXJpZnlVcmwgPSBzZWFyY2hJbk9iamVjdChwcm9wcy5jdXJyZW50VXJsLCBkYXRhU2VydmljZSlcclxuICAgICAgICAgICAgIXZlcmlmeVVybCAmJiAoUm91dGVyLnB1c2goJy8nKSlcclxuICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBkYXRhQ2F0TGlzdCA9IGRhdGFTZXJ2aWNlLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gcHJvcHMuY3VycmVudFVybCA9PSAndG9kb3MnID9cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtY2F0XCI+XHJcbiAgICAgICAgICAgICAgICB7dHlwZW9mIGl0ZW0uZGF0YSAhPSBcInVuZGVmaW5lZFwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUtY2F0XCI+e2NhcGl0YWxpemUoaXRlbS50aXRsZUNhdCl9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgc2xpZGVzaG93LXR5cGUtMVwiPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmRhdGEubWFwKChpdGVtSW5uZXIsIGluZGV4MikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFNlcnZpY2VMaXN0SXRlbSBrZXk9e2luZGV4Mn0gdGV4dD17Mn0gZGF0YT17aXRlbUlubmVyfSBsaW5rPXtpdGVtLmxpbmtDYXQgKyAnLycgKyBpdGVtSW5uZXIubGlua0NhdH0gY2xhc3M9eydjb2wgY29sLW1kLTMgY29sLXNtLTYgY29sLXhzLTEyJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvPiAgIFxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgOiBwcm9wcy5jdXJyZW50VXJsID09IGl0ZW0ubGlua0NhdCA/IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1jYXRcIiBzdHlsZT17e21hcmdpblRvcDogJzAnfX0+ICBcclxuICAgICAgICAgICAgICAgIHt0eXBlb2YgaXRlbS5kYXRhICE9IFwidW5kZWZpbmVkXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgc2xpZGVzaG93LXR5cGUtMVwiPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmRhdGEubWFwKChpdGVtSW5uZXIsIGluZGV4MikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFNlcnZpY2VMaXN0SXRlbSBrZXk9e2luZGV4Mn0gdGV4dD17Mn0gZGF0YT17aXRlbUlubmVyfSBsaW5rPXtpdGVtLmxpbmtDYXQgKyAnLycgKyBpdGVtSW5uZXIubGlua0NhdH0gY2xhc3M9eydjb2wgY29sLW1kLTMgY29sLXNtLTYgY29sLXhzLTEyJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICA8Lz4gICBcclxuICAgICAgICAgICAgICAgICl9ICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgOiBcIlwiXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGRvTmF2U2VydmljZSA9IGRhdGFTZXJ2aWNlLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIGl0ZW0uZGF0YSAhPSBcInVuZGVmaW5lZFwiICYmIChcclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvc2VydmljaW9zL1wiICsgaXRlbS5saW5rQ2F0fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17aXRlbS5saW5rQ2F0ID09IHByb3BzLmN1cnJlbnRVcmwgPyAnYWN0aXZlJyA6ICcnfT57aXRlbS50aXRsZUNhdH08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIClcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZG9OYXZTZXJ2aWNlTW9iaWxlID0gZGF0YVNlcnZpY2UubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgaXRlbS5kYXRhICE9IFwidW5kZWZpbmVkXCIgJiYgKFxyXG4gICAgICAgICAgICA8b3B0aW9uICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17aXRlbS5saW5rQ2F0ID09IHByb3BzLmN1cnJlbnRVcmwgPyB0cnVlIDogZmFsc2V9IFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0ubGlua0NhdH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGVDYXR9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgcmVkaXJlY3RDYXRzID0gKGUpID0+IHsgICAgICAgIFxyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvc2VydmljaW9zLycgKyBlLnRhcmdldC52YWx1ZSlcclxuICAgIH0gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyIG5hbWVQYWdlPVwic2VydmljaW9zIG1hcmdpbnMtYm9keS10eXBlLTJcIiB0aXRsZVBhZ2U9XCJTZXJ2aWNpb3NcIj4gXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8QnJlYWRDcnVtYiAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIGxpc3QtbmF2LXR5cGUtMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgd3JhcHBlci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2aWNpb3MvdG9kb3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cHJvcHMuY3VycmVudFVybCA9PSAndG9kb3MnID8gJ2FjdGl2ZScgOiAnJ30+VmVyIFRvZG9zPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkb05hdlNlcnZpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1uYXYgbW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2U9PnJlZGlyZWN0Q2F0cyhlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSd0b2Rvcycgc2VsZWN0ZWQ9e3Byb3BzLmN1cnJlbnRVcmwgPT0gJ3RvZG9zJyA/IHRydWUgOiBmYWxzZX0+VmVyIFRvZG9zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZG9OYXZTZXJ2aWNlTW9iaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gc2VydmljZXMtbGlzdC1zdHlsZS0xIG1hcmdpbi10eXBlLTFcIj4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCB3cmFwcGVyLWZsdWlkXCI+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhQ2F0TGlzdH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuU2VydmljaW9DYXQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4geyAgICBcclxuICAgIGNvbnN0IGdldFNlcnZpY2lvc1Nob3J0ID0gYXdhaXQgYXhpb3MoQ29uZmlnLkFQSV9QQVRIICsgJy9zZXJ2aWNpb3Mtc2hvcnQnKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjdXJyZW50VXJsOiBjdHgucXVlcnkubmFtZWNhdCxcclxuICAgICAgICBsaXN0U2VydmljaW9zU2hvcnQ6IGdldFNlcnZpY2lvc1Nob3J0LmRhdGEubGlzdENhdGVnb3JpYXNTaG9ydFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2lvQ2F0Il0sInNvdXJjZVJvb3QiOiIifQ==