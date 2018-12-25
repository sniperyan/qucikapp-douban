(function(){
  
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var URL_CONST = {
    popular_url: "https://api.douban.com/v2/movie/in_theaters", //热映
    coming_url: "https://api.douban.com/v2/movie/coming_soon", //待映
    top_url: "https://api.douban.com/v2/movie/top250", //top250
    subject_url: "https://api.douban.com/v2/movie/subject/", //电影详情
    celebrity_url: "https://api.douban.com/v2/movie/celebrity/", //人物详情
    searchByKeyword_url: "https://api.douban.com/v2/movie/search?q=", //热门关键词
    searchByTag_url: "https://api.douban.com/v2/movie/search?tag=" //热门标签


    //分页参数
};var PAGE_CONFIG = {
    city: "北京",
    count: 20
};

exports.URL_CONST = URL_CONST;
exports.PAGE_CONFIG = PAGE_CONFIG;

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(34)
var $app_style$ = __webpack_require__(35)
var $app_script$ = __webpack_require__(36)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "person-page"
  ],
  "children": [
    {
      "type": "stack",
      "attr": {},
      "classList": [
        "pd-hd"
      ],
      "children": [
        {
          "type": "image",
          "attr": {
            "src": function () {return this.checkEmpty(this.personDetail,'avatars','medium')}
          },
          "classList": [
            "pd-hd-bg"
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "pd-intro"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.checkEmpty(this.personDetail,'avatars','medium')}
              },
              "classList": [
                "pd-avatar"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.personDetail.name}
              },
              "classList": [
                "pd-name-cn"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.personDetail.name_en}
              },
              "classList": [
                "pd-name-en"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.personDetail.born_place}
              },
              "classList": [
                "pd-address"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": "主要作品"
      },
      "classList": [
        "pd-title"
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "pd-work"
      ],
      "children": [
        {
          "type": "block",
          "attr": {},
          "repeat": function () {return this.personDetail.works},
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "pd-work-item"
              ],
              "events": {
                "click": function (evt) {this.showFilmDetail(this.checkEmpty(this.$item,'subject','id'),this.checkEmpty(this.$item,'subject','title'),evt)}
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.checkEmpty(this.$item,'subject','images','large')}
                  },
                  "classList": [
                    "pd-work-cover"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "pd-work-intro"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.checkEmpty(this.$item,'subject','title')}
                      },
                      "classList": [
                        "pd-work-title"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return '担任：' + (this.$item.roles)}
                      },
                      "classList": [
                        "pd-work-roles"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = {
  ".person-page": {
    "flexDirection": "column"
  },
  ".pd-hd": {
    "width": "100%",
    "height": "600px"
  },
  ".pd-hd-bg": {
    "width": "100%",
    "height": "600px",
    "opacity": 0.2
  },
  ".pd-intro": {
    "flexDirection": "column",
    "width": "100%",
    "height": "600px",
    "justifyContent": "center",
    "alignItems": "center",
    "color": "#ffffff"
  },
  ".pd-avatar": {
    "width": "280px",
    "height": "280px",
    "borderRadius": "140px"
  },
  ".pd-name-cn": {
    "paddingTop": "10px",
    "paddingRight": "20px",
    "paddingBottom": "10px",
    "paddingLeft": "20px",
    "marginTop": "30px",
    "backgroundColor": "rgba(0,0,0,0.1)",
    "borderRadius": "32px",
    "fontSize": "32px"
  },
  ".pd-name-en": {
    "marginTop": "20px",
    "fontSize": "24px"
  },
  ".pd-address": {
    "marginTop": "20px",
    "fontSize": "24px"
  },
  ".pd-title": {
    "paddingLeft": "20px",
    "marginTop": "40px",
    "marginLeft": "15px",
    "marginBottom": "20px",
    "fontSize": "32px",
    "fontWeight": "bold",
    "color": "#444444",
    "borderStyle": "solid",
    "borderLeftWidth": "10px",
    "borderLeftColor": "#47a86c"
  },
  ".pd-work": {
    "width": "100%",
    "paddingTop": "10px",
    "paddingRight": "10px",
    "paddingBottom": "10px",
    "paddingLeft": "10px",
    "marginTop": "10px",
    "flexWrap": "wrap",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  ".pd-work-item": {
    "width": "360px",
    "backgroundColor": "#f8f8f8",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#eeeeee",
    "borderRightColor": "#eeeeee",
    "borderBottomColor": "#eeeeee",
    "borderLeftColor": "#eeeeee",
    "marginBottom": "15px",
    "flexDirection": "column"
  },
  ".pd-work-cover": {
    "width": "360px",
    "height": "533px"
  },
  ".pd-work-intro": {
    "paddingTop": "10px",
    "paddingRight": "10px",
    "paddingBottom": "10px",
    "paddingLeft": "10px",
    "flexDirection": "column"
  },
  ".pd-work-title": {
    "fontSize": "36px",
    "color": "#333333",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  ".pd-work-roles": {
    "color": "#666666"
  }
}

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

var _system3 = $app_require$('@app-module/system.fetch');

var _system4 = _interopRequireDefault(_system3);

var _data = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
    protected: {
        id: "",
        title: "",
        personDetail: {}
    },
    onInit: function onInit() {
        this.$page.setTitleBar({ text: this.title });
        this.fetchPersonDetail();
    },
    checkEmpty: function checkEmpty() {
        var _$app$$def;

        return (_$app$$def = this.$app.$def).checkEmpty.apply(_$app$$def, arguments);
    },
    fetchPersonDetail: function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
            var response;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return _system4.default.fetch({
                                url: _data.URL_CONST.celebrity_url + this.id,
                                method: "GET"
                            });

                        case 3:
                            response = _context.sent;

                            this.personDetail = JSON.parse(response.data.data);
                            _context.next = 10;
                            break;

                        case 7:
                            _context.prev = 7;
                            _context.t0 = _context['catch'](0);

                            console.info('error', _context.t0);

                        case 10:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[0, 7]]);
        }));

        function fetchPersonDetail() {
            return _ref.apply(this, arguments);
        }

        return fetchPersonDetail;
    }(),
    showFilmDetail: function showFilmDetail(id, title) {
        _system2.default.push({
            uri: '/FilmDetail',
            params: {
                id: id,
                title: title
            }
        });
    }
};


var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
})) {
    throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
    moduleOwn.data = {};
    moduleOwn._descriptor = {};
    accessors.forEach(function (acc) {
        var accType = _typeof(moduleOwn[acc]);
        if (accType === 'object') {
            moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
            for (var name in moduleOwn[acc]) {
                moduleOwn._descriptor[name] = { access: acc };
            }
        } else if (accType === 'function') {
            console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
        }
    });
}}

/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map