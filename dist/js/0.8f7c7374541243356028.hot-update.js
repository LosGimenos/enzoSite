webpackHotUpdate(0,{

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(56);

var _navBar = __webpack_require__(62);

var _navBar2 = _interopRequireDefault(_navBar);

var _splash = __webpack_require__(102);

var _splash2 = _interopRequireDefault(_splash);

var _app = __webpack_require__(61);

var _app2 = _interopRequireDefault(_app);

var _heroPage = __webpack_require__(101);

var _heroPage2 = _interopRequireDefault(_heroPage);

var _about = __webpack_require__(99);

var _about2 = _interopRequireDefault(_about);

var _contact = __webpack_require__(100);

var _contact2 = _interopRequireDefault(_contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = function Routes() {
  return _react2.default.createElement(
    _reactRouterDom.HashRouter,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_navBar2.default, null),
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/home', component: _heroPage2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: _about2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/contact', component: _contact2.default })
      )
    )
  );
};

exports.default = Routes;

/***/ })

})
//# sourceMappingURL=0.8f7c7374541243356028.hot-update.js.map