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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
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

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(30)
var $app_style$ = __webpack_require__(31)
var $app_script$ = __webpack_require__(32)

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

/***/ 30:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "film-detail"
  ],
  "children": [
    {
      "type": "stack",
      "attr": {},
      "classList": [
        "fd-hd"
      ],
      "children": [
        {
          "type": "image",
          "attr": {
            "src": function () {return this.checkEmpty(this.filmDetail,'images','large')}
          },
          "classList": [
            "fd-hd-bg"
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "fd-intro"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.checkEmpty(this.filmDetail,'images','large')}
              },
              "classList": [
                "fd-cover"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "fd-intro-info"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.filmDetail.title}
                  },
                  "classList": [
                    "fd-title"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return '导演：' + (this.checkEmpty(this.filmDetail.directors&&this.filmDetail.directors[0],'name'))}
                  },
                  "classList": [
                    "fd-intro-txt"
                  ]
                },
                {
                  "type": "text",
                  "attr": {},
                  "classList": [
                    "fd-intro-txt"
                  ],
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": "演员： "
                      }
                    },
                    {
                      "type": "block",
                      "attr": {},
                      "repeat": function () {return this.filmDetail.casts},
                      "children": [
                        {
                          "type": "span",
                          "attr": {
                            "value": function () {return this.$item.name}
                          }
                        },
                        {
                          "type": "block",
                          "attr": {},
                          "shown": function () {return this.$idx!==this.checkEmpty(this.filmDetail,'casts','length')-1},
                          "children": [
                            {
                              "type": "span",
                              "attr": {
                                "value": "/"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "text",
                  "attr": {},
                  "classList": [
                    "fd-intro-txt"
                  ],
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": "豆瓣评分： "
                      }
                    },
                    {
                      "type": "block",
                      "attr": {},
                      "shown": function () {return this.checkEmpty(this.filmDetail,'rating','average')==0},
                      "children": [
                        {
                          "type": "span",
                          "attr": {
                            "value": "暂无评分"
                          }
                        }
                      ]
                    },
                    {
                      "type": "block",
                      "attr": {},
                      "shown": function () {return !(this.checkEmpty(this.filmDetail,'rating','average')==0)},
                      "children": [
                        {
                          "type": "span",
                          "attr": {
                            "value": function () {return (this.checkEmpty(this.filmDetail,'rating','average')) + '分'}
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return '上映年份：' + (this.filmDetail.year) + '年'}
                  },
                  "classList": [
                    "fd-intro-txt"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "fd-data"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "fd-data-item"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.filmDetail.collect_count}
              },
              "classList": [
                "fd-data-num"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "看过"
              },
              "classList": [
                "fd-data-title"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "fd-data-item"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.filmDetail.wish_count}
              },
              "classList": [
                "fd-data-num"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "想看"
              },
              "classList": [
                "fd-data-title"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "fd-data-item"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.filmDetail.ratings_count}
              },
              "classList": [
                "fd-data-num"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "评分人数"
              },
              "classList": [
                "fd-data-title"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "fd-bd"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": " 剧情简介 "
          },
          "classList": [
            "fd-bd-title"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.filmDetail.summary}
          },
          "classList": [
            "fd-bd-intro"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "导演/演员"
          },
          "classList": [
            "fd-bd-title"
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "fd-bd-person"
          ],
          "children": [
            {
              "type": "swiper",
              "attr": {
                "autoplay": "true"
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "fd-bd-person-item"
                  ],
                  "events": {
                    "click": function (evt) {this.showPersonDetail(this.checkEmpty(this.filmDetail.directors&&this.filmDetail.directors[0],'id'),this.checkEmpty(this.filmDetail.directors&&this.filmDetail.directors[0],'name'),evt)}
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.checkEmpty(this.filmDetail.directors&&this.filmDetail.directors[0],'avatars','medium')}
                      },
                      "classList": [
                        "fd-bd-person-avatar"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.filmDetail.directors&&this.checkEmpty(this.filmDetail.directors[0],'name')}
                      },
                      "classList": [
                        "fd-bd-person-name"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": "导演"
                      },
                      "classList": [
                        "fd-bd-person-role"
                      ]
                    }
                  ]
                },
                {
                  "type": "block",
                  "attr": {},
                  "repeat": function () {return this.filmDetail.casts},
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "fd-bd-person-item"
                      ],
                      "events": {
                        "click": function (evt) {this.showPersonDetail(this.$item.id,this.$item.name,evt)}
                      },
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.checkEmpty(this.$item,'avatars','medium')}
                          },
                          "classList": [
                            "fd-bd-person-avatar"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.$item.name}
                          },
                          "classList": [
                            "fd-bd-person-name"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": "演员"
                          },
                          "classList": [
                            "fd-bd-person-role"
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
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "fd-bd"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "标签"
          },
          "classList": [
            "fd-bd-title"
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "fd-bd-tag"
          ],
          "children": [
            {
              "type": "block",
              "attr": {},
              "repeat": function () {return this.filmDetail.genres},
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item}
                  },
                  "classList": [
                    "fd-bd-tag-item"
                  ],
                  "events": {
                    "click": function (evt) {this.searchTag(this.$item,evt)}
                  }
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

/***/ 31:
/***/ (function(module, exports) {

module.exports = {
  ".film-detail": {
    "flexDirection": "column"
  },
  ".fd-hd": {
    "width": "750px",
    "height": "600px"
  },
  ".fd-hd-bg": {
    "width": "750px",
    "height": "600px",
    "opacity": 0.1
  },
  ".fd-intro": {
    "width": "750px",
    "height": "600px"
  },
  ".fd-cover": {
    "width": "375px",
    "height": "500px",
    "marginTop": "50px",
    "marginLeft": "20px",
    "borderRadius": "8px"
  },
  ".fd-intro-info": {
    "width": "375px",
    "marginTop": "50px",
    "marginLeft": "40px",
    "flexDirection": "column"
  },
  ".fd-title": {
    "marginBottom": "30px",
    "fontSize": "42px",
    "color": "#000000"
  },
  ".fd-intro-txt": {
    "marginBottom": "18px",
    "color": "#000000",
    "lineHeight": "40px"
  },
  ".fd-data": {
    "height": "150px",
    "alignItems": "center",
    "borderStyle": "solid",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#f4f4f4"
  },
  ".fd-data-item": {
    "flex": 1,
    "textAlign": "center",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "borderStyle": "solid",
    "borderLeftWidth": "1px",
    "borderLeftColor": "#eeeeee"
  },
  ".fd-data-num": {
    "fontSize": "40px",
    "color": "#444444"
  },
  ".fd-data-title": {
    "color": "#999999"
  },
  ".fd-bd": {
    "flexDirection": "column",
    "paddingTop": "0px",
    "paddingRight": "40px",
    "paddingBottom": "40px",
    "paddingLeft": "40px"
  },
  ".fd-bd-title": {
    "paddingLeft": "20px",
    "marginTop": "40px",
    "marginBottom": "20px",
    "fontSize": "32px",
    "fontWeight": "bold",
    "color": "#444444",
    "borderStyle": "solid",
    "borderLeftWidth": "10px",
    "borderLeftColor": "#47a86c"
  },
  ".fd-bd-person": {
    "width": "750px",
    "height": "550px"
  },
  ".fd-bd-person-item": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".fd-bd-person-avatar": {
    "width": "280px",
    "height": "400px"
  },
  ".fd-bd-person-name": {
    "color": "#666666",
    "textAlign": "center"
  },
  ".fd-bd-person-role": {
    "color": "#999999",
    "textAlign": "center"
  },
  ".fd-bd-tag-item": {
    "paddingTop": "5px",
    "paddingRight": "10px",
    "paddingBottom": "5px",
    "paddingLeft": "10px",
    "marginRight": "15px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#cccccc",
    "borderRightColor": "#cccccc",
    "borderBottomColor": "#cccccc",
    "borderLeftColor": "#cccccc",
    "borderRadius": "10px",
    "color": "#666666"
  }
}

/***/ }),

/***/ 32:
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
        filmDetail: {}
    },
    onInit: function onInit() {
        this.$page.setTitleBar({ text: this.title });
        this.fetchFilmDetail();
    },
    checkEmpty: function checkEmpty() {
        var _$app$$def;

        return (_$app$$def = this.$app.$def).checkEmpty.apply(_$app$$def, arguments);
    },
    fetchFilmDetail: function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
            var response;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return _system4.default.fetch({
                                url: _data.URL_CONST.subject_url + this.id,
                                method: "GET"
                            });

                        case 3:
                            response = _context.sent;

                            this.filmDetail = JSON.parse(response.data.data);
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

        function fetchFilmDetail() {
            return _ref.apply(this, arguments);
        }

        return fetchFilmDetail;
    }(),
    showPersonDetail: function showPersonDetail(id, name) {
        _system2.default.push({
            uri: '/PersonDetail',
            params: {
                id: id,
                title: name
            }
        });
    },
    searchTag: function searchTag(tag) {
        _system2.default.push({
            uri: '/SearchResult',
            params: {
                url: _data.URL_CONST.searchByTag_url + tag,
                title: tag
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