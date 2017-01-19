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
	        url: '/api/projects/' + parentId + '/folders?relatedPath=' + relatedPath,
	        types: [, LOAD_SUCC]
	    };
	}

	var LOAD_SUCC = 'folder/load_succ';

/***/ }

})
//# sourceMappingURL=1.97a8853bc6b144cc401b.hot-update.js.map