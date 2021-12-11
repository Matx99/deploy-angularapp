(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<xxx-header></xxx-header>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/xxx-answers-page/xxx-answers-page.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/xxx-answers-page/xxx-answers-page.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"xxx-page\">\n  <div class=\"xxx-page-title\">Answers</div>\n  <div class=\"xxx-main-card\">\n    <div *ngIf=\"isBusy\" class=\"xxx-spinner-container\">\n      <mat-spinner></mat-spinner>\n    </div>\n    <div *ngIf=\"!isBusy&&!isError&&isResult\">\n      <div *ngIf=\"isQuestions\" class=\"xxx-back-to-questions\">\n        <a (click)=\"onClickBackToQuestions()\" [routerLink]=\"\">Back to Questions</a>\n      </div>\n      <div class=\"xxx-answer-question-container\">\n        <div class=\"xxx-question-title\">{{decodeHtmlEntities(question.title)}}</div>\n        <div>\n          <span class=\"xxx-question-caption\">Number of Views: </span>\n          <span class=\"xxx-question-info\">{{question.view_count}}</span>\n        </div>\n        <div>\n          <span class=\"xxx-question-caption\">Score: </span>\n          <span class=\"xxx-question-info\">{{question.score}}</span>\n        </div>\n        <div><span class=\"xxx-question-caption\">Tags: </span>\n          <span class=\"xxx-question-info\">{{question.tags.join()}}</span>\n        </div>\n        <div>\n          <span class=\"xxx-question-caption\">Asked: </span>\n          <span class=\"xxx-question-info\">{{question.creation_date|date:'short'}}</span>\n        </div>\n        <div [innerHtml]=\"question.body\" class=\"xxx-question-body\"></div>\n      </div>\n      <div *ngFor=\"let answer of answers\" [ngClass]=\"{'xxx-answer-accepted':answer.is_accepted,'xxx-answer-not-accepted':!answer.is_accepted}\"\n           class=\"xxx-answer-container\">\n        <div>\n          <span class=\"xxx-answer-caption\">Score: </span>\n          <span class=\"xxx-answer-info\">{{answer.score}}</span>\n        </div>\n        <div><span class=\"xxx-answer-caption\">Answered: </span>\n          <span class=\"xxx-answer-info\">{{answer.creation_date|date:'short'}}</span>\n        </div>\n        <div class=\"xxx-answer-caption\">Answer:</div>\n        <div [innerHtml]=\"answer.body\" class=\"xxx-answer-body\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/xxx-header/xxx-header.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/xxx-header/xxx-header.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n  <mat-toolbar-row>\n    <a href=\"https://github.com/angularexample\" title=\"https://github.com/angularexample\">\n      <img alt=\"AngularExample Logo\" class=\"xxx-header-logo\" src=\"assets/images/angular-example-logo.svg\">\n    </a>\n    <span class=\"xxx-header-title\">Angular 8 Example App</span>\n    <div class=\"xxx-search-box-container\">\n      <xxx-search-box></xxx-search-box>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/xxx-home-page/xxx-home-page.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/xxx-home-page/xxx-home-page.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"xxx-page\">\n  <div class=\"xxx-page-title\">Stack Exchange Search</div>\n  <div class=\"xxx-main-card\">\n    <p>This will search Stack Exchange questions for given title text.</p>\n    <p>Enter your search text and click the icon or press the Enter key. A list of matching questions will be\n      shown.</p>\n    <p>After that, you can click on a question to see the answers.</p>\n    <p>Full source available at <a\n        href=\"https://github.com/angularexample/angular-8-example-app\">https://github.com/angularexample/angular-8-example-app</a>\n    </p>\n    <h3>Written in Angular 8</h3>\n    <h4>By JC Lango</h4>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/xxx-page-not-found-page/xxx-page-not-found-page.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/xxx-page-not-found-page/xxx-page-not-found-page.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"xxx-page\">\n  <div class=\"xxx-page-title\">Page Not Found</div>\n  <div class=\"xxx-main-card\">\n    <p>The page for this url address is not found.</p>\n    <p>Go To <a href=\"\">Home Page</a></p>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/xxx-questions-page/xxx-questions-page.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/xxx-questions-page/xxx-questions-page.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"xxx-page\">\n  <div class=\"xxx-page-title\">Questions</div>\n  <div class=\"xxx-main-card\">\n    <div *ngIf=\"isBusy\" class=\"xxx-spinner-container\">\n      <mat-spinner></mat-spinner>\n    </div>\n    <div *ngIf=\"!isBusy&&!isError&&isResult\" class=\"xxx-questions-container\">\n      <div *ngFor=\"let question of questions\" class=\"xxx-question-container\">\n        <a (click)=\"questionOnClick(question.question_id)\" [routerLink]=\"\">{{decodeHtmlEntities(question.title)}}</a>\n      </div>\n      <div class=\"xxx-results-footer\">\n        <div class=\"xxx-page-navigation-panel\">\n          <span class=\"xxx-results-currrent-page-caption\">Page</span>\n          <span class=\"xxx-results-currrent-page\">{{pageNumber}}</span>\n          <span class=\"xxx-results-paging\">\n    <button (click)=\"goToFirstPage()\" [disabled]=\"pageNumber===1\" class=\"xxx-results-first-page\" mat-icon-button\n            title=\"Go To First Page\">\n      <mat-icon>first_page</mat-icon>\n    </button>\n      <button (click)=\"goToPreviousPage()\" [disabled]=\"pageNumber===1\" class=\"xxx-results-previous-page\"\n              mat-icon-button title=\"Go To Previous Page\">\n    <mat-icon>chevron_left</mat-icon>\n      </button>\n      <button (click)=\"goToNextPage()\" [disabled]=\"!isMorePages\" class=\"xxx-results-next-page\" mat-icon-button\n              title=\"Go To Next Page\">\n    <mat-icon>chevron_right</mat-icon>\n      </button>\n      </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/xxx-search-box/xxx-search-box.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/xxx-search-box/xxx-search-box.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #formcontrol=\"ngForm\" (ngSubmit)=\"onSearchClick()\">\n  <input (keyup)=\"onInputKeyUp()\" [(ngModel)]=\"searchText\" aria-labelledby=\"enter search text\"\n         autofocus\n         class=\"form-control xxx-search-box-input\" name=\"searchText\"\n         placeholder=\"Enter Search Text\" required=\"\" type=\"search\">\n  <button [disabled]=\"isButtonDisabled || isSearchTextNotChanged || !formcontrol.form.valid\"\n          class=\"xxx-search-box-button\" mat-icon-button\n          title=\"Do Search\">\n    <mat-icon>search</mat-icon>\n  </button>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/xxx-common/xxx-alert/xxx-alert.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/xxx-common/xxx-alert/xxx-alert.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"alertType\" class=\"xxx-alert-icon-panel\">\n  <mat-icon *ngIf=\"alertType==='error'\">error</mat-icon>\n  <mat-icon *ngIf=\"alertType==='info'\">info</mat-icon>\n  <mat-icon *ngIf=\"alertType==='warn'\">warning</mat-icon>\n</div>\n<div class=\"xxx-alert-message-panel\">{{alertMessage}}</div>\n<div class=\"xxx-alert-action-panel\">\n  <button (click)=\"dismiss()\" mat-icon-button title=\"Close alert\">\n    <mat-icon>close</mat-icon>\n  </button>\n</div>\n");

/***/ }),

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: xxxAppRoutes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xxxAppRoutes", function() { return xxxAppRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_modules_xxx_home_page_xxx_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/xxx-home-page/xxx-home-page.component */ "./src/app/modules/xxx-home-page/xxx-home-page.component.ts");
/* harmony import */ var _app_modules_xxx_home_page_xxx_home_page_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/xxx-home-page/xxx-home-page.module */ "./src/app/modules/xxx-home-page/xxx-home-page.module.ts");
/* harmony import */ var _app_modules_xxx_page_not_found_page_xxx_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/xxx-page-not-found-page/xxx-page-not-found-page.component */ "./src/app/modules/xxx-page-not-found-page/xxx-page-not-found-page.component.ts");
/* harmony import */ var _app_modules_xxx_page_not_found_page_xxx_page_not_found_page_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/xxx-page-not-found-page/xxx-page-not-found-page.module */ "./src/app/modules/xxx-page-not-found-page/xxx-page-not-found-page.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






const xxxAppRoutes = [
    { path: '', component: _app_modules_xxx_home_page_xxx_home_page_component__WEBPACK_IMPORTED_MODULE_2__["XxxHomePageComponent"] },
    { path: '**', component: _app_modules_xxx_page_not_found_page_xxx_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_4__["XxxPageNotFoundPageComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        imports: [
            _app_modules_xxx_home_page_xxx_home_page_module__WEBPACK_IMPORTED_MODULE_3__["XxxHomePageModule"],
            _app_modules_xxx_page_not_found_page_xxx_page_not_found_page_module__WEBPACK_IMPORTED_MODULE_5__["XxxPageNotFoundPageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(xxxAppRoutes)
        ]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_xxx_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/xxx-common */ "./src/app/xxx-common/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let AppComponent = class AppComponent {
    constructor(xxxAlertService, xxxLogService, xxxMessageService) {
        this.xxxAlertService = xxxAlertService;
        this.xxxLogService = xxxLogService;
        this.xxxMessageService = xxxMessageService;
        this.xxxLogService.log(new _app_xxx_common__WEBPACK_IMPORTED_MODULE_1__["XxxLogEntry"]('XxxAppComponent constructor', _app_xxx_common__WEBPACK_IMPORTED_MODULE_1__["XxxLogLevelEnum"].INFO));
    }
    ngOnInit() {
        this.subscribeToMessages();
    }
    ngOnDestroy() {
        this.subscriptionDataError.unsubscribe();
    }
    subscribeToMessages() {
        this.subscriptionDataError = this.xxxMessageService.subscribe('data.responseError', (payload) => {
            this.xxxAlertService.openAlert(payload.alertType, payload.alertMessage);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _app_xxx_common__WEBPACK_IMPORTED_MODULE_1__["XxxAlertService"] },
    { type: _app_xxx_common__WEBPACK_IMPORTED_MODULE_1__["XxxLogService"] },
    { type: _app_xxx_common__WEBPACK_IMPORTED_MODULE_1__["XxxMessageService"] }
];
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    }),
    __metadata("design:paramtypes", [_app_xxx_common__WEBPACK_IMPORTED_MODULE_1__["XxxAlertService"],
        _app_xxx_common__WEBPACK_IMPORTED_MODULE_1__["XxxLogService"],
        _app_xxx_common__WEBPACK_IMPORTED_MODULE_1__["XxxMessageService"]])
], AppComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_xxx_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/xxx-common */ "./src/app/xxx-common/index.ts");
/* harmony import */ var _app_modules_xxx_answers_page_xxx_answers_page_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/modules/xxx-answers-page/xxx-answers-page.module */ "./src/app/modules/xxx-answers-page/xxx-answers-page.module.ts");
/* harmony import */ var _app_modules_xxx_header_xxx_header_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/modules/xxx-header/xxx-header.module */ "./src/app/modules/xxx-header/xxx-header.module.ts");
/* harmony import */ var _app_modules_xxx_home_page_xxx_home_page_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/modules/xxx-home-page/xxx-home-page.module */ "./src/app/modules/xxx-home-page/xxx-home-page.module.ts");
/* harmony import */ var _app_modules_xxx_questions_page_xxx_questions_page_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/modules/xxx-questions-page/xxx-questions-page.module */ "./src/app/modules/xxx-questions-page/xxx-questions-page.module.ts");
/* harmony import */ var _app_modules_xxx_search_xxx_search_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/modules/xxx-search/xxx-search.module */ "./src/app/modules/xxx-search/xxx-search.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};













let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _app_xxx_common__WEBPACK_IMPORTED_MODULE_7__["XxxAlertModule"],
            _app_modules_xxx_answers_page_xxx_answers_page_module__WEBPACK_IMPORTED_MODULE_8__["XxxAnswersPageModule"],
            _app_xxx_common__WEBPACK_IMPORTED_MODULE_7__["XxxErrorHandlerModule"],
            _app_modules_xxx_header_xxx_header_module__WEBPACK_IMPORTED_MODULE_9__["XxxHeaderModule"],
            _app_modules_xxx_home_page_xxx_home_page_module__WEBPACK_IMPORTED_MODULE_10__["XxxHomePageModule"],
            _app_xxx_common__WEBPACK_IMPORTED_MODULE_7__["XxxLogModule"],
            _app_xxx_common__WEBPACK_IMPORTED_MODULE_7__["XxxMessageModule"],
            _app_modules_xxx_questions_page_xxx_questions_page_module__WEBPACK_IMPORTED_MODULE_11__["XxxQuestionsPageModule"],
            _app_modules_xxx_search_xxx_search_module__WEBPACK_IMPORTED_MODULE_12__["XxxSearchModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/modules/xxx-answers-page/xxx-answers-page-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/xxx-answers-page/xxx-answers-page-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: XxxAnswersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxAnswersPageRoutingModule", function() { return XxxAnswersPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _xxx_answers_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xxx-answers-page.component */ "./src/app/modules/xxx-answers-page/xxx-answers-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



const routes = [
    { path: 'answers/:id', component: _xxx_answers_page_component__WEBPACK_IMPORTED_MODULE_2__["XxxAnswersPageComponent"] }
];
let XxxAnswersPageRoutingModule = class XxxAnswersPageRoutingModule {
};
XxxAnswersPageRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
        ]
    })
], XxxAnswersPageRoutingModule);



/***/ }),

/***/ "./src/app/modules/xxx-answers-page/xxx-answers-page.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/xxx-answers-page/xxx-answers-page.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".xxx-main-card {\n  margin-bottom: 1.5rem;\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n  margin-top: 0.8rem;\n  padding: 1rem;\n  color: #757575;\n  border-radius: 0.3125rem;\n  background-color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n\n.xxx-page {\n  display: block;\n  padding: 10px;\n}\n\n.xxx-page-title {\n  color: darkgrey;\n  font-size: 1.4rem;\n  font-weight: bold;\n  margin-bottom: 0;\n  margin-left: 2.4rem;\n  margin-top: 0.2rem;\n}\n\n.xxx-answer-caption {\n  font-size: 0.8rem;\n  font-style: italic;\n}\n\n.xxx-answer-container {\n  margin: 0.5rem;\n  overflow: scroll;\n  padding: 0.5rem;\n}\n\n.xxx-answer-accepted {\n  background-color: #e6ffed;\n}\n\n.xxx-answer-info {\n  font-size: 0.8rem;\n}\n\n.xxx-answer-not-accepted {\n  background-color: aliceblue;\n}\n\n.xxx-answer-question-container {\n  background-color: aliceblue;\n  margin: 0.5rem;\n  padding: 0.5rem;\n}\n\n.xxx-answer-caption {\n  font-size: 0.8rem;\n  font-style: italic;\n}\n\n.xxx-back-to-questions {\n  font-size: 0.8rem;\n  margin: 0.5rem;\n}\n\n.xxx-question-caption {\n  font-size: 0.8rem;\n  font-style: italic;\n}\n\n.xxx-question-info {\n  font-size: 0.8rem;\n}\n\n.xxx-question-title {\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.xxx-spinner-container {\n  margin-top: 2rem;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhpZXUvRG9jdW1lbnRzL0NvdXJzL1MzL0ZZQy9hbmd1bGFyLTgtZXhhbXBsZS1hcHAvc3JjL2Fzc2V0cy9zdHlsZXMvcGFydGlhbHMvX3BhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy94eHgtYW5zd2Vycy1wYWdlL3h4eC1hbnN3ZXJzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9tYXRoaWV1L0RvY3VtZW50cy9Db3Vycy9TMy9GWUMvYW5ndWxhci04LWV4YW1wbGUtYXBwL3NyYy9hcHAvbW9kdWxlcy94eHgtYW5zd2Vycy1wYWdlL3h4eC1hbnN3ZXJzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9tYXRoaWV1L0RvY3VtZW50cy9Db3Vycy9TMy9GWUMvYW5ndWxhci04LWV4YW1wbGUtYXBwL3NyYy9hc3NldHMvc3R5bGVzL3BhcnRpYWxzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0dBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBQ3JCQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUR3QkY7O0FDckJBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRHdCRjs7QUNyQkE7RUFDRSx5QkNOa0I7QUY4QnBCOztBQ3JCQTtFQUNFLGlCQUFBO0FEd0JGOztBQ3JCQTtFQUNFLDJCQ2JtQjtBRnFDckI7O0FDckJBO0VBQ0UsMkJDakJtQjtFRGtCbkIsY0FBQTtFQUNBLGVBQUE7QUR3QkY7O0FDckJBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBRHdCRjs7QUNyQkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUR3QkY7O0FDckJBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBRHdCRjs7QUNyQkE7RUFDRSxpQkFBQTtBRHdCRjs7QUNyQkE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FEd0JGOztBQ3JCQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBRHdCRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMveHh4LWFuc3dlcnMtcGFnZS94eHgtYW5zd2Vycy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnh4eC1tYWluLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xuICBtYXJnaW4tdG9wOiAuOHJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIGJvcmRlci1yYWRpdXM6IC4zMTI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi54eHgtcGFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ueHh4LXBhZ2UtdGl0bGUge1xuICBjb2xvcjogZGFya2dyZXk7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLWxlZnQ6IDIuNHJlbTtcbiAgbWFyZ2luLXRvcDogLjJyZW07XG59XG4iLCIueHh4LW1haW4tY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG4gIG1hcmdpbi10b3A6IDAuOHJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ueHh4LXBhZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnh4eC1wYWdlLXRpdGxlIHtcbiAgY29sb3I6IGRhcmtncmV5O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi1sZWZ0OiAyLjRyZW07XG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcbn1cblxuLnh4eC1hbnN3ZXItY2FwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi54eHgtYW5zd2VyLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMC41cmVtO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi54eHgtYW5zd2VyLWFjY2VwdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZmZlZDtcbn1cblxuLnh4eC1hbnN3ZXItaW5mbyB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ueHh4LWFuc3dlci1ub3QtYWNjZXB0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG59XG5cbi54eHgtYW5zd2VyLXF1ZXN0aW9uLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLnh4eC1hbnN3ZXItY2FwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi54eHgtYmFjay10by1xdWVzdGlvbnMge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbWFyZ2luOiAwLjVyZW07XG59XG5cbi54eHgtcXVlc3Rpb24tY2FwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi54eHgtcXVlc3Rpb24taW5mbyB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ueHh4LXF1ZXN0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ueHh4LXNwaW5uZXItY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG59IiwiQGltcG9ydCBcInBhcnRpYWxzL2NvbG9yc1wiO1xuQGltcG9ydCBcInBhcnRpYWxzL3BhZ2VcIjtcblxuLnh4eC1hbnN3ZXItY2FwdGlvbiB7XG4gIGZvbnQtc2l6ZTogLjhyZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnh4eC1hbnN3ZXItY29udGFpbmVyIHtcbiAgbWFyZ2luOiAuNXJlbTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcGFkZGluZzogLjVyZW07XG59XG5cbi54eHgtYW5zd2VyLWFjY2VwdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yLWFjY2VwdGVkO1xufVxuXG4ueHh4LWFuc3dlci1pbmZvIHtcbiAgZm9udC1zaXplOiAuOHJlbTtcbn1cblxuLnh4eC1hbnN3ZXItbm90LWFjY2VwdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yLWNvbnRhaW5lcjtcbn1cblxuLnh4eC1hbnN3ZXItcXVlc3Rpb24tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yLWNvbnRhaW5lcjtcbiAgbWFyZ2luOiAuNXJlbTtcbiAgcGFkZGluZzogLjVyZW07XG59XG5cbi54eHgtYW5zd2VyLWNhcHRpb24ge1xuICBmb250LXNpemU6IC44cmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi54eHgtYmFjay10by1xdWVzdGlvbnMge1xuICBmb250LXNpemU6IC44cmVtO1xuICBtYXJnaW46IC41cmVtO1xufVxuXG4ueHh4LXF1ZXN0aW9uLWNhcHRpb24ge1xuICBmb250LXNpemU6IC44cmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi54eHgtcXVlc3Rpb24taW5mbyB7XG4gIGZvbnQtc2l6ZTogLjhyZW07XG59XG5cbi54eHgtcXVlc3Rpb24tdGl0bGUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi54eHgtc3Bpbm5lci1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICB3aWR0aDogMTAwJTtcbn1cbiIsIiRhbGVydC1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZDOUNDO1xuJGFsZXJ0LWVycm9yLWNvbG9yOiAjOUMwMDBEO1xuXG4kYWxlcnQtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiAjQjZFRUFGO1xuJGFsZXJ0LWluZm8tY29sb3I6ICMxRDhEMEM7XG5cbiRhbGVydC13YXJuLWJhY2tncm91bmQtY29sb3I6ICNGRkVFQkE7XG4kYWxlcnQtd2Fybi1jb2xvcjogI0U2NzIxOTtcblxuJGJnLWNvbG9yLWFjY2VwdGVkOiAjZTZmZmVkO1xuJGJnLWNvbG9yLWNvbnRhaW5lcjogYWxpY2VibHVlO1xuJGJnLWNvbG9yLWhlYWRlcjogbGlnaHRwaW5rO1xuIl19 */");

/***/ }),

/***/ "./src/app/modules/xxx-answers-page/xxx-answers-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/xxx-answers-page/xxx-answers-page.component.ts ***!
  \************************************************************************/
/*! exports provided: XxxAnswersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxAnswersPageComponent", function() { return XxxAnswersPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_xxx_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/xxx-common */ "./src/app/xxx-common/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let XxxAnswersPageComponent = class XxxAnswersPageComponent {
    constructor(route, changeDetectorRef, router, xxxAlertService, xxxDataService, xxxEventMgrService, xxxStateStoreService) {
        this.route = route;
        this.changeDetectorRef = changeDetectorRef;
        this.router = router;
        this.xxxAlertService = xxxAlertService;
        this.xxxDataService = xxxDataService;
        this.xxxEventMgrService = xxxEventMgrService;
        this.xxxStateStoreService = xxxStateStoreService;
        this.answers = [];
        this.isBusy = false;
        this.isError = false;
        this.isQuestions = false;
        this.isResult = false;
        this.question = {};
        this.apiKey = 'U4DMV*8nvpm3EOpvf69Rxw((';
    }
    ngOnInit() {
        this.checkForQuestions();
        this.getQuestionId();
    }
    ngOnDestroy() {
        this.subscriptionRouteParam.unsubscribe();
    }
    decodeHtmlEntities(text) {
        if ((text === undefined) || (text === '')) {
            return '';
        }
        const doc = new DOMParser().parseFromString(text, 'text/html');
        let newText = doc.documentElement.textContent;
        newText = newText.replace('&quot;', '"');
        return newText;
    }
    onClickBackToQuestions() {
        this.xxxEventMgrService.handleEvent('routeQuestions');
    }
    checkForQuestions() {
        if (this.xxxStateStoreService.getItem('questionsRoute')) {
            this.isQuestions = true;
        }
    }
    getQuestionId() {
        this.questionId = '';
        this.subscriptionRouteParam = this.route.params.subscribe(params => {
            this.questionId = params['id'];
            if ((typeof this.questionId === 'string') && (this.questionId.length > 0)) {
                this.getQuestion();
            }
        });
    }
    getQuestion() {
        this.isBusy = true;
        this.isResult = false;
        this.isError = false;
        // this.changeDetectorRef.detectChanges();
        let url = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url.api;
        url += 'questions/';
        url += this.questionId;
        url += '?key=' + this.apiKey;
        url += '&filter=withbody';
        url += '&order=desc';
        url += '&sort=activity';
        url += '&site=stackoverflow';
        this.xxxDataService.getData(url)
            .subscribe(result => this.onSuccessGetQuestion(result), () => this.onErrorGetQuestion());
    }
    onSuccessGetQuestion(result) {
        if ((result.hasOwnProperty('items'))
            && (typeof result.items === 'object')
            && (result.items.length > 0)) {
            this.question = result.items[0];
            this.getAnswers();
        }
        else {
            this.isBusy = false;
            this.changeDetectorRef.detectChanges();
            const warningMsg = 'Given Question Id Not Found';
            this.xxxAlertService.openAlert(_app_xxx_common__WEBPACK_IMPORTED_MODULE_3__["XxxAlertType"].WARN, warningMsg);
        }
    }
    // Errors are handled by global interceptor.
    onErrorGetQuestion() {
        this.isBusy = false;
        this.isError = true;
        this.changeDetectorRef.detectChanges();
    }
    getAnswers() {
        this.isBusy = true;
        this.isResult = false;
        this.isError = false;
        this.answers = [];
        this.changeDetectorRef.detectChanges();
        let url = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url.api;
        url += 'questions/';
        url += this.questionId;
        url += '/answers';
        url += '?key=' + this.apiKey;
        url += '&site=stackoverflow';
        url += '&order=desc';
        url += '&sort=votes';
        url += '&filter=withbody';
        this.xxxDataService.getData(url)
            .subscribe(result => this.onSuccessGetAnswers(result), () => this.onErrorGetAnswers());
    }
    onSuccessGetAnswers(result) {
        this.isBusy = false;
        if ((result.hasOwnProperty('items'))
            && (typeof result.items === 'object')
            && (result.items.length > 0)) {
            this.answers = result.items;
            this.isResult = true;
        }
        else {
            const warningMsg = 'No Answers Found For Given Question Id';
            this.xxxAlertService.openAlert(_app_xxx_common__WEBPACK_IMPORTED_MODULE_3__["XxxAlertType"].WARN, warningMsg);
        }
        this.changeDetectorRef.detectChanges();
    }
    // Errors are handled by global interceptor.
    onErrorGetAnswers() {
        this.isBusy = false;
        this.isError = true;
        this.changeDetectorRef.detectChanges();
    }
};
XxxAnswersPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _app_xxx_common__WEBPACK_IMPORTED_MODULE_3__["XxxAlertService"] },
    { type: _app_xxx_common__WEBPACK_IMPORTED_MODULE_3__["XxxDataService"] },
    { type: _app_xxx_common__WEBPACK_IMPORTED_MODULE_3__["XxxEventMgrService"] },
    { type: _app_xxx_common__WEBPACK_IMPORTED_MODULE_3__["XxxStateStoreService"] }
];
XxxAnswersPageComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        selector: 'xxx-answers-page',
        template: __importDefault(__webpack_require__(/*! raw-loader!./xxx-answers-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/xxx-answers-page/xxx-answers-page.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./xxx-answers-page.component.scss */ "./src/app/modules/xxx-answers-page/xxx-answers-page.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _app_xxx_common__WEBPACK_IMPORTED_MODULE_3__["XxxAlertService"],
        _app_xxx_common__WEBPACK_IMPORTED_MODULE_3__["XxxDataService"],
        _app_xxx_common__WEBPACK_IMPORTED_MODULE_3__["XxxEventMgrService"],
        _app_xxx_common__WEBPACK_IMPORTED_MODULE_3__["XxxStateStoreService"]])
], XxxAnswersPageComponent);



/***/ }),

/***/ "./src/app/modules/xxx-answers-page/xxx-answers-page.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/xxx-answers-page/xxx-answers-page.module.ts ***!
  \*********************************************************************/
/*! exports provided: XxxAnswersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxAnswersPageModule", function() { return XxxAnswersPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _xxx_answers_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xxx-answers-page.component */ "./src/app/modules/xxx-answers-page/xxx-answers-page.component.ts");
/* harmony import */ var _xxx_answers_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./xxx-answers-page-routing.module */ "./src/app/modules/xxx-answers-page/xxx-answers-page-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let XxxAnswersPageModule = class XxxAnswersPageModule {
};
XxxAnswersPageModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_xxx_answers_page_component__WEBPACK_IMPORTED_MODULE_3__["XxxAnswersPageComponent"]],
        exports: [_xxx_answers_page_component__WEBPACK_IMPORTED_MODULE_3__["XxxAnswersPageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _xxx_answers_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["XxxAnswersPageRoutingModule"]
        ]
    })
], XxxAnswersPageModule);



/***/ }),

/***/ "./src/app/modules/xxx-header/xxx-header.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/modules/xxx-header/xxx-header.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host mat-toolbar {\n  align-items: center;\n  background-color: lightpink;\n  display: flex;\n  flex-direction: row;\n  padding-top: 0.4rem;\n}\n\n.xxx-header-title {\n  font-size: 1.2rem;\n}\n\n.xxx-header-logo {\n  padding: 0.4rem;\n  max-width: 4rem;\n  min-width: 3rem;\n  width: 13vw;\n}\n\n.xxx-search-box-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhpZXUvRG9jdW1lbnRzL0NvdXJzL1MzL0ZZQy9hbmd1bGFyLTgtZXhhbXBsZS1hcHAvc3JjL2FwcC9tb2R1bGVzL3h4eC1oZWFkZXIveHh4LWhlYWRlci5jb21wb25lbnQuc2NzcyIsIi9ob21lL21hdGhpZXUvRG9jdW1lbnRzL0NvdXJzL1MzL0ZZQy9hbmd1bGFyLTgtZXhhbXBsZS1hcHAvc3JjL2Fzc2V0cy9zdHlsZXMvcGFydGlhbHMvX2NvbG9ycy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3h4eC1oZWFkZXIveHh4LWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQUFBO0VBQ0EsMkJDT2dCO0VETmhCLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FFREY7O0FGSUE7RUFDRSxpQkFBQTtBRURGOztBRklBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBRURGOztBRklBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FFREYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3h4eC1oZWFkZXIveHh4LWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJwYXJ0aWFscy9jb2xvcnNcIjtcblxuOmhvc3QgbWF0LXRvb2xiYXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3ItaGVhZGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nLXRvcDogLjRyZW07XG59XG5cbi54eHgtaGVhZGVyLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi54eHgtaGVhZGVyLWxvZ28ge1xuICBwYWRkaW5nOiAuNHJlbTtcbiAgbWF4LXdpZHRoOiA0cmVtO1xuICBtaW4td2lkdGg6IDNyZW07XG4gIHdpZHRoOiAxM3Z3O1xufVxuXG4ueHh4LXNlYXJjaC1ib3gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCIkYWxlcnQtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogI0ZGQzlDQztcbiRhbGVydC1lcnJvci1jb2xvcjogIzlDMDAwRDtcblxuJGFsZXJ0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogI0I2RUVBRjtcbiRhbGVydC1pbmZvLWNvbG9yOiAjMUQ4RDBDO1xuXG4kYWxlcnQtd2Fybi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZFRUJBO1xuJGFsZXJ0LXdhcm4tY29sb3I6ICNFNjcyMTk7XG5cbiRiZy1jb2xvci1hY2NlcHRlZDogI2U2ZmZlZDtcbiRiZy1jb2xvci1jb250YWluZXI6IGFsaWNlYmx1ZTtcbiRiZy1jb2xvci1oZWFkZXI6IGxpZ2h0cGluaztcbiIsIjpob3N0IG1hdC10b29sYmFyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRwaW5rO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nLXRvcDogMC40cmVtO1xufVxuXG4ueHh4LWhlYWRlci10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4ueHh4LWhlYWRlci1sb2dvIHtcbiAgcGFkZGluZzogMC40cmVtO1xuICBtYXgtd2lkdGg6IDRyZW07XG4gIG1pbi13aWR0aDogM3JlbTtcbiAgd2lkdGg6IDEzdnc7XG59XG5cbi54eHgtc2VhcmNoLWJveC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/xxx-header/xxx-header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/xxx-header/xxx-header.component.ts ***!
  \************************************************************/
/*! exports provided: XxxHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxHeaderComponent", function() { return XxxHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let XxxHeaderComponent = class XxxHeaderComponent {
};
XxxHeaderComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        selector: 'xxx-header',
        template: __importDefault(__webpack_require__(/*! raw-loader!./xxx-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/xxx-header/xxx-header.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./xxx-header.component.scss */ "./src/app/modules/xxx-header/xxx-header.component.scss")).default]
    })
], XxxHeaderComponent);



/***/ }),

/***/ "./src/app/modules/xxx-header/xxx-header.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/xxx-header/xxx-header.module.ts ***!
  \*********************************************************/
/*! exports provided: XxxHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxHeaderModule", function() { return XxxHeaderModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _xxx_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xxx-header.component */ "./src/app/modules/xxx-header/xxx-header.component.ts");
/* harmony import */ var _app_modules_xxx_search_box_xxx_search_box_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/xxx-search-box/xxx-search-box.module */ "./src/app/modules/xxx-search-box/xxx-search-box.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let XxxHeaderModule = class XxxHeaderModule {
};
XxxHeaderModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_xxx_header_component__WEBPACK_IMPORTED_MODULE_3__["XxxHeaderComponent"]],
        exports: [_xxx_header_component__WEBPACK_IMPORTED_MODULE_3__["XxxHeaderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _app_modules_xxx_search_box_xxx_search_box_module__WEBPACK_IMPORTED_MODULE_4__["XxxSearchBoxModule"]
        ]
    })
], XxxHeaderModule);



/***/ }),

/***/ "./src/app/modules/xxx-home-page/xxx-home-page-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/xxx-home-page/xxx-home-page-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: XxxHomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxHomePageRoutingModule", function() { return XxxHomePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _xxx_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xxx-home-page.component */ "./src/app/modules/xxx-home-page/xxx-home-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



const routes = [
    { path: '', component: _xxx_home_page_component__WEBPACK_IMPORTED_MODULE_2__["XxxHomePageComponent"] },
];
let XxxHomePageRoutingModule = class XxxHomePageRoutingModule {
};
XxxHomePageRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
        ]
    })
], XxxHomePageRoutingModule);



/***/ }),

/***/ "./src/app/modules/xxx-home-page/xxx-home-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/xxx-home-page/xxx-home-page.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".xxx-main-card {\n  margin-bottom: 1.5rem;\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n  margin-top: 0.8rem;\n  padding: 1rem;\n  color: #757575;\n  border-radius: 0.3125rem;\n  background-color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n\n.xxx-page {\n  display: block;\n  padding: 10px;\n}\n\n.xxx-page-title {\n  color: darkgrey;\n  font-size: 1.4rem;\n  font-weight: bold;\n  margin-bottom: 0;\n  margin-left: 2.4rem;\n  margin-top: 0.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhpZXUvRG9jdW1lbnRzL0NvdXJzL1MzL0ZZQy9hbmd1bGFyLTgtZXhhbXBsZS1hcHAvc3JjL2Fzc2V0cy9zdHlsZXMvcGFydGlhbHMvX3BhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy94eHgtaG9tZS1wYWdlL3h4eC1ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLCtHQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMveHh4LWhvbWUtcGFnZS94eHgtaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnh4eC1tYWluLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xuICBtYXJnaW4tdG9wOiAuOHJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIGJvcmRlci1yYWRpdXM6IC4zMTI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi54eHgtcGFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ueHh4LXBhZ2UtdGl0bGUge1xuICBjb2xvcjogZGFya2dyZXk7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLWxlZnQ6IDIuNHJlbTtcbiAgbWFyZ2luLXRvcDogLjJyZW07XG59XG4iLCIueHh4LW1haW4tY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG4gIG1hcmdpbi10b3A6IDAuOHJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ueHh4LXBhZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnh4eC1wYWdlLXRpdGxlIHtcbiAgY29sb3I6IGRhcmtncmV5O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi1sZWZ0OiAyLjRyZW07XG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/xxx-home-page/xxx-home-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/xxx-home-page/xxx-home-page.component.ts ***!
  \******************************************************************/
/*! exports provided: XxxHomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxHomePageComponent", function() { return XxxHomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let XxxHomePageComponent = class XxxHomePageComponent {
};
XxxHomePageComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        selector: 'xxx-home-page',
        template: __importDefault(__webpack_require__(/*! raw-loader!./xxx-home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/xxx-home-page/xxx-home-page.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./xxx-home-page.component.scss */ "./src/app/modules/xxx-home-page/xxx-home-page.component.scss")).default]
    })
], XxxHomePageComponent);



/***/ }),

/***/ "./src/app/modules/xxx-home-page/xxx-home-page.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/xxx-home-page/xxx-home-page.module.ts ***!
  \***************************************************************/
/*! exports provided: XxxHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxHomePageModule", function() { return XxxHomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _xxx_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xxx-home-page.component */ "./src/app/modules/xxx-home-page/xxx-home-page.component.ts");
/* harmony import */ var _xxx_home_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xxx-home-page-routing.module */ "./src/app/modules/xxx-home-page/xxx-home-page-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let XxxHomePageModule = class XxxHomePageModule {
};
XxxHomePageModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_xxx_home_page_component__WEBPACK_IMPORTED_MODULE_1__["XxxHomePageComponent"]],
        exports: [_xxx_home_page_component__WEBPACK_IMPORTED_MODULE_1__["XxxHomePageComponent"]],
        imports: [_xxx_home_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["XxxHomePageRoutingModule"]]
    })
], XxxHomePageModule);



/***/ }),

/***/ "./src/app/modules/xxx-page-not-found-page/xxx-page-not-found-page.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/xxx-page-not-found-page/xxx-page-not-found-page.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".xxx-main-card {\n  margin-bottom: 1.5rem;\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n  margin-top: 0.8rem;\n  padding: 1rem;\n  color: #757575;\n  border-radius: 0.3125rem;\n  background-color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n\n.xxx-page {\n  display: block;\n  padding: 10px;\n}\n\n.xxx-page-title {\n  color: darkgrey;\n  font-size: 1.4rem;\n  font-weight: bold;\n  margin-bottom: 0;\n  margin-left: 2.4rem;\n  margin-top: 0.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhpZXUvRG9jdW1lbnRzL0NvdXJzL1MzL0ZZQy9hbmd1bGFyLTgtZXhhbXBsZS1hcHAvc3JjL2Fzc2V0cy9zdHlsZXMvcGFydGlhbHMvX3BhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy94eHgtcGFnZS1ub3QtZm91bmQtcGFnZS94eHgtcGFnZS1ub3QtZm91bmQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0dBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy94eHgtcGFnZS1ub3QtZm91bmQtcGFnZS94eHgtcGFnZS1ub3QtZm91bmQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi54eHgtbWFpbi1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICBtYXJnaW4tbGVmdDogMS41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbiAgbWFyZ2luLXRvcDogLjhyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGNvbG9yOiAjNzU3NTc1O1xuICBib3JkZXItcmFkaXVzOiAuMzEyNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ueHh4LXBhZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnh4eC1wYWdlLXRpdGxlIHtcbiAgY29sb3I6IGRhcmtncmV5O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi1sZWZ0OiAyLjRyZW07XG4gIG1hcmdpbi10b3A6IC4ycmVtO1xufVxuIiwiLnh4eC1tYWluLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xuICBtYXJnaW4tdG9wOiAwLjhyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGNvbG9yOiAjNzU3NTc1O1xuICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnh4eC1wYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi54eHgtcGFnZS10aXRsZSB7XG4gIGNvbG9yOiBkYXJrZ3JleTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tbGVmdDogMi40cmVtO1xuICBtYXJnaW4tdG9wOiAwLjJyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/xxx-page-not-found-page/xxx-page-not-found-page.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/xxx-page-not-found-page/xxx-page-not-found-page.component.ts ***!
  \**************************************************************************************/
/*! exports provided: XxxPageNotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxPageNotFoundPageComponent", function() { return XxxPageNotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let XxxPageNotFoundPageComponent = class XxxPageNotFoundPageComponent {
};
XxxPageNotFoundPageComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        selector: 'xxx-page-not-found-page',
        template: __importDefault(__webpack_require__(/*! raw-loader!./xxx-page-not-found-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/xxx-page-not-found-page/xxx-page-not-found-page.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./xxx-page-not-found-page.component.scss */ "./src/app/modules/xxx-page-not-found-page/xxx-page-not-found-page.component.scss")).default]
    })
], XxxPageNotFoundPageComponent);



/***/ }),

/***/ "./src/app/modules/xxx-page-not-found-page/xxx-page-not-found-page.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/xxx-page-not-found-page/xxx-page-not-found-page.module.ts ***!
  \***********************************************************************************/
/*! exports provided: XxxPageNotFoundPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxPageNotFoundPageModule", function() { return XxxPageNotFoundPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _xxx_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xxx-page-not-found-page.component */ "./src/app/modules/xxx-page-not-found-page/xxx-page-not-found-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let XxxPageNotFoundPageModule = class XxxPageNotFoundPageModule {
};
XxxPageNotFoundPageModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_xxx_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_1__["XxxPageNotFoundPageComponent"]],
        exports: [_xxx_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_1__["XxxPageNotFoundPageComponent"]]
    })
], XxxPageNotFoundPageModule);



/***/ }),

/***/ "./src/app/modules/xxx-questions-page/xxx-questions-page-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/xxx-questions-page/xxx-questions-page-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: XxxQuestionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxQuestionsPageRoutingModule", function() { return XxxQuestionsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _xxx_questions_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xxx-questions-page.component */ "./src/app/modules/xxx-questions-page/xxx-questions-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



const routes = [
    { path: 'questions', component: _xxx_questions_page_component__WEBPACK_IMPORTED_MODULE_2__["XxxQuestionsPageComponent"] },
];
let XxxQuestionsPageRoutingModule = class XxxQuestionsPageRoutingModule {
};
XxxQuestionsPageRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
        ]
    })
], XxxQuestionsPageRoutingModule);



/***/ }),

/***/ "./src/app/modules/xxx-questions-page/xxx-questions-page.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/xxx-questions-page/xxx-questions-page.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".xxx-main-card {\n  margin-bottom: 1.5rem;\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n  margin-top: 0.8rem;\n  padding: 1rem;\n  color: #757575;\n  border-radius: 0.3125rem;\n  background-color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n\n.xxx-page {\n  display: block;\n  padding: 10px;\n}\n\n.xxx-page-title {\n  color: darkgrey;\n  font-size: 1.4rem;\n  font-weight: bold;\n  margin-bottom: 0;\n  margin-left: 2.4rem;\n  margin-top: 0.2rem;\n}\n\n.xxx-page-navigation-panel {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n}\n\n.xxx-question-container {\n  background-color: aliceblue;\n}\n\n.xxx-questions-container {\n  margin: 0.5rem;\n}\n\n.xxx-results-currrent-page {\n  margin-right: 1rem;\n}\n\n.xxx-results-currrent-page-caption {\n  margin-right: 1rem;\n}\n\n.xxx-results-footer {\n  align-items: center;\n  background-color: aliceblue;\n  display: flex;\n  flex-direction: row;\n  height: 2rem;\n  justify-content: flex-end;\n}\n\n.xxx-results-paging {\n  margin-right: 2rem;\n  width: 8rem;\n}\n\n.xxx-spinner-container {\n  margin-top: 2rem;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhpZXUvRG9jdW1lbnRzL0NvdXJzL1MzL0ZZQy9hbmd1bGFyLTgtZXhhbXBsZS1hcHAvc3JjL2Fzc2V0cy9zdHlsZXMvcGFydGlhbHMvX3BhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy94eHgtcXVlc3Rpb25zLXBhZ2UveHh4LXF1ZXN0aW9ucy1wYWdlLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbWF0aGlldS9Eb2N1bWVudHMvQ291cnMvUzMvRllDL2FuZ3VsYXItOC1leGFtcGxlLWFwcC9zcmMvYXBwL21vZHVsZXMveHh4LXF1ZXN0aW9ucy1wYWdlL3h4eC1xdWVzdGlvbnMtcGFnZS5jb21wb25lbnQuc2NzcyIsIi9ob21lL21hdGhpZXUvRG9jdW1lbnRzL0NvdXJzL1MzL0ZZQy9hbmd1bGFyLTgtZXhhbXBsZS1hcHAvc3JjL2Fzc2V0cy9zdHlsZXMvcGFydGlhbHMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSwrR0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FDckJBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUR3QkY7O0FDckJBO0VBQ0UsMkJBQUE7QUR3QkY7O0FDckJBO0VBQ0UsY0FBQTtBRHdCRjs7QUNyQkE7RUFDRSxrQkFBQTtBRHdCRjs7QUNyQkE7RUFDRSxrQkFBQTtBRHdCRjs7QUNyQkE7RUFDRSxtQkFBQTtFQUNBLDJCQ2pCbUI7RURrQm5CLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBRHdCRjs7QUNyQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUR3QkY7O0FDckJBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FEd0JGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy94eHgtcXVlc3Rpb25zLXBhZ2UveHh4LXF1ZXN0aW9ucy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnh4eC1tYWluLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xuICBtYXJnaW4tdG9wOiAuOHJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIGJvcmRlci1yYWRpdXM6IC4zMTI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi54eHgtcGFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ueHh4LXBhZ2UtdGl0bGUge1xuICBjb2xvcjogZGFya2dyZXk7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLWxlZnQ6IDIuNHJlbTtcbiAgbWFyZ2luLXRvcDogLjJyZW07XG59XG4iLCIueHh4LW1haW4tY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG4gIG1hcmdpbi10b3A6IDAuOHJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ueHh4LXBhZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnh4eC1wYWdlLXRpdGxlIHtcbiAgY29sb3I6IGRhcmtncmV5O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi1sZWZ0OiAyLjRyZW07XG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcbn1cblxuLnh4eC1wYWdlLW5hdmlnYXRpb24tcGFuZWwge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4ueHh4LXF1ZXN0aW9uLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbn1cblxuLnh4eC1xdWVzdGlvbnMtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwLjVyZW07XG59XG5cbi54eHgtcmVzdWx0cy1jdXJycmVudC1wYWdlIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4ueHh4LXJlc3VsdHMtY3VycnJlbnQtcGFnZS1jYXB0aW9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4ueHh4LXJlc3VsdHMtZm9vdGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDJyZW07XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi54eHgtcmVzdWx0cy1wYWdpbmcge1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gIHdpZHRoOiA4cmVtO1xufVxuXG4ueHh4LXNwaW5uZXItY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG59IiwiQGltcG9ydCBcInBhcnRpYWxzL2NvbG9yc1wiO1xuQGltcG9ydCBcInBhcnRpYWxzL3BhZ2VcIjtcblxuLnh4eC1wYWdlLW5hdmlnYXRpb24tcGFuZWwge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4ueHh4LXF1ZXN0aW9uLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvci1jb250YWluZXI7XG59XG5cbi54eHgtcXVlc3Rpb25zLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogLjVyZW07XG59XG5cbi54eHgtcmVzdWx0cy1jdXJycmVudC1wYWdlIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4ueHh4LXJlc3VsdHMtY3VycnJlbnQtcGFnZS1jYXB0aW9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4ueHh4LXJlc3VsdHMtZm9vdGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yLWNvbnRhaW5lcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAycmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4ueHh4LXJlc3VsdHMtcGFnaW5nIHtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICB3aWR0aDogOHJlbTtcbn1cblxuLnh4eC1zcGlubmVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuIiwiJGFsZXJ0LWVycm9yLWJhY2tncm91bmQtY29sb3I6ICNGRkM5Q0M7XG4kYWxlcnQtZXJyb3ItY29sb3I6ICM5QzAwMEQ7XG5cbiRhbGVydC1pbmZvLWJhY2tncm91bmQtY29sb3I6ICNCNkVFQUY7XG4kYWxlcnQtaW5mby1jb2xvcjogIzFEOEQwQztcblxuJGFsZXJ0LXdhcm4tYmFja2dyb3VuZC1jb2xvcjogI0ZGRUVCQTtcbiRhbGVydC13YXJuLWNvbG9yOiAjRTY3MjE5O1xuXG4kYmctY29sb3ItYWNjZXB0ZWQ6ICNlNmZmZWQ7XG4kYmctY29sb3ItY29udGFpbmVyOiBhbGljZWJsdWU7XG4kYmctY29sb3ItaGVhZGVyOiBsaWdodHBpbms7XG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/xxx-questions-page/xxx-questions-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/xxx-questions-page/xxx-questions-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: XxxQuestionsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxQuestionsPageComponent", function() { return XxxQuestionsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_xxx_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/xxx-common */ "./src/app/xxx-common/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let XxxQuestionsPageComponent = class XxxQuestionsPageComponent {
    constructor(route, changeDetectorRef, xxxAlertService, xxxDataService, xxxEventMgrService, xxxStateStoreService) {
        this.route = route;
        this.changeDetectorRef = changeDetectorRef;
        this.xxxAlertService = xxxAlertService;
        this.xxxDataService = xxxDataService;
        this.xxxEventMgrService = xxxEventMgrService;
        this.xxxStateStoreService = xxxStateStoreService;
        this.pageNumber = null;
        this.isMorePages = false;
        this.isBusy = false;
        this.isError = false;
        this.isResult = false;
        this.questions = [];
        this.apiKey = 'U4DMV*8nvpm3EOpvf69Rxw((';
        this.searchText = null;
    }
    ngOnInit() {
        this.subscribeToRouteParams();
    }
    ngOnDestroy() {
        this.subscriptionRouteParam.unsubscribe();
    }
    decodeHtmlEntities(text) {
        if ((text === undefined) || (text === '')) {
            return '';
        }
        const doc = new DOMParser().parseFromString(text, 'text/html');
        let newText = doc.documentElement.textContent;
        newText = newText.replace('&quot;', '"');
        return newText;
    }
    goToFirstPage() {
        const eventRoute = {
            url: [_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url.questions],
            queryParams: {
                title: this.searchText
            }
        };
        this.xxxStateStoreService.putItem('questionsRoute', eventRoute);
        this.xxxEventMgrService.handleEvent('routeQuestions');
    }
    goToPreviousPage() {
        const eventRoute = {
            url: [_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url.questions],
            queryParams: {
                title: this.searchText,
                page: (this.pageNumber > 2) ? this.pageNumber - 1 : null
            }
        };
        this.xxxStateStoreService.putItem('questionsRoute', eventRoute);
        this.xxxEventMgrService.handleEvent('routeQuestions');
    }
    goToNextPage() {
        const eventRoute = {
            url: [_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url.questions],
            queryParams: {
                title: this.searchText,
                page: this.pageNumber + 1
            }
        };
        this.xxxStateStoreService.putItem('questionsRoute', eventRoute);
        this.xxxEventMgrService.handleEvent('routeQuestions');
    }
    questionOnClick(questionId) {
        const eventRoute = {
            url: [_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url.answers + '/' + questionId]
        };
        this.xxxStateStoreService.putItem('answersRoute', eventRoute);
        this.xxxEventMgrService.handleEvent('routeAnswers');
    }
    subscribeToRouteParams() {
        this.subscriptionRouteParam = this.route.queryParams.subscribe(params => {
            const searchText = params['title'] || '';
            const pageNumber = +params['page'] || 1;
            if ((typeof searchText === 'string') && (searchText.length > 0)) {
                this.processSearchQuery(searchText, pageNumber);
            }
            else {
                this.xxxAlertService.openAlert(_app_xxx_common__WEBPACK_IMPORTED_MODULE_3__["XxxAlertType"].WARN, 'Title missing. Try a new search.');
            }
        });
    }
    processSearchQuery(searchText, pageNumber) {
        let isChanged = false;
        if (searchText !== this.searchText) {
            this.searchText = searchText;
            isChanged = true;
        }
        if (pageNumber !== this.pageNumber) {
            this.pageNumber = pageNumber;
            isChanged = true;
        }
        if (isChanged) {
            this.getQuestions();
        }
    }
    getQuestions() {
        this.isBusy = true;
        this.isResult = false;
        this.isError = false;
        let url = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url.api;
        url += 'search/advanced';
        url += '?key=' + this.apiKey;
        url += '&title=' + encodeURI(this.searchText);
        url += '&answers=1';
        url += '&site=stackoverflow';
        url += '&filter=withbody';
        url += '&page=' + this.pageNumber.toString();
        url += '&order=desc';
        url += '&sort=votes';
        this.xxxDataService.getData(url)
            .subscribe(result => this.onSuccessGetQuestions(result), () => this.onErrorGetQuestions());
    }
    onSuccessGetQuestions(result) {
        this.isBusy = false;
        if ((result.hasOwnProperty('items'))
            && (typeof result.items === 'object')
            && (result.items.length > 0)) {
            this.questions = result.items;
            this.isResult = true;
        }
        else {
            const warningMsg = 'No Results Found';
            this.xxxAlertService.openAlert(_app_xxx_common__WEBPACK_IMPORTED_MODULE_3__["XxxAlertType"].WARN, warningMsg);
        }
        this.isMorePages = ((result.hasOwnProperty('has_more'))
            && (typeof result.has_more === 'boolean')
            && (result.has_more));
        this.searchDone();
        this.changeDetectorRef.detectChanges();
    }
    // Errors are handled by global interceptor.
    onErrorGetQuestions() {
        this.isBusy = false;
        this.isError = true;
        this.changeDetectorRef.detectChanges();
        this.searchDone();
    }
    searchDone() {
        this.xxxEventMgrService.handleEvent('questionsSearchDone');
    }
};
XxxQuestionsPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _app_xxx_common__WEBPACK_IMPORTED_MODULE_3__["XxxAlertService"] },
    { type: _app_xxx_common__WEBPACK_IMPORTED_MODULE_3__["XxxDataService"] },
    { type: _app_xxx_common__WEBPACK_IMPORTED_MODULE_3__["XxxEventMgrService"] },
    { type: _app_xxx_common__WEBPACK_IMPORTED_MODULE_3__["XxxStateStoreService"] }
];
XxxQuestionsPageComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'xxx-questions-page',
        template: __importDefault(__webpack_require__(/*! raw-loader!./xxx-questions-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/xxx-questions-page/xxx-questions-page.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        styles: [__importDefault(__webpack_require__(/*! ./xxx-questions-page.component.scss */ "./src/app/modules/xxx-questions-page/xxx-questions-page.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
        _app_xxx_common__WEBPACK_IMPORTED_MODULE_3__["XxxAlertService"],
        _app_xxx_common__WEBPACK_IMPORTED_MODULE_3__["XxxDataService"],
        _app_xxx_common__WEBPACK_IMPORTED_MODULE_3__["XxxEventMgrService"],
        _app_xxx_common__WEBPACK_IMPORTED_MODULE_3__["XxxStateStoreService"]])
], XxxQuestionsPageComponent);



/***/ }),

/***/ "./src/app/modules/xxx-questions-page/xxx-questions-page.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/xxx-questions-page/xxx-questions-page.module.ts ***!
  \*************************************************************************/
/*! exports provided: XxxQuestionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxQuestionsPageModule", function() { return XxxQuestionsPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _app_xxx_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/xxx-common */ "./src/app/xxx-common/index.ts");
/* harmony import */ var _xxx_questions_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./xxx-questions-page.component */ "./src/app/modules/xxx-questions-page/xxx-questions-page.component.ts");
/* harmony import */ var _xxx_questions_page_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xxx-questions-page-routing.module */ "./src/app/modules/xxx-questions-page/xxx-questions-page-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let XxxQuestionsPageModule = class XxxQuestionsPageModule {
};
XxxQuestionsPageModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_xxx_questions_page_component__WEBPACK_IMPORTED_MODULE_5__["XxxQuestionsPageComponent"]],
        exports: [_xxx_questions_page_component__WEBPACK_IMPORTED_MODULE_5__["XxxQuestionsPageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _app_xxx_common__WEBPACK_IMPORTED_MODULE_4__["XxxAlertModule"],
            _app_xxx_common__WEBPACK_IMPORTED_MODULE_4__["XxxDataModule"],
            _app_xxx_common__WEBPACK_IMPORTED_MODULE_4__["XxxEventMgrModule"],
            _app_xxx_common__WEBPACK_IMPORTED_MODULE_4__["XxxStateStoreModule"],
            _xxx_questions_page_routing_module__WEBPACK_IMPORTED_MODULE_6__["XxxQuestionsPageRoutingModule"]
        ]
    })
], XxxQuestionsPageModule);



/***/ }),

/***/ "./src/app/modules/xxx-search-box/xxx-search-box.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/xxx-search-box/xxx-search-box.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMveHh4LXNlYXJjaC1ib3gveHh4LXNlYXJjaC1ib3guY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/xxx-search-box/xxx-search-box.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/xxx-search-box/xxx-search-box.component.ts ***!
  \********************************************************************/
/*! exports provided: XxxSearchBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxSearchBoxComponent", function() { return XxxSearchBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_modules_xxx_search_xxx_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/modules/xxx-search/xxx-search.service */ "./src/app/modules/xxx-search/xxx-search.service.ts");
/* harmony import */ var _app_xxx_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/xxx-common */ "./src/app/xxx-common/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let XxxSearchBoxComponent = class XxxSearchBoxComponent {
    constructor(changeDetectorRef, xxxEventMgrService, xxxMessageService, xxxSearchService, xxxStateStoreService) {
        this.changeDetectorRef = changeDetectorRef;
        this.xxxEventMgrService = xxxEventMgrService;
        this.xxxMessageService = xxxMessageService;
        this.xxxSearchService = xxxSearchService;
        this.xxxStateStoreService = xxxStateStoreService;
        this.isButtonDisabled = false;
        this.isSearchTextNotChanged = true;
        this.lastSearchText = null;
    }
    ngOnInit() {
        this.subscribeToMessages();
    }
    onInputKeyUp() {
        this.checkForChangedSearchText();
        this.changeDetectorRef.detectChanges();
    }
    onSearchClick() {
        this.lastSearchText = this.searchText;
        this.isButtonDisabled = true;
        this.changeDetectorRef.detectChanges();
        this.xxxStateStoreService.putItem('searchText', this.searchText);
        this.xxxEventMgrService.handleEvent('searchBox.search');
    }
    ngOnDestroy() {
        this.subscriptionButtonEnable.unsubscribe();
    }
    checkForChangedSearchText() {
        this.isSearchTextNotChanged = (this.searchText === this.lastSearchText);
    }
    subscribeToMessages() {
        this.subscriptionButtonEnable = this.xxxMessageService.subscribe('searchButtonEnable', () => {
            this.isButtonDisabled = false;
            this.checkForChangedSearchText();
            this.changeDetectorRef.detectChanges();
        });
    }
};
XxxSearchBoxComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _app_xxx_common__WEBPACK_IMPORTED_MODULE_2__["XxxEventMgrService"] },
    { type: _app_xxx_common__WEBPACK_IMPORTED_MODULE_2__["XxxMessageService"] },
    { type: _app_modules_xxx_search_xxx_search_service__WEBPACK_IMPORTED_MODULE_1__["XxxSearchService"] },
    { type: _app_xxx_common__WEBPACK_IMPORTED_MODULE_2__["XxxStateStoreService"] }
];
XxxSearchBoxComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        selector: 'xxx-search-box',
        template: __importDefault(__webpack_require__(/*! raw-loader!./xxx-search-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/xxx-search-box/xxx-search-box.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./xxx-search-box.component.scss */ "./src/app/modules/xxx-search-box/xxx-search-box.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
        _app_xxx_common__WEBPACK_IMPORTED_MODULE_2__["XxxEventMgrService"],
        _app_xxx_common__WEBPACK_IMPORTED_MODULE_2__["XxxMessageService"],
        _app_modules_xxx_search_xxx_search_service__WEBPACK_IMPORTED_MODULE_1__["XxxSearchService"],
        _app_xxx_common__WEBPACK_IMPORTED_MODULE_2__["XxxStateStoreService"]])
], XxxSearchBoxComponent);



/***/ }),

/***/ "./src/app/modules/xxx-search-box/xxx-search-box.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/xxx-search-box/xxx-search-box.module.ts ***!
  \*****************************************************************/
/*! exports provided: XxxSearchBoxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxSearchBoxModule", function() { return XxxSearchBoxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _app_xxx_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/xxx-common */ "./src/app/xxx-common/index.ts");
/* harmony import */ var _app_modules_xxx_search_xxx_search_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/xxx-search/xxx-search.module */ "./src/app/modules/xxx-search/xxx-search.module.ts");
/* harmony import */ var _xxx_search_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xxx-search-box.component */ "./src/app/modules/xxx-search-box/xxx-search-box.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let XxxSearchBoxModule = class XxxSearchBoxModule {
};
XxxSearchBoxModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_xxx_search_box_component__WEBPACK_IMPORTED_MODULE_6__["XxxSearchBoxComponent"]],
        exports: [_xxx_search_box_component__WEBPACK_IMPORTED_MODULE_6__["XxxSearchBoxComponent"]],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _app_xxx_common__WEBPACK_IMPORTED_MODULE_4__["XxxEventMgrModule"],
            _app_modules_xxx_search_xxx_search_module__WEBPACK_IMPORTED_MODULE_5__["XxxSearchModule"],
            _app_xxx_common__WEBPACK_IMPORTED_MODULE_4__["XxxStateStoreModule"]
        ]
    })
], XxxSearchBoxModule);



/***/ }),

/***/ "./src/app/modules/xxx-search/xxx-search.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/xxx-search/xxx-search.module.ts ***!
  \*********************************************************/
/*! exports provided: XxxSearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxSearchModule", function() { return XxxSearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_xxx_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/xxx-common */ "./src/app/xxx-common/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let XxxSearchModule = class XxxSearchModule {
};
XxxSearchModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _app_xxx_common__WEBPACK_IMPORTED_MODULE_1__["XxxEventMgrModule"],
            _app_xxx_common__WEBPACK_IMPORTED_MODULE_1__["XxxMessageModule"],
            _app_xxx_common__WEBPACK_IMPORTED_MODULE_1__["XxxStateStoreModule"]
        ]
    })
], XxxSearchModule);



/***/ }),

/***/ "./src/app/modules/xxx-search/xxx-search.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/xxx-search/xxx-search.service.ts ***!
  \**********************************************************/
/*! exports provided: XxxSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxSearchService", function() { return XxxSearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_xxx_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/xxx-common */ "./src/app/xxx-common/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



/**
 * Subscribes to search text changed message, generates and stores route, triggers route event.
 */
let XxxSearchService = class XxxSearchService {
    constructor(xxxEventMgrService, xxxMessageService, xxxStateStoreService) {
        this.xxxEventMgrService = xxxEventMgrService;
        this.xxxMessageService = xxxMessageService;
        this.xxxStateStoreService = xxxStateStoreService;
        this.searchText = null;
        this.subscribeToMessages();
    }
    subscribeToMessages() {
        this.subscriptionSearchTextChange = this.xxxMessageService.subscribe('searchTextChange', () => {
            this.onSearchTextChange();
        });
    }
    onSearchTextChange() {
        const searchText = this.xxxStateStoreService.getItem('searchText');
        if ((typeof searchText === 'string') && (searchText.length > 0) && (searchText !== this.searchText)) {
            const encodedSearchText = encodeURI(searchText);
            const eventRoute = {
                url: [_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url.questions],
                queryParams: {
                    title: encodedSearchText
                }
            };
            this.xxxStateStoreService.putItem('questionsRoute', eventRoute);
            this.xxxEventMgrService.handleEvent('routeQuestions');
        }
    }
};
XxxSearchService.ctorParameters = () => [
    { type: _app_xxx_common__WEBPACK_IMPORTED_MODULE_2__["XxxEventMgrService"] },
    { type: _app_xxx_common__WEBPACK_IMPORTED_MODULE_2__["XxxMessageService"] },
    { type: _app_xxx_common__WEBPACK_IMPORTED_MODULE_2__["XxxStateStoreService"] }
];
XxxSearchService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_app_xxx_common__WEBPACK_IMPORTED_MODULE_2__["XxxEventMgrService"],
        _app_xxx_common__WEBPACK_IMPORTED_MODULE_2__["XxxMessageService"],
        _app_xxx_common__WEBPACK_IMPORTED_MODULE_2__["XxxStateStoreService"]])
], XxxSearchService);



/***/ }),

/***/ "./src/app/xxx-common/index.ts":
/*!*************************************!*\
  !*** ./src/app/xxx-common/index.ts ***!
  \*************************************/
/*! exports provided: XxxAlertComponent, XxxAlertModule, XxxAlertService, XxxAlertType, XxxDataModule, XxxDataService, XxxDataResponseInterceptor, XxxDataResponseInterceptorModule, XxxErrorHandler, XxxErrorHandlerModule, XxxEventMgrModule, XxxEventMgrService, XxxLogEntry, XxxLogLevelEnum, XxxLogModule, XxxLogService, XxxMessage, XxxMessageModule, XxxMessageService, XxxStateStoreModule, XxxStateStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _xxx_alert_xxx_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xxx-alert/xxx-alert.component */ "./src/app/xxx-common/xxx-alert/xxx-alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XxxAlertComponent", function() { return _xxx_alert_xxx_alert_component__WEBPACK_IMPORTED_MODULE_0__["XxxAlertComponent"]; });

/* harmony import */ var _xxx_alert_xxx_alert_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xxx-alert/xxx-alert.module */ "./src/app/xxx-common/xxx-alert/xxx-alert.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XxxAlertModule", function() { return _xxx_alert_xxx_alert_module__WEBPACK_IMPORTED_MODULE_1__["XxxAlertModule"]; });

/* harmony import */ var _xxx_alert_xxx_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xxx-alert/xxx-alert.service */ "./src/app/xxx-common/xxx-alert/xxx-alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XxxAlertService", function() { return _xxx_alert_xxx_alert_service__WEBPACK_IMPORTED_MODULE_2__["XxxAlertService"]; });

/* harmony import */ var _xxx_alert_xxx_alert_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xxx-alert/xxx-alert.enum */ "./src/app/xxx-common/xxx-alert/xxx-alert.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XxxAlertType", function() { return _xxx_alert_xxx_alert_enum__WEBPACK_IMPORTED_MODULE_3__["XxxAlertType"]; });

/* harmony import */ var _xxx_data_xxx_data_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./xxx-data/xxx-data.module */ "./src/app/xxx-common/xxx-data/xxx-data.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XxxDataModule", function() { return _xxx_data_xxx_data_module__WEBPACK_IMPORTED_MODULE_4__["XxxDataModule"]; });

/* harmony import */ var _xxx_data_xxx_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./xxx-data/xxx-data.service */ "./src/app/xxx-common/xxx-data/xxx-data.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XxxDataService", function() { return _xxx_data_xxx_data_service__WEBPACK_IMPORTED_MODULE_5__["XxxDataService"]; });

/* harmony import */ var _xxx_data_response_interceptor_xxx_data_response_interceptor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xxx-data-response-interceptor/xxx-data-response-interceptor.service */ "./src/app/xxx-common/xxx-data-response-interceptor/xxx-data-response-interceptor.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XxxDataResponseInterceptor", function() { return _xxx_data_response_interceptor_xxx_data_response_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["XxxDataResponseInterceptor"]; });

/* harmony import */ var _xxx_data_response_interceptor_xxx_data_response_interceptor_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./xxx-data-response-interceptor/xxx-data-response-interceptor.module */ "./src/app/xxx-common/xxx-data-response-interceptor/xxx-data-response-interceptor.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XxxDataResponseInterceptorModule", function() { return _xxx_data_response_interceptor_xxx_data_response_interceptor_module__WEBPACK_IMPORTED_MODULE_7__["XxxDataResponseInterceptorModule"]; });

/* harmony import */ var _xxx_error_handler_xxx_error_handler_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./xxx-error-handler/xxx-error-handler.service */ "./src/app/xxx-common/xxx-error-handler/xxx-error-handler.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XxxErrorHandler", function() { return _xxx_error_handler_xxx_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["XxxErrorHandler"]; });

/* harmony import */ var _xxx_error_handler_xxx_error_handler_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./xxx-error-handler/xxx-error-handler.module */ "./src/app/xxx-common/xxx-error-handler/xxx-error-handler.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XxxErrorHandlerModule", function() { return _xxx_error_handler_xxx_error_handler_module__WEBPACK_IMPORTED_MODULE_9__["XxxErrorHandlerModule"]; });

/* harmony import */ var _xxx_event_mgr_xxx_event_mgr_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./xxx-event-mgr/xxx-event-mgr.module */ "./src/app/xxx-common/xxx-event-mgr/xxx-event-mgr.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XxxEventMgrModule", function() { return _xxx_event_mgr_xxx_event_mgr_module__WEBPACK_IMPORTED_MODULE_10__["XxxEventMgrModule"]; });

/* harmony import */ var _xxx_event_mgr_xxx_event_mgr_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./xxx-event-mgr/xxx-event-mgr.service */ "./src/app/xxx-common/xxx-event-mgr/xxx-event-mgr.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XxxEventMgrService", function() { return _xxx_event_mgr_xxx_event_mgr_service__WEBPACK_IMPORTED_MODULE_11__["XxxEventMgrService"]; });

/* harmony import */ var _xxx_log_xxx_log_entry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./xxx-log/xxx-log-entry */ "./src/app/xxx-common/xxx-log/xxx-log-entry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XxxLogEntry", function() { return _xxx_log_xxx_log_entry__WEBPACK_IMPORTED_MODULE_12__["XxxLogEntry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XxxLogLevelEnum", function() { return _xxx_log_xxx_log_entry__WEBPACK_IMPORTED_MODULE_12__["XxxLogLevelEnum"]; });

/* harmony import */ var _xxx_log_xxx_log_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./xxx-log/xxx-log.module */ "./src/app/xxx-common/xxx-log/xxx-log.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XxxLogModule", function() { return _xxx_log_xxx_log_module__WEBPACK_IMPORTED_MODULE_13__["XxxLogModule"]; });

/* harmony import */ var _xxx_log_xxx_log_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./xxx-log/xxx-log.service */ "./src/app/xxx-common/xxx-log/xxx-log.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XxxLogService", function() { return _xxx_log_xxx_log_service__WEBPACK_IMPORTED_MODULE_14__["XxxLogService"]; });

/* harmony import */ var _xxx_message_xxx_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./xxx-message/xxx-message */ "./src/app/xxx-common/xxx-message/xxx-message.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XxxMessage", function() { return _xxx_message_xxx_message__WEBPACK_IMPORTED_MODULE_15__["XxxMessage"]; });

/* harmony import */ var _xxx_message_xxx_message_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./xxx-message/xxx-message.module */ "./src/app/xxx-common/xxx-message/xxx-message.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XxxMessageModule", function() { return _xxx_message_xxx_message_module__WEBPACK_IMPORTED_MODULE_16__["XxxMessageModule"]; });

/* harmony import */ var _xxx_message_xxx_message_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./xxx-message/xxx-message.service */ "./src/app/xxx-common/xxx-message/xxx-message.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XxxMessageService", function() { return _xxx_message_xxx_message_service__WEBPACK_IMPORTED_MODULE_17__["XxxMessageService"]; });

/* harmony import */ var _xxx_state_store_xxx_state_store_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./xxx-state-store/xxx-state-store.module */ "./src/app/xxx-common/xxx-state-store/xxx-state-store.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XxxStateStoreModule", function() { return _xxx_state_store_xxx_state_store_module__WEBPACK_IMPORTED_MODULE_18__["XxxStateStoreModule"]; });

/* harmony import */ var _xxx_state_store_xxx_state_store_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./xxx-state-store/xxx-state-store.service */ "./src/app/xxx-common/xxx-state-store/xxx-state-store.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XxxStateStoreService", function() { return _xxx_state_store_xxx_state_store_service__WEBPACK_IMPORTED_MODULE_19__["XxxStateStoreService"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






















/***/ }),

/***/ "./src/app/xxx-common/xxx-alert/xxx-alert.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/xxx-common/xxx-alert/xxx-alert.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  align-items: stretch;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  min-height: 3rem;\n}\n\n:host div {\n  align-items: center;\n  display: flex;\n}\n\n.xxx-alert-action-panel {\n  cursor: pointer;\n}\n\n.xxx-alert-icon-panel {\n  cursor: default;\n  margin-right: 1em;\n}\n\n.xxx-alert-message-panel {\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhpZXUvRG9jdW1lbnRzL0NvdXJzL1MzL0ZZQy9hbmd1bGFyLTgtZXhhbXBsZS1hcHAvc3JjL2FwcC94eHgtY29tbW9uL3h4eC1hbGVydC94eHgtYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3h4eC1jb21tb24veHh4LWFsZXJ0L3h4eC1hbGVydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAveHh4LWNvbW1vbi94eHgtYWxlcnQveHh4LWFsZXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWluLWhlaWdodDogM3JlbTtcbn1cblxuOmhvc3QgZGl2IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnh4eC1hbGVydC1hY3Rpb24tcGFuZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi54eHgtYWxlcnQtaWNvbi1wYW5lbCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbi54eHgtYWxlcnQtbWVzc2FnZS1wYW5lbCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbiIsIjpob3N0IHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1pbi1oZWlnaHQ6IDNyZW07XG59XG5cbjpob3N0IGRpdiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi54eHgtYWxlcnQtYWN0aW9uLXBhbmVsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ueHh4LWFsZXJ0LWljb24tcGFuZWwge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG4ueHh4LWFsZXJ0LW1lc3NhZ2UtcGFuZWwge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/xxx-common/xxx-alert/xxx-alert.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/xxx-common/xxx-alert/xxx-alert.component.ts ***!
  \*************************************************************/
/*! exports provided: XxxAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxAlertComponent", function() { return XxxAlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let XxxAlertComponent = class XxxAlertComponent {
    constructor(snackBarRef, alertData) {
        this.snackBarRef = snackBarRef;
        this.alertData = alertData;
        this.alertMessage = this.alertData.message;
        this.alertType = this.alertData.type;
    }
    dismiss() {
        this.snackBarRef.dismiss();
    }
};
XxxAlertComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"],] }] }
];
XxxAlertComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        selector: 'xxx-alert',
        template: __importDefault(__webpack_require__(/*! raw-loader!./xxx-alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/xxx-common/xxx-alert/xxx-alert.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./xxx-alert.component.scss */ "./src/app/xxx-common/xxx-alert/xxx-alert.component.scss")).default]
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"])),
    __metadata("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarRef"], Object])
], XxxAlertComponent);



/***/ }),

/***/ "./src/app/xxx-common/xxx-alert/xxx-alert.enum.ts":
/*!********************************************************!*\
  !*** ./src/app/xxx-common/xxx-alert/xxx-alert.enum.ts ***!
  \********************************************************/
/*! exports provided: XxxAlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxAlertType", function() { return XxxAlertType; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var XxxAlertType;
(function (XxxAlertType) {
    XxxAlertType["INFO"] = "info";
    XxxAlertType["ERROR"] = "error";
    XxxAlertType["WARN"] = "warn";
})(XxxAlertType || (XxxAlertType = {}));


/***/ }),

/***/ "./src/app/xxx-common/xxx-alert/xxx-alert.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/xxx-common/xxx-alert/xxx-alert.module.ts ***!
  \**********************************************************/
/*! exports provided: XxxAlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxAlertModule", function() { return XxxAlertModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _xxx_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xxx-alert.component */ "./src/app/xxx-common/xxx-alert/xxx-alert.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let XxxAlertModule = class XxxAlertModule {
};
XxxAlertModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_xxx_alert_component__WEBPACK_IMPORTED_MODULE_6__["XxxAlertComponent"]],
        entryComponents: [_xxx_alert_component__WEBPACK_IMPORTED_MODULE_6__["XxxAlertComponent"]],
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"]
        ]
    })
], XxxAlertModule);



/***/ }),

/***/ "./src/app/xxx-common/xxx-alert/xxx-alert.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/xxx-common/xxx-alert/xxx-alert.service.ts ***!
  \***********************************************************/
/*! exports provided: XxxAlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxAlertService", function() { return XxxAlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _xxx_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xxx-alert.component */ "./src/app/xxx-common/xxx-alert/xxx-alert.component.ts");
/* harmony import */ var _xxx_alert_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xxx-alert.enum */ "./src/app/xxx-common/xxx-alert/xxx-alert.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let XxxAlertService = class XxxAlertService {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.isOpen = false;
        this.config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarConfig"]();
        this.config.duration = 10000; // Stay open 10 seconds
        this.config.verticalPosition = 'top';
        this.config.data = {};
    }
    openAlert(type, message) {
        // Ignore any attempt to open while it is already open.
        if (this.isOpen) {
            return null;
        }
        this.config.data.message = message;
        this.config.data.type = type;
        this.setClassByType(type);
        this.snackBarRef = this.snackBar.openFromComponent(_xxx_alert_component__WEBPACK_IMPORTED_MODULE_2__["XxxAlertComponent"], this.config);
        this.isOpen = true;
        this.snackBarRef.afterDismissed().subscribe(() => {
            this.isOpen = false;
        });
        return this.snackBarRef;
    }
    // The type is used for different style colors and template icons
    setClassByType(type) {
        switch (type) {
            case _xxx_alert_enum__WEBPACK_IMPORTED_MODULE_3__["XxxAlertType"].ERROR:
                this.config.panelClass = ['xxx-alert', 'xxx-alert-error'];
                break;
            case _xxx_alert_enum__WEBPACK_IMPORTED_MODULE_3__["XxxAlertType"].INFO:
                this.config.panelClass = ['xxx-alert', 'xxx-alert-info'];
                break;
            case _xxx_alert_enum__WEBPACK_IMPORTED_MODULE_3__["XxxAlertType"].WARN:
                this.config.panelClass = ['xxx-alert', 'xxx-alert-warn'];
                break;
        }
    }
};
XxxAlertService.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }
];
XxxAlertService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
], XxxAlertService);



/***/ }),

/***/ "./src/app/xxx-common/xxx-data-response-interceptor/xxx-data-response-interceptor.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/xxx-common/xxx-data-response-interceptor/xxx-data-response-interceptor.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: XxxDataResponseInterceptorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxDataResponseInterceptorModule", function() { return XxxDataResponseInterceptorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _xxx_message_xxx_message_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../xxx-message/xxx-message.module */ "./src/app/xxx-common/xxx-message/xxx-message.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let XxxDataResponseInterceptorModule = class XxxDataResponseInterceptorModule {
};
XxxDataResponseInterceptorModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_xxx_message_xxx_message_module__WEBPACK_IMPORTED_MODULE_1__["XxxMessageModule"]]
    })
], XxxDataResponseInterceptorModule);



/***/ }),

/***/ "./src/app/xxx-common/xxx-data-response-interceptor/xxx-data-response-interceptor.service.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/xxx-common/xxx-data-response-interceptor/xxx-data-response-interceptor.service.ts ***!
  \***************************************************************************************************/
/*! exports provided: XxxDataResponseInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxDataResponseInterceptor", function() { return XxxDataResponseInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _xxx_alert_xxx_alert_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../xxx-alert/xxx-alert.enum */ "./src/app/xxx-common/xxx-alert/xxx-alert.enum.ts");
/* harmony import */ var _xxx_message_xxx_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../xxx-message/xxx-message */ "./src/app/xxx-common/xxx-message/xxx-message.ts");
/* harmony import */ var _xxx_message_xxx_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../xxx-message/xxx-message.service */ "./src/app/xxx-common/xxx-message/xxx-message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




// import {environment} from '@env/environment';



let XxxDataResponseInterceptor = class XxxDataResponseInterceptor {
    constructor(xxxMessageService) {
        this.xxxMessageService = xxxMessageService;
    }
    intercept(request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => {
            let errorMsg = '';
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (!navigator.onLine) {
                    errorMsg = 'Not connected to internet.';
                }
                else {
                    if (err.status === 401) {
                        this.handleAuthError();
                    }
                    else {
                        errorMsg = `Error Code: ${err.status},  Message: ${err.message}`;
                    }
                }
            }
            else {
                errorMsg = 'Unknown Error. Response format not recognized.';
            }
            this.handleError(errorMsg);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMsg);
        }));
    }
    handleError(errorMsg) {
        const message = new _xxx_message_xxx_message__WEBPACK_IMPORTED_MODULE_5__["XxxMessage"]('data.responseError');
        message.payload = {
            alertType: _xxx_alert_xxx_alert_enum__WEBPACK_IMPORTED_MODULE_4__["XxxAlertType"].ERROR,
            alertMessage: errorMsg
        };
        this.xxxMessageService.broadcast(message);
    }
    handleAuthError() {
        // TODO added temporary console log for testing this stub
        console.log('HTTP 401 error');
        // TODO Needs back end service to do auth and handle redirect url
        // let client = new XMLHttpRequest();
        // let parts = window.location.pathname.split('/');
        // const url = environment.serviceRootUrl + parts[1] + '/login?redirectUrl=' + window.location.href;
        // client.open('POST', url, true);
        // client.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        // client.withCredentials = true;
        // client.send();
        // client.onreadystatechange = function () {
        //   if (this.status === 401 && this.readyState === this.HEADERS_RECEIVED) {
        //     window.parent.location.href = client.getResponseHeader('Location');
        //   }
        // };
    }
};
XxxDataResponseInterceptor.ctorParameters = () => [
    { type: _xxx_message_xxx_message_service__WEBPACK_IMPORTED_MODULE_6__["XxxMessageService"] }
];
XxxDataResponseInterceptor = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_xxx_message_xxx_message_service__WEBPACK_IMPORTED_MODULE_6__["XxxMessageService"]])
], XxxDataResponseInterceptor);



/***/ }),

/***/ "./src/app/xxx-common/xxx-data/xxx-data.module.ts":
/*!********************************************************!*\
  !*** ./src/app/xxx-common/xxx-data/xxx-data.module.ts ***!
  \********************************************************/
/*! exports provided: XxxDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxDataModule", function() { return XxxDataModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _xxx_data_response_interceptor_xxx_data_response_interceptor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../xxx-data-response-interceptor/xxx-data-response-interceptor.service */ "./src/app/xxx-common/xxx-data-response-interceptor/xxx-data-response-interceptor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let XxxDataModule = class XxxDataModule {
};
XxxDataModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _xxx_data_response_interceptor_xxx_data_response_interceptor_service__WEBPACK_IMPORTED_MODULE_2__["XxxDataResponseInterceptor"], multi: true }
        ]
    })
], XxxDataModule);



/***/ }),

/***/ "./src/app/xxx-common/xxx-data/xxx-data.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/xxx-common/xxx-data/xxx-data.service.ts ***!
  \*********************************************************/
/*! exports provided: XxxDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxDataService", function() { return XxxDataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let XxxDataService = class XxxDataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getData(url) {
        return this.httpClient.get(url);
    }
};
XxxDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
];
XxxDataService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
], XxxDataService);



/***/ }),

/***/ "./src/app/xxx-common/xxx-error-handler/xxx-error-handler.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/xxx-common/xxx-error-handler/xxx-error-handler.module.ts ***!
  \**************************************************************************/
/*! exports provided: XxxErrorHandlerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxErrorHandlerModule", function() { return XxxErrorHandlerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _xxx_alert_xxx_alert_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../xxx-alert/xxx-alert.module */ "./src/app/xxx-common/xxx-alert/xxx-alert.module.ts");
/* harmony import */ var _xxx_log_xxx_log_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../xxx-log/xxx-log.module */ "./src/app/xxx-common/xxx-log/xxx-log.module.ts");
/* harmony import */ var _xxx_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xxx-error-handler.service */ "./src/app/xxx-common/xxx-error-handler/xxx-error-handler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let XxxErrorHandlerModule = class XxxErrorHandlerModule {
};
XxxErrorHandlerModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _xxx_alert_xxx_alert_module__WEBPACK_IMPORTED_MODULE_1__["XxxAlertModule"],
            _xxx_log_xxx_log_module__WEBPACK_IMPORTED_MODULE_2__["XxxLogModule"]
        ],
        providers: [
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], useClass: _xxx_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["XxxErrorHandler"] }
        ]
    })
], XxxErrorHandlerModule);



/***/ }),

/***/ "./src/app/xxx-common/xxx-error-handler/xxx-error-handler.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/xxx-common/xxx-error-handler/xxx-error-handler.service.ts ***!
  \***************************************************************************/
/*! exports provided: XxxErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxErrorHandler", function() { return XxxErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _xxx_alert_xxx_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../xxx-alert/xxx-alert.service */ "./src/app/xxx-common/xxx-alert/xxx-alert.service.ts");
/* harmony import */ var _xxx_alert_xxx_alert_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../xxx-alert/xxx-alert.enum */ "./src/app/xxx-common/xxx-alert/xxx-alert.enum.ts");
/* harmony import */ var _xxx_log_xxx_log_entry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../xxx-log/xxx-log-entry */ "./src/app/xxx-common/xxx-log/xxx-log-entry.ts");
/* harmony import */ var _xxx_log_xxx_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../xxx-log/xxx-log.service */ "./src/app/xxx-common/xxx-log/xxx-log.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





/**
 * Note: There is no providedIn or providers for this class
 * because it is like a mock service.
 * You must import the XxxErrorHandlerModule at the app module.
 * The XxxErrorHandlerModule injects this service as a mock for the built in Angular ErrorHandler.
 */
let XxxErrorHandler = class XxxErrorHandler {
    constructor(xxxAlertService, xxxLogService) {
        this.xxxAlertService = xxxAlertService;
        this.xxxLogService = xxxLogService;
    }
    handleError(error) {
        const logEntry = new _xxx_log_xxx_log_entry__WEBPACK_IMPORTED_MODULE_3__["XxxLogEntry"](error.message);
        logEntry.stack = error.stack;
        this.xxxLogService.log(logEntry);
        // TODO temporary don't handle known error from Angular Flex
        if (error.message.includes('split')) {
            return;
        }
        this.xxxAlertService.openAlert(_xxx_alert_xxx_alert_enum__WEBPACK_IMPORTED_MODULE_2__["XxxAlertType"].ERROR, 'An error occurred. Try again or contact Customer Service.');
    }
};
XxxErrorHandler.ctorParameters = () => [
    { type: _xxx_alert_xxx_alert_service__WEBPACK_IMPORTED_MODULE_1__["XxxAlertService"] },
    { type: _xxx_log_xxx_log_service__WEBPACK_IMPORTED_MODULE_4__["XxxLogService"] }
];
XxxErrorHandler = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_xxx_alert_xxx_alert_service__WEBPACK_IMPORTED_MODULE_1__["XxxAlertService"],
        _xxx_log_xxx_log_service__WEBPACK_IMPORTED_MODULE_4__["XxxLogService"]])
], XxxErrorHandler);



/***/ }),

/***/ "./src/app/xxx-common/xxx-event-mgr/xxx-event-mgr.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/xxx-common/xxx-event-mgr/xxx-event-mgr.module.ts ***!
  \******************************************************************/
/*! exports provided: XxxEventMgrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxEventMgrModule", function() { return XxxEventMgrModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _xxx_data_xxx_data_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../xxx-data/xxx-data.module */ "./src/app/xxx-common/xxx-data/xxx-data.module.ts");
/* harmony import */ var _xxx_message_xxx_message_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../xxx-message/xxx-message.module */ "./src/app/xxx-common/xxx-message/xxx-message.module.ts");
/* harmony import */ var _xxx_state_store_xxx_state_store_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../xxx-state-store/xxx-state-store.module */ "./src/app/xxx-common/xxx-state-store/xxx-state-store.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let XxxEventMgrModule = class XxxEventMgrModule {
};
XxxEventMgrModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _xxx_data_xxx_data_module__WEBPACK_IMPORTED_MODULE_2__["XxxDataModule"],
            _xxx_message_xxx_message_module__WEBPACK_IMPORTED_MODULE_3__["XxxMessageModule"],
            _xxx_state_store_xxx_state_store_module__WEBPACK_IMPORTED_MODULE_4__["XxxStateStoreModule"]
        ]
    })
], XxxEventMgrModule);



/***/ }),

/***/ "./src/app/xxx-common/xxx-event-mgr/xxx-event-mgr.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/xxx-common/xxx-event-mgr/xxx-event-mgr.service.ts ***!
  \*******************************************************************/
/*! exports provided: XxxEventMgrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxEventMgrService", function() { return XxxEventMgrService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _xxx_data_xxx_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../xxx-data/xxx-data.service */ "./src/app/xxx-common/xxx-data/xxx-data.service.ts");
/* harmony import */ var _xxx_message_xxx_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../xxx-message/xxx-message */ "./src/app/xxx-common/xxx-message/xxx-message.ts");
/* harmony import */ var _xxx_message_xxx_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../xxx-message/xxx-message.service */ "./src/app/xxx-common/xxx-message/xxx-message.service.ts");
/* harmony import */ var _xxx_state_store_xxx_state_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../xxx-state-store/xxx-state-store.service */ "./src/app/xxx-common/xxx-state-store/xxx-state-store.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let XxxEventMgrService = class XxxEventMgrService {
    constructor(router, xxxDataService, xxxMessageService, xxxStateStoreService) {
        this.router = router;
        this.xxxDataService = xxxDataService;
        this.xxxMessageService = xxxMessageService;
        this.xxxStateStoreService = xxxStateStoreService;
        this.isValid = false;
        this.loadData();
    }
    ngOnDestroy() {
        this.$data.unsubscribe();
    }
    // Component calls this method to handle any event.
    handleEvent(eventId) {
        if (typeof this.eventConfigs === 'undefined') {
            return;
        }
        const eventConfig = this.getEventConfig(eventId);
        if (typeof eventConfig !== 'undefined' && eventConfig.hasOwnProperty('eventActions') && eventConfig.eventActions.length) {
            eventConfig.eventActions.forEach(this.doEventAction, this);
        }
    }
    loadData() {
        this.$data = this.xxxDataService.getData(_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url.eventConfig)
            .subscribe(result => this.onSuccessGetData(result), () => this.onErrorGetData());
    }
    onSuccessGetData(response) {
        this.validateData(response);
        if (this.isValid) {
            this.loadModelData(response);
        }
    }
    // Note: The error interceptor actually handles all data request errors.
    onErrorGetData() {
        console.log('XxxEventMgrService: ERROR in loadData');
    }
    loadModelData(theData) {
        // Transform data input to local data model.
        this.eventConfigs = theData.eventConfigs;
    }
    validateData(theData) {
        let isValid = true;
        isValid = isValid && (theData.hasOwnProperty('eventConfigs'));
        isValid = isValid && (typeof theData.eventConfigs === 'object');
        isValid = isValid && (theData.eventConfigs.length > 0);
        this.isValid = isValid;
    }
    // Returns undefined if not found.
    getEventConfig(eventId) {
        return this.eventConfigs.find(o => o.eventId === eventId);
    }
    doEventAction(eventAction) {
        switch (eventAction.action) {
            case 'broadcast':
                this.broadcastAction(eventAction);
                break;
            case 'route':
                this.routeAction(eventAction);
                break;
        }
    }
    broadcastAction(eventAction) {
        let message;
        if (eventAction.hasOwnProperty('actionKey')) {
            message = new _xxx_message_xxx_message__WEBPACK_IMPORTED_MODULE_4__["XxxMessage"](eventAction.actionKey);
            if (eventAction.hasOwnProperty('actionData')) {
                message.payload = eventAction.actionData;
            }
            this.xxxMessageService.broadcast(message);
        }
    }
    routeAction(eventAction) {
        if (eventAction.hasOwnProperty('actionKey')) {
            const eventUrl = this.xxxStateStoreService.getItem(eventAction.actionKey);
            if ((typeof eventUrl === 'object') && eventUrl.url.length > 0) {
                this.router.navigate(eventUrl.url, { queryParams: eventUrl.queryParams });
            }
        }
    }
};
XxxEventMgrService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _xxx_data_xxx_data_service__WEBPACK_IMPORTED_MODULE_3__["XxxDataService"] },
    { type: _xxx_message_xxx_message_service__WEBPACK_IMPORTED_MODULE_5__["XxxMessageService"] },
    { type: _xxx_state_store_xxx_state_store_service__WEBPACK_IMPORTED_MODULE_6__["XxxStateStoreService"] }
];
XxxEventMgrService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _xxx_data_xxx_data_service__WEBPACK_IMPORTED_MODULE_3__["XxxDataService"],
        _xxx_message_xxx_message_service__WEBPACK_IMPORTED_MODULE_5__["XxxMessageService"],
        _xxx_state_store_xxx_state_store_service__WEBPACK_IMPORTED_MODULE_6__["XxxStateStoreService"]])
], XxxEventMgrService);



/***/ }),

/***/ "./src/app/xxx-common/xxx-log/xxx-log-entry.ts":
/*!*****************************************************!*\
  !*** ./src/app/xxx-common/xxx-log/xxx-log-entry.ts ***!
  \*****************************************************/
/*! exports provided: XxxLogLevelEnum, XxxLogEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxLogLevelEnum", function() { return XxxLogLevelEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxLogEntry", function() { return XxxLogEntry; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * These convert to sequential integers equal to the array index
 */
var XxxLogLevelEnum;
(function (XxxLogLevelEnum) {
    XxxLogLevelEnum[XxxLogLevelEnum["ALL"] = 0] = "ALL";
    XxxLogLevelEnum[XxxLogLevelEnum["DEBUG"] = 1] = "DEBUG";
    XxxLogLevelEnum[XxxLogLevelEnum["INFO"] = 2] = "INFO";
    XxxLogLevelEnum[XxxLogLevelEnum["WARN"] = 3] = "WARN";
    XxxLogLevelEnum[XxxLogLevelEnum["ERROR"] = 4] = "ERROR";
    XxxLogLevelEnum[XxxLogLevelEnum["FATAL"] = 5] = "FATAL";
    XxxLogLevelEnum[XxxLogLevelEnum["OFF"] = 6] = "OFF";
})(XxxLogLevelEnum || (XxxLogLevelEnum = {}));
class XxxLogEntry {
    /**
     * Create a log entry object.
     * @param message: log message
     * @param level: log level, optional, default is ERROR
     */
    constructor(message, level) {
        this.level = level || XxxLogLevelEnum.ERROR;
        this.message = message;
        this.time = new Date();
    }
}


/***/ }),

/***/ "./src/app/xxx-common/xxx-log/xxx-log.module.ts":
/*!******************************************************!*\
  !*** ./src/app/xxx-common/xxx-log/xxx-log.module.ts ***!
  \******************************************************/
/*! exports provided: XxxLogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxLogModule", function() { return XxxLogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let XxxLogModule = 
/**
 * Since this module is empty, you don't actually need to import it anywhere.
 * It is included for consistency of design.
 * Since it is meant to include any dependencies for this service.
 * If the service is ever modified to have dependencies,
 * then it will be required.
 * So it is still a good idea to import it.
 */
class XxxLogModule {
};
XxxLogModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({})
    /**
     * Since this module is empty, you don't actually need to import it anywhere.
     * It is included for consistency of design.
     * Since it is meant to include any dependencies for this service.
     * If the service is ever modified to have dependencies,
     * then it will be required.
     * So it is still a good idea to import it.
     */
], XxxLogModule);



/***/ }),

/***/ "./src/app/xxx-common/xxx-log/xxx-log.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/xxx-common/xxx-log/xxx-log.service.ts ***!
  \*******************************************************/
/*! exports provided: XxxLogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxLogService", function() { return XxxLogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

/**
 * In full scale app, this service will use the data service to write log entries to backend.
 * It is given here as a placeholder.
 * Note: no module is used, since the provider is done here.
 */
let XxxLogService = class XxxLogService {
    log(logEntry) {
        // TODO needs backend service to do logging
        console.log('logEntry', logEntry);
    }
};
XxxLogService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
], XxxLogService);



/***/ }),

/***/ "./src/app/xxx-common/xxx-message/xxx-message.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/xxx-common/xxx-message/xxx-message.module.ts ***!
  \**************************************************************/
/*! exports provided: XxxMessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxMessageModule", function() { return XxxMessageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let XxxMessageModule = 
/**
 * Since this module is empty, you don't actually need to import it anywhere.
 * It is included for consistency of design.
 * Since it is meant to include any dependencies for this service.
 * If the service is ever modified to have dependencies,
 * then it will be required.
 * So it is still a good idea to import it.
 */
class XxxMessageModule {
};
XxxMessageModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({})
    /**
     * Since this module is empty, you don't actually need to import it anywhere.
     * It is included for consistency of design.
     * Since it is meant to include any dependencies for this service.
     * If the service is ever modified to have dependencies,
     * then it will be required.
     * So it is still a good idea to import it.
     */
], XxxMessageModule);



/***/ }),

/***/ "./src/app/xxx-common/xxx-message/xxx-message.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/xxx-common/xxx-message/xxx-message.service.ts ***!
  \***************************************************************/
/*! exports provided: XxxMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxMessageService", function() { return XxxMessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let XxxMessageService = class XxxMessageService {
    constructor() {
        this.handler = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    broadcast(message) {
        this.handler.next({ key: message.key, payload: message.payload });
    }
    subscribe(key, callback) {
        return this.handler.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(message => message.key === key), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(message => message.payload))
            .subscribe(callback);
    }
};
XxxMessageService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
], XxxMessageService);



/***/ }),

/***/ "./src/app/xxx-common/xxx-message/xxx-message.ts":
/*!*******************************************************!*\
  !*** ./src/app/xxx-common/xxx-message/xxx-message.ts ***!
  \*******************************************************/
/*! exports provided: XxxMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxMessage", function() { return XxxMessage; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class XxxMessage {
    constructor(key) {
        this.payload = null;
        this.key = key;
    }
}


/***/ }),

/***/ "./src/app/xxx-common/xxx-state-store/xxx-state-store.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/xxx-common/xxx-state-store/xxx-state-store.module.ts ***!
  \**********************************************************************/
/*! exports provided: XxxStateStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxStateStoreModule", function() { return XxxStateStoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let XxxStateStoreModule = 
/**
 * Since this module is empty, you don't actually need to import it anywhere.
 * It is included for consistency of design.
 * Since it is meant to include any dependencies for this service.
 * If the service is ever modified to have dependencies,
 * then it will be required.
 * So it is still a good idea to import it.
 */
class XxxStateStoreModule {
};
XxxStateStoreModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({})
    /**
     * Since this module is empty, you don't actually need to import it anywhere.
     * It is included for consistency of design.
     * Since it is meant to include any dependencies for this service.
     * If the service is ever modified to have dependencies,
     * then it will be required.
     * So it is still a good idea to import it.
     */
], XxxStateStoreModule);



/***/ }),

/***/ "./src/app/xxx-common/xxx-state-store/xxx-state-store.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/xxx-common/xxx-state-store/xxx-state-store.service.ts ***!
  \***********************************************************************/
/*! exports provided: XxxStateStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XxxStateStoreService", function() { return XxxStateStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let XxxStateStoreService = class XxxStateStoreService {
    constructor() {
        this.savedItems = {};
    }
    /**
     * Delete all items. Clears the state store.
     */
    deleteAll() {
        this.savedItems = {};
    }
    /**
     * Delete data item.
     * @param key: unique id for item
     */
    deleteItem(key) {
        if (this.savedItems[key]) {
            delete this.savedItems[key];
        }
    }
    /**
     * Get data item and then delete it. For a single use of store and retrieve.
     * @param key: unique id for item
     */
    extractItem(key) {
        const result = this.savedItems[key];
        if (result) {
            this.deleteItem(key);
        }
        return result;
    }
    /**
     * Get data item. Allows multiple retrieves after put.
     * @param key: unique id for item
     */
    getItem(key) {
        return this.savedItems[key];
    }
    /**
     * Store data item.
     * @param key: unique id for item
     * @param value: data to be stored
     */
    putItem(key, value) {
        this.savedItems[key] = value;
    }
};
XxxStateStoreService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
], XxxStateStoreService);



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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false,
    url: {
        answers: '/answers',
        api: 'https://api.stackexchange.com/2.2/',
        eventConfig: 'assets/data/events.json',
        questions: '/questions'
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mathieu/Documents/Cours/S3/FYC/angular-8-example-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map