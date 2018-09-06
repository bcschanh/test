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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign/sign.component */ "./src/app/sign/sign.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: 'sign',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'sign',
        component: _sign_sign_component__WEBPACK_IMPORTED_MODULE_4__["SignComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n    text-decoration: none;\r\n}\r\n.hd{\r\n    background-color: #334d7f;\r\n}\r\n.hd a{\r\n    \r\n    color: #fff;\r\n}\r\n.anh img{\r\n    max-width: 99%;\r\n}\r\n.na{\r\n    margin-top: 1.6rem;\r\n}\r\n.na a{\r\n    color: #334d7f;\r\n    font-size: 22px;\r\n    font-weight: 950;\r\n    font-family: Arial;\r\n}\r\n.nar{\r\n\r\n}\r\n.nar img{\r\n    width: 25px;\r\n    height: 18px;\r\n    margin-left: 0.5rem;\r\n}\r\n.nab{\r\n    background-color: #f0f8fa;\r\n}\r\n.f{\r\n    background-color: black;\r\n}\r\n.fl{\r\n    color: #aaa;\r\n    padding-left: 2rem;\r\n    font-weight: 400;\r\n}\r\n.m{\r\n   margin-left: 7rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--header-->\n<div class=\"hd\">\n  <div class=\"container\">\n    <div class=\"d-flex flex-row-reverse bd-highlight\">\n      <div class=\"p-2 bd-highlight\"><a routerLink=\"/login\">Đăng nhập</a></div>\n      <div class=\"p-2 bd-highlight\"><a routerLink=\"/sign\">Đăng ký</a></div>\n    </div>\n  </div>\n</div>\n<!---->\n<!--nav-->\n<div class=\"nab\">\n  <div class=\"container pt-2 pb-3\">\n    <div class=\"row\">\n      <div class=\"col-sm-3 anh m\">\n        <img src=\"https://preview.ibb.co/dWrSSp/CARENEFIT_slogan_03.png\" alt=\"CARENEFIT_slogan_03\" border=\"0\">\n      </div>\n      <div class=\"col-sm-4 na\">\n        <a href=\"#\">Health Management System</a>\n      </div>\n      <div class=\"col-sm mt-2\">\n        <div class=\"d-flex flex-row-reverse bd-highlight nar\">\n          <div class=\"p-2 bd-highlight\"> <a href=\"#\"><img src=\"https://preview.ibb.co/bBEBL9/vi_VN.gif\" alt=\"vi_VN\" border=\"0\"></a>\n            <a href=\"#\"><img src=\"https://preview.ibb.co/hCjp7p/en_US.gif\" alt=\"en_US\" border=\"0\"></a>\n            <a href=\"#\"><img src=\"https://image.ibb.co/dLhWL9/search_icon.png\" alt=\"search_icon\" border=\"0\"></a>\n          </div>\n        </div>\n        <div class=\"d-flex flex-row-reverse bd-highlight nar\">\n          <div class=\"bd-highlight\">\n            <span style=\"font-size: 18px;color: red;padding-left: 3.5rem\">Hotline: +84 902 922 802</span>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n<!---->\n<!--BODY-->\n<router-outlet></router-outlet>\n<!---->\n<!--Footer-->\n<div class=\"f p-3\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-7 fl\">\n        <p>Bản Quyền 2017 Bởi Công Ty TNHH Bloomaxx</p>\n      </div>\n      <div class=\"col-sm-5 fr\">\n      </div>\n    </div>\n  </div>\n</div>\n<!--<a href=\"https://ibb.co/jvwu7p\"><img src=\"https://preview.ibb.co/dWrSSp/CARENEFIT_slogan_03.png\" alt=\"CARENEFIT_slogan_03\" border=\"0\"></a>-->\n<!---->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'BTVN';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign/sign.component */ "./src/app/sign/sign.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _sign_sign_component__WEBPACK_IMPORTED_MODULE_4__["SignComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login-model.ts":
/*!********************************!*\
  !*** ./src/app/login-model.ts ***!
  \********************************/
/*! exports provided: LoginModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModel", function() { return LoginModel; });
var LoginModel = /** @class */ (function () {
    function LoginModel() {
    }
    return LoginModel;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hd{\r\n\r\n    font-size: 30px;\r\n    font-family: Arial;\r\n    text-align: center;\r\n    border-radius: 10px 10px 0 0;\r\n    font-weight: 720;\r\n    background-color: #5c7198;\r\n    color: #fff;\r\n    padding: 2.2rem;\r\n}\r\n.bd{\r\n    background-color: rgba(80, 160, 249, 0.83);\r\n}\r\n.k{\r\n    padding-top: 14rem;\r\n}\r\n.bk{\r\n    background: url(\"https://preview.ibb.co/fKmQxp/bg_c23d5219c1e78a0c1f25.png\");\r\n    background-position: bottom left;\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n}\r\n.bk2{\r\n    background: url(\"https://preview.ibb.co/ccNkf9/subbg_c2434c4d7c02029889c8.jpg\");\r\n    background-position: bottom left;\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 98%;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bk2\">\r\n    <div class=\"bk\">\r\n        <div class=\"container pt-5\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-7\">\r\n                </div>\r\n                <div class=\"col-sm-5\">\r\n                    <div></div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-11 hd\">\r\n                            <span>ĐĂNG NHẬP</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-11 py-1 bd pb-3\">\r\n                            <span>Tài khoản</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-11 bd\">\r\n                            <div class=\"input-group mb-1\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fas fa-user\"></i></span>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-11 py-1 bd pb-3\">\r\n                            <span>Mật khẩu</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-11 bd\">\r\n                            <div class=\"input-group mb-4\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fas fa-briefcase\"></i></span>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"password\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-11 bd \">\r\n                            <button type=\"button\" class=\"btn btn-info\" style=\"width: 100%;height: 95% !important;background-color: #15c5d2;color: black\">Đăng\r\n                                nhập\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-11 bd\">\r\n                            <div class=\"d-flex flex-row-reverse bd-highlight\">\r\n                                <div class=\"p-1 bd-highlight\"><a href=\"\" style=\"text-decoration:underline;font-style: italic;color: #fff\">Lấy\r\n                                        lại mật khẩu</a></div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-11 bd\">\r\n                            <p style=\"font-size: 16px;font-family: 'Roboto';color: #333333d1;letter-spacing:0.2px \">Bạn chưa\r\n                                có tài khoản?\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-11 bd \">\r\n                            <button type=\"button\" class=\"btn btn-info\" style=\"width: 100%;height: 95% !important;background-color: #15c5d2;color: black\">Đăng\r\n                                ký\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-11 bd k\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-11 bd\">\r\n                            <p style=\"text-align: center;font-size: 22px\">Bloomaxx©2017</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- -->\r\n    <form #loginForm=\"ngForm\">\r\n        <div class=\"row mt-3\">\r\n            <div class=\"col-md-3\">Tên đăng nhập:</div>\r\n            <div class=\"col-md-9\">\r\n                <input [(ngModel)]=\"user.userName\" required name=\"userName\" class=\"form-control\" #username=\"ngModel\">\r\n                <div *ngIf=\"\"></div>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"row mt-3\">\r\n            <div class=\"col-md-3\">Mật khẩu:</div>\r\n            <div class=\"col-md-9\">\r\n                <input [(ngModel)]=\"user.password\" required minlength=\"6\" name=\"password\" type=\"password\" class=\"form-control\" #password=\"ngModel\">\r\n                <div>{{password.errors | json}}</div>\r\n                <div *ngIf=\"(password.dirty||password.touched) && password.errors && password?.errors.required\">Vui lòng\r\n                    nhập mất khẩu</div>\r\n                <div *ngIf=\"(password.dirty||password.touched) && password.errors && password?.errors.minlength\">Vui lòng\r\n                    nhập mất khẩu có hơn 6 ký tự</div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div>{{loginForm.valid}}</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login-model */ "./src/app/login-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.user = new _login_model__WEBPACK_IMPORTED_MODULE_1__["LoginModel"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/sign/sign.component.css":
/*!*****************************************!*\
  !*** ./src/app/sign/sign.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    font-family: 'Roboto';\r\n    background: url(\"https://preview.ibb.co/fKmQxp/bg_c23d5219c1e78a0c1f25.png\");\r\n    background-position: bottom left;\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;  \r\n  \r\n}\r\n.c{\r\n    font-weight: 800;\r\n    font-size: 19px;\r\n}\r\n.p{\r\n    font-size: 15px;\r\n}\r\n.bm{\r\n    float: right;\r\n}\r\n.ok{\r\n    text-align: center;\r\n}\r\n.space{\r\n    margin-top: 20rem;\r\n}\r\n.required::after{\r\n    content: '*';\r\n    color: red;\r\n}\r\n.required2::before{\r\n    content: '*';\r\n    color: red;\r\n}\r\n.mgl{\r\n    margin-left: 15rem;\r\n}\r\n.tried{\r\n    float: right;\r\n}\r\n.pb{\r\n    padding-bottom: 11px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/sign/sign.component.html":
/*!******************************************!*\
  !*** ./src/app/sign/sign.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"container\">\n    <div class=\"row ok\">\n      <div class=\"col-sm-12 py-5\">\n        <h2>ĐĂNG KÍ</h2>\n      </div>\n    </div>\n    <div class=\"row mb-3\">\n      <div class=\"col-sm-4 required2\">\n        <span style=\"font-style: italic;font-size:20px;font-weight: 400\"> Trường bắt buộc</span>\n      </div>\n      <div class=\"col-sm-12 \">\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <div class=\"row\">\n            </div>\n          </div>\n          <div class=\"col-sm-5\">\n            <div class=\"form-check form-check-inline pb\">\n              <input class=\"form-check-input \" type=\"radio\" name=\"congty\" id=\"inlineRadio5\" value=\"1\" checked [(ngModel)]=\"congty\">\n              <label class=\"form-check-label c\" for=\"inlineRadio1\">Cá nhân</label>\n              <input class=\"form-check-input ml-5 tr\" type=\"radio\" name=\"congty\" id=\"inlineRadio2\" value=\"2\" [(ngModel)]=\"congty\">\n              <label class=\"form-check-label c\" for=\"inlineRadio2\">Công ty/ Tổ chức</label>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"congty == 1\">\n          <div class=\"row\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-2 required\">\n              <span class=\"p\">Họ và tên </span>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"input-group mb-3\">\n                <input type=\"text\" class=\"form-control\" aria-label=\"Username\" aria-describedby=\"basic-addon1\" [(ngModel)]=\"user.userName\"\n                  required #username=\"ngModel\">\n                <!--temple-available-->\n              </div>\n            </div>\n            <div class=\"col-sm-3\">\n              <div>\n                <div *ngIf=\"(username.dirty||username.touched) && username.errors && username?.errors.required\">\n                  <p style=\"color: red\">Vui lòng nhập họ và tên</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-2 required\">\n              <span class=\"p\">Số điện thoại </span>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"input-group mb-3\">\n                <input type=\"text\" class=\"form-control\" aria-label=\"SDT\" [(ngModel)]=\"user.sdt\" required minlength=\"10\" maxlength=\"20\" #sdt=\"ngModel\"\n                  pattern=\"[0-9]+\">\n              </div>\n            </div>\n            <div class=\"col-sm-3\">\n              <div *ngIf=\"(sdt.dirty||sdt.touched) && sdt.errors && sdt?.errors?.required\">Vui lòng nhập sđt</div>\n              <div *ngIf=\"(sdt.dirty||sdt.touched) && sdt.errors && sdt?.errors?.pattern\">Vui lòng nhập số</div>\n              <div *ngIf=\"(sdt.dirty||sdt.touched) && sdt.errors && sdt?.errors?.minlength\">Vui lòng nhập hơn 10 chữ số</div>\n              <div *ngIf=\"(sdt.dirty||sdt.touched) && sdt.errors && sdt?.errors?.maxlength\">Vui lòng nhập nhỏ hơn 20 chữ\n                số\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-2 required\">\n              <span class=\"p\">Ngày sinh </span>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"input-group mb-3\">\n                <input type=\"date\" class=\"form-control\" [(ngModel)]=\"user.date\" required #date=\"ngModel\">\n              </div>\n            </div>\n            <div class=\"col-sm-3\">\n              <div *ngIf=\"(date.dirty||date.touched) && date.errors && date?.errors.required\">\n                <p style=\"color:red\">Vui lòng nhập ngày sinh</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-2\">\n              <span class=\"p\">Địa chỉ</span>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"input-group mb-3\">\n                <input type=\"text\" class=\"form-control\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\n              </div>\n            </div>\n            <div class=\"col-sm-2\">\n              <div class=\"input-group mb-3\">\n                <div class=\"form-check form-check-inline\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\n                  <label class=\"form-check-label p\" for=\"inlineRadio1\">TP.HCM</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-2\">\n              <div class=\"input-group mb-3\">\n                <select class=\"form-control\">\n                  <option></option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-4\"></div>\n            <div class=\"col-sm-2\">\n              <div class=\"input-group mb-3\">\n                <div class=\"form-check form-check-inline\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\n                  <label class=\"form-check-label p\" for=\"inlineRadio1\">Tỉnh thành khác</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-2\">\n              <div class=\"input-group mb-3\">\n                <select class=\"form-control\">\n                  <option></option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-2 required\">\n              <span class=\"p\">Giới tính</span>\n            </div>\n            <div class=\"col-sm-4 mb-4\">\n              <div class=\"form-check form-check-inline\">\n                <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio7\" value=\"option1\" checked>\n                <label class=\"form-check-label \" for=\"inlineRadio1\">Nam</label>\n              </div>\n              <div class=\"form-check form-check-inline ml-2\">\n                <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio8\" value=\"option2\">\n                <label class=\"form-check-label \" for=\"inlineRadio2\">Nữ</label>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-2 required\">\n              <span class=\"p\">Email</span>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"input-group mb-3\">\n                <input type=\"email\" class=\"form-control\" aria-label=\"Username\" aria-describedby=\"basic-addon1\" [(ngModel)]=\"user.Email\" required\n                  #email=\"ngModel\" pattern=\"[a-z0-9.]+@[a-z0-9.]*\">\n              </div>\n            </div>\n            <div class=\"col-sm-3\">\n              <div *ngIf=\"(email.dirty || email.touched) && email.errors && email?.errors.required\">\n                <p>Vui lòng nhập email</p>\n              </div>\n              <div *ngIf=\"(email.dirty || email.touched) && email.errors && email?.errors.pattern\">\n                <p>Vui lòng nhập email đúng định dạng</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-2 required\">\n              <span class=\"p\">Mật khẩu </span>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"input-group mb-3\">\n                <input type=\"password\" class=\"form-control\" aria-label=\"pass\" aria-describedby=\"basic-addon1\" [(ngModel)]=\"user.password\"\n                  required minlength=\"6\" #pass=\"ngModel\">\n              </div>\n            </div>\n            <div class=\"col-sm 3\">\n              <div *ngIf=\" (pass.dirty || pass.touched) && pass.errors && pass?.errors.required \">\n                <p style=\"color: red\">Vui lòng nhập mật khẩu</p>\n              </div>\n              <div *ngIf=\" (pass.dirty || pass.touched) && pass.errors && pass?.errors.minlength \">\n                <p style=\"color: red\">Vui lòng nhập mật khẩu hơn 6 kí tự</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-2 required\">\n              <span class=\"p\">Nhập lại mật khẩu </span>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"input-group mb-3\">\n                <input type=\"password\" class=\"form-control\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"congty == 2\">\n          <div class=\"row\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-2 required\">\n              <span class=\"p\">Mã số thuế </span>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"input-group mb-3\">\n                <input type=\"text\" class=\"form-control\" aria-label=\"Username\" aria-describedby=\"basic-addon1\" [(ngModel)]=\"user.userName\"\n                  required #username=\"ngModel\">\n                <!--temple-available-->\n              </div>\n            </div>\n            <div class=\"col-sm-3\">\n              <div>\n                <div *ngIf=\"(username.dirty||username.touched) && username.errors && username?.errors.required\">\n                  <p style=\"color: red\">Vui lòng nhập họ và tên</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-2 required\">\n              <span class=\"p\">Số điện thoại </span>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"input-group mb-3\">\n                <input type=\"text\" class=\"form-control\" aria-label=\"SDT\" [(ngModel)]=\"user.sdt\" required minlength=\"10\" maxlength=\"20\" #sdt=\"ngModel\"\n                  pattern=\"[0-9]+\">\n              </div>\n            </div>\n            <div class=\"col-sm-3\">\n              <div *ngIf=\"(sdt.dirty||sdt.touched) && sdt.errors && sdt?.errors?.required\">Vui lòng nhập sđt</div>\n              <div *ngIf=\"(sdt.dirty||sdt.touched) && sdt.errors && sdt?.errors?.pattern\">Vui lòng nhập số</div>\n              <div *ngIf=\"(sdt.dirty||sdt.touched) && sdt.errors && sdt?.errors?.minlength\">Vui lòng nhập hơn 10 chữ số</div>\n              <div *ngIf=\"(sdt.dirty||sdt.touched) && sdt.errors && sdt?.errors?.maxlength\">Vui lòng nhập nhỏ hơn 20 chữ\n                số\n              </div>\n              <!--Chưa hiển thị được chỉ hiển thị số -->\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-2 required\">\n              <span class=\"p\">Ngày sinh </span>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"input-group mb-3\">\n                <input type=\"date\" class=\"form-control\" [(ngModel)]=\"user.date\" required #date=\"ngModel\">\n              </div>\n            </div>\n            <div class=\"col-sm-3\">\n              <div *ngIf=\"(date.dirty||date.touched) && date.errors && date?.errors.required\">\n                <p style=\"color:red\">Vui lòng nhập ngày sinh</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-2\">\n              <span class=\"p\">Địa chỉ</span>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"input-group mb-3\">\n                <input type=\"text\" class=\"form-control\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\n              </div>\n            </div>\n            <div class=\"col-sm-2\">\n              <div class=\"input-group mb-3\">\n                <div class=\"form-check form-check-inline\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\n                  <label class=\"form-check-label p\" for=\"inlineRadio1\">TP.HCM</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-2\">\n              <div class=\"input-group mb-3\">\n                <select class=\"form-control\">\n                  <option></option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-4\"></div>\n            <div class=\"col-sm-2\">\n              <div class=\"input-group mb-3\">\n                <div class=\"form-check form-check-inline\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\n                  <label class=\"form-check-label p\" for=\"inlineRadio1\">Tỉnh thành khác</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-2\">\n              <div class=\"input-group mb-3\">\n                <select class=\"form-control\">\n                  <option></option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-2 required\">\n              <span class=\"p\">Giới tính</span>\n            </div>\n            <div class=\"col-sm-4 mb-4\">\n              <div class=\"form-check form-check-inline\">\n                <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio7\" value=\"option1\" checked>\n                <label class=\"form-check-label \" for=\"inlineRadio1\">Nam</label>\n              </div>\n              <div class=\"form-check form-check-inline ml-2\">\n                <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio8\" value=\"option2\">\n                <label class=\"form-check-label \" for=\"inlineRadio2\">Nữ</label>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-2 required\">\n              <span class=\"p\">Email</span>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"input-group mb-3\">\n                <input type=\"email\" class=\"form-control\" aria-label=\"Username\" aria-describedby=\"basic-addon1\" [(ngModel)]=\"user.Email\" required\n                  #email=\"ngModel\" pattern=\"[a-z0-9.]+@[a-z0-9.]*\">\n              </div>\n            </div>\n            <div class=\"col-sm-3\">\n              <div *ngIf=\"(email.dirty || email.touched) && email.errors && email?.errors.required\">\n                <p>Vui lòng nhập email</p>\n              </div>\n              <div *ngIf=\"(email.dirty || email.touched) && email.errors && email?.errors.pattern\">\n                <p>Vui lòng nhập email đúng định dạng</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-2 required\">\n              <span class=\"p\">Mật khẩu </span>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"input-group mb-3\">\n                <input type=\"password\" class=\"form-control\" aria-label=\"pass\" aria-describedby=\"basic-addon1\" [(ngModel)]=\"user.password\"\n                  required minlength=\"6\" #pass=\"ngModel\">\n              </div>\n            </div>\n            <div class=\"col-sm 3\">\n              <div *ngIf=\" (pass.dirty || pass.touched) && pass.errors && pass?.errors.required \">\n                <p style=\"color: red\">Vui lòng nhập mật khẩu</p>\n              </div>\n              <div *ngIf=\" (pass.dirty || pass.touched) && pass.errors && pass?.errors.minlength \">\n                <p style=\"color: red\">Vui lòng nhập mật khẩu hơn 6 kí tự</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-2 required\">\n              <span class=\"p\">Nhập lại mật khẩu </span>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"input-group mb-3\">\n                <input type=\"password\" class=\"form-control\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-2\"></div>\n    <div class=\"col-sm-2\">\n    </div>\n    <div class=\"col-sm-3\">\n      <button type=\"button\" class=\"btn btn-secondary\" style=\"width: 45%;height: 96%;background-color: #15c5d2\">Tạo Tài Khoản\n      </button>\n      <button type=\"button\" class=\"btn btn-secondary bm\" style=\"width: 45%;height:96%;background-color: #bdc1c2\">Quay lại</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"space\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/sign/sign.component.ts":
/*!****************************************!*\
  !*** ./src/app/sign/sign.component.ts ***!
  \****************************************/
/*! exports provided: SignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignComponent", function() { return SignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login-model */ "./src/app/login-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignComponent = /** @class */ (function () {
    function SignComponent() {
        this.user = new _login_model__WEBPACK_IMPORTED_MODULE_1__["LoginModel"]();
        this.congty = '1';
    }
    SignComponent.prototype.ngOnInit = function () {
    };
    SignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign',
            template: __webpack_require__(/*! ./sign.component.html */ "./src/app/sign/sign.component.html"),
            styles: [__webpack_require__(/*! ./sign.component.css */ "./src/app/sign/sign.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignComponent);
    return SignComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nhan\Desktop\New folder\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map