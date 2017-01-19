webpackHotUpdate(1,{

/***/ 199:
/*!*********************************************!*\
  !*** ./client/src/redux/reducers/folder.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.loadFolders = loadFolders;

	exports.default = function () {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _immutable2.default.fromJS(initState);
	    var action = arguments[1];

	    switch (action.type) {
	        case LOAD_SUCC:
	            state = state.clear();
	            return state.concat(action.payload);
	        default:
	            return state;
	    }
	};

	var _immutable = __webpack_require__(/*! immutable */ 75);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initState = [];

	function loadFolders(projectName, relatedPath) {
	    return {
	        API_CALL: true,
	        url: '/api/projects/' + projectName + '/folders',
	        data: {
	            relatedPath: relatedPath
	        },
	        types: [, LOAD_SUCC]
	    };
	}

	var LOAD_SUCC = 'folder/load_succ';

/***/ },

/***/ 445:
/*!********************************************!*\
  !*** ./client/src/redux/reducers/index.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(/*! redux */ 120);

	var _project = __webpack_require__(/*! ./project */ 200);

	var _project2 = _interopRequireDefault(_project);

	var _folder = __webpack_require__(/*! ./folder */ 199);

	var _folder2 = _interopRequireDefault(_folder);

	var _loadingSpinner = __webpack_require__(/*! ./loading-spinner */ 446);

	var _loadingSpinner2 = _interopRequireDefault(_loadingSpinner);

	var _file = __webpack_require__(/*! ./file */ 123);

	var _file2 = _interopRequireDefault(_file);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _redux.combineReducers)({
	    projects: _project2.default,
	    folders: _folder2.default,
	    loadingSpinner: _loadingSpinner2.default,
	    file: _file2.default
	});

/***/ },

/***/ 447:
/*!******************************!*\
  !*** ./client/src/router.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (props) {
	    return _react2.default.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        _react2.default.createElement(
	            _reactRouter.Router,
	            { history: _reactRouter.hashHistory },
	            _react2.default.createElement(
	                _reactRouter.Route,
	                { path: '/', component: _app2.default },
	                _react2.default.createElement(_reactRouter.Route, { path: '*', component: _mainBody2.default, onEnter: function onEnter() {
	                        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	                            _ref$params$splat = _ref.params.splat,
	                            splat = _ref$params$splat === undefined ? '' : _ref$params$splat;

	                        debugger;
	                        if ((0, _utils.isFile)(splat)) {
	                            dispatch((0, _file.loadContent)((0, _utils.extname)(splat)));
	                        } else {
	                            var paths = (0, _utils.splitPath)(splat);
	                            console.log(paths);
	                            dispatch((0, _folder.loadFolders)(paths[0], paths.slice(1)));
	                        }
	                    } }),
	                _react2.default.createElement(_reactRouter.IndexRoute, { component: _projects2.default, onEnter: function onEnter() {
	                        return dispatch((0, _project.loadProjects)());
	                    } })
	            )
	        )
	    );
	};

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 72);

	var _apiMiddleware = __webpack_require__(/*! ./redux/api-middleware */ 444);

	var _apiMiddleware2 = _interopRequireDefault(_apiMiddleware);

	var _redux = __webpack_require__(/*! redux */ 120);

	var _reactRedux = __webpack_require__(/*! react-redux */ 61);

	var _reducers = __webpack_require__(/*! ./redux/reducers */ 445);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _app = __webpack_require__(/*! ./app */ 429);

	var _app2 = _interopRequireDefault(_app);

	var _mainBody = __webpack_require__(/*! ./components/container/main-body */ 432);

	var _mainBody2 = _interopRequireDefault(_mainBody);

	var _projects = __webpack_require__(/*! ./components/container/projects */ 433);

	var _projects2 = _interopRequireDefault(_projects);

	var _folder = __webpack_require__(/*! ./redux/reducers/folder */ 199);

	var _file = __webpack_require__(/*! ./redux/reducers/file */ 123);

	var _project = __webpack_require__(/*! ./redux/reducers/project */ 200);

	var _utils = __webpack_require__(/*! ./utils */ 124);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_apiMiddleware2.default)); /**
	                                                                                                                * Router configrations
	                                                                                                                */
	var dispatch = store.dispatch;

/***/ }

})
//# sourceMappingURL=1.47f9c92a0485e55ac4d6.hot-update.js.map