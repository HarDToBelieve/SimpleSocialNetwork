webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactRouter = __webpack_require__(1);

	var _reactDom = __webpack_require__(59);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Header = __webpack_require__(205);

	var _Header2 = _interopRequireDefault(_Header);

	var _NewFeed = __webpack_require__(489);

	var _NewFeed2 = _interopRequireDefault(_NewFeed);

	var _Profile = __webpack_require__(490);

	var _Profile2 = _interopRequireDefault(_Profile);

	var _Login = __webpack_require__(491);

	var _Login2 = _interopRequireDefault(_Login);

	var _Register = __webpack_require__(492);

	var _Register2 = _interopRequireDefault(_Register);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //React libraries


	//Import Container component


	var AppRouter = function (_React$Component) {
	  _inherits(AppRouter, _React$Component);

	  function AppRouter() {
	    _classCallCheck(this, AppRouter);

	    return _possibleConstructorReturn(this, (AppRouter.__proto__ || Object.getPrototypeOf(AppRouter)).apply(this, arguments));
	  }

	  _createClass(AppRouter, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactRouter.Router,
	        { history: _reactRouter.browserHistory },
	        _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _Login2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'register', component: _Register2.default }),
	        _react2.default.createElement(
	          _reactRouter.Route,
	          { path: '/', component: _Header2.default },
	          _react2.default.createElement(_reactRouter.IndexRedirect, { to: '/newfeed' }),
	          _react2.default.createElement(_reactRouter.Route, { path: 'newfeed', component: _NewFeed2.default }),
	          _react2.default.createElement(_reactRouter.Route, { path: 'profile', component: _Profile2.default })
	        )
	      );
	    }
	  }]);

	  return AppRouter;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(AppRouter, null), document.getElementById('contents'));

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(206);

	var _reactRouterBootstrap = __webpack_require__(457);

	var _reactRouter = __webpack_require__(1);

	var _reactSelect = __webpack_require__(477);

	var _reactSelect2 = _interopRequireDefault(_reactSelect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Header = function Header(props) {
	  return _react2.default.createElement(
	    _reactBootstrap.Navbar,
	    { inverse: true, collapseOnSelect: true },
	    _react2.default.createElement(
	      _reactBootstrap.Navbar.Header,
	      null,
	      _react2.default.createElement(
	        _reactBootstrap.Navbar.Brand,
	        null,
	        _react2.default.createElement(
	          'a',
	          { href: '#' },
	          'Social Network'
	        )
	      ),
	      _react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
	    ),
	    _react2.default.createElement(
	      _reactBootstrap.Navbar.Collapse,
	      null,
	      _react2.default.createElement(
	        _reactBootstrap.Nav,
	        null,
	        _react2.default.createElement(
	          _reactRouterBootstrap.LinkContainer,
	          { to: 'newfeed' },
	          _react2.default.createElement(
	            _reactBootstrap.NavItem,
	            { eventKey: 1, href: '#' },
	            'New Feed'
	          )
	        ),
	        _react2.default.createElement(
	          _reactRouterBootstrap.LinkContainer,
	          { to: 'profile' },
	          _react2.default.createElement(
	            _reactBootstrap.NavItem,
	            { eventKey: 1, href: '#' },
	            'Profile'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        _reactBootstrap.Nav,
	        { pullRight: true },
	        _react2.default.createElement(
	          _reactRouterBootstrap.LinkContainer,
	          { to: 'login' },
	          _react2.default.createElement(
	            _reactBootstrap.NavItem,
	            { eventKey: 1, href: '#' },
	            'Logout'
	          )
	        )
	      )
	    )
	  );
	};

	exports.default = Header;

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NewFeed = function (_React$Component) {
	  _inherits(NewFeed, _React$Component);

	  function NewFeed() {
	    _classCallCheck(this, NewFeed);

	    return _possibleConstructorReturn(this, (NewFeed.__proto__ || Object.getPrototypeOf(NewFeed)).apply(this, arguments));
	  }

	  _createClass(NewFeed, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { style: { top: "100px" } },
	        "Placeholder NewFeed."
	      );
	    }
	  }]);

	  return NewFeed;
	}(_react2.default.Component);

	exports.default = NewFeed;

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Profile = function (_React$Component) {
	  _inherits(Profile, _React$Component);

	  function Profile() {
	    _classCallCheck(this, Profile);

	    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
	  }

	  _createClass(Profile, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        'Placeholder Profile.'
	      );
	    }
	  }]);

	  return Profile;
	}(_react2.default.Component);

	exports.default = Profile;

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(206);

	var _reactRouterBootstrap = __webpack_require__(457);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function FieldGroup(_ref) {
	  var id = _ref.id,
	      label = _ref.label,
	      help = _ref.help,
	      type = _ref.type;

	  return _react2.default.createElement(
	    _reactBootstrap.FormGroup,
	    { controlId: id },
	    _react2.default.createElement(
	      _reactBootstrap.ControlLabel,
	      null,
	      label
	    ),
	    _react2.default.createElement(_reactBootstrap.FormControl, { type: type }),
	    help && _react2.default.createElement(
	      HelpBlock,
	      null,
	      help
	    )
	  );
	}

	var Login = function (_React$Component) {
	  _inherits(Login, _React$Component);

	  function Login() {
	    _classCallCheck(this, Login);

	    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
	  }

	  _createClass(Login, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'form',
	        null,
	        _react2.default.createElement(FieldGroup, {
	          id: 'formControlsText',
	          type: 'text',
	          label: 'username',
	          placeholder: 'Your username'
	        }),
	        _react2.default.createElement(FieldGroup, {
	          id: 'formControlsPassword',
	          label: 'password',
	          type: 'password'
	        }),
	        _react2.default.createElement(
	          _reactRouterBootstrap.LinkContainer,
	          { to: 'newfeed' },
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { type: 'submit' },
	            'Login'
	          )
	        ),
	        _react2.default.createElement(
	          _reactRouterBootstrap.LinkContainer,
	          { to: 'register' },
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { type: 'submit' },
	            'Register'
	          )
	        )
	      );
	    }
	  }]);

	  return Login;
	}(_react2.default.Component);

	exports.default = Login;

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(206);

	var _reactRouterBootstrap = __webpack_require__(457);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function FieldGroup(_ref) {
	  var id = _ref.id,
	      label = _ref.label,
	      help = _ref.help,
	      type = _ref.type;

	  return _react2.default.createElement(
	    _reactBootstrap.FormGroup,
	    { controlId: id },
	    _react2.default.createElement(
	      _reactBootstrap.ControlLabel,
	      null,
	      label
	    ),
	    _react2.default.createElement(_reactBootstrap.FormControl, { type: type }),
	    help && _react2.default.createElement(
	      HelpBlock,
	      null,
	      help
	    )
	  );
	}

	var Register = function (_React$Component) {
	  _inherits(Register, _React$Component);

	  function Register() {
	    _classCallCheck(this, Register);

	    return _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).apply(this, arguments));
	  }

	  _createClass(Register, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'form',
	        null,
	        _react2.default.createElement(FieldGroup, {
	          id: 'formControlsText',
	          type: 'text',
	          label: 'username',
	          placeholder: 'Your username'
	        }),
	        _react2.default.createElement(FieldGroup, {
	          id: 'formControlsText',
	          type: 'text',
	          label: 'birthday',
	          placeholder: 'Your DOB'
	        }),
	        _react2.default.createElement(FieldGroup, {
	          id: 'formControlsPassword',
	          label: 'password',
	          type: 'password'
	        }),
	        _react2.default.createElement(FieldGroup, {
	          id: 'formControlsPassword',
	          label: 'confirmPassword',
	          type: 'password'
	        }),
	        _react2.default.createElement(
	          _reactRouterBootstrap.LinkContainer,
	          { to: 'Login' },
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { type: 'submit' },
	            'Submit'
	          )
	        )
	      );
	    }
	  }]);

	  return Register;
	}(_react2.default.Component);

	exports.default = Register;

/***/ })

});