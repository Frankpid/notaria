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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zZXJ2aWNpb3MvW25hbWVjYXRdL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlcnZpY2lvQ2F0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxpc3RTZXJ2aWNpb3NTaG9ydCIsImRhdGFTZXJ2aWNlIiwic2V0RGF0YVNlcnZpY2UiLCJjYXBpdGFsaXplIiwicyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ1c2VFZmZlY3QiLCJzZWFyY2hJbk9iamVjdCIsIm5hbWVLZXkiLCJteUFycmF5IiwiaSIsImxlbmd0aCIsImxpbmtDYXQiLCJjdXJyZW50VXJsIiwidmVyaWZ5VXJsIiwiUm91dGVyIiwicHVzaCIsImRhdGFDYXRMaXN0IiwibWFwIiwiaXRlbSIsImluZGV4IiwiZGF0YSIsInRpdGxlQ2F0IiwiaXRlbUlubmVyIiwiaW5kZXgyIiwibWFyZ2luVG9wIiwiZG9OYXZTZXJ2aWNlIiwiZG9OYXZTZXJ2aWNlTW9iaWxlIiwicmVkaXJlY3RDYXRzIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiYXhpb3MiLCJDb25maWciLCJBUElfUEFUSCIsImdldFNlcnZpY2lvc1Nob3J0IiwicXVlcnkiLCJuYW1lY2F0IiwibGlzdENhdGVnb3JpYXNTaG9ydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUVXQyxzREFBUSxDQUFDRCxLQUFLLENBQUNFLGtCQUFQLENBRm5CO0FBQUEsTUFFcEJDLFdBRm9CO0FBQUEsTUFFUEMsY0FGTzs7QUFJM0IsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3RCLFdBQU9BLENBQUMsQ0FB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SyxhQUFTLEVBQUMsK0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLVixXQURMLENBREosQ0F2QkosQ0FESjtBQWlDSCxDQWhIRDs7R0FBTXRCLFc7O0tBQUFBLFc7O0FBbUhOQSxXQUFXLENBQUNxQyxlQUFaO0FBQUEsOExBQThCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ01DLDZDQUFLLENBQUNDLCtDQUFNLENBQUNDLFFBQVAsR0FBa0Isa0JBQW5CLENBRFg7O0FBQUE7QUFDcEJDLDZCQURvQjtBQUFBLDZDQUVuQjtBQUNIeEIsd0JBQVUsRUFBRW9CLEdBQUcsQ0FBQ0ssS0FBSixDQUFVQyxPQURuQjtBQUVIekMsZ0NBQWtCLEVBQUV1QyxpQkFBaUIsQ0FBQ2hCLElBQWxCLENBQXVCbUI7QUFGeEMsYUFGbUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBOUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVWU3QywwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc2VydmljaW9zXFxbbmFtZWNhdF0uanMuNDFhNGU0N2UwZWM4ZmRkNTVmZmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jb250YWluZXJcIlxyXG5pbXBvcnQgQnJlYWRDcnVtYiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9icmVhZGNydW1iXCJcclxuaW1wb3J0IFNlcnZpY2VMaXN0SXRlbSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9zZXJ2aWNlcy1saXN0LWl0ZW1cIlxyXG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuLi8uLi8uLi9jb25maWdcIlxyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcblxyXG5cclxuY29uc3QgU2VydmljaW9DYXQgPSAocHJvcHMpID0+IHsgICAgXHJcblxyXG4gICAgY29uc3QgW2RhdGFTZXJ2aWNlLCBzZXREYXRhU2VydmljZV0gPSB1c2VTdGF0ZShwcm9wcy5saXN0U2VydmljaW9zU2hvcnQpICAgICAgXHJcbiAgICBcclxuICAgIGNvbnN0IGNhcGl0YWxpemUgPSAocykgPT4geyAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgXHJcbiAgICAgICAgZnVuY3Rpb24gc2VhcmNoSW5PYmplY3QobmFtZUtleSwgbXlBcnJheSl7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaSA8IG15QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChteUFycmF5W2ldLmxpbmtDYXQgPT09IG5hbWVLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCBwcm9wcy5jdXJyZW50VXJsICE9ICd0b2RvcycgKXtcclxuICAgICAgICAgICAgbGV0IHZlcmlmeVVybCA9IHNlYXJjaEluT2JqZWN0KHByb3BzLmN1cnJlbnRVcmwsIGRhdGFTZXJ2aWNlKVxyXG4gICAgICAgICAgICAhdmVyaWZ5VXJsICYmIChSb3V0ZXIucHVzaCgnLycpKVxyXG4gICAgICAgIH0gICAgICAgICAgICBcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGRhdGFDYXRMaXN0ID0gZGF0YVNlcnZpY2UubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBwcm9wcy5jdXJyZW50VXJsID09ICd0b2RvcycgP1xyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1jYXRcIj5cclxuICAgICAgICAgICAgICAgIHt0eXBlb2YgaXRlbS5kYXRhICE9IFwidW5kZWZpbmVkXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZS1jYXRcIj57Y2FwaXRhbGl6ZShpdGVtLnRpdGxlQ2F0KX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzbGlkZXNob3ctdHlwZS0xXCI+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZGF0YS5tYXAoKGl0ZW1Jbm5lciwgaW5kZXgyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8U2VydmljZUxpc3RJdGVtIGtleT17aW5kZXgyfSB0ZXh0PXsyfSBkYXRhPXtpdGVtSW5uZXJ9IGxpbms9e2l0ZW0ubGlua0NhdCArICcvJyArIGl0ZW1Jbm5lci5saW5rQ2F0fSBjbGFzcz17J2NvbCBjb2wtbWQtMyBjb2wtc20tNiBjb2wteHMtMTInfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC8+ICAgXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA6IHByb3BzLmN1cnJlbnRVcmwgPT0gaXRlbS5saW5rQ2F0ID8gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWNhdFwiIHN0eWxlPXt7bWFyZ2luVG9wOiAnMCd9fT4gIFxyXG4gICAgICAgICAgICAgICAge3R5cGVvZiBpdGVtLmRhdGEgIT0gXCJ1bmRlZmluZWRcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzbGlkZXNob3ctdHlwZS0xXCI+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZGF0YS5tYXAoKGl0ZW1Jbm5lciwgaW5kZXgyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8U2VydmljZUxpc3RJdGVtIGtleT17aW5kZXgyfSBkYXRhPXtpdGVtSW5uZXJ9IGxpbms9e2l0ZW0ubGlua0NhdCArICcvJyArIGl0ZW1Jbm5lci5saW5rQ2F0fSBjbGFzcz17J2NvbCBjb2wtbWQtMyBjb2wtc20tNiBjb2wteHMtMTInfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvPiAgIFxyXG4gICAgICAgICAgICAgICAgKX0gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA6IFwiXCJcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZG9OYXZTZXJ2aWNlID0gZGF0YVNlcnZpY2UubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgaXRlbS5kYXRhICE9IFwidW5kZWZpbmVkXCIgJiYgKFxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi9zZXJ2aWNpb3MvXCIgKyBpdGVtLmxpbmtDYXR9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtpdGVtLmxpbmtDYXQgPT0gcHJvcHMuY3VycmVudFVybCA/ICdhY3RpdmUnIDogJyd9PntpdGVtLnRpdGxlQ2F0fTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBkb05hdlNlcnZpY2VNb2JpbGUgPSBkYXRhU2VydmljZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBpdGVtLmRhdGEgIT0gXCJ1bmRlZmluZWRcIiAmJiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtpdGVtLmxpbmtDYXQgPT0gcHJvcHMuY3VycmVudFVybCA/IHRydWUgOiBmYWxzZX0gXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS5saW5rQ2F0fT5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZUNhdH1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCByZWRpcmVjdENhdHMgPSAoZSkgPT4geyAgICAgICAgXHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9zZXJ2aWNpb3MvJyArIGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfSAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgbmFtZVBhZ2U9XCJzZXJ2aWNpb3MgbWFyZ2lucy1ib2R5LXR5cGUtMlwiIHRpdGxlUGFnZT1cIlNlcnZpY2lvc1wiPiBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxCcmVhZENydW1iIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gbGlzdC1uYXYtdHlwZS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCB3cmFwcGVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NlcnZpY2lvcy90b2Rvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtwcm9wcy5jdXJyZW50VXJsID09ICd0b2RvcycgPyAnYWN0aXZlJyA6ICcnfT5WZXIgVG9kb3M8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RvTmF2U2VydmljZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LW5hdiBtb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17ZT0+cmVkaXJlY3RDYXRzKGUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J3RvZG9zJyBzZWxlY3RlZD17cHJvcHMuY3VycmVudFVybCA9PSAndG9kb3MnID8gdHJ1ZSA6IGZhbHNlfT5WZXIgVG9kb3M8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkb05hdlNlcnZpY2VNb2JpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBzZXJ2aWNlcy1saXN0LXN0eWxlLTEgbWFyZ2luLXR5cGUtMVwiPiBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHdyYXBwZXItZmx1aWRcIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGFDYXRMaXN0fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5TZXJ2aWNpb0NhdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7ICAgIFxyXG4gICAgY29uc3QgZ2V0U2VydmljaW9zU2hvcnQgPSBhd2FpdCBheGlvcyhDb25maWcuQVBJX1BBVEggKyAnL3NlcnZpY2lvcy1zaG9ydCcpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGN1cnJlbnRVcmw6IGN0eC5xdWVyeS5uYW1lY2F0LFxyXG4gICAgICAgIGxpc3RTZXJ2aWNpb3NTaG9ydDogZ2V0U2VydmljaW9zU2hvcnQuZGF0YS5saXN0Q2F0ZWdvcmlhc1Nob3J0XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmljaW9DYXQiXSwic291cmNlUm9vdCI6IiJ9