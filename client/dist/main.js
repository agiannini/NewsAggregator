(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api-service.service.ts":
/*!****************************************!*\
  !*** ./src/app/api-service.service.ts ***!
  \****************************************/
/*! exports provided: ApiServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiServiceService", function() { return ApiServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");





var guardianHeader = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'api-key': 'ebe21b59-c243-4a96-b1c5-6003a7eb568d',
        'Access-Control-Allow-Origin': '*'
    })
};
var ApiServiceService = /** @class */ (function () {
    function ApiServiceService(http) {
        this.http = http;
    }
    ApiServiceService.prototype.getGuardianSearch = function () {
        return this.http.get('https://content.guardianapis.com/search?q=Brexit&show-fields=thumbnail&api-key=' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].guardian_key);
    };
    ApiServiceService.prototype.searchGuardian = function (term) {
        return this.http.get('https://content.guardianapis.com/search?q=' + term + '&show-fields=thumbnail&api-key=' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].guardian_key);
    };
    ApiServiceService.prototype.searchNYT = function (term) {
        return this.http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + term + '&api-key=' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].nytimes_key);
    };
    ApiServiceService.prototype.searchCategoryNYT = function (categoryName) {
        return this.http.get('https://api.nytimes.com/svc/topstories/v2/' + categoryName + '.json?api-key=' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].nytimes_key);
    };
    // The gaurdians category APIc needs a header attached
    ApiServiceService.prototype.searchGuardianCategories = function (categoryName) {
        return this.http.get('https://content.guardianapis.com/' + categoryName + "?api-key=" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].guardian_key);
    };
    ApiServiceService.prototype.searchNewsAPI = function (term) {
        return this.http.get('https://newsapi.org/v2/everything?q=' + term + '&language=en&sortBy=publishedAt&pageSize=100&apiKey=' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].newsAPI_key);
    };
    ApiServiceService.prototype.NewsAPI_Headlines = function () {
        return this.http.get('https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].newsAPI_key);
    };
    ApiServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiServiceService);
    return ApiServiceService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-header></app-header>\r\n<router-outlet>\r\n  </router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'News';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _headlines_headlines_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./headlines/headlines.component */ "./src/app/headlines/headlines.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _result_page_result_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./result-page/result-page.component */ "./src/app/result-page/result-page.component.ts");
/* harmony import */ var _test_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./test.directive */ "./src/app/test.directive.ts");
/* harmony import */ var _news_categories_news_categories_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./news-categories/news-categories.component */ "./src/app/news-categories/news-categories.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");













var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _result_page_result_page_component__WEBPACK_IMPORTED_MODULE_9__["ResultPageComponent"] },
    { path: 'search/:term', component: _headlines_headlines_component__WEBPACK_IMPORTED_MODULE_6__["HeadlinesComponent"] },
    { path: 'categories/:term', component: _news_categories_news_categories_component__WEBPACK_IMPORTED_MODULE_11__["NewsCategoriesComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _headlines_headlines_component__WEBPACK_IMPORTED_MODULE_6__["HeadlinesComponent"],
                _result_page_result_page_component__WEBPACK_IMPORTED_MODULE_9__["ResultPageComponent"],
                _test_directive__WEBPACK_IMPORTED_MODULE_10__["TestDirective"],
                _news_categories_news_categories_component__WEBPACK_IMPORTED_MODULE_11__["NewsCategoriesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes)
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_12__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"container\">\n      <header class=\"blog-header py-3\">\n        <div class=\"row flex-nowrap justify-content-between align-items-center\">\n          <div class=\"col-4 pt-1\">\n            <a class=\"text-muted\" href=\"#\">Home</a>\n          </div>\n          <div class=\"col-4 text-center\">\n            <a class=\"blog-header-logo text-dark\" href=\"#\">News Aggregator</a>\n          </div>\n          <div class=\"col-4 d-flex justify-content-end align-items-center\">\n            <form #search=\"ngForm\" class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" name=\"searchQuery\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\"  [(ngModel)]=\"searchTerm.term\">\n            <a routerLink=\"/search/{{searchTerm.term}}\"> <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button></a>\n          </form>\n          </div>\n        </div>\n      </header>\n\n\n\n      <div class=\"nav-scroller py-1 mb-2\">\n        <nav class=\"nav d-flex justify-content-between\">\n          <a routerLink=\"categories/world\" class=\"p-2 text-muted\">World</a>\n          <a routerLink=\"categories/politics\" class=\"p-2 text-muted\">U.S.</a>\n          <a routerLink=\"categories/technology\" class=\"p-2 text-muted\" href=\"#\">Technology</a>\n          <a routerLink=\"categories/theater\" class=\"p-2 text-muted\" href=\"#\">Theater</a>\n          <a routerLink=\"categories/science\" class=\"p-2 text-muted\" href=\"#\">Science</a>\n          <a routerLink=\"categories/arts\" class=\"p-2 text-muted\" href=\"#\">Arts</a>\n          <a routerLink=\"categories/sports\" class=\"p-2 text-muted\" href=\"#\">Sports</a>\n          <a routerLink=\"categories/opinion\" class=\"p-2 text-muted\" href=\"#\">Opinion</a>\n          <a routerLink=\"categories/food\" class=\"p-2 text-muted\" href=\"#\">Food</a>\n          <a routerLink=\"categories/business\" class=\"p-2 text-muted\" href=\"#\">Business</a>\n          <a routerLink=\"categories/travel\" class=\"p-2 text-muted\" href=\"#\">Travel</a>\n        </nav>\n      </div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(api) {
        this.api = api;
        this.searchTerm = {};
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/headlines/headlines.component.css":
/*!***************************************************!*\
  !*** ./src/app/headlines/headlines.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n  width: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGxpbmVzL2hlYWRsaW5lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvaGVhZGxpbmVzL2hlYWRsaW5lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/headlines/headlines.component.html":
/*!****************************************************!*\
  !*** ./src/app/headlines/headlines.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"mx-auto\" style=\"width:75vw\">\n\n<div class=\"jumbotron p-4 p-md-5 text-white rounded bg-dark\">\n    <h1 class=\"display-4 font-italic\">You Searched For: {{searchTerm}}</h1>\n    <p class=\"lead my-3\">Here are results from a variety of news sources </p>\n</div>\n\n<div class=\"card-deck\">\n\n\n\n      <div *ngFor=\"let headline of newsAPI_results\">\n        <div class=\"card mx-3 px-3\" style=\"width:300px\">\n          <img class=\"card-img-top\" src=\"{{headline.urlToImage}}\">\n          <strong class=\"d-inline-block mb-2 text-primary\">{{headline[\"source\"].name}}</strong>\n          <h3 class=\"mb-0\">\n            <a class=\"text-dark stretched-link\" href=\"{{headline.url}}\">{{headline.title}}</a>\n          </h3>\n          <div class=\"mb-1 text-muted\"></div>\n        </div>\n      </div>\n\n\n\n\n\n\n        <div *ngFor=\"let headline of guardianResults\">\n          <div class=\"card mx-3 px-3\" style=\"width:300px\">\n            <img class=\"card-img-top\" src=\"{{headline.fields.thumbnail}}\">\n            <strong class=\"d-inline-block mb-2 text-primary\">Guardian {{headline.sectionName}}</strong>\n            <h3 class=\"mb-0\">\n              <a class=\"text-dark stretched-link\" href=\"{{headline.webUrl}}\">{{headline.webTitle}}</a>\n            </h3>\n            <div class=\"mb-1 text-muted\"></div>\n          </div>\n        </div>\n\n\n    <div *ngFor=\"let headline of timesResults\">\n      <div class=\"card mx-3 px-3\" style=\"width:300px\">\n        <img class=\"card-img-top mx-auto\" src=\"https://www.nytimes.com/{{headline.multimedia[0].url}}\">\n        <strong class=\"card-title text-center\"> New York Times </strong>\n        <h3 class=\"mb-0\">\n          <a class=\"text-dark stretched-link\" href=\"{{headline.web_url}}\">{{headline.headline.main}}</a>\n        </h3>\n        <p class=\"card-text\">{{headline.lead_paragraph}}></p>\n      </div>\n    </div>\n\n\n\n\n\n\n\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/headlines/headlines.component.ts":
/*!**************************************************!*\
  !*** ./src/app/headlines/headlines.component.ts ***!
  \**************************************************/
/*! exports provided: HeadlinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadlinesComponent", function() { return HeadlinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeadlinesComponent = /** @class */ (function () {
    function HeadlinesComponent(route, api) {
        this.route = route;
        this.api = api;
        this.headlines = null;
        this.newsAPI_results = [];
        this.guardianResults = [];
        this.timesResults = [];
        this.searchTerm = "";
        this.imageCheck = false;
        this.img = {};
    }
    HeadlinesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.searchTerm = params['term'];
            _this.callService();
        });
    };
    // Purpose: to call the service class to retriece results for the given search
    // Notes:   After the NYT call, it adds pictures to any without
    HeadlinesComponent.prototype.callService = function () {
        var _this = this;
        this.api.searchNYT(this.searchTerm)
            .subscribe(function (data) {
            _this.timesResults = data["response"].docs;
            //console.log(this.timesResults);
            for (var x in _this.timesResults) {
                if (_this.timesResults[x].multimedia.length == 0) {
                    _this.img = { 'url': 'images/2019/06/17/science/17DOGS/17DOGS-threeByTwoMediumAt2X.jpg?quality=75&auto=webp&disable=upscale&width=600' };
                    _this.timesResults[x].multimedia.push(_this.img);
                }
            }
        });
        this.api.searchGuardian(this.searchTerm)
            .subscribe(function (data) {
            _this.guardianResults = data["response"].results;
            //  console.log(this.guardianResults);
        });
        this.api.searchNewsAPI(this.searchTerm)
            .subscribe(function (data) {
            console.log(data["articles"]);
            _this.newsAPI_results = data["articles"];
        });
    };
    HeadlinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-headlines',
            template: __webpack_require__(/*! ./headlines.component.html */ "./src/app/headlines/headlines.component.html"),
            styles: [__webpack_require__(/*! ./headlines.component.css */ "./src/app/headlines/headlines.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"]])
    ], HeadlinesComponent);
    return HeadlinesComponent;
}());

//  getImage(url) {
//    console.log("The URL is "+url);
//    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
//  }


/***/ }),

/***/ "./src/app/news-categories/news-categories.component.css":
/*!***************************************************************!*\
  !*** ./src/app/news-categories/news-categories.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3MtY2F0ZWdvcmllcy9uZXdzLWNhdGVnb3JpZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/news-categories/news-categories.component.html":
/*!****************************************************************!*\
  !*** ./src/app/news-categories/news-categories.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mx-auto\" style=\"width:75vw\">\n\n\n  <div class=\"jumbotron p-4 p-md-5 text-white rounded bg-dark\">\n    <h1 class=\"display-4 font-italic\">This is the {{categoryName}} section</h1>\n    <p class=\"lead my-3\">Here are a today's {{categoryName}} stories from a variety of websites</p>\n    <p class=\"lead mb-0 text-white font-weight-bold\">Here are todays headlines:</p>\n  </div>\n\n\n  <div class=\"card-deck\">\n\n\n\n\n    <div *ngFor=\"let headline of timesResults\">\n      <div class=\"card mx-3 px-3\" style=\"width:250px\">\n        <img class=\"card-img-top mx-auto\" style=\"width:150px\" src=\"{{headline.multimedia[0].url}}\">\n        <strong class=\"card-title text-center\"> New York Times </strong>\n        <h3 class=\"mb-0\">\n          <a class=\"text-dark stretched-link\" target=\"_blank\" href=\"{{headline.url}}\">{{headline.title}}</a>\n        </h3>\n        <p class=\"card-text\">{{headline.lead_paragraph}}></p>\n\n      </div>\n    </div>\n\n    <div *ngFor=\"let headline of newsAPI_Results\">\n      <div class=\"card mx-3 px-3\" style=\"width:300px\">\n        <img class=\"card-img-top\" src=\"{{headline.urlToImage}}\">\n        <strong class=\"d-inline-block mb-2 text-primary\">{{headline[\"source\"].name}}</strong>\n        <h3 class=\"mb-0\">\n          <a class=\"text-dark stretched-link\" href=\"{{headline.url}}\">{{headline.title}}</a>\n        </h3>\n        <div class=\"mb-1 text-muted\"></div>\n      </div>\n    </div>\n\n\n\n\n\n\n    <div *ngFor=\"let headline of guardianResults\">\n      <div class=\"card mx-3 px-3\" style=\"width:300px\">\n        <img class=\"card-img-top\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/The_Guardian_2018.svg/1280px-The_Guardian_2018.svg.png\">\n        <strong class=\"d-inline-block mb-2 text-primary\">Guardian {{headline.sectionName}}</strong>\n        <h3 class=\"mb-0\">\n          <a class=\"text-dark stretched-link\" target=\"_blank\" href=\"{{headline.webUrl}}\">{{headline.webTitle}}</a>\n        </h3>\n        <div class=\"mb-1 text-muted\"></div>\n      </div>\n    </div>\n\n\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/news-categories/news-categories.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/news-categories/news-categories.component.ts ***!
  \**************************************************************/
/*! exports provided: NewsCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsCategoriesComponent", function() { return NewsCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");




var NewsCategoriesComponent = /** @class */ (function () {
    function NewsCategoriesComponent(route, api) {
        this.route = route;
        this.api = api;
        this.categoryName = "";
        this.timesResults = [];
        this.guardianResults = [];
        this.newsAPI_Results = [];
        this.img = {};
    }
    NewsCategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.categoryName = params['term'];
            _this.callService();
        });
    };
    NewsCategoriesComponent.prototype.callService = function () {
        var _this = this;
        this.api.searchCategoryNYT(this.categoryName)
            .subscribe(function (data) {
            _this.timesResults = data["results"];
            for (var x in _this.timesResults) {
                if (_this.timesResults[x].multimedia.length == 0) {
                    _this.img = { 'url': 'https://static01.nyt.com/images/2015/02/06/admin/the-new-york-times-masthead-1423244159624/the-new-york-times-masthead-1423244159624-facebookJumbo.png' };
                    _this.timesResults[x].multimedia.push(_this.img);
                }
            }
        });
        switch (this.categoryName) {
            case "theater": {
                this.api.searchGuardianCategories('stage')
                    .subscribe(function (data) {
                    _this.guardianResults = data["response"].results;
                });
                this.api.searchNewsAPI('broadway')
                    .subscribe(function (data) {
                    console.log(data);
                    _this.newsAPI_Results = data["articles"];
                });
                break;
            }
            case "arts": {
                this.api.searchGuardianCategories('culture')
                    .subscribe(function (data) {
                    _this.guardianResults = data["response"].results;
                });
                this.api.searchNewsAPI('art')
                    .subscribe(function (data) {
                    console.log(data);
                    _this.newsAPI_Results = data["articles"];
                });
                break;
            }
            case "sports": {
                this.api.searchGuardianCategories('sport')
                    .subscribe(function (data) {
                    _this.guardianResults = data["response"].results;
                });
                this.api.searchNewsAPI('sports')
                    .subscribe(function (data) {
                    console.log(data);
                    _this.newsAPI_Results = data["articles"];
                });
                break;
            }
            case "opinion": {
                this.api.searchGuardianCategories('commentisfree')
                    .subscribe(function (data) {
                    _this.guardianResults = data["response"].results;
                });
                this.api.searchNewsAPI('opinion')
                    .subscribe(function (data) {
                    console.log(data);
                    _this.newsAPI_Results = data["articles"];
                });
                break;
            }
            default: {
                this.api.searchGuardianCategories(this.categoryName)
                    .subscribe(function (data) {
                    _this.guardianResults = data["response"].results;
                });
                this.api.searchNewsAPI(this.categoryName)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.newsAPI_Results = data["articles"];
                });
                break;
            }
        }
    };
    NewsCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-categories',
            template: __webpack_require__(/*! ./news-categories.component.html */ "./src/app/news-categories/news-categories.component.html"),
            styles: [__webpack_require__(/*! ./news-categories.component.css */ "./src/app/news-categories/news-categories.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"]])
    ], NewsCategoriesComponent);
    return NewsCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/result-page/result-page.component.css":
/*!*******************************************************!*\
  !*** ./src/app/result-page/result-page.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdC1wYWdlL3Jlc3VsdC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/result-page/result-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/result-page/result-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mx-auto\" style=\"width:80vw\">\r\n\r\n  <div class=\"jumbotron p-4 p-md-5 text-white rounded bg-dark\">\r\n    <h1 class=\"display-4 font-italic\">Welcome to my News Aggregator</h1>\r\n    <p class=\"lead my-3\">I used the Guardian API, the New York Times API and the NewsAPI to built this site. Use the search bar in the upper right hand corner, or check out the categories! </p>\r\n    <p class=\"lead mb-0 text-white font-weight-bold\">Here are Today's Top Headlines:</p>\r\n  </div>\r\n\r\n  <div class=\"card-deck mx-auto\">\r\n    <div *ngFor=\"let headline of topHeadlines\">\r\n      <div class=\"card mx-3 px-3\" style=\"width:275px\">\r\n        <img class=\"card-img-top\" src=\"{{headline.urlToImage}}\">\r\n        <strong class=\"d-inline-block mb-2 text-primary\">{{headline[\"source\"].name}}</strong>\r\n        <h3 class=\"mb-0\">\r\n          <a class=\"text-dark stretched-link\" href=\"{{headline.url}}\">{{headline.title}}</a>\r\n        </h3>\r\n        <div class=\"mb-1 text-muted\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/result-page/result-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/result-page/result-page.component.ts ***!
  \******************************************************/
/*! exports provided: ResultPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPageComponent", function() { return ResultPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");



var ResultPageComponent = /** @class */ (function () {
    function ResultPageComponent(api) {
        this.api = api;
        this.topHeadlines = [];
    }
    ResultPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.NewsAPI_Headlines()
            .subscribe(function (data) {
            console.log(data["articles"]);
            _this.topHeadlines = data["articles"];
        });
    };
    ResultPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-result-page',
            template: __webpack_require__(/*! ./result-page.component.html */ "./src/app/result-page/result-page.component.html"),
            styles: [__webpack_require__(/*! ./result-page.component.css */ "./src/app/result-page/result-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"]])
    ], ResultPageComponent);
    return ResultPageComponent;
}());



/***/ }),

/***/ "./src/app/test.directive.ts":
/*!***********************************!*\
  !*** ./src/app/test.directive.ts ***!
  \***********************************/
/*! exports provided: TestDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestDirective", function() { return TestDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestDirective = /** @class */ (function () {
    function TestDirective() {
    }
    TestDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appTest]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestDirective);
    return TestDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    guardian_key: 'ebe21b59-c243-4a96-b1c5-6003a7eb568d',
    nytimes_key: 'EewRtEojIX3Wol0LI7O8Zn3JVNfAjAn5',
    newsAPI_key: '2d64273e5c50467c894bc121baede70d'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Alex\Desktop\NewsAggregator\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map