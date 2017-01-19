webpackHotUpdate(1,{

/***/ 123:
/*!*******************************************!*\
  !*** ./client/src/redux/reducers/file.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.loadContent = loadContent;
	exports.modifyContent = modifyContent;
	exports.loadHistory = loadHistory;

	exports.default = function () {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _immutable2.default.fromJS(initState);
	    var action = arguments[1];

	    switch (action.type) {
	        case LOAD_SUCC:
	            state = state.set('content', '');
	            return state.withMutations(function (state) {
	                state.set('content', action.payload.code);
	                state.set('extname', action.payload.extname);
	                return state;
	            });
	        case LOAD_HISTORY:
	            return state.set('history', action.payload.code);
	        default:
	            return state;
	    }
	};

	var _immutable = __webpack_require__(/*! immutable */ 75);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initState = {
	    content: '',
	    extname: '',
	    history: ''
	};

	function loadContent(project, relatedPath) {
	    return {
	        API_CALL: true,
	        url: '/projects/' + project + '/file',
	        data: {
	            relatedPath: relatedPath
	        },
	        types: [, LOAD_SUCC]
	    };
	}

	function modifyContent(extname, code) {
	    return {
	        API_CALL: true,
	        method: 'PUT',
	        url: '/api/projects/projectId/folders/folderId/files/fileId',
	        data: {
	            extname: extname,
	            code: code
	        },
	        types: [, LOAD_SUCC]
	    };
	}

	function loadHistory(extname) {
	    return {
	        API_CALL: true,
	        url: '/api/file/history',
	        data: { extname: extname },
	        types: [, LOAD_HISTORY]
	    };
	}

	var LOAD_SUCC = 'file/load_succ';
	var LOAD_HISTORY = 'file/load_history';

/***/ }

})
//# sourceMappingURL=1.1357e025c930b9c07e7f.hot-update.js.map