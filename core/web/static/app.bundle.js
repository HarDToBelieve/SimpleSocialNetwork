webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _reactRouterDom = __webpack_require__(1);

	var _reactDom = __webpack_require__(76);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Header = __webpack_require__(222);

	var _Header2 = _interopRequireDefault(_Header);

	var _NewFeed = __webpack_require__(489);

	var _NewFeed2 = _interopRequireDefault(_NewFeed);

	var _Profile = __webpack_require__(490);

	var _Profile2 = _interopRequireDefault(_Profile);

	var _Home = __webpack_require__(492);

	var _Home2 = _interopRequireDefault(_Home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//Import Container component
	_reactDom2.default.render(_react2.default.createElement(
	  _reactRouterDom.HashRouter,
	  null,
	  _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _Home2.default }),
	    _react2.default.createElement(_reactRouterDom.Route, { path: '/newfeed', component: _NewFeed2.default }),
	    _react2.default.createElement(_reactRouterDom.Route, { path: '/profile', component: _Profile2.default })
	  )
	), document.getElementById('contents')); //React libraries

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(223);

	var _reactRouterBootstrap = __webpack_require__(474);

	var _reactRouter = __webpack_require__(49);

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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Header = __webpack_require__(222);

	var _Header2 = _interopRequireDefault(_Header);

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
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Header2.default, null),
	        _react2.default.createElement(
	          'div',
	          null,
	          'Placeholder NewFeed.'
	        )
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

	var _Header = __webpack_require__(222);

	var _Header2 = _interopRequireDefault(_Header);

	var _Helper = __webpack_require__(491);

	var _Helper2 = _interopRequireDefault(_Helper);

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
	        key: 'getUserInfo',
	        value: function getUserInfo() {
	            fetch('http://161.202.20.61:5000/user?name=hiep', {
	                method: "GET",
	                headers: {
	                    'Content-Type': 'application/json',
	                    'Authorization': 'JWT ' + _Helper2.default.access_token
	                }
	            }).then(function (response) {
	                if (response.ok) {
	                    return response.json();
	                } else {
	                    return null;
	                }
	            }).then(function (response) {
	                if (response) {
	                    console.log(response);
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_Header2.default, null),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    'Placeholder Profile.'
	                )
	            );
	        }
	    }]);

	    return Profile;
	}(_react2.default.Component);

	exports.default = Profile;

/***/ }),

/***/ 491:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Helper = {
	  authorizationUrl: 'http://161.202.20.61:5000/auth',
	  access_token: '',
	  username: '',
	  setAccessToken: function setAccessToken(token) {
	    this.access_token = token;
	  },
	  setUsername: function setUsername(username) {
	    this.username = username;
	  }
	};

	exports.default = Helper;

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

	var _reactModalDialog = __webpack_require__(493);

	var _LoginModal = __webpack_require__(546);

	var _LoginModal2 = _interopRequireDefault(_LoginModal);

	var _RegisterModal = __webpack_require__(576);

	var _RegisterModal2 = _interopRequireDefault(_RegisterModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_React$Component) {
	  _inherits(Home, _React$Component);

	  function Home(props) {
	    _classCallCheck(this, Home);

	    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

	    _this.state = {
	      isShowingLoginModal: false,
	      isShowingRegisterModal: false,
	      username: ""
	    };
	    _this.openLoginModal = _this.openLoginModal.bind(_this);
	    _this.openRegisterModal = _this.openRegisterModal.bind(_this);
	    _this.closeLoginModal = _this.closeLoginModal.bind(_this);
	    _this.closeRegisterModal = _this.closeRegisterModal.bind(_this);
	    return _this;
	  }

	  _createClass(Home, [{
	    key: 'openLoginModal',
	    value: function openLoginModal() {
	      this.setState({
	        isShowingLoginModal: true,
	        isShowingRegisterModal: false
	      });
	    }
	  }, {
	    key: 'closeLoginModal',
	    value: function closeLoginModal() {
	      this.setState({
	        isShowingLoginModal: false
	      });
	    }
	  }, {
	    key: 'openRegisterModal',
	    value: function openRegisterModal() {
	      this.setState({
	        isShowingLoginModal: false,
	        isShowingRegisterModal: true
	      });
	    }
	  }, {
	    key: 'closeRegisterModal',
	    value: function closeRegisterModal() {
	      this.setState({
	        isShowingRegisterModal: false
	      });
	    }
	  }, {
	    key: 'getRegisterInfo',
	    value: function getRegisterInfo(username) {
	      this.setState({
	        username: username
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'button',
	          { onClick: this.openLoginModal },
	          'Login'
	        ),
	        this.state.isShowingLoginModal && _react2.default.createElement(
	          _reactModalDialog.ModalContainer,
	          { onClose: this.closeLoginModal },
	          _react2.default.createElement(
	            _reactModalDialog.ModalDialog,
	            { onClose: this.closeLoginModal },
	            _react2.default.createElement(_LoginModal2.default, {
	              openRegisterModal: this.openRegisterModal,
	              openLoginModal: this.openLoginModal,
	              closeLoginModal: this.closeLoginModal
	            })
	          )
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: this.openRegisterModal },
	          'Register'
	        ),
	        this.state.isShowingRegisterModal && _react2.default.createElement(
	          _reactModalDialog.ModalContainer,
	          { onClose: this.closeRegisterModal },
	          _react2.default.createElement(
	            _reactModalDialog.ModalDialog,
	            { onClose: this.closeRegisterModal },
	            _react2.default.createElement(_RegisterModal2.default, {
	              openLoginModal: this.openLoginModal,
	              getRegisterInfo: this.getRegisterInfo
	            })
	          )
	        )
	      );
	    }
	  }]);

	  return Home;
	}(_react2.default.Component);

	exports.default = Home;

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _FlexDialog = __webpack_require__(494);

	var _FlexDialog2 = _interopRequireDefault(_FlexDialog);

	var _ModalBackground = __webpack_require__(529);

	var _ModalBackground2 = _interopRequireDefault(_ModalBackground);

	var _ModalContainer = __webpack_require__(530);

	var _ModalContainer2 = _interopRequireDefault(_ModalContainer);

	var _ModalDialog = __webpack_require__(532);

	var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

	var _ModalPortal = __webpack_require__(531);

	var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

	var _UnstyledFlexDialog = __webpack_require__(522);

	var _UnstyledFlexDialog2 = _interopRequireDefault(_UnstyledFlexDialog);

	exports.FlexDialog = _FlexDialog2['default'];
	exports.ModalBackground = _ModalBackground2['default'];
	exports.ModalContainer = _ModalContainer2['default'];
	exports.ModalDialog = _ModalDialog2['default'];
	exports.ModalPortal = _ModalPortal2['default'];
	exports.UnstyledFlexDialog = _UnstyledFlexDialog2['default'];

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(310);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _narcissus = __webpack_require__(495);

	var _UnstyledFlexDialog = __webpack_require__(522);

	var _UnstyledFlexDialog2 = _interopRequireDefault(_UnstyledFlexDialog);

	var styles = {
	  dialog: {
	    position: 'relative',
	    backgroundColor: 'white',
	    padding: 20,
	    color: '#333333',
	    boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.4)',
	    borderRadius: 10
	  }
	};

	var FlexDialog = (function (_React$Component) {
	  _inherits(FlexDialog, _React$Component);

	  function FlexDialog() {
	    var _this = this;

	    _classCallCheck(this, FlexDialog);

	    _get(Object.getPrototypeOf(FlexDialog.prototype), 'constructor', this).apply(this, arguments);

	    this.render = function () {
	      var _props = _this.props;
	      var className = _props.className;
	      var margin = _props.margin;
	      var style = _props.style;
	      var width = _props.width;
	      var useDefaultStyle = _props.useDefaultStyle;

	      var rest = _objectWithoutProperties(_props, ['className', 'margin', 'style', 'width', 'useDefaultStyle']);

	      var combinedClassName = (0, _classnames2['default'])(className, _defineProperty({}, (0, _narcissus.inject)(styles.dialog), useDefaultStyle));

	      var combinedStyle = _extends({}, style, {
	        width: width,
	        padding: margin,
	        boxSizing: 'border-box'
	      });

	      return _react2['default'].createElement(_UnstyledFlexDialog2['default'], _extends({ style: combinedStyle, className: combinedClassName }, rest));
	    };
	  }

	  _createClass(FlexDialog, null, [{
	    key: 'propTypes',
	    value: {
	      className: _react.PropTypes.string,
	      useDefaultStyle: _react.PropTypes.bool.isRequired,
	      width: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	      margin: _react.PropTypes.number,
	      style: _react.PropTypes.object
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      width: 'auto',
	      margin: 20,
	      useDefaultStyle: true
	    },
	    enumerable: true
	  }]);

	  return FlexDialog;
	})(_react2['default'].Component);

	exports['default'] = FlexDialog;
	module.exports = exports['default'];

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.inject = inject;
	exports.startStatic = startStatic;
	exports.stopStatic = stopStatic;
	exports.rehydrate = rehydrate;

	var _murmurhash = __webpack_require__(496);

	var _murmurhash2 = _interopRequireDefault(_murmurhash);

	var _generate = __webpack_require__(497);

	var _generate2 = _interopRequireDefault(_generate);

	var _injectIntoStyleTag = __webpack_require__(521);

	var _injectIntoStyleTag2 = _interopRequireDefault(_injectIntoStyleTag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// An object that keeps track of whether a style has already been injected
	var alreadyInjected = {};

	// When true, injects do not go to the document, instead, they are stored in a
	// buffer and can be extracted
	var isStatic = false;
	var staticBuffer = '';
	var staticBufferClassNames = [];

	// It has been suggested tht hashObject takes too long
	// On a somewhat complex object
	// {a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: {a: 'a', b: 'b', c: 'c'}}
	// 10 ** 4 operations takes ~30ms
	// This is acceptable so far

	// const hashObject = (object) => {
	//   if (object['@@narcissus_already_hashed']) {
	//     return object['@@narcissus_already_hashed'];
	//   }
	//   const hash = murmurhash(JSON.stringify(object));
	//   object['@@narcissus_already_hashed'] = hash;
	//   asap(() => {
	//     delete object['@@narcissus_already_hashed'];
	//     if (hash !== murmurhash(JSON.stringify(object))) {
	//       console.warn('hashObject has cached an object\'s hash, but the hash is not the same anymore, so you have mutated the object passed in');
	//     }
	//     object['@@narcissus_already_hashed'] = hash;
	//   });
	//   return hash;
	// };

	var hashObject = function hashObject(object) {
	  return (0, _murmurhash2.default)(JSON.stringify(object));
	};

	/**
	 * Inside a React render function, this might look like...
	 * return <div className={inject({ backgroundColor: 'blue' })}/>;
	 *
	 * Takes an object, and returns a class name
	 */
	function inject(object) {
	  if (!object) {
	    console.error('[narcissus] you are trying to inject a non object');
	    return '';
	  }

	  var hash = hashObject(object);

	  // The returned className cannot start with a number!
	  var className = 'narcissus_' + hash;

	  if (alreadyInjected[className]) {
	    return className;
	  }

	  var generatedCSS = (0, _generate2.default)('.' + className, object);

	  if (isStatic) {
	    staticBuffer += generatedCSS;
	    staticBufferClassNames.push(className);
	  } else {
	    (0, _injectIntoStyleTag2.default)(generatedCSS);
	    alreadyInjected[className] = true;
	  }

	  return className;
	}

	/**
	 * Start the static rendering process
	 */
	function startStatic() {
	  isStatic = true;
	}

	/**
	 * This is not using jsdoc properly is it
	 * Returns a tuple containing [ css, classNames ]
	 * css is the string that should be injected into the head
	 * classNames is an array of classNames that have been used (use with rehydrate to be more efficient)
	 */
	function stopStatic() {
	  isStatic = false;

	  var ret = [staticBuffer, staticBufferClassNames];

	  // Reset the buffers
	  staticBuffer = '';
	  staticBufferClassNames = [];

	  return ret;
	}

	/**
	 * Takes an array of classnames, and marks them as already injected
	 * @param {Array<String>} classNames
	 */
	function rehydrate(classNames) {
	  classNames.forEach(function (className) {
	    alreadyInjected[className] = true;
	  });
	}

/***/ }),

/***/ 496:
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = murmurhash2_32_gc;
	/**
	 * JS Implementation of MurmurHash2
	 *
	 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
	 * @see http://github.com/garycourt/murmurhash-js
	 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
	 * @see http://sites.google.com/site/murmurhash/
	 *
	 * @param {string} str ASCII only
	 * @return {string} Base 36 encoded hash result
	 */
	function murmurhash2_32_gc(str) {
	  var l = str.length;
	  var h = l;
	  var i = 0;
	  var k = void 0;

	  while (l >= 4) {
	    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;

	    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	    k ^= k >>> 24;
	    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);

	    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;

	    l -= 4;
	    ++i;
	  }

	  switch (l) {
	    case 3:
	      h ^= (str.charCodeAt(i + 2) & 0xff) << 16; // fallthrough
	    case 2:
	      h ^= (str.charCodeAt(i + 1) & 0xff) << 8; // fallthrough
	    case 1:
	      h ^= str.charCodeAt(i) & 0xff;
	      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	      break;
	    default:
	      break;
	  }

	  h ^= h >>> 13;
	  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	  h ^= h >>> 15;

	  return (h >>> 0).toString(36);
	}

/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * By the way, the whole point here is to be able to write nested css declarations
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Let's not forget that
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

	var _static = __webpack_require__(498);

	var _static2 = _interopRequireDefault(_static);

	var _isUnitlessNumber = __webpack_require__(519);

	var _isUnitlessNumber2 = _interopRequireDefault(_isUnitlessNumber);

	var _kebabifyStyleName = __webpack_require__(520);

	var _kebabifyStyleName2 = _interopRequireDefault(_kebabifyStyleName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var objectToPairs = function objectToPairs(obj) {
	  return Object.keys(obj).map(function (key) {
	    return [key, obj[key]];
	  });
	};
	var flatten = function flatten(list) {
	  return list.reduce(function (memo, x) {
	    return memo.concat(x);
	  }, []);
	};
	var stringifyValue = function stringifyValue(key, prop) {
	  if (typeof prop === 'number') {
	    if (_isUnitlessNumber2.default[key]) {
	      return '' + prop; // Forces into a string
	    }
	    return prop + 'px'; // Adds a px
	  }
	  return prop;
	};

	// This generates one ruleset
	// With one selector and a set of declarations
	var generateCSSRuleset = function generateCSSRuleset(selector, declarations) {
	  var prefixedDeclarations = (0, _static2.default)(declarations);
	  var prefixedRules = flatten(objectToPairs(prefixedDeclarations).map(function (_ref) {
	    var _ref2 = _slicedToArray(_ref, 2);

	    var key = _ref2[0];
	    var value = _ref2[1];

	    if (Array.isArray(value)) {
	      var _ret = function () {
	        // inline-style-prefix-all returns an array when there should be
	        // multiple rules, we will flatten to single rules

	        var prefixedValues = [];
	        var unprefixedValues = [];

	        value.forEach(function (v) {
	          if (v.indexOf('-') === 0) {
	            prefixedValues.push(v);
	          } else {
	            unprefixedValues.push(v);
	          }
	        });

	        prefixedValues.sort();
	        unprefixedValues.sort();

	        return {
	          v: prefixedValues.concat(unprefixedValues).map(function (v) {
	            return [key, v];
	          })
	        };
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }
	    return [[key, value]];
	  }));

	  var rules = prefixedRules.map(function (_ref3) {
	    var _ref4 = _slicedToArray(_ref3, 2);

	    var key = _ref4[0];
	    var value = _ref4[1];

	    var stringValue = stringifyValue(key, value);
	    return (0, _kebabifyStyleName2.default)(key) + ':' + stringValue + ';';
	  }).join('');

	  if (rules) {
	    return selector + '{' + rules + '}';
	  }
	  return '';
	};

	var generate = function generate(selector, object) {
	  // Main styles
	  var mainStyles = {};
	  // Collection of styles that apply to slightly different selectors
	  var extraStyles = {};
	  // Media styles
	  // If one of the keys starts with a @, it is added to mediaStyles
	  var mediaStyles = {};

	  // Separate main styles from extra styles based on the '&&' character at the
	  // beginning
	  Object.keys(object).forEach(function (key) {
	    if (key[0] === '@') {
	      // Media
	      mediaStyles[key] = object[key];
	    } else if (key.slice(0, 2) === '&&') {
	      var appended = key.slice(2);
	      extraStyles[appended] = object[key];
	    } else {
	      mainStyles[key] = object[key];
	    }
	  });

	  var rules = generateCSSRuleset(selector, mainStyles);

	  var extraRules = Object.keys(extraStyles).map(function (key) {
	    var suffix = key;
	    // Keys here are the additions to be added to the className
	    return generateCSSRuleset(selector + suffix, extraStyles[key]);
	  }).join('');

	  var mediaRules = Object.keys(mediaStyles).map(function (key) {
	    var media = key;
	    var ruleText = generate(selector, mediaStyles[key]);
	    return media + '{' + ruleText + '}';
	  }).join('');

	  return rules + extraRules + mediaRules;
	};

	exports.default = generate;

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createPrefixer = __webpack_require__(499);

	var _createPrefixer2 = _interopRequireDefault(_createPrefixer);

	var _staticData = __webpack_require__(505);

	var _staticData2 = _interopRequireDefault(_staticData);

	var _cursor = __webpack_require__(506);

	var _cursor2 = _interopRequireDefault(_cursor);

	var _crossFade = __webpack_require__(507);

	var _crossFade2 = _interopRequireDefault(_crossFade);

	var _filter = __webpack_require__(509);

	var _filter2 = _interopRequireDefault(_filter);

	var _flex = __webpack_require__(510);

	var _flex2 = _interopRequireDefault(_flex);

	var _flexboxOld = __webpack_require__(511);

	var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

	var _gradient = __webpack_require__(512);

	var _gradient2 = _interopRequireDefault(_gradient);

	var _imageSet = __webpack_require__(513);

	var _imageSet2 = _interopRequireDefault(_imageSet);

	var _position = __webpack_require__(514);

	var _position2 = _interopRequireDefault(_position);

	var _sizing = __webpack_require__(515);

	var _sizing2 = _interopRequireDefault(_sizing);

	var _transition = __webpack_require__(516);

	var _transition2 = _interopRequireDefault(_transition);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var plugins = [_crossFade2.default, _cursor2.default, _filter2.default, _flexboxOld2.default, _gradient2.default, _imageSet2.default, _position2.default, _sizing2.default, _transition2.default, _flex2.default];

	exports.default = (0, _createPrefixer2.default)({
	  prefixMap: _staticData2.default.prefixMap,
	  plugins: plugins
	});
	module.exports = exports['default'];

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createPrefixer;

	var _prefixProperty = __webpack_require__(500);

	var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

	var _prefixValue = __webpack_require__(502);

	var _prefixValue2 = _interopRequireDefault(_prefixValue);

	var _addNewValuesOnly = __webpack_require__(503);

	var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

	var _isObject = __webpack_require__(504);

	var _isObject2 = _interopRequireDefault(_isObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createPrefixer(_ref) {
	  var prefixMap = _ref.prefixMap,
	      plugins = _ref.plugins;

	  function prefixAll(style) {
	    for (var property in style) {
	      var value = style[property];

	      // handle nested objects
	      if ((0, _isObject2.default)(value)) {
	        style[property] = prefixAll(value);
	        // handle array values
	      } else if (Array.isArray(value)) {
	        var combinedValue = [];

	        for (var i = 0, len = value.length; i < len; ++i) {
	          var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
	          (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
	        }

	        // only modify the value if it was touched
	        // by any plugin to prevent unnecessary mutations
	        if (combinedValue.length > 0) {
	          style[property] = combinedValue;
	        }
	      } else {
	        var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

	        // only modify the value if it was touched
	        // by any plugin to prevent unnecessary mutations
	        if (_processedValue) {
	          style[property] = _processedValue;
	        }

	        (0, _prefixProperty2.default)(prefixMap, property, style);
	      }
	    }

	    return style;
	  }

	  return prefixAll;
	}
	module.exports = exports['default'];

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = prefixProperty;

	var _capitalizeString = __webpack_require__(501);

	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function prefixProperty(prefixProperties, property, style) {
	  if (prefixProperties.hasOwnProperty(property)) {
	    var requiredPrefixes = prefixProperties[property];
	    for (var i = 0, len = requiredPrefixes.length; i < len; ++i) {
	      style[requiredPrefixes[i] + (0, _capitalizeString2.default)(property)] = style[property];
	    }
	  }
	}
	module.exports = exports['default'];

/***/ }),

/***/ 501:
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = capitalizeString;
	function capitalizeString(str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	}
	module.exports = exports["default"];

/***/ }),

/***/ 502:
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = prefixValue;
	function prefixValue(plugins, property, value, style, metaData) {
	  for (var i = 0, len = plugins.length; i < len; ++i) {
	    var processedValue = plugins[i](property, value, style, metaData);

	    // we can stop processing if a value is returned
	    // as all plugin criteria are unique
	    if (processedValue) {
	      return processedValue;
	    }
	  }
	}
	module.exports = exports["default"];

/***/ }),

/***/ 503:
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = addNewValuesOnly;
	function addIfNew(list, value) {
	  if (list.indexOf(value) === -1) {
	    list.push(value);
	  }
	}

	function addNewValuesOnly(list, values) {
	  if (Array.isArray(values)) {
	    for (var i = 0, len = values.length; i < len; ++i) {
	      addIfNew(list, values[i]);
	    }
	  } else {
	    addIfNew(list, values);
	  }
	}
	module.exports = exports["default"];

/***/ }),

/***/ 504:
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isObject;
	function isObject(value) {
	  return value instanceof Object && !Array.isArray(value);
	}
	module.exports = exports["default"];

/***/ }),

/***/ 505:
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  plugins: [],
	  prefixMap: { "appearance": ["Webkit", "Moz"], "userSelect": ["Webkit", "Moz", "ms"], "textEmphasisPosition": ["Webkit"], "textEmphasis": ["Webkit"], "textEmphasisStyle": ["Webkit"], "textEmphasisColor": ["Webkit"], "boxDecorationBreak": ["Webkit"], "clipPath": ["Webkit"], "maskImage": ["Webkit"], "maskMode": ["Webkit"], "maskRepeat": ["Webkit"], "maskPosition": ["Webkit"], "maskClip": ["Webkit"], "maskOrigin": ["Webkit"], "maskSize": ["Webkit"], "maskComposite": ["Webkit"], "mask": ["Webkit"], "maskBorderSource": ["Webkit"], "maskBorderMode": ["Webkit"], "maskBorderSlice": ["Webkit"], "maskBorderWidth": ["Webkit"], "maskBorderOutset": ["Webkit"], "maskBorderRepeat": ["Webkit"], "maskBorder": ["Webkit"], "maskType": ["Webkit"], "textDecorationStyle": ["Webkit"], "textDecorationSkip": ["Webkit"], "textDecorationLine": ["Webkit"], "textDecorationColor": ["Webkit"], "filter": ["Webkit"], "fontFeatureSettings": ["Webkit"], "breakAfter": ["Webkit", "Moz", "ms"], "breakBefore": ["Webkit", "Moz", "ms"], "breakInside": ["Webkit", "Moz", "ms"], "columnCount": ["Webkit", "Moz"], "columnFill": ["Webkit", "Moz"], "columnGap": ["Webkit", "Moz"], "columnRule": ["Webkit", "Moz"], "columnRuleColor": ["Webkit", "Moz"], "columnRuleStyle": ["Webkit", "Moz"], "columnRuleWidth": ["Webkit", "Moz"], "columns": ["Webkit", "Moz"], "columnSpan": ["Webkit", "Moz"], "columnWidth": ["Webkit", "Moz"], "flex": ["Webkit"], "flexBasis": ["Webkit"], "flexDirection": ["Webkit"], "flexGrow": ["Webkit"], "flexFlow": ["Webkit"], "flexShrink": ["Webkit"], "flexWrap": ["Webkit"], "alignContent": ["Webkit"], "alignItems": ["Webkit"], "alignSelf": ["Webkit"], "justifyContent": ["Webkit"], "order": ["Webkit"], "transform": ["Webkit"], "transformOrigin": ["Webkit"], "transformOriginX": ["Webkit"], "transformOriginY": ["Webkit"], "backfaceVisibility": ["Webkit"], "perspective": ["Webkit"], "perspectiveOrigin": ["Webkit"], "transformStyle": ["Webkit"], "transformOriginZ": ["Webkit"], "animation": ["Webkit"], "animationDelay": ["Webkit"], "animationDirection": ["Webkit"], "animationFillMode": ["Webkit"], "animationDuration": ["Webkit"], "animationIterationCount": ["Webkit"], "animationName": ["Webkit"], "animationPlayState": ["Webkit"], "animationTimingFunction": ["Webkit"], "backdropFilter": ["Webkit"], "fontKerning": ["Webkit"], "scrollSnapType": ["Webkit", "ms"], "scrollSnapPointsX": ["Webkit", "ms"], "scrollSnapPointsY": ["Webkit", "ms"], "scrollSnapDestination": ["Webkit", "ms"], "scrollSnapCoordinate": ["Webkit", "ms"], "shapeImageThreshold": ["Webkit"], "shapeImageMargin": ["Webkit"], "shapeImageOutside": ["Webkit"], "hyphens": ["Webkit", "Moz", "ms"], "flowInto": ["Webkit", "ms"], "flowFrom": ["Webkit", "ms"], "regionFragment": ["Webkit", "ms"], "textAlignLast": ["Moz"], "tabSize": ["Moz"], "wrapFlow": ["ms"], "wrapThrough": ["ms"], "wrapMargin": ["ms"], "gridTemplateColumns": ["ms"], "gridTemplateRows": ["ms"], "gridTemplateAreas": ["ms"], "gridTemplate": ["ms"], "gridAutoColumns": ["ms"], "gridAutoRows": ["ms"], "gridAutoFlow": ["ms"], "grid": ["ms"], "gridRowStart": ["ms"], "gridColumnStart": ["ms"], "gridRowEnd": ["ms"], "gridRow": ["ms"], "gridColumn": ["ms"], "gridColumnEnd": ["ms"], "gridColumnGap": ["ms"], "gridRowGap": ["ms"], "gridArea": ["ms"], "gridGap": ["ms"], "textSizeAdjust": ["Webkit", "ms"], "transitionDelay": ["Webkit"], "transitionDuration": ["Webkit"], "transitionProperty": ["Webkit"], "transitionTimingFunction": ["Webkit"] }
	};
	module.exports = exports["default"];

/***/ }),

/***/ 506:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = cursor;
	var prefixes = ['-webkit-', '-moz-', ''];

	var values = {
	  'zoom-in': true,
	  'zoom-out': true,
	  grab: true,
	  grabbing: true
	};

	function cursor(property, value) {
	  if (property === 'cursor' && values.hasOwnProperty(value)) {
	    return prefixes.map(function (prefix) {
	      return prefix + value;
	    });
	  }
	}
	module.exports = exports['default'];

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = crossFade;

	var _isPrefixedValue = __webpack_require__(508);

	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// http://caniuse.com/#search=cross-fade
	var prefixes = ['-webkit-', ''];
	function crossFade(property, value) {
	  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
	    return prefixes.map(function (prefix) {
	      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
	    });
	  }
	}
	module.exports = exports['default'];

/***/ }),

/***/ 508:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isPrefixedValue;

	var regex = /-webkit-|-moz-|-ms-/;

	function isPrefixedValue(value) {
	  return typeof value === 'string' && regex.test(value);
	}
	module.exports = exports['default'];

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = filter;

	var _isPrefixedValue = __webpack_require__(508);

	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// http://caniuse.com/#feat=css-filter-function
	var prefixes = ['-webkit-', ''];
	function filter(property, value) {
	  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
	    return prefixes.map(function (prefix) {
	      return value.replace(/filter\(/g, prefix + 'filter(');
	    });
	  }
	}
	module.exports = exports['default'];

/***/ }),

/***/ 510:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flex;
	var values = {
	  flex: true,
	  'inline-flex': true
	};

	function flex(property, value) {
	  if (property === 'display' && values.hasOwnProperty(value)) {
	    return ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value];
	  }
	}
	module.exports = exports['default'];

/***/ }),

/***/ 511:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxOld;
	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple'
	};

	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};

	function flexboxOld(property, value, style) {
	  if (property === 'flexDirection' && typeof value === 'string') {
	    if (value.indexOf('column') > -1) {
	      style.WebkitBoxOrient = 'vertical';
	    } else {
	      style.WebkitBoxOrient = 'horizontal';
	    }
	    if (value.indexOf('reverse') > -1) {
	      style.WebkitBoxDirection = 'reverse';
	    } else {
	      style.WebkitBoxDirection = 'normal';
	    }
	  }
	  if (alternativeProps.hasOwnProperty(property)) {
	    style[alternativeProps[property]] = alternativeValues[value] || value;
	  }
	}
	module.exports = exports['default'];

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = gradient;

	var _isPrefixedValue = __webpack_require__(508);

	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixes = ['-webkit-', '-moz-', ''];

	var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

	function gradient(property, value) {
	  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
	    return prefixes.map(function (prefix) {
	      return prefix + value;
	    });
	  }
	}
	module.exports = exports['default'];

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = imageSet;

	var _isPrefixedValue = __webpack_require__(508);

	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// http://caniuse.com/#feat=css-image-set
	var prefixes = ['-webkit-', ''];
	function imageSet(property, value) {
	  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
	    return prefixes.map(function (prefix) {
	      return value.replace(/image-set\(/g, prefix + 'image-set(');
	    });
	  }
	}
	module.exports = exports['default'];

/***/ }),

/***/ 514:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = position;
	function position(property, value) {
	  if (property === 'position' && value === 'sticky') {
	    return ['-webkit-sticky', 'sticky'];
	  }
	}
	module.exports = exports['default'];

/***/ }),

/***/ 515:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sizing;
	var prefixes = ['-webkit-', '-moz-', ''];

	var properties = {
	  maxHeight: true,
	  maxWidth: true,
	  width: true,
	  height: true,
	  columnWidth: true,
	  minWidth: true,
	  minHeight: true
	};
	var values = {
	  'min-content': true,
	  'max-content': true,
	  'fill-available': true,
	  'fit-content': true,
	  'contain-floats': true
	};

	function sizing(property, value) {
	  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
	    return prefixes.map(function (prefix) {
	      return prefix + value;
	    });
	  }
	}
	module.exports = exports['default'];

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = transition;

	var _hyphenateProperty = __webpack_require__(517);

	var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

	var _isPrefixedValue = __webpack_require__(508);

	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

	var _capitalizeString = __webpack_require__(501);

	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var properties = {
	  transition: true,
	  transitionProperty: true,
	  WebkitTransition: true,
	  WebkitTransitionProperty: true,
	  MozTransition: true,
	  MozTransitionProperty: true
	};


	var prefixMapping = {
	  Webkit: '-webkit-',
	  Moz: '-moz-',
	  ms: '-ms-'
	};

	function prefixValue(value, propertyPrefixMap) {
	  if ((0, _isPrefixedValue2.default)(value)) {
	    return value;
	  }

	  // only split multi values, not cubic beziers
	  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

	  for (var i = 0, len = multipleValues.length; i < len; ++i) {
	    var singleValue = multipleValues[i];
	    var values = [singleValue];
	    for (var property in propertyPrefixMap) {
	      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

	      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
	        var prefixes = propertyPrefixMap[property];
	        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
	          // join all prefixes and create a new value
	          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
	        }
	      }
	    }

	    multipleValues[i] = values.join(',');
	  }

	  return multipleValues.join(',');
	}

	function transition(property, value, style, propertyPrefixMap) {
	  // also check for already prefixed transitions
	  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
	    var outputValue = prefixValue(value, propertyPrefixMap);
	    // if the property is already prefixed
	    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
	      return !/-moz-|-ms-/.test(val);
	    }).join(',');

	    if (property.indexOf('Webkit') > -1) {
	      return webkitOutput;
	    }

	    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
	      return !/-webkit-|-ms-/.test(val);
	    }).join(',');

	    if (property.indexOf('Moz') > -1) {
	      return mozOutput;
	    }

	    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
	    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
	    return outputValue;
	  }
	}
	module.exports = exports['default'];

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hyphenateProperty;

	var _hyphenateStyleName = __webpack_require__(518);

	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function hyphenateProperty(property) {
	  return (0, _hyphenateStyleName2.default)(property);
	}
	module.exports = exports['default'];

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

	'use strict';

	var uppercasePattern = /[A-Z]/g;
	var msPattern = /^ms-/;
	var cache = {};

	function hyphenateStyleName(string) {
	    return string in cache
	    ? cache[string]
	    : cache[string] = string
	      .replace(uppercasePattern, '-$&')
	      .toLowerCase()
	      .replace(msPattern, '-ms-');
	}

	module.exports = hyphenateStyleName;


/***/ }),

/***/ 519:
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 * Taken from React's CSSProperty.js
	 */
	var isUnitlessNumber = {
	  animationIterationCount: true,
	  borderImageOutset: true,
	  borderImageSlice: true,
	  borderImageWidth: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  gridRow: true,
	  gridColumn: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,

	  // SVG-related properties
	  fillOpacity: true,
	  floodOpacity: true,
	  stopOpacity: true,
	  strokeDasharray: true,
	  strokeDashoffset: true,
	  strokeMiterlimit: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};

	exports.default = isUnitlessNumber;

/***/ }),

/***/ 520:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/** Blatantly stolen from aphrodite */

	var UPPERCASE_RE = /([A-Z])/g;
	var MS_RE = /^ms-/;

	var kebabify = function kebabify(string) {
	  return string.replace(UPPERCASE_RE, '-$1').toLowerCase();
	};
	var kebabifyStyleName = function kebabifyStyleName(string) {
	  return kebabify(string).replace(MS_RE, '-ms-');
	};
	exports.default = kebabifyStyleName;

/***/ }),

/***/ 521:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// Blatantly copied from inject.js in aphrodite

	// Inject a string of styles into a <style> tag in the head of the document. This
	// will automatically create a style tag and then continue to use it for
	// multiple injections. It will also use a style tag with the `data-aphrodite`
	// tag on it if that exists in the DOM. This could be used for e.g. reusing the
	// same style tag that server-side rendering inserts.

	// Cache this for speed
	var styleTag = null;

	var injectIntoStyleTag = function injectIntoStyleTag(cssContents) {
	  if (typeof document === 'undefined') {
	    // Don't do this in non document environments
	    return;
	  }

	  if (styleTag == null) {
	    // Try to find a style tag with the `data-narcissus` attribute first.
	    styleTag = document.querySelector('style[data-narcissus]');

	    // If that doesn't work, generate a new style tag.
	    if (styleTag == null) {
	      // Taken from
	      // http://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript
	      var head = document.head || document.getElementsByTagName('head')[0];
	      styleTag = document.createElement('style');

	      styleTag.type = 'text/css';
	      styleTag.setAttribute('data-narcissus', '');
	      head.appendChild(styleTag);
	    }
	  }

	  if (styleTag.styleSheet) {
	    // The style tag already has contents
	    styleTag.styleSheet.cssText += cssContents;
	  } else {
	    // Most likely, you get to this else statement if the style tag was just
	    // generated
	    styleTag.appendChild(document.createTextNode(cssContents));
	  }
	};

	exports.default = injectIntoStyleTag;

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(76);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _dynamicsJs = __webpack_require__(523);

	var _dynamicsJs2 = _interopRequireDefault(_dynamicsJs);

	var _CloseCircle = __webpack_require__(524);

	var _CloseCircle2 = _interopRequireDefault(_CloseCircle);

	var _activeEventStack = __webpack_require__(525);

	var _activeEventStack2 = _interopRequireDefault(_activeEventStack);

	var _keycode = __webpack_require__(360);

	var _keycode2 = _interopRequireDefault(_keycode);

	var _narcissus = __webpack_require__(495);

	var styles = {
	  closeButton: {
	    position: 'absolute',
	    top: 0,
	    left: -50,
	    display: 'block',
	    width: 40,
	    height: 40,
	    transition: 'transform 0.1s',
	    '&&:hover': {
	      transform: 'scale(1.1)'
	    }
	  }
	};

	var UnstyledFlexDialog = (function (_React$Component) {
	  _inherits(UnstyledFlexDialog, _React$Component);

	  function UnstyledFlexDialog() {
	    var _this = this;

	    _classCallCheck(this, UnstyledFlexDialog);

	    _get(Object.getPrototypeOf(UnstyledFlexDialog.prototype), 'constructor', this).apply(this, arguments);

	    this.componentWillMount = function () {
	      /**
	       * This is done in the componentWillMount instead of the componentDidMount
	       * because this way, a modal that is a child of another will have register
	       * for events after its parent
	       */
	      _this.eventToken = _activeEventStack2['default'].addListenable([['click', _this.handleGlobalClick], ['keydown', _this.handleGlobalKeydown]]);
	    };

	    this.componentDidMount = function () {
	      _this.animateIn();
	    };

	    this.componentWillReceiveProps = function (nextProps) {
	      if (nextProps.componentIsLeaving && !_this.props.componentIsLeaving) {
	        var node = _reactDom2['default'].findDOMNode(_this.refs.self);
	        _dynamicsJs2['default'].animate(node, {
	          scale: 1.2,
	          opacity: 0
	        }, {
	          duration: 300,
	          type: _dynamicsJs2['default'].easeIn
	        });
	      }
	    };

	    this.componentWillUnmount = function () {
	      _activeEventStack2['default'].removeListenable(_this.eventToken);
	    };

	    this.didAnimateInAlready = false;

	    this.shouldClickDismiss = function (event) {
	      var target = event.target;

	      // This piece of code isolates targets which are fake clicked by things
	      // like file-drop handlers
	      if (target.tagName === 'INPUT' && target.type === 'file') {
	        return false;
	      }

	      if (target === _this.refs.self || _this.refs.self.contains(target)) return false;
	      return true;
	    };

	    this.handleGlobalClick = function (event) {
	      if (_this.shouldClickDismiss(event)) {
	        if (typeof _this.props.onClose == 'function') {
	          _this.props.onClose();
	        }
	      }
	    };

	    this.handleGlobalKeydown = function (event) {
	      if ((0, _keycode2['default'])(event) === 'esc') {
	        if (typeof _this.props.onClose == 'function') {
	          _this.props.onClose();
	        }
	      }
	    };

	    this.animateIn = function () {
	      _this.didAnimateInAlready = true;

	      // Animate this node once it is mounted
	      var node = _reactDom2['default'].findDOMNode(_this.refs.self);

	      // This sets the scale...
	      if (document.body.style.transform == null) {
	        node.style.WebkitTransform = 'scale(0.5)';
	      } else {
	        node.style.transform = 'scale(0.5)';
	      }

	      _dynamicsJs2['default'].animate(node, {
	        scale: 1
	      }, {
	        type: _dynamicsJs2['default'].spring,
	        duration: 500,
	        friction: 400
	      });
	    };

	    this.render = function () {
	      var _props = _this.props;
	      var children = _props.children;
	      var componentIsLeaving = _props.componentIsLeaving;
	      var // eslint-disable-line no-unused-vars, this line is used to remove parameters from rest
	      onClose = _props.onClose;
	      var style = _props.style;

	      var rest = _objectWithoutProperties(_props, ['children', 'componentIsLeaving', 'onClose', 'style']);

	      return _react2['default'].createElement(
	        'div',
	        {
	          style: {
	            position: 'absolute',
	            display: 'flex',
	            width: '100%',
	            minHeight: '100%',
	            justifyContent: 'space-around',
	            alignItems: 'center',
	            flexDirection: 'column',
	            overflowY: 'auto'
	          }
	        },
	        _react2['default'].createElement(
	          'div',
	          { style: { display: 'flex', flexDirection: 'column', overflow: 'visible' } },
	          _react2['default'].createElement(
	            'div',
	            _extends({
	              ref: 'self',
	              style: _extends({
	                display: 'block',
	                backgroundColor: 'white',
	                // Position is important for the close circle
	                position: 'relative'
	              }, style)
	            }, rest),
	            onClose != null && _react2['default'].createElement(
	              'a',
	              { className: (0, _narcissus.inject)(styles.closeButton), onClick: onClose },
	              _react2['default'].createElement(_CloseCircle2['default'], { diameter: 40 })
	            ),
	            children
	          )
	        )
	      );
	    };
	  }

	  _createClass(UnstyledFlexDialog, null, [{
	    key: 'propTypes',
	    value: {
	      children: _react.PropTypes.node,
	      componentIsLeaving: _react.PropTypes.bool,
	      onClose: _react.PropTypes.func,
	      style: _react.PropTypes.object
	    },
	    enumerable: true
	  }]);

	  return UnstyledFlexDialog;
	})(_react2['default'].Component);

	exports['default'] = UnstyledFlexDialog;
	module.exports = exports['default'];

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;// Generated by CoffeeScript 1.7.1
	(function() {
	  var Color, DecomposedMatrix, DecomposedMatrix2D, InterpolableArray, InterpolableColor, InterpolableNumber, InterpolableObject, InterpolableString, Matrix, Matrix2D, Set, Vector, addTimeout, addUnitsToNumberInterpolables, animationTick, animations, animationsTimeouts, applyDefaults, applyFrame, applyProperties, baseSVG, cacheFn, cancelTimeout, clone, createInterpolable, defaultValueForKey, degProperties, dynamics, getCurrentProperties, interpolate, isDocumentVisible, isSVGElement, lastTime, leftDelayForTimeout, makeArrayFn, observeVisibilityChange, parseProperties, prefixFor, propertyWithPrefix, pxProperties, rAF, roundf, runLoopPaused, runLoopRunning, runLoopTick, setRealTimeout, slow, slowRatio, startAnimation, startRunLoop, svgProperties, timeBeforeVisibilityChange, timeoutLastId, timeouts, toDashed, transformProperties, transformValueForProperty, unitForProperty,
	    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	  isDocumentVisible = function() {
	    return document.visibilityState === "visible" || (dynamics.tests != null);
	  };

	  observeVisibilityChange = (function() {
	    var fns;
	    fns = [];
	    if (typeof document !== "undefined" && document !== null) {
	      document.addEventListener("visibilitychange", function() {
	        var fn, _i, _len, _results;
	        _results = [];
	        for (_i = 0, _len = fns.length; _i < _len; _i++) {
	          fn = fns[_i];
	          _results.push(fn(isDocumentVisible()));
	        }
	        return _results;
	      });
	    }
	    return function(fn) {
	      return fns.push(fn);
	    };
	  })();

	  clone = function(o) {
	    var k, newO, v;
	    newO = {};
	    for (k in o) {
	      v = o[k];
	      newO[k] = v;
	    }
	    return newO;
	  };

	  cacheFn = function(func) {
	    var data;
	    data = {};
	    return function() {
	      var k, key, result, _i, _len;
	      key = "";
	      for (_i = 0, _len = arguments.length; _i < _len; _i++) {
	        k = arguments[_i];
	        key += k.toString() + ",";
	      }
	      result = data[key];
	      if (!result) {
	        data[key] = result = func.apply(this, arguments);
	      }
	      return result;
	    };
	  };

	  makeArrayFn = function(fn) {
	    return function(el) {
	      var args, i, res;
	      if (el instanceof Array || el instanceof NodeList || el instanceof HTMLCollection) {
	        res = (function() {
	          var _i, _ref, _results;
	          _results = [];
	          for (i = _i = 0, _ref = el.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
	            args = Array.prototype.slice.call(arguments, 1);
	            args.splice(0, 0, el[i]);
	            _results.push(fn.apply(this, args));
	          }
	          return _results;
	        }).apply(this, arguments);
	        return res;
	      }
	      return fn.apply(this, arguments);
	    };
	  };

	  applyDefaults = function(options, defaults) {
	    var k, v, _results;
	    _results = [];
	    for (k in defaults) {
	      v = defaults[k];
	      _results.push(options[k] != null ? options[k] : options[k] = v);
	    }
	    return _results;
	  };

	  applyFrame = function(el, properties) {
	    var k, v, _results;
	    if ((el.style != null)) {
	      return applyProperties(el, properties);
	    } else {
	      _results = [];
	      for (k in properties) {
	        v = properties[k];
	        _results.push(el[k] = v.format());
	      }
	      return _results;
	    }
	  };

	  applyProperties = function(el, properties) {
	    var isSVG, k, matrix, transforms, v;
	    properties = parseProperties(properties);
	    transforms = [];
	    isSVG = isSVGElement(el);
	    for (k in properties) {
	      v = properties[k];
	      if (transformProperties.contains(k)) {
	        transforms.push([k, v]);
	      } else {
	        if (v.format != null) {
	          v = v.format();
	        }
	        if (typeof v === 'number') {
	          v = "" + v + (unitForProperty(k, v));
	        }
	        if ((el.hasAttribute != null) && el.hasAttribute(k)) {
	          el.setAttribute(k, v);
	        } else if (el.style != null) {
	          el.style[propertyWithPrefix(k)] = v;
	        }
	        if (k in el) {
	          el[k] = v;
	        }
	      }
	    }
	    if (transforms.length > 0) {
	      if (isSVG) {
	        matrix = new Matrix2D();
	        matrix.applyProperties(transforms);
	        return el.setAttribute("transform", matrix.decompose().format());
	      } else {
	        v = (transforms.map(function(transform) {
	          return transformValueForProperty(transform[0], transform[1]);
	        })).join(" ");
	        return el.style[propertyWithPrefix("transform")] = v;
	      }
	    }
	  };

	  isSVGElement = function(el) {
	    var _ref, _ref1;
	    if ((typeof SVGElement !== "undefined" && SVGElement !== null) && (typeof SVGSVGElement !== "undefined" && SVGSVGElement !== null)) {
	      return el instanceof SVGElement && !(el instanceof SVGSVGElement);
	    } else {
	      return (_ref = (_ref1 = dynamics.tests) != null ? typeof _ref1.isSVG === "function" ? _ref1.isSVG(el) : void 0 : void 0) != null ? _ref : false;
	    }
	  };

	  roundf = function(v, decimal) {
	    var d;
	    d = Math.pow(10, decimal);
	    return Math.round(v * d) / d;
	  };

	  Set = (function() {
	    function Set(array) {
	      var v, _i, _len;
	      this.obj = {};
	      for (_i = 0, _len = array.length; _i < _len; _i++) {
	        v = array[_i];
	        this.obj[v] = 1;
	      }
	    }

	    Set.prototype.contains = function(v) {
	      return this.obj[v] === 1;
	    };

	    return Set;

	  })();

	  toDashed = function(str) {
	    return str.replace(/([A-Z])/g, function($1) {
	      return "-" + $1.toLowerCase();
	    });
	  };

	  pxProperties = new Set('marginTop,marginLeft,marginBottom,marginRight,paddingTop,paddingLeft,paddingBottom,paddingRight,top,left,bottom,right,translateX,translateY,translateZ,perspectiveX,perspectiveY,perspectiveZ,width,height,maxWidth,maxHeight,minWidth,minHeight,borderRadius'.split(','));

	  degProperties = new Set('rotate,rotateX,rotateY,rotateZ,skew,skewX,skewY,skewZ'.split(','));

	  transformProperties = new Set('translate,translateX,translateY,translateZ,scale,scaleX,scaleY,scaleZ,rotate,rotateX,rotateY,rotateZ,rotateC,rotateCX,rotateCY,skew,skewX,skewY,skewZ,perspective'.split(','));

	  svgProperties = new Set('accent-height,ascent,azimuth,baseFrequency,baseline-shift,bias,cx,cy,d,diffuseConstant,divisor,dx,dy,elevation,filterRes,fx,fy,gradientTransform,height,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,letter-spacing,limitingConeAngle,markerHeight,markerWidth,numOctaves,order,overline-position,overline-thickness,pathLength,points,pointsAtX,pointsAtY,pointsAtZ,r,radius,rx,ry,seed,specularConstant,specularExponent,stdDeviation,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,surfaceScale,target,targetX,targetY,transform,underline-position,underline-thickness,viewBox,width,x,x1,x2,y,y1,y2,z'.split(','));

	  unitForProperty = function(k, v) {
	    if (typeof v !== 'number') {
	      return '';
	    }
	    if (pxProperties.contains(k)) {
	      return 'px';
	    } else if (degProperties.contains(k)) {
	      return 'deg';
	    }
	    return '';
	  };

	  transformValueForProperty = function(k, v) {
	    var match, unit;
	    match = ("" + v).match(/^([0-9.-]*)([^0-9]*)$/);
	    if (match != null) {
	      v = match[1];
	      unit = match[2];
	    } else {
	      v = parseFloat(v);
	    }
	    v = roundf(parseFloat(v), 10);
	    if ((unit == null) || unit === "") {
	      unit = unitForProperty(k, v);
	    }
	    return "" + k + "(" + v + unit + ")";
	  };

	  parseProperties = function(properties) {
	    var axis, match, parsed, property, value, _i, _len, _ref;
	    parsed = {};
	    for (property in properties) {
	      value = properties[property];
	      if (transformProperties.contains(property)) {
	        match = property.match(/(translate|rotateC|rotate|skew|scale|perspective)(X|Y|Z|)/);
	        if (match && match[2].length > 0) {
	          parsed[property] = value;
	        } else {
	          _ref = ['X', 'Y', 'Z'];
	          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	            axis = _ref[_i];
	            parsed[match[1] + axis] = value;
	          }
	        }
	      } else {
	        parsed[property] = value;
	      }
	    }
	    return parsed;
	  };

	  defaultValueForKey = function(key) {
	    var v;
	    v = key === 'opacity' ? 1 : 0;
	    return "" + v + (unitForProperty(key, v));
	  };

	  getCurrentProperties = function(el, keys) {
	    var isSVG, key, matrix, properties, style, v, _i, _j, _len, _len1, _ref;
	    properties = {};
	    isSVG = isSVGElement(el);
	    if (el.style != null) {
	      style = window.getComputedStyle(el, null);
	      for (_i = 0, _len = keys.length; _i < _len; _i++) {
	        key = keys[_i];
	        if (transformProperties.contains(key)) {
	          if (properties['transform'] == null) {
	            if (isSVG) {
	              matrix = new Matrix2D((_ref = el.transform.baseVal.consolidate()) != null ? _ref.matrix : void 0);
	            } else {
	              matrix = Matrix.fromTransform(style[propertyWithPrefix('transform')]);
	            }
	            properties['transform'] = matrix.decompose();
	          }
	        } else {
	          if ((el.hasAttribute != null) && el.hasAttribute(key)) {
	            v = el.getAttribute(key);
	          } else if (key in el) {
	            v = el[key];
	          } else {
	            v = style[key];
	          }
	          if (((v == null) || key === 'd') && svgProperties.contains(key)) {
	            v = el.getAttribute(key);
	          }
	          if (v === "" || (v == null)) {
	            v = defaultValueForKey(key);
	          }
	          properties[key] = createInterpolable(v);
	        }
	      }
	    } else {
	      for (_j = 0, _len1 = keys.length; _j < _len1; _j++) {
	        key = keys[_j];
	        properties[key] = createInterpolable(el[key]);
	      }
	    }
	    addUnitsToNumberInterpolables(el, properties);
	    return properties;
	  };

	  addUnitsToNumberInterpolables = function(el, properties) {
	    var interpolable, k;
	    for (k in properties) {
	      interpolable = properties[k];
	      if (interpolable instanceof InterpolableNumber && (el.style != null) && k in el.style) {
	        interpolable = new InterpolableString([interpolable, unitForProperty(k, 0)]);
	      }
	      properties[k] = interpolable;
	    }
	    return properties;
	  };

	  createInterpolable = function(value) {
	    var interpolable, klass, klasses, _i, _len;
	    klasses = [InterpolableArray, InterpolableObject, InterpolableNumber, InterpolableString];
	    for (_i = 0, _len = klasses.length; _i < _len; _i++) {
	      klass = klasses[_i];
	      interpolable = klass.create(value);
	      if (interpolable != null) {
	        return interpolable;
	      }
	    }
	    return null;
	  };

	  InterpolableString = (function() {
	    function InterpolableString(parts) {
	      this.parts = parts;
	      this.format = __bind(this.format, this);
	      this.interpolate = __bind(this.interpolate, this);
	    }

	    InterpolableString.prototype.interpolate = function(endInterpolable, t) {
	      var end, i, newParts, start, _i, _ref;
	      start = this.parts;
	      end = endInterpolable.parts;
	      newParts = [];
	      for (i = _i = 0, _ref = Math.min(start.length, end.length); 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
	        if (start[i].interpolate != null) {
	          newParts.push(start[i].interpolate(end[i], t));
	        } else {
	          newParts.push(start[i]);
	        }
	      }
	      return new InterpolableString(newParts);
	    };

	    InterpolableString.prototype.format = function() {
	      var parts;
	      parts = this.parts.map(function(val) {
	        if (val.format != null) {
	          return val.format();
	        } else {
	          return val;
	        }
	      });
	      return parts.join('');
	    };

	    InterpolableString.create = function(value) {
	      var index, match, matches, parts, re, type, types, _i, _j, _len, _len1;
	      value = "" + value;
	      matches = [];
	      types = [
	        {
	          re: /(#[a-f\d]{3,6})/ig,
	          klass: InterpolableColor,
	          parse: function(v) {
	            return v;
	          }
	        }, {
	          re: /(rgba?\([0-9.]*, ?[0-9.]*, ?[0-9.]*(?:, ?[0-9.]*)?\))/ig,
	          klass: InterpolableColor,
	          parse: function(v) {
	            return v;
	          }
	        }, {
	          re: /([-+]?[\d.]+)/ig,
	          klass: InterpolableNumber,
	          parse: parseFloat
	        }
	      ];
	      for (_i = 0, _len = types.length; _i < _len; _i++) {
	        type = types[_i];
	        re = type.re;
	        while (match = re.exec(value)) {
	          matches.push({
	            index: match.index,
	            length: match[1].length,
	            interpolable: type.klass.create(type.parse(match[1]))
	          });
	        }
	      }
	      matches = matches.sort(function(a, b) {
	        if (a.index > b.index) {
	          return 1;
	        } else {
	          return -1;
	        }
	      });
	      parts = [];
	      index = 0;
	      for (_j = 0, _len1 = matches.length; _j < _len1; _j++) {
	        match = matches[_j];
	        if (match.index < index) {
	          continue;
	        }
	        if (match.index > index) {
	          parts.push(value.substring(index, match.index));
	        }
	        parts.push(match.interpolable);
	        index = match.index + match.length;
	      }
	      if (index < value.length) {
	        parts.push(value.substring(index));
	      }
	      return new InterpolableString(parts);
	    };

	    return InterpolableString;

	  })();

	  InterpolableObject = (function() {
	    function InterpolableObject(obj) {
	      this.format = __bind(this.format, this);
	      this.interpolate = __bind(this.interpolate, this);
	      this.obj = obj;
	    }

	    InterpolableObject.prototype.interpolate = function(endInterpolable, t) {
	      var end, k, newObj, start, v;
	      start = this.obj;
	      end = endInterpolable.obj;
	      newObj = {};
	      for (k in start) {
	        v = start[k];
	        if (v.interpolate != null) {
	          newObj[k] = v.interpolate(end[k], t);
	        } else {
	          newObj[k] = v;
	        }
	      }
	      return new InterpolableObject(newObj);
	    };

	    InterpolableObject.prototype.format = function() {
	      return this.obj;
	    };

	    InterpolableObject.create = function(value) {
	      var k, obj, v;
	      if (value instanceof Object) {
	        obj = {};
	        for (k in value) {
	          v = value[k];
	          obj[k] = createInterpolable(v);
	        }
	        return new InterpolableObject(obj);
	      }
	      return null;
	    };

	    return InterpolableObject;

	  })();

	  InterpolableNumber = (function() {
	    function InterpolableNumber(value) {
	      this.format = __bind(this.format, this);
	      this.interpolate = __bind(this.interpolate, this);
	      this.value = parseFloat(value);
	    }

	    InterpolableNumber.prototype.interpolate = function(endInterpolable, t) {
	      var end, start;
	      start = this.value;
	      end = endInterpolable.value;
	      return new InterpolableNumber((end - start) * t + start);
	    };

	    InterpolableNumber.prototype.format = function() {
	      return roundf(this.value, 5);
	    };

	    InterpolableNumber.create = function(value) {
	      if (typeof value === 'number') {
	        return new InterpolableNumber(value);
	      }
	      return null;
	    };

	    return InterpolableNumber;

	  })();

	  InterpolableArray = (function() {
	    function InterpolableArray(values) {
	      this.values = values;
	      this.format = __bind(this.format, this);
	      this.interpolate = __bind(this.interpolate, this);
	    }

	    InterpolableArray.prototype.interpolate = function(endInterpolable, t) {
	      var end, i, newValues, start, _i, _ref;
	      start = this.values;
	      end = endInterpolable.values;
	      newValues = [];
	      for (i = _i = 0, _ref = Math.min(start.length, end.length); 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
	        if (start[i].interpolate != null) {
	          newValues.push(start[i].interpolate(end[i], t));
	        } else {
	          newValues.push(start[i]);
	        }
	      }
	      return new InterpolableArray(newValues);
	    };

	    InterpolableArray.prototype.format = function() {
	      return this.values.map(function(val) {
	        if (val.format != null) {
	          return val.format();
	        } else {
	          return val;
	        }
	      });
	    };

	    InterpolableArray.createFromArray = function(arr) {
	      var values;
	      values = arr.map(function(val) {
	        return createInterpolable(val) || val;
	      });
	      values = values.filter(function(val) {
	        return val != null;
	      });
	      return new InterpolableArray(values);
	    };

	    InterpolableArray.create = function(value) {
	      if (value instanceof Array) {
	        return InterpolableArray.createFromArray(value);
	      }
	      return null;
	    };

	    return InterpolableArray;

	  })();

	  Color = (function() {
	    function Color(rgb, format) {
	      this.rgb = rgb != null ? rgb : {};
	      this.format = format;
	      this.toRgba = __bind(this.toRgba, this);
	      this.toRgb = __bind(this.toRgb, this);
	      this.toHex = __bind(this.toHex, this);
	    }

	    Color.fromHex = function(hex) {
	      var hex3, result;
	      hex3 = hex.match(/^#([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i);
	      if (hex3 != null) {
	        hex = "#" + hex3[1] + hex3[1] + hex3[2] + hex3[2] + hex3[3] + hex3[3];
	      }
	      result = hex.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
	      if (result != null) {
	        return new Color({
	          r: parseInt(result[1], 16),
	          g: parseInt(result[2], 16),
	          b: parseInt(result[3], 16),
	          a: 1
	        }, "hex");
	      }
	      return null;
	    };

	    Color.fromRgb = function(rgb) {
	      var match, _ref;
	      match = rgb.match(/^rgba?\(([0-9.]*), ?([0-9.]*), ?([0-9.]*)(?:, ?([0-9.]*))?\)$/);
	      if (match != null) {
	        return new Color({
	          r: parseFloat(match[1]),
	          g: parseFloat(match[2]),
	          b: parseFloat(match[3]),
	          a: parseFloat((_ref = match[4]) != null ? _ref : 1)
	        }, match[4] != null ? "rgba" : "rgb");
	      }
	      return null;
	    };

	    Color.componentToHex = function(c) {
	      var hex;
	      hex = c.toString(16);
	      if (hex.length === 1) {
	        return "0" + hex;
	      } else {
	        return hex;
	      }
	    };

	    Color.prototype.toHex = function() {
	      return "#" + Color.componentToHex(this.rgb.r) + Color.componentToHex(this.rgb.g) + Color.componentToHex(this.rgb.b);
	    };

	    Color.prototype.toRgb = function() {
	      return "rgb(" + this.rgb.r + ", " + this.rgb.g + ", " + this.rgb.b + ")";
	    };

	    Color.prototype.toRgba = function() {
	      return "rgba(" + this.rgb.r + ", " + this.rgb.g + ", " + this.rgb.b + ", " + this.rgb.a + ")";
	    };

	    return Color;

	  })();

	  InterpolableColor = (function() {
	    function InterpolableColor(color) {
	      this.color = color;
	      this.format = __bind(this.format, this);
	      this.interpolate = __bind(this.interpolate, this);
	    }

	    InterpolableColor.prototype.interpolate = function(endInterpolable, t) {
	      var end, k, rgb, start, v, _i, _len, _ref;
	      start = this.color;
	      end = endInterpolable.color;
	      rgb = {};
	      _ref = ['r', 'g', 'b'];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        k = _ref[_i];
	        v = Math.round((end.rgb[k] - start.rgb[k]) * t + start.rgb[k]);
	        rgb[k] = Math.min(255, Math.max(0, v));
	      }
	      k = "a";
	      v = roundf((end.rgb[k] - start.rgb[k]) * t + start.rgb[k], 5);
	      rgb[k] = Math.min(1, Math.max(0, v));
	      return new InterpolableColor(new Color(rgb, end.format));
	    };

	    InterpolableColor.prototype.format = function() {
	      if (this.color.format === "hex") {
	        return this.color.toHex();
	      } else if (this.color.format === "rgb") {
	        return this.color.toRgb();
	      } else if (this.color.format === "rgba") {
	        return this.color.toRgba();
	      }
	    };

	    InterpolableColor.create = function(value) {
	      var color;
	      if (typeof value !== "string") {
	        return;
	      }
	      color = Color.fromHex(value) || Color.fromRgb(value);
	      if (color != null) {
	        return new InterpolableColor(color);
	      }
	      return null;
	    };

	    return InterpolableColor;

	  })();

	  DecomposedMatrix2D = (function() {
	    function DecomposedMatrix2D(props) {
	      this.props = props;
	      this.applyRotateCenter = __bind(this.applyRotateCenter, this);
	      this.format = __bind(this.format, this);
	      this.interpolate = __bind(this.interpolate, this);
	    }

	    DecomposedMatrix2D.prototype.interpolate = function(endMatrix, t) {
	      var i, k, newProps, _i, _j, _k, _l, _len, _len1, _ref, _ref1, _ref2;
	      newProps = {};
	      _ref = ['translate', 'scale', 'rotate'];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        k = _ref[_i];
	        newProps[k] = [];
	        for (i = _j = 0, _ref1 = this.props[k].length; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
	          newProps[k][i] = (endMatrix.props[k][i] - this.props[k][i]) * t + this.props[k][i];
	        }
	      }
	      for (i = _k = 1; _k <= 2; i = ++_k) {
	        newProps['rotate'][i] = endMatrix.props['rotate'][i];
	      }
	      _ref2 = ['skew'];
	      for (_l = 0, _len1 = _ref2.length; _l < _len1; _l++) {
	        k = _ref2[_l];
	        newProps[k] = (endMatrix.props[k] - this.props[k]) * t + this.props[k];
	      }
	      return new DecomposedMatrix2D(newProps);
	    };

	    DecomposedMatrix2D.prototype.format = function() {
	      return "translate(" + (this.props.translate.join(',')) + ") rotate(" + (this.props.rotate.join(',')) + ") skewX(" + this.props.skew + ") scale(" + (this.props.scale.join(',')) + ")";
	    };

	    DecomposedMatrix2D.prototype.applyRotateCenter = function(rotateC) {
	      var i, m, m2d, negativeTranslate, _i, _results;
	      m = baseSVG.createSVGMatrix();
	      m = m.translate(rotateC[0], rotateC[1]);
	      m = m.rotate(this.props.rotate[0]);
	      m = m.translate(-rotateC[0], -rotateC[1]);
	      m2d = new Matrix2D(m);
	      negativeTranslate = m2d.decompose().props.translate;
	      _results = [];
	      for (i = _i = 0; _i <= 1; i = ++_i) {
	        _results.push(this.props.translate[i] -= negativeTranslate[i]);
	      }
	      return _results;
	    };

	    return DecomposedMatrix2D;

	  })();

	  baseSVG = typeof document !== "undefined" && document !== null ? document.createElementNS("http://www.w3.org/2000/svg", "svg") : void 0;

	  Matrix2D = (function() {
	    function Matrix2D(m) {
	      this.m = m;
	      this.applyProperties = __bind(this.applyProperties, this);
	      this.decompose = __bind(this.decompose, this);
	      if (!this.m) {
	        this.m = baseSVG.createSVGMatrix();
	      }
	    }

	    Matrix2D.prototype.decompose = function() {
	      var kx, ky, kz, r0, r1;
	      r0 = new Vector([this.m.a, this.m.b]);
	      r1 = new Vector([this.m.c, this.m.d]);
	      kx = r0.length();
	      kz = r0.dot(r1);
	      r0 = r0.normalize();
	      ky = r1.combine(r0, 1, -kz).length();
	      return new DecomposedMatrix2D({
	        translate: [this.m.e, this.m.f],
	        rotate: [Math.atan2(this.m.b, this.m.a) * 180 / Math.PI, this.rotateCX, this.rotateCY],
	        scale: [kx, ky],
	        skew: kz / ky * 180 / Math.PI
	      });
	    };

	    Matrix2D.prototype.applyProperties = function(properties) {
	      var hash, k, props, v, _i, _len, _ref, _ref1;
	      hash = {};
	      for (_i = 0, _len = properties.length; _i < _len; _i++) {
	        props = properties[_i];
	        hash[props[0]] = props[1];
	      }
	      for (k in hash) {
	        v = hash[k];
	        if (k === "translateX") {
	          this.m = this.m.translate(v, 0);
	        } else if (k === "translateY") {
	          this.m = this.m.translate(0, v);
	        } else if (k === "scaleX") {
	          this.m = this.m.scaleNonUniform(v, 1);
	        } else if (k === "scaleY") {
	          this.m = this.m.scaleNonUniform(1, v);
	        } else if (k === "rotateZ") {
	          this.m = this.m.rotate(v);
	        } else if (k === "skewX") {
	          this.m = this.m.skewX(v);
	        } else if (k === "skewY") {
	          this.m = this.m.skewY(v);
	        }
	      }
	      this.rotateCX = (_ref = hash.rotateCX) != null ? _ref : 0;
	      return this.rotateCY = (_ref1 = hash.rotateCY) != null ? _ref1 : 0;
	    };

	    return Matrix2D;

	  })();

	  Vector = (function() {
	    function Vector(els) {
	      this.els = els;
	      this.combine = __bind(this.combine, this);
	      this.normalize = __bind(this.normalize, this);
	      this.length = __bind(this.length, this);
	      this.cross = __bind(this.cross, this);
	      this.dot = __bind(this.dot, this);
	      this.e = __bind(this.e, this);
	    }

	    Vector.prototype.e = function(i) {
	      if (i < 1 || i > this.els.length) {
	        return null;
	      } else {
	        return this.els[i - 1];
	      }
	    };

	    Vector.prototype.dot = function(vector) {
	      var V, n, product;
	      V = vector.els || vector;
	      product = 0;
	      n = this.els.length;
	      if (n !== V.length) {
	        return null;
	      }
	      n += 1;
	      while (--n) {
	        product += this.els[n - 1] * V[n - 1];
	      }
	      return product;
	    };

	    Vector.prototype.cross = function(vector) {
	      var A, B;
	      B = vector.els || vector;
	      if (this.els.length !== 3 || B.length !== 3) {
	        return null;
	      }
	      A = this.els;
	      return new Vector([(A[1] * B[2]) - (A[2] * B[1]), (A[2] * B[0]) - (A[0] * B[2]), (A[0] * B[1]) - (A[1] * B[0])]);
	    };

	    Vector.prototype.length = function() {
	      var a, e, _i, _len, _ref;
	      a = 0;
	      _ref = this.els;
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        e = _ref[_i];
	        a += Math.pow(e, 2);
	      }
	      return Math.sqrt(a);
	    };

	    Vector.prototype.normalize = function() {
	      var e, i, length, newElements, _ref;
	      length = this.length();
	      newElements = [];
	      _ref = this.els;
	      for (i in _ref) {
	        e = _ref[i];
	        newElements[i] = e / length;
	      }
	      return new Vector(newElements);
	    };

	    Vector.prototype.combine = function(b, ascl, bscl) {
	      var i, result, _i, _ref;
	      result = [];
	      for (i = _i = 0, _ref = this.els.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
	        result[i] = (ascl * this.els[i]) + (bscl * b.els[i]);
	      }
	      return new Vector(result);
	    };

	    return Vector;

	  })();

	  DecomposedMatrix = (function() {
	    function DecomposedMatrix() {
	      this.toMatrix = __bind(this.toMatrix, this);
	      this.format = __bind(this.format, this);
	      this.interpolate = __bind(this.interpolate, this);
	    }

	    DecomposedMatrix.prototype.interpolate = function(decomposedB, t, only) {
	      var angle, decomposed, decomposedA, i, invscale, invth, k, qa, qb, scale, th, _i, _j, _k, _l, _len, _ref, _ref1;
	      if (only == null) {
	        only = null;
	      }
	      decomposedA = this;
	      decomposed = new DecomposedMatrix;
	      _ref = ['translate', 'scale', 'skew', 'perspective'];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        k = _ref[_i];
	        decomposed[k] = [];
	        for (i = _j = 0, _ref1 = decomposedA[k].length - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
	          if ((only == null) || only.indexOf(k) > -1 || only.indexOf("" + k + ['x', 'y', 'z'][i]) > -1) {
	            decomposed[k][i] = (decomposedB[k][i] - decomposedA[k][i]) * t + decomposedA[k][i];
	          } else {
	            decomposed[k][i] = decomposedA[k][i];
	          }
	        }
	      }
	      if ((only == null) || only.indexOf('rotate') !== -1) {
	        qa = decomposedA.quaternion;
	        qb = decomposedB.quaternion;
	        angle = qa[0] * qb[0] + qa[1] * qb[1] + qa[2] * qb[2] + qa[3] * qb[3];
	        if (angle < 0.0) {
	          for (i = _k = 0; _k <= 3; i = ++_k) {
	            qa[i] = -qa[i];
	          }
	          angle = -angle;
	        }
	        if (angle + 1.0 > .05) {
	          if (1.0 - angle >= .05) {
	            th = Math.acos(angle);
	            invth = 1.0 / Math.sin(th);
	            scale = Math.sin(th * (1.0 - t)) * invth;
	            invscale = Math.sin(th * t) * invth;
	          } else {
	            scale = 1.0 - t;
	            invscale = t;
	          }
	        } else {
	          qb[0] = -qa[1];
	          qb[1] = qa[0];
	          qb[2] = -qa[3];
	          qb[3] = qa[2];
	          scale = Math.sin(piDouble * (.5 - t));
	          invscale = Math.sin(piDouble * t);
	        }
	        decomposed.quaternion = [];
	        for (i = _l = 0; _l <= 3; i = ++_l) {
	          decomposed.quaternion[i] = qa[i] * scale + qb[i] * invscale;
	        }
	      } else {
	        decomposed.quaternion = decomposedA.quaternion;
	      }
	      return decomposed;
	    };

	    DecomposedMatrix.prototype.format = function() {
	      return this.toMatrix().toString();
	    };

	    DecomposedMatrix.prototype.toMatrix = function() {
	      var decomposedMatrix, i, j, match, matrix, quaternion, skew, temp, w, x, y, z, _i, _j, _k, _l;
	      decomposedMatrix = this;
	      matrix = Matrix.I(4);
	      for (i = _i = 0; _i <= 3; i = ++_i) {
	        matrix.els[i][3] = decomposedMatrix.perspective[i];
	      }
	      quaternion = decomposedMatrix.quaternion;
	      x = quaternion[0];
	      y = quaternion[1];
	      z = quaternion[2];
	      w = quaternion[3];
	      skew = decomposedMatrix.skew;
	      match = [[1, 0], [2, 0], [2, 1]];
	      for (i = _j = 2; _j >= 0; i = --_j) {
	        if (skew[i]) {
	          temp = Matrix.I(4);
	          temp.els[match[i][0]][match[i][1]] = skew[i];
	          matrix = matrix.multiply(temp);
	        }
	      }
	      matrix = matrix.multiply(new Matrix([[1 - 2 * (y * y + z * z), 2 * (x * y - z * w), 2 * (x * z + y * w), 0], [2 * (x * y + z * w), 1 - 2 * (x * x + z * z), 2 * (y * z - x * w), 0], [2 * (x * z - y * w), 2 * (y * z + x * w), 1 - 2 * (x * x + y * y), 0], [0, 0, 0, 1]]));
	      for (i = _k = 0; _k <= 2; i = ++_k) {
	        for (j = _l = 0; _l <= 2; j = ++_l) {
	          matrix.els[i][j] *= decomposedMatrix.scale[i];
	        }
	        matrix.els[3][i] = decomposedMatrix.translate[i];
	      }
	      return matrix;
	    };

	    return DecomposedMatrix;

	  })();

	  Matrix = (function() {
	    function Matrix(els) {
	      this.els = els;
	      this.toString = __bind(this.toString, this);
	      this.decompose = __bind(this.decompose, this);
	      this.inverse = __bind(this.inverse, this);
	      this.augment = __bind(this.augment, this);
	      this.toRightTriangular = __bind(this.toRightTriangular, this);
	      this.transpose = __bind(this.transpose, this);
	      this.multiply = __bind(this.multiply, this);
	      this.dup = __bind(this.dup, this);
	      this.e = __bind(this.e, this);
	    }

	    Matrix.prototype.e = function(i, j) {
	      if (i < 1 || i > this.els.length || j < 1 || j > this.els[0].length) {
	        return null;
	      }
	      return this.els[i - 1][j - 1];
	    };

	    Matrix.prototype.dup = function() {
	      return new Matrix(this.els);
	    };

	    Matrix.prototype.multiply = function(matrix) {
	      var M, c, cols, elements, i, j, ki, kj, nc, ni, nj, returnVector, sum;
	      returnVector = matrix.modulus ? true : false;
	      M = matrix.els || matrix;
	      if (typeof M[0][0] === 'undefined') {
	        M = new Matrix(M).els;
	      }
	      ni = this.els.length;
	      ki = ni;
	      kj = M[0].length;
	      cols = this.els[0].length;
	      elements = [];
	      ni += 1;
	      while (--ni) {
	        i = ki - ni;
	        elements[i] = [];
	        nj = kj;
	        nj += 1;
	        while (--nj) {
	          j = kj - nj;
	          sum = 0;
	          nc = cols;
	          nc += 1;
	          while (--nc) {
	            c = cols - nc;
	            sum += this.els[i][c] * M[c][j];
	          }
	          elements[i][j] = sum;
	        }
	      }
	      M = new Matrix(elements);
	      if (returnVector) {
	        return M.col(1);
	      } else {
	        return M;
	      }
	    };

	    Matrix.prototype.transpose = function() {
	      var cols, elements, i, j, ni, nj, rows;
	      rows = this.els.length;
	      cols = this.els[0].length;
	      elements = [];
	      ni = cols;
	      ni += 1;
	      while (--ni) {
	        i = cols - ni;
	        elements[i] = [];
	        nj = rows;
	        nj += 1;
	        while (--nj) {
	          j = rows - nj;
	          elements[i][j] = this.els[j][i];
	        }
	      }
	      return new Matrix(elements);
	    };

	    Matrix.prototype.toRightTriangular = function() {
	      var M, els, i, j, k, kp, multiplier, n, np, p, _i, _j, _ref, _ref1;
	      M = this.dup();
	      n = this.els.length;
	      k = n;
	      kp = this.els[0].length;
	      while (--n) {
	        i = k - n;
	        if (M.els[i][i] === 0) {
	          for (j = _i = _ref = i + 1; _ref <= k ? _i < k : _i > k; j = _ref <= k ? ++_i : --_i) {
	            if (M.els[j][i] !== 0) {
	              els = [];
	              np = kp;
	              np += 1;
	              while (--np) {
	                p = kp - np;
	                els.push(M.els[i][p] + M.els[j][p]);
	              }
	              M.els[i] = els;
	              break;
	            }
	          }
	        }
	        if (M.els[i][i] !== 0) {
	          for (j = _j = _ref1 = i + 1; _ref1 <= k ? _j < k : _j > k; j = _ref1 <= k ? ++_j : --_j) {
	            multiplier = M.els[j][i] / M.els[i][i];
	            els = [];
	            np = kp;
	            np += 1;
	            while (--np) {
	              p = kp - np;
	              els.push(p <= i ? 0 : M.els[j][p] - M.els[i][p] * multiplier);
	            }
	            M.els[j] = els;
	          }
	        }
	      }
	      return M;
	    };

	    Matrix.prototype.augment = function(matrix) {
	      var M, T, cols, i, j, ki, kj, ni, nj;
	      M = matrix.els || matrix;
	      if (typeof M[0][0] === 'undefined') {
	        M = new Matrix(M).els;
	      }
	      T = this.dup();
	      cols = T.els[0].length;
	      ni = T.els.length;
	      ki = ni;
	      kj = M[0].length;
	      if (ni !== M.length) {
	        return null;
	      }
	      ni += 1;
	      while (--ni) {
	        i = ki - ni;
	        nj = kj;
	        nj += 1;
	        while (--nj) {
	          j = kj - nj;
	          T.els[i][cols + j] = M[i][j];
	        }
	      }
	      return T;
	    };

	    Matrix.prototype.inverse = function() {
	      var M, divisor, els, i, inverse_elements, j, ki, kp, new_element, ni, np, p, _i;
	      ni = this.els.length;
	      ki = ni;
	      M = this.augment(Matrix.I(ni)).toRightTriangular();
	      kp = M.els[0].length;
	      inverse_elements = [];
	      ni += 1;
	      while (--ni) {
	        i = ni - 1;
	        els = [];
	        np = kp;
	        inverse_elements[i] = [];
	        divisor = M.els[i][i];
	        np += 1;
	        while (--np) {
	          p = kp - np;
	          new_element = M.els[i][p] / divisor;
	          els.push(new_element);
	          if (p >= ki) {
	            inverse_elements[i].push(new_element);
	          }
	        }
	        M.els[i] = els;
	        for (j = _i = 0; 0 <= i ? _i < i : _i > i; j = 0 <= i ? ++_i : --_i) {
	          els = [];
	          np = kp;
	          np += 1;
	          while (--np) {
	            p = kp - np;
	            els.push(M.els[j][p] - M.els[i][p] * M.els[j][i]);
	          }
	          M.els[j] = els;
	        }
	      }
	      return new Matrix(inverse_elements);
	    };

	    Matrix.I = function(n) {
	      var els, i, j, k, nj;
	      els = [];
	      k = n;
	      n += 1;
	      while (--n) {
	        i = k - n;
	        els[i] = [];
	        nj = k;
	        nj += 1;
	        while (--nj) {
	          j = k - nj;
	          els[i][j] = i === j ? 1 : 0;
	        }
	      }
	      return new Matrix(els);
	    };

	    Matrix.prototype.decompose = function() {
	      var els, i, inversePerspectiveMatrix, j, k, matrix, pdum3, perspective, perspectiveMatrix, quaternion, result, rightHandSide, rotate, row, rowElement, s, scale, skew, t, translate, transposedInversePerspectiveMatrix, type, typeKey, v, w, x, y, z, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
	      matrix = this;
	      translate = [];
	      scale = [];
	      skew = [];
	      quaternion = [];
	      perspective = [];
	      els = [];
	      for (i = _i = 0; _i <= 3; i = ++_i) {
	        els[i] = [];
	        for (j = _j = 0; _j <= 3; j = ++_j) {
	          els[i][j] = matrix.els[i][j];
	        }
	      }
	      if (els[3][3] === 0) {
	        return false;
	      }
	      for (i = _k = 0; _k <= 3; i = ++_k) {
	        for (j = _l = 0; _l <= 3; j = ++_l) {
	          els[i][j] /= els[3][3];
	        }
	      }
	      perspectiveMatrix = matrix.dup();
	      for (i = _m = 0; _m <= 2; i = ++_m) {
	        perspectiveMatrix.els[i][3] = 0;
	      }
	      perspectiveMatrix.els[3][3] = 1;
	      if (els[0][3] !== 0 || els[1][3] !== 0 || els[2][3] !== 0) {
	        rightHandSide = new Vector(els.slice(0, 4)[3]);
	        inversePerspectiveMatrix = perspectiveMatrix.inverse();
	        transposedInversePerspectiveMatrix = inversePerspectiveMatrix.transpose();
	        perspective = transposedInversePerspectiveMatrix.multiply(rightHandSide).els;
	        for (i = _n = 0; _n <= 2; i = ++_n) {
	          els[i][3] = 0;
	        }
	        els[3][3] = 1;
	      } else {
	        perspective = [0, 0, 0, 1];
	      }
	      for (i = _o = 0; _o <= 2; i = ++_o) {
	        translate[i] = els[3][i];
	        els[3][i] = 0;
	      }
	      row = [];
	      for (i = _p = 0; _p <= 2; i = ++_p) {
	        row[i] = new Vector(els[i].slice(0, 3));
	      }
	      scale[0] = row[0].length();
	      row[0] = row[0].normalize();
	      skew[0] = row[0].dot(row[1]);
	      row[1] = row[1].combine(row[0], 1.0, -skew[0]);
	      scale[1] = row[1].length();
	      row[1] = row[1].normalize();
	      skew[0] /= scale[1];
	      skew[1] = row[0].dot(row[2]);
	      row[2] = row[2].combine(row[0], 1.0, -skew[1]);
	      skew[2] = row[1].dot(row[2]);
	      row[2] = row[2].combine(row[1], 1.0, -skew[2]);
	      scale[2] = row[2].length();
	      row[2] = row[2].normalize();
	      skew[1] /= scale[2];
	      skew[2] /= scale[2];
	      pdum3 = row[1].cross(row[2]);
	      if (row[0].dot(pdum3) < 0) {
	        for (i = _q = 0; _q <= 2; i = ++_q) {
	          scale[i] *= -1;
	          for (j = _r = 0; _r <= 2; j = ++_r) {
	            row[i].els[j] *= -1;
	          }
	        }
	      }
	      rowElement = function(index, elementIndex) {
	        return row[index].els[elementIndex];
	      };
	      rotate = [];
	      rotate[1] = Math.asin(-rowElement(0, 2));
	      if (Math.cos(rotate[1]) !== 0) {
	        rotate[0] = Math.atan2(rowElement(1, 2), rowElement(2, 2));
	        rotate[2] = Math.atan2(rowElement(0, 1), rowElement(0, 0));
	      } else {
	        rotate[0] = Math.atan2(-rowElement(2, 0), rowElement(1, 1));
	        rotate[1] = 0;
	      }
	      t = rowElement(0, 0) + rowElement(1, 1) + rowElement(2, 2) + 1.0;
	      if (t > 1e-4) {
	        s = 0.5 / Math.sqrt(t);
	        w = 0.25 / s;
	        x = (rowElement(2, 1) - rowElement(1, 2)) * s;
	        y = (rowElement(0, 2) - rowElement(2, 0)) * s;
	        z = (rowElement(1, 0) - rowElement(0, 1)) * s;
	      } else if ((rowElement(0, 0) > rowElement(1, 1)) && (rowElement(0, 0) > rowElement(2, 2))) {
	        s = Math.sqrt(1.0 + rowElement(0, 0) - rowElement(1, 1) - rowElement(2, 2)) * 2.0;
	        x = 0.25 * s;
	        y = (rowElement(0, 1) + rowElement(1, 0)) / s;
	        z = (rowElement(0, 2) + rowElement(2, 0)) / s;
	        w = (rowElement(2, 1) - rowElement(1, 2)) / s;
	      } else if (rowElement(1, 1) > rowElement(2, 2)) {
	        s = Math.sqrt(1.0 + rowElement(1, 1) - rowElement(0, 0) - rowElement(2, 2)) * 2.0;
	        x = (rowElement(0, 1) + rowElement(1, 0)) / s;
	        y = 0.25 * s;
	        z = (rowElement(1, 2) + rowElement(2, 1)) / s;
	        w = (rowElement(0, 2) - rowElement(2, 0)) / s;
	      } else {
	        s = Math.sqrt(1.0 + rowElement(2, 2) - rowElement(0, 0) - rowElement(1, 1)) * 2.0;
	        x = (rowElement(0, 2) + rowElement(2, 0)) / s;
	        y = (rowElement(1, 2) + rowElement(2, 1)) / s;
	        z = 0.25 * s;
	        w = (rowElement(1, 0) - rowElement(0, 1)) / s;
	      }
	      quaternion = [x, y, z, w];
	      result = new DecomposedMatrix;
	      result.translate = translate;
	      result.scale = scale;
	      result.skew = skew;
	      result.quaternion = quaternion;
	      result.perspective = perspective;
	      result.rotate = rotate;
	      for (typeKey in result) {
	        type = result[typeKey];
	        for (k in type) {
	          v = type[k];
	          if (isNaN(v)) {
	            type[k] = 0;
	          }
	        }
	      }
	      return result;
	    };

	    Matrix.prototype.toString = function() {
	      var i, j, str, _i, _j;
	      str = 'matrix3d(';
	      for (i = _i = 0; _i <= 3; i = ++_i) {
	        for (j = _j = 0; _j <= 3; j = ++_j) {
	          str += roundf(this.els[i][j], 10);
	          if (!(i === 3 && j === 3)) {
	            str += ',';
	          }
	        }
	      }
	      str += ')';
	      return str;
	    };

	    Matrix.matrixForTransform = cacheFn(function(transform) {
	      var matrixEl, result, style, _ref, _ref1, _ref2;
	      matrixEl = document.createElement('div');
	      matrixEl.style.position = 'absolute';
	      matrixEl.style.visibility = 'hidden';
	      matrixEl.style[propertyWithPrefix("transform")] = transform;
	      document.body.appendChild(matrixEl);
	      style = window.getComputedStyle(matrixEl, null);
	      result = (_ref = (_ref1 = style.transform) != null ? _ref1 : style[propertyWithPrefix("transform")]) != null ? _ref : (_ref2 = dynamics.tests) != null ? _ref2.matrixForTransform(transform) : void 0;
	      document.body.removeChild(matrixEl);
	      return result;
	    });

	    Matrix.fromTransform = function(transform) {
	      var digits, elements, i, match, matrixElements, _i;
	      match = transform != null ? transform.match(/matrix3?d?\(([-0-9,e \.]*)\)/) : void 0;
	      if (match) {
	        digits = match[1].split(',');
	        digits = digits.map(parseFloat);
	        if (digits.length === 6) {
	          elements = [digits[0], digits[1], 0, 0, digits[2], digits[3], 0, 0, 0, 0, 1, 0, digits[4], digits[5], 0, 1];
	        } else {
	          elements = digits;
	        }
	      } else {
	        elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	      }
	      matrixElements = [];
	      for (i = _i = 0; _i <= 3; i = ++_i) {
	        matrixElements.push(elements.slice(i * 4, i * 4 + 4));
	      }
	      return new Matrix(matrixElements);
	    };

	    return Matrix;

	  })();

	  prefixFor = cacheFn(function(property) {
	    var k, prefix, prop, propArray, propertyName, _i, _j, _len, _len1, _ref;
	    if (document.body.style[property] !== void 0) {
	      return '';
	    }
	    propArray = property.split('-');
	    propertyName = "";
	    for (_i = 0, _len = propArray.length; _i < _len; _i++) {
	      prop = propArray[_i];
	      propertyName += prop.substring(0, 1).toUpperCase() + prop.substring(1);
	    }
	    _ref = ["Webkit", "Moz", "ms"];
	    for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
	      prefix = _ref[_j];
	      k = prefix + propertyName;
	      if (document.body.style[k] !== void 0) {
	        return prefix;
	      }
	    }
	    return '';
	  });

	  propertyWithPrefix = cacheFn(function(property) {
	    var prefix;
	    prefix = prefixFor(property);
	    if (prefix === 'Moz') {
	      return "" + prefix + (property.substring(0, 1).toUpperCase() + property.substring(1));
	    }
	    if (prefix !== '') {
	      return "-" + (prefix.toLowerCase()) + "-" + (toDashed(property));
	    }
	    return toDashed(property);
	  });

	  rAF = typeof window !== "undefined" && window !== null ? window.requestAnimationFrame : void 0;

	  animations = [];

	  animationsTimeouts = [];

	  slow = false;

	  slowRatio = 1;

	  if (typeof window !== "undefined" && window !== null) {
	    window.addEventListener('keyup', function(e) {
	      if (e.keyCode === 68 && e.shiftKey && e.ctrlKey) {
	        return dynamics.toggleSlow();
	      }
	    });
	  }

	  if (rAF == null) {
	    lastTime = 0;
	    rAF = function(callback) {
	      var currTime, id, timeToCall;
	      currTime = Date.now();
	      timeToCall = Math.max(0, 16 - (currTime - lastTime));
	      id = window.setTimeout(function() {
	        return callback(currTime + timeToCall);
	      }, timeToCall);
	      lastTime = currTime + timeToCall;
	      return id;
	    };
	  }

	  runLoopRunning = false;

	  runLoopPaused = false;

	  startRunLoop = function() {
	    if (!runLoopRunning) {
	      runLoopRunning = true;
	      return rAF(runLoopTick);
	    }
	  };

	  runLoopTick = function(t) {
	    var animation, toRemoveAnimations, _i, _len;
	    if (runLoopPaused) {
	      rAF(runLoopTick);
	      return;
	    }
	    toRemoveAnimations = [];
	    for (_i = 0, _len = animations.length; _i < _len; _i++) {
	      animation = animations[_i];
	      if (!animationTick(t, animation)) {
	        toRemoveAnimations.push(animation);
	      }
	    }
	    animations = animations.filter(function(animation) {
	      return toRemoveAnimations.indexOf(animation) === -1;
	    });
	    if (animations.length === 0) {
	      return runLoopRunning = false;
	    } else {
	      return rAF(runLoopTick);
	    }
	  };

	  animationTick = function(t, animation) {
	    var key, properties, property, tt, y, _base, _base1, _ref;
	    if (animation.tStart == null) {
	      animation.tStart = t;
	    }
	    tt = (t - animation.tStart) / animation.options.duration;
	    y = animation.curve(tt);
	    properties = {};
	    if (tt >= 1) {
	      if (animation.curve.returnsToSelf) {
	        properties = animation.properties.start;
	      } else {
	        properties = animation.properties.end;
	      }
	    } else {
	      _ref = animation.properties.start;
	      for (key in _ref) {
	        property = _ref[key];
	        properties[key] = interpolate(property, animation.properties.end[key], y);
	      }
	    }
	    applyFrame(animation.el, properties);
	    if (typeof (_base = animation.options).change === "function") {
	      _base.change(animation.el, Math.min(1, tt));
	    }
	    if (tt >= 1) {
	      if (typeof (_base1 = animation.options).complete === "function") {
	        _base1.complete(animation.el);
	      }
	    }
	    return tt < 1;
	  };

	  interpolate = function(start, end, y) {
	    if ((start != null) && (start.interpolate != null)) {
	      return start.interpolate(end, y);
	    }
	    return null;
	  };

	  startAnimation = function(el, properties, options, timeoutId) {
	    var endProperties, isSVG, k, matrix, startProperties, transforms, v;
	    if (timeoutId != null) {
	      animationsTimeouts = animationsTimeouts.filter(function(timeout) {
	        return timeout.id !== timeoutId;
	      });
	    }
	    dynamics.stop(el, {
	      timeout: false
	    });
	    if (!options.animated) {
	      dynamics.css(el, properties);
	      if (typeof options.complete === "function") {
	        options.complete(this);
	      }
	      return;
	    }
	    startProperties = getCurrentProperties(el, Object.keys(properties));
	    properties = parseProperties(properties);
	    endProperties = {};
	    transforms = [];
	    for (k in properties) {
	      v = properties[k];
	      if ((el.style != null) && transformProperties.contains(k)) {
	        transforms.push([k, v]);
	      } else {
	        endProperties[k] = createInterpolable(v);
	      }
	    }
	    if (transforms.length > 0) {
	      isSVG = isSVGElement(el);
	      if (isSVG) {
	        matrix = new Matrix2D();
	        matrix.applyProperties(transforms);
	      } else {
	        v = (transforms.map(function(transform) {
	          return transformValueForProperty(transform[0], transform[1]);
	        })).join(" ");
	        matrix = Matrix.fromTransform(Matrix.matrixForTransform(v));
	      }
	      endProperties['transform'] = matrix.decompose();
	      if (isSVG) {
	        startProperties.transform.applyRotateCenter([endProperties.transform.props.rotate[1], endProperties.transform.props.rotate[2]]);
	      }
	    }
	    addUnitsToNumberInterpolables(el, endProperties);
	    animations.push({
	      el: el,
	      properties: {
	        start: startProperties,
	        end: endProperties
	      },
	      options: options,
	      curve: options.type.call(options.type, options)
	    });
	    return startRunLoop();
	  };

	  timeouts = [];

	  timeoutLastId = 0;

	  setRealTimeout = function(timeout) {
	    if (!isDocumentVisible()) {
	      return;
	    }
	    return rAF(function() {
	      if (timeouts.indexOf(timeout) === -1) {
	        return;
	      }
	      return timeout.realTimeoutId = setTimeout(function() {
	        timeout.fn();
	        return cancelTimeout(timeout.id);
	      }, timeout.delay);
	    });
	  };

	  addTimeout = function(fn, delay) {
	    var timeout;
	    timeoutLastId += 1;
	    timeout = {
	      id: timeoutLastId,
	      tStart: Date.now(),
	      fn: fn,
	      delay: delay,
	      originalDelay: delay
	    };
	    setRealTimeout(timeout);
	    timeouts.push(timeout);
	    return timeoutLastId;
	  };

	  cancelTimeout = function(id) {
	    return timeouts = timeouts.filter(function(timeout) {
	      if (timeout.id === id && timeout.realTimeoutId) {
	        clearTimeout(timeout.realTimeoutId);
	      }
	      return timeout.id !== id;
	    });
	  };

	  leftDelayForTimeout = function(time, timeout) {
	    var consumedDelay;
	    if (time != null) {
	      consumedDelay = time - timeout.tStart;
	      return timeout.originalDelay - consumedDelay;
	    } else {
	      return timeout.originalDelay;
	    }
	  };

	  if (typeof window !== "undefined" && window !== null) {
	    window.addEventListener('unload', function() {});
	  }

	  timeBeforeVisibilityChange = null;

	  observeVisibilityChange(function(visible) {
	    var animation, difference, timeout, _i, _j, _k, _len, _len1, _len2, _results;
	    runLoopPaused = !visible;
	    if (!visible) {
	      timeBeforeVisibilityChange = Date.now();
	      _results = [];
	      for (_i = 0, _len = timeouts.length; _i < _len; _i++) {
	        timeout = timeouts[_i];
	        _results.push(clearTimeout(timeout.realTimeoutId));
	      }
	      return _results;
	    } else {
	      if (runLoopRunning) {
	        difference = Date.now() - timeBeforeVisibilityChange;
	        for (_j = 0, _len1 = animations.length; _j < _len1; _j++) {
	          animation = animations[_j];
	          if (animation.tStart != null) {
	            animation.tStart += difference;
	          }
	        }
	      }
	      for (_k = 0, _len2 = timeouts.length; _k < _len2; _k++) {
	        timeout = timeouts[_k];
	        timeout.delay = leftDelayForTimeout(timeBeforeVisibilityChange, timeout);
	        setRealTimeout(timeout);
	      }
	      return timeBeforeVisibilityChange = null;
	    }
	  });

	  dynamics = {};

	  dynamics.linear = function() {
	    return function(t) {
	      return t;
	    };
	  };

	  dynamics.spring = function(options) {
	    var A1, A2, decal, frequency, friction, s;
	    if (options == null) {
	      options = {};
	    }
	    applyDefaults(options, dynamics.spring.defaults);
	    frequency = Math.max(1, options.frequency / 20);
	    friction = Math.pow(20, options.friction / 100);
	    s = options.anticipationSize / 1000;
	    decal = Math.max(0, s);
	    A1 = function(t) {
	      var M, a, b, x0, x1;
	      M = 0.8;
	      x0 = s / (1 - s);
	      x1 = 0;
	      b = (x0 - (M * x1)) / (x0 - x1);
	      a = (M - b) / x0;
	      return (a * t * options.anticipationStrength / 100) + b;
	    };
	    A2 = function(t) {
	      return Math.pow(friction / 10, -t) * (1 - t);
	    };
	    return function(t) {
	      var A, At, a, angle, b, frictionT, y0, yS;
	      frictionT = (t / (1 - s)) - (s / (1 - s));
	      if (t < s) {
	        yS = (s / (1 - s)) - (s / (1 - s));
	        y0 = (0 / (1 - s)) - (s / (1 - s));
	        b = Math.acos(1 / A1(yS));
	        a = (Math.acos(1 / A1(y0)) - b) / (frequency * (-s));
	        A = A1;
	      } else {
	        A = A2;
	        b = 0;
	        a = 1;
	      }
	      At = A(frictionT);
	      angle = frequency * (t - s) * a + b;
	      return 1 - (At * Math.cos(angle));
	    };
	  };

	  dynamics.bounce = function(options) {
	    var A, fn, frequency, friction;
	    if (options == null) {
	      options = {};
	    }
	    applyDefaults(options, dynamics.bounce.defaults);
	    frequency = Math.max(1, options.frequency / 20);
	    friction = Math.pow(20, options.friction / 100);
	    A = function(t) {
	      return Math.pow(friction / 10, -t) * (1 - t);
	    };
	    fn = function(t) {
	      var At, a, angle, b;
	      b = -3.14 / 2;
	      a = 1;
	      At = A(t);
	      angle = frequency * t * a + b;
	      return At * Math.cos(angle);
	    };
	    fn.returnsToSelf = true;
	    return fn;
	  };

	  dynamics.gravity = function(options) {
	    var L, bounciness, curves, elasticity, fn, getPointInCurve, gravity;
	    if (options == null) {
	      options = {};
	    }
	    applyDefaults(options, dynamics.gravity.defaults);
	    bounciness = Math.min(options.bounciness / 1250, 0.8);
	    elasticity = options.elasticity / 1000;
	    gravity = 100;
	    curves = [];
	    L = (function() {
	      var b, curve;
	      b = Math.sqrt(2 / gravity);
	      curve = {
	        a: -b,
	        b: b,
	        H: 1
	      };
	      if (options.returnsToSelf) {
	        curve.a = 0;
	        curve.b = curve.b * 2;
	      }
	      while (curve.H > 0.001) {
	        L = curve.b - curve.a;
	        curve = {
	          a: curve.b,
	          b: curve.b + L * bounciness,
	          H: curve.H * bounciness * bounciness
	        };
	      }
	      return curve.b;
	    })();
	    getPointInCurve = function(a, b, H, t) {
	      var c, t2;
	      L = b - a;
	      t2 = (2 / L) * t - 1 - (a * 2 / L);
	      c = t2 * t2 * H - H + 1;
	      if (options.returnsToSelf) {
	        c = 1 - c;
	      }
	      return c;
	    };
	    (function() {
	      var L2, b, curve, _results;
	      b = Math.sqrt(2 / (gravity * L * L));
	      curve = {
	        a: -b,
	        b: b,
	        H: 1
	      };
	      if (options.returnsToSelf) {
	        curve.a = 0;
	        curve.b = curve.b * 2;
	      }
	      curves.push(curve);
	      L2 = L;
	      _results = [];
	      while (curve.b < 1 && curve.H > 0.001) {
	        L2 = curve.b - curve.a;
	        curve = {
	          a: curve.b,
	          b: curve.b + L2 * bounciness,
	          H: curve.H * elasticity
	        };
	        _results.push(curves.push(curve));
	      }
	      return _results;
	    })();
	    fn = function(t) {
	      var curve, i, v;
	      i = 0;
	      curve = curves[i];
	      while (!(t >= curve.a && t <= curve.b)) {
	        i += 1;
	        curve = curves[i];
	        if (!curve) {
	          break;
	        }
	      }
	      if (!curve) {
	        v = options.returnsToSelf ? 0 : 1;
	      } else {
	        v = getPointInCurve(curve.a, curve.b, curve.H, t);
	      }
	      return v;
	    };
	    fn.returnsToSelf = options.returnsToSelf;
	    return fn;
	  };

	  dynamics.forceWithGravity = function(options) {
	    if (options == null) {
	      options = {};
	    }
	    applyDefaults(options, dynamics.forceWithGravity.defaults);
	    options.returnsToSelf = true;
	    return dynamics.gravity(options);
	  };

	  dynamics.bezier = (function() {
	    var Bezier, Bezier_, yForX;
	    Bezier_ = function(t, p0, p1, p2, p3) {
	      return (Math.pow(1 - t, 3) * p0) + (3 * Math.pow(1 - t, 2) * t * p1) + (3 * (1 - t) * Math.pow(t, 2) * p2) + Math.pow(t, 3) * p3;
	    };
	    Bezier = function(t, p0, p1, p2, p3) {
	      return {
	        x: Bezier_(t, p0.x, p1.x, p2.x, p3.x),
	        y: Bezier_(t, p0.y, p1.y, p2.y, p3.y)
	      };
	    };
	    yForX = function(xTarget, Bs, returnsToSelf) {
	      var B, aB, i, lower, percent, upper, x, xTolerance, _i, _len;
	      B = null;
	      for (_i = 0, _len = Bs.length; _i < _len; _i++) {
	        aB = Bs[_i];
	        if (xTarget >= aB(0).x && xTarget <= aB(1).x) {
	          B = aB;
	        }
	        if (B !== null) {
	          break;
	        }
	      }
	      if (!B) {
	        if (returnsToSelf) {
	          return 0;
	        } else {
	          return 1;
	        }
	      }
	      xTolerance = 0.0001;
	      lower = 0;
	      upper = 1;
	      percent = (upper + lower) / 2;
	      x = B(percent).x;
	      i = 0;
	      while (Math.abs(xTarget - x) > xTolerance && i < 100) {
	        if (xTarget > x) {
	          lower = percent;
	        } else {
	          upper = percent;
	        }
	        percent = (upper + lower) / 2;
	        x = B(percent).x;
	        i += 1;
	      }
	      return B(percent).y;
	    };
	    return function(options) {
	      var Bs, fn, points;
	      if (options == null) {
	        options = {};
	      }
	      points = options.points;
	      Bs = (function() {
	        var i, k, _fn;
	        Bs = [];
	        _fn = function(pointA, pointB) {
	          var B2;
	          B2 = function(t) {
	            return Bezier(t, pointA, pointA.cp[pointA.cp.length - 1], pointB.cp[0], pointB);
	          };
	          return Bs.push(B2);
	        };
	        for (i in points) {
	          k = parseInt(i);
	          if (k >= points.length - 1) {
	            break;
	          }
	          _fn(points[k], points[k + 1]);
	        }
	        return Bs;
	      })();
	      fn = function(t) {
	        if (t === 0) {
	          return 0;
	        } else if (t === 1) {
	          return 1;
	        } else {
	          return yForX(t, Bs, this.returnsToSelf);
	        }
	      };
	      fn.returnsToSelf = points[points.length - 1].y === 0;
	      return fn;
	    };
	  })();

	  dynamics.easeInOut = function(options) {
	    var friction, _ref;
	    if (options == null) {
	      options = {};
	    }
	    friction = (_ref = options.friction) != null ? _ref : dynamics.easeInOut.defaults.friction;
	    return dynamics.bezier({
	      points: [
	        {
	          x: 0,
	          y: 0,
	          cp: [
	            {
	              x: 0.92 - (friction / 1000),
	              y: 0
	            }
	          ]
	        }, {
	          x: 1,
	          y: 1,
	          cp: [
	            {
	              x: 0.08 + (friction / 1000),
	              y: 1
	            }
	          ]
	        }
	      ]
	    });
	  };

	  dynamics.easeIn = function(options) {
	    var friction, _ref;
	    if (options == null) {
	      options = {};
	    }
	    friction = (_ref = options.friction) != null ? _ref : dynamics.easeIn.defaults.friction;
	    return dynamics.bezier({
	      points: [
	        {
	          x: 0,
	          y: 0,
	          cp: [
	            {
	              x: 0.92 - (friction / 1000),
	              y: 0
	            }
	          ]
	        }, {
	          x: 1,
	          y: 1,
	          cp: [
	            {
	              x: 1,
	              y: 1
	            }
	          ]
	        }
	      ]
	    });
	  };

	  dynamics.easeOut = function(options) {
	    var friction, _ref;
	    if (options == null) {
	      options = {};
	    }
	    friction = (_ref = options.friction) != null ? _ref : dynamics.easeOut.defaults.friction;
	    return dynamics.bezier({
	      points: [
	        {
	          x: 0,
	          y: 0,
	          cp: [
	            {
	              x: 0,
	              y: 0
	            }
	          ]
	        }, {
	          x: 1,
	          y: 1,
	          cp: [
	            {
	              x: 0.08 + (friction / 1000),
	              y: 1
	            }
	          ]
	        }
	      ]
	    });
	  };

	  dynamics.spring.defaults = {
	    frequency: 300,
	    friction: 200,
	    anticipationSize: 0,
	    anticipationStrength: 0
	  };

	  dynamics.bounce.defaults = {
	    frequency: 300,
	    friction: 200
	  };

	  dynamics.forceWithGravity.defaults = dynamics.gravity.defaults = {
	    bounciness: 400,
	    elasticity: 200
	  };

	  dynamics.easeInOut.defaults = dynamics.easeIn.defaults = dynamics.easeOut.defaults = {
	    friction: 500
	  };

	  dynamics.css = makeArrayFn(function(el, properties) {
	    return applyProperties(el, properties, true);
	  });

	  dynamics.animate = makeArrayFn(function(el, properties, options) {
	    var id;
	    if (options == null) {
	      options = {};
	    }
	    options = clone(options);
	    applyDefaults(options, {
	      type: dynamics.easeInOut,
	      duration: 1000,
	      delay: 0,
	      animated: true
	    });
	    options.duration = Math.max(0, options.duration * slowRatio);
	    options.delay = Math.max(0, options.delay);
	    if (options.delay === 0) {
	      return startAnimation(el, properties, options);
	    } else {
	      id = dynamics.setTimeout(function() {
	        return startAnimation(el, properties, options, id);
	      }, options.delay);
	      return animationsTimeouts.push({
	        id: id,
	        el: el
	      });
	    }
	  });

	  dynamics.stop = makeArrayFn(function(el, options) {
	    if (options == null) {
	      options = {};
	    }
	    if (options.timeout == null) {
	      options.timeout = true;
	    }
	    if (options.timeout) {
	      animationsTimeouts = animationsTimeouts.filter(function(timeout) {
	        if (timeout.el === el && ((options.filter == null) || options.filter(timeout))) {
	          dynamics.clearTimeout(timeout.id);
	          return false;
	        }
	        return true;
	      });
	    }
	    return animations = animations.filter(function(animation) {
	      return animation.el !== el;
	    });
	  });

	  dynamics.setTimeout = function(fn, delay) {
	    return addTimeout(fn, delay * slowRatio);
	  };

	  dynamics.clearTimeout = function(id) {
	    return cancelTimeout(id);
	  };

	  dynamics.toggleSlow = function() {
	    slow = !slow;
	    if (slow) {
	      slowRatio = 3;
	    } else {
	      slowRatio = 1;
	    }
	    return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log("dynamics.js: slow animations " + (slow ? "enabled" : "disabled")) : void 0 : void 0;
	  };

	  if (typeof module === "object" && typeof module.exports === "object") {
	    module.exports = dynamics;
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return dynamics;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {
	    window.dynamics = dynamics;
	  }

	}).call(this);


/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	// Done in SVG so we can avoid importing any CSS
	var RECT_WIDTH = 1.5;
	var MARGIN = 8;

	var CloseCircle = function CloseCircle(props) {
	  var diameter = props.diameter;

	  var radius = diameter / 2;

	  return _react2["default"].createElement(
	    "svg",
	    { width: diameter, height: diameter },
	    _react2["default"].createElement("circle", { cx: radius, cy: radius, r: radius, fill: "black" }),
	    _react2["default"].createElement(
	      "g",
	      { transform: "rotate(45 " + diameter / 2 + " " + diameter / 2 + ")" },
	      _react2["default"].createElement("rect", {
	        x: MARGIN,
	        y: (diameter - RECT_WIDTH) / 2,
	        width: diameter - 2 * MARGIN,
	        height: RECT_WIDTH,
	        fill: "white"
	      }),
	      _react2["default"].createElement("rect", {
	        y: MARGIN,
	        x: (diameter - RECT_WIDTH) / 2,
	        height: diameter - 2 * MARGIN,
	        width: RECT_WIDTH,
	        fill: "white"
	      })
	    )
	  );
	};

	CloseCircle.propTypes = {
	  diameter: _react.PropTypes.number.isRequired
	};

	exports["default"] = CloseCircle;
	module.exports = exports["default"];

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _immutable = __webpack_require__(526);

	var _lodash = __webpack_require__(527);

	var uniqueEventId = _lodash.uniqueId.bind(null, 'active_event_');

	if (typeof document != 'undefined') {
	  document.addEventListener('click', onEvent.bind(null, 'click'), true);
	  document.addEventListener('keydown', onEvent.bind(null, 'keydown'));
	  document.addEventListener('keyup', onEvent.bind(null, 'keyup'));
	}

	var listenables = (0, _immutable.OrderedMap)();

	function onEvent(type, event) {
	  var listenable = listenables.last();
	  if (listenable) {
	    var handler = listenable.get(type);
	    if (typeof handler == 'function') {
	      handler(event);
	    }
	  }
	};

	var EventStack = {
	  addListenable: function addListenable(listenArray) {
	    /* ex: [['click', clickHandler], ['keydown', keydownHandler]] */
	    var id = uniqueEventId();
	    var listenable = (0, _immutable.Map)(listenArray);
	    listenables = listenables.set(id, listenable);
	    return id;
	  },
	  removeListenable: function removeListenable(id) {
	    listenables = listenables['delete'](id);
	  }
	};

	exports['default'] = EventStack;
	module.exports = exports['default'];

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2014-2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Immutable = factory());
	}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

	  function createClass(ctor, superClass) {
	    if (superClass) {
	      ctor.prototype = Object.create(superClass.prototype);
	    }
	    ctor.prototype.constructor = ctor;
	  }

	  function Iterable(value) {
	      return isIterable(value) ? value : Seq(value);
	    }


	  createClass(KeyedIterable, Iterable);
	    function KeyedIterable(value) {
	      return isKeyed(value) ? value : KeyedSeq(value);
	    }


	  createClass(IndexedIterable, Iterable);
	    function IndexedIterable(value) {
	      return isIndexed(value) ? value : IndexedSeq(value);
	    }


	  createClass(SetIterable, Iterable);
	    function SetIterable(value) {
	      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
	    }



	  function isIterable(maybeIterable) {
	    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
	  }

	  function isKeyed(maybeKeyed) {
	    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
	  }

	  function isIndexed(maybeIndexed) {
	    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
	  }

	  function isAssociative(maybeAssociative) {
	    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
	  }

	  function isOrdered(maybeOrdered) {
	    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
	  }

	  Iterable.isIterable = isIterable;
	  Iterable.isKeyed = isKeyed;
	  Iterable.isIndexed = isIndexed;
	  Iterable.isAssociative = isAssociative;
	  Iterable.isOrdered = isOrdered;

	  Iterable.Keyed = KeyedIterable;
	  Iterable.Indexed = IndexedIterable;
	  Iterable.Set = SetIterable;


	  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

	  // Used for setting prototype methods that IE8 chokes on.
	  var DELETE = 'delete';

	  // Constants describing the size of trie nodes.
	  var SHIFT = 5; // Resulted in best performance after ______?
	  var SIZE = 1 << SHIFT;
	  var MASK = SIZE - 1;

	  // A consistent shared value representing "not set" which equals nothing other
	  // than itself, and nothing that could be provided externally.
	  var NOT_SET = {};

	  // Boolean references, Rough equivalent of `bool &`.
	  var CHANGE_LENGTH = { value: false };
	  var DID_ALTER = { value: false };

	  function MakeRef(ref) {
	    ref.value = false;
	    return ref;
	  }

	  function SetRef(ref) {
	    ref && (ref.value = true);
	  }

	  // A function which returns a value representing an "owner" for transient writes
	  // to tries. The return value will only ever equal itself, and will not equal
	  // the return of any subsequent call of this function.
	  function OwnerID() {}

	  // http://jsperf.com/copy-array-inline
	  function arrCopy(arr, offset) {
	    offset = offset || 0;
	    var len = Math.max(0, arr.length - offset);
	    var newArr = new Array(len);
	    for (var ii = 0; ii < len; ii++) {
	      newArr[ii] = arr[ii + offset];
	    }
	    return newArr;
	  }

	  function ensureSize(iter) {
	    if (iter.size === undefined) {
	      iter.size = iter.__iterate(returnTrue);
	    }
	    return iter.size;
	  }

	  function wrapIndex(iter, index) {
	    // This implements "is array index" which the ECMAString spec defines as:
	    //
	    //     A String property name P is an array index if and only if
	    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
	    //     to 2^32−1.
	    //
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
	    if (typeof index !== 'number') {
	      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
	      if ('' + uint32Index !== index || uint32Index === 4294967295) {
	        return NaN;
	      }
	      index = uint32Index;
	    }
	    return index < 0 ? ensureSize(iter) + index : index;
	  }

	  function returnTrue() {
	    return true;
	  }

	  function wholeSlice(begin, end, size) {
	    return (begin === 0 || (size !== undefined && begin <= -size)) &&
	      (end === undefined || (size !== undefined && end >= size));
	  }

	  function resolveBegin(begin, size) {
	    return resolveIndex(begin, size, 0);
	  }

	  function resolveEnd(end, size) {
	    return resolveIndex(end, size, size);
	  }

	  function resolveIndex(index, size, defaultIndex) {
	    return index === undefined ?
	      defaultIndex :
	      index < 0 ?
	        Math.max(0, size + index) :
	        size === undefined ?
	          index :
	          Math.min(size, index);
	  }

	  /* global Symbol */

	  var ITERATE_KEYS = 0;
	  var ITERATE_VALUES = 1;
	  var ITERATE_ENTRIES = 2;

	  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator';

	  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


	  function Iterator(next) {
	      this.next = next;
	    }

	    Iterator.prototype.toString = function() {
	      return '[Iterator]';
	    };


	  Iterator.KEYS = ITERATE_KEYS;
	  Iterator.VALUES = ITERATE_VALUES;
	  Iterator.ENTRIES = ITERATE_ENTRIES;

	  Iterator.prototype.inspect =
	  Iterator.prototype.toSource = function () { return this.toString(); }
	  Iterator.prototype[ITERATOR_SYMBOL] = function () {
	    return this;
	  };


	  function iteratorValue(type, k, v, iteratorResult) {
	    var value = type === 0 ? k : type === 1 ? v : [k, v];
	    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
	      value: value, done: false
	    });
	    return iteratorResult;
	  }

	  function iteratorDone() {
	    return { value: undefined, done: true };
	  }

	  function hasIterator(maybeIterable) {
	    return !!getIteratorFn(maybeIterable);
	  }

	  function isIterator(maybeIterator) {
	    return maybeIterator && typeof maybeIterator.next === 'function';
	  }

	  function getIterator(iterable) {
	    var iteratorFn = getIteratorFn(iterable);
	    return iteratorFn && iteratorFn.call(iterable);
	  }

	  function getIteratorFn(iterable) {
	    var iteratorFn = iterable && (
	      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
	      iterable[FAUX_ITERATOR_SYMBOL]
	    );
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  function isArrayLike(value) {
	    return value && typeof value.length === 'number';
	  }

	  createClass(Seq, Iterable);
	    function Seq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        isIterable(value) ? value.toSeq() : seqFromValue(value);
	    }

	    Seq.of = function(/*...values*/) {
	      return Seq(arguments);
	    };

	    Seq.prototype.toSeq = function() {
	      return this;
	    };

	    Seq.prototype.toString = function() {
	      return this.__toString('Seq {', '}');
	    };

	    Seq.prototype.cacheResult = function() {
	      if (!this._cache && this.__iterateUncached) {
	        this._cache = this.entrySeq().toArray();
	        this.size = this._cache.length;
	      }
	      return this;
	    };

	    // abstract __iterateUncached(fn, reverse)

	    Seq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, true);
	    };

	    // abstract __iteratorUncached(type, reverse)

	    Seq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, true);
	    };



	  createClass(KeyedSeq, Seq);
	    function KeyedSeq(value) {
	      return value === null || value === undefined ?
	        emptySequence().toKeyedSeq() :
	        isIterable(value) ?
	          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
	          keyedSeqFromValue(value);
	    }

	    KeyedSeq.prototype.toKeyedSeq = function() {
	      return this;
	    };



	  createClass(IndexedSeq, Seq);
	    function IndexedSeq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
	    }

	    IndexedSeq.of = function(/*...values*/) {
	      return IndexedSeq(arguments);
	    };

	    IndexedSeq.prototype.toIndexedSeq = function() {
	      return this;
	    };

	    IndexedSeq.prototype.toString = function() {
	      return this.__toString('Seq [', ']');
	    };

	    IndexedSeq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, false);
	    };

	    IndexedSeq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, false);
	    };



	  createClass(SetSeq, Seq);
	    function SetSeq(value) {
	      return (
	        value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value
	      ).toSetSeq();
	    }

	    SetSeq.of = function(/*...values*/) {
	      return SetSeq(arguments);
	    };

	    SetSeq.prototype.toSetSeq = function() {
	      return this;
	    };



	  Seq.isSeq = isSeq;
	  Seq.Keyed = KeyedSeq;
	  Seq.Set = SetSeq;
	  Seq.Indexed = IndexedSeq;

	  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

	  Seq.prototype[IS_SEQ_SENTINEL] = true;



	  createClass(ArraySeq, IndexedSeq);
	    function ArraySeq(array) {
	      this._array = array;
	      this.size = array.length;
	    }

	    ArraySeq.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
	    };

	    ArraySeq.prototype.__iterate = function(fn, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    ArraySeq.prototype.__iterator = function(type, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
	      );
	    };



	  createClass(ObjectSeq, KeyedSeq);
	    function ObjectSeq(object) {
	      var keys = Object.keys(object);
	      this._object = object;
	      this._keys = keys;
	      this.size = keys.length;
	    }

	    ObjectSeq.prototype.get = function(key, notSetValue) {
	      if (notSetValue !== undefined && !this.has(key)) {
	        return notSetValue;
	      }
	      return this._object[key];
	    };

	    ObjectSeq.prototype.has = function(key) {
	      return this._object.hasOwnProperty(key);
	    };

	    ObjectSeq.prototype.__iterate = function(fn, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        if (fn(object[key], key, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    ObjectSeq.prototype.__iterator = function(type, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, key, object[key]);
	      });
	    };

	  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


	  createClass(IterableSeq, IndexedSeq);
	    function IterableSeq(iterable) {
	      this._iterable = iterable;
	      this.size = iterable.length || iterable.size;
	    }

	    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      var iterations = 0;
	      if (isIterator(iterator)) {
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (fn(step.value, iterations++, this) === false) {
	            break;
	          }
	        }
	      }
	      return iterations;
	    };

	    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      if (!isIterator(iterator)) {
	        return new Iterator(iteratorDone);
	      }
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step : iteratorValue(type, iterations++, step.value);
	      });
	    };



	  createClass(IteratorSeq, IndexedSeq);
	    function IteratorSeq(iterator) {
	      this._iterator = iterator;
	      this._iteratorCache = [];
	    }

	    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      while (iterations < cache.length) {
	        if (fn(cache[iterations], iterations++, this) === false) {
	          return iterations;
	        }
	      }
	      var step;
	      while (!(step = iterator.next()).done) {
	        var val = step.value;
	        cache[iterations] = val;
	        if (fn(val, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };

	    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      return new Iterator(function()  {
	        if (iterations >= cache.length) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          cache[iterations] = step.value;
	        }
	        return iteratorValue(type, iterations, cache[iterations++]);
	      });
	    };




	  // # pragma Helper functions

	  function isSeq(maybeSeq) {
	    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
	  }

	  var EMPTY_SEQ;

	  function emptySequence() {
	    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
	  }

	  function keyedSeqFromValue(value) {
	    var seq =
	      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
	      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
	      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
	      typeof value === 'object' ? new ObjectSeq(value) :
	      undefined;
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of [k, v] entries, '+
	        'or keyed object: ' + value
	      );
	    }
	    return seq;
	  }

	  function indexedSeqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value);
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values: ' + value
	      );
	    }
	    return seq;
	  }

	  function seqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value) ||
	      (typeof value === 'object' && new ObjectSeq(value));
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values, or keyed object: ' + value
	      );
	    }
	    return seq;
	  }

	  function maybeIndexedSeqFromValue(value) {
	    return (
	      isArrayLike(value) ? new ArraySeq(value) :
	      isIterator(value) ? new IteratorSeq(value) :
	      hasIterator(value) ? new IterableSeq(value) :
	      undefined
	    );
	  }

	  function seqIterate(seq, fn, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    }
	    return seq.__iterateUncached(fn, reverse);
	  }

	  function seqIterator(seq, type, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
	      });
	    }
	    return seq.__iteratorUncached(type, reverse);
	  }

	  function fromJS(json, converter) {
	    return converter ?
	      fromJSWith(converter, json, '', {'': json}) :
	      fromJSDefault(json);
	  }

	  function fromJSWith(converter, json, key, parentJSON) {
	    if (Array.isArray(json)) {
	      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    if (isPlainObj(json)) {
	      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    return json;
	  }

	  function fromJSDefault(json) {
	    if (Array.isArray(json)) {
	      return IndexedSeq(json).map(fromJSDefault).toList();
	    }
	    if (isPlainObj(json)) {
	      return KeyedSeq(json).map(fromJSDefault).toMap();
	    }
	    return json;
	  }

	  function isPlainObj(value) {
	    return value && (value.constructor === Object || value.constructor === undefined);
	  }

	  /**
	   * An extension of the "same-value" algorithm as [described for use by ES6 Map
	   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
	   *
	   * NaN is considered the same as NaN, however -0 and 0 are considered the same
	   * value, which is different from the algorithm described by
	   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
	   *
	   * This is extended further to allow Objects to describe the values they
	   * represent, by way of `valueOf` or `equals` (and `hashCode`).
	   *
	   * Note: because of this extension, the key equality of Immutable.Map and the
	   * value equality of Immutable.Set will differ from ES6 Map and Set.
	   *
	   * ### Defining custom values
	   *
	   * The easiest way to describe the value an object represents is by implementing
	   * `valueOf`. For example, `Date` represents a value by returning a unix
	   * timestamp for `valueOf`:
	   *
	   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
	   *     var date2 = new Date(1234567890000);
	   *     date1.valueOf(); // 1234567890000
	   *     assert( date1 !== date2 );
	   *     assert( Immutable.is( date1, date2 ) );
	   *
	   * Note: overriding `valueOf` may have other implications if you use this object
	   * where JavaScript expects a primitive, such as implicit string coercion.
	   *
	   * For more complex types, especially collections, implementing `valueOf` may
	   * not be performant. An alternative is to implement `equals` and `hashCode`.
	   *
	   * `equals` takes another object, presumably of similar type, and returns true
	   * if the it is equal. Equality is symmetrical, so the same result should be
	   * returned if this and the argument are flipped.
	   *
	   *     assert( a.equals(b) === b.equals(a) );
	   *
	   * `hashCode` returns a 32bit integer number representing the object which will
	   * be used to determine how to store the value object in a Map or Set. You must
	   * provide both or neither methods, one must not exist without the other.
	   *
	   * Also, an important relationship between these methods must be upheld: if two
	   * values are equal, they *must* return the same hashCode. If the values are not
	   * equal, they might have the same hashCode; this is called a hash collision,
	   * and while undesirable for performance reasons, it is acceptable.
	   *
	   *     if (a.equals(b)) {
	   *       assert( a.hashCode() === b.hashCode() );
	   *     }
	   *
	   * All Immutable collections implement `equals` and `hashCode`.
	   *
	   */
	  function is(valueA, valueB) {
	    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	      return true;
	    }
	    if (!valueA || !valueB) {
	      return false;
	    }
	    if (typeof valueA.valueOf === 'function' &&
	        typeof valueB.valueOf === 'function') {
	      valueA = valueA.valueOf();
	      valueB = valueB.valueOf();
	      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	        return true;
	      }
	      if (!valueA || !valueB) {
	        return false;
	      }
	    }
	    if (typeof valueA.equals === 'function' &&
	        typeof valueB.equals === 'function' &&
	        valueA.equals(valueB)) {
	      return true;
	    }
	    return false;
	  }

	  function deepEqual(a, b) {
	    if (a === b) {
	      return true;
	    }

	    if (
	      !isIterable(b) ||
	      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
	      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
	      isKeyed(a) !== isKeyed(b) ||
	      isIndexed(a) !== isIndexed(b) ||
	      isOrdered(a) !== isOrdered(b)
	    ) {
	      return false;
	    }

	    if (a.size === 0 && b.size === 0) {
	      return true;
	    }

	    var notAssociative = !isAssociative(a);

	    if (isOrdered(a)) {
	      var entries = a.entries();
	      return b.every(function(v, k)  {
	        var entry = entries.next().value;
	        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
	      }) && entries.next().done;
	    }

	    var flipped = false;

	    if (a.size === undefined) {
	      if (b.size === undefined) {
	        if (typeof a.cacheResult === 'function') {
	          a.cacheResult();
	        }
	      } else {
	        flipped = true;
	        var _ = a;
	        a = b;
	        b = _;
	      }
	    }

	    var allEqual = true;
	    var bSize = b.__iterate(function(v, k)  {
	      if (notAssociative ? !a.has(v) :
	          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
	        allEqual = false;
	        return false;
	      }
	    });

	    return allEqual && a.size === bSize;
	  }

	  createClass(Repeat, IndexedSeq);

	    function Repeat(value, times) {
	      if (!(this instanceof Repeat)) {
	        return new Repeat(value, times);
	      }
	      this._value = value;
	      this.size = times === undefined ? Infinity : Math.max(0, times);
	      if (this.size === 0) {
	        if (EMPTY_REPEAT) {
	          return EMPTY_REPEAT;
	        }
	        EMPTY_REPEAT = this;
	      }
	    }

	    Repeat.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Repeat []';
	      }
	      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
	    };

	    Repeat.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._value : notSetValue;
	    };

	    Repeat.prototype.includes = function(searchValue) {
	      return is(this._value, searchValue);
	    };

	    Repeat.prototype.slice = function(begin, end) {
	      var size = this.size;
	      return wholeSlice(begin, end, size) ? this :
	        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
	    };

	    Repeat.prototype.reverse = function() {
	      return this;
	    };

	    Repeat.prototype.indexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return 0;
	      }
	      return -1;
	    };

	    Repeat.prototype.lastIndexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return this.size;
	      }
	      return -1;
	    };

	    Repeat.prototype.__iterate = function(fn, reverse) {
	      for (var ii = 0; ii < this.size; ii++) {
	        if (fn(this._value, ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
	      );
	    };

	    Repeat.prototype.equals = function(other) {
	      return other instanceof Repeat ?
	        is(this._value, other._value) :
	        deepEqual(other);
	    };


	  var EMPTY_REPEAT;

	  function invariant(condition, error) {
	    if (!condition) throw new Error(error);
	  }

	  createClass(Range, IndexedSeq);

	    function Range(start, end, step) {
	      if (!(this instanceof Range)) {
	        return new Range(start, end, step);
	      }
	      invariant(step !== 0, 'Cannot step a Range by 0');
	      start = start || 0;
	      if (end === undefined) {
	        end = Infinity;
	      }
	      step = step === undefined ? 1 : Math.abs(step);
	      if (end < start) {
	        step = -step;
	      }
	      this._start = start;
	      this._end = end;
	      this._step = step;
	      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
	      if (this.size === 0) {
	        if (EMPTY_RANGE) {
	          return EMPTY_RANGE;
	        }
	        EMPTY_RANGE = this;
	      }
	    }

	    Range.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Range []';
	      }
	      return 'Range [ ' +
	        this._start + '...' + this._end +
	        (this._step !== 1 ? ' by ' + this._step : '') +
	      ' ]';
	    };

	    Range.prototype.get = function(index, notSetValue) {
	      return this.has(index) ?
	        this._start + wrapIndex(this, index) * this._step :
	        notSetValue;
	    };

	    Range.prototype.includes = function(searchValue) {
	      var possibleIndex = (searchValue - this._start) / this._step;
	      return possibleIndex >= 0 &&
	        possibleIndex < this.size &&
	        possibleIndex === Math.floor(possibleIndex);
	    };

	    Range.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      begin = resolveBegin(begin, this.size);
	      end = resolveEnd(end, this.size);
	      if (end <= begin) {
	        return new Range(0, 0);
	      }
	      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
	    };

	    Range.prototype.indexOf = function(searchValue) {
	      var offsetValue = searchValue - this._start;
	      if (offsetValue % this._step === 0) {
	        var index = offsetValue / this._step;
	        if (index >= 0 && index < this.size) {
	          return index
	        }
	      }
	      return -1;
	    };

	    Range.prototype.lastIndexOf = function(searchValue) {
	      return this.indexOf(searchValue);
	    };

	    Range.prototype.__iterate = function(fn, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(value, ii, this) === false) {
	          return ii + 1;
	        }
	        value += reverse ? -step : step;
	      }
	      return ii;
	    };

	    Range.prototype.__iterator = function(type, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      var ii = 0;
	      return new Iterator(function()  {
	        var v = value;
	        value += reverse ? -step : step;
	        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
	      });
	    };

	    Range.prototype.equals = function(other) {
	      return other instanceof Range ?
	        this._start === other._start &&
	        this._end === other._end &&
	        this._step === other._step :
	        deepEqual(this, other);
	    };


	  var EMPTY_RANGE;

	  createClass(Collection, Iterable);
	    function Collection() {
	      throw TypeError('Abstract');
	    }


	  createClass(KeyedCollection, Collection);function KeyedCollection() {}

	  createClass(IndexedCollection, Collection);function IndexedCollection() {}

	  createClass(SetCollection, Collection);function SetCollection() {}


	  Collection.Keyed = KeyedCollection;
	  Collection.Indexed = IndexedCollection;
	  Collection.Set = SetCollection;

	  var imul =
	    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
	    Math.imul :
	    function imul(a, b) {
	      a = a | 0; // int
	      b = b | 0; // int
	      var c = a & 0xffff;
	      var d = b & 0xffff;
	      // Shift by 0 fixes the sign on the high part.
	      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
	    };

	  // v8 has an optimization for storing 31-bit signed numbers.
	  // Values which have either 00 or 11 as the high order bits qualify.
	  // This function drops the highest order bit in a signed number, maintaining
	  // the sign bit.
	  function smi(i32) {
	    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
	  }

	  function hash(o) {
	    if (o === false || o === null || o === undefined) {
	      return 0;
	    }
	    if (typeof o.valueOf === 'function') {
	      o = o.valueOf();
	      if (o === false || o === null || o === undefined) {
	        return 0;
	      }
	    }
	    if (o === true) {
	      return 1;
	    }
	    var type = typeof o;
	    if (type === 'number') {
	      if (o !== o || o === Infinity) {
	        return 0;
	      }
	      var h = o | 0;
	      if (h !== o) {
	        h ^= o * 0xFFFFFFFF;
	      }
	      while (o > 0xFFFFFFFF) {
	        o /= 0xFFFFFFFF;
	        h ^= o;
	      }
	      return smi(h);
	    }
	    if (type === 'string') {
	      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
	    }
	    if (typeof o.hashCode === 'function') {
	      return o.hashCode();
	    }
	    if (type === 'object') {
	      return hashJSObj(o);
	    }
	    if (typeof o.toString === 'function') {
	      return hashString(o.toString());
	    }
	    throw new Error('Value type ' + type + ' cannot be hashed.');
	  }

	  function cachedHashString(string) {
	    var hash = stringHashCache[string];
	    if (hash === undefined) {
	      hash = hashString(string);
	      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
	        STRING_HASH_CACHE_SIZE = 0;
	        stringHashCache = {};
	      }
	      STRING_HASH_CACHE_SIZE++;
	      stringHashCache[string] = hash;
	    }
	    return hash;
	  }

	  // http://jsperf.com/hashing-strings
	  function hashString(string) {
	    // This is the hash from JVM
	    // The hash code for a string is computed as
	    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
	    // where s[i] is the ith character of the string and n is the length of
	    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
	    // (exclusive) by dropping high bits.
	    var hash = 0;
	    for (var ii = 0; ii < string.length; ii++) {
	      hash = 31 * hash + string.charCodeAt(ii) | 0;
	    }
	    return smi(hash);
	  }

	  function hashJSObj(obj) {
	    var hash;
	    if (usingWeakMap) {
	      hash = weakMap.get(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }

	    hash = obj[UID_HASH_KEY];
	    if (hash !== undefined) {
	      return hash;
	    }

	    if (!canDefineProperty) {
	      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
	      if (hash !== undefined) {
	        return hash;
	      }

	      hash = getIENodeHash(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }

	    hash = ++objHashUID;
	    if (objHashUID & 0x40000000) {
	      objHashUID = 0;
	    }

	    if (usingWeakMap) {
	      weakMap.set(obj, hash);
	    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
	      throw new Error('Non-extensible objects are not allowed as keys.');
	    } else if (canDefineProperty) {
	      Object.defineProperty(obj, UID_HASH_KEY, {
	        'enumerable': false,
	        'configurable': false,
	        'writable': false,
	        'value': hash
	      });
	    } else if (obj.propertyIsEnumerable !== undefined &&
	               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
	      // Since we can't define a non-enumerable property on the object
	      // we'll hijack one of the less-used non-enumerable properties to
	      // save our hash on it. Since this is a function it will not show up in
	      // `JSON.stringify` which is what we want.
	      obj.propertyIsEnumerable = function() {
	        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
	      };
	      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
	    } else if (obj.nodeType !== undefined) {
	      // At this point we couldn't get the IE `uniqueID` to use as a hash
	      // and we couldn't use a non-enumerable property to exploit the
	      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
	      // itself.
	      obj[UID_HASH_KEY] = hash;
	    } else {
	      throw new Error('Unable to set a non-enumerable property on object.');
	    }

	    return hash;
	  }

	  // Get references to ES5 object methods.
	  var isExtensible = Object.isExtensible;

	  // True if Object.defineProperty works as expected. IE8 fails this test.
	  var canDefineProperty = (function() {
	    try {
	      Object.defineProperty({}, '@', {});
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }());

	  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
	  // and avoid memory leaks from the IE cloneNode bug.
	  function getIENodeHash(node) {
	    if (node && node.nodeType > 0) {
	      switch (node.nodeType) {
	        case 1: // Element
	          return node.uniqueID;
	        case 9: // Document
	          return node.documentElement && node.documentElement.uniqueID;
	      }
	    }
	  }

	  // If possible, use a WeakMap.
	  var usingWeakMap = typeof WeakMap === 'function';
	  var weakMap;
	  if (usingWeakMap) {
	    weakMap = new WeakMap();
	  }

	  var objHashUID = 0;

	  var UID_HASH_KEY = '__immutablehash__';
	  if (typeof Symbol === 'function') {
	    UID_HASH_KEY = Symbol(UID_HASH_KEY);
	  }

	  var STRING_HASH_CACHE_MIN_STRLEN = 16;
	  var STRING_HASH_CACHE_MAX_SIZE = 255;
	  var STRING_HASH_CACHE_SIZE = 0;
	  var stringHashCache = {};

	  function assertNotInfinite(size) {
	    invariant(
	      size !== Infinity,
	      'Cannot perform this action with an infinite size.'
	    );
	  }

	  createClass(Map, KeyedCollection);

	    // @pragma Construction

	    function Map(value) {
	      return value === null || value === undefined ? emptyMap() :
	        isMap(value) && !isOrdered(value) ? value :
	        emptyMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }

	    Map.of = function() {var keyValues = SLICE$0.call(arguments, 0);
	      return emptyMap().withMutations(function(map ) {
	        for (var i = 0; i < keyValues.length; i += 2) {
	          if (i + 1 >= keyValues.length) {
	            throw new Error('Missing value for key: ' + keyValues[i]);
	          }
	          map.set(keyValues[i], keyValues[i + 1]);
	        }
	      });
	    };

	    Map.prototype.toString = function() {
	      return this.__toString('Map {', '}');
	    };

	    // @pragma Access

	    Map.prototype.get = function(k, notSetValue) {
	      return this._root ?
	        this._root.get(0, undefined, k, notSetValue) :
	        notSetValue;
	    };

	    // @pragma Modification

	    Map.prototype.set = function(k, v) {
	      return updateMap(this, k, v);
	    };

	    Map.prototype.setIn = function(keyPath, v) {
	      return this.updateIn(keyPath, NOT_SET, function()  {return v});
	    };

	    Map.prototype.remove = function(k) {
	      return updateMap(this, k, NOT_SET);
	    };

	    Map.prototype.deleteIn = function(keyPath) {
	      return this.updateIn(keyPath, function()  {return NOT_SET});
	    };

	    Map.prototype.update = function(k, notSetValue, updater) {
	      return arguments.length === 1 ?
	        k(this) :
	        this.updateIn([k], notSetValue, updater);
	    };

	    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
	      if (!updater) {
	        updater = notSetValue;
	        notSetValue = undefined;
	      }
	      var updatedValue = updateInDeepMap(
	        this,
	        forceIterator(keyPath),
	        notSetValue,
	        updater
	      );
	      return updatedValue === NOT_SET ? undefined : updatedValue;
	    };

	    Map.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._root = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyMap();
	    };

	    // @pragma Composition

	    Map.prototype.merge = function(/*...iters*/) {
	      return mergeIntoMapWith(this, undefined, arguments);
	    };

	    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, merger, iters);
	    };

	    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.merge === 'function' ?
	          m.merge.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };

	    Map.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoMapWith(this, deepMerger, arguments);
	    };

	    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
	    };

	    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.mergeDeep === 'function' ?
	          m.mergeDeep.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };

	    Map.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator));
	    };

	    Map.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator, mapper));
	    };

	    // @pragma Mutability

	    Map.prototype.withMutations = function(fn) {
	      var mutable = this.asMutable();
	      fn(mutable);
	      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
	    };

	    Map.prototype.asMutable = function() {
	      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
	    };

	    Map.prototype.asImmutable = function() {
	      return this.__ensureOwner();
	    };

	    Map.prototype.wasAltered = function() {
	      return this.__altered;
	    };

	    Map.prototype.__iterator = function(type, reverse) {
	      return new MapIterator(this, type, reverse);
	    };

	    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      this._root && this._root.iterate(function(entry ) {
	        iterations++;
	        return fn(entry[1], entry[0], this$0);
	      }, reverse);
	      return iterations;
	    };

	    Map.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeMap(this.size, this._root, ownerID, this.__hash);
	    };


	  function isMap(maybeMap) {
	    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
	  }

	  Map.isMap = isMap;

	  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

	  var MapPrototype = Map.prototype;
	  MapPrototype[IS_MAP_SENTINEL] = true;
	  MapPrototype[DELETE] = MapPrototype.remove;
	  MapPrototype.removeIn = MapPrototype.deleteIn;


	  // #pragma Trie Nodes



	    function ArrayMapNode(ownerID, entries) {
	      this.ownerID = ownerID;
	      this.entries = entries;
	    }

	    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };

	    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;

	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;

	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }

	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);

	      if (removed && entries.length === 1) {
	        return; // undefined
	      }

	      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
	        return createNodes(ownerID, entries, key, value);
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);

	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }

	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }

	      return new ArrayMapNode(ownerID, newEntries);
	    };




	    function BitmapIndexedNode(ownerID, bitmap, nodes) {
	      this.ownerID = ownerID;
	      this.bitmap = bitmap;
	      this.nodes = nodes;
	    }

	    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
	      var bitmap = this.bitmap;
	      return (bitmap & bit) === 0 ? notSetValue :
	        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
	    };

	    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var bit = 1 << keyHashFrag;
	      var bitmap = this.bitmap;
	      var exists = (bitmap & bit) !== 0;

	      if (!exists && value === NOT_SET) {
	        return this;
	      }

	      var idx = popCount(bitmap & (bit - 1));
	      var nodes = this.nodes;
	      var node = exists ? nodes[idx] : undefined;
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

	      if (newNode === node) {
	        return this;
	      }

	      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
	        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
	      }

	      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
	        return nodes[idx ^ 1];
	      }

	      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
	        return newNode;
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
	      var newNodes = exists ? newNode ?
	        setIn(nodes, idx, newNode, isEditable) :
	        spliceOut(nodes, idx, isEditable) :
	        spliceIn(nodes, idx, newNode, isEditable);

	      if (isEditable) {
	        this.bitmap = newBitmap;
	        this.nodes = newNodes;
	        return this;
	      }

	      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
	    };




	    function HashArrayMapNode(ownerID, count, nodes) {
	      this.ownerID = ownerID;
	      this.count = count;
	      this.nodes = nodes;
	    }

	    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var node = this.nodes[idx];
	      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
	    };

	    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var removed = value === NOT_SET;
	      var nodes = this.nodes;
	      var node = nodes[idx];

	      if (removed && !node) {
	        return this;
	      }

	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	      if (newNode === node) {
	        return this;
	      }

	      var newCount = this.count;
	      if (!node) {
	        newCount++;
	      } else if (!newNode) {
	        newCount--;
	        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
	          return packNodes(ownerID, nodes, newCount, idx);
	        }
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newNodes = setIn(nodes, idx, newNode, isEditable);

	      if (isEditable) {
	        this.count = newCount;
	        this.nodes = newNodes;
	        return this;
	      }

	      return new HashArrayMapNode(ownerID, newCount, newNodes);
	    };




	    function HashCollisionNode(ownerID, keyHash, entries) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entries = entries;
	    }

	    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };

	    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }

	      var removed = value === NOT_SET;

	      if (keyHash !== this.keyHash) {
	        if (removed) {
	          return this;
	        }
	        SetRef(didAlter);
	        SetRef(didChangeSize);
	        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
	      }

	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;

	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }

	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);

	      if (removed && len === 2) {
	        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);

	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }

	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }

	      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
	    };




	    function ValueNode(ownerID, keyHash, entry) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entry = entry;
	    }

	    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
	    };

	    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	      var keyMatch = is(key, this.entry[0]);
	      if (keyMatch ? value === this.entry[1] : removed) {
	        return this;
	      }

	      SetRef(didAlter);

	      if (removed) {
	        SetRef(didChangeSize);
	        return; // undefined
	      }

	      if (keyMatch) {
	        if (ownerID && ownerID === this.ownerID) {
	          this.entry[1] = value;
	          return this;
	        }
	        return new ValueNode(ownerID, this.keyHash, [key, value]);
	      }

	      SetRef(didChangeSize);
	      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
	    };



	  // #pragma Iterators

	  ArrayMapNode.prototype.iterate =
	  HashCollisionNode.prototype.iterate = function (fn, reverse) {
	    var entries = this.entries;
	    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
	      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
	        return false;
	      }
	    }
	  }

	  BitmapIndexedNode.prototype.iterate =
	  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
	    var nodes = this.nodes;
	    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
	      var node = nodes[reverse ? maxIndex - ii : ii];
	      if (node && node.iterate(fn, reverse) === false) {
	        return false;
	      }
	    }
	  }

	  ValueNode.prototype.iterate = function (fn, reverse) {
	    return fn(this.entry);
	  }

	  createClass(MapIterator, Iterator);

	    function MapIterator(map, type, reverse) {
	      this._type = type;
	      this._reverse = reverse;
	      this._stack = map._root && mapIteratorFrame(map._root);
	    }

	    MapIterator.prototype.next = function() {
	      var type = this._type;
	      var stack = this._stack;
	      while (stack) {
	        var node = stack.node;
	        var index = stack.index++;
	        var maxIndex;
	        if (node.entry) {
	          if (index === 0) {
	            return mapIteratorValue(type, node.entry);
	          }
	        } else if (node.entries) {
	          maxIndex = node.entries.length - 1;
	          if (index <= maxIndex) {
	            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
	          }
	        } else {
	          maxIndex = node.nodes.length - 1;
	          if (index <= maxIndex) {
	            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
	            if (subNode) {
	              if (subNode.entry) {
	                return mapIteratorValue(type, subNode.entry);
	              }
	              stack = this._stack = mapIteratorFrame(subNode, stack);
	            }
	            continue;
	          }
	        }
	        stack = this._stack = this._stack.__prev;
	      }
	      return iteratorDone();
	    };


	  function mapIteratorValue(type, entry) {
	    return iteratorValue(type, entry[0], entry[1]);
	  }

	  function mapIteratorFrame(node, prev) {
	    return {
	      node: node,
	      index: 0,
	      __prev: prev
	    };
	  }

	  function makeMap(size, root, ownerID, hash) {
	    var map = Object.create(MapPrototype);
	    map.size = size;
	    map._root = root;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }

	  var EMPTY_MAP;
	  function emptyMap() {
	    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
	  }

	  function updateMap(map, k, v) {
	    var newRoot;
	    var newSize;
	    if (!map._root) {
	      if (v === NOT_SET) {
	        return map;
	      }
	      newSize = 1;
	      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
	    } else {
	      var didChangeSize = MakeRef(CHANGE_LENGTH);
	      var didAlter = MakeRef(DID_ALTER);
	      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
	      if (!didAlter.value) {
	        return map;
	      }
	      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
	    }
	    if (map.__ownerID) {
	      map.size = newSize;
	      map._root = newRoot;
	      map.__hash = undefined;
	      map.__altered = true;
	      return map;
	    }
	    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
	  }

	  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	    if (!node) {
	      if (value === NOT_SET) {
	        return node;
	      }
	      SetRef(didAlter);
	      SetRef(didChangeSize);
	      return new ValueNode(ownerID, keyHash, [key, value]);
	    }
	    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
	  }

	  function isLeafNode(node) {
	    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
	  }

	  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
	    if (node.keyHash === keyHash) {
	      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
	    }

	    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
	    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

	    var newNode;
	    var nodes = idx1 === idx2 ?
	      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
	      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

	    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
	  }

	  function createNodes(ownerID, entries, key, value) {
	    if (!ownerID) {
	      ownerID = new OwnerID();
	    }
	    var node = new ValueNode(ownerID, hash(key), [key, value]);
	    for (var ii = 0; ii < entries.length; ii++) {
	      var entry = entries[ii];
	      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
	    }
	    return node;
	  }

	  function packNodes(ownerID, nodes, count, excluding) {
	    var bitmap = 0;
	    var packedII = 0;
	    var packedNodes = new Array(count);
	    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
	      var node = nodes[ii];
	      if (node !== undefined && ii !== excluding) {
	        bitmap |= bit;
	        packedNodes[packedII++] = node;
	      }
	    }
	    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
	  }

	  function expandNodes(ownerID, nodes, bitmap, including, node) {
	    var count = 0;
	    var expandedNodes = new Array(SIZE);
	    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
	      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
	    }
	    expandedNodes[including] = node;
	    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
	  }

	  function mergeIntoMapWith(map, merger, iterables) {
	    var iters = [];
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = KeyedIterable(value);
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    return mergeIntoCollectionWith(map, merger, iters);
	  }

	  function deepMerger(existing, value, key) {
	    return existing && existing.mergeDeep && isIterable(value) ?
	      existing.mergeDeep(value) :
	      is(existing, value) ? existing : value;
	  }

	  function deepMergerWith(merger) {
	    return function(existing, value, key)  {
	      if (existing && existing.mergeDeepWith && isIterable(value)) {
	        return existing.mergeDeepWith(merger, value);
	      }
	      var nextValue = merger(existing, value, key);
	      return is(existing, nextValue) ? existing : nextValue;
	    };
	  }

	  function mergeIntoCollectionWith(collection, merger, iters) {
	    iters = iters.filter(function(x ) {return x.size !== 0});
	    if (iters.length === 0) {
	      return collection;
	    }
	    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
	      return collection.constructor(iters[0]);
	    }
	    return collection.withMutations(function(collection ) {
	      var mergeIntoMap = merger ?
	        function(value, key)  {
	          collection.update(key, NOT_SET, function(existing )
	            {return existing === NOT_SET ? value : merger(existing, value, key)}
	          );
	        } :
	        function(value, key)  {
	          collection.set(key, value);
	        }
	      for (var ii = 0; ii < iters.length; ii++) {
	        iters[ii].forEach(mergeIntoMap);
	      }
	    });
	  }

	  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
	    var isNotSet = existing === NOT_SET;
	    var step = keyPathIter.next();
	    if (step.done) {
	      var existingValue = isNotSet ? notSetValue : existing;
	      var newValue = updater(existingValue);
	      return newValue === existingValue ? existing : newValue;
	    }
	    invariant(
	      isNotSet || (existing && existing.set),
	      'invalid keyPath'
	    );
	    var key = step.value;
	    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
	    var nextUpdated = updateInDeepMap(
	      nextExisting,
	      keyPathIter,
	      notSetValue,
	      updater
	    );
	    return nextUpdated === nextExisting ? existing :
	      nextUpdated === NOT_SET ? existing.remove(key) :
	      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
	  }

	  function popCount(x) {
	    x = x - ((x >> 1) & 0x55555555);
	    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
	    x = (x + (x >> 4)) & 0x0f0f0f0f;
	    x = x + (x >> 8);
	    x = x + (x >> 16);
	    return x & 0x7f;
	  }

	  function setIn(array, idx, val, canEdit) {
	    var newArray = canEdit ? array : arrCopy(array);
	    newArray[idx] = val;
	    return newArray;
	  }

	  function spliceIn(array, idx, val, canEdit) {
	    var newLen = array.length + 1;
	    if (canEdit && idx + 1 === newLen) {
	      array[idx] = val;
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        newArray[ii] = val;
	        after = -1;
	      } else {
	        newArray[ii] = array[ii + after];
	      }
	    }
	    return newArray;
	  }

	  function spliceOut(array, idx, canEdit) {
	    var newLen = array.length - 1;
	    if (canEdit && idx === newLen) {
	      array.pop();
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        after = 1;
	      }
	      newArray[ii] = array[ii + after];
	    }
	    return newArray;
	  }

	  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
	  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
	  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

	  createClass(List, IndexedCollection);

	    // @pragma Construction

	    function List(value) {
	      var empty = emptyList();
	      if (value === null || value === undefined) {
	        return empty;
	      }
	      if (isList(value)) {
	        return value;
	      }
	      var iter = IndexedIterable(value);
	      var size = iter.size;
	      if (size === 0) {
	        return empty;
	      }
	      assertNotInfinite(size);
	      if (size > 0 && size < SIZE) {
	        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
	      }
	      return empty.withMutations(function(list ) {
	        list.setSize(size);
	        iter.forEach(function(v, i)  {return list.set(i, v)});
	      });
	    }

	    List.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    List.prototype.toString = function() {
	      return this.__toString('List [', ']');
	    };

	    // @pragma Access

	    List.prototype.get = function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      if (index >= 0 && index < this.size) {
	        index += this._origin;
	        var node = listNodeFor(this, index);
	        return node && node.array[index & MASK];
	      }
	      return notSetValue;
	    };

	    // @pragma Modification

	    List.prototype.set = function(index, value) {
	      return updateList(this, index, value);
	    };

	    List.prototype.remove = function(index) {
	      return !this.has(index) ? this :
	        index === 0 ? this.shift() :
	        index === this.size - 1 ? this.pop() :
	        this.splice(index, 1);
	    };

	    List.prototype.insert = function(index, value) {
	      return this.splice(index, 0, value);
	    };

	    List.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = this._origin = this._capacity = 0;
	        this._level = SHIFT;
	        this._root = this._tail = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyList();
	    };

	    List.prototype.push = function(/*...values*/) {
	      var values = arguments;
	      var oldSize = this.size;
	      return this.withMutations(function(list ) {
	        setListBounds(list, 0, oldSize + values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(oldSize + ii, values[ii]);
	        }
	      });
	    };

	    List.prototype.pop = function() {
	      return setListBounds(this, 0, -1);
	    };

	    List.prototype.unshift = function(/*...values*/) {
	      var values = arguments;
	      return this.withMutations(function(list ) {
	        setListBounds(list, -values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(ii, values[ii]);
	        }
	      });
	    };

	    List.prototype.shift = function() {
	      return setListBounds(this, 1);
	    };

	    // @pragma Composition

	    List.prototype.merge = function(/*...iters*/) {
	      return mergeIntoListWith(this, undefined, arguments);
	    };

	    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, merger, iters);
	    };

	    List.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoListWith(this, deepMerger, arguments);
	    };

	    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, deepMergerWith(merger), iters);
	    };

	    List.prototype.setSize = function(size) {
	      return setListBounds(this, 0, size);
	    };

	    // @pragma Iteration

	    List.prototype.slice = function(begin, end) {
	      var size = this.size;
	      if (wholeSlice(begin, end, size)) {
	        return this;
	      }
	      return setListBounds(
	        this,
	        resolveBegin(begin, size),
	        resolveEnd(end, size)
	      );
	    };

	    List.prototype.__iterator = function(type, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      return new Iterator(function()  {
	        var value = values();
	        return value === DONE ?
	          iteratorDone() :
	          iteratorValue(type, index++, value);
	      });
	    };

	    List.prototype.__iterate = function(fn, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      var value;
	      while ((value = values()) !== DONE) {
	        if (fn(value, index++, this) === false) {
	          break;
	        }
	      }
	      return index;
	    };

	    List.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        return this;
	      }
	      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
	    };


	  function isList(maybeList) {
	    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
	  }

	  List.isList = isList;

	  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

	  var ListPrototype = List.prototype;
	  ListPrototype[IS_LIST_SENTINEL] = true;
	  ListPrototype[DELETE] = ListPrototype.remove;
	  ListPrototype.setIn = MapPrototype.setIn;
	  ListPrototype.deleteIn =
	  ListPrototype.removeIn = MapPrototype.removeIn;
	  ListPrototype.update = MapPrototype.update;
	  ListPrototype.updateIn = MapPrototype.updateIn;
	  ListPrototype.mergeIn = MapPrototype.mergeIn;
	  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  ListPrototype.withMutations = MapPrototype.withMutations;
	  ListPrototype.asMutable = MapPrototype.asMutable;
	  ListPrototype.asImmutable = MapPrototype.asImmutable;
	  ListPrototype.wasAltered = MapPrototype.wasAltered;



	    function VNode(array, ownerID) {
	      this.array = array;
	      this.ownerID = ownerID;
	    }

	    // TODO: seems like these methods are very similar

	    VNode.prototype.removeBefore = function(ownerID, level, index) {
	      if (index === level ? 1 << level : 0 || this.array.length === 0) {
	        return this;
	      }
	      var originIndex = (index >>> level) & MASK;
	      if (originIndex >= this.array.length) {
	        return new VNode([], ownerID);
	      }
	      var removingFirst = originIndex === 0;
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[originIndex];
	        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && removingFirst) {
	          return this;
	        }
	      }
	      if (removingFirst && !newChild) {
	        return this;
	      }
	      var editable = editableVNode(this, ownerID);
	      if (!removingFirst) {
	        for (var ii = 0; ii < originIndex; ii++) {
	          editable.array[ii] = undefined;
	        }
	      }
	      if (newChild) {
	        editable.array[originIndex] = newChild;
	      }
	      return editable;
	    };

	    VNode.prototype.removeAfter = function(ownerID, level, index) {
	      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
	        return this;
	      }
	      var sizeIndex = ((index - 1) >>> level) & MASK;
	      if (sizeIndex >= this.array.length) {
	        return this;
	      }

	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[sizeIndex];
	        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
	          return this;
	        }
	      }

	      var editable = editableVNode(this, ownerID);
	      editable.array.splice(sizeIndex + 1);
	      if (newChild) {
	        editable.array[sizeIndex] = newChild;
	      }
	      return editable;
	    };



	  var DONE = {};

	  function iterateList(list, reverse) {
	    var left = list._origin;
	    var right = list._capacity;
	    var tailPos = getTailOffset(right);
	    var tail = list._tail;

	    return iterateNodeOrLeaf(list._root, list._level, 0);

	    function iterateNodeOrLeaf(node, level, offset) {
	      return level === 0 ?
	        iterateLeaf(node, offset) :
	        iterateNode(node, level, offset);
	    }

	    function iterateLeaf(node, offset) {
	      var array = offset === tailPos ? tail && tail.array : node && node.array;
	      var from = offset > left ? 0 : left - offset;
	      var to = right - offset;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        if (from === to) {
	          return DONE;
	        }
	        var idx = reverse ? --to : from++;
	        return array && array[idx];
	      };
	    }

	    function iterateNode(node, level, offset) {
	      var values;
	      var array = node && node.array;
	      var from = offset > left ? 0 : (left - offset) >> level;
	      var to = ((right - offset) >> level) + 1;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        do {
	          if (values) {
	            var value = values();
	            if (value !== DONE) {
	              return value;
	            }
	            values = null;
	          }
	          if (from === to) {
	            return DONE;
	          }
	          var idx = reverse ? --to : from++;
	          values = iterateNodeOrLeaf(
	            array && array[idx], level - SHIFT, offset + (idx << level)
	          );
	        } while (true);
	      };
	    }
	  }

	  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
	    var list = Object.create(ListPrototype);
	    list.size = capacity - origin;
	    list._origin = origin;
	    list._capacity = capacity;
	    list._level = level;
	    list._root = root;
	    list._tail = tail;
	    list.__ownerID = ownerID;
	    list.__hash = hash;
	    list.__altered = false;
	    return list;
	  }

	  var EMPTY_LIST;
	  function emptyList() {
	    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
	  }

	  function updateList(list, index, value) {
	    index = wrapIndex(list, index);

	    if (index !== index) {
	      return list;
	    }

	    if (index >= list.size || index < 0) {
	      return list.withMutations(function(list ) {
	        index < 0 ?
	          setListBounds(list, index).set(0, value) :
	          setListBounds(list, 0, index + 1).set(index, value)
	      });
	    }

	    index += list._origin;

	    var newTail = list._tail;
	    var newRoot = list._root;
	    var didAlter = MakeRef(DID_ALTER);
	    if (index >= getTailOffset(list._capacity)) {
	      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
	    } else {
	      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
	    }

	    if (!didAlter.value) {
	      return list;
	    }

	    if (list.__ownerID) {
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
	  }

	  function updateVNode(node, ownerID, level, index, value, didAlter) {
	    var idx = (index >>> level) & MASK;
	    var nodeHas = node && idx < node.array.length;
	    if (!nodeHas && value === undefined) {
	      return node;
	    }

	    var newNode;

	    if (level > 0) {
	      var lowerNode = node && node.array[idx];
	      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
	      if (newLowerNode === lowerNode) {
	        return node;
	      }
	      newNode = editableVNode(node, ownerID);
	      newNode.array[idx] = newLowerNode;
	      return newNode;
	    }

	    if (nodeHas && node.array[idx] === value) {
	      return node;
	    }

	    SetRef(didAlter);

	    newNode = editableVNode(node, ownerID);
	    if (value === undefined && idx === newNode.array.length - 1) {
	      newNode.array.pop();
	    } else {
	      newNode.array[idx] = value;
	    }
	    return newNode;
	  }

	  function editableVNode(node, ownerID) {
	    if (ownerID && node && ownerID === node.ownerID) {
	      return node;
	    }
	    return new VNode(node ? node.array.slice() : [], ownerID);
	  }

	  function listNodeFor(list, rawIndex) {
	    if (rawIndex >= getTailOffset(list._capacity)) {
	      return list._tail;
	    }
	    if (rawIndex < 1 << (list._level + SHIFT)) {
	      var node = list._root;
	      var level = list._level;
	      while (node && level > 0) {
	        node = node.array[(rawIndex >>> level) & MASK];
	        level -= SHIFT;
	      }
	      return node;
	    }
	  }

	  function setListBounds(list, begin, end) {
	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      end = end | 0;
	    }
	    var owner = list.__ownerID || new OwnerID();
	    var oldOrigin = list._origin;
	    var oldCapacity = list._capacity;
	    var newOrigin = oldOrigin + begin;
	    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
	    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
	      return list;
	    }

	    // If it's going to end after it starts, it's empty.
	    if (newOrigin >= newCapacity) {
	      return list.clear();
	    }

	    var newLevel = list._level;
	    var newRoot = list._root;

	    // New origin might need creating a higher root.
	    var offsetShift = 0;
	    while (newOrigin + offsetShift < 0) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
	      newLevel += SHIFT;
	      offsetShift += 1 << newLevel;
	    }
	    if (offsetShift) {
	      newOrigin += offsetShift;
	      oldOrigin += offsetShift;
	      newCapacity += offsetShift;
	      oldCapacity += offsetShift;
	    }

	    var oldTailOffset = getTailOffset(oldCapacity);
	    var newTailOffset = getTailOffset(newCapacity);

	    // New size might need creating a higher root.
	    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
	      newLevel += SHIFT;
	    }

	    // Locate or create the new tail.
	    var oldTail = list._tail;
	    var newTail = newTailOffset < oldTailOffset ?
	      listNodeFor(list, newCapacity - 1) :
	      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

	    // Merge Tail into tree.
	    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
	      newRoot = editableVNode(newRoot, owner);
	      var node = newRoot;
	      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
	        var idx = (oldTailOffset >>> level) & MASK;
	        node = node.array[idx] = editableVNode(node.array[idx], owner);
	      }
	      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
	    }

	    // If the size has been reduced, there's a chance the tail needs to be trimmed.
	    if (newCapacity < oldCapacity) {
	      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
	    }

	    // If the new origin is within the tail, then we do not need a root.
	    if (newOrigin >= newTailOffset) {
	      newOrigin -= newTailOffset;
	      newCapacity -= newTailOffset;
	      newLevel = SHIFT;
	      newRoot = null;
	      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

	    // Otherwise, if the root has been trimmed, garbage collect.
	    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
	      offsetShift = 0;

	      // Identify the new top root node of the subtree of the old root.
	      while (newRoot) {
	        var beginIndex = (newOrigin >>> newLevel) & MASK;
	        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
	          break;
	        }
	        if (beginIndex) {
	          offsetShift += (1 << newLevel) * beginIndex;
	        }
	        newLevel -= SHIFT;
	        newRoot = newRoot.array[beginIndex];
	      }

	      // Trim the new sides of the new root.
	      if (newRoot && newOrigin > oldOrigin) {
	        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
	      }
	      if (newRoot && newTailOffset < oldTailOffset) {
	        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
	      }
	      if (offsetShift) {
	        newOrigin -= offsetShift;
	        newCapacity -= offsetShift;
	      }
	    }

	    if (list.__ownerID) {
	      list.size = newCapacity - newOrigin;
	      list._origin = newOrigin;
	      list._capacity = newCapacity;
	      list._level = newLevel;
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
	  }

	  function mergeIntoListWith(list, merger, iterables) {
	    var iters = [];
	    var maxSize = 0;
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = IndexedIterable(value);
	      if (iter.size > maxSize) {
	        maxSize = iter.size;
	      }
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    if (maxSize > list.size) {
	      list = list.setSize(maxSize);
	    }
	    return mergeIntoCollectionWith(list, merger, iters);
	  }

	  function getTailOffset(size) {
	    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
	  }

	  createClass(OrderedMap, Map);

	    // @pragma Construction

	    function OrderedMap(value) {
	      return value === null || value === undefined ? emptyOrderedMap() :
	        isOrderedMap(value) ? value :
	        emptyOrderedMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }

	    OrderedMap.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    OrderedMap.prototype.toString = function() {
	      return this.__toString('OrderedMap {', '}');
	    };

	    // @pragma Access

	    OrderedMap.prototype.get = function(k, notSetValue) {
	      var index = this._map.get(k);
	      return index !== undefined ? this._list.get(index)[1] : notSetValue;
	    };

	    // @pragma Modification

	    OrderedMap.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._map.clear();
	        this._list.clear();
	        return this;
	      }
	      return emptyOrderedMap();
	    };

	    OrderedMap.prototype.set = function(k, v) {
	      return updateOrderedMap(this, k, v);
	    };

	    OrderedMap.prototype.remove = function(k) {
	      return updateOrderedMap(this, k, NOT_SET);
	    };

	    OrderedMap.prototype.wasAltered = function() {
	      return this._map.wasAltered() || this._list.wasAltered();
	    };

	    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._list.__iterate(
	        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
	        reverse
	      );
	    };

	    OrderedMap.prototype.__iterator = function(type, reverse) {
	      return this._list.fromEntrySeq().__iterator(type, reverse);
	    };

	    OrderedMap.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      var newList = this._list.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        this._list = newList;
	        return this;
	      }
	      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
	    };


	  function isOrderedMap(maybeOrderedMap) {
	    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
	  }

	  OrderedMap.isOrderedMap = isOrderedMap;

	  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
	  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



	  function makeOrderedMap(map, list, ownerID, hash) {
	    var omap = Object.create(OrderedMap.prototype);
	    omap.size = map ? map.size : 0;
	    omap._map = map;
	    omap._list = list;
	    omap.__ownerID = ownerID;
	    omap.__hash = hash;
	    return omap;
	  }

	  var EMPTY_ORDERED_MAP;
	  function emptyOrderedMap() {
	    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
	  }

	  function updateOrderedMap(omap, k, v) {
	    var map = omap._map;
	    var list = omap._list;
	    var i = map.get(k);
	    var has = i !== undefined;
	    var newMap;
	    var newList;
	    if (v === NOT_SET) { // removed
	      if (!has) {
	        return omap;
	      }
	      if (list.size >= SIZE && list.size >= map.size * 2) {
	        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
	        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
	        if (omap.__ownerID) {
	          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
	        }
	      } else {
	        newMap = map.remove(k);
	        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
	      }
	    } else {
	      if (has) {
	        if (v === list.get(i)[1]) {
	          return omap;
	        }
	        newMap = map;
	        newList = list.set(i, [k, v]);
	      } else {
	        newMap = map.set(k, list.size);
	        newList = list.set(list.size, [k, v]);
	      }
	    }
	    if (omap.__ownerID) {
	      omap.size = newMap.size;
	      omap._map = newMap;
	      omap._list = newList;
	      omap.__hash = undefined;
	      return omap;
	    }
	    return makeOrderedMap(newMap, newList);
	  }

	  createClass(ToKeyedSequence, KeyedSeq);
	    function ToKeyedSequence(indexed, useKeys) {
	      this._iter = indexed;
	      this._useKeys = useKeys;
	      this.size = indexed.size;
	    }

	    ToKeyedSequence.prototype.get = function(key, notSetValue) {
	      return this._iter.get(key, notSetValue);
	    };

	    ToKeyedSequence.prototype.has = function(key) {
	      return this._iter.has(key);
	    };

	    ToKeyedSequence.prototype.valueSeq = function() {
	      return this._iter.valueSeq();
	    };

	    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
	      var reversedSequence = reverseFactory(this, true);
	      if (!this._useKeys) {
	        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
	      }
	      return reversedSequence;
	    };

	    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
	      var mappedSequence = mapFactory(this, mapper, context);
	      if (!this._useKeys) {
	        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
	      }
	      return mappedSequence;
	    };

	    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var ii;
	      return this._iter.__iterate(
	        this._useKeys ?
	          function(v, k)  {return fn(v, k, this$0)} :
	          ((ii = reverse ? resolveSize(this) : 0),
	            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
	        reverse
	      );
	    };

	    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
	      if (this._useKeys) {
	        return this._iter.__iterator(type, reverse);
	      }
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var ii = reverse ? resolveSize(this) : 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
	      });
	    };

	  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


	  createClass(ToIndexedSequence, IndexedSeq);
	    function ToIndexedSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }

	    ToIndexedSequence.prototype.includes = function(value) {
	      return this._iter.includes(value);
	    };

	    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
	    };

	    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, iterations++, step.value, step)
	      });
	    };



	  createClass(ToSetSequence, SetSeq);
	    function ToSetSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }

	    ToSetSequence.prototype.has = function(key) {
	      return this._iter.includes(key);
	    };

	    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
	    };

	    ToSetSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, step.value, step.value, step);
	      });
	    };



	  createClass(FromEntriesSequence, KeyedSeq);
	    function FromEntriesSequence(entries) {
	      this._iter = entries;
	      this.size = entries.size;
	    }

	    FromEntriesSequence.prototype.entrySeq = function() {
	      return this._iter.toSeq();
	    };

	    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(entry ) {
	        // Check if entry exists first so array access doesn't throw for holes
	        // in the parent iteration.
	        if (entry) {
	          validateEntry(entry);
	          var indexedIterable = isIterable(entry);
	          return fn(
	            indexedIterable ? entry.get(1) : entry[1],
	            indexedIterable ? entry.get(0) : entry[0],
	            this$0
	          );
	        }
	      }, reverse);
	    };

	    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          // Check if entry exists first so array access doesn't throw for holes
	          // in the parent iteration.
	          if (entry) {
	            validateEntry(entry);
	            var indexedIterable = isIterable(entry);
	            return iteratorValue(
	              type,
	              indexedIterable ? entry.get(0) : entry[0],
	              indexedIterable ? entry.get(1) : entry[1],
	              step
	            );
	          }
	        }
	      });
	    };


	  ToIndexedSequence.prototype.cacheResult =
	  ToKeyedSequence.prototype.cacheResult =
	  ToSetSequence.prototype.cacheResult =
	  FromEntriesSequence.prototype.cacheResult =
	    cacheResultThrough;


	  function flipFactory(iterable) {
	    var flipSequence = makeSequence(iterable);
	    flipSequence._iter = iterable;
	    flipSequence.size = iterable.size;
	    flipSequence.flip = function()  {return iterable};
	    flipSequence.reverse = function () {
	      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
	      reversedSequence.flip = function()  {return iterable.reverse()};
	      return reversedSequence;
	    };
	    flipSequence.has = function(key ) {return iterable.includes(key)};
	    flipSequence.includes = function(key ) {return iterable.has(key)};
	    flipSequence.cacheResult = cacheResultThrough;
	    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
	    }
	    flipSequence.__iteratorUncached = function(type, reverse) {
	      if (type === ITERATE_ENTRIES) {
	        var iterator = iterable.__iterator(type, reverse);
	        return new Iterator(function()  {
	          var step = iterator.next();
	          if (!step.done) {
	            var k = step.value[0];
	            step.value[0] = step.value[1];
	            step.value[1] = k;
	          }
	          return step;
	        });
	      }
	      return iterable.__iterator(
	        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
	        reverse
	      );
	    }
	    return flipSequence;
	  }


	  function mapFactory(iterable, mapper, context) {
	    var mappedSequence = makeSequence(iterable);
	    mappedSequence.size = iterable.size;
	    mappedSequence.has = function(key ) {return iterable.has(key)};
	    mappedSequence.get = function(key, notSetValue)  {
	      var v = iterable.get(key, NOT_SET);
	      return v === NOT_SET ?
	        notSetValue :
	        mapper.call(context, v, key, iterable);
	    };
	    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(
	        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
	        reverse
	      );
	    }
	    mappedSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var key = entry[0];
	        return iteratorValue(
	          type,
	          key,
	          mapper.call(context, entry[1], key, iterable),
	          step
	        );
	      });
	    }
	    return mappedSequence;
	  }


	  function reverseFactory(iterable, useKeys) {
	    var reversedSequence = makeSequence(iterable);
	    reversedSequence._iter = iterable;
	    reversedSequence.size = iterable.size;
	    reversedSequence.reverse = function()  {return iterable};
	    if (iterable.flip) {
	      reversedSequence.flip = function () {
	        var flipSequence = flipFactory(iterable);
	        flipSequence.reverse = function()  {return iterable.flip()};
	        return flipSequence;
	      };
	    }
	    reversedSequence.get = function(key, notSetValue) 
	      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
	    reversedSequence.has = function(key )
	      {return iterable.has(useKeys ? key : -1 - key)};
	    reversedSequence.includes = function(value ) {return iterable.includes(value)};
	    reversedSequence.cacheResult = cacheResultThrough;
	    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
	    };
	    reversedSequence.__iterator =
	      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
	    return reversedSequence;
	  }


	  function filterFactory(iterable, predicate, context, useKeys) {
	    var filterSequence = makeSequence(iterable);
	    if (useKeys) {
	      filterSequence.has = function(key ) {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
	      };
	      filterSequence.get = function(key, notSetValue)  {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
	          v : notSetValue;
	      };
	    }
	    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      }, reverse);
	      return iterations;
	    };
	    filterSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          var key = entry[0];
	          var value = entry[1];
	          if (predicate.call(context, value, key, iterable)) {
	            return iteratorValue(type, useKeys ? key : iterations++, value, step);
	          }
	        }
	      });
	    }
	    return filterSequence;
	  }


	  function countByFactory(iterable, grouper, context) {
	    var groups = Map().asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        0,
	        function(a ) {return a + 1}
	      );
	    });
	    return groups.asImmutable();
	  }


	  function groupByFactory(iterable, grouper, context) {
	    var isKeyedIter = isKeyed(iterable);
	    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
	      );
	    });
	    var coerce = iterableClass(iterable);
	    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
	  }


	  function sliceFactory(iterable, begin, end, useKeys) {
	    var originalSize = iterable.size;

	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      if (end === Infinity) {
	        end = originalSize;
	      } else {
	        end = end | 0;
	      }
	    }

	    if (wholeSlice(begin, end, originalSize)) {
	      return iterable;
	    }

	    var resolvedBegin = resolveBegin(begin, originalSize);
	    var resolvedEnd = resolveEnd(end, originalSize);

	    // begin or end will be NaN if they were provided as negative numbers and
	    // this iterable's size is unknown. In that case, cache first so there is
	    // a known size and these do not resolve to NaN.
	    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
	      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
	    }

	    // Note: resolvedEnd is undefined when the original sequence's length is
	    // unknown and this slice did not supply an end and should contain all
	    // elements after resolvedBegin.
	    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
	    var resolvedSize = resolvedEnd - resolvedBegin;
	    var sliceSize;
	    if (resolvedSize === resolvedSize) {
	      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
	    }

	    var sliceSeq = makeSequence(iterable);

	    // If iterable.size is undefined, the size of the realized sliceSeq is
	    // unknown at this point unless the number of items to slice is 0
	    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

	    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
	      sliceSeq.get = function (index, notSetValue) {
	        index = wrapIndex(this, index);
	        return index >= 0 && index < sliceSize ?
	          iterable.get(index + resolvedBegin, notSetValue) :
	          notSetValue;
	      }
	    }

	    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (sliceSize === 0) {
	        return 0;
	      }
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var skipped = 0;
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k)  {
	        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
	                 iterations !== sliceSize;
	        }
	      });
	      return iterations;
	    };

	    sliceSeq.__iteratorUncached = function(type, reverse) {
	      if (sliceSize !== 0 && reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      // Don't bother instantiating parent iterator if taking 0.
	      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
	      var skipped = 0;
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (skipped++ < resolvedBegin) {
	          iterator.next();
	        }
	        if (++iterations > sliceSize) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (useKeys || type === ITERATE_VALUES) {
	          return step;
	        } else if (type === ITERATE_KEYS) {
	          return iteratorValue(type, iterations - 1, undefined, step);
	        } else {
	          return iteratorValue(type, iterations - 1, step.value[1], step);
	        }
	      });
	    }

	    return sliceSeq;
	  }


	  function takeWhileFactory(iterable, predicate, context) {
	    var takeSequence = makeSequence(iterable);
	    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c) 
	        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
	      );
	      return iterations;
	    };
	    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterating = true;
	      return new Iterator(function()  {
	        if (!iterating) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var k = entry[0];
	        var v = entry[1];
	        if (!predicate.call(context, v, k, this$0)) {
	          iterating = false;
	          return iteratorDone();
	        }
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return takeSequence;
	  }


	  function skipWhileFactory(iterable, predicate, context, useKeys) {
	    var skipSequence = makeSequence(iterable);
	    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      });
	      return iterations;
	    };
	    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var skipping = true;
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step, k, v;
	        do {
	          step = iterator.next();
	          if (step.done) {
	            if (useKeys || type === ITERATE_VALUES) {
	              return step;
	            } else if (type === ITERATE_KEYS) {
	              return iteratorValue(type, iterations++, undefined, step);
	            } else {
	              return iteratorValue(type, iterations++, step.value[1], step);
	            }
	          }
	          var entry = step.value;
	          k = entry[0];
	          v = entry[1];
	          skipping && (skipping = predicate.call(context, v, k, this$0));
	        } while (skipping);
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return skipSequence;
	  }


	  function concatFactory(iterable, values) {
	    var isKeyedIterable = isKeyed(iterable);
	    var iters = [iterable].concat(values).map(function(v ) {
	      if (!isIterable(v)) {
	        v = isKeyedIterable ?
	          keyedSeqFromValue(v) :
	          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
	      } else if (isKeyedIterable) {
	        v = KeyedIterable(v);
	      }
	      return v;
	    }).filter(function(v ) {return v.size !== 0});

	    if (iters.length === 0) {
	      return iterable;
	    }

	    if (iters.length === 1) {
	      var singleton = iters[0];
	      if (singleton === iterable ||
	          isKeyedIterable && isKeyed(singleton) ||
	          isIndexed(iterable) && isIndexed(singleton)) {
	        return singleton;
	      }
	    }

	    var concatSeq = new ArraySeq(iters);
	    if (isKeyedIterable) {
	      concatSeq = concatSeq.toKeyedSeq();
	    } else if (!isIndexed(iterable)) {
	      concatSeq = concatSeq.toSetSeq();
	    }
	    concatSeq = concatSeq.flatten(true);
	    concatSeq.size = iters.reduce(
	      function(sum, seq)  {
	        if (sum !== undefined) {
	          var size = seq.size;
	          if (size !== undefined) {
	            return sum + size;
	          }
	        }
	      },
	      0
	    );
	    return concatSeq;
	  }


	  function flattenFactory(iterable, depth, useKeys) {
	    var flatSequence = makeSequence(iterable);
	    flatSequence.__iterateUncached = function(fn, reverse) {
	      var iterations = 0;
	      var stopped = false;
	      function flatDeep(iter, currentDepth) {var this$0 = this;
	        iter.__iterate(function(v, k)  {
	          if ((!depth || currentDepth < depth) && isIterable(v)) {
	            flatDeep(v, currentDepth + 1);
	          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
	            stopped = true;
	          }
	          return !stopped;
	        }, reverse);
	      }
	      flatDeep(iterable, 0);
	      return iterations;
	    }
	    flatSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(type, reverse);
	      var stack = [];
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (iterator) {
	          var step = iterator.next();
	          if (step.done !== false) {
	            iterator = stack.pop();
	            continue;
	          }
	          var v = step.value;
	          if (type === ITERATE_ENTRIES) {
	            v = v[1];
	          }
	          if ((!depth || stack.length < depth) && isIterable(v)) {
	            stack.push(iterator);
	            iterator = v.__iterator(type, reverse);
	          } else {
	            return useKeys ? step : iteratorValue(type, iterations++, v, step);
	          }
	        }
	        return iteratorDone();
	      });
	    }
	    return flatSequence;
	  }


	  function flatMapFactory(iterable, mapper, context) {
	    var coerce = iterableClass(iterable);
	    return iterable.toSeq().map(
	      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
	    ).flatten(true);
	  }


	  function interposeFactory(iterable, separator) {
	    var interposedSequence = makeSequence(iterable);
	    interposedSequence.size = iterable.size && iterable.size * 2 -1;
	    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k) 
	        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
	        fn(v, iterations++, this$0) !== false},
	        reverse
	      );
	      return iterations;
	    };
	    interposedSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      var step;
	      return new Iterator(function()  {
	        if (!step || iterations % 2) {
	          step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	        }
	        return iterations % 2 ?
	          iteratorValue(type, iterations++, separator) :
	          iteratorValue(type, iterations++, step.value, step);
	      });
	    };
	    return interposedSequence;
	  }


	  function sortFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    var isKeyedIterable = isKeyed(iterable);
	    var index = 0;
	    var entries = iterable.toSeq().map(
	      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
	    ).toArray();
	    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
	      isKeyedIterable ?
	      function(v, i)  { entries[i].length = 2; } :
	      function(v, i)  { entries[i] = v[1]; }
	    );
	    return isKeyedIterable ? KeyedSeq(entries) :
	      isIndexed(iterable) ? IndexedSeq(entries) :
	      SetSeq(entries);
	  }


	  function maxFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    if (mapper) {
	      var entry = iterable.toSeq()
	        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
	        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
	      return entry && entry[0];
	    } else {
	      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
	    }
	  }

	  function maxCompare(comparator, a, b) {
	    var comp = comparator(b, a);
	    // b is considered the new max if the comparator declares them equal, but
	    // they are not equal and b is in fact a nullish value.
	    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
	  }


	  function zipWithFactory(keyIter, zipper, iters) {
	    var zipSequence = makeSequence(keyIter);
	    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
	    // Note: this a generic base implementation of __iterate in terms of
	    // __iterator which may be more generically useful in the future.
	    zipSequence.__iterate = function(fn, reverse) {
	      /* generic:
	      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        iterations++;
	        if (fn(step.value[1], step.value[0], this) === false) {
	          break;
	        }
	      }
	      return iterations;
	      */
	      // indexed:
	      var iterator = this.__iterator(ITERATE_VALUES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        if (fn(step.value, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	    zipSequence.__iteratorUncached = function(type, reverse) {
	      var iterators = iters.map(function(i )
	        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
	      );
	      var iterations = 0;
	      var isDone = false;
	      return new Iterator(function()  {
	        var steps;
	        if (!isDone) {
	          steps = iterators.map(function(i ) {return i.next()});
	          isDone = steps.some(function(s ) {return s.done});
	        }
	        if (isDone) {
	          return iteratorDone();
	        }
	        return iteratorValue(
	          type,
	          iterations++,
	          zipper.apply(null, steps.map(function(s ) {return s.value}))
	        );
	      });
	    };
	    return zipSequence
	  }


	  // #pragma Helper Functions

	  function reify(iter, seq) {
	    return isSeq(iter) ? seq : iter.constructor(seq);
	  }

	  function validateEntry(entry) {
	    if (entry !== Object(entry)) {
	      throw new TypeError('Expected [K, V] tuple: ' + entry);
	    }
	  }

	  function resolveSize(iter) {
	    assertNotInfinite(iter.size);
	    return ensureSize(iter);
	  }

	  function iterableClass(iterable) {
	    return isKeyed(iterable) ? KeyedIterable :
	      isIndexed(iterable) ? IndexedIterable :
	      SetIterable;
	  }

	  function makeSequence(iterable) {
	    return Object.create(
	      (
	        isKeyed(iterable) ? KeyedSeq :
	        isIndexed(iterable) ? IndexedSeq :
	        SetSeq
	      ).prototype
	    );
	  }

	  function cacheResultThrough() {
	    if (this._iter.cacheResult) {
	      this._iter.cacheResult();
	      this.size = this._iter.size;
	      return this;
	    } else {
	      return Seq.prototype.cacheResult.call(this);
	    }
	  }

	  function defaultComparator(a, b) {
	    return a > b ? 1 : a < b ? -1 : 0;
	  }

	  function forceIterator(keyPath) {
	    var iter = getIterator(keyPath);
	    if (!iter) {
	      // Array might not be iterable in this environment, so we need a fallback
	      // to our wrapped type.
	      if (!isArrayLike(keyPath)) {
	        throw new TypeError('Expected iterable or array-like: ' + keyPath);
	      }
	      iter = getIterator(Iterable(keyPath));
	    }
	    return iter;
	  }

	  createClass(Record, KeyedCollection);

	    function Record(defaultValues, name) {
	      var hasInitialized;

	      var RecordType = function Record(values) {
	        if (values instanceof RecordType) {
	          return values;
	        }
	        if (!(this instanceof RecordType)) {
	          return new RecordType(values);
	        }
	        if (!hasInitialized) {
	          hasInitialized = true;
	          var keys = Object.keys(defaultValues);
	          setProps(RecordTypePrototype, keys);
	          RecordTypePrototype.size = keys.length;
	          RecordTypePrototype._name = name;
	          RecordTypePrototype._keys = keys;
	          RecordTypePrototype._defaultValues = defaultValues;
	        }
	        this._map = Map(values);
	      };

	      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
	      RecordTypePrototype.constructor = RecordType;

	      return RecordType;
	    }

	    Record.prototype.toString = function() {
	      return this.__toString(recordName(this) + ' {', '}');
	    };

	    // @pragma Access

	    Record.prototype.has = function(k) {
	      return this._defaultValues.hasOwnProperty(k);
	    };

	    Record.prototype.get = function(k, notSetValue) {
	      if (!this.has(k)) {
	        return notSetValue;
	      }
	      var defaultVal = this._defaultValues[k];
	      return this._map ? this._map.get(k, defaultVal) : defaultVal;
	    };

	    // @pragma Modification

	    Record.prototype.clear = function() {
	      if (this.__ownerID) {
	        this._map && this._map.clear();
	        return this;
	      }
	      var RecordType = this.constructor;
	      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
	    };

	    Record.prototype.set = function(k, v) {
	      if (!this.has(k)) {
	        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
	      }
	      if (this._map && !this._map.has(k)) {
	        var defaultVal = this._defaultValues[k];
	        if (v === defaultVal) {
	          return this;
	        }
	      }
	      var newMap = this._map && this._map.set(k, v);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };

	    Record.prototype.remove = function(k) {
	      if (!this.has(k)) {
	        return this;
	      }
	      var newMap = this._map && this._map.remove(k);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };

	    Record.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };

	    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
	    };

	    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
	    };

	    Record.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map && this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return makeRecord(this, newMap, ownerID);
	    };


	  var RecordPrototype = Record.prototype;
	  RecordPrototype[DELETE] = RecordPrototype.remove;
	  RecordPrototype.deleteIn =
	  RecordPrototype.removeIn = MapPrototype.removeIn;
	  RecordPrototype.merge = MapPrototype.merge;
	  RecordPrototype.mergeWith = MapPrototype.mergeWith;
	  RecordPrototype.mergeIn = MapPrototype.mergeIn;
	  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
	  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
	  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  RecordPrototype.setIn = MapPrototype.setIn;
	  RecordPrototype.update = MapPrototype.update;
	  RecordPrototype.updateIn = MapPrototype.updateIn;
	  RecordPrototype.withMutations = MapPrototype.withMutations;
	  RecordPrototype.asMutable = MapPrototype.asMutable;
	  RecordPrototype.asImmutable = MapPrototype.asImmutable;


	  function makeRecord(likeRecord, map, ownerID) {
	    var record = Object.create(Object.getPrototypeOf(likeRecord));
	    record._map = map;
	    record.__ownerID = ownerID;
	    return record;
	  }

	  function recordName(record) {
	    return record._name || record.constructor.name || 'Record';
	  }

	  function setProps(prototype, names) {
	    try {
	      names.forEach(setProp.bind(undefined, prototype));
	    } catch (error) {
	      // Object.defineProperty failed. Probably IE8.
	    }
	  }

	  function setProp(prototype, name) {
	    Object.defineProperty(prototype, name, {
	      get: function() {
	        return this.get(name);
	      },
	      set: function(value) {
	        invariant(this.__ownerID, 'Cannot set on an immutable record.');
	        this.set(name, value);
	      }
	    });
	  }

	  createClass(Set, SetCollection);

	    // @pragma Construction

	    function Set(value) {
	      return value === null || value === undefined ? emptySet() :
	        isSet(value) && !isOrdered(value) ? value :
	        emptySet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }

	    Set.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    Set.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };

	    Set.prototype.toString = function() {
	      return this.__toString('Set {', '}');
	    };

	    // @pragma Access

	    Set.prototype.has = function(value) {
	      return this._map.has(value);
	    };

	    // @pragma Modification

	    Set.prototype.add = function(value) {
	      return updateSet(this, this._map.set(value, true));
	    };

	    Set.prototype.remove = function(value) {
	      return updateSet(this, this._map.remove(value));
	    };

	    Set.prototype.clear = function() {
	      return updateSet(this, this._map.clear());
	    };

	    // @pragma Composition

	    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
	      iters = iters.filter(function(x ) {return x.size !== 0});
	      if (iters.length === 0) {
	        return this;
	      }
	      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
	        return this.constructor(iters[0]);
	      }
	      return this.withMutations(function(set ) {
	        for (var ii = 0; ii < iters.length; ii++) {
	          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
	        }
	      });
	    };

	    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (!iters.every(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };

	    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (iters.some(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };

	    Set.prototype.merge = function() {
	      return this.union.apply(this, arguments);
	    };

	    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return this.union.apply(this, iters);
	    };

	    Set.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator));
	    };

	    Set.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator, mapper));
	    };

	    Set.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };

	    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
	    };

	    Set.prototype.__iterator = function(type, reverse) {
	      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
	    };

	    Set.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return this.__make(newMap, ownerID);
	    };


	  function isSet(maybeSet) {
	    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
	  }

	  Set.isSet = isSet;

	  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

	  var SetPrototype = Set.prototype;
	  SetPrototype[IS_SET_SENTINEL] = true;
	  SetPrototype[DELETE] = SetPrototype.remove;
	  SetPrototype.mergeDeep = SetPrototype.merge;
	  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
	  SetPrototype.withMutations = MapPrototype.withMutations;
	  SetPrototype.asMutable = MapPrototype.asMutable;
	  SetPrototype.asImmutable = MapPrototype.asImmutable;

	  SetPrototype.__empty = emptySet;
	  SetPrototype.__make = makeSet;

	  function updateSet(set, newMap) {
	    if (set.__ownerID) {
	      set.size = newMap.size;
	      set._map = newMap;
	      return set;
	    }
	    return newMap === set._map ? set :
	      newMap.size === 0 ? set.__empty() :
	      set.__make(newMap);
	  }

	  function makeSet(map, ownerID) {
	    var set = Object.create(SetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }

	  var EMPTY_SET;
	  function emptySet() {
	    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
	  }

	  createClass(OrderedSet, Set);

	    // @pragma Construction

	    function OrderedSet(value) {
	      return value === null || value === undefined ? emptyOrderedSet() :
	        isOrderedSet(value) ? value :
	        emptyOrderedSet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }

	    OrderedSet.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    OrderedSet.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };

	    OrderedSet.prototype.toString = function() {
	      return this.__toString('OrderedSet {', '}');
	    };


	  function isOrderedSet(maybeOrderedSet) {
	    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
	  }

	  OrderedSet.isOrderedSet = isOrderedSet;

	  var OrderedSetPrototype = OrderedSet.prototype;
	  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

	  OrderedSetPrototype.__empty = emptyOrderedSet;
	  OrderedSetPrototype.__make = makeOrderedSet;

	  function makeOrderedSet(map, ownerID) {
	    var set = Object.create(OrderedSetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }

	  var EMPTY_ORDERED_SET;
	  function emptyOrderedSet() {
	    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
	  }

	  createClass(Stack, IndexedCollection);

	    // @pragma Construction

	    function Stack(value) {
	      return value === null || value === undefined ? emptyStack() :
	        isStack(value) ? value :
	        emptyStack().unshiftAll(value);
	    }

	    Stack.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    Stack.prototype.toString = function() {
	      return this.__toString('Stack [', ']');
	    };

	    // @pragma Access

	    Stack.prototype.get = function(index, notSetValue) {
	      var head = this._head;
	      index = wrapIndex(this, index);
	      while (head && index--) {
	        head = head.next;
	      }
	      return head ? head.value : notSetValue;
	    };

	    Stack.prototype.peek = function() {
	      return this._head && this._head.value;
	    };

	    // @pragma Modification

	    Stack.prototype.push = function(/*...values*/) {
	      if (arguments.length === 0) {
	        return this;
	      }
	      var newSize = this.size + arguments.length;
	      var head = this._head;
	      for (var ii = arguments.length - 1; ii >= 0; ii--) {
	        head = {
	          value: arguments[ii],
	          next: head
	        };
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    Stack.prototype.pushAll = function(iter) {
	      iter = IndexedIterable(iter);
	      if (iter.size === 0) {
	        return this;
	      }
	      assertNotInfinite(iter.size);
	      var newSize = this.size;
	      var head = this._head;
	      iter.reverse().forEach(function(value ) {
	        newSize++;
	        head = {
	          value: value,
	          next: head
	        };
	      });
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    Stack.prototype.pop = function() {
	      return this.slice(1);
	    };

	    Stack.prototype.unshift = function(/*...values*/) {
	      return this.push.apply(this, arguments);
	    };

	    Stack.prototype.unshiftAll = function(iter) {
	      return this.pushAll(iter);
	    };

	    Stack.prototype.shift = function() {
	      return this.pop.apply(this, arguments);
	    };

	    Stack.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._head = undefined;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyStack();
	    };

	    Stack.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      var resolvedBegin = resolveBegin(begin, this.size);
	      var resolvedEnd = resolveEnd(end, this.size);
	      if (resolvedEnd !== this.size) {
	        // super.slice(begin, end);
	        return IndexedCollection.prototype.slice.call(this, begin, end);
	      }
	      var newSize = this.size - resolvedBegin;
	      var head = this._head;
	      while (resolvedBegin--) {
	        head = head.next;
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    // @pragma Mutability

	    Stack.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeStack(this.size, this._head, ownerID, this.__hash);
	    };

	    // @pragma Iteration

	    Stack.prototype.__iterate = function(fn, reverse) {
	      if (reverse) {
	        return this.reverse().__iterate(fn);
	      }
	      var iterations = 0;
	      var node = this._head;
	      while (node) {
	        if (fn(node.value, iterations++, this) === false) {
	          break;
	        }
	        node = node.next;
	      }
	      return iterations;
	    };

	    Stack.prototype.__iterator = function(type, reverse) {
	      if (reverse) {
	        return this.reverse().__iterator(type);
	      }
	      var iterations = 0;
	      var node = this._head;
	      return new Iterator(function()  {
	        if (node) {
	          var value = node.value;
	          node = node.next;
	          return iteratorValue(type, iterations++, value);
	        }
	        return iteratorDone();
	      });
	    };


	  function isStack(maybeStack) {
	    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
	  }

	  Stack.isStack = isStack;

	  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

	  var StackPrototype = Stack.prototype;
	  StackPrototype[IS_STACK_SENTINEL] = true;
	  StackPrototype.withMutations = MapPrototype.withMutations;
	  StackPrototype.asMutable = MapPrototype.asMutable;
	  StackPrototype.asImmutable = MapPrototype.asImmutable;
	  StackPrototype.wasAltered = MapPrototype.wasAltered;


	  function makeStack(size, head, ownerID, hash) {
	    var map = Object.create(StackPrototype);
	    map.size = size;
	    map._head = head;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }

	  var EMPTY_STACK;
	  function emptyStack() {
	    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
	  }

	  /**
	   * Contributes additional methods to a constructor
	   */
	  function mixin(ctor, methods) {
	    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
	    Object.keys(methods).forEach(keyCopier);
	    Object.getOwnPropertySymbols &&
	      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
	    return ctor;
	  }

	  Iterable.Iterator = Iterator;

	  mixin(Iterable, {

	    // ### Conversion to other types

	    toArray: function() {
	      assertNotInfinite(this.size);
	      var array = new Array(this.size || 0);
	      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
	      return array;
	    },

	    toIndexedSeq: function() {
	      return new ToIndexedSequence(this);
	    },

	    toJS: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
	      ).__toJS();
	    },

	    toJSON: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
	      ).__toJS();
	    },

	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, true);
	    },

	    toMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Map(this.toKeyedSeq());
	    },

	    toObject: function() {
	      assertNotInfinite(this.size);
	      var object = {};
	      this.__iterate(function(v, k)  { object[k] = v; });
	      return object;
	    },

	    toOrderedMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedMap(this.toKeyedSeq());
	    },

	    toOrderedSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Set(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toSetSeq: function() {
	      return new ToSetSequence(this);
	    },

	    toSeq: function() {
	      return isIndexed(this) ? this.toIndexedSeq() :
	        isKeyed(this) ? this.toKeyedSeq() :
	        this.toSetSeq();
	    },

	    toStack: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Stack(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toList: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return List(isKeyed(this) ? this.valueSeq() : this);
	    },


	    // ### Common JavaScript methods and properties

	    toString: function() {
	      return '[Iterable]';
	    },

	    __toString: function(head, tail) {
	      if (this.size === 0) {
	        return head + tail;
	      }
	      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
	    },


	    // ### ES6 Collection methods (ES6 Array and Map)

	    concat: function() {var values = SLICE$0.call(arguments, 0);
	      return reify(this, concatFactory(this, values));
	    },

	    includes: function(searchValue) {
	      return this.some(function(value ) {return is(value, searchValue)});
	    },

	    entries: function() {
	      return this.__iterator(ITERATE_ENTRIES);
	    },

	    every: function(predicate, context) {
	      assertNotInfinite(this.size);
	      var returnValue = true;
	      this.__iterate(function(v, k, c)  {
	        if (!predicate.call(context, v, k, c)) {
	          returnValue = false;
	          return false;
	        }
	      });
	      return returnValue;
	    },

	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, true));
	    },

	    find: function(predicate, context, notSetValue) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[1] : notSetValue;
	    },

	    forEach: function(sideEffect, context) {
	      assertNotInfinite(this.size);
	      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
	    },

	    join: function(separator) {
	      assertNotInfinite(this.size);
	      separator = separator !== undefined ? '' + separator : ',';
	      var joined = '';
	      var isFirst = true;
	      this.__iterate(function(v ) {
	        isFirst ? (isFirst = false) : (joined += separator);
	        joined += v !== null && v !== undefined ? v.toString() : '';
	      });
	      return joined;
	    },

	    keys: function() {
	      return this.__iterator(ITERATE_KEYS);
	    },

	    map: function(mapper, context) {
	      return reify(this, mapFactory(this, mapper, context));
	    },

	    reduce: function(reducer, initialReduction, context) {
	      assertNotInfinite(this.size);
	      var reduction;
	      var useFirst;
	      if (arguments.length < 2) {
	        useFirst = true;
	      } else {
	        reduction = initialReduction;
	      }
	      this.__iterate(function(v, k, c)  {
	        if (useFirst) {
	          useFirst = false;
	          reduction = v;
	        } else {
	          reduction = reducer.call(context, reduction, v, k, c);
	        }
	      });
	      return reduction;
	    },

	    reduceRight: function(reducer, initialReduction, context) {
	      var reversed = this.toKeyedSeq().reverse();
	      return reversed.reduce.apply(reversed, arguments);
	    },

	    reverse: function() {
	      return reify(this, reverseFactory(this, true));
	    },

	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, true));
	    },

	    some: function(predicate, context) {
	      return !this.every(not(predicate), context);
	    },

	    sort: function(comparator) {
	      return reify(this, sortFactory(this, comparator));
	    },

	    values: function() {
	      return this.__iterator(ITERATE_VALUES);
	    },


	    // ### More sequential methods

	    butLast: function() {
	      return this.slice(0, -1);
	    },

	    isEmpty: function() {
	      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
	    },

	    count: function(predicate, context) {
	      return ensureSize(
	        predicate ? this.toSeq().filter(predicate, context) : this
	      );
	    },

	    countBy: function(grouper, context) {
	      return countByFactory(this, grouper, context);
	    },

	    equals: function(other) {
	      return deepEqual(this, other);
	    },

	    entrySeq: function() {
	      var iterable = this;
	      if (iterable._cache) {
	        // We cache as an entries array, so we can just return the cache!
	        return new ArraySeq(iterable._cache);
	      }
	      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
	      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
	      return entriesSequence;
	    },

	    filterNot: function(predicate, context) {
	      return this.filter(not(predicate), context);
	    },

	    findEntry: function(predicate, context, notSetValue) {
	      var found = notSetValue;
	      this.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          found = [k, v];
	          return false;
	        }
	      });
	      return found;
	    },

	    findKey: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry && entry[0];
	    },

	    findLast: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
	    },

	    findLastEntry: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
	    },

	    findLastKey: function(predicate, context) {
	      return this.toKeyedSeq().reverse().findKey(predicate, context);
	    },

	    first: function() {
	      return this.find(returnTrue);
	    },

	    flatMap: function(mapper, context) {
	      return reify(this, flatMapFactory(this, mapper, context));
	    },

	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, true));
	    },

	    fromEntrySeq: function() {
	      return new FromEntriesSequence(this);
	    },

	    get: function(searchKey, notSetValue) {
	      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
	    },

	    getIn: function(searchKeyPath, notSetValue) {
	      var nested = this;
	      // Note: in an ES6 environment, we would prefer:
	      // for (var key of searchKeyPath) {
	      var iter = forceIterator(searchKeyPath);
	      var step;
	      while (!(step = iter.next()).done) {
	        var key = step.value;
	        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
	        if (nested === NOT_SET) {
	          return notSetValue;
	        }
	      }
	      return nested;
	    },

	    groupBy: function(grouper, context) {
	      return groupByFactory(this, grouper, context);
	    },

	    has: function(searchKey) {
	      return this.get(searchKey, NOT_SET) !== NOT_SET;
	    },

	    hasIn: function(searchKeyPath) {
	      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
	    },

	    isSubset: function(iter) {
	      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
	      return this.every(function(value ) {return iter.includes(value)});
	    },

	    isSuperset: function(iter) {
	      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
	      return iter.isSubset(this);
	    },

	    keyOf: function(searchValue) {
	      return this.findKey(function(value ) {return is(value, searchValue)});
	    },

	    keySeq: function() {
	      return this.toSeq().map(keyMapper).toIndexedSeq();
	    },

	    last: function() {
	      return this.toSeq().reverse().first();
	    },

	    lastKeyOf: function(searchValue) {
	      return this.toKeyedSeq().reverse().keyOf(searchValue);
	    },

	    max: function(comparator) {
	      return maxFactory(this, comparator);
	    },

	    maxBy: function(mapper, comparator) {
	      return maxFactory(this, comparator, mapper);
	    },

	    min: function(comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
	    },

	    minBy: function(mapper, comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
	    },

	    rest: function() {
	      return this.slice(1);
	    },

	    skip: function(amount) {
	      return this.slice(Math.max(0, amount));
	    },

	    skipLast: function(amount) {
	      return reify(this, this.toSeq().reverse().skip(amount).reverse());
	    },

	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, true));
	    },

	    skipUntil: function(predicate, context) {
	      return this.skipWhile(not(predicate), context);
	    },

	    sortBy: function(mapper, comparator) {
	      return reify(this, sortFactory(this, comparator, mapper));
	    },

	    take: function(amount) {
	      return this.slice(0, Math.max(0, amount));
	    },

	    takeLast: function(amount) {
	      return reify(this, this.toSeq().reverse().take(amount).reverse());
	    },

	    takeWhile: function(predicate, context) {
	      return reify(this, takeWhileFactory(this, predicate, context));
	    },

	    takeUntil: function(predicate, context) {
	      return this.takeWhile(not(predicate), context);
	    },

	    valueSeq: function() {
	      return this.toIndexedSeq();
	    },


	    // ### Hashable Object

	    hashCode: function() {
	      return this.__hash || (this.__hash = hashIterable(this));
	    }


	    // ### Internal

	    // abstract __iterate(fn, reverse)

	    // abstract __iterator(type, reverse)
	  });

	  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

	  var IterablePrototype = Iterable.prototype;
	  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
	  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
	  IterablePrototype.__toJS = IterablePrototype.toArray;
	  IterablePrototype.__toStringMapper = quoteString;
	  IterablePrototype.inspect =
	  IterablePrototype.toSource = function() { return this.toString(); };
	  IterablePrototype.chain = IterablePrototype.flatMap;
	  IterablePrototype.contains = IterablePrototype.includes;

	  mixin(KeyedIterable, {

	    // ### More sequential methods

	    flip: function() {
	      return reify(this, flipFactory(this));
	    },

	    mapEntries: function(mapper, context) {var this$0 = this;
	      var iterations = 0;
	      return reify(this,
	        this.toSeq().map(
	          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
	        ).fromEntrySeq()
	      );
	    },

	    mapKeys: function(mapper, context) {var this$0 = this;
	      return reify(this,
	        this.toSeq().flip().map(
	          function(k, v)  {return mapper.call(context, k, v, this$0)}
	        ).flip()
	      );
	    }

	  });

	  var KeyedIterablePrototype = KeyedIterable.prototype;
	  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
	  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
	  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
	  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



	  mixin(IndexedIterable, {

	    // ### Conversion to other types

	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, false);
	    },


	    // ### ES6 Collection methods (ES6 Array and Map)

	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, false));
	    },

	    findIndex: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },

	    indexOf: function(searchValue) {
	      var key = this.keyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },

	    lastIndexOf: function(searchValue) {
	      var key = this.lastKeyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },

	    reverse: function() {
	      return reify(this, reverseFactory(this, false));
	    },

	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, false));
	    },

	    splice: function(index, removeNum /*, ...values*/) {
	      var numArgs = arguments.length;
	      removeNum = Math.max(removeNum | 0, 0);
	      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
	        return this;
	      }
	      // If index is negative, it should resolve relative to the size of the
	      // collection. However size may be expensive to compute if not cached, so
	      // only call count() if the number is in fact negative.
	      index = resolveBegin(index, index < 0 ? this.count() : this.size);
	      var spliced = this.slice(0, index);
	      return reify(
	        this,
	        numArgs === 1 ?
	          spliced :
	          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
	      );
	    },


	    // ### More collection methods

	    findLastIndex: function(predicate, context) {
	      var entry = this.findLastEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },

	    first: function() {
	      return this.get(0);
	    },

	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, false));
	    },

	    get: function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      return (index < 0 || (this.size === Infinity ||
	          (this.size !== undefined && index > this.size))) ?
	        notSetValue :
	        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
	    },

	    has: function(index) {
	      index = wrapIndex(this, index);
	      return index >= 0 && (this.size !== undefined ?
	        this.size === Infinity || index < this.size :
	        this.indexOf(index) !== -1
	      );
	    },

	    interpose: function(separator) {
	      return reify(this, interposeFactory(this, separator));
	    },

	    interleave: function(/*...iterables*/) {
	      var iterables = [this].concat(arrCopy(arguments));
	      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
	      var interleaved = zipped.flatten(true);
	      if (zipped.size) {
	        interleaved.size = zipped.size * iterables.length;
	      }
	      return reify(this, interleaved);
	    },

	    keySeq: function() {
	      return Range(0, this.size);
	    },

	    last: function() {
	      return this.get(-1);
	    },

	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, false));
	    },

	    zip: function(/*, ...iterables */) {
	      var iterables = [this].concat(arrCopy(arguments));
	      return reify(this, zipWithFactory(this, defaultZipper, iterables));
	    },

	    zipWith: function(zipper/*, ...iterables */) {
	      var iterables = arrCopy(arguments);
	      iterables[0] = this;
	      return reify(this, zipWithFactory(this, zipper, iterables));
	    }

	  });

	  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
	  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



	  mixin(SetIterable, {

	    // ### ES6 Collection methods (ES6 Array and Map)

	    get: function(value, notSetValue) {
	      return this.has(value) ? value : notSetValue;
	    },

	    includes: function(value) {
	      return this.has(value);
	    },


	    // ### More sequential methods

	    keySeq: function() {
	      return this.valueSeq();
	    }

	  });

	  SetIterable.prototype.has = IterablePrototype.includes;
	  SetIterable.prototype.contains = SetIterable.prototype.includes;


	  // Mixin subclasses

	  mixin(KeyedSeq, KeyedIterable.prototype);
	  mixin(IndexedSeq, IndexedIterable.prototype);
	  mixin(SetSeq, SetIterable.prototype);

	  mixin(KeyedCollection, KeyedIterable.prototype);
	  mixin(IndexedCollection, IndexedIterable.prototype);
	  mixin(SetCollection, SetIterable.prototype);


	  // #pragma Helper functions

	  function keyMapper(v, k) {
	    return k;
	  }

	  function entryMapper(v, k) {
	    return [k, v];
	  }

	  function not(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    }
	  }

	  function neg(predicate) {
	    return function() {
	      return -predicate.apply(this, arguments);
	    }
	  }

	  function quoteString(value) {
	    return typeof value === 'string' ? JSON.stringify(value) : String(value);
	  }

	  function defaultZipper() {
	    return arrCopy(arguments);
	  }

	  function defaultNegComparator(a, b) {
	    return a < b ? 1 : a > b ? -1 : 0;
	  }

	  function hashIterable(iterable) {
	    if (iterable.size === Infinity) {
	      return 0;
	    }
	    var ordered = isOrdered(iterable);
	    var keyed = isKeyed(iterable);
	    var h = ordered ? 1 : 0;
	    var size = iterable.__iterate(
	      keyed ?
	        ordered ?
	          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
	          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
	        ordered ?
	          function(v ) { h = 31 * h + hash(v) | 0; } :
	          function(v ) { h = h + hash(v) | 0; }
	    );
	    return murmurHashOfSize(size, h);
	  }

	  function murmurHashOfSize(size, h) {
	    h = imul(h, 0xCC9E2D51);
	    h = imul(h << 15 | h >>> -15, 0x1B873593);
	    h = imul(h << 13 | h >>> -13, 5);
	    h = (h + 0xE6546B64 | 0) ^ size;
	    h = imul(h ^ h >>> 16, 0x85EBCA6B);
	    h = imul(h ^ h >>> 13, 0xC2B2AE35);
	    h = smi(h ^ h >>> 16);
	    return h;
	  }

	  function hashMerge(a, b) {
	    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
	  }

	  var Immutable = {

	    Iterable: Iterable,

	    Seq: Seq,
	    Collection: Collection,
	    Map: Map,
	    OrderedMap: OrderedMap,
	    List: List,
	    Stack: Stack,
	    Set: Set,
	    OrderedSet: OrderedSet,

	    Record: Record,
	    Range: Range,
	    Repeat: Repeat,

	    is: is,
	    fromJS: fromJS

	  };

	  return Immutable;

	}));

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/**
	 * @license
	 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern -d -o ./index.js`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	;(function() {

	  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
	  var undefined;

	  /** Used as the semantic version number. */
	  var VERSION = '3.10.1';

	  /** Used to compose bitmasks for wrapper metadata. */
	  var BIND_FLAG = 1,
	      BIND_KEY_FLAG = 2,
	      CURRY_BOUND_FLAG = 4,
	      CURRY_FLAG = 8,
	      CURRY_RIGHT_FLAG = 16,
	      PARTIAL_FLAG = 32,
	      PARTIAL_RIGHT_FLAG = 64,
	      ARY_FLAG = 128,
	      REARG_FLAG = 256;

	  /** Used as default options for `_.trunc`. */
	  var DEFAULT_TRUNC_LENGTH = 30,
	      DEFAULT_TRUNC_OMISSION = '...';

	  /** Used to detect when a function becomes hot. */
	  var HOT_COUNT = 150,
	      HOT_SPAN = 16;

	  /** Used as the size to enable large array optimizations. */
	  var LARGE_ARRAY_SIZE = 200;

	  /** Used to indicate the type of lazy iteratees. */
	  var LAZY_FILTER_FLAG = 1,
	      LAZY_MAP_FLAG = 2;

	  /** Used as the `TypeError` message for "Functions" methods. */
	  var FUNC_ERROR_TEXT = 'Expected a function';

	  /** Used as the internal argument placeholder. */
	  var PLACEHOLDER = '__lodash_placeholder__';

	  /** `Object#toString` result references. */
	  var argsTag = '[object Arguments]',
	      arrayTag = '[object Array]',
	      boolTag = '[object Boolean]',
	      dateTag = '[object Date]',
	      errorTag = '[object Error]',
	      funcTag = '[object Function]',
	      mapTag = '[object Map]',
	      numberTag = '[object Number]',
	      objectTag = '[object Object]',
	      regexpTag = '[object RegExp]',
	      setTag = '[object Set]',
	      stringTag = '[object String]',
	      weakMapTag = '[object WeakMap]';

	  var arrayBufferTag = '[object ArrayBuffer]',
	      float32Tag = '[object Float32Array]',
	      float64Tag = '[object Float64Array]',
	      int8Tag = '[object Int8Array]',
	      int16Tag = '[object Int16Array]',
	      int32Tag = '[object Int32Array]',
	      uint8Tag = '[object Uint8Array]',
	      uint8ClampedTag = '[object Uint8ClampedArray]',
	      uint16Tag = '[object Uint16Array]',
	      uint32Tag = '[object Uint32Array]';

	  /** Used to match empty string literals in compiled template source. */
	  var reEmptyStringLeading = /\b__p \+= '';/g,
	      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
	      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

	  /** Used to match HTML entities and HTML characters. */
	  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
	      reUnescapedHtml = /[&<>"'`]/g,
	      reHasEscapedHtml = RegExp(reEscapedHtml.source),
	      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

	  /** Used to match template delimiters. */
	  var reEscape = /<%-([\s\S]+?)%>/g,
	      reEvaluate = /<%([\s\S]+?)%>/g,
	      reInterpolate = /<%=([\s\S]+?)%>/g;

	  /** Used to match property names within property paths. */
	  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	      reIsPlainProp = /^\w*$/,
	      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;

	  /**
	   * Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns)
	   * and those outlined by [`EscapeRegExpPattern`](http://ecma-international.org/ecma-262/6.0/#sec-escaperegexppattern).
	   */
	  var reRegExpChars = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
	      reHasRegExpChars = RegExp(reRegExpChars.source);

	  /** Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks). */
	  var reComboMark = /[\u0300-\u036f\ufe20-\ufe23]/g;

	  /** Used to match backslashes in property paths. */
	  var reEscapeChar = /\\(\\)?/g;

	  /** Used to match [ES template delimiters](http://ecma-international.org/ecma-262/6.0/#sec-template-literal-lexical-components). */
	  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

	  /** Used to match `RegExp` flags from their coerced string values. */
	  var reFlags = /\w*$/;

	  /** Used to detect hexadecimal string values. */
	  var reHasHexPrefix = /^0[xX]/;

	  /** Used to detect host constructors (Safari > 5). */
	  var reIsHostCtor = /^\[object .+?Constructor\]$/;

	  /** Used to detect unsigned integer values. */
	  var reIsUint = /^\d+$/;

	  /** Used to match latin-1 supplementary letters (excluding mathematical operators). */
	  var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;

	  /** Used to ensure capturing order of template delimiters. */
	  var reNoMatch = /($^)/;

	  /** Used to match unescaped characters in compiled string literals. */
	  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

	  /** Used to match words to create compound words. */
	  var reWords = (function() {
	    var upper = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
	        lower = '[a-z\\xdf-\\xf6\\xf8-\\xff]+';

	    return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
	  }());

	  /** Used to assign default `context` object properties. */
	  var contextProps = [
	    'Array', 'ArrayBuffer', 'Date', 'Error', 'Float32Array', 'Float64Array',
	    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Math', 'Number',
	    'Object', 'RegExp', 'Set', 'String', '_', 'clearTimeout', 'isFinite',
	    'parseFloat', 'parseInt', 'setTimeout', 'TypeError', 'Uint8Array',
	    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap'
	  ];

	  /** Used to make template sourceURLs easier to identify. */
	  var templateCounter = -1;

	  /** Used to identify `toStringTag` values of typed arrays. */
	  var typedArrayTags = {};
	  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	  typedArrayTags[uint32Tag] = true;
	  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	  typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	  typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	  typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	  typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	  typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	  /** Used to identify `toStringTag` values supported by `_.clone`. */
	  var cloneableTags = {};
	  cloneableTags[argsTag] = cloneableTags[arrayTag] =
	  cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =
	  cloneableTags[dateTag] = cloneableTags[float32Tag] =
	  cloneableTags[float64Tag] = cloneableTags[int8Tag] =
	  cloneableTags[int16Tag] = cloneableTags[int32Tag] =
	  cloneableTags[numberTag] = cloneableTags[objectTag] =
	  cloneableTags[regexpTag] = cloneableTags[stringTag] =
	  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	  cloneableTags[errorTag] = cloneableTags[funcTag] =
	  cloneableTags[mapTag] = cloneableTags[setTag] =
	  cloneableTags[weakMapTag] = false;

	  /** Used to map latin-1 supplementary letters to basic latin letters. */
	  var deburredLetters = {
	    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	    '\xc7': 'C',  '\xe7': 'c',
	    '\xd0': 'D',  '\xf0': 'd',
	    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	    '\xcC': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	    '\xeC': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	    '\xd1': 'N',  '\xf1': 'n',
	    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	    '\xc6': 'Ae', '\xe6': 'ae',
	    '\xde': 'Th', '\xfe': 'th',
	    '\xdf': 'ss'
	  };

	  /** Used to map characters to HTML entities. */
	  var htmlEscapes = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#39;',
	    '`': '&#96;'
	  };

	  /** Used to map HTML entities to characters. */
	  var htmlUnescapes = {
	    '&amp;': '&',
	    '&lt;': '<',
	    '&gt;': '>',
	    '&quot;': '"',
	    '&#39;': "'",
	    '&#96;': '`'
	  };

	  /** Used to determine if values are of the language type `Object`. */
	  var objectTypes = {
	    'function': true,
	    'object': true
	  };

	  /** Used to escape characters for inclusion in compiled regexes. */
	  var regexpEscapes = {
	    '0': 'x30', '1': 'x31', '2': 'x32', '3': 'x33', '4': 'x34',
	    '5': 'x35', '6': 'x36', '7': 'x37', '8': 'x38', '9': 'x39',
	    'A': 'x41', 'B': 'x42', 'C': 'x43', 'D': 'x44', 'E': 'x45', 'F': 'x46',
	    'a': 'x61', 'b': 'x62', 'c': 'x63', 'd': 'x64', 'e': 'x65', 'f': 'x66',
	    'n': 'x6e', 'r': 'x72', 't': 'x74', 'u': 'x75', 'v': 'x76', 'x': 'x78'
	  };

	  /** Used to escape characters for inclusion in compiled string literals. */
	  var stringEscapes = {
	    '\\': '\\',
	    "'": "'",
	    '\n': 'n',
	    '\r': 'r',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  /** Detect free variable `exports`. */
	  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

	  /** Detect free variable `module`. */
	  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

	  /** Detect free variable `global` from Node.js. */
	  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global && global.Object && global;

	  /** Detect free variable `self`. */
	  var freeSelf = objectTypes[typeof self] && self && self.Object && self;

	  /** Detect free variable `window`. */
	  var freeWindow = objectTypes[typeof window] && window && window.Object && window;

	  /** Detect the popular CommonJS extension `module.exports`. */
	  var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;

	  /**
	   * Used as a reference to the global object.
	   *
	   * The `this` value is used if it's the global object to avoid Greasemonkey's
	   * restricted `window` object, otherwise the `window` object is used.
	   */
	  var root = freeGlobal || ((freeWindow !== (this && this.window)) && freeWindow) || freeSelf || this;

	  /*--------------------------------------------------------------------------*/

	  /**
	   * The base implementation of `compareAscending` which compares values and
	   * sorts them in ascending order without guaranteeing a stable sort.
	   *
	   * @private
	   * @param {*} value The value to compare.
	   * @param {*} other The other value to compare.
	   * @returns {number} Returns the sort order indicator for `value`.
	   */
	  function baseCompareAscending(value, other) {
	    if (value !== other) {
	      var valIsNull = value === null,
	          valIsUndef = value === undefined,
	          valIsReflexive = value === value;

	      var othIsNull = other === null,
	          othIsUndef = other === undefined,
	          othIsReflexive = other === other;

	      if ((value > other && !othIsNull) || !valIsReflexive ||
	          (valIsNull && !othIsUndef && othIsReflexive) ||
	          (valIsUndef && othIsReflexive)) {
	        return 1;
	      }
	      if ((value < other && !valIsNull) || !othIsReflexive ||
	          (othIsNull && !valIsUndef && valIsReflexive) ||
	          (othIsUndef && valIsReflexive)) {
	        return -1;
	      }
	    }
	    return 0;
	  }

	  /**
	   * The base implementation of `_.findIndex` and `_.findLastIndex` without
	   * support for callback shorthands and `this` binding.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseFindIndex(array, predicate, fromRight) {
	    var length = array.length,
	        index = fromRight ? length : -1;

	    while ((fromRight ? index-- : ++index < length)) {
	      if (predicate(array[index], index, array)) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * The base implementation of `_.indexOf` without support for binary searches.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseIndexOf(array, value, fromIndex) {
	    if (value !== value) {
	      return indexOfNaN(array, fromIndex);
	    }
	    var index = fromIndex - 1,
	        length = array.length;

	    while (++index < length) {
	      if (array[index] === value) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * The base implementation of `_.isFunction` without support for environments
	   * with incorrect `typeof` results.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	   */
	  function baseIsFunction(value) {
	    // Avoid a Chakra JIT bug in compatibility modes of IE 11.
	    // See https://github.com/jashkenas/underscore/issues/1621 for more details.
	    return typeof value == 'function' || false;
	  }

	  /**
	   * Converts `value` to a string if it's not one. An empty string is returned
	   * for `null` or `undefined` values.
	   *
	   * @private
	   * @param {*} value The value to process.
	   * @returns {string} Returns the string.
	   */
	  function baseToString(value) {
	    return value == null ? '' : (value + '');
	  }

	  /**
	   * Used by `_.trim` and `_.trimLeft` to get the index of the first character
	   * of `string` that is not found in `chars`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @param {string} chars The characters to find.
	   * @returns {number} Returns the index of the first character not found in `chars`.
	   */
	  function charsLeftIndex(string, chars) {
	    var index = -1,
	        length = string.length;

	    while (++index < length && chars.indexOf(string.charAt(index)) > -1) {}
	    return index;
	  }

	  /**
	   * Used by `_.trim` and `_.trimRight` to get the index of the last character
	   * of `string` that is not found in `chars`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @param {string} chars The characters to find.
	   * @returns {number} Returns the index of the last character not found in `chars`.
	   */
	  function charsRightIndex(string, chars) {
	    var index = string.length;

	    while (index-- && chars.indexOf(string.charAt(index)) > -1) {}
	    return index;
	  }

	  /**
	   * Used by `_.sortBy` to compare transformed elements of a collection and stable
	   * sort them in ascending order.
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @returns {number} Returns the sort order indicator for `object`.
	   */
	  function compareAscending(object, other) {
	    return baseCompareAscending(object.criteria, other.criteria) || (object.index - other.index);
	  }

	  /**
	   * Used by `_.sortByOrder` to compare multiple properties of a value to another
	   * and stable sort them.
	   *
	   * If `orders` is unspecified, all valuess are sorted in ascending order. Otherwise,
	   * a value is sorted in ascending order if its corresponding order is "asc", and
	   * descending if "desc".
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @param {boolean[]} orders The order to sort by for each property.
	   * @returns {number} Returns the sort order indicator for `object`.
	   */
	  function compareMultiple(object, other, orders) {
	    var index = -1,
	        objCriteria = object.criteria,
	        othCriteria = other.criteria,
	        length = objCriteria.length,
	        ordersLength = orders.length;

	    while (++index < length) {
	      var result = baseCompareAscending(objCriteria[index], othCriteria[index]);
	      if (result) {
	        if (index >= ordersLength) {
	          return result;
	        }
	        var order = orders[index];
	        return result * ((order === 'asc' || order === true) ? 1 : -1);
	      }
	    }
	    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
	    // that causes it, under certain circumstances, to provide the same value for
	    // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
	    // for more details.
	    //
	    // This also ensures a stable sort in V8 and other engines.
	    // See https://code.google.com/p/v8/issues/detail?id=90 for more details.
	    return object.index - other.index;
	  }

	  /**
	   * Used by `_.deburr` to convert latin-1 supplementary letters to basic latin letters.
	   *
	   * @private
	   * @param {string} letter The matched letter to deburr.
	   * @returns {string} Returns the deburred letter.
	   */
	  function deburrLetter(letter) {
	    return deburredLetters[letter];
	  }

	  /**
	   * Used by `_.escape` to convert characters to HTML entities.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeHtmlChar(chr) {
	    return htmlEscapes[chr];
	  }

	  /**
	   * Used by `_.escapeRegExp` to escape characters for inclusion in compiled regexes.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @param {string} leadingChar The capture group for a leading character.
	   * @param {string} whitespaceChar The capture group for a whitespace character.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeRegExpChar(chr, leadingChar, whitespaceChar) {
	    if (leadingChar) {
	      chr = regexpEscapes[chr];
	    } else if (whitespaceChar) {
	      chr = stringEscapes[chr];
	    }
	    return '\\' + chr;
	  }

	  /**
	   * Used by `_.template` to escape characters for inclusion in compiled string literals.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeStringChar(chr) {
	    return '\\' + stringEscapes[chr];
	  }

	  /**
	   * Gets the index at which the first occurrence of `NaN` is found in `array`.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {number} fromIndex The index to search from.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	   */
	  function indexOfNaN(array, fromIndex, fromRight) {
	    var length = array.length,
	        index = fromIndex + (fromRight ? 0 : -1);

	    while ((fromRight ? index-- : ++index < length)) {
	      var other = array[index];
	      if (other !== other) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * Checks if `value` is object-like.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	   */
	  function isObjectLike(value) {
	    return !!value && typeof value == 'object';
	  }

	  /**
	   * Used by `trimmedLeftIndex` and `trimmedRightIndex` to determine if a
	   * character code is whitespace.
	   *
	   * @private
	   * @param {number} charCode The character code to inspect.
	   * @returns {boolean} Returns `true` if `charCode` is whitespace, else `false`.
	   */
	  function isSpace(charCode) {
	    return ((charCode <= 160 && (charCode >= 9 && charCode <= 13) || charCode == 32 || charCode == 160) || charCode == 5760 || charCode == 6158 ||
	      (charCode >= 8192 && (charCode <= 8202 || charCode == 8232 || charCode == 8233 || charCode == 8239 || charCode == 8287 || charCode == 12288 || charCode == 65279)));
	  }

	  /**
	   * Replaces all `placeholder` elements in `array` with an internal placeholder
	   * and returns an array of their indexes.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {*} placeholder The placeholder to replace.
	   * @returns {Array} Returns the new array of placeholder indexes.
	   */
	  function replaceHolders(array, placeholder) {
	    var index = -1,
	        length = array.length,
	        resIndex = -1,
	        result = [];

	    while (++index < length) {
	      if (array[index] === placeholder) {
	        array[index] = PLACEHOLDER;
	        result[++resIndex] = index;
	      }
	    }
	    return result;
	  }

	  /**
	   * An implementation of `_.uniq` optimized for sorted arrays without support
	   * for callback shorthands and `this` binding.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {Function} [iteratee] The function invoked per iteration.
	   * @returns {Array} Returns the new duplicate-value-free array.
	   */
	  function sortedUniq(array, iteratee) {
	    var seen,
	        index = -1,
	        length = array.length,
	        resIndex = -1,
	        result = [];

	    while (++index < length) {
	      var value = array[index],
	          computed = iteratee ? iteratee(value, index, array) : value;

	      if (!index || seen !== computed) {
	        seen = computed;
	        result[++resIndex] = value;
	      }
	    }
	    return result;
	  }

	  /**
	   * Used by `_.trim` and `_.trimLeft` to get the index of the first non-whitespace
	   * character of `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the index of the first non-whitespace character.
	   */
	  function trimmedLeftIndex(string) {
	    var index = -1,
	        length = string.length;

	    while (++index < length && isSpace(string.charCodeAt(index))) {}
	    return index;
	  }

	  /**
	   * Used by `_.trim` and `_.trimRight` to get the index of the last non-whitespace
	   * character of `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the index of the last non-whitespace character.
	   */
	  function trimmedRightIndex(string) {
	    var index = string.length;

	    while (index-- && isSpace(string.charCodeAt(index))) {}
	    return index;
	  }

	  /**
	   * Used by `_.unescape` to convert HTML entities to characters.
	   *
	   * @private
	   * @param {string} chr The matched character to unescape.
	   * @returns {string} Returns the unescaped character.
	   */
	  function unescapeHtmlChar(chr) {
	    return htmlUnescapes[chr];
	  }

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Create a new pristine `lodash` function using the given `context` object.
	   *
	   * @static
	   * @memberOf _
	   * @category Utility
	   * @param {Object} [context=root] The context object.
	   * @returns {Function} Returns a new `lodash` function.
	   * @example
	   *
	   * _.mixin({ 'foo': _.constant('foo') });
	   *
	   * var lodash = _.runInContext();
	   * lodash.mixin({ 'bar': lodash.constant('bar') });
	   *
	   * _.isFunction(_.foo);
	   * // => true
	   * _.isFunction(_.bar);
	   * // => false
	   *
	   * lodash.isFunction(lodash.foo);
	   * // => false
	   * lodash.isFunction(lodash.bar);
	   * // => true
	   *
	   * // using `context` to mock `Date#getTime` use in `_.now`
	   * var mock = _.runInContext({
	   *   'Date': function() {
	   *     return { 'getTime': getTimeMock };
	   *   }
	   * });
	   *
	   * // or creating a suped-up `defer` in Node.js
	   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
	   */
	  function runInContext(context) {
	    // Avoid issues with some ES3 environments that attempt to use values, named
	    // after built-in constructors like `Object`, for the creation of literals.
	    // ES5 clears this up by stating that literals must use built-in constructors.
	    // See https://es5.github.io/#x11.1.5 for more details.
	    context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;

	    /** Native constructor references. */
	    var Array = context.Array,
	        Date = context.Date,
	        Error = context.Error,
	        Function = context.Function,
	        Math = context.Math,
	        Number = context.Number,
	        Object = context.Object,
	        RegExp = context.RegExp,
	        String = context.String,
	        TypeError = context.TypeError;

	    /** Used for native method references. */
	    var arrayProto = Array.prototype,
	        objectProto = Object.prototype,
	        stringProto = String.prototype;

	    /** Used to resolve the decompiled source of functions. */
	    var fnToString = Function.prototype.toString;

	    /** Used to check objects for own properties. */
	    var hasOwnProperty = objectProto.hasOwnProperty;

	    /** Used to generate unique IDs. */
	    var idCounter = 0;

	    /**
	     * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	     * of values.
	     */
	    var objToString = objectProto.toString;

	    /** Used to restore the original `_` reference in `_.noConflict`. */
	    var oldDash = root._;

	    /** Used to detect if a method is native. */
	    var reIsNative = RegExp('^' +
	      fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	    );

	    /** Native method references. */
	    var ArrayBuffer = context.ArrayBuffer,
	        clearTimeout = context.clearTimeout,
	        parseFloat = context.parseFloat,
	        pow = Math.pow,
	        propertyIsEnumerable = objectProto.propertyIsEnumerable,
	        Set = getNative(context, 'Set'),
	        setTimeout = context.setTimeout,
	        splice = arrayProto.splice,
	        Uint8Array = context.Uint8Array,
	        WeakMap = getNative(context, 'WeakMap');

	    /* Native method references for those with the same name as other `lodash` methods. */
	    var nativeCeil = Math.ceil,
	        nativeCreate = getNative(Object, 'create'),
	        nativeFloor = Math.floor,
	        nativeIsArray = getNative(Array, 'isArray'),
	        nativeIsFinite = context.isFinite,
	        nativeKeys = getNative(Object, 'keys'),
	        nativeMax = Math.max,
	        nativeMin = Math.min,
	        nativeNow = getNative(Date, 'now'),
	        nativeParseInt = context.parseInt,
	        nativeRandom = Math.random;

	    /** Used as references for `-Infinity` and `Infinity`. */
	    var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
	        POSITIVE_INFINITY = Number.POSITIVE_INFINITY;

	    /** Used as references for the maximum length and index of an array. */
	    var MAX_ARRAY_LENGTH = 4294967295,
	        MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
	        HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

	    /**
	     * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	     * of an array-like value.
	     */
	    var MAX_SAFE_INTEGER = 9007199254740991;

	    /** Used to store function metadata. */
	    var metaMap = WeakMap && new WeakMap;

	    /** Used to lookup unminified function names. */
	    var realNames = {};

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a `lodash` object which wraps `value` to enable implicit chaining.
	     * Methods that operate on and return arrays, collections, and functions can
	     * be chained together. Methods that retrieve a single value or may return a
	     * primitive value will automatically end the chain returning the unwrapped
	     * value. Explicit chaining may be enabled using `_.chain`. The execution of
	     * chained methods is lazy, that is, execution is deferred until `_#value`
	     * is implicitly or explicitly called.
	     *
	     * Lazy evaluation allows several methods to support shortcut fusion. Shortcut
	     * fusion is an optimization strategy which merge iteratee calls; this can help
	     * to avoid the creation of intermediate data structures and greatly reduce the
	     * number of iteratee executions.
	     *
	     * Chaining is supported in custom builds as long as the `_#value` method is
	     * directly or indirectly included in the build.
	     *
	     * In addition to lodash methods, wrappers have `Array` and `String` methods.
	     *
	     * The wrapper `Array` methods are:
	     * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`,
	     * `splice`, and `unshift`
	     *
	     * The wrapper `String` methods are:
	     * `replace` and `split`
	     *
	     * The wrapper methods that support shortcut fusion are:
	     * `compact`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`,
	     * `first`, `initial`, `last`, `map`, `pluck`, `reject`, `rest`, `reverse`,
	     * `slice`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `toArray`,
	     * and `where`
	     *
	     * The chainable wrapper methods are:
	     * `after`, `ary`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`,
	     * `callback`, `chain`, `chunk`, `commit`, `compact`, `concat`, `constant`,
	     * `countBy`, `create`, `curry`, `debounce`, `defaults`, `defaultsDeep`,
	     * `defer`, `delay`, `difference`, `drop`, `dropRight`, `dropRightWhile`,
	     * `dropWhile`, `fill`, `filter`, `flatten`, `flattenDeep`, `flow`, `flowRight`,
	     * `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
	     * `functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
	     * `invoke`, `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`,
	     * `matchesProperty`, `memoize`, `merge`, `method`, `methodOf`, `mixin`,
	     * `modArgs`, `negate`, `omit`, `once`, `pairs`, `partial`, `partialRight`,
	     * `partition`, `pick`, `plant`, `pluck`, `property`, `propertyOf`, `pull`,
	     * `pullAt`, `push`, `range`, `rearg`, `reject`, `remove`, `rest`, `restParam`,
	     * `reverse`, `set`, `shuffle`, `slice`, `sort`, `sortBy`, `sortByAll`,
	     * `sortByOrder`, `splice`, `spread`, `take`, `takeRight`, `takeRightWhile`,
	     * `takeWhile`, `tap`, `throttle`, `thru`, `times`, `toArray`, `toPlainObject`,
	     * `transform`, `union`, `uniq`, `unshift`, `unzip`, `unzipWith`, `values`,
	     * `valuesIn`, `where`, `without`, `wrap`, `xor`, `zip`, `zipObject`, `zipWith`
	     *
	     * The wrapper methods that are **not** chainable by default are:
	     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clone`, `cloneDeep`,
	     * `deburr`, `endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`,
	     * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`,
	     * `floor`, `get`, `gt`, `gte`, `has`, `identity`, `includes`, `indexOf`,
	     * `inRange`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
	     * `isEmpty`, `isEqual`, `isError`, `isFinite` `isFunction`, `isMatch`,
	     * `isNative`, `isNaN`, `isNull`, `isNumber`, `isObject`, `isPlainObject`,
	     * `isRegExp`, `isString`, `isUndefined`, `isTypedArray`, `join`, `kebabCase`,
	     * `last`, `lastIndexOf`, `lt`, `lte`, `max`, `min`, `noConflict`, `noop`,
	     * `now`, `pad`, `padLeft`, `padRight`, `parseInt`, `pop`, `random`, `reduce`,
	     * `reduceRight`, `repeat`, `result`, `round`, `runInContext`, `shift`, `size`,
	     * `snakeCase`, `some`, `sortedIndex`, `sortedLastIndex`, `startCase`,
	     * `startsWith`, `sum`, `template`, `trim`, `trimLeft`, `trimRight`, `trunc`,
	     * `unescape`, `uniqueId`, `value`, and `words`
	     *
	     * The wrapper method `sample` will return a wrapped value when `n` is provided,
	     * otherwise an unwrapped value is returned.
	     *
	     * @name _
	     * @constructor
	     * @category Chain
	     * @param {*} value The value to wrap in a `lodash` instance.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var wrapped = _([1, 2, 3]);
	     *
	     * // returns an unwrapped value
	     * wrapped.reduce(function(total, n) {
	     *   return total + n;
	     * });
	     * // => 6
	     *
	     * // returns a wrapped value
	     * var squares = wrapped.map(function(n) {
	     *   return n * n;
	     * });
	     *
	     * _.isArray(squares);
	     * // => false
	     *
	     * _.isArray(squares.value());
	     * // => true
	     */
	    function lodash(value) {
	      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
	        if (value instanceof LodashWrapper) {
	          return value;
	        }
	        if (hasOwnProperty.call(value, '__chain__') && hasOwnProperty.call(value, '__wrapped__')) {
	          return wrapperClone(value);
	        }
	      }
	      return new LodashWrapper(value);
	    }

	    /**
	     * The function whose prototype all chaining wrappers inherit from.
	     *
	     * @private
	     */
	    function baseLodash() {
	      // No operation performed.
	    }

	    /**
	     * The base constructor for creating `lodash` wrapper objects.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     * @param {boolean} [chainAll] Enable chaining for all wrapper methods.
	     * @param {Array} [actions=[]] Actions to peform to resolve the unwrapped value.
	     */
	    function LodashWrapper(value, chainAll, actions) {
	      this.__wrapped__ = value;
	      this.__actions__ = actions || [];
	      this.__chain__ = !!chainAll;
	    }

	    /**
	     * An object environment feature flags.
	     *
	     * @static
	     * @memberOf _
	     * @type Object
	     */
	    var support = lodash.support = {};

	    /**
	     * By default, the template delimiters used by lodash are like those in
	     * embedded Ruby (ERB). Change the following template settings to use
	     * alternative delimiters.
	     *
	     * @static
	     * @memberOf _
	     * @type Object
	     */
	    lodash.templateSettings = {

	      /**
	       * Used to detect `data` property values to be HTML-escaped.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'escape': reEscape,

	      /**
	       * Used to detect code to be evaluated.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'evaluate': reEvaluate,

	      /**
	       * Used to detect `data` property values to inject.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'interpolate': reInterpolate,

	      /**
	       * Used to reference the data object in the template text.
	       *
	       * @memberOf _.templateSettings
	       * @type string
	       */
	      'variable': '',

	      /**
	       * Used to import variables into the compiled template.
	       *
	       * @memberOf _.templateSettings
	       * @type Object
	       */
	      'imports': {

	        /**
	         * A reference to the `lodash` function.
	         *
	         * @memberOf _.templateSettings.imports
	         * @type Function
	         */
	        '_': lodash
	      }
	    };

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     */
	    function LazyWrapper(value) {
	      this.__wrapped__ = value;
	      this.__actions__ = [];
	      this.__dir__ = 1;
	      this.__filtered__ = false;
	      this.__iteratees__ = [];
	      this.__takeCount__ = POSITIVE_INFINITY;
	      this.__views__ = [];
	    }

	    /**
	     * Creates a clone of the lazy wrapper object.
	     *
	     * @private
	     * @name clone
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the cloned `LazyWrapper` object.
	     */
	    function lazyClone() {
	      var result = new LazyWrapper(this.__wrapped__);
	      result.__actions__ = arrayCopy(this.__actions__);
	      result.__dir__ = this.__dir__;
	      result.__filtered__ = this.__filtered__;
	      result.__iteratees__ = arrayCopy(this.__iteratees__);
	      result.__takeCount__ = this.__takeCount__;
	      result.__views__ = arrayCopy(this.__views__);
	      return result;
	    }

	    /**
	     * Reverses the direction of lazy iteration.
	     *
	     * @private
	     * @name reverse
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the new reversed `LazyWrapper` object.
	     */
	    function lazyReverse() {
	      if (this.__filtered__) {
	        var result = new LazyWrapper(this);
	        result.__dir__ = -1;
	        result.__filtered__ = true;
	      } else {
	        result = this.clone();
	        result.__dir__ *= -1;
	      }
	      return result;
	    }

	    /**
	     * Extracts the unwrapped value from its lazy wrapper.
	     *
	     * @private
	     * @name value
	     * @memberOf LazyWrapper
	     * @returns {*} Returns the unwrapped value.
	     */
	    function lazyValue() {
	      var array = this.__wrapped__.value(),
	          dir = this.__dir__,
	          isArr = isArray(array),
	          isRight = dir < 0,
	          arrLength = isArr ? array.length : 0,
	          view = getView(0, arrLength, this.__views__),
	          start = view.start,
	          end = view.end,
	          length = end - start,
	          index = isRight ? end : (start - 1),
	          iteratees = this.__iteratees__,
	          iterLength = iteratees.length,
	          resIndex = 0,
	          takeCount = nativeMin(length, this.__takeCount__);

	      if (!isArr || arrLength < LARGE_ARRAY_SIZE || (arrLength == length && takeCount == length)) {
	        return baseWrapperValue((isRight && isArr) ? array.reverse() : array, this.__actions__);
	      }
	      var result = [];

	      outer:
	      while (length-- && resIndex < takeCount) {
	        index += dir;

	        var iterIndex = -1,
	            value = array[index];

	        while (++iterIndex < iterLength) {
	          var data = iteratees[iterIndex],
	              iteratee = data.iteratee,
	              type = data.type,
	              computed = iteratee(value);

	          if (type == LAZY_MAP_FLAG) {
	            value = computed;
	          } else if (!computed) {
	            if (type == LAZY_FILTER_FLAG) {
	              continue outer;
	            } else {
	              break outer;
	            }
	          }
	        }
	        result[resIndex++] = value;
	      }
	      return result;
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a cache object to store key/value pairs.
	     *
	     * @private
	     * @static
	     * @name Cache
	     * @memberOf _.memoize
	     */
	    function MapCache() {
	      this.__data__ = {};
	    }

	    /**
	     * Removes `key` and its value from the cache.
	     *
	     * @private
	     * @name delete
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed successfully, else `false`.
	     */
	    function mapDelete(key) {
	      return this.has(key) && delete this.__data__[key];
	    }

	    /**
	     * Gets the cached value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the cached value.
	     */
	    function mapGet(key) {
	      return key == '__proto__' ? undefined : this.__data__[key];
	    }

	    /**
	     * Checks if a cached value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	    function mapHas(key) {
	      return key != '__proto__' && hasOwnProperty.call(this.__data__, key);
	    }

	    /**
	     * Sets `value` to `key` of the cache.
	     *
	     * @private
	     * @name set
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to cache.
	     * @param {*} value The value to cache.
	     * @returns {Object} Returns the cache object.
	     */
	    function mapSet(key, value) {
	      if (key != '__proto__') {
	        this.__data__[key] = value;
	      }
	      return this;
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     *
	     * Creates a cache object to store unique values.
	     *
	     * @private
	     * @param {Array} [values] The values to cache.
	     */
	    function SetCache(values) {
	      var length = values ? values.length : 0;

	      this.data = { 'hash': nativeCreate(null), 'set': new Set };
	      while (length--) {
	        this.push(values[length]);
	      }
	    }

	    /**
	     * Checks if `value` is in `cache` mimicking the return signature of
	     * `_.indexOf` by returning `0` if the value is found, else `-1`.
	     *
	     * @private
	     * @param {Object} cache The cache to search.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns `0` if `value` is found, else `-1`.
	     */
	    function cacheIndexOf(cache, value) {
	      var data = cache.data,
	          result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];

	      return result ? 0 : -1;
	    }

	    /**
	     * Adds `value` to the cache.
	     *
	     * @private
	     * @name push
	     * @memberOf SetCache
	     * @param {*} value The value to cache.
	     */
	    function cachePush(value) {
	      var data = this.data;
	      if (typeof value == 'string' || isObject(value)) {
	        data.set.add(value);
	      } else {
	        data.hash[value] = true;
	      }
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a new array joining `array` with `other`.
	     *
	     * @private
	     * @param {Array} array The array to join.
	     * @param {Array} other The other array to join.
	     * @returns {Array} Returns the new concatenated array.
	     */
	    function arrayConcat(array, other) {
	      var index = -1,
	          length = array.length,
	          othIndex = -1,
	          othLength = other.length,
	          result = Array(length + othLength);

	      while (++index < length) {
	        result[index] = array[index];
	      }
	      while (++othIndex < othLength) {
	        result[index++] = other[othIndex];
	      }
	      return result;
	    }

	    /**
	     * Copies the values of `source` to `array`.
	     *
	     * @private
	     * @param {Array} source The array to copy values from.
	     * @param {Array} [array=[]] The array to copy values to.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayCopy(source, array) {
	      var index = -1,
	          length = source.length;

	      array || (array = Array(length));
	      while (++index < length) {
	        array[index] = source[index];
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.forEach` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayEach(array, iteratee) {
	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        if (iteratee(array[index], index, array) === false) {
	          break;
	        }
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.forEachRight` for arrays without support for
	     * callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayEachRight(array, iteratee) {
	      var length = array.length;

	      while (length--) {
	        if (iteratee(array[length], length, array) === false) {
	          break;
	        }
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.every` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     */
	    function arrayEvery(array, predicate) {
	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        if (!predicate(array[index], index, array)) {
	          return false;
	        }
	      }
	      return true;
	    }

	    /**
	     * A specialized version of `baseExtremum` for arrays which invokes `iteratee`
	     * with one argument: (value).
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {*} Returns the extremum value.
	     */
	    function arrayExtremum(array, iteratee, comparator, exValue) {
	      var index = -1,
	          length = array.length,
	          computed = exValue,
	          result = computed;

	      while (++index < length) {
	        var value = array[index],
	            current = +iteratee(value);

	        if (comparator(current, computed)) {
	          computed = current;
	          result = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * A specialized version of `_.filter` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */
	    function arrayFilter(array, predicate) {
	      var index = -1,
	          length = array.length,
	          resIndex = -1,
	          result = [];

	      while (++index < length) {
	        var value = array[index];
	        if (predicate(value, index, array)) {
	          result[++resIndex] = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * A specialized version of `_.map` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
	    function arrayMap(array, iteratee) {
	      var index = -1,
	          length = array.length,
	          result = Array(length);

	      while (++index < length) {
	        result[index] = iteratee(array[index], index, array);
	      }
	      return result;
	    }

	    /**
	     * Appends the elements of `values` to `array`.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to append.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayPush(array, values) {
	      var index = -1,
	          length = values.length,
	          offset = array.length;

	      while (++index < length) {
	        array[offset + index] = values[index];
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.reduce` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {boolean} [initFromArray] Specify using the first element of `array`
	     *  as the initial value.
	     * @returns {*} Returns the accumulated value.
	     */
	    function arrayReduce(array, iteratee, accumulator, initFromArray) {
	      var index = -1,
	          length = array.length;

	      if (initFromArray && length) {
	        accumulator = array[++index];
	      }
	      while (++index < length) {
	        accumulator = iteratee(accumulator, array[index], index, array);
	      }
	      return accumulator;
	    }

	    /**
	     * A specialized version of `_.reduceRight` for arrays without support for
	     * callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {boolean} [initFromArray] Specify using the last element of `array`
	     *  as the initial value.
	     * @returns {*} Returns the accumulated value.
	     */
	    function arrayReduceRight(array, iteratee, accumulator, initFromArray) {
	      var length = array.length;
	      if (initFromArray && length) {
	        accumulator = array[--length];
	      }
	      while (length--) {
	        accumulator = iteratee(accumulator, array[length], length, array);
	      }
	      return accumulator;
	    }

	    /**
	     * A specialized version of `_.some` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */
	    function arraySome(array, predicate) {
	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        if (predicate(array[index], index, array)) {
	          return true;
	        }
	      }
	      return false;
	    }

	    /**
	     * A specialized version of `_.sum` for arrays without support for callback
	     * shorthands and `this` binding..
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {number} Returns the sum.
	     */
	    function arraySum(array, iteratee) {
	      var length = array.length,
	          result = 0;

	      while (length--) {
	        result += +iteratee(array[length]) || 0;
	      }
	      return result;
	    }

	    /**
	     * Used by `_.defaults` to customize its `_.assign` use.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function assignDefaults(objectValue, sourceValue) {
	      return objectValue === undefined ? sourceValue : objectValue;
	    }

	    /**
	     * Used by `_.template` to customize its `_.assign` use.
	     *
	     * **Note:** This function is like `assignDefaults` except that it ignores
	     * inherited property values when checking if a property is `undefined`.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @param {string} key The key associated with the object and source values.
	     * @param {Object} object The destination object.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function assignOwnDefaults(objectValue, sourceValue, key, object) {
	      return (objectValue === undefined || !hasOwnProperty.call(object, key))
	        ? sourceValue
	        : objectValue;
	    }

	    /**
	     * A specialized version of `_.assign` for customizing assigned values without
	     * support for argument juggling, multiple sources, and `this` binding `customizer`
	     * functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {Function} customizer The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     */
	    function assignWith(object, source, customizer) {
	      var index = -1,
	          props = keys(source),
	          length = props.length;

	      while (++index < length) {
	        var key = props[index],
	            value = object[key],
	            result = customizer(value, source[key], key, object, source);

	        if ((result === result ? (result !== value) : (value === value)) ||
	            (value === undefined && !(key in object))) {
	          object[key] = result;
	        }
	      }
	      return object;
	    }

	    /**
	     * The base implementation of `_.assign` without support for argument juggling,
	     * multiple sources, and `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @returns {Object} Returns `object`.
	     */
	    function baseAssign(object, source) {
	      return source == null
	        ? object
	        : baseCopy(source, keys(source), object);
	    }

	    /**
	     * The base implementation of `_.at` without support for string collections
	     * and individual key arguments.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {number[]|string[]} props The property names or indexes of elements to pick.
	     * @returns {Array} Returns the new array of picked elements.
	     */
	    function baseAt(collection, props) {
	      var index = -1,
	          isNil = collection == null,
	          isArr = !isNil && isArrayLike(collection),
	          length = isArr ? collection.length : 0,
	          propsLength = props.length,
	          result = Array(propsLength);

	      while(++index < propsLength) {
	        var key = props[index];
	        if (isArr) {
	          result[index] = isIndex(key, length) ? collection[key] : undefined;
	        } else {
	          result[index] = isNil ? undefined : collection[key];
	        }
	      }
	      return result;
	    }

	    /**
	     * Copies properties of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy properties from.
	     * @param {Array} props The property names to copy.
	     * @param {Object} [object={}] The object to copy properties to.
	     * @returns {Object} Returns `object`.
	     */
	    function baseCopy(source, props, object) {
	      object || (object = {});

	      var index = -1,
	          length = props.length;

	      while (++index < length) {
	        var key = props[index];
	        object[key] = source[key];
	      }
	      return object;
	    }

	    /**
	     * The base implementation of `_.callback` which supports specifying the
	     * number of arguments to provide to `func`.
	     *
	     * @private
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {number} [argCount] The number of arguments to provide to `func`.
	     * @returns {Function} Returns the callback.
	     */
	    function baseCallback(func, thisArg, argCount) {
	      var type = typeof func;
	      if (type == 'function') {
	        return thisArg === undefined
	          ? func
	          : bindCallback(func, thisArg, argCount);
	      }
	      if (func == null) {
	        return identity;
	      }
	      if (type == 'object') {
	        return baseMatches(func);
	      }
	      return thisArg === undefined
	        ? property(func)
	        : baseMatchesProperty(func, thisArg);
	    }

	    /**
	     * The base implementation of `_.clone` without support for argument juggling
	     * and `this` binding `customizer` functions.
	     *
	     * @private
	     * @param {*} value The value to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {string} [key] The key of `value`.
	     * @param {Object} [object] The object `value` belongs to.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates clones with source counterparts.
	     * @returns {*} Returns the cloned value.
	     */
	    function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
	      var result;
	      if (customizer) {
	        result = object ? customizer(value, key, object) : customizer(value);
	      }
	      if (result !== undefined) {
	        return result;
	      }
	      if (!isObject(value)) {
	        return value;
	      }
	      var isArr = isArray(value);
	      if (isArr) {
	        result = initCloneArray(value);
	        if (!isDeep) {
	          return arrayCopy(value, result);
	        }
	      } else {
	        var tag = objToString.call(value),
	            isFunc = tag == funcTag;

	        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	          result = initCloneObject(isFunc ? {} : value);
	          if (!isDeep) {
	            return baseAssign(result, value);
	          }
	        } else {
	          return cloneableTags[tag]
	            ? initCloneByTag(value, tag, isDeep)
	            : (object ? value : {});
	        }
	      }
	      // Check for circular references and return its corresponding clone.
	      stackA || (stackA = []);
	      stackB || (stackB = []);

	      var length = stackA.length;
	      while (length--) {
	        if (stackA[length] == value) {
	          return stackB[length];
	        }
	      }
	      // Add the source value to the stack of traversed objects and associate it with its clone.
	      stackA.push(value);
	      stackB.push(result);

	      // Recursively populate clone (susceptible to call stack limits).
	      (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
	        result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.create` without support for assigning
	     * properties to the created object.
	     *
	     * @private
	     * @param {Object} prototype The object to inherit from.
	     * @returns {Object} Returns the new object.
	     */
	    var baseCreate = (function() {
	      function object() {}
	      return function(prototype) {
	        if (isObject(prototype)) {
	          object.prototype = prototype;
	          var result = new object;
	          object.prototype = undefined;
	        }
	        return result || {};
	      };
	    }());

	    /**
	     * The base implementation of `_.delay` and `_.defer` which accepts an index
	     * of where to slice the arguments to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {Object} args The arguments provide to `func`.
	     * @returns {number} Returns the timer id.
	     */
	    function baseDelay(func, wait, args) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return setTimeout(function() { func.apply(undefined, args); }, wait);
	    }

	    /**
	     * The base implementation of `_.difference` which accepts a single array
	     * of values to exclude.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Array} values The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     */
	    function baseDifference(array, values) {
	      var length = array ? array.length : 0,
	          result = [];

	      if (!length) {
	        return result;
	      }
	      var index = -1,
	          indexOf = getIndexOf(),
	          isCommon = indexOf == baseIndexOf,
	          cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
	          valuesLength = values.length;

	      if (cache) {
	        indexOf = cacheIndexOf;
	        isCommon = false;
	        values = cache;
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index];

	        if (isCommon && value === value) {
	          var valuesIndex = valuesLength;
	          while (valuesIndex--) {
	            if (values[valuesIndex] === value) {
	              continue outer;
	            }
	          }
	          result.push(value);
	        }
	        else if (indexOf(values, value, 0) < 0) {
	          result.push(value);
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.forEach` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object|string} Returns `collection`.
	     */
	    var baseEach = createBaseEach(baseForOwn);

	    /**
	     * The base implementation of `_.forEachRight` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object|string} Returns `collection`.
	     */
	    var baseEachRight = createBaseEach(baseForOwnRight, true);

	    /**
	     * The base implementation of `_.every` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`
	     */
	    function baseEvery(collection, predicate) {
	      var result = true;
	      baseEach(collection, function(value, index, collection) {
	        result = !!predicate(value, index, collection);
	        return result;
	      });
	      return result;
	    }

	    /**
	     * Gets the extremum value of `collection` invoking `iteratee` for each value
	     * in `collection` to generate the criterion by which the value is ranked.
	     * The `iteratee` is invoked with three arguments: (value, index|key, collection).
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {*} Returns the extremum value.
	     */
	    function baseExtremum(collection, iteratee, comparator, exValue) {
	      var computed = exValue,
	          result = computed;

	      baseEach(collection, function(value, index, collection) {
	        var current = +iteratee(value, index, collection);
	        if (comparator(current, computed) || (current === exValue && current === result)) {
	          computed = current;
	          result = value;
	        }
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.fill` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     */
	    function baseFill(array, value, start, end) {
	      var length = array.length;

	      start = start == null ? 0 : (+start || 0);
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = (end === undefined || end > length) ? length : (+end || 0);
	      if (end < 0) {
	        end += length;
	      }
	      length = start > end ? 0 : (end >>> 0);
	      start >>>= 0;

	      while (start < length) {
	        array[start++] = value;
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.filter` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */
	    function baseFilter(collection, predicate) {
	      var result = [];
	      baseEach(collection, function(value, index, collection) {
	        if (predicate(value, index, collection)) {
	          result.push(value);
	        }
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.find`, `_.findLast`, `_.findKey`, and `_.findLastKey`,
	     * without support for callback shorthands and `this` binding, which iterates
	     * over `collection` using the provided `eachFunc`.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {Function} eachFunc The function to iterate over `collection`.
	     * @param {boolean} [retKey] Specify returning the key of the found element
	     *  instead of the element itself.
	     * @returns {*} Returns the found element or its key, else `undefined`.
	     */
	    function baseFind(collection, predicate, eachFunc, retKey) {
	      var result;
	      eachFunc(collection, function(value, key, collection) {
	        if (predicate(value, key, collection)) {
	          result = retKey ? key : value;
	          return false;
	        }
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.flatten` with added support for restricting
	     * flattening and specifying the start index.
	     *
	     * @private
	     * @param {Array} array The array to flatten.
	     * @param {boolean} [isDeep] Specify a deep flatten.
	     * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	     * @param {Array} [result=[]] The initial result value.
	     * @returns {Array} Returns the new flattened array.
	     */
	    function baseFlatten(array, isDeep, isStrict, result) {
	      result || (result = []);

	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        var value = array[index];
	        if (isObjectLike(value) && isArrayLike(value) &&
	            (isStrict || isArray(value) || isArguments(value))) {
	          if (isDeep) {
	            // Recursively flatten arrays (susceptible to call stack limits).
	            baseFlatten(value, isDeep, isStrict, result);
	          } else {
	            arrayPush(result, value);
	          }
	        } else if (!isStrict) {
	          result[result.length] = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `baseForIn` and `baseForOwn` which iterates
	     * over `object` properties returned by `keysFunc` invoking `iteratee` for
	     * each property. Iteratee functions may exit iteration early by explicitly
	     * returning `false`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseFor = createBaseFor();

	    /**
	     * This function is like `baseFor` except that it iterates over properties
	     * in the opposite order.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseForRight = createBaseFor(true);

	    /**
	     * The base implementation of `_.forIn` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForIn(object, iteratee) {
	      return baseFor(object, iteratee, keysIn);
	    }

	    /**
	     * The base implementation of `_.forOwn` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwn(object, iteratee) {
	      return baseFor(object, iteratee, keys);
	    }

	    /**
	     * The base implementation of `_.forOwnRight` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwnRight(object, iteratee) {
	      return baseForRight(object, iteratee, keys);
	    }

	    /**
	     * The base implementation of `_.functions` which creates an array of
	     * `object` function property names filtered from those provided.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} props The property names to filter.
	     * @returns {Array} Returns the new array of filtered property names.
	     */
	    function baseFunctions(object, props) {
	      var index = -1,
	          length = props.length,
	          resIndex = -1,
	          result = [];

	      while (++index < length) {
	        var key = props[index];
	        if (isFunction(object[key])) {
	          result[++resIndex] = key;
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `get` without support for string paths
	     * and default values.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} path The path of the property to get.
	     * @param {string} [pathKey] The key representation of path.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseGet(object, path, pathKey) {
	      if (object == null) {
	        return;
	      }
	      if (pathKey !== undefined && pathKey in toObject(object)) {
	        path = [pathKey];
	      }
	      var index = 0,
	          length = path.length;

	      while (object != null && index < length) {
	        object = object[path[index++]];
	      }
	      return (index && index == length) ? object : undefined;
	    }

	    /**
	     * The base implementation of `_.isEqual` without support for `this` binding
	     * `customizer` functions.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize comparing values.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     */
	    function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	      if (value === other) {
	        return true;
	      }
	      if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	        return value !== value && other !== other;
	      }
	      return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	    }

	    /**
	     * A specialized version of `baseIsEqual` for arrays and objects which performs
	     * deep comparisons and tracks traversed objects enabling objects with circular
	     * references to be compared.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing objects.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	     * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var objIsArr = isArray(object),
	          othIsArr = isArray(other),
	          objTag = arrayTag,
	          othTag = arrayTag;

	      if (!objIsArr) {
	        objTag = objToString.call(object);
	        if (objTag == argsTag) {
	          objTag = objectTag;
	        } else if (objTag != objectTag) {
	          objIsArr = isTypedArray(object);
	        }
	      }
	      if (!othIsArr) {
	        othTag = objToString.call(other);
	        if (othTag == argsTag) {
	          othTag = objectTag;
	        } else if (othTag != objectTag) {
	          othIsArr = isTypedArray(other);
	        }
	      }
	      var objIsObj = objTag == objectTag,
	          othIsObj = othTag == objectTag,
	          isSameTag = objTag == othTag;

	      if (isSameTag && !(objIsArr || objIsObj)) {
	        return equalByTag(object, other, objTag);
	      }
	      if (!isLoose) {
	        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	        if (objIsWrapped || othIsWrapped) {
	          return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	        }
	      }
	      if (!isSameTag) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      // For more information on detecting circular references see https://es5.github.io/#JO.
	      stackA || (stackA = []);
	      stackB || (stackB = []);

	      var length = stackA.length;
	      while (length--) {
	        if (stackA[length] == object) {
	          return stackB[length] == other;
	        }
	      }
	      // Add `object` and `other` to the stack of traversed objects.
	      stackA.push(object);
	      stackB.push(other);

	      var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);

	      stackA.pop();
	      stackB.pop();

	      return result;
	    }

	    /**
	     * The base implementation of `_.isMatch` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} matchData The propery names, values, and compare flags to match.
	     * @param {Function} [customizer] The function to customize comparing objects.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     */
	    function baseIsMatch(object, matchData, customizer) {
	      var index = matchData.length,
	          length = index,
	          noCustomizer = !customizer;

	      if (object == null) {
	        return !length;
	      }
	      object = toObject(object);
	      while (index--) {
	        var data = matchData[index];
	        if ((noCustomizer && data[2])
	              ? data[1] !== object[data[0]]
	              : !(data[0] in object)
	            ) {
	          return false;
	        }
	      }
	      while (++index < length) {
	        data = matchData[index];
	        var key = data[0],
	            objValue = object[key],
	            srcValue = data[1];

	        if (noCustomizer && data[2]) {
	          if (objValue === undefined && !(key in object)) {
	            return false;
	          }
	        } else {
	          var result = customizer ? customizer(objValue, srcValue, key) : undefined;
	          if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
	            return false;
	          }
	        }
	      }
	      return true;
	    }

	    /**
	     * The base implementation of `_.map` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
	    function baseMap(collection, iteratee) {
	      var index = -1,
	          result = isArrayLike(collection) ? Array(collection.length) : [];

	      baseEach(collection, function(value, key, collection) {
	        result[++index] = iteratee(value, key, collection);
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.matches` which does not clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new function.
	     */
	    function baseMatches(source) {
	      var matchData = getMatchData(source);
	      if (matchData.length == 1 && matchData[0][2]) {
	        var key = matchData[0][0],
	            value = matchData[0][1];

	        return function(object) {
	          if (object == null) {
	            return false;
	          }
	          return object[key] === value && (value !== undefined || (key in toObject(object)));
	        };
	      }
	      return function(object) {
	        return baseIsMatch(object, matchData);
	      };
	    }

	    /**
	     * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
	     *
	     * @private
	     * @param {string} path The path of the property to get.
	     * @param {*} srcValue The value to compare.
	     * @returns {Function} Returns the new function.
	     */
	    function baseMatchesProperty(path, srcValue) {
	      var isArr = isArray(path),
	          isCommon = isKey(path) && isStrictComparable(srcValue),
	          pathKey = (path + '');

	      path = toPath(path);
	      return function(object) {
	        if (object == null) {
	          return false;
	        }
	        var key = pathKey;
	        object = toObject(object);
	        if ((isArr || !isCommon) && !(key in object)) {
	          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	          if (object == null) {
	            return false;
	          }
	          key = last(path);
	          object = toObject(object);
	        }
	        return object[key] === srcValue
	          ? (srcValue !== undefined || (key in object))
	          : baseIsEqual(srcValue, object[key], undefined, true);
	      };
	    }

	    /**
	     * The base implementation of `_.merge` without support for argument juggling,
	     * multiple sources, and `this` binding `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates values with source counterparts.
	     * @returns {Object} Returns `object`.
	     */
	    function baseMerge(object, source, customizer, stackA, stackB) {
	      if (!isObject(object)) {
	        return object;
	      }
	      var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
	          props = isSrcArr ? undefined : keys(source);

	      arrayEach(props || source, function(srcValue, key) {
	        if (props) {
	          key = srcValue;
	          srcValue = source[key];
	        }
	        if (isObjectLike(srcValue)) {
	          stackA || (stackA = []);
	          stackB || (stackB = []);
	          baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
	        }
	        else {
	          var value = object[key],
	              result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	              isCommon = result === undefined;

	          if (isCommon) {
	            result = srcValue;
	          }
	          if ((result !== undefined || (isSrcArr && !(key in object))) &&
	              (isCommon || (result === result ? (result !== value) : (value === value)))) {
	            object[key] = result;
	          }
	        }
	      });
	      return object;
	    }

	    /**
	     * A specialized version of `baseMerge` for arrays and objects which performs
	     * deep merges and tracks traversed objects enabling objects with circular
	     * references to be merged.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {string} key The key of the value to merge.
	     * @param {Function} mergeFunc The function to merge values.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates values with source counterparts.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
	      var length = stackA.length,
	          srcValue = source[key];

	      while (length--) {
	        if (stackA[length] == srcValue) {
	          object[key] = stackB[length];
	          return;
	        }
	      }
	      var value = object[key],
	          result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	          isCommon = result === undefined;

	      if (isCommon) {
	        result = srcValue;
	        if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
	          result = isArray(value)
	            ? value
	            : (isArrayLike(value) ? arrayCopy(value) : []);
	        }
	        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	          result = isArguments(value)
	            ? toPlainObject(value)
	            : (isPlainObject(value) ? value : {});
	        }
	        else {
	          isCommon = false;
	        }
	      }
	      // Add the source value to the stack of traversed objects and associate
	      // it with its merged value.
	      stackA.push(srcValue);
	      stackB.push(result);

	      if (isCommon) {
	        // Recursively merge objects and arrays (susceptible to call stack limits).
	        object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
	      } else if (result === result ? (result !== value) : (value === value)) {
	        object[key] = result;
	      }
	    }

	    /**
	     * The base implementation of `_.property` without support for deep paths.
	     *
	     * @private
	     * @param {string} key The key of the property to get.
	     * @returns {Function} Returns the new function.
	     */
	    function baseProperty(key) {
	      return function(object) {
	        return object == null ? undefined : object[key];
	      };
	    }

	    /**
	     * A specialized version of `baseProperty` which supports deep paths.
	     *
	     * @private
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new function.
	     */
	    function basePropertyDeep(path) {
	      var pathKey = (path + '');
	      path = toPath(path);
	      return function(object) {
	        return baseGet(object, path, pathKey);
	      };
	    }

	    /**
	     * The base implementation of `_.pullAt` without support for individual
	     * index arguments and capturing the removed elements.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {number[]} indexes The indexes of elements to remove.
	     * @returns {Array} Returns `array`.
	     */
	    function basePullAt(array, indexes) {
	      var length = array ? indexes.length : 0;
	      while (length--) {
	        var index = indexes[length];
	        if (index != previous && isIndex(index)) {
	          var previous = index;
	          splice.call(array, index, 1);
	        }
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.random` without support for argument juggling
	     * and returning floating-point numbers.
	     *
	     * @private
	     * @param {number} min The minimum possible value.
	     * @param {number} max The maximum possible value.
	     * @returns {number} Returns the random number.
	     */
	    function baseRandom(min, max) {
	      return min + nativeFloor(nativeRandom() * (max - min + 1));
	    }

	    /**
	     * The base implementation of `_.reduce` and `_.reduceRight` without support
	     * for callback shorthands and `this` binding, which iterates over `collection`
	     * using the provided `eachFunc`.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} accumulator The initial value.
	     * @param {boolean} initFromCollection Specify using the first or last element
	     *  of `collection` as the initial value.
	     * @param {Function} eachFunc The function to iterate over `collection`.
	     * @returns {*} Returns the accumulated value.
	     */
	    function baseReduce(collection, iteratee, accumulator, initFromCollection, eachFunc) {
	      eachFunc(collection, function(value, index, collection) {
	        accumulator = initFromCollection
	          ? (initFromCollection = false, value)
	          : iteratee(accumulator, value, index, collection);
	      });
	      return accumulator;
	    }

	    /**
	     * The base implementation of `setData` without support for hot loop detection.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var baseSetData = !metaMap ? identity : function(func, data) {
	      metaMap.set(func, data);
	      return func;
	    };

	    /**
	     * The base implementation of `_.slice` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseSlice(array, start, end) {
	      var index = -1,
	          length = array.length;

	      start = start == null ? 0 : (+start || 0);
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = (end === undefined || end > length) ? length : (+end || 0);
	      if (end < 0) {
	        end += length;
	      }
	      length = start > end ? 0 : ((end - start) >>> 0);
	      start >>>= 0;

	      var result = Array(length);
	      while (++index < length) {
	        result[index] = array[index + start];
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.some` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */
	    function baseSome(collection, predicate) {
	      var result;

	      baseEach(collection, function(value, index, collection) {
	        result = predicate(value, index, collection);
	        return !result;
	      });
	      return !!result;
	    }

	    /**
	     * The base implementation of `_.sortBy` which uses `comparer` to define
	     * the sort order of `array` and replaces criteria objects with their
	     * corresponding values.
	     *
	     * @private
	     * @param {Array} array The array to sort.
	     * @param {Function} comparer The function to define sort order.
	     * @returns {Array} Returns `array`.
	     */
	    function baseSortBy(array, comparer) {
	      var length = array.length;

	      array.sort(comparer);
	      while (length--) {
	        array[length] = array[length].value;
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.sortByOrder` without param guards.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {boolean[]} orders The sort orders of `iteratees`.
	     * @returns {Array} Returns the new sorted array.
	     */
	    function baseSortByOrder(collection, iteratees, orders) {
	      var callback = getCallback(),
	          index = -1;

	      iteratees = arrayMap(iteratees, function(iteratee) { return callback(iteratee); });

	      var result = baseMap(collection, function(value) {
	        var criteria = arrayMap(iteratees, function(iteratee) { return iteratee(value); });
	        return { 'criteria': criteria, 'index': ++index, 'value': value };
	      });

	      return baseSortBy(result, function(object, other) {
	        return compareMultiple(object, other, orders);
	      });
	    }

	    /**
	     * The base implementation of `_.sum` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {number} Returns the sum.
	     */
	    function baseSum(collection, iteratee) {
	      var result = 0;
	      baseEach(collection, function(value, index, collection) {
	        result += +iteratee(value, index, collection) || 0;
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.uniq` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The function invoked per iteration.
	     * @returns {Array} Returns the new duplicate-value-free array.
	     */
	    function baseUniq(array, iteratee) {
	      var index = -1,
	          indexOf = getIndexOf(),
	          length = array.length,
	          isCommon = indexOf == baseIndexOf,
	          isLarge = isCommon && length >= LARGE_ARRAY_SIZE,
	          seen = isLarge ? createCache() : null,
	          result = [];

	      if (seen) {
	        indexOf = cacheIndexOf;
	        isCommon = false;
	      } else {
	        isLarge = false;
	        seen = iteratee ? [] : result;
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index],
	            computed = iteratee ? iteratee(value, index, array) : value;

	        if (isCommon && value === value) {
	          var seenIndex = seen.length;
	          while (seenIndex--) {
	            if (seen[seenIndex] === computed) {
	              continue outer;
	            }
	          }
	          if (iteratee) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	        else if (indexOf(seen, computed, 0) < 0) {
	          if (iteratee || isLarge) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.values` and `_.valuesIn` which creates an
	     * array of `object` property values corresponding to the property names
	     * of `props`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} props The property names to get values for.
	     * @returns {Object} Returns the array of property values.
	     */
	    function baseValues(object, props) {
	      var index = -1,
	          length = props.length,
	          result = Array(length);

	      while (++index < length) {
	        result[index] = object[props[index]];
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.dropRightWhile`, `_.dropWhile`, `_.takeRightWhile`,
	     * and `_.takeWhile` without support for callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseWhile(array, predicate, isDrop, fromRight) {
	      var length = array.length,
	          index = fromRight ? length : -1;

	      while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
	      return isDrop
	        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
	        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
	    }

	    /**
	     * The base implementation of `wrapperValue` which returns the result of
	     * performing a sequence of actions on the unwrapped `value`, where each
	     * successive action is supplied the return value of the previous.
	     *
	     * @private
	     * @param {*} value The unwrapped value.
	     * @param {Array} actions Actions to peform to resolve the unwrapped value.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseWrapperValue(value, actions) {
	      var result = value;
	      if (result instanceof LazyWrapper) {
	        result = result.value();
	      }
	      var index = -1,
	          length = actions.length;

	      while (++index < length) {
	        var action = actions[index];
	        result = action.func.apply(action.thisArg, arrayPush([result], action.args));
	      }
	      return result;
	    }

	    /**
	     * Performs a binary search of `array` to determine the index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function binaryIndex(array, value, retHighest) {
	      var low = 0,
	          high = array ? array.length : low;

	      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
	        while (low < high) {
	          var mid = (low + high) >>> 1,
	              computed = array[mid];

	          if ((retHighest ? (computed <= value) : (computed < value)) && computed !== null) {
	            low = mid + 1;
	          } else {
	            high = mid;
	          }
	        }
	        return high;
	      }
	      return binaryIndexBy(array, value, identity, retHighest);
	    }

	    /**
	     * This function is like `binaryIndex` except that it invokes `iteratee` for
	     * `value` and each element of `array` to compute their sort ranking. The
	     * iteratee is invoked with one argument; (value).
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function binaryIndexBy(array, value, iteratee, retHighest) {
	      value = iteratee(value);

	      var low = 0,
	          high = array ? array.length : 0,
	          valIsNaN = value !== value,
	          valIsNull = value === null,
	          valIsUndef = value === undefined;

	      while (low < high) {
	        var mid = nativeFloor((low + high) / 2),
	            computed = iteratee(array[mid]),
	            isDef = computed !== undefined,
	            isReflexive = computed === computed;

	        if (valIsNaN) {
	          var setLow = isReflexive || retHighest;
	        } else if (valIsNull) {
	          setLow = isReflexive && isDef && (retHighest || computed != null);
	        } else if (valIsUndef) {
	          setLow = isReflexive && (retHighest || isDef);
	        } else if (computed == null) {
	          setLow = false;
	        } else {
	          setLow = retHighest ? (computed <= value) : (computed < value);
	        }
	        if (setLow) {
	          low = mid + 1;
	        } else {
	          high = mid;
	        }
	      }
	      return nativeMin(high, MAX_ARRAY_INDEX);
	    }

	    /**
	     * A specialized version of `baseCallback` which only supports `this` binding
	     * and specifying the number of arguments to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {number} [argCount] The number of arguments to provide to `func`.
	     * @returns {Function} Returns the callback.
	     */
	    function bindCallback(func, thisArg, argCount) {
	      if (typeof func != 'function') {
	        return identity;
	      }
	      if (thisArg === undefined) {
	        return func;
	      }
	      switch (argCount) {
	        case 1: return function(value) {
	          return func.call(thisArg, value);
	        };
	        case 3: return function(value, index, collection) {
	          return func.call(thisArg, value, index, collection);
	        };
	        case 4: return function(accumulator, value, index, collection) {
	          return func.call(thisArg, accumulator, value, index, collection);
	        };
	        case 5: return function(value, other, key, object, source) {
	          return func.call(thisArg, value, other, key, object, source);
	        };
	      }
	      return function() {
	        return func.apply(thisArg, arguments);
	      };
	    }

	    /**
	     * Creates a clone of the given array buffer.
	     *
	     * @private
	     * @param {ArrayBuffer} buffer The array buffer to clone.
	     * @returns {ArrayBuffer} Returns the cloned array buffer.
	     */
	    function bufferClone(buffer) {
	      var result = new ArrayBuffer(buffer.byteLength),
	          view = new Uint8Array(result);

	      view.set(new Uint8Array(buffer));
	      return result;
	    }

	    /**
	     * Creates an array that is the composition of partially applied arguments,
	     * placeholders, and provided arguments into a single array of arguments.
	     *
	     * @private
	     * @param {Array|Object} args The provided arguments.
	     * @param {Array} partials The arguments to prepend to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgs(args, partials, holders) {
	      var holdersLength = holders.length,
	          argsIndex = -1,
	          argsLength = nativeMax(args.length - holdersLength, 0),
	          leftIndex = -1,
	          leftLength = partials.length,
	          result = Array(leftLength + argsLength);

	      while (++leftIndex < leftLength) {
	        result[leftIndex] = partials[leftIndex];
	      }
	      while (++argsIndex < holdersLength) {
	        result[holders[argsIndex]] = args[argsIndex];
	      }
	      while (argsLength--) {
	        result[leftIndex++] = args[argsIndex++];
	      }
	      return result;
	    }

	    /**
	     * This function is like `composeArgs` except that the arguments composition
	     * is tailored for `_.partialRight`.
	     *
	     * @private
	     * @param {Array|Object} args The provided arguments.
	     * @param {Array} partials The arguments to append to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgsRight(args, partials, holders) {
	      var holdersIndex = -1,
	          holdersLength = holders.length,
	          argsIndex = -1,
	          argsLength = nativeMax(args.length - holdersLength, 0),
	          rightIndex = -1,
	          rightLength = partials.length,
	          result = Array(argsLength + rightLength);

	      while (++argsIndex < argsLength) {
	        result[argsIndex] = args[argsIndex];
	      }
	      var offset = argsIndex;
	      while (++rightIndex < rightLength) {
	        result[offset + rightIndex] = partials[rightIndex];
	      }
	      while (++holdersIndex < holdersLength) {
	        result[offset + holders[holdersIndex]] = args[argsIndex++];
	      }
	      return result;
	    }

	    /**
	     * Creates a `_.countBy`, `_.groupBy`, `_.indexBy`, or `_.partition` function.
	     *
	     * @private
	     * @param {Function} setter The function to set keys and values of the accumulator object.
	     * @param {Function} [initializer] The function to initialize the accumulator object.
	     * @returns {Function} Returns the new aggregator function.
	     */
	    function createAggregator(setter, initializer) {
	      return function(collection, iteratee, thisArg) {
	        var result = initializer ? initializer() : {};
	        iteratee = getCallback(iteratee, thisArg, 3);

	        if (isArray(collection)) {
	          var index = -1,
	              length = collection.length;

	          while (++index < length) {
	            var value = collection[index];
	            setter(result, value, iteratee(value, index, collection), collection);
	          }
	        } else {
	          baseEach(collection, function(value, key, collection) {
	            setter(result, value, iteratee(value, key, collection), collection);
	          });
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @returns {Function} Returns the new assigner function.
	     */
	    function createAssigner(assigner) {
	      return restParam(function(object, sources) {
	        var index = -1,
	            length = object == null ? 0 : sources.length,
	            customizer = length > 2 ? sources[length - 2] : undefined,
	            guard = length > 2 ? sources[2] : undefined,
	            thisArg = length > 1 ? sources[length - 1] : undefined;

	        if (typeof customizer == 'function') {
	          customizer = bindCallback(customizer, thisArg, 5);
	          length -= 2;
	        } else {
	          customizer = typeof thisArg == 'function' ? thisArg : undefined;
	          length -= (customizer ? 1 : 0);
	        }
	        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	          customizer = length < 3 ? undefined : customizer;
	          length = 1;
	        }
	        while (++index < length) {
	          var source = sources[index];
	          if (source) {
	            assigner(object, source, customizer);
	          }
	        }
	        return object;
	      });
	    }

	    /**
	     * Creates a `baseEach` or `baseEachRight` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseEach(eachFunc, fromRight) {
	      return function(collection, iteratee) {
	        var length = collection ? getLength(collection) : 0;
	        if (!isLength(length)) {
	          return eachFunc(collection, iteratee);
	        }
	        var index = fromRight ? length : -1,
	            iterable = toObject(collection);

	        while ((fromRight ? index-- : ++index < length)) {
	          if (iteratee(iterable[index], index, iterable) === false) {
	            break;
	          }
	        }
	        return collection;
	      };
	    }

	    /**
	     * Creates a base function for `_.forIn` or `_.forInRight`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseFor(fromRight) {
	      return function(object, iteratee, keysFunc) {
	        var iterable = toObject(object),
	            props = keysFunc(object),
	            length = props.length,
	            index = fromRight ? length : -1;

	        while ((fromRight ? index-- : ++index < length)) {
	          var key = props[index];
	          if (iteratee(iterable[key], key, iterable) === false) {
	            break;
	          }
	        }
	        return object;
	      };
	    }

	    /**
	     * Creates a function that wraps `func` and invokes it with the `this`
	     * binding of `thisArg`.
	     *
	     * @private
	     * @param {Function} func The function to bind.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @returns {Function} Returns the new bound function.
	     */
	    function createBindWrapper(func, thisArg) {
	      var Ctor = createCtorWrapper(func);

	      function wrapper() {
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return fn.apply(thisArg, arguments);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates a `Set` cache object to optimize linear searches of large arrays.
	     *
	     * @private
	     * @param {Array} [values] The values to cache.
	     * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
	     */
	    function createCache(values) {
	      return (nativeCreate && Set) ? new SetCache(values) : null;
	    }

	    /**
	     * Creates a function that produces compound words out of the words in a
	     * given string.
	     *
	     * @private
	     * @param {Function} callback The function to combine each word.
	     * @returns {Function} Returns the new compounder function.
	     */
	    function createCompounder(callback) {
	      return function(string) {
	        var index = -1,
	            array = words(deburr(string)),
	            length = array.length,
	            result = '';

	        while (++index < length) {
	          result = callback(result, array[index], index);
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates a function that produces an instance of `Ctor` regardless of
	     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	     *
	     * @private
	     * @param {Function} Ctor The constructor to wrap.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createCtorWrapper(Ctor) {
	      return function() {
	        // Use a `switch` statement to work with class constructors.
	        // See http://ecma-international.org/ecma-262/6.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
	        // for more details.
	        var args = arguments;
	        switch (args.length) {
	          case 0: return new Ctor;
	          case 1: return new Ctor(args[0]);
	          case 2: return new Ctor(args[0], args[1]);
	          case 3: return new Ctor(args[0], args[1], args[2]);
	          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
	          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
	          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
	          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
	        }
	        var thisBinding = baseCreate(Ctor.prototype),
	            result = Ctor.apply(thisBinding, args);

	        // Mimic the constructor's `return` behavior.
	        // See https://es5.github.io/#x13.2.2 for more details.
	        return isObject(result) ? result : thisBinding;
	      };
	    }

	    /**
	     * Creates a `_.curry` or `_.curryRight` function.
	     *
	     * @private
	     * @param {boolean} flag The curry bit flag.
	     * @returns {Function} Returns the new curry function.
	     */
	    function createCurry(flag) {
	      function curryFunc(func, arity, guard) {
	        if (guard && isIterateeCall(func, arity, guard)) {
	          arity = undefined;
	        }
	        var result = createWrapper(func, flag, undefined, undefined, undefined, undefined, undefined, arity);
	        result.placeholder = curryFunc.placeholder;
	        return result;
	      }
	      return curryFunc;
	    }

	    /**
	     * Creates a `_.defaults` or `_.defaultsDeep` function.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @param {Function} customizer The function to customize assigned values.
	     * @returns {Function} Returns the new defaults function.
	     */
	    function createDefaults(assigner, customizer) {
	      return restParam(function(args) {
	        var object = args[0];
	        if (object == null) {
	          return object;
	        }
	        args.push(customizer);
	        return assigner.apply(undefined, args);
	      });
	    }

	    /**
	     * Creates a `_.max` or `_.min` function.
	     *
	     * @private
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {Function} Returns the new extremum function.
	     */
	    function createExtremum(comparator, exValue) {
	      return function(collection, iteratee, thisArg) {
	        if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	          iteratee = undefined;
	        }
	        iteratee = getCallback(iteratee, thisArg, 3);
	        if (iteratee.length == 1) {
	          collection = isArray(collection) ? collection : toIterable(collection);
	          var result = arrayExtremum(collection, iteratee, comparator, exValue);
	          if (!(collection.length && result === exValue)) {
	            return result;
	          }
	        }
	        return baseExtremum(collection, iteratee, comparator, exValue);
	      };
	    }

	    /**
	     * Creates a `_.find` or `_.findLast` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFind(eachFunc, fromRight) {
	      return function(collection, predicate, thisArg) {
	        predicate = getCallback(predicate, thisArg, 3);
	        if (isArray(collection)) {
	          var index = baseFindIndex(collection, predicate, fromRight);
	          return index > -1 ? collection[index] : undefined;
	        }
	        return baseFind(collection, predicate, eachFunc);
	      };
	    }

	    /**
	     * Creates a `_.findIndex` or `_.findLastIndex` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFindIndex(fromRight) {
	      return function(array, predicate, thisArg) {
	        if (!(array && array.length)) {
	          return -1;
	        }
	        predicate = getCallback(predicate, thisArg, 3);
	        return baseFindIndex(array, predicate, fromRight);
	      };
	    }

	    /**
	     * Creates a `_.findKey` or `_.findLastKey` function.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFindKey(objectFunc) {
	      return function(object, predicate, thisArg) {
	        predicate = getCallback(predicate, thisArg, 3);
	        return baseFind(object, predicate, objectFunc, true);
	      };
	    }

	    /**
	     * Creates a `_.flow` or `_.flowRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new flow function.
	     */
	    function createFlow(fromRight) {
	      return function() {
	        var wrapper,
	            length = arguments.length,
	            index = fromRight ? length : -1,
	            leftIndex = 0,
	            funcs = Array(length);

	        while ((fromRight ? index-- : ++index < length)) {
	          var func = funcs[leftIndex++] = arguments[index];
	          if (typeof func != 'function') {
	            throw new TypeError(FUNC_ERROR_TEXT);
	          }
	          if (!wrapper && LodashWrapper.prototype.thru && getFuncName(func) == 'wrapper') {
	            wrapper = new LodashWrapper([], true);
	          }
	        }
	        index = wrapper ? -1 : length;
	        while (++index < length) {
	          func = funcs[index];

	          var funcName = getFuncName(func),
	              data = funcName == 'wrapper' ? getData(func) : undefined;

	          if (data && isLaziable(data[0]) && data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) && !data[4].length && data[9] == 1) {
	            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
	          } else {
	            wrapper = (func.length == 1 && isLaziable(func)) ? wrapper[funcName]() : wrapper.thru(func);
	          }
	        }
	        return function() {
	          var args = arguments,
	              value = args[0];

	          if (wrapper && args.length == 1 && isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
	            return wrapper.plant(value).value();
	          }
	          var index = 0,
	              result = length ? funcs[index].apply(this, args) : value;

	          while (++index < length) {
	            result = funcs[index].call(this, result);
	          }
	          return result;
	        };
	      };
	    }

	    /**
	     * Creates a function for `_.forEach` or `_.forEachRight`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over an array.
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForEach(arrayFunc, eachFunc) {
	      return function(collection, iteratee, thisArg) {
	        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	          ? arrayFunc(collection, iteratee)
	          : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
	      };
	    }

	    /**
	     * Creates a function for `_.forIn` or `_.forInRight`.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForIn(objectFunc) {
	      return function(object, iteratee, thisArg) {
	        if (typeof iteratee != 'function' || thisArg !== undefined) {
	          iteratee = bindCallback(iteratee, thisArg, 3);
	        }
	        return objectFunc(object, iteratee, keysIn);
	      };
	    }

	    /**
	     * Creates a function for `_.forOwn` or `_.forOwnRight`.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForOwn(objectFunc) {
	      return function(object, iteratee, thisArg) {
	        if (typeof iteratee != 'function' || thisArg !== undefined) {
	          iteratee = bindCallback(iteratee, thisArg, 3);
	        }
	        return objectFunc(object, iteratee);
	      };
	    }

	    /**
	     * Creates a function for `_.mapKeys` or `_.mapValues`.
	     *
	     * @private
	     * @param {boolean} [isMapKeys] Specify mapping keys instead of values.
	     * @returns {Function} Returns the new map function.
	     */
	    function createObjectMapper(isMapKeys) {
	      return function(object, iteratee, thisArg) {
	        var result = {};
	        iteratee = getCallback(iteratee, thisArg, 3);

	        baseForOwn(object, function(value, key, object) {
	          var mapped = iteratee(value, key, object);
	          key = isMapKeys ? mapped : key;
	          value = isMapKeys ? value : mapped;
	          result[key] = value;
	        });
	        return result;
	      };
	    }

	    /**
	     * Creates a function for `_.padLeft` or `_.padRight`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify padding from the right.
	     * @returns {Function} Returns the new pad function.
	     */
	    function createPadDir(fromRight) {
	      return function(string, length, chars) {
	        string = baseToString(string);
	        return (fromRight ? string : '') + createPadding(string, length, chars) + (fromRight ? '' : string);
	      };
	    }

	    /**
	     * Creates a `_.partial` or `_.partialRight` function.
	     *
	     * @private
	     * @param {boolean} flag The partial bit flag.
	     * @returns {Function} Returns the new partial function.
	     */
	    function createPartial(flag) {
	      var partialFunc = restParam(function(func, partials) {
	        var holders = replaceHolders(partials, partialFunc.placeholder);
	        return createWrapper(func, flag, undefined, partials, holders);
	      });
	      return partialFunc;
	    }

	    /**
	     * Creates a function for `_.reduce` or `_.reduceRight`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over an array.
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @returns {Function} Returns the new each function.
	     */
	    function createReduce(arrayFunc, eachFunc) {
	      return function(collection, iteratee, accumulator, thisArg) {
	        var initFromArray = arguments.length < 3;
	        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	          ? arrayFunc(collection, iteratee, accumulator, initFromArray)
	          : baseReduce(collection, getCallback(iteratee, thisArg, 4), accumulator, initFromArray, eachFunc);
	      };
	    }

	    /**
	     * Creates a function that wraps `func` and invokes it with optional `this`
	     * binding of, partial application, and currying.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to reference.
	     * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [partialsRight] The arguments to append to those provided to the new function.
	     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
	      var isAry = bitmask & ARY_FLAG,
	          isBind = bitmask & BIND_FLAG,
	          isBindKey = bitmask & BIND_KEY_FLAG,
	          isCurry = bitmask & CURRY_FLAG,
	          isCurryBound = bitmask & CURRY_BOUND_FLAG,
	          isCurryRight = bitmask & CURRY_RIGHT_FLAG,
	          Ctor = isBindKey ? undefined : createCtorWrapper(func);

	      function wrapper() {
	        // Avoid `arguments` object use disqualifying optimizations by
	        // converting it to an array before providing it to other functions.
	        var length = arguments.length,
	            index = length,
	            args = Array(length);

	        while (index--) {
	          args[index] = arguments[index];
	        }
	        if (partials) {
	          args = composeArgs(args, partials, holders);
	        }
	        if (partialsRight) {
	          args = composeArgsRight(args, partialsRight, holdersRight);
	        }
	        if (isCurry || isCurryRight) {
	          var placeholder = wrapper.placeholder,
	              argsHolders = replaceHolders(args, placeholder);

	          length -= argsHolders.length;
	          if (length < arity) {
	            var newArgPos = argPos ? arrayCopy(argPos) : undefined,
	                newArity = nativeMax(arity - length, 0),
	                newsHolders = isCurry ? argsHolders : undefined,
	                newHoldersRight = isCurry ? undefined : argsHolders,
	                newPartials = isCurry ? args : undefined,
	                newPartialsRight = isCurry ? undefined : args;

	            bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
	            bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

	            if (!isCurryBound) {
	              bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
	            }
	            var newData = [func, bitmask, thisArg, newPartials, newsHolders, newPartialsRight, newHoldersRight, newArgPos, ary, newArity],
	                result = createHybridWrapper.apply(undefined, newData);

	            if (isLaziable(func)) {
	              setData(result, newData);
	            }
	            result.placeholder = placeholder;
	            return result;
	          }
	        }
	        var thisBinding = isBind ? thisArg : this,
	            fn = isBindKey ? thisBinding[func] : func;

	        if (argPos) {
	          args = reorder(args, argPos);
	        }
	        if (isAry && ary < args.length) {
	          args.length = ary;
	        }
	        if (this && this !== root && this instanceof wrapper) {
	          fn = Ctor || createCtorWrapper(func);
	        }
	        return fn.apply(thisBinding, args);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates the padding required for `string` based on the given `length`.
	     * The `chars` string is truncated if the number of characters exceeds `length`.
	     *
	     * @private
	     * @param {string} string The string to create padding for.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the pad for `string`.
	     */
	    function createPadding(string, length, chars) {
	      var strLength = string.length;
	      length = +length;

	      if (strLength >= length || !nativeIsFinite(length)) {
	        return '';
	      }
	      var padLength = length - strLength;
	      chars = chars == null ? ' ' : (chars + '');
	      return repeat(chars, nativeCeil(padLength / chars.length)).slice(0, padLength);
	    }

	    /**
	     * Creates a function that wraps `func` and invokes it with the optional `this`
	     * binding of `thisArg` and the `partials` prepended to those provided to
	     * the wrapper.
	     *
	     * @private
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {Array} partials The arguments to prepend to those provided to the new function.
	     * @returns {Function} Returns the new bound function.
	     */
	    function createPartialWrapper(func, bitmask, thisArg, partials) {
	      var isBind = bitmask & BIND_FLAG,
	          Ctor = createCtorWrapper(func);

	      function wrapper() {
	        // Avoid `arguments` object use disqualifying optimizations by
	        // converting it to an array before providing it `func`.
	        var argsIndex = -1,
	            argsLength = arguments.length,
	            leftIndex = -1,
	            leftLength = partials.length,
	            args = Array(leftLength + argsLength);

	        while (++leftIndex < leftLength) {
	          args[leftIndex] = partials[leftIndex];
	        }
	        while (argsLength--) {
	          args[leftIndex++] = arguments[++argsIndex];
	        }
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return fn.apply(isBind ? thisArg : this, args);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates a `_.ceil`, `_.floor`, or `_.round` function.
	     *
	     * @private
	     * @param {string} methodName The name of the `Math` method to use when rounding.
	     * @returns {Function} Returns the new round function.
	     */
	    function createRound(methodName) {
	      var func = Math[methodName];
	      return function(number, precision) {
	        precision = precision === undefined ? 0 : (+precision || 0);
	        if (precision) {
	          precision = pow(10, precision);
	          return func(number * precision) / precision;
	        }
	        return func(number);
	      };
	    }

	    /**
	     * Creates a `_.sortedIndex` or `_.sortedLastIndex` function.
	     *
	     * @private
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {Function} Returns the new index function.
	     */
	    function createSortedIndex(retHighest) {
	      return function(array, value, iteratee, thisArg) {
	        var callback = getCallback(iteratee);
	        return (iteratee == null && callback === baseCallback)
	          ? binaryIndex(array, value, retHighest)
	          : binaryIndexBy(array, value, callback(iteratee, thisArg, 1), retHighest);
	      };
	    }

	    /**
	     * Creates a function that either curries or invokes `func` with optional
	     * `this` binding and partially applied arguments.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to reference.
	     * @param {number} bitmask The bitmask of flags.
	     *  The bitmask may be composed of the following flags:
	     *     1 - `_.bind`
	     *     2 - `_.bindKey`
	     *     4 - `_.curry` or `_.curryRight` of a bound function
	     *     8 - `_.curry`
	     *    16 - `_.curryRight`
	     *    32 - `_.partial`
	     *    64 - `_.partialRight`
	     *   128 - `_.rearg`
	     *   256 - `_.ary`
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to be partially applied.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
	      var isBindKey = bitmask & BIND_KEY_FLAG;
	      if (!isBindKey && typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var length = partials ? partials.length : 0;
	      if (!length) {
	        bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
	        partials = holders = undefined;
	      }
	      length -= (holders ? holders.length : 0);
	      if (bitmask & PARTIAL_RIGHT_FLAG) {
	        var partialsRight = partials,
	            holdersRight = holders;

	        partials = holders = undefined;
	      }
	      var data = isBindKey ? undefined : getData(func),
	          newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];

	      if (data) {
	        mergeData(newData, data);
	        bitmask = newData[1];
	        arity = newData[9];
	      }
	      newData[9] = arity == null
	        ? (isBindKey ? 0 : func.length)
	        : (nativeMax(arity - length, 0) || 0);

	      if (bitmask == BIND_FLAG) {
	        var result = createBindWrapper(newData[0], newData[2]);
	      } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !newData[4].length) {
	        result = createPartialWrapper.apply(undefined, newData);
	      } else {
	        result = createHybridWrapper.apply(undefined, newData);
	      }
	      var setter = data ? baseSetData : setData;
	      return setter(result, newData);
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for arrays with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Array} array The array to compare.
	     * @param {Array} other The other array to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing arrays.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	     */
	    function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var index = -1,
	          arrLength = array.length,
	          othLength = other.length;

	      if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	        return false;
	      }
	      // Ignore non-index properties.
	      while (++index < arrLength) {
	        var arrValue = array[index],
	            othValue = other[index],
	            result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;

	        if (result !== undefined) {
	          if (result) {
	            continue;
	          }
	          return false;
	        }
	        // Recursively compare arrays (susceptible to call stack limits).
	        if (isLoose) {
	          if (!arraySome(other, function(othValue) {
	                return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	              })) {
	            return false;
	          }
	        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	          return false;
	        }
	      }
	      return true;
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for comparing objects of
	     * the same `toStringTag`.
	     *
	     * **Note:** This function only supports comparing values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {string} tag The `toStringTag` of the objects to compare.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalByTag(object, other, tag) {
	      switch (tag) {
	        case boolTag:
	        case dateTag:
	          // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	          // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	          return +object == +other;

	        case errorTag:
	          return object.name == other.name && object.message == other.message;

	        case numberTag:
	          // Treat `NaN` vs. `NaN` as equal.
	          return (object != +object)
	            ? other != +other
	            : object == +other;

	        case regexpTag:
	        case stringTag:
	          // Coerce regexes to strings and treat strings primitives and string
	          // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	          return object == (other + '');
	      }
	      return false;
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for objects with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing values.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var objProps = keys(object),
	          objLength = objProps.length,
	          othProps = keys(other),
	          othLength = othProps.length;

	      if (objLength != othLength && !isLoose) {
	        return false;
	      }
	      var index = objLength;
	      while (index--) {
	        var key = objProps[index];
	        if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	          return false;
	        }
	      }
	      var skipCtor = isLoose;
	      while (++index < objLength) {
	        key = objProps[index];
	        var objValue = object[key],
	            othValue = other[key],
	            result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;

	        // Recursively compare objects (susceptible to call stack limits).
	        if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	          return false;
	        }
	        skipCtor || (skipCtor = key == 'constructor');
	      }
	      if (!skipCtor) {
	        var objCtor = object.constructor,
	            othCtor = other.constructor;

	        // Non `Object` object instances with different constructors are not equal.
	        if (objCtor != othCtor &&
	            ('constructor' in object && 'constructor' in other) &&
	            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	          return false;
	        }
	      }
	      return true;
	    }

	    /**
	     * Gets the appropriate "callback" function. If the `_.callback` method is
	     * customized this function returns the custom method, otherwise it returns
	     * the `baseCallback` function. If arguments are provided the chosen function
	     * is invoked with them and its result is returned.
	     *
	     * @private
	     * @returns {Function} Returns the chosen function or its result.
	     */
	    function getCallback(func, thisArg, argCount) {
	      var result = lodash.callback || callback;
	      result = result === callback ? baseCallback : result;
	      return argCount ? result(func, thisArg, argCount) : result;
	    }

	    /**
	     * Gets metadata for `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {*} Returns the metadata for `func`.
	     */
	    var getData = !metaMap ? noop : function(func) {
	      return metaMap.get(func);
	    };

	    /**
	     * Gets the name of `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {string} Returns the function name.
	     */
	    function getFuncName(func) {
	      var result = func.name,
	          array = realNames[result],
	          length = array ? array.length : 0;

	      while (length--) {
	        var data = array[length],
	            otherFunc = data.func;
	        if (otherFunc == null || otherFunc == func) {
	          return data.name;
	        }
	      }
	      return result;
	    }

	    /**
	     * Gets the appropriate "indexOf" function. If the `_.indexOf` method is
	     * customized this function returns the custom method, otherwise it returns
	     * the `baseIndexOf` function. If arguments are provided the chosen function
	     * is invoked with them and its result is returned.
	     *
	     * @private
	     * @returns {Function|number} Returns the chosen function or its result.
	     */
	    function getIndexOf(collection, target, fromIndex) {
	      var result = lodash.indexOf || indexOf;
	      result = result === indexOf ? baseIndexOf : result;
	      return collection ? result(collection, target, fromIndex) : result;
	    }

	    /**
	     * Gets the "length" property value of `object`.
	     *
	     * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	     * that affects Safari on at least iOS 8.1-8.3 ARM64.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {*} Returns the "length" value.
	     */
	    var getLength = baseProperty('length');

	    /**
	     * Gets the propery names, values, and compare flags of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the match data of `object`.
	     */
	    function getMatchData(object) {
	      var result = pairs(object),
	          length = result.length;

	      while (length--) {
	        result[length][2] = isStrictComparable(result[length][1]);
	      }
	      return result;
	    }

	    /**
	     * Gets the native function at `key` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {string} key The key of the method to get.
	     * @returns {*} Returns the function if it's native, else `undefined`.
	     */
	    function getNative(object, key) {
	      var value = object == null ? undefined : object[key];
	      return isNative(value) ? value : undefined;
	    }

	    /**
	     * Gets the view, applying any `transforms` to the `start` and `end` positions.
	     *
	     * @private
	     * @param {number} start The start of the view.
	     * @param {number} end The end of the view.
	     * @param {Array} transforms The transformations to apply to the view.
	     * @returns {Object} Returns an object containing the `start` and `end`
	     *  positions of the view.
	     */
	    function getView(start, end, transforms) {
	      var index = -1,
	          length = transforms.length;

	      while (++index < length) {
	        var data = transforms[index],
	            size = data.size;

	        switch (data.type) {
	          case 'drop':      start += size; break;
	          case 'dropRight': end -= size; break;
	          case 'take':      end = nativeMin(end, start + size); break;
	          case 'takeRight': start = nativeMax(start, end - size); break;
	        }
	      }
	      return { 'start': start, 'end': end };
	    }

	    /**
	     * Initializes an array clone.
	     *
	     * @private
	     * @param {Array} array The array to clone.
	     * @returns {Array} Returns the initialized clone.
	     */
	    function initCloneArray(array) {
	      var length = array.length,
	          result = new array.constructor(length);

	      // Add array properties assigned by `RegExp#exec`.
	      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	        result.index = array.index;
	        result.input = array.input;
	      }
	      return result;
	    }

	    /**
	     * Initializes an object clone.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneObject(object) {
	      var Ctor = object.constructor;
	      if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
	        Ctor = Object;
	      }
	      return new Ctor;
	    }

	    /**
	     * Initializes an object clone based on its `toStringTag`.
	     *
	     * **Note:** This function only supports cloning values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @param {string} tag The `toStringTag` of the object to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneByTag(object, tag, isDeep) {
	      var Ctor = object.constructor;
	      switch (tag) {
	        case arrayBufferTag:
	          return bufferClone(object);

	        case boolTag:
	        case dateTag:
	          return new Ctor(+object);

	        case float32Tag: case float64Tag:
	        case int8Tag: case int16Tag: case int32Tag:
	        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	          var buffer = object.buffer;
	          return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);

	        case numberTag:
	        case stringTag:
	          return new Ctor(object);

	        case regexpTag:
	          var result = new Ctor(object.source, reFlags.exec(object));
	          result.lastIndex = object.lastIndex;
	      }
	      return result;
	    }

	    /**
	     * Invokes the method at `path` on `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {Array} args The arguments to invoke the method with.
	     * @returns {*} Returns the result of the invoked method.
	     */
	    function invokePath(object, path, args) {
	      if (object != null && !isKey(path, object)) {
	        path = toPath(path);
	        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	        path = last(path);
	      }
	      var func = object == null ? object : object[path];
	      return func == null ? undefined : func.apply(object, args);
	    }

	    /**
	     * Checks if `value` is array-like.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	     */
	    function isArrayLike(value) {
	      return value != null && isLength(getLength(value));
	    }

	    /**
	     * Checks if `value` is a valid array-like index.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	     */
	    function isIndex(value, length) {
	      value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	      length = length == null ? MAX_SAFE_INTEGER : length;
	      return value > -1 && value % 1 == 0 && value < length;
	    }

	    /**
	     * Checks if the provided arguments are from an iteratee call.
	     *
	     * @private
	     * @param {*} value The potential iteratee value argument.
	     * @param {*} index The potential iteratee index or key argument.
	     * @param {*} object The potential iteratee object argument.
	     * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	     */
	    function isIterateeCall(value, index, object) {
	      if (!isObject(object)) {
	        return false;
	      }
	      var type = typeof index;
	      if (type == 'number'
	          ? (isArrayLike(object) && isIndex(index, object.length))
	          : (type == 'string' && index in object)) {
	        var other = object[index];
	        return value === value ? (value === other) : (other !== other);
	      }
	      return false;
	    }

	    /**
	     * Checks if `value` is a property name and not a property path.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {Object} [object] The object to query keys on.
	     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	     */
	    function isKey(value, object) {
	      var type = typeof value;
	      if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
	        return true;
	      }
	      if (isArray(value)) {
	        return false;
	      }
	      var result = !reIsDeepProp.test(value);
	      return result || (object != null && value in toObject(object));
	    }

	    /**
	     * Checks if `func` has a lazy counterpart.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` has a lazy counterpart, else `false`.
	     */
	    function isLaziable(func) {
	      var funcName = getFuncName(func);
	      if (!(funcName in LazyWrapper.prototype)) {
	        return false;
	      }
	      var other = lodash[funcName];
	      if (func === other) {
	        return true;
	      }
	      var data = getData(other);
	      return !!data && func === data[0];
	    }

	    /**
	     * Checks if `value` is a valid array-like length.
	     *
	     * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	     */
	    function isLength(value) {
	      return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	    }

	    /**
	     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` if suitable for strict
	     *  equality comparisons, else `false`.
	     */
	    function isStrictComparable(value) {
	      return value === value && !isObject(value);
	    }

	    /**
	     * Merges the function metadata of `source` into `data`.
	     *
	     * Merging metadata reduces the number of wrappers required to invoke a function.
	     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	     * may be applied regardless of execution order. Methods like `_.ary` and `_.rearg`
	     * augment function arguments, making the order in which they are executed important,
	     * preventing the merging of metadata. However, we make an exception for a safe
	     * common case where curried functions have `_.ary` and or `_.rearg` applied.
	     *
	     * @private
	     * @param {Array} data The destination metadata.
	     * @param {Array} source The source metadata.
	     * @returns {Array} Returns `data`.
	     */
	    function mergeData(data, source) {
	      var bitmask = data[1],
	          srcBitmask = source[1],
	          newBitmask = bitmask | srcBitmask,
	          isCommon = newBitmask < ARY_FLAG;

	      var isCombo =
	        (srcBitmask == ARY_FLAG && bitmask == CURRY_FLAG) ||
	        (srcBitmask == ARY_FLAG && bitmask == REARG_FLAG && data[7].length <= source[8]) ||
	        (srcBitmask == (ARY_FLAG | REARG_FLAG) && bitmask == CURRY_FLAG);

	      // Exit early if metadata can't be merged.
	      if (!(isCommon || isCombo)) {
	        return data;
	      }
	      // Use source `thisArg` if available.
	      if (srcBitmask & BIND_FLAG) {
	        data[2] = source[2];
	        // Set when currying a bound function.
	        newBitmask |= (bitmask & BIND_FLAG) ? 0 : CURRY_BOUND_FLAG;
	      }
	      // Compose partial arguments.
	      var value = source[3];
	      if (value) {
	        var partials = data[3];
	        data[3] = partials ? composeArgs(partials, value, source[4]) : arrayCopy(value);
	        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : arrayCopy(source[4]);
	      }
	      // Compose partial right arguments.
	      value = source[5];
	      if (value) {
	        partials = data[5];
	        data[5] = partials ? composeArgsRight(partials, value, source[6]) : arrayCopy(value);
	        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : arrayCopy(source[6]);
	      }
	      // Use source `argPos` if available.
	      value = source[7];
	      if (value) {
	        data[7] = arrayCopy(value);
	      }
	      // Use source `ary` if it's smaller.
	      if (srcBitmask & ARY_FLAG) {
	        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
	      }
	      // Use source `arity` if one is not provided.
	      if (data[9] == null) {
	        data[9] = source[9];
	      }
	      // Use source `func` and merge bitmasks.
	      data[0] = source[0];
	      data[1] = newBitmask;

	      return data;
	    }

	    /**
	     * Used by `_.defaultsDeep` to customize its `_.merge` use.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function mergeDefaults(objectValue, sourceValue) {
	      return objectValue === undefined ? sourceValue : merge(objectValue, sourceValue, mergeDefaults);
	    }

	    /**
	     * A specialized version of `_.pick` which picks `object` properties specified
	     * by `props`.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} props The property names to pick.
	     * @returns {Object} Returns the new object.
	     */
	    function pickByArray(object, props) {
	      object = toObject(object);

	      var index = -1,
	          length = props.length,
	          result = {};

	      while (++index < length) {
	        var key = props[index];
	        if (key in object) {
	          result[key] = object[key];
	        }
	      }
	      return result;
	    }

	    /**
	     * A specialized version of `_.pick` which picks `object` properties `predicate`
	     * returns truthy for.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Object} Returns the new object.
	     */
	    function pickByCallback(object, predicate) {
	      var result = {};
	      baseForIn(object, function(value, key, object) {
	        if (predicate(value, key, object)) {
	          result[key] = value;
	        }
	      });
	      return result;
	    }

	    /**
	     * Reorder `array` according to the specified indexes where the element at
	     * the first index is assigned as the first element, the element at
	     * the second index is assigned as the second element, and so on.
	     *
	     * @private
	     * @param {Array} array The array to reorder.
	     * @param {Array} indexes The arranged array indexes.
	     * @returns {Array} Returns `array`.
	     */
	    function reorder(array, indexes) {
	      var arrLength = array.length,
	          length = nativeMin(indexes.length, arrLength),
	          oldArray = arrayCopy(array);

	      while (length--) {
	        var index = indexes[length];
	        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
	      }
	      return array;
	    }

	    /**
	     * Sets metadata for `func`.
	     *
	     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
	     * period of time, it will trip its breaker and transition to an identity function
	     * to avoid garbage collection pauses in V8. See [V8 issue 2070](https://code.google.com/p/v8/issues/detail?id=2070)
	     * for more details.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var setData = (function() {
	      var count = 0,
	          lastCalled = 0;

	      return function(key, value) {
	        var stamp = now(),
	            remaining = HOT_SPAN - (stamp - lastCalled);

	        lastCalled = stamp;
	        if (remaining > 0) {
	          if (++count >= HOT_COUNT) {
	            return key;
	          }
	        } else {
	          count = 0;
	        }
	        return baseSetData(key, value);
	      };
	    }());

	    /**
	     * A fallback implementation of `Object.keys` which creates an array of the
	     * own enumerable property names of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */
	    function shimKeys(object) {
	      var props = keysIn(object),
	          propsLength = props.length,
	          length = propsLength && object.length;

	      var allowIndexes = !!length && isLength(length) &&
	        (isArray(object) || isArguments(object));

	      var index = -1,
	          result = [];

	      while (++index < propsLength) {
	        var key = props[index];
	        if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	          result.push(key);
	        }
	      }
	      return result;
	    }

	    /**
	     * Converts `value` to an array-like object if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Array|Object} Returns the array-like object.
	     */
	    function toIterable(value) {
	      if (value == null) {
	        return [];
	      }
	      if (!isArrayLike(value)) {
	        return values(value);
	      }
	      return isObject(value) ? value : Object(value);
	    }

	    /**
	     * Converts `value` to an object if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Object} Returns the object.
	     */
	    function toObject(value) {
	      return isObject(value) ? value : Object(value);
	    }

	    /**
	     * Converts `value` to property path array if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Array} Returns the property path array.
	     */
	    function toPath(value) {
	      if (isArray(value)) {
	        return value;
	      }
	      var result = [];
	      baseToString(value).replace(rePropName, function(match, number, quote, string) {
	        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	      });
	      return result;
	    }

	    /**
	     * Creates a clone of `wrapper`.
	     *
	     * @private
	     * @param {Object} wrapper The wrapper to clone.
	     * @returns {Object} Returns the cloned wrapper.
	     */
	    function wrapperClone(wrapper) {
	      return wrapper instanceof LazyWrapper
	        ? wrapper.clone()
	        : new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__, arrayCopy(wrapper.__actions__));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates an array of elements split into groups the length of `size`.
	     * If `collection` can't be split evenly, the final chunk will be the remaining
	     * elements.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to process.
	     * @param {number} [size=1] The length of each chunk.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the new array containing chunks.
	     * @example
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 2);
	     * // => [['a', 'b'], ['c', 'd']]
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 3);
	     * // => [['a', 'b', 'c'], ['d']]
	     */
	    function chunk(array, size, guard) {
	      if (guard ? isIterateeCall(array, size, guard) : size == null) {
	        size = 1;
	      } else {
	        size = nativeMax(nativeFloor(size) || 1, 1);
	      }
	      var index = 0,
	          length = array ? array.length : 0,
	          resIndex = -1,
	          result = Array(nativeCeil(length / size));

	      while (index < length) {
	        result[++resIndex] = baseSlice(array, index, (index += size));
	      }
	      return result;
	    }

	    /**
	     * Creates an array with all falsey values removed. The values `false`, `null`,
	     * `0`, `""`, `undefined`, and `NaN` are falsey.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to compact.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.compact([0, 1, false, 2, '', 3]);
	     * // => [1, 2, 3]
	     */
	    function compact(array) {
	      var index = -1,
	          length = array ? array.length : 0,
	          resIndex = -1,
	          result = [];

	      while (++index < length) {
	        var value = array[index];
	        if (value) {
	          result[++resIndex] = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * Creates an array of unique `array` values not included in the other
	     * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The arrays of values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.difference([1, 2, 3], [4, 2]);
	     * // => [1, 3]
	     */
	    var difference = restParam(function(array, values) {
	      return (isObjectLike(array) && isArrayLike(array))
	        ? baseDifference(array, baseFlatten(values, false, true))
	        : [];
	    });

	    /**
	     * Creates a slice of `array` with `n` elements dropped from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.drop([1, 2, 3]);
	     * // => [2, 3]
	     *
	     * _.drop([1, 2, 3], 2);
	     * // => [3]
	     *
	     * _.drop([1, 2, 3], 5);
	     * // => []
	     *
	     * _.drop([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function drop(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      return baseSlice(array, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` with `n` elements dropped from the end.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRight([1, 2, 3]);
	     * // => [1, 2]
	     *
	     * _.dropRight([1, 2, 3], 2);
	     * // => [1]
	     *
	     * _.dropRight([1, 2, 3], 5);
	     * // => []
	     *
	     * _.dropRight([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function dropRight(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      n = length - (+n || 0);
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` excluding elements dropped from the end.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that match the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRightWhile([1, 2, 3], function(n) {
	     *   return n > 1;
	     * });
	     * // => [1]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
	     * // => ['barney', 'fred']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.dropRightWhile(users, 'active', false), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.dropRightWhile(users, 'active'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function dropRightWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), true, true)
	        : [];
	    }

	    /**
	     * Creates a slice of `array` excluding elements dropped from the beginning.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropWhile([1, 2, 3], function(n) {
	     *   return n < 3;
	     * });
	     * // => [3]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.dropWhile(users, { 'user': 'barney', 'active': false }), 'user');
	     * // => ['fred', 'pebbles']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.dropWhile(users, 'active', false), 'user');
	     * // => ['pebbles']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.dropWhile(users, 'active'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function dropWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), true)
	        : [];
	    }

	    /**
	     * Fills elements of `array` with `value` from `start` up to, but not
	     * including, `end`.
	     *
	     * **Note:** This method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.fill(array, 'a');
	     * console.log(array);
	     * // => ['a', 'a', 'a']
	     *
	     * _.fill(Array(3), 2);
	     * // => [2, 2, 2]
	     *
	     * _.fill([4, 6, 8], '*', 1, 2);
	     * // => [4, '*', 8]
	     */
	    function fill(array, value, start, end) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
	        start = 0;
	        end = length;
	      }
	      return baseFill(array, value, start, end);
	    }

	    /**
	     * This method is like `_.find` except that it returns the index of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.findIndex(users, function(chr) {
	     *   return chr.user == 'barney';
	     * });
	     * // => 0
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findIndex(users, { 'user': 'fred', 'active': false });
	     * // => 1
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findIndex(users, 'active', false);
	     * // => 0
	     *
	     * // using the `_.property` callback shorthand
	     * _.findIndex(users, 'active');
	     * // => 2
	     */
	    var findIndex = createFindIndex();

	    /**
	     * This method is like `_.findIndex` except that it iterates over elements
	     * of `collection` from right to left.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.findLastIndex(users, function(chr) {
	     *   return chr.user == 'pebbles';
	     * });
	     * // => 2
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
	     * // => 0
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findLastIndex(users, 'active', false);
	     * // => 2
	     *
	     * // using the `_.property` callback shorthand
	     * _.findLastIndex(users, 'active');
	     * // => 0
	     */
	    var findLastIndex = createFindIndex(true);

	    /**
	     * Gets the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @alias head
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the first element of `array`.
	     * @example
	     *
	     * _.first([1, 2, 3]);
	     * // => 1
	     *
	     * _.first([]);
	     * // => undefined
	     */
	    function first(array) {
	      return array ? array[0] : undefined;
	    }

	    /**
	     * Flattens a nested array. If `isDeep` is `true` the array is recursively
	     * flattened, otherwise it is only flattened a single level.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @param {boolean} [isDeep] Specify a deep flatten.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flatten([1, [2, 3, [4]]]);
	     * // => [1, 2, 3, [4]]
	     *
	     * // using `isDeep`
	     * _.flatten([1, [2, 3, [4]]], true);
	     * // => [1, 2, 3, 4]
	     */
	    function flatten(array, isDeep, guard) {
	      var length = array ? array.length : 0;
	      if (guard && isIterateeCall(array, isDeep, guard)) {
	        isDeep = false;
	      }
	      return length ? baseFlatten(array, isDeep) : [];
	    }

	    /**
	     * Recursively flattens a nested array.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to recursively flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flattenDeep([1, [2, 3, [4]]]);
	     * // => [1, 2, 3, 4]
	     */
	    function flattenDeep(array) {
	      var length = array ? array.length : 0;
	      return length ? baseFlatten(array, true) : [];
	    }

	    /**
	     * Gets the index at which the first occurrence of `value` is found in `array`
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it is used as the offset
	     * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
	     * performs a faster binary search.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {*} value The value to search for.
	     * @param {boolean|number} [fromIndex=0] The index to search from or `true`
	     *  to perform a binary search on a sorted array.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.indexOf([1, 2, 1, 2], 2);
	     * // => 1
	     *
	     * // using `fromIndex`
	     * _.indexOf([1, 2, 1, 2], 2, 2);
	     * // => 3
	     *
	     * // performing a binary search
	     * _.indexOf([1, 1, 2, 2], 2, true);
	     * // => 2
	     */
	    function indexOf(array, value, fromIndex) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return -1;
	      }
	      if (typeof fromIndex == 'number') {
	        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex;
	      } else if (fromIndex) {
	        var index = binaryIndex(array, value);
	        if (index < length &&
	            (value === value ? (value === array[index]) : (array[index] !== array[index]))) {
	          return index;
	        }
	        return -1;
	      }
	      return baseIndexOf(array, value, fromIndex || 0);
	    }

	    /**
	     * Gets all but the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.initial([1, 2, 3]);
	     * // => [1, 2]
	     */
	    function initial(array) {
	      return dropRight(array, 1);
	    }

	    /**
	     * Creates an array of unique values that are included in all of the provided
	     * arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of shared values.
	     * @example
	     * _.intersection([1, 2], [4, 2], [2, 1]);
	     * // => [2]
	     */
	    var intersection = restParam(function(arrays) {
	      var othLength = arrays.length,
	          othIndex = othLength,
	          caches = Array(length),
	          indexOf = getIndexOf(),
	          isCommon = indexOf == baseIndexOf,
	          result = [];

	      while (othIndex--) {
	        var value = arrays[othIndex] = isArrayLike(value = arrays[othIndex]) ? value : [];
	        caches[othIndex] = (isCommon && value.length >= 120) ? createCache(othIndex && value) : null;
	      }
	      var array = arrays[0],
	          index = -1,
	          length = array ? array.length : 0,
	          seen = caches[0];

	      outer:
	      while (++index < length) {
	        value = array[index];
	        if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
	          var othIndex = othLength;
	          while (--othIndex) {
	            var cache = caches[othIndex];
	            if ((cache ? cacheIndexOf(cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
	              continue outer;
	            }
	          }
	          if (seen) {
	            seen.push(value);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    });

	    /**
	     * Gets the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the last element of `array`.
	     * @example
	     *
	     * _.last([1, 2, 3]);
	     * // => 3
	     */
	    function last(array) {
	      var length = array ? array.length : 0;
	      return length ? array[length - 1] : undefined;
	    }

	    /**
	     * This method is like `_.indexOf` except that it iterates over elements of
	     * `array` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {*} value The value to search for.
	     * @param {boolean|number} [fromIndex=array.length-1] The index to search from
	     *  or `true` to perform a binary search on a sorted array.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.lastIndexOf([1, 2, 1, 2], 2);
	     * // => 3
	     *
	     * // using `fromIndex`
	     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
	     * // => 1
	     *
	     * // performing a binary search
	     * _.lastIndexOf([1, 1, 2, 2], 2, true);
	     * // => 3
	     */
	    function lastIndexOf(array, value, fromIndex) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return -1;
	      }
	      var index = length;
	      if (typeof fromIndex == 'number') {
	        index = (fromIndex < 0 ? nativeMax(length + fromIndex, 0) : nativeMin(fromIndex || 0, length - 1)) + 1;
	      } else if (fromIndex) {
	        index = binaryIndex(array, value, true) - 1;
	        var other = array[index];
	        if (value === value ? (value === other) : (other !== other)) {
	          return index;
	        }
	        return -1;
	      }
	      if (value !== value) {
	        return indexOfNaN(array, index, true);
	      }
	      while (index--) {
	        if (array[index] === value) {
	          return index;
	        }
	      }
	      return -1;
	    }

	    /**
	     * Removes all provided values from `array` using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * **Note:** Unlike `_.without`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...*} [values] The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3, 1, 2, 3];
	     *
	     * _.pull(array, 2, 3);
	     * console.log(array);
	     * // => [1, 1]
	     */
	    function pull() {
	      var args = arguments,
	          array = args[0];

	      if (!(array && array.length)) {
	        return array;
	      }
	      var index = 0,
	          indexOf = getIndexOf(),
	          length = args.length;

	      while (++index < length) {
	        var fromIndex = 0,
	            value = args[index];

	        while ((fromIndex = indexOf(array, value, fromIndex)) > -1) {
	          splice.call(array, fromIndex, 1);
	        }
	      }
	      return array;
	    }

	    /**
	     * Removes elements from `array` corresponding to the given indexes and returns
	     * an array of the removed elements. Indexes may be specified as an array of
	     * indexes or as individual arguments.
	     *
	     * **Note:** Unlike `_.at`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...(number|number[])} [indexes] The indexes of elements to remove,
	     *  specified as individual indexes or arrays of indexes.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [5, 10, 15, 20];
	     * var evens = _.pullAt(array, 1, 3);
	     *
	     * console.log(array);
	     * // => [5, 15]
	     *
	     * console.log(evens);
	     * // => [10, 20]
	     */
	    var pullAt = restParam(function(array, indexes) {
	      indexes = baseFlatten(indexes);

	      var result = baseAt(array, indexes);
	      basePullAt(array, indexes.sort(baseCompareAscending));
	      return result;
	    });

	    /**
	     * Removes all elements from `array` that `predicate` returns truthy for
	     * and returns an array of the removed elements. The predicate is bound to
	     * `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * **Note:** Unlike `_.filter`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [1, 2, 3, 4];
	     * var evens = _.remove(array, function(n) {
	     *   return n % 2 == 0;
	     * });
	     *
	     * console.log(array);
	     * // => [1, 3]
	     *
	     * console.log(evens);
	     * // => [2, 4]
	     */
	    function remove(array, predicate, thisArg) {
	      var result = [];
	      if (!(array && array.length)) {
	        return result;
	      }
	      var index = -1,
	          indexes = [],
	          length = array.length;

	      predicate = getCallback(predicate, thisArg, 3);
	      while (++index < length) {
	        var value = array[index];
	        if (predicate(value, index, array)) {
	          result.push(value);
	          indexes.push(index);
	        }
	      }
	      basePullAt(array, indexes);
	      return result;
	    }

	    /**
	     * Gets all but the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @alias tail
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.rest([1, 2, 3]);
	     * // => [2, 3]
	     */
	    function rest(array) {
	      return drop(array, 1);
	    }

	    /**
	     * Creates a slice of `array` from `start` up to, but not including, `end`.
	     *
	     * **Note:** This method is used instead of `Array#slice` to support node
	     * lists in IE < 9 and to ensure dense arrays are returned.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function slice(array, start, end) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
	        start = 0;
	        end = length;
	      }
	      return baseSlice(array, start, end);
	    }

	    /**
	     * Uses a binary search to determine the lowest index at which `value` should
	     * be inserted into `array` in order to maintain its sort order. If an iteratee
	     * function is provided it is invoked for `value` and each element of `array`
	     * to compute their sort ranking. The iteratee is bound to `thisArg` and
	     * invoked with one argument; (value).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedIndex([30, 50], 40);
	     * // => 1
	     *
	     * _.sortedIndex([4, 4, 5, 5], 5);
	     * // => 2
	     *
	     * var dict = { 'data': { 'thirty': 30, 'forty': 40, 'fifty': 50 } };
	     *
	     * // using an iteratee function
	     * _.sortedIndex(['thirty', 'fifty'], 'forty', function(word) {
	     *   return this.data[word];
	     * }, dict);
	     * // => 1
	     *
	     * // using the `_.property` callback shorthand
	     * _.sortedIndex([{ 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
	     * // => 1
	     */
	    var sortedIndex = createSortedIndex();

	    /**
	     * This method is like `_.sortedIndex` except that it returns the highest
	     * index at which `value` should be inserted into `array` in order to
	     * maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedLastIndex([4, 4, 5, 5], 5);
	     * // => 4
	     */
	    var sortedLastIndex = createSortedIndex(true);

	    /**
	     * Creates a slice of `array` with `n` elements taken from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.take([1, 2, 3]);
	     * // => [1]
	     *
	     * _.take([1, 2, 3], 2);
	     * // => [1, 2]
	     *
	     * _.take([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.take([1, 2, 3], 0);
	     * // => []
	     */
	    function take(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` with `n` elements taken from the end.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRight([1, 2, 3]);
	     * // => [3]
	     *
	     * _.takeRight([1, 2, 3], 2);
	     * // => [2, 3]
	     *
	     * _.takeRight([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.takeRight([1, 2, 3], 0);
	     * // => []
	     */
	    function takeRight(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      n = length - (+n || 0);
	      return baseSlice(array, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` with elements taken from the end. Elements are
	     * taken until `predicate` returns falsey. The predicate is bound to `thisArg`
	     * and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRightWhile([1, 2, 3], function(n) {
	     *   return n > 1;
	     * });
	     * // => [2, 3]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.takeRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
	     * // => ['pebbles']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.takeRightWhile(users, 'active', false), 'user');
	     * // => ['fred', 'pebbles']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.takeRightWhile(users, 'active'), 'user');
	     * // => []
	     */
	    function takeRightWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), false, true)
	        : [];
	    }

	    /**
	     * Creates a slice of `array` with elements taken from the beginning. Elements
	     * are taken until `predicate` returns falsey. The predicate is bound to
	     * `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeWhile([1, 2, 3], function(n) {
	     *   return n < 3;
	     * });
	     * // => [1, 2]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false},
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.takeWhile(users, { 'user': 'barney', 'active': false }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.takeWhile(users, 'active', false), 'user');
	     * // => ['barney', 'fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.takeWhile(users, 'active'), 'user');
	     * // => []
	     */
	    function takeWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3))
	        : [];
	    }

	    /**
	     * Creates an array of unique values, in order, from all of the provided arrays
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * _.union([1, 2], [4, 2], [2, 1]);
	     * // => [1, 2, 4]
	     */
	    var union = restParam(function(arrays) {
	      return baseUniq(baseFlatten(arrays, false, true));
	    });

	    /**
	     * Creates a duplicate-free version of an array, using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons, in which only the first occurence of each element
	     * is kept. Providing `true` for `isSorted` performs a faster search algorithm
	     * for sorted arrays. If an iteratee function is provided it is invoked for
	     * each element in the array to generate the criterion by which uniqueness
	     * is computed. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, array).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias unique
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {boolean} [isSorted] Specify the array is sorted.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new duplicate-value-free array.
	     * @example
	     *
	     * _.uniq([2, 1, 2]);
	     * // => [2, 1]
	     *
	     * // using `isSorted`
	     * _.uniq([1, 1, 2], true);
	     * // => [1, 2]
	     *
	     * // using an iteratee function
	     * _.uniq([1, 2.5, 1.5, 2], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => [1, 2.5]
	     *
	     * // using the `_.property` callback shorthand
	     * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */
	    function uniq(array, isSorted, iteratee, thisArg) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (isSorted != null && typeof isSorted != 'boolean') {
	        thisArg = iteratee;
	        iteratee = isIterateeCall(array, isSorted, thisArg) ? undefined : isSorted;
	        isSorted = false;
	      }
	      var callback = getCallback();
	      if (!(iteratee == null && callback === baseCallback)) {
	        iteratee = callback(iteratee, thisArg, 3);
	      }
	      return (isSorted && getIndexOf() == baseIndexOf)
	        ? sortedUniq(array, iteratee)
	        : baseUniq(array, iteratee);
	    }

	    /**
	     * This method is like `_.zip` except that it accepts an array of grouped
	     * elements and creates an array regrouping the elements to their pre-zip
	     * configuration.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
	     * // => [['fred', 30, true], ['barney', 40, false]]
	     *
	     * _.unzip(zipped);
	     * // => [['fred', 'barney'], [30, 40], [true, false]]
	     */
	    function unzip(array) {
	      if (!(array && array.length)) {
	        return [];
	      }
	      var index = -1,
	          length = 0;

	      array = arrayFilter(array, function(group) {
	        if (isArrayLike(group)) {
	          length = nativeMax(group.length, length);
	          return true;
	        }
	      });
	      var result = Array(length);
	      while (++index < length) {
	        result[index] = arrayMap(array, baseProperty(index));
	      }
	      return result;
	    }

	    /**
	     * This method is like `_.unzip` except that it accepts an iteratee to specify
	     * how regrouped values should be combined. The `iteratee` is bound to `thisArg`
	     * and invoked with four arguments: (accumulator, value, index, group).
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @param {Function} [iteratee] The function to combine regrouped values.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
	     * // => [[1, 10, 100], [2, 20, 200]]
	     *
	     * _.unzipWith(zipped, _.add);
	     * // => [3, 30, 300]
	     */
	    function unzipWith(array, iteratee, thisArg) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      var result = unzip(array);
	      if (iteratee == null) {
	        return result;
	      }
	      iteratee = bindCallback(iteratee, thisArg, 4);
	      return arrayMap(result, function(group) {
	        return arrayReduce(group, iteratee, undefined, true);
	      });
	    }

	    /**
	     * Creates an array excluding all provided values using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to filter.
	     * @param {...*} [values] The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.without([1, 2, 1, 3], 1, 2);
	     * // => [3]
	     */
	    var without = restParam(function(array, values) {
	      return isArrayLike(array)
	        ? baseDifference(array, values)
	        : [];
	    });

	    /**
	     * Creates an array of unique values that is the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	     * of the provided arrays.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of values.
	     * @example
	     *
	     * _.xor([1, 2], [4, 2]);
	     * // => [1, 4]
	     */
	    function xor() {
	      var index = -1,
	          length = arguments.length;

	      while (++index < length) {
	        var array = arguments[index];
	        if (isArrayLike(array)) {
	          var result = result
	            ? arrayPush(baseDifference(result, array), baseDifference(array, result))
	            : array;
	        }
	      }
	      return result ? baseUniq(result) : [];
	    }

	    /**
	     * Creates an array of grouped elements, the first of which contains the first
	     * elements of the given arrays, the second of which contains the second elements
	     * of the given arrays, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zip(['fred', 'barney'], [30, 40], [true, false]);
	     * // => [['fred', 30, true], ['barney', 40, false]]
	     */
	    var zip = restParam(unzip);

	    /**
	     * The inverse of `_.pairs`; this method returns an object composed from arrays
	     * of property names and values. Provide either a single two dimensional array,
	     * e.g. `[[key1, value1], [key2, value2]]` or two arrays, one of property names
	     * and one of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @alias object
	     * @category Array
	     * @param {Array} props The property names.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObject([['fred', 30], ['barney', 40]]);
	     * // => { 'fred': 30, 'barney': 40 }
	     *
	     * _.zipObject(['fred', 'barney'], [30, 40]);
	     * // => { 'fred': 30, 'barney': 40 }
	     */
	    function zipObject(props, values) {
	      var index = -1,
	          length = props ? props.length : 0,
	          result = {};

	      if (length && !values && !isArray(props[0])) {
	        values = [];
	      }
	      while (++index < length) {
	        var key = props[index];
	        if (values) {
	          result[key] = values[index];
	        } else if (key) {
	          result[key[0]] = key[1];
	        }
	      }
	      return result;
	    }

	    /**
	     * This method is like `_.zip` except that it accepts an iteratee to specify
	     * how grouped values should be combined. The `iteratee` is bound to `thisArg`
	     * and invoked with four arguments: (accumulator, value, index, group).
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @param {Function} [iteratee] The function to combine grouped values.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zipWith([1, 2], [10, 20], [100, 200], _.add);
	     * // => [111, 222]
	     */
	    var zipWith = restParam(function(arrays) {
	      var length = arrays.length,
	          iteratee = length > 2 ? arrays[length - 2] : undefined,
	          thisArg = length > 1 ? arrays[length - 1] : undefined;

	      if (length > 2 && typeof iteratee == 'function') {
	        length -= 2;
	      } else {
	        iteratee = (length > 1 && typeof thisArg == 'function') ? (--length, thisArg) : undefined;
	        thisArg = undefined;
	      }
	      arrays.length = length;
	      return unzipWith(arrays, iteratee, thisArg);
	    });

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a `lodash` object that wraps `value` with explicit method
	     * chaining enabled.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to wrap.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36 },
	     *   { 'user': 'fred',    'age': 40 },
	     *   { 'user': 'pebbles', 'age': 1 }
	     * ];
	     *
	     * var youngest = _.chain(users)
	     *   .sortBy('age')
	     *   .map(function(chr) {
	     *     return chr.user + ' is ' + chr.age;
	     *   })
	     *   .first()
	     *   .value();
	     * // => 'pebbles is 1'
	     */
	    function chain(value) {
	      var result = lodash(value);
	      result.__chain__ = true;
	      return result;
	    }

	    /**
	     * This method invokes `interceptor` and returns `value`. The interceptor is
	     * bound to `thisArg` and invoked with one argument; (value). The purpose of
	     * this method is to "tap into" a method chain in order to perform operations
	     * on intermediate results within the chain.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @param {*} [thisArg] The `this` binding of `interceptor`.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * _([1, 2, 3])
	     *  .tap(function(array) {
	     *    array.pop();
	     *  })
	     *  .reverse()
	     *  .value();
	     * // => [2, 1]
	     */
	    function tap(value, interceptor, thisArg) {
	      interceptor.call(thisArg, value);
	      return value;
	    }

	    /**
	     * This method is like `_.tap` except that it returns the result of `interceptor`.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @param {*} [thisArg] The `this` binding of `interceptor`.
	     * @returns {*} Returns the result of `interceptor`.
	     * @example
	     *
	     * _('  abc  ')
	     *  .chain()
	     *  .trim()
	     *  .thru(function(value) {
	     *    return [value];
	     *  })
	     *  .value();
	     * // => ['abc']
	     */
	    function thru(value, interceptor, thisArg) {
	      return interceptor.call(thisArg, value);
	    }

	    /**
	     * Enables explicit method chaining on the wrapper object.
	     *
	     * @name chain
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // without explicit chaining
	     * _(users).first();
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // with explicit chaining
	     * _(users).chain()
	     *   .first()
	     *   .pick('user')
	     *   .value();
	     * // => { 'user': 'barney' }
	     */
	    function wrapperChain() {
	      return chain(this);
	    }

	    /**
	     * Executes the chained sequence and returns the wrapped result.
	     *
	     * @name commit
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).push(3);
	     *
	     * console.log(array);
	     * // => [1, 2]
	     *
	     * wrapped = wrapped.commit();
	     * console.log(array);
	     * // => [1, 2, 3]
	     *
	     * wrapped.last();
	     * // => 3
	     *
	     * console.log(array);
	     * // => [1, 2, 3]
	     */
	    function wrapperCommit() {
	      return new LodashWrapper(this.value(), this.__chain__);
	    }

	    /**
	     * Creates a new array joining a wrapped array with any additional arrays
	     * and/or values.
	     *
	     * @name concat
	     * @memberOf _
	     * @category Chain
	     * @param {...*} [values] The values to concatenate.
	     * @returns {Array} Returns the new concatenated array.
	     * @example
	     *
	     * var array = [1];
	     * var wrapped = _(array).concat(2, [3], [[4]]);
	     *
	     * console.log(wrapped.value());
	     * // => [1, 2, 3, [4]]
	     *
	     * console.log(array);
	     * // => [1]
	     */
	    var wrapperConcat = restParam(function(values) {
	      values = baseFlatten(values);
	      return this.thru(function(array) {
	        return arrayConcat(isArray(array) ? array : [toObject(array)], values);
	      });
	    });

	    /**
	     * Creates a clone of the chained sequence planting `value` as the wrapped value.
	     *
	     * @name plant
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).map(function(value) {
	     *   return Math.pow(value, 2);
	     * });
	     *
	     * var other = [3, 4];
	     * var otherWrapped = wrapped.plant(other);
	     *
	     * otherWrapped.value();
	     * // => [9, 16]
	     *
	     * wrapped.value();
	     * // => [1, 4]
	     */
	    function wrapperPlant(value) {
	      var result,
	          parent = this;

	      while (parent instanceof baseLodash) {
	        var clone = wrapperClone(parent);
	        if (result) {
	          previous.__wrapped__ = clone;
	        } else {
	          result = clone;
	        }
	        var previous = clone;
	        parent = parent.__wrapped__;
	      }
	      previous.__wrapped__ = value;
	      return result;
	    }

	    /**
	     * Reverses the wrapped array so the first element becomes the last, the
	     * second element becomes the second to last, and so on.
	     *
	     * **Note:** This method mutates the wrapped array.
	     *
	     * @name reverse
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new reversed `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _(array).reverse().value()
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */
	    function wrapperReverse() {
	      var value = this.__wrapped__;

	      var interceptor = function(value) {
	        return (wrapped && wrapped.__dir__ < 0) ? value : value.reverse();
	      };
	      if (value instanceof LazyWrapper) {
	        var wrapped = value;
	        if (this.__actions__.length) {
	          wrapped = new LazyWrapper(this);
	        }
	        wrapped = wrapped.reverse();
	        wrapped.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
	        return new LodashWrapper(wrapped, this.__chain__);
	      }
	      return this.thru(interceptor);
	    }

	    /**
	     * Produces the result of coercing the unwrapped value to a string.
	     *
	     * @name toString
	     * @memberOf _
	     * @category Chain
	     * @returns {string} Returns the coerced string value.
	     * @example
	     *
	     * _([1, 2, 3]).toString();
	     * // => '1,2,3'
	     */
	    function wrapperToString() {
	      return (this.value() + '');
	    }

	    /**
	     * Executes the chained sequence to extract the unwrapped value.
	     *
	     * @name value
	     * @memberOf _
	     * @alias run, toJSON, valueOf
	     * @category Chain
	     * @returns {*} Returns the resolved unwrapped value.
	     * @example
	     *
	     * _([1, 2, 3]).value();
	     * // => [1, 2, 3]
	     */
	    function wrapperValue() {
	      return baseWrapperValue(this.__wrapped__, this.__actions__);
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates an array of elements corresponding to the given keys, or indexes,
	     * of `collection`. Keys may be specified as individual arguments or as arrays
	     * of keys.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {...(number|number[]|string|string[])} [props] The property names
	     *  or indexes of elements to pick, specified individually or in arrays.
	     * @returns {Array} Returns the new array of picked elements.
	     * @example
	     *
	     * _.at(['a', 'b', 'c'], [0, 2]);
	     * // => ['a', 'c']
	     *
	     * _.at(['barney', 'fred', 'pebbles'], 0, 2);
	     * // => ['barney', 'pebbles']
	     */
	    var at = restParam(function(collection, props) {
	      return baseAt(collection, baseFlatten(props));
	    });

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is the number of times the key was returned by `iteratee`.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.countBy([4.3, 6.1, 6.4], function(n) {
	     *   return Math.floor(n);
	     * });
	     * // => { '4': 1, '6': 2 }
	     *
	     * _.countBy([4.3, 6.1, 6.4], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => { '4': 1, '6': 2 }
	     *
	     * _.countBy(['one', 'two', 'three'], 'length');
	     * // => { '3': 2, '5': 1 }
	     */
	    var countBy = createAggregator(function(result, value, key) {
	      hasOwnProperty.call(result, key) ? ++result[key] : (result[key] = 1);
	    });

	    /**
	     * Checks if `predicate` returns truthy for **all** elements of `collection`.
	     * The predicate is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias all
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.every([true, 1, null, 'yes'], Boolean);
	     * // => false
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': false },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.every(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.every(users, 'active', false);
	     * // => true
	     *
	     * // using the `_.property` callback shorthand
	     * _.every(users, 'active');
	     * // => false
	     */
	    function every(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayEvery : baseEvery;
	      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
	        predicate = undefined;
	      }
	      if (typeof predicate != 'function' || thisArg !== undefined) {
	        predicate = getCallback(predicate, thisArg, 3);
	      }
	      return func(collection, predicate);
	    }

	    /**
	     * Iterates over elements of `collection`, returning an array of all elements
	     * `predicate` returns truthy for. The predicate is bound to `thisArg` and
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias select
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * _.filter([4, 5, 6], function(n) {
	     *   return n % 2 == 0;
	     * });
	     * // => [4, 6]
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.filter(users, { 'age': 36, 'active': true }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.filter(users, 'active', false), 'user');
	     * // => ['fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.filter(users, 'active'), 'user');
	     * // => ['barney']
	     */
	    function filter(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      predicate = getCallback(predicate, thisArg, 3);
	      return func(collection, predicate);
	    }

	    /**
	     * Iterates over elements of `collection`, returning the first element
	     * `predicate` returns truthy for. The predicate is bound to `thisArg` and
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias detect
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': true },
	     *   { 'user': 'fred',    'age': 40, 'active': false },
	     *   { 'user': 'pebbles', 'age': 1,  'active': true }
	     * ];
	     *
	     * _.result(_.find(users, function(chr) {
	     *   return chr.age < 40;
	     * }), 'user');
	     * // => 'barney'
	     *
	     * // using the `_.matches` callback shorthand
	     * _.result(_.find(users, { 'age': 1, 'active': true }), 'user');
	     * // => 'pebbles'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.result(_.find(users, 'active', false), 'user');
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.result(_.find(users, 'active'), 'user');
	     * // => 'barney'
	     */
	    var find = createFind(baseEach);

	    /**
	     * This method is like `_.find` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * _.findLast([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 1;
	     * });
	     * // => 3
	     */
	    var findLast = createFind(baseEachRight, true);

	    /**
	     * Performs a deep comparison between each element in `collection` and the
	     * source object, returning the first element that has equivalent property
	     * values.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Object} source The object of property values to match.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.result(_.findWhere(users, { 'age': 36, 'active': true }), 'user');
	     * // => 'barney'
	     *
	     * _.result(_.findWhere(users, { 'age': 40, 'active': false }), 'user');
	     * // => 'fred'
	     */
	    function findWhere(collection, source) {
	      return find(collection, baseMatches(source));
	    }

	    /**
	     * Iterates over elements of `collection` invoking `iteratee` for each element.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection). Iteratee functions may exit iteration early
	     * by explicitly returning `false`.
	     *
	     * **Note:** As with other "Collections" methods, objects with a "length" property
	     * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
	     * may be used for object iteration.
	     *
	     * @static
	     * @memberOf _
	     * @alias each
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array|Object|string} Returns `collection`.
	     * @example
	     *
	     * _([1, 2]).forEach(function(n) {
	     *   console.log(n);
	     * }).value();
	     * // => logs each value from left to right and returns the array
	     *
	     * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
	     *   console.log(n, key);
	     * });
	     * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
	     */
	    var forEach = createForEach(arrayEach, baseEach);

	    /**
	     * This method is like `_.forEach` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias eachRight
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array|Object|string} Returns `collection`.
	     * @example
	     *
	     * _([1, 2]).forEachRight(function(n) {
	     *   console.log(n);
	     * }).value();
	     * // => logs each value from right to left and returns the array
	     */
	    var forEachRight = createForEach(arrayEachRight, baseEachRight);

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is an array of the elements responsible for generating the key.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.groupBy([4.2, 6.1, 6.4], function(n) {
	     *   return Math.floor(n);
	     * });
	     * // => { '4': [4.2], '6': [6.1, 6.4] }
	     *
	     * _.groupBy([4.2, 6.1, 6.4], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => { '4': [4.2], '6': [6.1, 6.4] }
	     *
	     * // using the `_.property` callback shorthand
	     * _.groupBy(['one', 'two', 'three'], 'length');
	     * // => { '3': ['one', 'two'], '5': ['three'] }
	     */
	    var groupBy = createAggregator(function(result, value, key) {
	      if (hasOwnProperty.call(result, key)) {
	        result[key].push(value);
	      } else {
	        result[key] = [value];
	      }
	    });

	    /**
	     * Checks if `value` is in `collection` using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it is used as the offset
	     * from the end of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @alias contains, include
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {*} target The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
	     * @returns {boolean} Returns `true` if a matching element is found, else `false`.
	     * @example
	     *
	     * _.includes([1, 2, 3], 1);
	     * // => true
	     *
	     * _.includes([1, 2, 3], 1, 2);
	     * // => false
	     *
	     * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
	     * // => true
	     *
	     * _.includes('pebbles', 'eb');
	     * // => true
	     */
	    function includes(collection, target, fromIndex, guard) {
	      var length = collection ? getLength(collection) : 0;
	      if (!isLength(length)) {
	        collection = values(collection);
	        length = collection.length;
	      }
	      if (typeof fromIndex != 'number' || (guard && isIterateeCall(target, fromIndex, guard))) {
	        fromIndex = 0;
	      } else {
	        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
	      }
	      return (typeof collection == 'string' || !isArray(collection) && isString(collection))
	        ? (fromIndex <= length && collection.indexOf(target, fromIndex) > -1)
	        : (!!length && getIndexOf(collection, target, fromIndex) > -1);
	    }

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is the last element responsible for generating the key. The
	     * iteratee function is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * var keyData = [
	     *   { 'dir': 'left', 'code': 97 },
	     *   { 'dir': 'right', 'code': 100 }
	     * ];
	     *
	     * _.indexBy(keyData, 'dir');
	     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.indexBy(keyData, function(object) {
	     *   return String.fromCharCode(object.code);
	     * });
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.indexBy(keyData, function(object) {
	     *   return this.fromCharCode(object.code);
	     * }, String);
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     */
	    var indexBy = createAggregator(function(result, value, key) {
	      result[key] = value;
	    });

	    /**
	     * Invokes the method at `path` of each element in `collection`, returning
	     * an array of the results of each invoked method. Any additional arguments
	     * are provided to each invoked method. If `methodName` is a function it is
	     * invoked for, and `this` bound to, each element in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Array|Function|string} path The path of the method to invoke or
	     *  the function invoked per iteration.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
	     * // => [[1, 5, 7], [1, 2, 3]]
	     *
	     * _.invoke([123, 456], String.prototype.split, '');
	     * // => [['1', '2', '3'], ['4', '5', '6']]
	     */
	    var invoke = restParam(function(collection, path, args) {
	      var index = -1,
	          isFunc = typeof path == 'function',
	          isProp = isKey(path),
	          result = isArrayLike(collection) ? Array(collection.length) : [];

	      baseEach(collection, function(value) {
	        var func = isFunc ? path : ((isProp && value != null) ? value[path] : undefined);
	        result[++index] = func ? func.apply(value, args) : invokePath(value, path, args);
	      });
	      return result;
	    });

	    /**
	     * Creates an array of values by running each element in `collection` through
	     * `iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	     *
	     * The guarded methods are:
	     * `ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`,
	     * `drop`, `dropRight`, `every`, `fill`, `flatten`, `invert`, `max`, `min`,
	     * `parseInt`, `slice`, `sortBy`, `take`, `takeRight`, `template`, `trim`,
	     * `trimLeft`, `trimRight`, `trunc`, `random`, `range`, `sample`, `some`,
	     * `sum`, `uniq`, and `words`
	     *
	     * @static
	     * @memberOf _
	     * @alias collect
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new mapped array.
	     * @example
	     *
	     * function timesThree(n) {
	     *   return n * 3;
	     * }
	     *
	     * _.map([1, 2], timesThree);
	     * // => [3, 6]
	     *
	     * _.map({ 'a': 1, 'b': 2 }, timesThree);
	     * // => [3, 6] (iteration order is not guaranteed)
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * // using the `_.property` callback shorthand
	     * _.map(users, 'user');
	     * // => ['barney', 'fred']
	     */
	    function map(collection, iteratee, thisArg) {
	      var func = isArray(collection) ? arrayMap : baseMap;
	      iteratee = getCallback(iteratee, thisArg, 3);
	      return func(collection, iteratee);
	    }

	    /**
	     * Creates an array of elements split into two groups, the first of which
	     * contains elements `predicate` returns truthy for, while the second of which
	     * contains elements `predicate` returns falsey for. The predicate is bound
	     * to `thisArg` and invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the array of grouped elements.
	     * @example
	     *
	     * _.partition([1, 2, 3], function(n) {
	     *   return n % 2;
	     * });
	     * // => [[1, 3], [2]]
	     *
	     * _.partition([1.2, 2.3, 3.4], function(n) {
	     *   return this.floor(n) % 2;
	     * }, Math);
	     * // => [[1.2, 3.4], [2.3]]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': false },
	     *   { 'user': 'fred',    'age': 40, 'active': true },
	     *   { 'user': 'pebbles', 'age': 1,  'active': false }
	     * ];
	     *
	     * var mapper = function(array) {
	     *   return _.pluck(array, 'user');
	     * };
	     *
	     * // using the `_.matches` callback shorthand
	     * _.map(_.partition(users, { 'age': 1, 'active': false }), mapper);
	     * // => [['pebbles'], ['barney', 'fred']]
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.map(_.partition(users, 'active', false), mapper);
	     * // => [['barney', 'pebbles'], ['fred']]
	     *
	     * // using the `_.property` callback shorthand
	     * _.map(_.partition(users, 'active'), mapper);
	     * // => [['fred'], ['barney', 'pebbles']]
	     */
	    var partition = createAggregator(function(result, value, key) {
	      result[key ? 0 : 1].push(value);
	    }, function() { return [[], []]; });

	    /**
	     * Gets the property value of `path` from all elements in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Array|string} path The path of the property to pluck.
	     * @returns {Array} Returns the property values.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.pluck(users, 'user');
	     * // => ['barney', 'fred']
	     *
	     * var userIndex = _.indexBy(users, 'user');
	     * _.pluck(userIndex, 'age');
	     * // => [36, 40] (iteration order is not guaranteed)
	     */
	    function pluck(collection, path) {
	      return map(collection, property(path));
	    }

	    /**
	     * Reduces `collection` to a value which is the accumulated result of running
	     * each element in `collection` through `iteratee`, where each successive
	     * invocation is supplied the return value of the previous. If `accumulator`
	     * is not provided the first element of `collection` is used as the initial
	     * value. The `iteratee` is bound to `thisArg` and invoked with four arguments:
	     * (accumulator, value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.reduce`, `_.reduceRight`, and `_.transform`.
	     *
	     * The guarded methods are:
	     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `sortByAll`,
	     * and `sortByOrder`
	     *
	     * @static
	     * @memberOf _
	     * @alias foldl, inject
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.reduce([1, 2], function(total, n) {
	     *   return total + n;
	     * });
	     * // => 3
	     *
	     * _.reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
	     *   result[key] = n * 3;
	     *   return result;
	     * }, {});
	     * // => { 'a': 3, 'b': 6 } (iteration order is not guaranteed)
	     */
	    var reduce = createReduce(arrayReduce, baseEach);

	    /**
	     * This method is like `_.reduce` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias foldr
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * var array = [[0, 1], [2, 3], [4, 5]];
	     *
	     * _.reduceRight(array, function(flattened, other) {
	     *   return flattened.concat(other);
	     * }, []);
	     * // => [4, 5, 2, 3, 0, 1]
	     */
	    var reduceRight = createReduce(arrayReduceRight, baseEachRight);

	    /**
	     * The opposite of `_.filter`; this method returns the elements of `collection`
	     * that `predicate` does **not** return truthy for.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * _.reject([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 0;
	     * });
	     * // => [1, 3]
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.reject(users, { 'age': 40, 'active': true }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.reject(users, 'active', false), 'user');
	     * // => ['fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.reject(users, 'active'), 'user');
	     * // => ['barney']
	     */
	    function reject(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      predicate = getCallback(predicate, thisArg, 3);
	      return func(collection, function(value, index, collection) {
	        return !predicate(value, index, collection);
	      });
	    }

	    /**
	     * Gets a random element or `n` random elements from a collection.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to sample.
	     * @param {number} [n] The number of elements to sample.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {*} Returns the random sample(s).
	     * @example
	     *
	     * _.sample([1, 2, 3, 4]);
	     * // => 2
	     *
	     * _.sample([1, 2, 3, 4], 2);
	     * // => [3, 1]
	     */
	    function sample(collection, n, guard) {
	      if (guard ? isIterateeCall(collection, n, guard) : n == null) {
	        collection = toIterable(collection);
	        var length = collection.length;
	        return length > 0 ? collection[baseRandom(0, length - 1)] : undefined;
	      }
	      var index = -1,
	          result = toArray(collection),
	          length = result.length,
	          lastIndex = length - 1;

	      n = nativeMin(n < 0 ? 0 : (+n || 0), length);
	      while (++index < n) {
	        var rand = baseRandom(index, lastIndex),
	            value = result[rand];

	        result[rand] = result[index];
	        result[index] = value;
	      }
	      result.length = n;
	      return result;
	    }

	    /**
	     * Creates an array of shuffled values, using a version of the
	     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     * @example
	     *
	     * _.shuffle([1, 2, 3, 4]);
	     * // => [4, 1, 3, 2]
	     */
	    function shuffle(collection) {
	      return sample(collection, POSITIVE_INFINITY);
	    }

	    /**
	     * Gets the size of `collection` by returning its length for array-like
	     * values or the number of own enumerable properties for objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to inspect.
	     * @returns {number} Returns the size of `collection`.
	     * @example
	     *
	     * _.size([1, 2, 3]);
	     * // => 3
	     *
	     * _.size({ 'a': 1, 'b': 2 });
	     * // => 2
	     *
	     * _.size('pebbles');
	     * // => 7
	     */
	    function size(collection) {
	      var length = collection ? getLength(collection) : 0;
	      return isLength(length) ? length : keys(collection).length;
	    }

	    /**
	     * Checks if `predicate` returns truthy for **any** element of `collection`.
	     * The function returns as soon as it finds a passing value and does not iterate
	     * over the entire collection. The predicate is bound to `thisArg` and invoked
	     * with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias any
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.some([null, 0, 'yes', false], Boolean);
	     * // => true
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': true },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.some(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.some(users, 'active', false);
	     * // => true
	     *
	     * // using the `_.property` callback shorthand
	     * _.some(users, 'active');
	     * // => true
	     */
	    function some(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arraySome : baseSome;
	      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
	        predicate = undefined;
	      }
	      if (typeof predicate != 'function' || thisArg !== undefined) {
	        predicate = getCallback(predicate, thisArg, 3);
	      }
	      return func(collection, predicate);
	    }

	    /**
	     * Creates an array of elements, sorted in ascending order by the results of
	     * running each element in a collection through `iteratee`. This method performs
	     * a stable sort, that is, it preserves the original sort order of equal elements.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * _.sortBy([1, 2, 3], function(n) {
	     *   return Math.sin(n);
	     * });
	     * // => [3, 1, 2]
	     *
	     * _.sortBy([1, 2, 3], function(n) {
	     *   return this.sin(n);
	     * }, Math);
	     * // => [3, 1, 2]
	     *
	     * var users = [
	     *   { 'user': 'fred' },
	     *   { 'user': 'pebbles' },
	     *   { 'user': 'barney' }
	     * ];
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.sortBy(users, 'user'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function sortBy(collection, iteratee, thisArg) {
	      if (collection == null) {
	        return [];
	      }
	      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	        iteratee = undefined;
	      }
	      var index = -1;
	      iteratee = getCallback(iteratee, thisArg, 3);

	      var result = baseMap(collection, function(value, key, collection) {
	        return { 'criteria': iteratee(value, key, collection), 'index': ++index, 'value': value };
	      });
	      return baseSortBy(result, compareAscending);
	    }

	    /**
	     * This method is like `_.sortBy` except that it can sort by multiple iteratees
	     * or property names.
	     *
	     * If a property name is provided for an iteratee the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If an object is provided for an iteratee the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {...(Function|Function[]|Object|Object[]|string|string[])} iteratees
	     *  The iteratees to sort by, specified as individual values or arrays of values.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 42 },
	     *   { 'user': 'barney', 'age': 34 }
	     * ];
	     *
	     * _.map(_.sortByAll(users, ['user', 'age']), _.values);
	     * // => [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]
	     *
	     * _.map(_.sortByAll(users, 'user', function(chr) {
	     *   return Math.floor(chr.age / 10);
	     * }), _.values);
	     * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
	     */
	    var sortByAll = restParam(function(collection, iteratees) {
	      if (collection == null) {
	        return [];
	      }
	      var guard = iteratees[2];
	      if (guard && isIterateeCall(iteratees[0], iteratees[1], guard)) {
	        iteratees.length = 1;
	      }
	      return baseSortByOrder(collection, baseFlatten(iteratees), []);
	    });

	    /**
	     * This method is like `_.sortByAll` except that it allows specifying the
	     * sort orders of the iteratees to sort by. If `orders` is unspecified, all
	     * values are sorted in ascending order. Otherwise, a value is sorted in
	     * ascending order if its corresponding order is "asc", and descending if "desc".
	     *
	     * If a property name is provided for an iteratee the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If an object is provided for an iteratee the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {boolean[]} [orders] The sort orders of `iteratees`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 34 },
	     *   { 'user': 'fred',   'age': 42 },
	     *   { 'user': 'barney', 'age': 36 }
	     * ];
	     *
	     * // sort by `user` in ascending order and by `age` in descending order
	     * _.map(_.sortByOrder(users, ['user', 'age'], ['asc', 'desc']), _.values);
	     * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
	     */
	    function sortByOrder(collection, iteratees, orders, guard) {
	      if (collection == null) {
	        return [];
	      }
	      if (guard && isIterateeCall(iteratees, orders, guard)) {
	        orders = undefined;
	      }
	      if (!isArray(iteratees)) {
	        iteratees = iteratees == null ? [] : [iteratees];
	      }
	      if (!isArray(orders)) {
	        orders = orders == null ? [] : [orders];
	      }
	      return baseSortByOrder(collection, iteratees, orders);
	    }

	    /**
	     * Performs a deep comparison between each element in `collection` and the
	     * source object, returning an array of all elements that have equivalent
	     * property values.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Object} source The object of property values to match.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false, 'pets': ['hoppy'] },
	     *   { 'user': 'fred',   'age': 40, 'active': true, 'pets': ['baby puss', 'dino'] }
	     * ];
	     *
	     * _.pluck(_.where(users, { 'age': 36, 'active': false }), 'user');
	     * // => ['barney']
	     *
	     * _.pluck(_.where(users, { 'pets': ['dino'] }), 'user');
	     * // => ['fred']
	     */
	    function where(collection, source) {
	      return filter(collection, baseMatches(source));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Gets the number of milliseconds that have elapsed since the Unix epoch
	     * (1 January 1970 00:00:00 UTC).
	     *
	     * @static
	     * @memberOf _
	     * @category Date
	     * @example
	     *
	     * _.defer(function(stamp) {
	     *   console.log(_.now() - stamp);
	     * }, _.now());
	     * // => logs the number of milliseconds it took for the deferred function to be invoked
	     */
	    var now = nativeNow || function() {
	      return new Date().getTime();
	    };

	    /*------------------------------------------------------------------------*/

	    /**
	     * The opposite of `_.before`; this method creates a function that invokes
	     * `func` once it is called `n` or more times.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {number} n The number of calls before `func` is invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var saves = ['profile', 'settings'];
	     *
	     * var done = _.after(saves.length, function() {
	     *   console.log('done saving!');
	     * });
	     *
	     * _.forEach(saves, function(type) {
	     *   asyncSave({ 'type': type, 'complete': done });
	     * });
	     * // => logs 'done saving!' after the two async saves have completed
	     */
	    function after(n, func) {
	      if (typeof func != 'function') {
	        if (typeof n == 'function') {
	          var temp = n;
	          n = func;
	          func = temp;
	        } else {
	          throw new TypeError(FUNC_ERROR_TEXT);
	        }
	      }
	      n = nativeIsFinite(n = +n) ? n : 0;
	      return function() {
	        if (--n < 1) {
	          return func.apply(this, arguments);
	        }
	      };
	    }

	    /**
	     * Creates a function that accepts up to `n` arguments ignoring any
	     * additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @param {number} [n=func.length] The arity cap.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
	     * // => [6, 8, 10]
	     */
	    function ary(func, n, guard) {
	      if (guard && isIterateeCall(func, n, guard)) {
	        n = undefined;
	      }
	      n = (func && n == null) ? func.length : nativeMax(+n || 0, 0);
	      return createWrapper(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
	    }

	    /**
	     * Creates a function that invokes `func`, with the `this` binding and arguments
	     * of the created function, while it is called less than `n` times. Subsequent
	     * calls to the created function return the result of the last `func` invocation.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {number} n The number of calls at which `func` is no longer invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * jQuery('#add').on('click', _.before(5, addContactToList));
	     * // => allows adding up to 4 contacts to the list
	     */
	    function before(n, func) {
	      var result;
	      if (typeof func != 'function') {
	        if (typeof n == 'function') {
	          var temp = n;
	          n = func;
	          func = temp;
	        } else {
	          throw new TypeError(FUNC_ERROR_TEXT);
	        }
	      }
	      return function() {
	        if (--n > 0) {
	          result = func.apply(this, arguments);
	        }
	        if (n <= 1) {
	          func = undefined;
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and prepends any additional `_.bind` arguments to those provided to the
	     * bound function.
	     *
	     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** Unlike native `Function#bind` this method does not set the "length"
	     * property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var greet = function(greeting, punctuation) {
	     *   return greeting + ' ' + this.user + punctuation;
	     * };
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * var bound = _.bind(greet, object, 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * // using placeholders
	     * var bound = _.bind(greet, object, _, '!');
	     * bound('hi');
	     * // => 'hi fred!'
	     */
	    var bind = restParam(function(func, thisArg, partials) {
	      var bitmask = BIND_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, bind.placeholder);
	        bitmask |= PARTIAL_FLAG;
	      }
	      return createWrapper(func, bitmask, thisArg, partials, holders);
	    });

	    /**
	     * Binds methods of an object to the object itself, overwriting the existing
	     * method. Method names may be specified as individual arguments or as arrays
	     * of method names. If no method names are provided all enumerable function
	     * properties, own and inherited, of `object` are bound.
	     *
	     * **Note:** This method does not set the "length" property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Object} object The object to bind and assign the bound methods to.
	     * @param {...(string|string[])} [methodNames] The object method names to bind,
	     *  specified as individual method names or arrays of method names.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var view = {
	     *   'label': 'docs',
	     *   'onClick': function() {
	     *     console.log('clicked ' + this.label);
	     *   }
	     * };
	     *
	     * _.bindAll(view);
	     * jQuery('#docs').on('click', view.onClick);
	     * // => logs 'clicked docs' when the element is clicked
	     */
	    var bindAll = restParam(function(object, methodNames) {
	      methodNames = methodNames.length ? baseFlatten(methodNames) : functions(object);

	      var index = -1,
	          length = methodNames.length;

	      while (++index < length) {
	        var key = methodNames[index];
	        object[key] = createWrapper(object[key], BIND_FLAG, object);
	      }
	      return object;
	    });

	    /**
	     * Creates a function that invokes the method at `object[key]` and prepends
	     * any additional `_.bindKey` arguments to those provided to the bound function.
	     *
	     * This method differs from `_.bind` by allowing bound functions to reference
	     * methods that may be redefined or don't yet exist.
	     * See [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
	     * for more details.
	     *
	     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Object} object The object the method belongs to.
	     * @param {string} key The key of the method.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var object = {
	     *   'user': 'fred',
	     *   'greet': function(greeting, punctuation) {
	     *     return greeting + ' ' + this.user + punctuation;
	     *   }
	     * };
	     *
	     * var bound = _.bindKey(object, 'greet', 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * object.greet = function(greeting, punctuation) {
	     *   return greeting + 'ya ' + this.user + punctuation;
	     * };
	     *
	     * bound('!');
	     * // => 'hiya fred!'
	     *
	     * // using placeholders
	     * var bound = _.bindKey(object, 'greet', _, '!');
	     * bound('hi');
	     * // => 'hiya fred!'
	     */
	    var bindKey = restParam(function(object, key, partials) {
	      var bitmask = BIND_FLAG | BIND_KEY_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, bindKey.placeholder);
	        bitmask |= PARTIAL_FLAG;
	      }
	      return createWrapper(key, bitmask, object, partials, holders);
	    });

	    /**
	     * Creates a function that accepts one or more arguments of `func` that when
	     * called either invokes `func` returning its result, if all `func` arguments
	     * have been provided, or returns a function that accepts one or more of the
	     * remaining `func` arguments, and so on. The arity of `func` may be specified
	     * if `func.length` is not sufficient.
	     *
	     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method does not set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curry(abc);
	     *
	     * curried(1)(2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // using placeholders
	     * curried(1)(_, 3)(2);
	     * // => [1, 2, 3]
	     */
	    var curry = createCurry(CURRY_FLAG);

	    /**
	     * This method is like `_.curry` except that arguments are applied to `func`
	     * in the manner of `_.partialRight` instead of `_.partial`.
	     *
	     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method does not set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curryRight(abc);
	     *
	     * curried(3)(2)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(2, 3)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // using placeholders
	     * curried(3)(1, _)(2);
	     * // => [1, 2, 3]
	     */
	    var curryRight = createCurry(CURRY_RIGHT_FLAG);

	    /**
	     * Creates a debounced function that delays invoking `func` until after `wait`
	     * milliseconds have elapsed since the last time the debounced function was
	     * invoked. The debounced function comes with a `cancel` method to cancel
	     * delayed invocations. Provide an options object to indicate that `func`
	     * should be invoked on the leading and/or trailing edge of the `wait` timeout.
	     * Subsequent calls to the debounced function return the result of the last
	     * `func` invocation.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	     * on the trailing edge of the timeout only if the the debounced function is
	     * invoked more than once during the `wait` timeout.
	     *
	     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	     * for details over the differences between `_.debounce` and `_.throttle`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to debounce.
	     * @param {number} [wait=0] The number of milliseconds to delay.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.leading=false] Specify invoking on the leading
	     *  edge of the timeout.
	     * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	     *  delayed before it is invoked.
	     * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	     *  edge of the timeout.
	     * @returns {Function} Returns the new debounced function.
	     * @example
	     *
	     * // avoid costly calculations while the window size is in flux
	     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	     *
	     * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
	     * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	     *   'leading': true,
	     *   'trailing': false
	     * }));
	     *
	     * // ensure `batchLog` is invoked once after 1 second of debounced calls
	     * var source = new EventSource('/stream');
	     * jQuery(source).on('message', _.debounce(batchLog, 250, {
	     *   'maxWait': 1000
	     * }));
	     *
	     * // cancel a debounced call
	     * var todoChanges = _.debounce(batchLog, 1000);
	     * Object.observe(models.todo, todoChanges);
	     *
	     * Object.observe(models, function(changes) {
	     *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
	     *     todoChanges.cancel();
	     *   }
	     * }, ['delete']);
	     *
	     * // ...at some point `models.todo` is changed
	     * models.todo.completed = true;
	     *
	     * // ...before 1 second has passed `models.todo` is deleted
	     * // which cancels the debounced `todoChanges` call
	     * delete models.todo;
	     */
	    function debounce(func, wait, options) {
	      var args,
	          maxTimeoutId,
	          result,
	          stamp,
	          thisArg,
	          timeoutId,
	          trailingCall,
	          lastCalled = 0,
	          maxWait = false,
	          trailing = true;

	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      wait = wait < 0 ? 0 : (+wait || 0);
	      if (options === true) {
	        var leading = true;
	        trailing = false;
	      } else if (isObject(options)) {
	        leading = !!options.leading;
	        maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }

	      function cancel() {
	        if (timeoutId) {
	          clearTimeout(timeoutId);
	        }
	        if (maxTimeoutId) {
	          clearTimeout(maxTimeoutId);
	        }
	        lastCalled = 0;
	        maxTimeoutId = timeoutId = trailingCall = undefined;
	      }

	      function complete(isCalled, id) {
	        if (id) {
	          clearTimeout(id);
	        }
	        maxTimeoutId = timeoutId = trailingCall = undefined;
	        if (isCalled) {
	          lastCalled = now();
	          result = func.apply(thisArg, args);
	          if (!timeoutId && !maxTimeoutId) {
	            args = thisArg = undefined;
	          }
	        }
	      }

	      function delayed() {
	        var remaining = wait - (now() - stamp);
	        if (remaining <= 0 || remaining > wait) {
	          complete(trailingCall, maxTimeoutId);
	        } else {
	          timeoutId = setTimeout(delayed, remaining);
	        }
	      }

	      function maxDelayed() {
	        complete(trailing, timeoutId);
	      }

	      function debounced() {
	        args = arguments;
	        stamp = now();
	        thisArg = this;
	        trailingCall = trailing && (timeoutId || !leading);

	        if (maxWait === false) {
	          var leadingCall = leading && !timeoutId;
	        } else {
	          if (!maxTimeoutId && !leading) {
	            lastCalled = stamp;
	          }
	          var remaining = maxWait - (stamp - lastCalled),
	              isCalled = remaining <= 0 || remaining > maxWait;

	          if (isCalled) {
	            if (maxTimeoutId) {
	              maxTimeoutId = clearTimeout(maxTimeoutId);
	            }
	            lastCalled = stamp;
	            result = func.apply(thisArg, args);
	          }
	          else if (!maxTimeoutId) {
	            maxTimeoutId = setTimeout(maxDelayed, remaining);
	          }
	        }
	        if (isCalled && timeoutId) {
	          timeoutId = clearTimeout(timeoutId);
	        }
	        else if (!timeoutId && wait !== maxWait) {
	          timeoutId = setTimeout(delayed, wait);
	        }
	        if (leadingCall) {
	          isCalled = true;
	          result = func.apply(thisArg, args);
	        }
	        if (isCalled && !timeoutId && !maxTimeoutId) {
	          args = thisArg = undefined;
	        }
	        return result;
	      }
	      debounced.cancel = cancel;
	      return debounced;
	    }

	    /**
	     * Defers invoking the `func` until the current call stack has cleared. Any
	     * additional arguments are provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to defer.
	     * @param {...*} [args] The arguments to invoke the function with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.defer(function(text) {
	     *   console.log(text);
	     * }, 'deferred');
	     * // logs 'deferred' after one or more milliseconds
	     */
	    var defer = restParam(function(func, args) {
	      return baseDelay(func, 1, args);
	    });

	    /**
	     * Invokes `func` after `wait` milliseconds. Any additional arguments are
	     * provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {...*} [args] The arguments to invoke the function with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.delay(function(text) {
	     *   console.log(text);
	     * }, 1000, 'later');
	     * // => logs 'later' after one second
	     */
	    var delay = restParam(function(func, wait, args) {
	      return baseDelay(func, wait, args);
	    });

	    /**
	     * Creates a function that returns the result of invoking the provided
	     * functions with the `this` binding of the created function, where each
	     * successive invocation is supplied the return value of the previous.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {...Function} [funcs] Functions to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flow(_.add, square);
	     * addSquare(1, 2);
	     * // => 9
	     */
	    var flow = createFlow();

	    /**
	     * This method is like `_.flow` except that it creates a function that
	     * invokes the provided functions from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias backflow, compose
	     * @category Function
	     * @param {...Function} [funcs] Functions to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flowRight(square, _.add);
	     * addSquare(1, 2);
	     * // => 9
	     */
	    var flowRight = createFlow(true);

	    /**
	     * Creates a function that memoizes the result of `func`. If `resolver` is
	     * provided it determines the cache key for storing the result based on the
	     * arguments provided to the memoized function. By default, the first argument
	     * provided to the memoized function is coerced to a string and used as the
	     * cache key. The `func` is invoked with the `this` binding of the memoized
	     * function.
	     *
	     * **Note:** The cache is exposed as the `cache` property on the memoized
	     * function. Its creation may be customized by replacing the `_.memoize.Cache`
	     * constructor with one whose instances implement the [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	     * method interface of `get`, `has`, and `set`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to have its output memoized.
	     * @param {Function} [resolver] The function to resolve the cache key.
	     * @returns {Function} Returns the new memoizing function.
	     * @example
	     *
	     * var upperCase = _.memoize(function(string) {
	     *   return string.toUpperCase();
	     * });
	     *
	     * upperCase('fred');
	     * // => 'FRED'
	     *
	     * // modifying the result cache
	     * upperCase.cache.set('fred', 'BARNEY');
	     * upperCase('fred');
	     * // => 'BARNEY'
	     *
	     * // replacing `_.memoize.Cache`
	     * var object = { 'user': 'fred' };
	     * var other = { 'user': 'barney' };
	     * var identity = _.memoize(_.identity);
	     *
	     * identity(object);
	     * // => { 'user': 'fred' }
	     * identity(other);
	     * // => { 'user': 'fred' }
	     *
	     * _.memoize.Cache = WeakMap;
	     * var identity = _.memoize(_.identity);
	     *
	     * identity(object);
	     * // => { 'user': 'fred' }
	     * identity(other);
	     * // => { 'user': 'barney' }
	     */
	    function memoize(func, resolver) {
	      if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var memoized = function() {
	        var args = arguments,
	            key = resolver ? resolver.apply(this, args) : args[0],
	            cache = memoized.cache;

	        if (cache.has(key)) {
	          return cache.get(key);
	        }
	        var result = func.apply(this, args);
	        memoized.cache = cache.set(key, result);
	        return result;
	      };
	      memoized.cache = new memoize.Cache;
	      return memoized;
	    }

	    /**
	     * Creates a function that runs each argument through a corresponding
	     * transform function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to wrap.
	     * @param {...(Function|Function[])} [transforms] The functions to transform
	     * arguments, specified as individual functions or arrays of functions.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function doubled(n) {
	     *   return n * 2;
	     * }
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var modded = _.modArgs(function(x, y) {
	     *   return [x, y];
	     * }, square, doubled);
	     *
	     * modded(1, 2);
	     * // => [1, 4]
	     *
	     * modded(5, 10);
	     * // => [25, 20]
	     */
	    var modArgs = restParam(function(func, transforms) {
	      transforms = baseFlatten(transforms);
	      if (typeof func != 'function' || !arrayEvery(transforms, baseIsFunction)) {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var length = transforms.length;
	      return restParam(function(args) {
	        var index = nativeMin(args.length, length);
	        while (index--) {
	          args[index] = transforms[index](args[index]);
	        }
	        return func.apply(this, args);
	      });
	    });

	    /**
	     * Creates a function that negates the result of the predicate `func`. The
	     * `func` predicate is invoked with the `this` binding and arguments of the
	     * created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} predicate The predicate to negate.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function isEven(n) {
	     *   return n % 2 == 0;
	     * }
	     *
	     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
	     * // => [1, 3, 5]
	     */
	    function negate(predicate) {
	      if (typeof predicate != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return function() {
	        return !predicate.apply(this, arguments);
	      };
	    }

	    /**
	     * Creates a function that is restricted to invoking `func` once. Repeat calls
	     * to the function return the value of the first call. The `func` is invoked
	     * with the `this` binding and arguments of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var initialize = _.once(createApplication);
	     * initialize();
	     * initialize();
	     * // `initialize` invokes `createApplication` once
	     */
	    function once(func) {
	      return before(2, func);
	    }

	    /**
	     * Creates a function that invokes `func` with `partial` arguments prepended
	     * to those provided to the new function. This method is like `_.bind` except
	     * it does **not** alter the `this` binding.
	     *
	     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method does not set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * var greet = function(greeting, name) {
	     *   return greeting + ' ' + name;
	     * };
	     *
	     * var sayHelloTo = _.partial(greet, 'hello');
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     *
	     * // using placeholders
	     * var greetFred = _.partial(greet, _, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     */
	    var partial = createPartial(PARTIAL_FLAG);

	    /**
	     * This method is like `_.partial` except that partially applied arguments
	     * are appended to those provided to the new function.
	     *
	     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method does not set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * var greet = function(greeting, name) {
	     *   return greeting + ' ' + name;
	     * };
	     *
	     * var greetFred = _.partialRight(greet, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     *
	     * // using placeholders
	     * var sayHelloTo = _.partialRight(greet, 'hello', _);
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     */
	    var partialRight = createPartial(PARTIAL_RIGHT_FLAG);

	    /**
	     * Creates a function that invokes `func` with arguments arranged according
	     * to the specified indexes where the argument value at the first index is
	     * provided as the first argument, the argument value at the second index is
	     * provided as the second argument, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to rearrange arguments for.
	     * @param {...(number|number[])} indexes The arranged argument indexes,
	     *  specified as individual indexes or arrays of indexes.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var rearged = _.rearg(function(a, b, c) {
	     *   return [a, b, c];
	     * }, 2, 0, 1);
	     *
	     * rearged('b', 'c', 'a')
	     * // => ['a', 'b', 'c']
	     *
	     * var map = _.rearg(_.map, [1, 0]);
	     * map(function(n) {
	     *   return n * 3;
	     * }, [1, 2, 3]);
	     * // => [3, 6, 9]
	     */
	    var rearg = restParam(function(func, indexes) {
	      return createWrapper(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes));
	    });

	    /**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * created function and arguments from `start` and beyond provided as an array.
	     *
	     * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.restParam(function(what, names) {
	     *   return what + ' ' + _.initial(names).join(', ') +
	     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	     * });
	     *
	     * say('hello', 'fred', 'barney', 'pebbles');
	     * // => 'hello fred, barney, & pebbles'
	     */
	    function restParam(func, start) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	      return function() {
	        var args = arguments,
	            index = -1,
	            length = nativeMax(args.length - start, 0),
	            rest = Array(length);

	        while (++index < length) {
	          rest[index] = args[start + index];
	        }
	        switch (start) {
	          case 0: return func.call(this, rest);
	          case 1: return func.call(this, args[0], rest);
	          case 2: return func.call(this, args[0], args[1], rest);
	        }
	        var otherArgs = Array(start + 1);
	        index = -1;
	        while (++index < start) {
	          otherArgs[index] = args[index];
	        }
	        otherArgs[start] = rest;
	        return func.apply(this, otherArgs);
	      };
	    }

	    /**
	     * Creates a function that invokes `func` with the `this` binding of the created
	     * function and an array of arguments much like [`Function#apply`](https://es5.github.io/#x15.3.4.3).
	     *
	     * **Note:** This method is based on the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator).
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to spread arguments over.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.spread(function(who, what) {
	     *   return who + ' says ' + what;
	     * });
	     *
	     * say(['fred', 'hello']);
	     * // => 'fred says hello'
	     *
	     * // with a Promise
	     * var numbers = Promise.all([
	     *   Promise.resolve(40),
	     *   Promise.resolve(36)
	     * ]);
	     *
	     * numbers.then(_.spread(function(x, y) {
	     *   return x + y;
	     * }));
	     * // => a Promise of 76
	     */
	    function spread(func) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return function(array) {
	        return func.apply(this, array);
	      };
	    }

	    /**
	     * Creates a throttled function that only invokes `func` at most once per
	     * every `wait` milliseconds. The throttled function comes with a `cancel`
	     * method to cancel delayed invocations. Provide an options object to indicate
	     * that `func` should be invoked on the leading and/or trailing edge of the
	     * `wait` timeout. Subsequent calls to the throttled function return the
	     * result of the last `func` call.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	     * on the trailing edge of the timeout only if the the throttled function is
	     * invoked more than once during the `wait` timeout.
	     *
	     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	     * for details over the differences between `_.throttle` and `_.debounce`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to throttle.
	     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.leading=true] Specify invoking on the leading
	     *  edge of the timeout.
	     * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	     *  edge of the timeout.
	     * @returns {Function} Returns the new throttled function.
	     * @example
	     *
	     * // avoid excessively updating the position while scrolling
	     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	     *
	     * // invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
	     * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
	     *   'trailing': false
	     * }));
	     *
	     * // cancel a trailing throttled call
	     * jQuery(window).on('popstate', throttled.cancel);
	     */
	    function throttle(func, wait, options) {
	      var leading = true,
	          trailing = true;

	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      if (options === false) {
	        leading = false;
	      } else if (isObject(options)) {
	        leading = 'leading' in options ? !!options.leading : leading;
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }
	      return debounce(func, wait, { 'leading': leading, 'maxWait': +wait, 'trailing': trailing });
	    }

	    /**
	     * Creates a function that provides `value` to the wrapper function as its
	     * first argument. Any additional arguments provided to the function are
	     * appended to those provided to the wrapper function. The wrapper is invoked
	     * with the `this` binding of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {*} value The value to wrap.
	     * @param {Function} wrapper The wrapper function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var p = _.wrap(_.escape, function(func, text) {
	     *   return '<p>' + func(text) + '</p>';
	     * });
	     *
	     * p('fred, barney, & pebbles');
	     * // => '<p>fred, barney, &amp; pebbles</p>'
	     */
	    function wrap(value, wrapper) {
	      wrapper = wrapper == null ? identity : wrapper;
	      return createWrapper(wrapper, PARTIAL_FLAG, undefined, [value], []);
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a clone of `value`. If `isDeep` is `true` nested objects are cloned,
	     * otherwise they are assigned by reference. If `customizer` is provided it is
	     * invoked to produce the cloned values. If `customizer` returns `undefined`
	     * cloning is handled by the method instead. The `customizer` is bound to
	     * `thisArg` and invoked with two argument; (value [, index|key, object]).
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
	     * The enumerable properties of `arguments` objects and objects created by
	     * constructors other than `Object` are cloned to plain `Object` objects. An
	     * empty object is returned for uncloneable values such as functions, DOM nodes,
	     * Maps, Sets, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {*} Returns the cloned value.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * var shallow = _.clone(users);
	     * shallow[0] === users[0];
	     * // => true
	     *
	     * var deep = _.clone(users, true);
	     * deep[0] === users[0];
	     * // => false
	     *
	     * // using a customizer callback
	     * var el = _.clone(document.body, function(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(false);
	     *   }
	     * });
	     *
	     * el === document.body
	     * // => false
	     * el.nodeName
	     * // => BODY
	     * el.childNodes.length;
	     * // => 0
	     */
	    function clone(value, isDeep, customizer, thisArg) {
	      if (isDeep && typeof isDeep != 'boolean' && isIterateeCall(value, isDeep, customizer)) {
	        isDeep = false;
	      }
	      else if (typeof isDeep == 'function') {
	        thisArg = customizer;
	        customizer = isDeep;
	        isDeep = false;
	      }
	      return typeof customizer == 'function'
	        ? baseClone(value, isDeep, bindCallback(customizer, thisArg, 1))
	        : baseClone(value, isDeep);
	    }

	    /**
	     * Creates a deep clone of `value`. If `customizer` is provided it is invoked
	     * to produce the cloned values. If `customizer` returns `undefined` cloning
	     * is handled by the method instead. The `customizer` is bound to `thisArg`
	     * and invoked with two argument; (value [, index|key, object]).
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
	     * The enumerable properties of `arguments` objects and objects created by
	     * constructors other than `Object` are cloned to plain `Object` objects. An
	     * empty object is returned for uncloneable values such as functions, DOM nodes,
	     * Maps, Sets, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {*} Returns the deep cloned value.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * var deep = _.cloneDeep(users);
	     * deep[0] === users[0];
	     * // => false
	     *
	     * // using a customizer callback
	     * var el = _.cloneDeep(document.body, function(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(true);
	     *   }
	     * });
	     *
	     * el === document.body
	     * // => false
	     * el.nodeName
	     * // => BODY
	     * el.childNodes.length;
	     * // => 20
	     */
	    function cloneDeep(value, customizer, thisArg) {
	      return typeof customizer == 'function'
	        ? baseClone(value, true, bindCallback(customizer, thisArg, 1))
	        : baseClone(value, true);
	    }

	    /**
	     * Checks if `value` is greater than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than `other`, else `false`.
	     * @example
	     *
	     * _.gt(3, 1);
	     * // => true
	     *
	     * _.gt(3, 3);
	     * // => false
	     *
	     * _.gt(1, 3);
	     * // => false
	     */
	    function gt(value, other) {
	      return value > other;
	    }

	    /**
	     * Checks if `value` is greater than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than or equal to `other`, else `false`.
	     * @example
	     *
	     * _.gte(3, 1);
	     * // => true
	     *
	     * _.gte(3, 3);
	     * // => true
	     *
	     * _.gte(1, 3);
	     * // => false
	     */
	    function gte(value, other) {
	      return value >= other;
	    }

	    /**
	     * Checks if `value` is classified as an `arguments` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isArguments(function() { return arguments; }());
	     * // => true
	     *
	     * _.isArguments([1, 2, 3]);
	     * // => false
	     */
	    function isArguments(value) {
	      return isObjectLike(value) && isArrayLike(value) &&
	        hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	    }

	    /**
	     * Checks if `value` is classified as an `Array` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isArray([1, 2, 3]);
	     * // => true
	     *
	     * _.isArray(function() { return arguments; }());
	     * // => false
	     */
	    var isArray = nativeIsArray || function(value) {
	      return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	    };

	    /**
	     * Checks if `value` is classified as a boolean primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isBoolean(false);
	     * // => true
	     *
	     * _.isBoolean(null);
	     * // => false
	     */
	    function isBoolean(value) {
	      return value === true || value === false || (isObjectLike(value) && objToString.call(value) == boolTag);
	    }

	    /**
	     * Checks if `value` is classified as a `Date` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isDate(new Date);
	     * // => true
	     *
	     * _.isDate('Mon April 23 2012');
	     * // => false
	     */
	    function isDate(value) {
	      return isObjectLike(value) && objToString.call(value) == dateTag;
	    }

	    /**
	     * Checks if `value` is a DOM element.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
	     * @example
	     *
	     * _.isElement(document.body);
	     * // => true
	     *
	     * _.isElement('<body>');
	     * // => false
	     */
	    function isElement(value) {
	      return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
	    }

	    /**
	     * Checks if `value` is empty. A value is considered empty unless it is an
	     * `arguments` object, array, string, or jQuery-like collection with a length
	     * greater than `0` or an object with own enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {Array|Object|string} value The value to inspect.
	     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	     * @example
	     *
	     * _.isEmpty(null);
	     * // => true
	     *
	     * _.isEmpty(true);
	     * // => true
	     *
	     * _.isEmpty(1);
	     * // => true
	     *
	     * _.isEmpty([1, 2, 3]);
	     * // => false
	     *
	     * _.isEmpty({ 'a': 1 });
	     * // => false
	     */
	    function isEmpty(value) {
	      if (value == null) {
	        return true;
	      }
	      if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value) ||
	          (isObjectLike(value) && isFunction(value.splice)))) {
	        return !value.length;
	      }
	      return !keys(value).length;
	    }

	    /**
	     * Performs a deep comparison between two values to determine if they are
	     * equivalent. If `customizer` is provided it is invoked to compare values.
	     * If `customizer` returns `undefined` comparisons are handled by the method
	     * instead. The `customizer` is bound to `thisArg` and invoked with three
	     * arguments: (value, other [, index|key]).
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. Functions and DOM nodes
	     * are **not** supported. Provide a customizer function to extend support
	     * for comparing other values.
	     *
	     * @static
	     * @memberOf _
	     * @alias eq
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize value comparisons.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     * var other = { 'user': 'fred' };
	     *
	     * object == other;
	     * // => false
	     *
	     * _.isEqual(object, other);
	     * // => true
	     *
	     * // using a customizer callback
	     * var array = ['hello', 'goodbye'];
	     * var other = ['hi', 'goodbye'];
	     *
	     * _.isEqual(array, other, function(value, other) {
	     *   if (_.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/)) {
	     *     return true;
	     *   }
	     * });
	     * // => true
	     */
	    function isEqual(value, other, customizer, thisArg) {
	      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
	      var result = customizer ? customizer(value, other) : undefined;
	      return  result === undefined ? baseIsEqual(value, other, customizer) : !!result;
	    }

	    /**
	     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
	     * `SyntaxError`, `TypeError`, or `URIError` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
	     * @example
	     *
	     * _.isError(new Error);
	     * // => true
	     *
	     * _.isError(Error);
	     * // => false
	     */
	    function isError(value) {
	      return isObjectLike(value) && typeof value.message == 'string' && objToString.call(value) == errorTag;
	    }

	    /**
	     * Checks if `value` is a finite primitive number.
	     *
	     * **Note:** This method is based on [`Number.isFinite`](http://ecma-international.org/ecma-262/6.0/#sec-number.isfinite).
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
	     * @example
	     *
	     * _.isFinite(10);
	     * // => true
	     *
	     * _.isFinite('10');
	     * // => false
	     *
	     * _.isFinite(true);
	     * // => false
	     *
	     * _.isFinite(Object(10));
	     * // => false
	     *
	     * _.isFinite(Infinity);
	     * // => false
	     */
	    function isFinite(value) {
	      return typeof value == 'number' && nativeIsFinite(value);
	    }

	    /**
	     * Checks if `value` is classified as a `Function` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isFunction(_);
	     * // => true
	     *
	     * _.isFunction(/abc/);
	     * // => false
	     */
	    function isFunction(value) {
	      // The use of `Object#toString` avoids issues with the `typeof` operator
	      // in older versions of Chrome and Safari which return 'function' for regexes
	      // and Safari 8 equivalents which return 'object' for typed array constructors.
	      return isObject(value) && objToString.call(value) == funcTag;
	    }

	    /**
	     * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	     * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	     * @example
	     *
	     * _.isObject({});
	     * // => true
	     *
	     * _.isObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isObject(1);
	     * // => false
	     */
	    function isObject(value) {
	      // Avoid a V8 JIT bug in Chrome 19-20.
	      // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	      var type = typeof value;
	      return !!value && (type == 'object' || type == 'function');
	    }

	    /**
	     * Performs a deep comparison between `object` and `source` to determine if
	     * `object` contains equivalent property values. If `customizer` is provided
	     * it is invoked to compare values. If `customizer` returns `undefined`
	     * comparisons are handled by the method instead. The `customizer` is bound
	     * to `thisArg` and invoked with three arguments: (value, other, index|key).
	     *
	     * **Note:** This method supports comparing properties of arrays, booleans,
	     * `Date` objects, numbers, `Object` objects, regexes, and strings. Functions
	     * and DOM nodes are **not** supported. Provide a customizer function to extend
	     * support for comparing other values.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Function} [customizer] The function to customize value comparisons.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.isMatch(object, { 'age': 40 });
	     * // => true
	     *
	     * _.isMatch(object, { 'age': 36 });
	     * // => false
	     *
	     * // using a customizer callback
	     * var object = { 'greeting': 'hello' };
	     * var source = { 'greeting': 'hi' };
	     *
	     * _.isMatch(object, source, function(value, other) {
	     *   return _.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/) || undefined;
	     * });
	     * // => true
	     */
	    function isMatch(object, source, customizer, thisArg) {
	      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
	      return baseIsMatch(object, getMatchData(source), customizer);
	    }

	    /**
	     * Checks if `value` is `NaN`.
	     *
	     * **Note:** This method is not the same as [`isNaN`](https://es5.github.io/#x15.1.2.4)
	     * which returns `true` for `undefined` and other non-numeric values.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	     * @example
	     *
	     * _.isNaN(NaN);
	     * // => true
	     *
	     * _.isNaN(new Number(NaN));
	     * // => true
	     *
	     * isNaN(undefined);
	     * // => true
	     *
	     * _.isNaN(undefined);
	     * // => false
	     */
	    function isNaN(value) {
	      // An `NaN` primitive is the only value that is not equal to itself.
	      // Perform the `toStringTag` check first to avoid errors with some host objects in IE.
	      return isNumber(value) && value != +value;
	    }

	    /**
	     * Checks if `value` is a native function.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	     * @example
	     *
	     * _.isNative(Array.prototype.push);
	     * // => true
	     *
	     * _.isNative(_);
	     * // => false
	     */
	    function isNative(value) {
	      if (value == null) {
	        return false;
	      }
	      if (isFunction(value)) {
	        return reIsNative.test(fnToString.call(value));
	      }
	      return isObjectLike(value) && reIsHostCtor.test(value);
	    }

	    /**
	     * Checks if `value` is `null`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	     * @example
	     *
	     * _.isNull(null);
	     * // => true
	     *
	     * _.isNull(void 0);
	     * // => false
	     */
	    function isNull(value) {
	      return value === null;
	    }

	    /**
	     * Checks if `value` is classified as a `Number` primitive or object.
	     *
	     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
	     * as numbers, use the `_.isFinite` method.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isNumber(8.4);
	     * // => true
	     *
	     * _.isNumber(NaN);
	     * // => true
	     *
	     * _.isNumber('8.4');
	     * // => false
	     */
	    function isNumber(value) {
	      return typeof value == 'number' || (isObjectLike(value) && objToString.call(value) == numberTag);
	    }

	    /**
	     * Checks if `value` is a plain object, that is, an object created by the
	     * `Object` constructor or one with a `[[Prototype]]` of `null`.
	     *
	     * **Note:** This method assumes objects created by the `Object` constructor
	     * have no inherited enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * _.isPlainObject(new Foo);
	     * // => false
	     *
	     * _.isPlainObject([1, 2, 3]);
	     * // => false
	     *
	     * _.isPlainObject({ 'x': 0, 'y': 0 });
	     * // => true
	     *
	     * _.isPlainObject(Object.create(null));
	     * // => true
	     */
	    function isPlainObject(value) {
	      var Ctor;

	      // Exit early for non `Object` objects.
	      if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	          (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	        return false;
	      }
	      // IE < 9 iterates inherited properties before own properties. If the first
	      // iterated property is an object's own property then there are no inherited
	      // enumerable properties.
	      var result;
	      // In most environments an object's own properties are iterated before
	      // its inherited properties. If the last iterated property is an object's
	      // own property then there are no inherited enumerable properties.
	      baseForIn(value, function(subValue, key) {
	        result = key;
	      });
	      return result === undefined || hasOwnProperty.call(value, result);
	    }

	    /**
	     * Checks if `value` is classified as a `RegExp` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isRegExp(/abc/);
	     * // => true
	     *
	     * _.isRegExp('/abc/');
	     * // => false
	     */
	    function isRegExp(value) {
	      return isObject(value) && objToString.call(value) == regexpTag;
	    }

	    /**
	     * Checks if `value` is classified as a `String` primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isString('abc');
	     * // => true
	     *
	     * _.isString(1);
	     * // => false
	     */
	    function isString(value) {
	      return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
	    }

	    /**
	     * Checks if `value` is classified as a typed array.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isTypedArray(new Uint8Array);
	     * // => true
	     *
	     * _.isTypedArray([]);
	     * // => false
	     */
	    function isTypedArray(value) {
	      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	    }

	    /**
	     * Checks if `value` is `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	     * @example
	     *
	     * _.isUndefined(void 0);
	     * // => true
	     *
	     * _.isUndefined(null);
	     * // => false
	     */
	    function isUndefined(value) {
	      return value === undefined;
	    }

	    /**
	     * Checks if `value` is less than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than `other`, else `false`.
	     * @example
	     *
	     * _.lt(1, 3);
	     * // => true
	     *
	     * _.lt(3, 3);
	     * // => false
	     *
	     * _.lt(3, 1);
	     * // => false
	     */
	    function lt(value, other) {
	      return value < other;
	    }

	    /**
	     * Checks if `value` is less than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than or equal to `other`, else `false`.
	     * @example
	     *
	     * _.lte(1, 3);
	     * // => true
	     *
	     * _.lte(3, 3);
	     * // => true
	     *
	     * _.lte(3, 1);
	     * // => false
	     */
	    function lte(value, other) {
	      return value <= other;
	    }

	    /**
	     * Converts `value` to an array.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Array} Returns the converted array.
	     * @example
	     *
	     * (function() {
	     *   return _.toArray(arguments).slice(1);
	     * }(1, 2, 3));
	     * // => [2, 3]
	     */
	    function toArray(value) {
	      var length = value ? getLength(value) : 0;
	      if (!isLength(length)) {
	        return values(value);
	      }
	      if (!length) {
	        return [];
	      }
	      return arrayCopy(value);
	    }

	    /**
	     * Converts `value` to a plain object flattening inherited enumerable
	     * properties of `value` to own properties of the plain object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Object} Returns the converted plain object.
	     * @example
	     *
	     * function Foo() {
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.assign({ 'a': 1 }, new Foo);
	     * // => { 'a': 1, 'b': 2 }
	     *
	     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	     * // => { 'a': 1, 'b': 2, 'c': 3 }
	     */
	    function toPlainObject(value) {
	      return baseCopy(value, keysIn(value));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Recursively merges own enumerable properties of the source object(s), that
	     * don't resolve to `undefined` into the destination object. Subsequent sources
	     * overwrite property assignments of previous sources. If `customizer` is
	     * provided it is invoked to produce the merged values of the destination and
	     * source properties. If `customizer` returns `undefined` merging is handled
	     * by the method instead. The `customizer` is bound to `thisArg` and invoked
	     * with five arguments: (objectValue, sourceValue, key, object, source).
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var users = {
	     *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
	     * };
	     *
	     * var ages = {
	     *   'data': [{ 'age': 36 }, { 'age': 40 }]
	     * };
	     *
	     * _.merge(users, ages);
	     * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
	     *
	     * // using a customizer callback
	     * var object = {
	     *   'fruits': ['apple'],
	     *   'vegetables': ['beet']
	     * };
	     *
	     * var other = {
	     *   'fruits': ['banana'],
	     *   'vegetables': ['carrot']
	     * };
	     *
	     * _.merge(object, other, function(a, b) {
	     *   if (_.isArray(a)) {
	     *     return a.concat(b);
	     *   }
	     * });
	     * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
	     */
	    var merge = createAssigner(baseMerge);

	    /**
	     * Assigns own enumerable properties of source object(s) to the destination
	     * object. Subsequent sources overwrite property assignments of previous sources.
	     * If `customizer` is provided it is invoked to produce the assigned values.
	     * The `customizer` is bound to `thisArg` and invoked with five arguments:
	     * (objectValue, sourceValue, key, object, source).
	     *
	     * **Note:** This method mutates `object` and is based on
	     * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
	     *
	     * @static
	     * @memberOf _
	     * @alias extend
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
	     * // => { 'user': 'fred', 'age': 40 }
	     *
	     * // using a customizer callback
	     * var defaults = _.partialRight(_.assign, function(value, other) {
	     *   return _.isUndefined(value) ? other : value;
	     * });
	     *
	     * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var assign = createAssigner(function(object, source, customizer) {
	      return customizer
	        ? assignWith(object, source, customizer)
	        : baseAssign(object, source);
	    });

	    /**
	     * Creates an object that inherits from the given `prototype` object. If a
	     * `properties` object is provided its own enumerable properties are assigned
	     * to the created object.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} prototype The object to inherit from.
	     * @param {Object} [properties] The properties to assign to the object.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * function Shape() {
	     *   this.x = 0;
	     *   this.y = 0;
	     * }
	     *
	     * function Circle() {
	     *   Shape.call(this);
	     * }
	     *
	     * Circle.prototype = _.create(Shape.prototype, {
	     *   'constructor': Circle
	     * });
	     *
	     * var circle = new Circle;
	     * circle instanceof Circle;
	     * // => true
	     *
	     * circle instanceof Shape;
	     * // => true
	     */
	    function create(prototype, properties, guard) {
	      var result = baseCreate(prototype);
	      if (guard && isIterateeCall(prototype, properties, guard)) {
	        properties = undefined;
	      }
	      return properties ? baseAssign(result, properties) : result;
	    }

	    /**
	     * Assigns own enumerable properties of source object(s) to the destination
	     * object for all destination properties that resolve to `undefined`. Once a
	     * property is set, additional values of the same property are ignored.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var defaults = createDefaults(assign, assignDefaults);

	    /**
	     * This method is like `_.defaults` except that it recursively assigns
	     * default properties.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.defaultsDeep({ 'user': { 'name': 'barney' } }, { 'user': { 'name': 'fred', 'age': 36 } });
	     * // => { 'user': { 'name': 'barney', 'age': 36 } }
	     *
	     */
	    var defaultsDeep = createDefaults(merge, mergeDefaults);

	    /**
	     * This method is like `_.find` except that it returns the key of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findKey(users, function(chr) {
	     *   return chr.age < 40;
	     * });
	     * // => 'barney' (iteration order is not guaranteed)
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findKey(users, { 'age': 1, 'active': true });
	     * // => 'pebbles'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findKey(users, 'active', false);
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.findKey(users, 'active');
	     * // => 'barney'
	     */
	    var findKey = createFindKey(baseForOwn);

	    /**
	     * This method is like `_.findKey` except that it iterates over elements of
	     * a collection in the opposite order.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findLastKey(users, function(chr) {
	     *   return chr.age < 40;
	     * });
	     * // => returns `pebbles` assuming `_.findKey` returns `barney`
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findLastKey(users, { 'age': 36, 'active': true });
	     * // => 'barney'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findLastKey(users, 'active', false);
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.findLastKey(users, 'active');
	     * // => 'pebbles'
	     */
	    var findLastKey = createFindKey(baseForOwnRight);

	    /**
	     * Iterates over own and inherited enumerable properties of an object invoking
	     * `iteratee` for each property. The `iteratee` is bound to `thisArg` and invoked
	     * with three arguments: (value, key, object). Iteratee functions may exit
	     * iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forIn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'a', 'b', and 'c' (iteration order is not guaranteed)
	     */
	    var forIn = createForIn(baseFor);

	    /**
	     * This method is like `_.forIn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forInRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'c', 'b', and 'a' assuming `_.forIn ` logs 'a', 'b', and 'c'
	     */
	    var forInRight = createForIn(baseForRight);

	    /**
	     * Iterates over own enumerable properties of an object invoking `iteratee`
	     * for each property. The `iteratee` is bound to `thisArg` and invoked with
	     * three arguments: (value, key, object). Iteratee functions may exit iteration
	     * early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'a' and 'b' (iteration order is not guaranteed)
	     */
	    var forOwn = createForOwn(baseForOwn);

	    /**
	     * This method is like `_.forOwn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwnRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'b' and 'a' assuming `_.forOwn` logs 'a' and 'b'
	     */
	    var forOwnRight = createForOwn(baseForOwnRight);

	    /**
	     * Creates an array of function property names from all enumerable properties,
	     * own and inherited, of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @alias methods
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @returns {Array} Returns the new array of property names.
	     * @example
	     *
	     * _.functions(_);
	     * // => ['after', 'ary', 'assign', ...]
	     */
	    function functions(object) {
	      return baseFunctions(object, keysIn(object));
	    }

	    /**
	     * Gets the property value at `path` of `object`. If the resolved value is
	     * `undefined` the `defaultValue` is used in its place.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.get(object, 'a[0].b.c');
	     * // => 3
	     *
	     * _.get(object, ['a', '0', 'b', 'c']);
	     * // => 3
	     *
	     * _.get(object, 'a.b.c', 'default');
	     * // => 'default'
	     */
	    function get(object, path, defaultValue) {
	      var result = object == null ? undefined : baseGet(object, toPath(path), path + '');
	      return result === undefined ? defaultValue : result;
	    }

	    /**
	     * Checks if `path` is a direct property.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @returns {boolean} Returns `true` if `path` is a direct property, else `false`.
	     * @example
	     *
	     * var object = { 'a': { 'b': { 'c': 3 } } };
	     *
	     * _.has(object, 'a');
	     * // => true
	     *
	     * _.has(object, 'a.b.c');
	     * // => true
	     *
	     * _.has(object, ['a', 'b', 'c']);
	     * // => true
	     */
	    function has(object, path) {
	      if (object == null) {
	        return false;
	      }
	      var result = hasOwnProperty.call(object, path);
	      if (!result && !isKey(path)) {
	        path = toPath(path);
	        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	        if (object == null) {
	          return false;
	        }
	        path = last(path);
	        result = hasOwnProperty.call(object, path);
	      }
	      return result || (isLength(object.length) && isIndex(path, object.length) &&
	        (isArray(object) || isArguments(object)));
	    }

	    /**
	     * Creates an object composed of the inverted keys and values of `object`.
	     * If `object` contains duplicate values, subsequent values overwrite property
	     * assignments of previous values unless `multiValue` is `true`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to invert.
	     * @param {boolean} [multiValue] Allow multiple values per key.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Object} Returns the new inverted object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2, 'c': 1 };
	     *
	     * _.invert(object);
	     * // => { '1': 'c', '2': 'b' }
	     *
	     * // with `multiValue`
	     * _.invert(object, true);
	     * // => { '1': ['a', 'c'], '2': ['b'] }
	     */
	    function invert(object, multiValue, guard) {
	      if (guard && isIterateeCall(object, multiValue, guard)) {
	        multiValue = undefined;
	      }
	      var index = -1,
	          props = keys(object),
	          length = props.length,
	          result = {};

	      while (++index < length) {
	        var key = props[index],
	            value = object[key];

	        if (multiValue) {
	          if (hasOwnProperty.call(result, value)) {
	            result[value].push(key);
	          } else {
	            result[value] = [key];
	          }
	        }
	        else {
	          result[value] = key;
	        }
	      }
	      return result;
	    }

	    /**
	     * Creates an array of the own enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects. See the
	     * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	     * for more details.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keys(new Foo);
	     * // => ['a', 'b'] (iteration order is not guaranteed)
	     *
	     * _.keys('hi');
	     * // => ['0', '1']
	     */
	    var keys = !nativeKeys ? shimKeys : function(object) {
	      var Ctor = object == null ? undefined : object.constructor;
	      if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	          (typeof object != 'function' && isArrayLike(object))) {
	        return shimKeys(object);
	      }
	      return isObject(object) ? nativeKeys(object) : [];
	    };

	    /**
	     * Creates an array of the own and inherited enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keysIn(new Foo);
	     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	     */
	    function keysIn(object) {
	      if (object == null) {
	        return [];
	      }
	      if (!isObject(object)) {
	        object = Object(object);
	      }
	      var length = object.length;
	      length = (length && isLength(length) &&
	        (isArray(object) || isArguments(object)) && length) || 0;

	      var Ctor = object.constructor,
	          index = -1,
	          isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	          result = Array(length),
	          skipIndexes = length > 0;

	      while (++index < length) {
	        result[index] = (index + '');
	      }
	      for (var key in object) {
	        if (!(skipIndexes && isIndex(key, length)) &&
	            !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	          result.push(key);
	        }
	      }
	      return result;
	    }

	    /**
	     * The opposite of `_.mapValues`; this method creates an object with the
	     * same values as `object` and keys generated by running each own enumerable
	     * property of `object` through `iteratee`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the new mapped object.
	     * @example
	     *
	     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
	     *   return key + value;
	     * });
	     * // => { 'a1': 1, 'b2': 2 }
	     */
	    var mapKeys = createObjectMapper(true);

	    /**
	     * Creates an object with the same keys as `object` and values generated by
	     * running each own enumerable property of `object` through `iteratee`. The
	     * iteratee function is bound to `thisArg` and invoked with three arguments:
	     * (value, key, object).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the new mapped object.
	     * @example
	     *
	     * _.mapValues({ 'a': 1, 'b': 2 }, function(n) {
	     *   return n * 3;
	     * });
	     * // => { 'a': 3, 'b': 6 }
	     *
	     * var users = {
	     *   'fred':    { 'user': 'fred',    'age': 40 },
	     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	     * };
	     *
	     * // using the `_.property` callback shorthand
	     * _.mapValues(users, 'age');
	     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	     */
	    var mapValues = createObjectMapper();

	    /**
	     * The opposite of `_.pick`; this method creates an object composed of the
	     * own and inherited enumerable properties of `object` that are not omitted.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function|...(string|string[])} [predicate] The function invoked per
	     *  iteration or property names to omit, specified as individual property
	     *  names or arrays of property names.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.omit(object, 'age');
	     * // => { 'user': 'fred' }
	     *
	     * _.omit(object, _.isNumber);
	     * // => { 'user': 'fred' }
	     */
	    var omit = restParam(function(object, props) {
	      if (object == null) {
	        return {};
	      }
	      if (typeof props[0] != 'function') {
	        var props = arrayMap(baseFlatten(props), String);
	        return pickByArray(object, baseDifference(keysIn(object), props));
	      }
	      var predicate = bindCallback(props[0], props[1], 3);
	      return pickByCallback(object, function(value, key, object) {
	        return !predicate(value, key, object);
	      });
	    });

	    /**
	     * Creates a two dimensional array of the key-value pairs for `object`,
	     * e.g. `[[key1, value1], [key2, value2]]`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the new array of key-value pairs.
	     * @example
	     *
	     * _.pairs({ 'barney': 36, 'fred': 40 });
	     * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
	     */
	    function pairs(object) {
	      object = toObject(object);

	      var index = -1,
	          props = keys(object),
	          length = props.length,
	          result = Array(length);

	      while (++index < length) {
	        var key = props[index];
	        result[index] = [key, object[key]];
	      }
	      return result;
	    }

	    /**
	     * Creates an object composed of the picked `object` properties. Property
	     * names may be specified as individual arguments or as arrays of property
	     * names. If `predicate` is provided it is invoked for each property of `object`
	     * picking the properties `predicate` returns truthy for. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, key, object).
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function|...(string|string[])} [predicate] The function invoked per
	     *  iteration or property names to pick, specified as individual property
	     *  names or arrays of property names.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.pick(object, 'user');
	     * // => { 'user': 'fred' }
	     *
	     * _.pick(object, _.isString);
	     * // => { 'user': 'fred' }
	     */
	    var pick = restParam(function(object, props) {
	      if (object == null) {
	        return {};
	      }
	      return typeof props[0] == 'function'
	        ? pickByCallback(object, bindCallback(props[0], props[1], 3))
	        : pickByArray(object, baseFlatten(props));
	    });

	    /**
	     * This method is like `_.get` except that if the resolved value is a function
	     * it is invoked with the `this` binding of its parent object and its result
	     * is returned.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to resolve.
	     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
	     *
	     * _.result(object, 'a[0].b.c1');
	     * // => 3
	     *
	     * _.result(object, 'a[0].b.c2');
	     * // => 4
	     *
	     * _.result(object, 'a.b.c', 'default');
	     * // => 'default'
	     *
	     * _.result(object, 'a.b.c', _.constant('default'));
	     * // => 'default'
	     */
	    function result(object, path, defaultValue) {
	      var result = object == null ? undefined : object[path];
	      if (result === undefined) {
	        if (object != null && !isKey(path, object)) {
	          path = toPath(path);
	          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	          result = object == null ? undefined : object[last(path)];
	        }
	        result = result === undefined ? defaultValue : result;
	      }
	      return isFunction(result) ? result.call(object) : result;
	    }

	    /**
	     * Sets the property value of `path` on `object`. If a portion of `path`
	     * does not exist it is created.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to augment.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.set(object, 'a[0].b.c', 4);
	     * console.log(object.a[0].b.c);
	     * // => 4
	     *
	     * _.set(object, 'x[0].y.z', 5);
	     * console.log(object.x[0].y.z);
	     * // => 5
	     */
	    function set(object, path, value) {
	      if (object == null) {
	        return object;
	      }
	      var pathKey = (path + '');
	      path = (object[pathKey] != null || isKey(path, object)) ? [pathKey] : toPath(path);

	      var index = -1,
	          length = path.length,
	          lastIndex = length - 1,
	          nested = object;

	      while (nested != null && ++index < length) {
	        var key = path[index];
	        if (isObject(nested)) {
	          if (index == lastIndex) {
	            nested[key] = value;
	          } else if (nested[key] == null) {
	            nested[key] = isIndex(path[index + 1]) ? [] : {};
	          }
	        }
	        nested = nested[key];
	      }
	      return object;
	    }

	    /**
	     * An alternative to `_.reduce`; this method transforms `object` to a new
	     * `accumulator` object which is the result of running each of its own enumerable
	     * properties through `iteratee`, with each invocation potentially mutating
	     * the `accumulator` object. The `iteratee` is bound to `thisArg` and invoked
	     * with four arguments: (accumulator, value, key, object). Iteratee functions
	     * may exit iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Array|Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The custom accumulator value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.transform([2, 3, 4], function(result, n) {
	     *   result.push(n *= n);
	     *   return n % 2 == 0;
	     * });
	     * // => [4, 9]
	     *
	     * _.transform({ 'a': 1, 'b': 2 }, function(result, n, key) {
	     *   result[key] = n * 3;
	     * });
	     * // => { 'a': 3, 'b': 6 }
	     */
	    function transform(object, iteratee, accumulator, thisArg) {
	      var isArr = isArray(object) || isTypedArray(object);
	      iteratee = getCallback(iteratee, thisArg, 4);

	      if (accumulator == null) {
	        if (isArr || isObject(object)) {
	          var Ctor = object.constructor;
	          if (isArr) {
	            accumulator = isArray(object) ? new Ctor : [];
	          } else {
	            accumulator = baseCreate(isFunction(Ctor) ? Ctor.prototype : undefined);
	          }
	        } else {
	          accumulator = {};
	        }
	      }
	      (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
	        return iteratee(accumulator, value, index, object);
	      });
	      return accumulator;
	    }

	    /**
	     * Creates an array of the own enumerable property values of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.values(new Foo);
	     * // => [1, 2] (iteration order is not guaranteed)
	     *
	     * _.values('hi');
	     * // => ['h', 'i']
	     */
	    function values(object) {
	      return baseValues(object, keys(object));
	    }

	    /**
	     * Creates an array of the own and inherited enumerable property values
	     * of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.valuesIn(new Foo);
	     * // => [1, 2, 3] (iteration order is not guaranteed)
	     */
	    function valuesIn(object) {
	      return baseValues(object, keysIn(object));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Checks if `n` is between `start` and up to but not including, `end`. If
	     * `end` is not specified it is set to `start` with `start` then set to `0`.
	     *
	     * @static
	     * @memberOf _
	     * @category Number
	     * @param {number} n The number to check.
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `n` is in the range, else `false`.
	     * @example
	     *
	     * _.inRange(3, 2, 4);
	     * // => true
	     *
	     * _.inRange(4, 8);
	     * // => true
	     *
	     * _.inRange(4, 2);
	     * // => false
	     *
	     * _.inRange(2, 2);
	     * // => false
	     *
	     * _.inRange(1.2, 2);
	     * // => true
	     *
	     * _.inRange(5.2, 4);
	     * // => false
	     */
	    function inRange(value, start, end) {
	      start = +start || 0;
	      if (end === undefined) {
	        end = start;
	        start = 0;
	      } else {
	        end = +end || 0;
	      }
	      return value >= nativeMin(start, end) && value < nativeMax(start, end);
	    }

	    /**
	     * Produces a random number between `min` and `max` (inclusive). If only one
	     * argument is provided a number between `0` and the given number is returned.
	     * If `floating` is `true`, or either `min` or `max` are floats, a floating-point
	     * number is returned instead of an integer.
	     *
	     * @static
	     * @memberOf _
	     * @category Number
	     * @param {number} [min=0] The minimum possible value.
	     * @param {number} [max=1] The maximum possible value.
	     * @param {boolean} [floating] Specify returning a floating-point number.
	     * @returns {number} Returns the random number.
	     * @example
	     *
	     * _.random(0, 5);
	     * // => an integer between 0 and 5
	     *
	     * _.random(5);
	     * // => also an integer between 0 and 5
	     *
	     * _.random(5, true);
	     * // => a floating-point number between 0 and 5
	     *
	     * _.random(1.2, 5.2);
	     * // => a floating-point number between 1.2 and 5.2
	     */
	    function random(min, max, floating) {
	      if (floating && isIterateeCall(min, max, floating)) {
	        max = floating = undefined;
	      }
	      var noMin = min == null,
	          noMax = max == null;

	      if (floating == null) {
	        if (noMax && typeof min == 'boolean') {
	          floating = min;
	          min = 1;
	        }
	        else if (typeof max == 'boolean') {
	          floating = max;
	          noMax = true;
	        }
	      }
	      if (noMin && noMax) {
	        max = 1;
	        noMax = false;
	      }
	      min = +min || 0;
	      if (noMax) {
	        max = min;
	        min = 0;
	      } else {
	        max = +max || 0;
	      }
	      if (floating || min % 1 || max % 1) {
	        var rand = nativeRandom();
	        return nativeMin(min + (rand * (max - min + parseFloat('1e-' + ((rand + '').length - 1)))), max);
	      }
	      return baseRandom(min, max);
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the camel cased string.
	     * @example
	     *
	     * _.camelCase('Foo Bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('--foo-bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('__foo_bar__');
	     * // => 'fooBar'
	     */
	    var camelCase = createCompounder(function(result, word, index) {
	      word = word.toLowerCase();
	      return result + (index ? (word.charAt(0).toUpperCase() + word.slice(1)) : word);
	    });

	    /**
	     * Capitalizes the first character of `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to capitalize.
	     * @returns {string} Returns the capitalized string.
	     * @example
	     *
	     * _.capitalize('fred');
	     * // => 'Fred'
	     */
	    function capitalize(string) {
	      string = baseToString(string);
	      return string && (string.charAt(0).toUpperCase() + string.slice(1));
	    }

	    /**
	     * Deburrs `string` by converting [latin-1 supplementary letters](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	     * to basic latin letters and removing [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to deburr.
	     * @returns {string} Returns the deburred string.
	     * @example
	     *
	     * _.deburr('déjà vu');
	     * // => 'deja vu'
	     */
	    function deburr(string) {
	      string = baseToString(string);
	      return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
	    }

	    /**
	     * Checks if `string` ends with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to search.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=string.length] The position to search from.
	     * @returns {boolean} Returns `true` if `string` ends with `target`, else `false`.
	     * @example
	     *
	     * _.endsWith('abc', 'c');
	     * // => true
	     *
	     * _.endsWith('abc', 'b');
	     * // => false
	     *
	     * _.endsWith('abc', 'b', 2);
	     * // => true
	     */
	    function endsWith(string, target, position) {
	      string = baseToString(string);
	      target = (target + '');

	      var length = string.length;
	      position = position === undefined
	        ? length
	        : nativeMin(position < 0 ? 0 : (+position || 0), length);

	      position -= target.length;
	      return position >= 0 && string.indexOf(target, position) == position;
	    }

	    /**
	     * Converts the characters "&", "<", ">", '"', "'", and "\`", in `string` to
	     * their corresponding HTML entities.
	     *
	     * **Note:** No other characters are escaped. To escape additional characters
	     * use a third-party library like [_he_](https://mths.be/he).
	     *
	     * Though the ">" character is escaped for symmetry, characters like
	     * ">" and "/" don't need escaping in HTML and have no special meaning
	     * unless they're part of a tag or unquoted attribute value.
	     * See [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
	     * (under "semi-related fun fact") for more details.
	     *
	     * Backticks are escaped because in Internet Explorer < 9, they can break out
	     * of attribute values or HTML comments. See [#59](https://html5sec.org/#59),
	     * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
	     * [#133](https://html5sec.org/#133) of the [HTML5 Security Cheatsheet](https://html5sec.org/)
	     * for more details.
	     *
	     * When working with HTML you should always [quote attribute values](http://wonko.com/post/html-escaping)
	     * to reduce XSS vectors.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escape('fred, barney, & pebbles');
	     * // => 'fred, barney, &amp; pebbles'
	     */
	    function escape(string) {
	      // Reset `lastIndex` because in IE < 9 `String#replace` does not.
	      string = baseToString(string);
	      return (string && reHasUnescapedHtml.test(string))
	        ? string.replace(reUnescapedHtml, escapeHtmlChar)
	        : string;
	    }

	    /**
	     * Escapes the `RegExp` special characters "\", "/", "^", "$", ".", "|", "?",
	     * "*", "+", "(", ")", "[", "]", "{" and "}" in `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escapeRegExp('[lodash](https://lodash.com/)');
	     * // => '\[lodash\]\(https:\/\/lodash\.com\/\)'
	     */
	    function escapeRegExp(string) {
	      string = baseToString(string);
	      return (string && reHasRegExpChars.test(string))
	        ? string.replace(reRegExpChars, escapeRegExpChar)
	        : (string || '(?:)');
	    }

	    /**
	     * Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the kebab cased string.
	     * @example
	     *
	     * _.kebabCase('Foo Bar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('fooBar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('__foo_bar__');
	     * // => 'foo-bar'
	     */
	    var kebabCase = createCompounder(function(result, word, index) {
	      return result + (index ? '-' : '') + word.toLowerCase();
	    });

	    /**
	     * Pads `string` on the left and right sides if it's shorter than `length`.
	     * Padding characters are truncated if they can't be evenly divided by `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.pad('abc', 8);
	     * // => '  abc   '
	     *
	     * _.pad('abc', 8, '_-');
	     * // => '_-abc_-_'
	     *
	     * _.pad('abc', 3);
	     * // => 'abc'
	     */
	    function pad(string, length, chars) {
	      string = baseToString(string);
	      length = +length;

	      var strLength = string.length;
	      if (strLength >= length || !nativeIsFinite(length)) {
	        return string;
	      }
	      var mid = (length - strLength) / 2,
	          leftLength = nativeFloor(mid),
	          rightLength = nativeCeil(mid);

	      chars = createPadding('', rightLength, chars);
	      return chars.slice(0, leftLength) + string + chars;
	    }

	    /**
	     * Pads `string` on the left side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padLeft('abc', 6);
	     * // => '   abc'
	     *
	     * _.padLeft('abc', 6, '_-');
	     * // => '_-_abc'
	     *
	     * _.padLeft('abc', 3);
	     * // => 'abc'
	     */
	    var padLeft = createPadDir();

	    /**
	     * Pads `string` on the right side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padRight('abc', 6);
	     * // => 'abc   '
	     *
	     * _.padRight('abc', 6, '_-');
	     * // => 'abc_-_'
	     *
	     * _.padRight('abc', 3);
	     * // => 'abc'
	     */
	    var padRight = createPadDir(true);

	    /**
	     * Converts `string` to an integer of the specified radix. If `radix` is
	     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a hexadecimal,
	     * in which case a `radix` of `16` is used.
	     *
	     * **Note:** This method aligns with the [ES5 implementation](https://es5.github.io/#E)
	     * of `parseInt`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} string The string to convert.
	     * @param {number} [radix] The radix to interpret `value` by.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.parseInt('08');
	     * // => 8
	     *
	     * _.map(['6', '08', '10'], _.parseInt);
	     * // => [6, 8, 10]
	     */
	    function parseInt(string, radix, guard) {
	      // Firefox < 21 and Opera < 15 follow ES3 for `parseInt`.
	      // Chrome fails to trim leading <BOM> whitespace characters.
	      // See https://code.google.com/p/v8/issues/detail?id=3109 for more details.
	      if (guard ? isIterateeCall(string, radix, guard) : radix == null) {
	        radix = 0;
	      } else if (radix) {
	        radix = +radix;
	      }
	      string = trim(string);
	      return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
	    }

	    /**
	     * Repeats the given string `n` times.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to repeat.
	     * @param {number} [n=0] The number of times to repeat the string.
	     * @returns {string} Returns the repeated string.
	     * @example
	     *
	     * _.repeat('*', 3);
	     * // => '***'
	     *
	     * _.repeat('abc', 2);
	     * // => 'abcabc'
	     *
	     * _.repeat('abc', 0);
	     * // => ''
	     */
	    function repeat(string, n) {
	      var result = '';
	      string = baseToString(string);
	      n = +n;
	      if (n < 1 || !string || !nativeIsFinite(n)) {
	        return result;
	      }
	      // Leverage the exponentiation by squaring algorithm for a faster repeat.
	      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
	      do {
	        if (n % 2) {
	          result += string;
	        }
	        n = nativeFloor(n / 2);
	        string += string;
	      } while (n);

	      return result;
	    }

	    /**
	     * Converts `string` to [snake case](https://en.wikipedia.org/wiki/Snake_case).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the snake cased string.
	     * @example
	     *
	     * _.snakeCase('Foo Bar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('fooBar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('--foo-bar');
	     * // => 'foo_bar'
	     */
	    var snakeCase = createCompounder(function(result, word, index) {
	      return result + (index ? '_' : '') + word.toLowerCase();
	    });

	    /**
	     * Converts `string` to [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the start cased string.
	     * @example
	     *
	     * _.startCase('--foo-bar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('fooBar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('__foo_bar__');
	     * // => 'Foo Bar'
	     */
	    var startCase = createCompounder(function(result, word, index) {
	      return result + (index ? ' ' : '') + (word.charAt(0).toUpperCase() + word.slice(1));
	    });

	    /**
	     * Checks if `string` starts with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to search.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=0] The position to search from.
	     * @returns {boolean} Returns `true` if `string` starts with `target`, else `false`.
	     * @example
	     *
	     * _.startsWith('abc', 'a');
	     * // => true
	     *
	     * _.startsWith('abc', 'b');
	     * // => false
	     *
	     * _.startsWith('abc', 'b', 1);
	     * // => true
	     */
	    function startsWith(string, target, position) {
	      string = baseToString(string);
	      position = position == null
	        ? 0
	        : nativeMin(position < 0 ? 0 : (+position || 0), string.length);

	      return string.lastIndexOf(target, position) == position;
	    }

	    /**
	     * Creates a compiled template function that can interpolate data properties
	     * in "interpolate" delimiters, HTML-escape interpolated data properties in
	     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
	     * properties may be accessed as free variables in the template. If a setting
	     * object is provided it takes precedence over `_.templateSettings` values.
	     *
	     * **Note:** In the development build `_.template` utilizes
	     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
	     * for easier debugging.
	     *
	     * For more information on precompiling templates see
	     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
	     *
	     * For more information on Chrome extension sandboxes see
	     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The template string.
	     * @param {Object} [options] The options object.
	     * @param {RegExp} [options.escape] The HTML "escape" delimiter.
	     * @param {RegExp} [options.evaluate] The "evaluate" delimiter.
	     * @param {Object} [options.imports] An object to import into the template as free variables.
	     * @param {RegExp} [options.interpolate] The "interpolate" delimiter.
	     * @param {string} [options.sourceURL] The sourceURL of the template's compiled source.
	     * @param {string} [options.variable] The data object variable name.
	     * @param- {Object} [otherOptions] Enables the legacy `options` param signature.
	     * @returns {Function} Returns the compiled template function.
	     * @example
	     *
	     * // using the "interpolate" delimiter to create a compiled template
	     * var compiled = _.template('hello <%= user %>!');
	     * compiled({ 'user': 'fred' });
	     * // => 'hello fred!'
	     *
	     * // using the HTML "escape" delimiter to escape data property values
	     * var compiled = _.template('<b><%- value %></b>');
	     * compiled({ 'value': '<script>' });
	     * // => '<b>&lt;script&gt;</b>'
	     *
	     * // using the "evaluate" delimiter to execute JavaScript and generate HTML
	     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // using the internal `print` function in "evaluate" delimiters
	     * var compiled = _.template('<% print("hello " + user); %>!');
	     * compiled({ 'user': 'barney' });
	     * // => 'hello barney!'
	     *
	     * // using the ES delimiter as an alternative to the default "interpolate" delimiter
	     * var compiled = _.template('hello ${ user }!');
	     * compiled({ 'user': 'pebbles' });
	     * // => 'hello pebbles!'
	     *
	     * // using custom template delimiters
	     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
	     * var compiled = _.template('hello {{ user }}!');
	     * compiled({ 'user': 'mustache' });
	     * // => 'hello mustache!'
	     *
	     * // using backslashes to treat delimiters as plain text
	     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
	     * compiled({ 'value': 'ignored' });
	     * // => '<%- value %>'
	     *
	     * // using the `imports` option to import `jQuery` as `jq`
	     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
	     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // using the `sourceURL` option to specify a custom sourceURL for the template
	     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
	     * compiled(data);
	     * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
	     *
	     * // using the `variable` option to ensure a with-statement isn't used in the compiled template
	     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
	     * compiled.source;
	     * // => function(data) {
	     * //   var __t, __p = '';
	     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
	     * //   return __p;
	     * // }
	     *
	     * // using the `source` property to inline compiled templates for meaningful
	     * // line numbers in error messages and a stack trace
	     * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
	     *   var JST = {\
	     *     "main": ' + _.template(mainText).source + '\
	     *   };\
	     * ');
	     */
	    function template(string, options, otherOptions) {
	      // Based on John Resig's `tmpl` implementation (http://ejohn.org/blog/javascript-micro-templating/)
	      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
	      var settings = lodash.templateSettings;

	      if (otherOptions && isIterateeCall(string, options, otherOptions)) {
	        options = otherOptions = undefined;
	      }
	      string = baseToString(string);
	      options = assignWith(baseAssign({}, otherOptions || options), settings, assignOwnDefaults);

	      var imports = assignWith(baseAssign({}, options.imports), settings.imports, assignOwnDefaults),
	          importsKeys = keys(imports),
	          importsValues = baseValues(imports, importsKeys);

	      var isEscaping,
	          isEvaluating,
	          index = 0,
	          interpolate = options.interpolate || reNoMatch,
	          source = "__p += '";

	      // Compile the regexp to match each delimiter.
	      var reDelimiters = RegExp(
	        (options.escape || reNoMatch).source + '|' +
	        interpolate.source + '|' +
	        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
	        (options.evaluate || reNoMatch).source + '|$'
	      , 'g');

	      // Use a sourceURL for easier debugging.
	      var sourceURL = '//# sourceURL=' +
	        ('sourceURL' in options
	          ? options.sourceURL
	          : ('lodash.templateSources[' + (++templateCounter) + ']')
	        ) + '\n';

	      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
	        interpolateValue || (interpolateValue = esTemplateValue);

	        // Escape characters that can't be included in string literals.
	        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

	        // Replace delimiters with snippets.
	        if (escapeValue) {
	          isEscaping = true;
	          source += "' +\n__e(" + escapeValue + ") +\n'";
	        }
	        if (evaluateValue) {
	          isEvaluating = true;
	          source += "';\n" + evaluateValue + ";\n__p += '";
	        }
	        if (interpolateValue) {
	          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
	        }
	        index = offset + match.length;

	        // The JS engine embedded in Adobe products requires returning the `match`
	        // string in order to produce the correct `offset` value.
	        return match;
	      });

	      source += "';\n";

	      // If `variable` is not specified wrap a with-statement around the generated
	      // code to add the data object to the top of the scope chain.
	      var variable = options.variable;
	      if (!variable) {
	        source = 'with (obj) {\n' + source + '\n}\n';
	      }
	      // Cleanup code by stripping empty strings.
	      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
	        .replace(reEmptyStringMiddle, '$1')
	        .replace(reEmptyStringTrailing, '$1;');

	      // Frame code as the function body.
	      source = 'function(' + (variable || 'obj') + ') {\n' +
	        (variable
	          ? ''
	          : 'obj || (obj = {});\n'
	        ) +
	        "var __t, __p = ''" +
	        (isEscaping
	           ? ', __e = _.escape'
	           : ''
	        ) +
	        (isEvaluating
	          ? ', __j = Array.prototype.join;\n' +
	            "function print() { __p += __j.call(arguments, '') }\n"
	          : ';\n'
	        ) +
	        source +
	        'return __p\n}';

	      var result = attempt(function() {
	        return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
	      });

	      // Provide the compiled function's source by its `toString` method or
	      // the `source` property as a convenience for inlining compiled templates.
	      result.source = source;
	      if (isError(result)) {
	        throw result;
	      }
	      return result;
	    }

	    /**
	     * Removes leading and trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trim('  abc  ');
	     * // => 'abc'
	     *
	     * _.trim('-_-abc-_-', '_-');
	     * // => 'abc'
	     *
	     * _.map(['  foo  ', '  bar  '], _.trim);
	     * // => ['foo', 'bar']
	     */
	    function trim(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
	      }
	      chars = (chars + '');
	      return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
	    }

	    /**
	     * Removes leading whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimLeft('  abc  ');
	     * // => 'abc  '
	     *
	     * _.trimLeft('-_-abc-_-', '_-');
	     * // => 'abc-_-'
	     */
	    function trimLeft(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(trimmedLeftIndex(string));
	      }
	      return string.slice(charsLeftIndex(string, (chars + '')));
	    }

	    /**
	     * Removes trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimRight('  abc  ');
	     * // => '  abc'
	     *
	     * _.trimRight('-_-abc-_-', '_-');
	     * // => '-_-abc'
	     */
	    function trimRight(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(0, trimmedRightIndex(string) + 1);
	      }
	      return string.slice(0, charsRightIndex(string, (chars + '')) + 1);
	    }

	    /**
	     * Truncates `string` if it's longer than the given maximum string length.
	     * The last characters of the truncated string are replaced with the omission
	     * string which defaults to "...".
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to truncate.
	     * @param {Object|number} [options] The options object or maximum string length.
	     * @param {number} [options.length=30] The maximum string length.
	     * @param {string} [options.omission='...'] The string to indicate text is omitted.
	     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the truncated string.
	     * @example
	     *
	     * _.trunc('hi-diddly-ho there, neighborino');
	     * // => 'hi-diddly-ho there, neighbo...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', 24);
	     * // => 'hi-diddly-ho there, n...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': ' '
	     * });
	     * // => 'hi-diddly-ho there,...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': /,? +/
	     * });
	     * // => 'hi-diddly-ho there...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'omission': ' [...]'
	     * });
	     * // => 'hi-diddly-ho there, neig [...]'
	     */
	    function trunc(string, options, guard) {
	      if (guard && isIterateeCall(string, options, guard)) {
	        options = undefined;
	      }
	      var length = DEFAULT_TRUNC_LENGTH,
	          omission = DEFAULT_TRUNC_OMISSION;

	      if (options != null) {
	        if (isObject(options)) {
	          var separator = 'separator' in options ? options.separator : separator;
	          length = 'length' in options ? (+options.length || 0) : length;
	          omission = 'omission' in options ? baseToString(options.omission) : omission;
	        } else {
	          length = +options || 0;
	        }
	      }
	      string = baseToString(string);
	      if (length >= string.length) {
	        return string;
	      }
	      var end = length - omission.length;
	      if (end < 1) {
	        return omission;
	      }
	      var result = string.slice(0, end);
	      if (separator == null) {
	        return result + omission;
	      }
	      if (isRegExp(separator)) {
	        if (string.slice(end).search(separator)) {
	          var match,
	              newEnd,
	              substring = string.slice(0, end);

	          if (!separator.global) {
	            separator = RegExp(separator.source, (reFlags.exec(separator) || '') + 'g');
	          }
	          separator.lastIndex = 0;
	          while ((match = separator.exec(substring))) {
	            newEnd = match.index;
	          }
	          result = result.slice(0, newEnd == null ? end : newEnd);
	        }
	      } else if (string.indexOf(separator, end) != end) {
	        var index = result.lastIndexOf(separator);
	        if (index > -1) {
	          result = result.slice(0, index);
	        }
	      }
	      return result + omission;
	    }

	    /**
	     * The inverse of `_.escape`; this method converts the HTML entities
	     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to their
	     * corresponding characters.
	     *
	     * **Note:** No other HTML entities are unescaped. To unescape additional HTML
	     * entities use a third-party library like [_he_](https://mths.be/he).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to unescape.
	     * @returns {string} Returns the unescaped string.
	     * @example
	     *
	     * _.unescape('fred, barney, &amp; pebbles');
	     * // => 'fred, barney, & pebbles'
	     */
	    function unescape(string) {
	      string = baseToString(string);
	      return (string && reHasEscapedHtml.test(string))
	        ? string.replace(reEscapedHtml, unescapeHtmlChar)
	        : string;
	    }

	    /**
	     * Splits `string` into an array of its words.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {RegExp|string} [pattern] The pattern to match words.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the words of `string`.
	     * @example
	     *
	     * _.words('fred, barney, & pebbles');
	     * // => ['fred', 'barney', 'pebbles']
	     *
	     * _.words('fred, barney, & pebbles', /[^, ]+/g);
	     * // => ['fred', 'barney', '&', 'pebbles']
	     */
	    function words(string, pattern, guard) {
	      if (guard && isIterateeCall(string, pattern, guard)) {
	        pattern = undefined;
	      }
	      string = baseToString(string);
	      return string.match(pattern || reWords) || [];
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Attempts to invoke `func`, returning either the result or the caught error
	     * object. Any additional arguments are provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Function} func The function to attempt.
	     * @returns {*} Returns the `func` result or error object.
	     * @example
	     *
	     * // avoid throwing errors for invalid selectors
	     * var elements = _.attempt(function(selector) {
	     *   return document.querySelectorAll(selector);
	     * }, '>_>');
	     *
	     * if (_.isError(elements)) {
	     *   elements = [];
	     * }
	     */
	    var attempt = restParam(function(func, args) {
	      try {
	        return func.apply(undefined, args);
	      } catch(e) {
	        return isError(e) ? e : new Error(e);
	      }
	    });

	    /**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and arguments of the created function. If `func` is a property name the
	     * created callback returns the property value for a given element. If `func`
	     * is an object the created callback returns `true` for elements that contain
	     * the equivalent object properties, otherwise it returns `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias iteratee
	     * @category Utility
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the callback.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // wrap to create custom callback shorthands
	     * _.callback = _.wrap(_.callback, function(callback, func, thisArg) {
	     *   var match = /^(.+?)__([gl]t)(.+)$/.exec(func);
	     *   if (!match) {
	     *     return callback(func, thisArg);
	     *   }
	     *   return function(object) {
	     *     return match[2] == 'gt'
	     *       ? object[match[1]] > match[3]
	     *       : object[match[1]] < match[3];
	     *   };
	     * });
	     *
	     * _.filter(users, 'age__gt36');
	     * // => [{ 'user': 'fred', 'age': 40 }]
	     */
	    function callback(func, thisArg, guard) {
	      if (guard && isIterateeCall(func, thisArg, guard)) {
	        thisArg = undefined;
	      }
	      return isObjectLike(func)
	        ? matches(func)
	        : baseCallback(func, thisArg);
	    }

	    /**
	     * Creates a function that returns `value`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {*} value The value to return from the new function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     * var getter = _.constant(object);
	     *
	     * getter() === object;
	     * // => true
	     */
	    function constant(value) {
	      return function() {
	        return value;
	      };
	    }

	    /**
	     * This method returns the first argument provided to it.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {*} value Any value.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * _.identity(object) === object;
	     * // => true
	     */
	    function identity(value) {
	      return value;
	    }

	    /**
	     * Creates a function that performs a deep comparison between a given object
	     * and `source`, returning `true` if the given object has equivalent property
	     * values, else `false`.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.filter(users, _.matches({ 'age': 40, 'active': false }));
	     * // => [{ 'user': 'fred', 'age': 40, 'active': false }]
	     */
	    function matches(source) {
	      return baseMatches(baseClone(source, true));
	    }

	    /**
	     * Creates a function that compares the property value of `path` on a given
	     * object to `value`.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * _.find(users, _.matchesProperty('user', 'fred'));
	     * // => { 'user': 'fred' }
	     */
	    function matchesProperty(path, srcValue) {
	      return baseMatchesProperty(path, baseClone(srcValue, true));
	    }

	    /**
	     * Creates a function that invokes the method at `path` on a given object.
	     * Any additional arguments are provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': { 'c': _.constant(2) } } },
	     *   { 'a': { 'b': { 'c': _.constant(1) } } }
	     * ];
	     *
	     * _.map(objects, _.method('a.b.c'));
	     * // => [2, 1]
	     *
	     * _.invoke(_.sortBy(objects, _.method(['a', 'b', 'c'])), 'a.b.c');
	     * // => [1, 2]
	     */
	    var method = restParam(function(path, args) {
	      return function(object) {
	        return invokePath(object, path, args);
	      };
	    });

	    /**
	     * The opposite of `_.method`; this method creates a function that invokes
	     * the method at a given path on `object`. Any additional arguments are
	     * provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} object The object to query.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var array = _.times(3, _.constant),
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
	     * // => [2, 0]
	     */
	    var methodOf = restParam(function(object, args) {
	      return function(path) {
	        return invokePath(object, path, args);
	      };
	    });

	    /**
	     * Adds all own enumerable function properties of a source object to the
	     * destination object. If `object` is a function then methods are added to
	     * its prototype as well.
	     *
	     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
	     * avoid conflicts caused by modifying the original.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Function|Object} [object=lodash] The destination object.
	     * @param {Object} source The object of functions to add.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.chain=true] Specify whether the functions added
	     *  are chainable.
	     * @returns {Function|Object} Returns `object`.
	     * @example
	     *
	     * function vowels(string) {
	     *   return _.filter(string, function(v) {
	     *     return /[aeiou]/i.test(v);
	     *   });
	     * }
	     *
	     * _.mixin({ 'vowels': vowels });
	     * _.vowels('fred');
	     * // => ['e']
	     *
	     * _('fred').vowels().value();
	     * // => ['e']
	     *
	     * _.mixin({ 'vowels': vowels }, { 'chain': false });
	     * _('fred').vowels();
	     * // => ['e']
	     */
	    function mixin(object, source, options) {
	      if (options == null) {
	        var isObj = isObject(source),
	            props = isObj ? keys(source) : undefined,
	            methodNames = (props && props.length) ? baseFunctions(source, props) : undefined;

	        if (!(methodNames ? methodNames.length : isObj)) {
	          methodNames = false;
	          options = source;
	          source = object;
	          object = this;
	        }
	      }
	      if (!methodNames) {
	        methodNames = baseFunctions(source, keys(source));
	      }
	      var chain = true,
	          index = -1,
	          isFunc = isFunction(object),
	          length = methodNames.length;

	      if (options === false) {
	        chain = false;
	      } else if (isObject(options) && 'chain' in options) {
	        chain = options.chain;
	      }
	      while (++index < length) {
	        var methodName = methodNames[index],
	            func = source[methodName];

	        object[methodName] = func;
	        if (isFunc) {
	          object.prototype[methodName] = (function(func) {
	            return function() {
	              var chainAll = this.__chain__;
	              if (chain || chainAll) {
	                var result = object(this.__wrapped__),
	                    actions = result.__actions__ = arrayCopy(this.__actions__);

	                actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
	                result.__chain__ = chainAll;
	                return result;
	              }
	              return func.apply(object, arrayPush([this.value()], arguments));
	            };
	          }(func));
	        }
	      }
	      return object;
	    }

	    /**
	     * Reverts the `_` variable to its previous value and returns a reference to
	     * the `lodash` function.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @returns {Function} Returns the `lodash` function.
	     * @example
	     *
	     * var lodash = _.noConflict();
	     */
	    function noConflict() {
	      root._ = oldDash;
	      return this;
	    }

	    /**
	     * A no-operation function that returns `undefined` regardless of the
	     * arguments it receives.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * _.noop(object) === undefined;
	     * // => true
	     */
	    function noop() {
	      // No operation performed.
	    }

	    /**
	     * Creates a function that returns the property value at `path` on a
	     * given object.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': { 'c': 2 } } },
	     *   { 'a': { 'b': { 'c': 1 } } }
	     * ];
	     *
	     * _.map(objects, _.property('a.b.c'));
	     * // => [2, 1]
	     *
	     * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	     * // => [1, 2]
	     */
	    function property(path) {
	      return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	    }

	    /**
	     * The opposite of `_.property`; this method creates a function that returns
	     * the property value at a given path on `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} object The object to query.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var array = [0, 1, 2],
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
	     * // => [2, 0]
	     */
	    function propertyOf(object) {
	      return function(path) {
	        return baseGet(object, toPath(path), path + '');
	      };
	    }

	    /**
	     * Creates an array of numbers (positive and/or negative) progressing from
	     * `start` up to, but not including, `end`. If `end` is not specified it is
	     * set to `start` with `start` then set to `0`. If `end` is less than `start`
	     * a zero-length range is created unless a negative `step` is specified.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} [step=1] The value to increment or decrement by.
	     * @returns {Array} Returns the new array of numbers.
	     * @example
	     *
	     * _.range(4);
	     * // => [0, 1, 2, 3]
	     *
	     * _.range(1, 5);
	     * // => [1, 2, 3, 4]
	     *
	     * _.range(0, 20, 5);
	     * // => [0, 5, 10, 15]
	     *
	     * _.range(0, -4, -1);
	     * // => [0, -1, -2, -3]
	     *
	     * _.range(1, 4, 0);
	     * // => [1, 1, 1]
	     *
	     * _.range(0);
	     * // => []
	     */
	    function range(start, end, step) {
	      if (step && isIterateeCall(start, end, step)) {
	        end = step = undefined;
	      }
	      start = +start || 0;
	      step = step == null ? 1 : (+step || 0);

	      if (end == null) {
	        end = start;
	        start = 0;
	      } else {
	        end = +end || 0;
	      }
	      // Use `Array(length)` so engines like Chakra and V8 avoid slower modes.
	      // See https://youtu.be/XAqIpGU8ZZk#t=17m25s for more details.
	      var index = -1,
	          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
	          result = Array(length);

	      while (++index < length) {
	        result[index] = start;
	        start += step;
	      }
	      return result;
	    }

	    /**
	     * Invokes the iteratee function `n` times, returning an array of the results
	     * of each invocation. The `iteratee` is bound to `thisArg` and invoked with
	     * one argument; (index).
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {number} n The number of times to invoke `iteratee`.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * var diceRolls = _.times(3, _.partial(_.random, 1, 6, false));
	     * // => [3, 6, 4]
	     *
	     * _.times(3, function(n) {
	     *   mage.castSpell(n);
	     * });
	     * // => invokes `mage.castSpell(n)` three times with `n` of `0`, `1`, and `2`
	     *
	     * _.times(3, function(n) {
	     *   this.cast(n);
	     * }, mage);
	     * // => also invokes `mage.castSpell(n)` three times
	     */
	    function times(n, iteratee, thisArg) {
	      n = nativeFloor(n);

	      // Exit early to avoid a JSC JIT bug in Safari 8
	      // where `Array(0)` is treated as `Array(1)`.
	      if (n < 1 || !nativeIsFinite(n)) {
	        return [];
	      }
	      var index = -1,
	          result = Array(nativeMin(n, MAX_ARRAY_LENGTH));

	      iteratee = bindCallback(iteratee, thisArg, 1);
	      while (++index < n) {
	        if (index < MAX_ARRAY_LENGTH) {
	          result[index] = iteratee(index);
	        } else {
	          iteratee(index);
	        }
	      }
	      return result;
	    }

	    /**
	     * Generates a unique ID. If `prefix` is provided the ID is appended to it.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {string} [prefix] The value to prefix the ID with.
	     * @returns {string} Returns the unique ID.
	     * @example
	     *
	     * _.uniqueId('contact_');
	     * // => 'contact_104'
	     *
	     * _.uniqueId();
	     * // => '105'
	     */
	    function uniqueId(prefix) {
	      var id = ++idCounter;
	      return baseToString(prefix) + id;
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Adds two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} augend The first number to add.
	     * @param {number} addend The second number to add.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.add(6, 4);
	     * // => 10
	     */
	    function add(augend, addend) {
	      return (+augend || 0) + (+addend || 0);
	    }

	    /**
	     * Calculates `n` rounded up to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round up.
	     * @param {number} [precision=0] The precision to round up to.
	     * @returns {number} Returns the rounded up number.
	     * @example
	     *
	     * _.ceil(4.006);
	     * // => 5
	     *
	     * _.ceil(6.004, 2);
	     * // => 6.01
	     *
	     * _.ceil(6040, -2);
	     * // => 6100
	     */
	    var ceil = createRound('ceil');

	    /**
	     * Calculates `n` rounded down to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round down.
	     * @param {number} [precision=0] The precision to round down to.
	     * @returns {number} Returns the rounded down number.
	     * @example
	     *
	     * _.floor(4.006);
	     * // => 4
	     *
	     * _.floor(0.046, 2);
	     * // => 0.04
	     *
	     * _.floor(4060, -2);
	     * // => 4000
	     */
	    var floor = createRound('floor');

	    /**
	     * Gets the maximum value of `collection`. If `collection` is empty or falsey
	     * `-Infinity` is returned. If an iteratee function is provided it is invoked
	     * for each value in `collection` to generate the criterion by which the value
	     * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the maximum value.
	     * @example
	     *
	     * _.max([4, 2, 8, 6]);
	     * // => 8
	     *
	     * _.max([]);
	     * // => -Infinity
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.max(users, function(chr) {
	     *   return chr.age;
	     * });
	     * // => { 'user': 'fred', 'age': 40 }
	     *
	     * // using the `_.property` callback shorthand
	     * _.max(users, 'age');
	     * // => { 'user': 'fred', 'age': 40 }
	     */
	    var max = createExtremum(gt, NEGATIVE_INFINITY);

	    /**
	     * Gets the minimum value of `collection`. If `collection` is empty or falsey
	     * `Infinity` is returned. If an iteratee function is provided it is invoked
	     * for each value in `collection` to generate the criterion by which the value
	     * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the minimum value.
	     * @example
	     *
	     * _.min([4, 2, 8, 6]);
	     * // => 2
	     *
	     * _.min([]);
	     * // => Infinity
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.min(users, function(chr) {
	     *   return chr.age;
	     * });
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // using the `_.property` callback shorthand
	     * _.min(users, 'age');
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var min = createExtremum(lt, POSITIVE_INFINITY);

	    /**
	     * Calculates `n` rounded to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round.
	     * @param {number} [precision=0] The precision to round to.
	     * @returns {number} Returns the rounded number.
	     * @example
	     *
	     * _.round(4.006);
	     * // => 4
	     *
	     * _.round(4.006, 2);
	     * // => 4.01
	     *
	     * _.round(4060, -2);
	     * // => 4100
	     */
	    var round = createRound('round');

	    /**
	     * Gets the sum of the values in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.sum([4, 6]);
	     * // => 10
	     *
	     * _.sum({ 'a': 4, 'b': 6 });
	     * // => 10
	     *
	     * var objects = [
	     *   { 'n': 4 },
	     *   { 'n': 6 }
	     * ];
	     *
	     * _.sum(objects, function(object) {
	     *   return object.n;
	     * });
	     * // => 10
	     *
	     * // using the `_.property` callback shorthand
	     * _.sum(objects, 'n');
	     * // => 10
	     */
	    function sum(collection, iteratee, thisArg) {
	      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	        iteratee = undefined;
	      }
	      iteratee = getCallback(iteratee, thisArg, 3);
	      return iteratee.length == 1
	        ? arraySum(isArray(collection) ? collection : toIterable(collection), iteratee)
	        : baseSum(collection, iteratee);
	    }

	    /*------------------------------------------------------------------------*/

	    // Ensure wrappers are instances of `baseLodash`.
	    lodash.prototype = baseLodash.prototype;

	    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
	    LodashWrapper.prototype.constructor = LodashWrapper;

	    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
	    LazyWrapper.prototype.constructor = LazyWrapper;

	    // Add functions to the `Map` cache.
	    MapCache.prototype['delete'] = mapDelete;
	    MapCache.prototype.get = mapGet;
	    MapCache.prototype.has = mapHas;
	    MapCache.prototype.set = mapSet;

	    // Add functions to the `Set` cache.
	    SetCache.prototype.push = cachePush;

	    // Assign cache to `_.memoize`.
	    memoize.Cache = MapCache;

	    // Add functions that return wrapped values when chaining.
	    lodash.after = after;
	    lodash.ary = ary;
	    lodash.assign = assign;
	    lodash.at = at;
	    lodash.before = before;
	    lodash.bind = bind;
	    lodash.bindAll = bindAll;
	    lodash.bindKey = bindKey;
	    lodash.callback = callback;
	    lodash.chain = chain;
	    lodash.chunk = chunk;
	    lodash.compact = compact;
	    lodash.constant = constant;
	    lodash.countBy = countBy;
	    lodash.create = create;
	    lodash.curry = curry;
	    lodash.curryRight = curryRight;
	    lodash.debounce = debounce;
	    lodash.defaults = defaults;
	    lodash.defaultsDeep = defaultsDeep;
	    lodash.defer = defer;
	    lodash.delay = delay;
	    lodash.difference = difference;
	    lodash.drop = drop;
	    lodash.dropRight = dropRight;
	    lodash.dropRightWhile = dropRightWhile;
	    lodash.dropWhile = dropWhile;
	    lodash.fill = fill;
	    lodash.filter = filter;
	    lodash.flatten = flatten;
	    lodash.flattenDeep = flattenDeep;
	    lodash.flow = flow;
	    lodash.flowRight = flowRight;
	    lodash.forEach = forEach;
	    lodash.forEachRight = forEachRight;
	    lodash.forIn = forIn;
	    lodash.forInRight = forInRight;
	    lodash.forOwn = forOwn;
	    lodash.forOwnRight = forOwnRight;
	    lodash.functions = functions;
	    lodash.groupBy = groupBy;
	    lodash.indexBy = indexBy;
	    lodash.initial = initial;
	    lodash.intersection = intersection;
	    lodash.invert = invert;
	    lodash.invoke = invoke;
	    lodash.keys = keys;
	    lodash.keysIn = keysIn;
	    lodash.map = map;
	    lodash.mapKeys = mapKeys;
	    lodash.mapValues = mapValues;
	    lodash.matches = matches;
	    lodash.matchesProperty = matchesProperty;
	    lodash.memoize = memoize;
	    lodash.merge = merge;
	    lodash.method = method;
	    lodash.methodOf = methodOf;
	    lodash.mixin = mixin;
	    lodash.modArgs = modArgs;
	    lodash.negate = negate;
	    lodash.omit = omit;
	    lodash.once = once;
	    lodash.pairs = pairs;
	    lodash.partial = partial;
	    lodash.partialRight = partialRight;
	    lodash.partition = partition;
	    lodash.pick = pick;
	    lodash.pluck = pluck;
	    lodash.property = property;
	    lodash.propertyOf = propertyOf;
	    lodash.pull = pull;
	    lodash.pullAt = pullAt;
	    lodash.range = range;
	    lodash.rearg = rearg;
	    lodash.reject = reject;
	    lodash.remove = remove;
	    lodash.rest = rest;
	    lodash.restParam = restParam;
	    lodash.set = set;
	    lodash.shuffle = shuffle;
	    lodash.slice = slice;
	    lodash.sortBy = sortBy;
	    lodash.sortByAll = sortByAll;
	    lodash.sortByOrder = sortByOrder;
	    lodash.spread = spread;
	    lodash.take = take;
	    lodash.takeRight = takeRight;
	    lodash.takeRightWhile = takeRightWhile;
	    lodash.takeWhile = takeWhile;
	    lodash.tap = tap;
	    lodash.throttle = throttle;
	    lodash.thru = thru;
	    lodash.times = times;
	    lodash.toArray = toArray;
	    lodash.toPlainObject = toPlainObject;
	    lodash.transform = transform;
	    lodash.union = union;
	    lodash.uniq = uniq;
	    lodash.unzip = unzip;
	    lodash.unzipWith = unzipWith;
	    lodash.values = values;
	    lodash.valuesIn = valuesIn;
	    lodash.where = where;
	    lodash.without = without;
	    lodash.wrap = wrap;
	    lodash.xor = xor;
	    lodash.zip = zip;
	    lodash.zipObject = zipObject;
	    lodash.zipWith = zipWith;

	    // Add aliases.
	    lodash.backflow = flowRight;
	    lodash.collect = map;
	    lodash.compose = flowRight;
	    lodash.each = forEach;
	    lodash.eachRight = forEachRight;
	    lodash.extend = assign;
	    lodash.iteratee = callback;
	    lodash.methods = functions;
	    lodash.object = zipObject;
	    lodash.select = filter;
	    lodash.tail = rest;
	    lodash.unique = uniq;

	    // Add functions to `lodash.prototype`.
	    mixin(lodash, lodash);

	    /*------------------------------------------------------------------------*/

	    // Add functions that return unwrapped values when chaining.
	    lodash.add = add;
	    lodash.attempt = attempt;
	    lodash.camelCase = camelCase;
	    lodash.capitalize = capitalize;
	    lodash.ceil = ceil;
	    lodash.clone = clone;
	    lodash.cloneDeep = cloneDeep;
	    lodash.deburr = deburr;
	    lodash.endsWith = endsWith;
	    lodash.escape = escape;
	    lodash.escapeRegExp = escapeRegExp;
	    lodash.every = every;
	    lodash.find = find;
	    lodash.findIndex = findIndex;
	    lodash.findKey = findKey;
	    lodash.findLast = findLast;
	    lodash.findLastIndex = findLastIndex;
	    lodash.findLastKey = findLastKey;
	    lodash.findWhere = findWhere;
	    lodash.first = first;
	    lodash.floor = floor;
	    lodash.get = get;
	    lodash.gt = gt;
	    lodash.gte = gte;
	    lodash.has = has;
	    lodash.identity = identity;
	    lodash.includes = includes;
	    lodash.indexOf = indexOf;
	    lodash.inRange = inRange;
	    lodash.isArguments = isArguments;
	    lodash.isArray = isArray;
	    lodash.isBoolean = isBoolean;
	    lodash.isDate = isDate;
	    lodash.isElement = isElement;
	    lodash.isEmpty = isEmpty;
	    lodash.isEqual = isEqual;
	    lodash.isError = isError;
	    lodash.isFinite = isFinite;
	    lodash.isFunction = isFunction;
	    lodash.isMatch = isMatch;
	    lodash.isNaN = isNaN;
	    lodash.isNative = isNative;
	    lodash.isNull = isNull;
	    lodash.isNumber = isNumber;
	    lodash.isObject = isObject;
	    lodash.isPlainObject = isPlainObject;
	    lodash.isRegExp = isRegExp;
	    lodash.isString = isString;
	    lodash.isTypedArray = isTypedArray;
	    lodash.isUndefined = isUndefined;
	    lodash.kebabCase = kebabCase;
	    lodash.last = last;
	    lodash.lastIndexOf = lastIndexOf;
	    lodash.lt = lt;
	    lodash.lte = lte;
	    lodash.max = max;
	    lodash.min = min;
	    lodash.noConflict = noConflict;
	    lodash.noop = noop;
	    lodash.now = now;
	    lodash.pad = pad;
	    lodash.padLeft = padLeft;
	    lodash.padRight = padRight;
	    lodash.parseInt = parseInt;
	    lodash.random = random;
	    lodash.reduce = reduce;
	    lodash.reduceRight = reduceRight;
	    lodash.repeat = repeat;
	    lodash.result = result;
	    lodash.round = round;
	    lodash.runInContext = runInContext;
	    lodash.size = size;
	    lodash.snakeCase = snakeCase;
	    lodash.some = some;
	    lodash.sortedIndex = sortedIndex;
	    lodash.sortedLastIndex = sortedLastIndex;
	    lodash.startCase = startCase;
	    lodash.startsWith = startsWith;
	    lodash.sum = sum;
	    lodash.template = template;
	    lodash.trim = trim;
	    lodash.trimLeft = trimLeft;
	    lodash.trimRight = trimRight;
	    lodash.trunc = trunc;
	    lodash.unescape = unescape;
	    lodash.uniqueId = uniqueId;
	    lodash.words = words;

	    // Add aliases.
	    lodash.all = every;
	    lodash.any = some;
	    lodash.contains = includes;
	    lodash.eq = isEqual;
	    lodash.detect = find;
	    lodash.foldl = reduce;
	    lodash.foldr = reduceRight;
	    lodash.head = first;
	    lodash.include = includes;
	    lodash.inject = reduce;

	    mixin(lodash, (function() {
	      var source = {};
	      baseForOwn(lodash, function(func, methodName) {
	        if (!lodash.prototype[methodName]) {
	          source[methodName] = func;
	        }
	      });
	      return source;
	    }()), false);

	    /*------------------------------------------------------------------------*/

	    // Add functions capable of returning wrapped and unwrapped values when chaining.
	    lodash.sample = sample;

	    lodash.prototype.sample = function(n) {
	      if (!this.__chain__ && n == null) {
	        return sample(this.value());
	      }
	      return this.thru(function(value) {
	        return sample(value, n);
	      });
	    };

	    /*------------------------------------------------------------------------*/

	    /**
	     * The semantic version number.
	     *
	     * @static
	     * @memberOf _
	     * @type string
	     */
	    lodash.VERSION = VERSION;

	    // Assign default placeholders.
	    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
	      lodash[methodName].placeholder = lodash;
	    });

	    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
	    arrayEach(['drop', 'take'], function(methodName, index) {
	      LazyWrapper.prototype[methodName] = function(n) {
	        var filtered = this.__filtered__;
	        if (filtered && !index) {
	          return new LazyWrapper(this);
	        }
	        n = n == null ? 1 : nativeMax(nativeFloor(n) || 0, 0);

	        var result = this.clone();
	        if (filtered) {
	          result.__takeCount__ = nativeMin(result.__takeCount__, n);
	        } else {
	          result.__views__.push({ 'size': n, 'type': methodName + (result.__dir__ < 0 ? 'Right' : '') });
	        }
	        return result;
	      };

	      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
	        return this.reverse()[methodName](n).reverse();
	      };
	    });

	    // Add `LazyWrapper` methods that accept an `iteratee` value.
	    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
	      var type = index + 1,
	          isFilter = type != LAZY_MAP_FLAG;

	      LazyWrapper.prototype[methodName] = function(iteratee, thisArg) {
	        var result = this.clone();
	        result.__iteratees__.push({ 'iteratee': getCallback(iteratee, thisArg, 1), 'type': type });
	        result.__filtered__ = result.__filtered__ || isFilter;
	        return result;
	      };
	    });

	    // Add `LazyWrapper` methods for `_.first` and `_.last`.
	    arrayEach(['first', 'last'], function(methodName, index) {
	      var takeName = 'take' + (index ? 'Right' : '');

	      LazyWrapper.prototype[methodName] = function() {
	        return this[takeName](1).value()[0];
	      };
	    });

	    // Add `LazyWrapper` methods for `_.initial` and `_.rest`.
	    arrayEach(['initial', 'rest'], function(methodName, index) {
	      var dropName = 'drop' + (index ? '' : 'Right');

	      LazyWrapper.prototype[methodName] = function() {
	        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
	      };
	    });

	    // Add `LazyWrapper` methods for `_.pluck` and `_.where`.
	    arrayEach(['pluck', 'where'], function(methodName, index) {
	      var operationName = index ? 'filter' : 'map',
	          createCallback = index ? baseMatches : property;

	      LazyWrapper.prototype[methodName] = function(value) {
	        return this[operationName](createCallback(value));
	      };
	    });

	    LazyWrapper.prototype.compact = function() {
	      return this.filter(identity);
	    };

	    LazyWrapper.prototype.reject = function(predicate, thisArg) {
	      predicate = getCallback(predicate, thisArg, 1);
	      return this.filter(function(value) {
	        return !predicate(value);
	      });
	    };

	    LazyWrapper.prototype.slice = function(start, end) {
	      start = start == null ? 0 : (+start || 0);

	      var result = this;
	      if (result.__filtered__ && (start > 0 || end < 0)) {
	        return new LazyWrapper(result);
	      }
	      if (start < 0) {
	        result = result.takeRight(-start);
	      } else if (start) {
	        result = result.drop(start);
	      }
	      if (end !== undefined) {
	        end = (+end || 0);
	        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
	      }
	      return result;
	    };

	    LazyWrapper.prototype.takeRightWhile = function(predicate, thisArg) {
	      return this.reverse().takeWhile(predicate, thisArg).reverse();
	    };

	    LazyWrapper.prototype.toArray = function() {
	      return this.take(POSITIVE_INFINITY);
	    };

	    // Add `LazyWrapper` methods to `lodash.prototype`.
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var checkIteratee = /^(?:filter|map|reject)|While$/.test(methodName),
	          retUnwrapped = /^(?:first|last)$/.test(methodName),
	          lodashFunc = lodash[retUnwrapped ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName];

	      if (!lodashFunc) {
	        return;
	      }
	      lodash.prototype[methodName] = function() {
	        var args = retUnwrapped ? [1] : arguments,
	            chainAll = this.__chain__,
	            value = this.__wrapped__,
	            isHybrid = !!this.__actions__.length,
	            isLazy = value instanceof LazyWrapper,
	            iteratee = args[0],
	            useLazy = isLazy || isArray(value);

	        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
	          // Avoid lazy use if the iteratee has a "length" value other than `1`.
	          isLazy = useLazy = false;
	        }
	        var interceptor = function(value) {
	          return (retUnwrapped && chainAll)
	            ? lodashFunc(value, 1)[0]
	            : lodashFunc.apply(undefined, arrayPush([value], args));
	        };

	        var action = { 'func': thru, 'args': [interceptor], 'thisArg': undefined },
	            onlyLazy = isLazy && !isHybrid;

	        if (retUnwrapped && !chainAll) {
	          if (onlyLazy) {
	            value = value.clone();
	            value.__actions__.push(action);
	            return func.call(value);
	          }
	          return lodashFunc.call(undefined, this.value())[0];
	        }
	        if (!retUnwrapped && useLazy) {
	          value = onlyLazy ? value : new LazyWrapper(this);
	          var result = func.apply(value, args);
	          result.__actions__.push(action);
	          return new LodashWrapper(result, chainAll);
	        }
	        return this.thru(interceptor);
	      };
	    });

	    // Add `Array` and `String` methods to `lodash.prototype`.
	    arrayEach(['join', 'pop', 'push', 'replace', 'shift', 'sort', 'splice', 'split', 'unshift'], function(methodName) {
	      var func = (/^(?:replace|split)$/.test(methodName) ? stringProto : arrayProto)[methodName],
	          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
	          retUnwrapped = /^(?:join|pop|replace|shift)$/.test(methodName);

	      lodash.prototype[methodName] = function() {
	        var args = arguments;
	        if (retUnwrapped && !this.__chain__) {
	          return func.apply(this.value(), args);
	        }
	        return this[chainName](function(value) {
	          return func.apply(value, args);
	        });
	      };
	    });

	    // Map minified function names to their real names.
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var lodashFunc = lodash[methodName];
	      if (lodashFunc) {
	        var key = lodashFunc.name,
	            names = realNames[key] || (realNames[key] = []);

	        names.push({ 'name': methodName, 'func': lodashFunc });
	      }
	    });

	    realNames[createHybridWrapper(undefined, BIND_KEY_FLAG).name] = [{ 'name': 'wrapper', 'func': undefined }];

	    // Add functions to the lazy wrapper.
	    LazyWrapper.prototype.clone = lazyClone;
	    LazyWrapper.prototype.reverse = lazyReverse;
	    LazyWrapper.prototype.value = lazyValue;

	    // Add chaining functions to the `lodash` wrapper.
	    lodash.prototype.chain = wrapperChain;
	    lodash.prototype.commit = wrapperCommit;
	    lodash.prototype.concat = wrapperConcat;
	    lodash.prototype.plant = wrapperPlant;
	    lodash.prototype.reverse = wrapperReverse;
	    lodash.prototype.toString = wrapperToString;
	    lodash.prototype.run = lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

	    // Add function aliases to the `lodash` wrapper.
	    lodash.prototype.collect = lodash.prototype.map;
	    lodash.prototype.head = lodash.prototype.first;
	    lodash.prototype.select = lodash.prototype.filter;
	    lodash.prototype.tail = lodash.prototype.rest;

	    return lodash;
	  }

	  /*--------------------------------------------------------------------------*/

	  // Export lodash.
	  var _ = runInContext();

	  // Some AMD build optimizers like r.js check for condition patterns like the following:
	  if (true) {
	    // Expose lodash to the global object when an AMD loader is present to avoid
	    // errors in cases where lodash is loaded by a script tag and not intended
	    // as an AMD module. See http://requirejs.org/docs/errors.html#mismatch for
	    // more details.
	    root._ = _;

	    // Define as an anonymous module so, through path mapping, it can be
	    // referenced as the "underscore" module.
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
	  else if (freeExports && freeModule) {
	    // Export for Node.js or RingoJS.
	    if (moduleExports) {
	      (freeModule.exports = _)._ = _;
	    }
	    // Export for Rhino with CommonJS support.
	    else {
	      freeExports._ = _;
	    }
	  }
	  else {
	    // Export for a browser or Rhino.
	    root._ = _;
	  }
	}.call(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(528)(module), (function() { return this; }())))

/***/ }),

/***/ 528:
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var ModalBackground = (function (_React$Component) {
	  _inherits(ModalBackground, _React$Component);

	  function ModalBackground() {
	    var _this = this;

	    _classCallCheck(this, ModalBackground);

	    _get(Object.getPrototypeOf(ModalBackground.prototype), 'constructor', this).apply(this, arguments);

	    this.state = {
	      // This is set to false as soon as the component has mounted
	      // This allows the component to change its css and animate in
	      transparent: true
	    };

	    this.componentDidMount = function () {
	      // Create a delay so CSS will animate
	      requestAnimationFrame(function () {
	        return _this.setState({ transparent: false });
	      });
	    };

	    this.componentWillLeave = function (callback) {
	      _this.setState({
	        transparent: true,
	        componentIsLeaving: true
	      });

	      // There isn't a good way to figure out what the duration is exactly,
	      // because parts of the animation are carried out in CSS...
	      setTimeout(function () {
	        callback();
	      }, _this.props.duration);
	    };

	    this.getChild = function () {
	      var child = _react2['default'].Children.only(_this.props.children);
	      var cloneProps = {
	        onClose: _this.props.onClose,
	        componentIsLeaving: _this.state.componentIsLeaving
	      };
	      if (!cloneProps.onClose) {
	        delete cloneProps.onClose;
	      }
	      return _react2['default'].cloneElement(child, cloneProps);
	    };

	    this.render = function () {
	      var transparent = _this.state.transparent;

	      var overlayStyle = {
	        opacity: transparent ? 0 : 0.85,
	        position: 'absolute',
	        backgroundColor: _this.props.backgroundColor,
	        top: 0,
	        left: 0,
	        height: '100%',
	        width: '100%',
	        transition: 'opacity ' + _this.props.duration / 1000 + 's',
	        WebkitTransition: 'opacity ' + _this.props.duration / 1000 + 's',
	        cursor: 'pointer'
	      };

	      var containerStyle = {
	        opacity: transparent ? 0 : 1,
	        overflowY: 'auto',
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        height: '100%',
	        width: '100%',
	        transition: 'opacity ' + _this.props.duration / 1000 + 's',
	        WebkitTransition: 'opacity ' + _this.props.duration / 1000 + 's',
	        cursor: 'pointer'
	      };

	      var style = {
	        // This position needs to be fixed so that when the html/body is bigger
	        // than the viewport, this background still shows up in the center.
	        // This is particularly useful on edusight-home pages.
	        position: 'fixed',
	        top: 0,
	        left: 0,
	        bottom: 0,
	        right: 0,
	        zIndex: _this.props.zIndex
	      };

	      return _react2['default'].createElement(
	        'div',
	        { style: style },
	        _react2['default'].createElement('div', { style: overlayStyle }),
	        _react2['default'].createElement(
	          'div',
	          { style: containerStyle },
	          _this.getChild()
	        )
	      );
	    };
	  }

	  _createClass(ModalBackground, null, [{
	    key: 'propTypes',
	    value: {
	      onClose: _react.PropTypes.func,
	      duration: _react.PropTypes.number.isRequired,
	      backgroundColor: _react.PropTypes.string.isRequired,
	      zIndex: _react.PropTypes.number.isRequired,
	      children: _react.PropTypes.node
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      duration: 300,
	      backgroundColor: '#182738',
	      zIndex: 5
	    },
	    enumerable: true
	  }]);

	  return ModalBackground;
	})(_react2['default'].Component);

	exports['default'] = ModalBackground;
	module.exports = exports['default'];

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ModalPortal = __webpack_require__(531);

	var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

	var _ModalBackground = __webpack_require__(529);

	var _ModalBackground2 = _interopRequireDefault(_ModalBackground);

	/**
	 * This is a shorthand that combines the portal and background, because it is
	 * not often that I use one without the other. I have separated them out in
	 * the source code so that one can build other combinations of Background and
	 * Portal.
	 */

	var ModalContainer = (function (_React$Component) {
	  _inherits(ModalContainer, _React$Component);

	  function ModalContainer() {
	    var _this = this;

	    _classCallCheck(this, ModalContainer);

	    _get(Object.getPrototypeOf(ModalContainer.prototype), 'constructor', this).apply(this, arguments);

	    this.render = function () {
	      var _props = _this.props;
	      var children = _props.children;

	      var rest = _objectWithoutProperties(_props, ['children']);

	      return _react2['default'].createElement(
	        _ModalPortal2['default'],
	        rest,
	        _react2['default'].createElement(
	          _ModalBackground2['default'],
	          rest,
	          children
	        )
	      );
	    };
	  }

	  _createClass(ModalContainer, null, [{
	    key: 'propTypes',
	    value: {
	      children: _react.PropTypes.node
	    },
	    enumerable: true
	  }]);

	  return ModalContainer;
	})(_react2['default'].Component);

	exports['default'] = ModalContainer;
	module.exports = exports['default'];

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(76);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	// Render into subtree is necessary for parent contexts to transfer over
	// For example, for react-router
	var renderSubtreeIntoContainer = _reactDom2['default'].unstable_renderSubtreeIntoContainer;

	var ModalPortal = (function (_React$Component) {
	  _inherits(ModalPortal, _React$Component);

	  function ModalPortal() {
	    var _this = this;

	    _classCallCheck(this, ModalPortal);

	    _get(Object.getPrototypeOf(ModalPortal.prototype), 'constructor', this).apply(this, arguments);

	    this.componentDidMount = function () {
	      // Create a div and append it to the body
	      _this._target = document.body.appendChild(document.createElement('div'));

	      // Mount a component on that div
	      _this._component = renderSubtreeIntoContainer(_this, _this.props.children, _this._target);

	      // A handler call in case you want to do something when a modal opens, like add a class to the body or something
	      if (typeof _this.props.onModalDidMount === 'function') {
	        _this.props.onModalDidMount();
	      }
	    };

	    this.componentDidUpdate = function () {
	      // When the child component updates, we have to make sure the content rendered to the DOM is updated to
	      _this._component = renderSubtreeIntoContainer(_this, _this.props.children, _this._target);
	    };

	    this.componentWillUnmount = function () {
	      /**
	       * Let this be some discussion about fading out the components on unmount.
	       * Right now, there is the issue that if a stack of components are layered
	       * on top of each other, and you programmatically dismiss the bottom one,
	       * it actually takes some time for the animation to catch up to the top one,
	       * because each modal doesn't send a dismiss signal to its children until
	       * it itself is totally gone...
	       */

	      var done = function done() {
	        // Modal will unmount now
	        // Call a handler, like onModalDidMount
	        if (typeof _this.props.onModalWillUnmount === 'function') {
	          _this.props.onModalWillUnmount();
	        }

	        // Remove the node and clean up after the target
	        _reactDom2['default'].unmountComponentAtNode(_this._target);
	        document.body.removeChild(_this._target);
	      };

	      // A similar API to react-transition-group
	      if (typeof _this._component.componentWillLeave == 'function') {
	        // Pass the callback to be called on completion
	        _this._component.componentWillLeave(done);
	      } else {
	        // Call completion immediately
	        done();
	      }
	    };

	    this._target = null;
	    this._component = null;

	    this.render = function () {
	      return null;
	    };
	  }

	  _createClass(ModalPortal, null, [{
	    key: 'propTypes',
	    value: {
	      onClose: _react.PropTypes.func, // This is called when the dialog should close
	      children: _react.PropTypes.node,
	      onModalDidMount: _react.PropTypes.func, // optional, called on mount
	      onModalWillUnmount: _react.PropTypes.func },
	    enumerable: true
	  }]);

	  return ModalPortal;
	})(_react2['default'].Component);

	exports['default'] = ModalPortal;
	module.exports = exports['default'];
	// optional, called on unmount
	// HTMLElement, a div that is appended to the body
	// ReactComponent, which is mounted on the target
	// This doesn't actually return anything to render

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(76);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(310);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _dynamicsJs = __webpack_require__(523);

	var _dynamicsJs2 = _interopRequireDefault(_dynamicsJs);

	var _reactCenterComponent = __webpack_require__(533);

	var _reactCenterComponent2 = _interopRequireDefault(_reactCenterComponent);

	var _CloseCircle = __webpack_require__(524);

	var _CloseCircle2 = _interopRequireDefault(_CloseCircle);

	var _activeEventStack = __webpack_require__(525);

	var _activeEventStack2 = _interopRequireDefault(_activeEventStack);

	var _keycode = __webpack_require__(360);

	var _keycode2 = _interopRequireDefault(_keycode);

	var _narcissus = __webpack_require__(495);

	var styles = {
	  dialog: {
	    boxSizing: 'border-box',
	    position: 'relative',
	    background: 'white',
	    padding: 20,
	    color: '#333',
	    boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.4)',
	    borderRadius: 10
	  },
	  closeButton: {
	    position: 'absolute',
	    top: 0,
	    left: -50,
	    display: 'block',
	    width: 40,
	    height: 40,
	    transition: 'transform 0.1s',
	    // backgroundImage: require('../images/modal-dialog-close.png'),
	    // backgroundRepeat: 'no-repeat',
	    // backgroundSize: '40px 40px',
	    '&&:hover': {
	      transform: 'scale(1.1)'
	    }
	  }
	};

	// This decorator centers the dialog

	var ModalDialog = (function (_React$Component) {
	  _inherits(ModalDialog, _React$Component);

	  function ModalDialog() {
	    var _this = this;

	    _classCallCheck(this, _ModalDialog);

	    _get(Object.getPrototypeOf(_ModalDialog.prototype), 'constructor', this).apply(this, arguments);

	    this.componentWillMount = function () {
	      /**
	       * This is done in the componentWillMount instead of the componentDidMount
	       * because this way, a modal that is a child of another will have register
	       * for events after its parent
	       */
	      _this.eventToken = _activeEventStack2['default'].addListenable([['click', _this.handleGlobalClick], ['keydown', _this.handleGlobalKeydown]]);
	    };

	    this.componentWillReceiveProps = function (nextProps) {
	      if (nextProps.topOffset !== null && _this.props.topOffset === null) {
	        // This means we are getting top information for the first time
	        if (!_this.didAnimateInAlready) {
	          // Double check we have not animated in yet
	          _this.animateIn();
	        }
	      }

	      if (nextProps.componentIsLeaving && !_this.props.componentIsLeaving) {
	        var node = _reactDom2['default'].findDOMNode(_this);
	        _dynamicsJs2['default'].animate(node, {
	          scale: 1.2,
	          opacity: 0
	        }, {
	          duration: 300,
	          type: _dynamicsJs2['default'].easeIn
	        });
	      }
	    };

	    this.componentWillUnmount = function () {
	      _activeEventStack2['default'].removeListenable(_this.eventToken);
	    };

	    this.didAnimateInAlready = false;

	    this.shouldClickDismiss = function (event) {
	      var target = event.target;

	      // This piece of code isolates targets which are fake clicked by things
	      // like file-drop handlers
	      if (target.tagName === 'INPUT' && target.type === 'file') {
	        return false;
	      }
	      if (!_this.props.dismissOnBackgroundClick) {
	        if (target !== _this.refs.self || _this.refs.self.contains(target)) return false;
	      } else {
	        if (target === _this.refs.self || _this.refs.self.contains(target)) return false;
	      }
	      return true;
	    };

	    this.handleGlobalClick = function (event) {
	      if (_this.shouldClickDismiss(event)) {
	        if (typeof _this.props.onClose == 'function') {
	          _this.props.onClose();
	        }
	      }
	    };

	    this.handleGlobalKeydown = function (event) {
	      if ((0, _keycode2['default'])(event) === 'esc') {
	        if (typeof _this.props.onClose == 'function') {
	          _this.props.onClose();
	        }
	      }
	    };

	    this.animateIn = function () {
	      _this.didAnimateInAlready = true;

	      // Animate this node once it is mounted
	      var node = _reactDom2['default'].findDOMNode(_this);

	      // This sets the scale...
	      if (document.body.style.transform == null) {
	        node.style.WebkitTransform = 'scale(0.5)';
	      } else {
	        node.style.transform = 'scale(0.5)';
	      }

	      _dynamicsJs2['default'].animate(node, {
	        scale: 1
	      }, {
	        type: _dynamicsJs2['default'].spring,
	        duration: 500,
	        friction: 400
	      });
	    };

	    this.render = function () {
	      var _props = _this.props;
	      var children = _props.children;
	      var className = _props.className;
	      var componentIsLeaving = _props.componentIsLeaving;
	      var // eslint-disable-line no-unused-vars, this line is used to remove parameters from rest
	      left = _props.left;
	      var // eslint-disable-line no-unused-vars, this line is used to remove parameters from rest
	      leftOffset = _props.leftOffset;
	      var margin = _props.margin;
	      var onClose = _props.onClose;
	      var recenter = _props.recenter;
	      var // eslint-disable-line no-unused-vars, this line is used to remove parameters from rest
	      style = _props.style;
	      var top = _props.top;
	      var // eslint-disable-line no-unused-vars, this line is used to remove parameters from rest
	      topOffset = _props.topOffset;
	      var width = _props.width;
	      var dismissOnBackgroundClick = _props.dismissOnBackgroundClick;

	      var rest = _objectWithoutProperties(_props, ['children', 'className', 'componentIsLeaving', 'left', 'leftOffset', 'margin', 'onClose', 'recenter', 'style', 'top', 'topOffset', 'width', 'dismissOnBackgroundClick']);

	      var dialogStyle = _extends({
	        position: 'absolute',
	        marginBottom: margin,
	        width: width,
	        top: Math.max(topOffset, margin),
	        left: leftOffset
	      }, style);

	      var divClassName = (0, _classnames2['default'])((0, _narcissus.inject)(styles.dialog), className);

	      return _react2['default'].createElement(
	        'div',
	        _extends({}, rest, {
	          ref: 'self',
	          className: divClassName,
	          style: dialogStyle
	        }),
	        onClose ? _react2['default'].createElement(
	          'a',
	          { className: (0, _narcissus.inject)(styles.closeButton), onClick: onClose },
	          _react2['default'].createElement(_CloseCircle2['default'], { diameter: 40 })
	        ) : null,
	        children
	      );
	    };
	  }

	  _createClass(ModalDialog, null, [{
	    key: 'propTypes',
	    value: {
	      onClose: _react.PropTypes.func, // required for the close button
	      className: _react.PropTypes.string, // css class in addition to .ReactModalDialog
	      width: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]), // width
	      topOffset: _react.PropTypes.number, // injected by @centerComponent
	      leftOffset: _react.PropTypes.number, // injected by @centerComponent
	      margin: _react.PropTypes.number.isRequired, // the margin around the dialog
	      children: _react.PropTypes.node,
	      componentIsLeaving: _react.PropTypes.bool,
	      style: _react.PropTypes.object,
	      left: _react.PropTypes.number,
	      recenter: _react.PropTypes.func.isRequired,
	      top: _react.PropTypes.number,
	      dismissOnBackgroundClick: _react.PropTypes.bool
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      width: 'auto',
	      margin: 20,
	      dismissOnBackgroundClick: true
	    },
	    enumerable: true
	  }]);

	  var _ModalDialog = ModalDialog;
	  ModalDialog = (0, _reactCenterComponent2['default'])(ModalDialog) || ModalDialog;
	  return ModalDialog;
	})(_react2['default'].Component);

	exports['default'] = ModalDialog;
	module.exports = exports['default'];

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	exports['default'] = centerComponent;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(76);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _lodashDebounce = __webpack_require__(534);

	var _lodashDebounce2 = _interopRequireDefault(_lodashDebounce);

	/**
	 * This is a higher order component decorator
	 *
	 * It listens for when its children are mounted, then it measures the size of
	 * these children on the dom. Then it updates the children with appropriate
	 * top and left offsets.
	 *
	 * Components that are wrapped with this decorator recieve two properties
	 * topOffset and leftOffset, they are null before the component has mounted.
	 *
	 * When the window is resized, this component will reupdate its children. This process
	 * is debounced by 100ms to reduce CPU strain
	 */

	function centerComponent(Component) {
	  var componentClassName = Component.displayName || Component.name || 'Component';

	  var DecoratedComponent = (function (_React$Component) {
	    _inherits(DecoratedComponent, _React$Component);

	    function DecoratedComponent() {
	      var _this = this;

	      _classCallCheck(this, DecoratedComponent);

	      _get(Object.getPrototypeOf(DecoratedComponent.prototype), 'constructor', this).apply(this, arguments);

	      this.state = {
	        topOffset: null,
	        leftOffset: null
	      };

	      this.resizeChildNode = function () {
	        var node = _reactDom2['default'].findDOMNode(_this.refs.component);

	        var nodeSize = {
	          height: node.clientHeight,
	          width: node.clientWidth
	        };

	        var windowSize = {
	          height: document.documentElement.clientHeight,
	          width: document.documentElement.clientWidth
	        };

	        _this.setState({
	          topOffset: (windowSize.height - nodeSize.height) / 2,
	          leftOffset: (windowSize.width - nodeSize.width) / 2
	        });
	      };
	    }

	    _createClass(DecoratedComponent, [{
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        this.resizeChildNode();
	        this._debouncedResize = (0, _lodashDebounce2['default'])(this.resizeChildNode, 100);
	        window.addEventListener('resize', this._debouncedResize);
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        window.removeEventListener('resize', this._debouncedResize);
	      }
	    }, {
	      key: 'componentDidUpdate',
	      value: function componentDidUpdate(prevProps) {
	        if (this.props.children !== prevProps.children) {
	          // Children are different, resize
	          this.resizeChildNode();
	        }
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var rest = _objectWithoutProperties(this.props, []);

	        var _state = this.state;
	        var topOffset = _state.topOffset;
	        var leftOffset = _state.leftOffset;

	        return _react2['default'].createElement(Component, _extends({}, rest, {
	          ref: 'component',
	          topOffset: topOffset,
	          top: topOffset,
	          leftOffset: leftOffset,
	          left: leftOffset,
	          recenter: this.resizeChildNode
	        }));
	      }
	    }], [{
	      key: 'displayName',
	      value: 'Centered(' + componentClassName + ')',
	      enumerable: true
	    }]);

	    return DecoratedComponent;
	  })(_react2['default'].Component);

	  return DecoratedComponent;
	}

	module.exports = exports['default'];

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(535),
	    now = __webpack_require__(536),
	    toNumber = __webpack_require__(539);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;

	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	module.exports = debounce;


/***/ }),

/***/ 535:
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(537);

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};

	module.exports = now;


/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(538);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ }),

/***/ 538:
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(535),
	    isSymbol = __webpack_require__(540);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(541),
	    isObjectLike = __webpack_require__(545);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(542),
	    getRawTag = __webpack_require__(543),
	    objectToString = __webpack_require__(544);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(537);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(542);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ }),

/***/ 544:
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ }),

/***/ 545:
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _axios = __webpack_require__(547);

	var _axios2 = _interopRequireDefault(_axios);

	var _reactRouterDom = __webpack_require__(1);

	var _Helper = __webpack_require__(491);

	var _Helper2 = _interopRequireDefault(_Helper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginModal = function (_React$Component) {
	    _inherits(LoginModal, _React$Component);

	    function LoginModal(props) {
	        _classCallCheck(this, LoginModal);

	        var _this = _possibleConstructorReturn(this, (LoginModal.__proto__ || Object.getPrototypeOf(LoginModal)).call(this, props));

	        _this.state = {
	            username: '',
	            password: '',
	            userExist: false
	        };
	        return _this;
	    }

	    _createClass(LoginModal, [{
	        key: 'getToken',
	        value: function getToken() {
	            fetch(_Helper2.default.authorizationUrl, {
	                method: 'POST',
	                headers: { 'Content-Type': 'application/json' },
	                body: JSON.stringify({
	                    username: this.state.username,
	                    password: this.state.password
	                })
	            }).then(function (response) {
	                if (response.ok) {
	                    return response.json();
	                } else {
	                    return null;
	                }
	            }).then(function (response) {
	                if (response.access_token) {
	                    console.log(response.access_token);
	                    _Helper2.default.setAccessToken(response.access_token);
	                    _Helper2.default.setUsername(this.state.username);
	                } else {
	                    _Helper2.default.setAccessToken('');
	                    _Helper2.default.setUsername('');
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'form',
	                { className: 'login' },
	                _react2.default.createElement(
	                    'h3',
	                    null,
	                    'Login'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'mt-2' },
	                    _react2.default.createElement('input', { className: 'form-control', type: 'text', name: 'username', placeholder: 'Username' }),
	                    _react2.default.createElement('input', { className: 'form-control', type: 'password', name: 'password', placeholder: 'Password' })
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { className: 'btn btn-outline-success', onClick: this.props.closeLoginModal },
	                    'Login'
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { className: 'btn btn-outline-info', onClick: this.props.openRegisterModal },
	                    'Register'
	                )
	            );
	        }
	    }]);

	    return LoginModal;
	}(_react2.default.Component);

	LoginModal.propTypes = {
	    openRegisterModal: _react.PropTypes.func,
	    closeLoginModal: _react.PropTypes.func,
	    openLoginModal: _react.PropTypes.func
	};

	exports.default = LoginModal;

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(548);

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(549);
	var bind = __webpack_require__(554);
	var Axios = __webpack_require__(555);
	var defaults = __webpack_require__(556);

	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);

	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);

	  // Copy context to instance
	  utils.extend(instance, context);

	  return instance;
	}

	// Create the default instance to be exported
	var axios = createInstance(defaults);

	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;

	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(utils.merge(defaults, instanceConfig));
	};

	// Expose Cancel & CancelToken
	axios.Cancel = __webpack_require__(573);
	axios.CancelToken = __webpack_require__(574);
	axios.isCancel = __webpack_require__(570);

	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(575);

	module.exports = axios;

	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var bind = __webpack_require__(554);

	/*global toString:true*/

	// utils is a library of generic helper functions non-specific to axios

	var toString = Object.prototype.toString;

	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}

	/**
	 * Determine if a value is a Node Buffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Node Buffer, otherwise false
	 */
	function isBuffer(val) {
	  return ((typeof Buffer !== 'undefined') && (Buffer.isBuffer) && (Buffer.isBuffer(val)));
	}

	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}

	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}

	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}

	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}

	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}

	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}

	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}

	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}

	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}

	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}

	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}

	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}

	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}

	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}

	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  navigator.product -> 'ReactNative'
	 */
	function isStandardBrowserEnv() {
	  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
	    return false;
	  }
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined'
	  );
	}

	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }

	  // Force an array if not already something iterable
	  if (typeof obj !== 'object' && !isArray(obj)) {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }

	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}

	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }

	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}

	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}

	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isBuffer: isBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(550).Buffer))

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(551)
	var ieee754 = __webpack_require__(552)
	var isArray = __webpack_require__(553)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()

	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer.poolSize = 8192 // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}

	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)

	  var actual = that.write(string, encoding)

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len)
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}

	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8'

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true

	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}

	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0

	  if (this === target) return 0

	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)

	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }

	  return len
	}

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0

	  if (!val) val = 0

	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }

	  return this
	}

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

	'use strict'

	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray

	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}

	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63

	function placeHoldersCount (b64) {
	  var len = b64.length
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}

	function byteLength (b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return b64.length * 3 / 4 - placeHoldersCount(b64)
	}

	function toByteArray (b64) {
	  var i, j, l, tmp, placeHolders, arr
	  var len = b64.length
	  placeHolders = placeHoldersCount(b64)

	  arr = new Arr(len * 3 / 4 - placeHolders)

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len

	  var L = 0

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }

	  parts.push(output)

	  return parts.join('')
	}


/***/ }),

/***/ 552:
/***/ (function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ }),

/***/ 553:
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ }),

/***/ 554:
/***/ (function(module, exports) {

	'use strict';

	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var defaults = __webpack_require__(556);
	var utils = __webpack_require__(549);
	var InterceptorManager = __webpack_require__(567);
	var dispatchRequest = __webpack_require__(568);
	var isAbsoluteURL = __webpack_require__(571);
	var combineURLs = __webpack_require__(572);

	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}

	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }

	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }

	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);

	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });

	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });

	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }

	  return promise;
	};

	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});

	module.exports = Axios;


/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var utils = __webpack_require__(549);
	var normalizeHeaderName = __webpack_require__(557);

	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};

	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}

	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(558);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(558);
	  }
	  return adapter;
	}

	var defaults = {
	  adapter: getDefaultAdapter(),

	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],

	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],

	  timeout: 0,

	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',

	  maxContentLength: -1,

	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};

	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};

	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  defaults.headers[method] = {};
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});

	module.exports = defaults;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(549);

	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var utils = __webpack_require__(549);
	var settle = __webpack_require__(559);
	var buildURL = __webpack_require__(562);
	var parseHeaders = __webpack_require__(563);
	var isURLSameOrigin = __webpack_require__(564);
	var createError = __webpack_require__(560);
	var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(565);

	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;

	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }

	    var request = new XMLHttpRequest();
	    var loadEvent = 'onreadystatechange';
	    var xDomain = false;

	    // For IE 8/9 CORS support
	    // Only supports POST and GET calls and doesn't returns the response headers.
	    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	    if (process.env.NODE_ENV !== 'test' &&
	        typeof window !== 'undefined' &&
	        window.XDomainRequest && !('withCredentials' in request) &&
	        !isURLSameOrigin(config.url)) {
	      request = new window.XDomainRequest();
	      loadEvent = 'onload';
	      xDomain = true;
	      request.onprogress = function handleProgress() {};
	      request.ontimeout = function handleTimeout() {};
	    }

	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }

	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

	    // Set the request timeout in MS
	    request.timeout = config.timeout;

	    // Listen for ready state
	    request[loadEvent] = function handleLoad() {
	      if (!request || (request.readyState !== 4 && !xDomain)) {
	        return;
	      }

	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }

	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
	        status: request.status === 1223 ? 204 : request.status,
	        statusText: request.status === 1223 ? 'No Content' : request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };

	      settle(resolve, reject, response);

	      // Clean up request
	      request = null;
	    };

	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config));

	      // Clean up request
	      request = null;
	    };

	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

	      // Clean up request
	      request = null;
	    };

	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(566);

	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
	          cookies.read(config.xsrfCookieName) :
	          undefined;

	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }

	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }

	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }

	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
	        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
	        if (config.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }

	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }

	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }

	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }

	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }

	    if (requestData === undefined) {
	      requestData = null;
	    }

	    // Send the request
	    request.send(requestData);
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var createError = __webpack_require__(560);

	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response
	    ));
	  }
	};


/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var enhanceError = __webpack_require__(561);

	/**
	 * Create an Error with the specified message, config, error code, and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, response);
	};


/***/ }),

/***/ 561:
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	module.exports = function enhanceError(error, config, code, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.response = response;
	  return error;
	};


/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(549);

	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}

	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }

	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];

	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }

	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }

	      if (!utils.isArray(val)) {
	        val = [val];
	      }

	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });

	    serializedParams = parts.join('&');
	  }

	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }

	  return url;
	};


/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(549);

	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;

	  if (!headers) { return parsed; }

	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));

	    if (key) {
	      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	    }
	  });

	  return parsed;
	};


/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(549);

	module.exports = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;

	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;

	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }

	      urlParsingNode.setAttribute('href', href);

	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }

	    originURL = resolveURL(window.location.href);

	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :

	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);


/***/ }),

/***/ 565:
/***/ (function(module, exports) {

	'use strict';

	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error;
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';

	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	    // initialize result and counter
	    var block, charCode, idx = 0, map = chars;
	    // if the next str index does not exist:
	    //   change the mapping table to "="
	    //   check if d has no fractional digits
	    str.charAt(idx | 0) || (map = '=', idx % 1);
	    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}

	module.exports = btoa;


/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(549);

	module.exports = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));

	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }

	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }

	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }

	        if (secure === true) {
	          cookie.push('secure');
	        }

	        document.cookie = cookie.join('; ');
	      },

	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },

	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :

	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);


/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(549);

	function InterceptorManager() {
	  this.handlers = [];
	}

	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};

	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};

	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};

	module.exports = InterceptorManager;


/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(549);
	var transformData = __webpack_require__(569);
	var isCancel = __webpack_require__(570);
	var defaults = __webpack_require__(556);

	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}

	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);

	  // Ensure headers exist
	  config.headers = config.headers || {};

	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );

	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );

	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );

	  var adapter = config.adapter || defaults.adapter;

	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);

	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );

	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);

	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }

	    return Promise.reject(reason);
	  });
	};


/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(549);

	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });

	  return data;
	};


/***/ }),

/***/ 570:
/***/ (function(module, exports) {

	'use strict';

	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};


/***/ }),

/***/ 571:
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ }),

/***/ 572:
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return relativeURL
	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
	    : baseURL;
	};


/***/ }),

/***/ 573:
/***/ (function(module, exports) {

	'use strict';

	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function Cancel(message) {
	  this.message = message;
	}

	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};

	Cancel.prototype.__CANCEL__ = true;

	module.exports = Cancel;


/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Cancel = __webpack_require__(573);

	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }

	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });

	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }

	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}

	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};

	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};

	module.exports = CancelToken;


/***/ }),

/***/ 575:
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(223);

	var _reactRouterBootstrap = __webpack_require__(474);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RegisterModal = function (_React$Component) {
	  _inherits(RegisterModal, _React$Component);

	  function RegisterModal() {
	    _classCallCheck(this, RegisterModal);

	    return _possibleConstructorReturn(this, (RegisterModal.__proto__ || Object.getPrototypeOf(RegisterModal)).apply(this, arguments));
	  }

	  _createClass(RegisterModal, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'form',
	        { className: 'register' },
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Register'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'mt-2' },
	          _react2.default.createElement('input', { className: 'form-control', type: 'text', name: 'username', placeholder: 'Username' }),
	          _react2.default.createElement('input', { className: 'form-control', type: 'text', name: 'birthday', placeholder: 'Birthday' }),
	          _react2.default.createElement('input', { className: 'form-control', type: 'password', name: 'password', placeholder: 'Password' }),
	          _react2.default.createElement('input', { className: 'form-control', type: 'password', name: 'confirmPassword', placeholder: 'Confirm Password' })
	        ),
	        _react2.default.createElement(
	          'button',
	          { className: 'btn btn-outline-success', onClick: this.props.openLoginModal },
	          'Submit'
	        )
	      );
	    }
	  }]);

	  return RegisterModal;
	}(_react2.default.Component);

	RegisterModal.propTypes = {
	  openLoginModal: _react.PropTypes.func
	};

	exports.default = RegisterModal;

/***/ })

});