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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2)
var $app_template$ = __webpack_require__(6)
var $app_style$ = __webpack_require__(7)
var $app_script$ = __webpack_require__(8)

$app_define$('@app-component/filmlist', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(3)
var $app_style$ = __webpack_require__(4)
var $app_script$ = __webpack_require__(5)

$app_define$('@app-component/filmitem', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "filmItem"
  ],
  "events": {
    "click": function (evt) {this.showFilmDetail(this.film.id,this.film.title,evt)}
  },
  "children": [
    {
      "type": "stack",
      "attr": {},
      "classList": [
        "rating-container"
      ],
      "children": [
        {
          "type": "image",
          "attr": {
            "src": function () {return this.checkEmpty(this.film,'images','large')}
          },
          "classList": [
            "file-cover-image"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return (this.film&&this.film.rating&&this.film.rating.average||0) + '分'}
          },
          "classList": [
            "film-rating"
          ]
        }
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": function () {return this.film.title}
      },
      "classList": [
        "film-title"
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "film-tag"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.$item}
          },
          "classList": [
            "film-tag-item"
          ],
          "repeat": function () {return this.film.genres},
          "events": {
            "click": function (evt) {this.searchTag(this.$item,evt)}
          }
        }
      ]
    }
  ]
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {
  ".filmItem": {
    "width": "375px",
    "marginTop": "0px",
    "marginRight": "5px",
    "marginBottom": "20px",
    "marginLeft": "5px",
    "borderRadius": "10px",
    "backgroundColor": "#ffffff",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#e4e4e4",
    "borderRightColor": "#e4e4e4",
    "borderBottomColor": "#e4e4e4",
    "borderLeftColor": "#e4e4e4",
    "flexDirection": "column"
  },
  ".file-cover-image": {
    "width": "375px",
    "height": "500px"
  },
  ".rating-container": {
    "width": "375px",
    "height": "500px",
    "flexDirection": "column"
  },
  ".film-rating": {
    "height": "50px",
    "lineHeight": "50px",
    "marginTop": "450px",
    "textAlign": "right",
    "paddingRight": "20px",
    "fontSize": "24px",
    "width": "375px",
    "opacity": 0.55,
    "backgroundColor": "#000000",
    "color": "#ffffff"
  },
  ".film-title": {
    "paddingTop": "16px",
    "paddingRight": "16px",
    "paddingBottom": "16px",
    "paddingLeft": "16px",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  ".film-tag": {
    "marginTop": "10px",
    "marginRight": "0px",
    "marginBottom": "20px",
    "marginLeft": "16px",
    "justifyContent": "flex-start",
    "flexWrap": "wrap"
  },
  ".film-tag-item": {
    "paddingTop": "4px",
    "paddingRight": "6px",
    "paddingBottom": "4px",
    "paddingLeft": "6px",
    "marginRight": "10px",
    "fontSize": "24px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#e4e4e4",
    "borderRightColor": "#e4e4e4",
    "borderBottomColor": "#e4e4e4",
    "borderLeftColor": "#e4e4e4",
    "borderRadius": "10px",
    "backgroundColor": "#fafafa",
    "color": "#666666"
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

var _data = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: ["film"],
    onInit: function onInit() {},
    checkEmpty: function checkEmpty() {
        var _$app$$def;

        return (_$app$$def = this.$app.$def).checkEmpty.apply(_$app$$def, arguments);
    },
    showFilmDetail: function showFilmDetail(id, title) {
        _system2.default.push({
            uri: '/FilmDetail',
            params: {
                id: id,
                title: title
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
};}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  "type": "refresh",
  "attr": {
    "refreshing": function () {return this.refreshing}
  },
  "events": {
    "refresh": "onrefresh"
  },
  "children": [
    {
      "type": "list",
      "attr": {
        "columns": "2"
      },
      "classList": function () {return ['film-list', this.marginBottom]},
      "events": {
        "scrollbottom": "loadMoreData"
      },
      "children": [
        {
          "type": "block",
          "attr": {},
          "repeat": function () {return this.films},
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": "product"
              },
              "children": [
                {
                  "type": "filmitem",
                  "attr": {
                    "film": function () {return this.$item}
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "block",
          "attr": {},
          "shown": function () {return this.hasMore},
          "children": [
            {
              "type": "block",
              "attr": {},
              "shown": function () {return this.films.length%2!=0},
              "children": [
                {
                  "type": "list-item",
                  "attr": {
                    "columnspan": "1",
                    "type": "placeholder"
                  },
                  "classList": [
                    "tip-message-container"
                  ]
                }
              ]
            },
            {
              "type": "block",
              "attr": {},
              "shown": function () {return this.films.length>=4||this.films.length===0},
              "children": [
                {
                  "type": "list-item",
                  "attr": {
                    "type": "loadMore",
                    "columnspan": "1"
                  },
                  "classList": [
                    "tip-message-container"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "spinner"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "block",
          "attr": {},
          "shown": function () {return !(this.hasMore)},
          "children": [
            {
              "type": "block",
              "attr": {},
              "shown": function () {return this.films.length%2!=0},
              "children": [
                {
                  "type": "list-item",
                  "attr": {
                    "columnspan": "1",
                    "type": "placeholder"
                  },
                  "classList": [
                    "tip-message-container"
                  ]
                }
              ]
            },
            {
              "type": "list-item",
              "attr": {
                "type": "loadMore",
                "columnspan": "1"
              },
              "classList": [
                "tip-message-container"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "没有更多内容了"
                  },
                  "classList": [
                    "tip-message"
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
/* 7 */
/***/ (function(module, exports) {

module.exports = {
  ".film-list": {
    "width": "750px",
    "flexWrap": "wrap"
  },
  ".marginBottom": {
    "marginBottom": "180px"
  },
  ".tip-message-container": {
    "width": "750px",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".tip-message": {
    "color": "#67CF22",
    "fontSize": "40px"
  },
  ".spinner": {
    "animationName": "rotateplane",
    "animationDuration": "1000ms",
    "animationTimingFunction": "linear",
    "animationIterationCount": -1,
    "width": "40px",
    "height": "40px",
    "backgroundColor": "#67CF22",
    "marginTop": "8px"
  },
  "@KEYFRAMES": {
    "rotateplane": [
      {
        "transform": "{\"rotateX\":\"0deg\"}",
        "time": 0
      },
      {
        "transform": "{\"rotateX\":\"-180.1deg\"}",
        "time": 50
      },
      {
        "transform": "{\"rotateX\":\"-180deg\"}",
        "time": 100
      }
    ]
  }
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

var _data = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: ["refreshing", "hasMore", "films", "marginBottom"],
    onInit: function onInit() {},
    onrefresh: function onrefresh() {
        this.$dispatch("onrefresh");
    },
    loadMoreData: function loadMoreData() {
        this.$dispatch("loadMoreData");
    }
};}

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)
__webpack_require__(18)
__webpack_require__(22)
var $app_template$ = __webpack_require__(26)
var $app_style$ = __webpack_require__(27)
var $app_script$ = __webpack_require__(28)

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(19)
var $app_style$ = __webpack_require__(20)
var $app_script$ = __webpack_require__(21)

$app_define$('@app-component/search', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "search-hd"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "search-area"
      ],
      "children": [
        {
          "type": "select",
          "attr": {},
          "classList": [
            "search-type"
          ],
          "events": {
            "change": "changeSelect"
          },
          "children": [
            {
              "type": "option",
              "attr": {
                "value": "0",
                "content": "默认"
              },
              "classList": [
                "search-option"
              ]
            },
            {
              "type": "option",
              "attr": {
                "value": "1",
                "content": "类型"
              },
              "classList": [
                "search-option"
              ]
            }
          ]
        },
        {
          "type": "input",
          "attr": {
            "placeholder": function () {return 0==this.searchType?'请输入电影标题、演员或导演':'请输入影片类型，如：爱情、喜剧'}
          },
          "classList": [
            "search-txt"
          ],
          "events": {
            "change": "updateSearchText"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "搜索"
          },
          "classList": [
            "search-btn"
          ],
          "events": {
            "click": "search"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "search-keyword"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "热门搜索"
          },
          "classList": [
            "search-keyword-title"
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "tag-group"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.$item}
              },
              "repeat": function () {return this.hotKeyword},
              "events": {
                "click": function (evt) {this.searchKeyword(this.$item,evt)}
              },
              "classList": [
                "search-keyword-item"
              ]
            }
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "热门标签"
          },
          "classList": [
            "search-keyword-title"
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "tag-group"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.$item}
              },
              "repeat": function () {return this.hotTag},
              "events": {
                "click": function (evt) {this.searchTag(this.$item,evt)}
              },
              "classList": [
                "search-keyword-item"
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {
  ".search-hd": {
    "width": "100%",
    "backgroundColor": "#ffffff",
    "borderStyle": "solid",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#f8f8f8",
    "flexDirection": "column"
  },
  ".search-area": {
    "marginTop": "30px",
    "marginRight": "30px",
    "marginBottom": "30px",
    "marginLeft": "30px"
  },
  ".search-type": {
    "width": "130px",
    "height": "80px",
    "fontSize": "32px"
  },
  ".search-option": {
    "fontSize": "60px"
  },
  ".search-txt": {
    "width": "100%",
    "height": "80px",
    "fontSize": "30px",
    "borderRadius": "10px",
    "paddingTop": "20px",
    "paddingLeft": "20px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#eeeeee",
    "borderRightColor": "#eeeeee",
    "borderBottomColor": "#eeeeee",
    "borderLeftColor": "#eeeeee",
    "textAlign": "left"
  },
  ".search-btn": {
    "height": "80px",
    "width": "120px",
    "fontSize": "28px"
  },
  ".search-keyword": {
    "paddingTop": "30px",
    "paddingRight": "30px",
    "paddingBottom": "30px",
    "paddingLeft": "30px",
    "flexDirection": "column"
  },
  ".search-keyword-title": {
    "paddingLeft": "20px",
    "marginTop": "40px",
    "marginBottom": "20px",
    "fontSize": "30px",
    "borderStyle": "solid",
    "borderLeftWidth": "10px",
    "borderLeftColor": "#47a86c"
  },
  ".search-keyword-item": {
    "paddingTop": "10px",
    "paddingRight": "10px",
    "paddingBottom": "10px",
    "paddingLeft": "10px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#cccccc",
    "borderRightColor": "#cccccc",
    "borderBottomColor": "#cccccc",
    "borderLeftColor": "#cccccc",
    "borderRadius": "15px",
    "backgroundColor": "#fbfbfb",
    "marginTop": "0px",
    "marginRight": "10px",
    "marginBottom": "10px",
    "marginLeft": "0px",
    "color": "#555555"
  },
  ".tag-group": {
    "flexDirection": "row",
    "flexWrap": "wrap"
  }
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

var _data = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var searchUrl = [_data.URL_CONST.searchByKeyword_url, _data.URL_CONST.searchByTag_url];

exports.default = {
    data: {
        searchType: 0,
        hotKeyword: [],
        hotTag: ["动作", "喜剧", "爱情", "悬疑"],
        searchText: ""
    },
    onInit: function onInit() {},
    updateSearchText: function updateSearchText(e) {
        this.searchText = e.text;
    },
    search: function search() {
        _system2.default.push({
            uri: '/SearchResult',
            params: {
                url: searchUrl[this.searchType] + this.searchText,
                title: this.searchText
            }
        });
    },
    changeSelect: function changeSelect(_ref) {
        var newValue = _ref.newValue;

        this.searchType = newValue;
    },
    searchTag: function searchTag(tag) {
        _system2.default.push({
            uri: '/SearchResult',
            params: {
                url: _data.URL_CONST.searchByTag_url + tag,
                title: tag
            }
        });
    },
    searchKeyword: function searchKeyword(keyword) {
        _system2.default.push({
            uri: '/SearchResult',
            params: {
                url: _data.URL_CONST.searchByKeyword_url + keyword,
                title: keyword
            }
        });
    }
};}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(23)
var $app_style$ = __webpack_require__(24)
var $app_script$ = __webpack_require__(25)

$app_define$('@app-component/tabbtn', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "btn"
  ],
  "events": {
    "click": function (evt) {this.clickTab(this.btn.index,evt)}
  },
  "children": [
    {
      "type": "block",
      "attr": {},
      "shown": function () {return this.active==this.btn.index},
      "children": [
        {
          "type": "image",
          "attr": {
            "src": function () {return this.btn.selectedImage}
          },
          "classList": [
            "img"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.btn.name}
          },
          "classList": [
            "selectedText"
          ]
        }
      ]
    },
    {
      "type": "block",
      "attr": {},
      "shown": function () {return !(this.active==this.btn.index)},
      "children": [
        {
          "type": "image",
          "attr": {
            "src": function () {return this.btn.image}
          },
          "classList": [
            "img"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.btn.name}
          },
          "classList": [
            "text"
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {
  ".btn": {
    "flex": 1,
    "flexDirection": "column",
    "backgroundColor": "#eeeeee",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".img": {
    "width": "60px",
    "height": "60px"
  },
  ".text": {
    "fontSize": "32px"
  },
  ".selectedText": {
    "fontSize": "32px",
    "color": "#47a86c"
  }
}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: ["btn", "active"],
    onInit: function onInit() {},
    clickTab: function clickTab(index) {
        this.$dispatch("changeActiveTab", { params: index });
    }
};}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "block",
      "attr": {},
      "shown": function () {return this.active==2},
      "children": [
        {
          "type": "search",
          "attr": {
            "hotKeyword": function () {return this.hotKeyword}
          }
        }
      ]
    },
    {
      "type": "block",
      "attr": {},
      "shown": function () {return !(this.active==2)},
      "children": [
        {
          "type": "filmlist",
          "attr": {
            "refreshing": function () {return this.refreshing},
            "films": function () {return this.films},
            "hasMore": function () {return this.hasMore},
            "marginBottom": function () {return this.marginBottom}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "tabBar"
      ],
      "children": [
        {
          "type": "tabbtn",
          "attr": {
            "btn": function () {return this.popular},
            "active": function () {return this.active}
          }
        },
        {
          "type": "tabbtn",
          "attr": {
            "btn": function () {return this.coming},
            "active": function () {return this.active}
          }
        },
        {
          "type": "tabbtn",
          "attr": {
            "btn": function () {return this.search},
            "active": function () {return this.active}
          }
        },
        {
          "type": "tabbtn",
          "attr": {
            "btn": function () {return this.top},
            "active": function () {return this.active}
          }
        }
      ]
    }
  ]
}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {
  ".tabBar": {
    "flex": 1,
    "flexDirection": "row",
    "height": "140px",
    "position": "fixed",
    "left": "0px",
    "bottom": "0px"
  }
}

/***/ }),
/* 28 */
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
        active: 0,
        popular: {
            image: "/Common/images/popular_icon.png",
            selectedImage: "/Common/images/popular_active_icon.png",
            name: "热映",
            index: 0
        },
        coming: {
            image: "/Common/images/coming_icon.png",
            selectedImage: "/Common/images/coming_active_icon.png",
            name: "待映",
            index: 1
        },
        search: {
            image: "/Common/images/search_icon.png",
            selectedImage: "/Common/images/search_active_icon.png",
            name: "搜索",
            index: 2
        },
        top: {
            image: "/Common/images/top_icon.png",
            selectedImage: "/Common/images/top_active_icon.png",
            name: "排行",
            index: 3
        },
        hasMore: true,
        start: 0,

        films: [],
        refreshing: false,
        marginBottom: "marginBottom",
        hotKeyword: []
    },

    onInit: function onInit() {
        this.$on("changeActiveTab", this.changeActiveTab);
        this.$on("onrefresh", this.onrefresh);
        this.$on("loadMoreData", this.loadMoreData);
    },
    onReady: function onReady() {
        this.fetchFilms();
    },
    cleanFilms: function cleanFilms() {
        this.hasMore = true;
        this.start = 0;
        this.films = [];
    },
    fetchFilms: function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
            var url, response, res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            url = '';
                            _context.t0 = this.active;
                            _context.next = _context.t0 === 0 ? 4 : _context.t0 === 1 ? 6 : _context.t0 === 2 ? 8 : _context.t0 === 3 ? 9 : 11;
                            break;

                        case 4:
                            url = _data.URL_CONST.popular_url;
                            return _context.abrupt('break', 11);

                        case 6:
                            url = _data.URL_CONST.coming_url;
                            return _context.abrupt('break', 11);

                        case 8:
                            return _context.abrupt('break', 11);

                        case 9:
                            url = _data.URL_CONST.top_url;
                            return _context.abrupt('break', 11);

                        case 11:
                            _context.prev = 11;
                            _context.next = 14;
                            return _system4.default.fetch({
                                url: url,
                                method: "GET",
                                data: {
                                    city: _data.PAGE_CONFIG.city,
                                    start: this.start,
                                    count: _data.PAGE_CONFIG.count
                                }

                            });

                        case 14:
                            response = _context.sent;
                            res = JSON.parse(response.data.data);


                            if (res.subjects.length === 0) {
                                this.hasMore = false;
                            } else {
                                this.films = this.films.concat(res.subjects);
                                this.start = this.start + res.subjects.length;
                                this.setHotKeyword();
                            }
                            if (this.refreshing) {
                                this.refreshing = false;
                            }

                            _context.next = 23;
                            break;

                        case 20:
                            _context.prev = 20;
                            _context.t1 = _context['catch'](11);

                            console.info('error', _context.t1);

                        case 23:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[11, 20]]);
        }));

        function fetchFilms() {
            return _ref.apply(this, arguments);
        }

        return fetchFilms;
    }(),
    setHotKeyword: function setHotKeyword() {
        if (this.active === 0) {
            this.hotKeyword = this.films.slice(0, 14).map(function (item) {
                return item.title;
            });
        }
    },
    changeActiveTab: function changeActiveTab(event) {
        this.cleanFilms();
        var index = event.detail.params;
        this.active = index;
        switch (index) {
            case 0:
                this.$page.setTitleBar({ text: "热映" });
                break;
            case 1:
                this.$page.setTitleBar({ text: "待映" });
                break;
            case 2:
                this.$page.setTitleBar({ text: "搜索" });
                break;
            case 3:
                this.$page.setTitleBar({ text: "排行" });
                break;

        }

        if (index != 2) {
            this.fetchFilms();
        }
    },
    loadMoreData: function loadMoreData() {
        this.fetchFilms();
    },
    onrefresh: function onrefresh() {
        this.cleanFilms();
        this.refreshing = true;
        this.fetchFilms();
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
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map