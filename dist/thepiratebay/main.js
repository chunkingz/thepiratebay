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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_recent_recent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/recent/recent.component */ "./src/app/components/recent/recent.component.ts");
/* harmony import */ var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/notfound/notfound.component */ "./src/app/components/notfound/notfound.component.ts");
/* harmony import */ var _components_top_torrents_top_torrents_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/top-torrents/top-torrents.component */ "./src/app/components/top-torrents/top-torrents.component.ts");
/* harmony import */ var _components_top40_torrents_top40_torrents_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/top40-torrents/top40-torrents.component */ "./src/app/components/top40-torrents/top40-torrents.component.ts");










var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: 'recent', component: _components_recent_recent_component__WEBPACK_IMPORTED_MODULE_6__["RecentComponent"] },
    { path: 'top-torrents/:torrent', component: _components_top_torrents_top_torrents_component__WEBPACK_IMPORTED_MODULE_8__["TopTorrentsComponent"] },
    { path: 'top-48hours-torrents/:torrent', component: _components_top40_torrents_top40_torrents_component__WEBPACK_IMPORTED_MODULE_9__["Top40TorrentsComponent"] },
    { path: '**', component: _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_7__["NotfoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<section>\n  <router-outlet></router-outlet>\n</section>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'thepiratebay';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/side-bar/side-bar.component */ "./src/app/components/side-bar/side-bar.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_recent_recent_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/recent/recent.component */ "./src/app/components/recent/recent.component.ts");
/* harmony import */ var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/notfound/notfound.component */ "./src/app/components/notfound/notfound.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng2_go_top_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-go-top-button */ "./node_modules/ng2-go-top-button/dist/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _pipes_convert_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pipes/convert.pipe */ "./src/app/pipes/convert.pipe.ts");
/* harmony import */ var _pipes_stripunsafe_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pipes/stripunsafe.pipe */ "./src/app/pipes/stripunsafe.pipe.ts");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var _pipes_convert_date_time_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pipes/convert-date-time.pipe */ "./src/app/pipes/convert-date-time.pipe.ts");
/* harmony import */ var _pipes_display_font_awesome_icon_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pipes/display-font-awesome-icon.pipe */ "./src/app/pipes/display-font-awesome-icon.pipe.ts");
/* harmony import */ var _components_top_torrents_top_torrents_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/top-torrents/top-torrents.component */ "./src/app/components/top-torrents/top-torrents.component.ts");
/* harmony import */ var _components_top40_torrents_top40_torrents_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/top40-torrents/top40-torrents.component */ "./src/app/components/top40-torrents/top40-torrents.component.ts");




// import {ReactiveFormsModule} from '@angular/forms';
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_13__["SideBarComponent"],
                _components_recent_recent_component__WEBPACK_IMPORTED_MODULE_15__["RecentComponent"],
                _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_16__["NotfoundComponent"],
                _pipes_convert_pipe__WEBPACK_IMPORTED_MODULE_21__["ConvertPipe"],
                _pipes_stripunsafe_pipe__WEBPACK_IMPORTED_MODULE_22__["StripunsafePipe"],
                _pipes_convert_date_time_pipe__WEBPACK_IMPORTED_MODULE_24__["ConvertDateTimePipe"],
                _pipes_display_font_awesome_icon_pipe__WEBPACK_IMPORTED_MODULE_25__["DisplayFontAwesomeIconPipe"],
                _components_top_torrents_top_torrents_component__WEBPACK_IMPORTED_MODULE_26__["TopTorrentsComponent"],
                _components_top40_torrents_top40_torrents_component__WEBPACK_IMPORTED_MODULE_27__["Top40TorrentsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_17__["NgxSpinnerModule"],
                ng2_go_top_button__WEBPACK_IMPORTED_MODULE_18__["GoTopButtonModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_23__["ClipboardModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"].forRoot()
                // ReactiveFormsModule
            ],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_11__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\n\n<ngx-spinner\n    bdColor=\"rgba(51,51,51,0.8)\"\n    size=\"medium\"\n    color=\"#fff\"\n    type=\"ball-scale-multiple\">\n    <p class=\"text-center\" style=\"font-size: 20px; color: white\">Loading...</p>\n</ngx-spinner>\n\n    <section class=\"jumbotron text-center\">\n        <div class=\"container container1\">\n        <h1 class=\"jumbotron-heading header-style\">About Pirate Search...</h1>\n        <small class=\"text-muted\">Worlds number 1 Torrent search Engine</small>\n  \n        <br><br><br>\n        <h3>Pirate Search was created to bypass ISP's ip blocking to access thepiratebay.org</h3>\n        <br>\n        <h5>Another huge bonus <i class=\"fas fa-rocket text-success\"></i>, it saves you from the \n            <i class=\"fas fa-ghost text-secondary\"></i>\n            <b> hidden ads </b> \n            <i class=\"fas fa-ghost text-secondary\"></i> and \n            <i class=\"fas fa-skull-crossbones\" style=\"color: brown;\"></i> \n            <b> malicious scripts </b> \n            <i class=\"fas fa-skull-crossbones\" style=\"color: brown;\"></i>\n                running in the background.\n        </h5>\n<br><br><br>\n        <p class=\"text-danger\">Follow me on Github <i class=\"fab fa-github text-secondary\"></i>\n             <a href=\"https://github.com/chunkingz\" target=\"_blank\"> @{{handle}} </a> </p>\n            \n        <p>Other Contributors: C'Dest</p>\n        </div>\n    </section>\n</main>\n\n<app-footer></app-footer>\n  "

/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  padding-top: 10rem;\n}\n\n@media only screen and (max-width: 768px) {\n  section {\n    padding-top: 5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3J0dW5la2luZy9Eb3dubG9hZHMvYW5ndWxhci90aGVwaXJhdGViYXkvc3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksaUJBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiAxMHJlbTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHNlY3Rpb257XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cmVtO1xuICAgIH1cbiAgfSIsInNlY3Rpb24ge1xuICBwYWRkaW5nLXRvcDogMTByZW07XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgc2VjdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDVyZW07XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");



var AboutComponent = /** @class */ (function () {
    function AboutComponent(spinner) {
        this.spinner = spinner;
        this.handle = "chunkingz";
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        setTimeout(function () {
            _this.spinner.hide();
        }, 1000);
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  <div id=\"wrapper\">\n\n    <app-side-bar></app-side-bar>\n\n    <div id=\"content-wrapper\">\n\n      <div class=\"container-fluid\">\n\n        <!-- Breadcrumbs-->\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\">\n            <a href=\"#\">Home</a>\n          </li>\n          <li class=\"breadcrumb-item active\">Contact</li>\n        </ol>\n\n        <!-- Icon Cards-->\n        <div class=\"row\">\n          <div class=\"col-xl-3 col-sm-6 mb-3\">\n            <div class=\"card text-white bg-primary o-hidden h-100\">\n              <div class=\"card-body\">\n                <div class=\"card-body-icon\">\n                  <i class=\"fas fa-fw fa-comments\"></i>\n                </div>\n                <div class=\"mr-5\">26 New Messages!</div>\n              </div>\n              <a class=\"card-footer text-white clearfix small z-1\" href=\"#\">\n                <span class=\"float-left\">View Details</span>\n                <span class=\"float-right\">\n                  <i class=\"fas fa-angle-right\"></i>\n                </span>\n              </a>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-sm-6 mb-3\">\n            <div class=\"card text-white bg-warning o-hidden h-100\">\n              <div class=\"card-body\">\n                <div class=\"card-body-icon\">\n                  <i class=\"fas fa-fw fa-list\"></i>\n                </div>\n                <div class=\"mr-5\">11 New Tasks!</div>\n              </div>\n              <a class=\"card-footer text-white clearfix small z-1\" href=\"#\">\n                <span class=\"float-left\">View Details</span>\n                <span class=\"float-right\">\n                  <i class=\"fas fa-angle-right\"></i>\n                </span>\n              </a>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-sm-6 mb-3\">\n            <div class=\"card text-white bg-success o-hidden h-100\">\n              <div class=\"card-body\">\n                <div class=\"card-body-icon\">\n                  <i class=\"fas fa-fw fa-shopping-cart\"></i>\n                </div>\n                <div class=\"mr-5\">123 New Orders!</div>\n              </div>\n              <a class=\"card-footer text-white clearfix small z-1\" href=\"#\">\n                <span class=\"float-left\">View Details</span>\n                <span class=\"float-right\">\n                  <i class=\"fas fa-angle-right\"></i>\n                </span>\n              </a>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-sm-6 mb-3\">\n            <div class=\"card text-white bg-danger o-hidden h-100\">\n              <div class=\"card-body\">\n                <div class=\"card-body-icon\">\n                  <i class=\"fas fa-fw fa-life-ring\"></i>\n                </div>\n                <div class=\"mr-5\">13 New Tickets!</div>\n              </div>\n              <a class=\"card-footer text-white clearfix small z-1\" href=\"#\">\n                <span class=\"float-left\">View Details</span>\n                <span class=\"float-right\">\n                  <i class=\"fas fa-angle-right\"></i>\n                </span>\n              </a>\n            </div>\n          </div>\n        </div>\n\n        <app-footer></app-footer>\n\n      </div>\n      <!-- /.container-fluid -->\n      \n    </div>\n    <!-- /.content-wrapper -->\n\n  </div>\n  <!-- /#wrapper -->\n\n  <!-- Scroll to Top Button-->\n  <a class=\"scroll-to-top rounded\" href=\"#page-top\">\n    <i class=\"fas fa-angle-up\"></i>\n  </a>\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sticky Footer -->\n\n<footer class=\"sticky-footer text-muted\">\n    <div class=\"container container1\">\n      <p class=\"float-right\">\n        <a href=\"#\">Back to top</a>\n      </p>\n      <p>thePirateBay Search, No Copyrights {{year}}</p>\n    </div>\n  </footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.year = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\n\n  <ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-scale-multiple\">\n    <p class=\"text-center\" style=\"font-size: 20px; color: white\">Loading...</p>\n  </ngx-spinner>\n\n\n  <section class=\"jumbotron text-center container1\">\n\n    <div class=\"container\" *ngIf=\"searchKeyword.value.length <= 0\">\n      <img src=\"../../../assets/tpb-2.png\" alt=\"tpb\">\n      <!-- <h1 style=\"font-family: 'Pirata One', cursive; color:rgb(233, 103, 103);\" class=\"jumbotron-heading\">Welcome to Pirate Search...</h1> -->\n      <br>\n      <small class=\"text-muted\">Worlds number 1 Torrent search Engine</small>\n    </div>\n\n    <form>\n      <div class=\"form-group\">\n        <br><br>\n        <input #searchKeyword class=\"form-control col-lg-8 mx-auto\" id=\"searchbox\" (keyup)=\"search()\" name=\"searchTerm\"\n          [(ngModel)]=\"searchTerm\" type=\"text\" placeholder=\"Search torrents...\">\n      </div>\n    </form>\n\n    <!-- alert to show if copy magnet button is clicked -->\n    <!-- <ngb-alert *ngIf=\"successMessage\" type=\"success\" (close)=\"successMessage = null\">{{ successMessage }}</ngb-alert> -->\n\n\n  </section>\n\n  <div class=\"album py-5 bg-light\">\n    <div class=\"container\">\n      <div *ngIf=\"searchKeyword.value.length > 0 && searchTorrents; else noData\">\n          <div *ngFor=\"let searchResponse of searchTorrents\">\n\n            <div class=\"col-md-4 pull-left\">\n              <div class=\"card mb-4 shadow-sm\" style=\"max-height:350px;\">\n                <svg class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"90\" xmlns=\"http://www.w3.org/2000/svg\"\n                  preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\" aria-label=\"Placeholder: Torrent\">\n                  <rect width=\"100%\" height=\"100%\" fill=\"#55595c\" />\n                </svg>\n\n                <div class=\"card-body\">\n\n                  <p> <i class=\"fas fa-skull-crossbones\" style=\"color: brown;\"></i> <b> Title: </b>\n                    {{searchResponse.title}}</p>\n\n                  <p> <i class=\"fas fa-folder-open\" style=\"color: #845ef7;\"></i> <b> Category:</b>\n                    {{searchResponse.category}}</p>\n\n                  <p> <i class=\"fas fa-balance-scale text-info\"></i> <b> Size:</b> {{searchResponse.size | convert }}\n                  </p>\n\n                  <p> <i class=\"fas fa-arrow-up text-success\"></i> <b> Seeders:</b> {{searchResponse.seeds}}</p>\n\n                  <p> <i class=\"fas fa-arrow-down text-danger\"></i> <b> Leechers:</b> {{searchResponse.leeches}}</p>\n\n                  <p> <i class=\"fas fa-user text-primary\"></i> <b> Uploader:</b> {{searchResponse.uploader}}</p>\n\n                  <div class=\"d-flex justify-content-between align-items-center\">\n                    <div>\n\n                      <a href=\"{{searchResponse.magnet | stripunsafe}}\" class=\"btn btn-sm btn-outline-primary\"\n                        title=\"Copy Torrent Magnet Link\" ngxClipboard [cbContent]=\"searchResponse.magnet\"\n                        (click)=\"changeSuccessMessage()\">\n                        <i class=\"fas fa-magnet fa-rotate-180\"></i>\n                        Copy Magnet Link\n                      </a>\n                    </div>\n\n                    <small class=\"text-muted\">Uploaded: {{searchResponse.time | convertDateTime}}</small>\n\n                  </div>\n\n                </div>\n\n              </div>\n            </div>\n          </div>\n\n      </div>\n\n      <ng-template #noData>\n        <h1>No Data to display</h1>\n        <p>The API might be broken, please check with the web developer <a href=\"https://github.com/chunkingz/thepiratebay/issues\" target=\"_blank\" rel=\"noopener noreferrer\">here</a> </p>\n      </ng-template>\n\n\n\n    </div>\n  </div>\n\n\n</main>\n\n<br><br>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var HomeComponent = /** @class */ (function () {
    function HomeComponent(_data, spinner, snackBar) {
        this._data = _data;
        this.spinner = spinner;
        this.snackBar = snackBar;
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.staticAlertClosed = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        setTimeout(function () {
            _this.spinner.hide();
        }, 1000);
        // bs4 autohiding alert to show when copy to clipboard btn is clicked
        this._success.subscribe(function (message) {
            _this.successMessage = message;
            // call the snackbar display function
            _this.openSnackBar(_this.successMessage, "Okay");
        });
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(5000)).subscribe(function () { return _this.successMessage = null; });
    };
    // display snackbar
    HomeComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    HomeComponent.prototype.changeSuccessMessage = function () {
        this._success.next('Copied to clipboard successfully.');
    };
    HomeComponent.prototype.search = function () {
        var _this = this;
        this.spinner.show();
        if (this.searchTerm.length > 0) {
            this._data.search(this.searchTerm)
                .subscribe(function (response) {
                _this.searchTorrents = response;
                if (_this.searchTorrents.length == 0)
                    _this.searchTorrents = false;
                setTimeout(function () {
                    _this.spinner.hide();
                }, 1000);
            });
        }
        else {
            this.spinner.hide();
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand header-style-home\" (click)=\"collapse()\" routerLink=\"/\">\n    thePirateBay Search\n  </a>\n  <button class=\"navbar-toggler\" (click)=\"isCollapsed = !isCollapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div [ngbCollapse]=\"isCollapsed\" class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n\n    <ul class=\"navbar-nav mr-auto mx-auto\">\n      \n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"collapse()\" routerLink=\"/recent\">Recent Torrents</a>\n      </li>\n\n      <li ngbDropdown class=\"nav-item dropdown\">\n        <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Top Torrents\n        </a>\n        <div ngbDropdownMenu (click)=\"collapse()\" class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n          <a ngbDropdownItem class=\"dropdown-item\" routerLink=\"top-torrents/all\"><i class=\"fas fa-globe-asia\" style=\"color: blue;\"></i> All</a>\n          <a ngbDropdownItem class=\"dropdown-item\" routerLink=\"top-torrents/audio\"><i class=\"fas fa-music\" style=\"color: brown;\"></i> Audio</a>\n          <a ngbDropdownItem class=\"dropdown-item\" routerLink=\"top-torrents/video\"><i class=\"fas fa-video\" style=\"color: fuchsia;\"></i> Video</a>\n          <a ngbDropdownItem class=\"dropdown-item\" routerLink=\"top-torrents/applications\"><i class=\"fas fa-ghost\" style=\"color: rgb(241, 76, 76);\"></i> Applications</a>\n          <a ngbDropdownItem class=\"dropdown-item\" routerLink=\"top-torrents/games\"><i class=\"fas fa-gamepad\" style=\"color: blueviolet;\"></i> Games</a>\n          <a ngbDropdownItem class=\"dropdown-item\" routerLink=\"top-torrents/18+\"><i class=\"fas fa-venus-mars\" style=\"color: palevioletred;\"></i> 18+</a>\n          <a ngbDropdownItem class=\"dropdown-item\" routerLink=\"top-torrents/other\"><i class=\"fab fa-medapps\" style=\"color: green;\"></i> Other</a>\n        </div>\n      </li>\n\n      <li ngbDropdown class=\"nav-item dropdown\">\n        <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Top 48hours Torrents\n        </a>\n        <div ngbDropdownMenu (click)=\"collapse()\" class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n          <a ngbDropdownItem class=\"dropdown-item\" routerLink=\"top-48hours-torrents/all\"><i class=\"fas fa-globe-asia\" style=\"color: blue;\"></i> All</a>\n          <a ngbDropdownItem class=\"dropdown-item\" routerLink=\"top-48hours-torrents/audio\"><i class=\"fas fa-music\" style=\"color: brown;\"></i> Audio</a>\n          <a ngbDropdownItem class=\"dropdown-item\" routerLink=\"top-48hours-torrents/video\"><i class=\"fas fa-video\" style=\"color: fuchsia;\"></i> Video</a>\n          <a ngbDropdownItem class=\"dropdown-item\" routerLink=\"top-48hours-torrents/applications\"><i class=\"fas fa-ghost\" style=\"color: rgb(241, 76, 76);\"></i> Applications</a>\n          <a ngbDropdownItem class=\"dropdown-item\" routerLink=\"top-48hours-torrents/games\"><i class=\"fas fa-gamepad\" style=\"color: blueviolet;\"></i> Games</a>\n          <a ngbDropdownItem class=\"dropdown-item\" routerLink=\"top-48hours-torrents/18+\"><i class=\"fas fa-venus-mars\" style=\"color: palevioletred;\"></i> 18+</a>\n          <a ngbDropdownItem class=\"dropdown-item\" routerLink=\"top-48hours-torrents/other\"><i class=\"fab fa-medapps\" style=\"color: green;\"></i> Other</a>\n        </div>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"collapse()\" routerLink=\"/about\">About</a>\n      </li>\n\n    </ul>\n\n    <form class=\"form-inline my-2 my-lg-0\">\n\n      <input #searchKeyword class=\"form-control mr-sm-2\" id=\"searchbox\" name=\"searchTerm\" \n      type=\"text\" placeholder=\"Search torrents...\" aria-label=\"Search\">\n\n      <button (click)=\"collapse()\" class=\"btn my-2 my-sm-0\" style=\"background-color:#900;color:white;\" type=\"submit\">Search</button>\n    </form>\n\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/nav/nav.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-item:hover {\n  background-color: #555;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3J0dW5la2luZy9Eb3dubG9hZHMvYW5ndWxhci90aGVwaXJhdGViYXkvc3JjL2FwcC9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3IgOiAjNTU1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iLCIuZHJvcGRvd24taXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.isCollapsed = true;
    }
    NavComponent.prototype.collapse = function () {
        this.isCollapsed = true;
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/components/nav/nav.component.scss")]
        })
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/notfound/notfound.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container1 text-center\">\n\n    <h1 style=\"color:#900;\">\n      Error 404\n    </h1>\n    <h3> the page you seek doesn't exist.</h3>\n    <p>Go back to the <a routerLink=\"/\" style=\"color:#900;\">Homepage</a> </p>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.ts ***!
  \***********************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/components/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.scss */ "./src/app/components/notfound/notfound.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/components/recent/recent.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/recent/recent.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\n\n<ngx-spinner\n  bdColor=\"rgba(51,51,51,0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"ball-scale-multiple\">\n  <p class=\"text-center\" style=\"font-size: 20px; color: white\">Loading Recent Torrents...</p>\n</ngx-spinner>\n\n    <h1 class=\"jumbotron-heading text-center recent header-style\">\n      Recent Torrents\n    </h1>\n\n    <!-- alert to show if copy magnet button is clicked -->\n    <!-- <ngb-alert *ngIf=\"successMessage\" type=\"success\" (close)=\"successMessage = null\">{{ successMessage }}</ngb-alert> -->\n  \n    <div class=\"album py-5 bg-light\">\n      <div class=\"container\">\n  \n        <div>\n          \n        <div *ngIf=\"torrents; else noData\">\n            <div *ngFor=\"let recentTorrents of torrents\">\n\n                <div class=\"col-md-4 pull-left\">\n                    <div class=\"card mb-4 shadow-sm\" style=\"max-height:390px;\">\n                      <svg class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"90\" xmlns=\"http://www.w3.org/2000/svg\"\n                        preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\" aria-label=\"Placeholder: Torrent\">\n                        <rect width=\"100%\" height=\"100%\" fill=\"#55595c\" />\n                      </svg>\n      \n                      <div class=\"card-body\">\n      \n                        <p> <i class=\"fas fa-skull-crossbones\" style=\"color: brown;\"></i> <b> Title: </b>\n                          {{recentTorrents.title}}</p>\n      \n                        <p> <i class=\"fas fa-folder-open\" style=\"color: #845ef7;\"></i> <b> Category:</b>\n                          {{recentTorrents.category}}</p>\n      \n                        <p> <i class=\"fas fa-balance-scale text-info\"></i> <b> Size:</b> {{recentTorrents.size | convert }}</p>\n                        \n                        <p> <i class=\"fas fa-arrow-up text-success\"></i> <b> Seeders:</b> {{recentTorrents.seeds}}</p>\n                        \n                        <p> <i class=\"fas fa-arrow-down text-danger\"></i> <b> Leechers:</b> {{recentTorrents.leeches}}</p>\n                        \n                        <p> <i class=\"fas fa-user text-primary\"></i> <b> Uploader:</b> {{recentTorrents.uploader}}</p>\n      \n                        <div class=\"d-flex justify-content-between align-items-center\">\n                          <div>\n      \n                          <a href=\"{{recentTorrents.magnet | stripunsafe}}\" class=\"btn btn-sm btn-outline-primary\"  title=\"Copy Torrent Magnet Link\"\n                            ngxClipboard [cbContent]=\"recentTorrents.magnet\" \n                            (click)=\"changeSuccessMessage()\">\n                              <i class=\"fas fa-magnet fa-rotate-180\"></i>\n                              Copy Magnet Link\n                          </a>\n                          </div>\n      \n                          <small class=\"text-muted\">Uploaded: {{recentTorrents.time | convertDateTime}}</small>\n      \n                        </div>\n      \n                      </div>\n      \n                    </div>\n                  </div>\n\n        </div>\n      </div>\n\n      <ng-template #noData>\n        <h1>No Data to display</h1>\n        <p>The API might be broken, please check with the web developer <a href=\"https://github.com/chunkingz/thepiratebay/issues\" target=\"_blank\" rel=\"noopener noreferrer\">here</a> </p>\n      </ng-template>\n      \n      </div>\n      </div>\n    </div>\n  \n  </main>\n  \n  <!-- <app-footer></app-footer> -->\n"

/***/ }),

/***/ "./src/app/components/recent/recent.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/recent/recent.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjZW50L3JlY2VudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/recent/recent.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/recent/recent.component.ts ***!
  \*******************************************************/
/*! exports provided: RecentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentComponent", function() { return RecentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var RecentComponent = /** @class */ (function () {
    function RecentComponent(_data, spinner, snackBar) {
        this._data = _data;
        this.spinner = spinner;
        this.snackBar = snackBar;
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.staticAlertClosed = false;
    }
    RecentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        this.getTorrents();
        // bs4 autohiding alert to show when copy to clipboard btn is clicked
        this._success.subscribe(function (message) {
            _this.successMessage = message;
            // call the snackbar display function
            _this.openSnackBar(_this.successMessage, "Okay");
        });
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(5000)).subscribe(function () { return _this.successMessage = null; });
    };
    // display snackbar
    RecentComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    RecentComponent.prototype.changeSuccessMessage = function () {
        this._success.next('Copied to clipboard successfully.');
    };
    RecentComponent.prototype.getTorrents = function () {
        var _this = this;
        this._data.getTorrents()
            .subscribe(function (response) {
            setTimeout(function () {
                _this.spinner.hide();
            }, 1000);
            _this.torrents = response;
            if (_this.torrents.length == 0)
                _this.torrents = false;
        });
    };
    RecentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recent',
            template: __webpack_require__(/*! ./recent.component.html */ "./src/app/components/recent/recent.component.html"),
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]],
            styles: [__webpack_require__(/*! ./recent.component.scss */ "./src/app/components/recent/recent.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], RecentComponent);
    return RecentComponent;
}());



/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar -->\n<ul class=\"sidebar navbar-nav\">\n  <li class=\"nav-item active\">\n    <a class=\"nav-link\" routerLink=\"\">\n      <i class=\"fas fa-fw fa-refresh fa-spin text-warning\"></i>\n      <span> Recent Torrents</span>\n    </a>\n  </li>\n  <li ngbDropdown class=\"nav-item dropdown\">\n    <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"pagesDropdown01\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      <i class=\"fas fa-trophy text-warning\"></i>\n      <span> Top Torrents</span>\n    </a>\n    <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"pagesDropdown01\">\n      <a class=\"dropdown-item\" routerLink=\"\"><i class=\"fas fa-atom\"></i> All</a>\n      <a class=\"dropdown-item\" routerLink=\"\"><i class=\"fas fa-file-audio\"></i> Audio</a>\n      <a class=\"dropdown-item\" routerLink=\"\"><i class=\"fas fa-video\"></i> Video</a>\n      <a class=\"dropdown-item\" routerLink=\"\"><i class=\"fas fa-mobile-alt\"></i> Applications</a>\n      <a class=\"dropdown-item\" routerLink=\"\"><i class=\"fas fa-gamepad\"></i> Games</a>\n      <a class=\"dropdown-item\" routerLink=\"\"><i class=\"fas fa-venus-mars\"></i> Porn</a>\n      <a class=\"dropdown-item\" routerLink=\"\"><i class=\"fas fa-biohazard\"></i> Others</a>\n    </div>\n  </li>\n  <li ngbDropdown class=\"nav-item dropdown\">\n    <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"pagesDropdown02\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      <i class=\"fas fa-hourglass-half text-warning\"></i>\n      <span> Top 48hour Torrents</span>\n    </a>\n    <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"pagesDropdown02\">\n      <a class=\"dropdown-item\" routerLink=\"\"><i class=\"fas fa-atom\"></i> All</a>\n      <a class=\"dropdown-item\" routerLink=\"\"><i class=\"fas fa-file-audio\"></i> Audio</a>\n      <a class=\"dropdown-item\" routerLink=\"\"><i class=\"fas fa-video\"></i> Video</a>\n      <a class=\"dropdown-item\" routerLink=\"\"><i class=\"fas fa-mobile-alt\"></i> Applications</a>\n      <a class=\"dropdown-item\" routerLink=\"\"><i class=\"fas fa-gamepad\"></i> Games</a>\n      <a class=\"dropdown-item\" routerLink=\"\"><i class=\"fas fa-venus-mars\"></i> Porn</a>\n      <a class=\"dropdown-item\" routerLink=\"\"><i class=\"fas fa-biohazard\"></i> Others</a>\n    </div>\n  </li>\n  <li ngbDropdown class=\"nav-item dropdown\">\n    <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"pagesDropdown03\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      <i class=\"fas fa-skull-crossbones text-warning\"></i>\n      <span> Browse by Category</span>\n    </a>\n    <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"pagesDropdown03\">\n      <a class=\"dropdown-item\" routerLink=\"\"><i class=\"fas fa-atom\"></i> All</a>\n      <a class=\"dropdown-item\" routerLink=\"\"><i class=\"fas fa-file-audio\"></i> Audio</a>\n      <a class=\"dropdown-item\" routerLink=\"\"><i class=\"fas fa-video\"></i> Video</a>\n      <a class=\"dropdown-item\" routerLink=\"\"><i class=\"fas fa-mobile-alt\"></i> Applications</a>\n      <a class=\"dropdown-item\" routerLink=\"\"><i class=\"fas fa-gamepad\"></i> Games</a>\n      <a class=\"dropdown-item\" routerLink=\"\"><i class=\"fas fa-venus-mars\"></i> Porn</a>\n      <a class=\"dropdown-item\" routerLink=\"\"><i class=\"fas fa-biohazard\"></i> Others</a>\n    </div>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/about\">\n      <i class=\"fas fa-question-circle text-warning\"></i>\n      <span> About thePirateBay-ng</span></a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/contact\">\n      <i class=\"fas fa-address-card text-warning\"></i>\n      <span> Contact Me</span></a>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SideBarComponent = /** @class */ (function () {
    function SideBarComponent() {
    }
    SideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/components/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.scss */ "./src/app/components/side-bar/side-bar.component.scss")]
        })
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/components/top-torrents/top-torrents.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/top-torrents/top-torrents.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" >\n\n    <ngx-spinner\n      bdColor=\"rgba(51,51,51,0.8)\"\n      size=\"medium\"\n      color=\"#fff\"\n      type=\"ball-scale-multiple\">\n      <p class=\"text-center\" style=\"font-size: 20px; color: white\">Loading Top Torrents...</p>\n    </ngx-spinner>\n\n    <h1 class=\"jumbotron-heading text-center recent header-style\">\n        Top Torrents\n      </h1>\n\n      \n      <div class=\"album py-5 bg-light\">\n        <div class=\"container\">\n\n        <!-- alert to show if copy magnet button is clicked -->\n        <!-- <ngb-alert *ngIf=\"successMessage\" type=\"success\" (close)=\"successMessage = null\">{{ successMessage }}</ngb-alert> -->\n    \n          <div>\n    \n            <div *ngIf=\"topTorrents\">\n              <div *ngFor=\"let topTorrentsResult of topTorrents\">\n    \n                <div class=\"col-md-4 pull-left\">\n                  <div class=\"card mb-4 shadow-sm\" style=\"max-height:350px;\">\n                    <svg class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"90\" xmlns=\"http://www.w3.org/2000/svg\"\n                      preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\" aria-label=\"Placeholder: Torrent\">\n                      <rect width=\"100%\" height=\"100%\" fill=\"#55595c\" />\n                    </svg>\n    \n                    <div class=\"card-body\">\n    \n                      <p> <i class=\"fas fa-skull-crossbones\" style=\"color: brown;\"></i> <b> Title: </b>\n                        {{topTorrentsResult.title}}</p>\n    \n                      <p> <i class=\"fas fa-folder-open\" style=\"color: #845ef7;\"></i> <b> Category:</b>\n                        {{topTorrentsResult.category}}</p>\n    \n                      <p> <i class=\"fas fa-balance-scale text-info\"></i> <b> Size:</b> {{topTorrentsResult.size | convert }}</p>\n                      \n                      <p> <i class=\"fas fa-arrow-up text-success\"></i> <b> Seeders:</b> {{topTorrentsResult.seeds}}</p>\n                      \n                      <p> <i class=\"fas fa-arrow-down text-danger\"></i> <b> Leechers:</b> {{topTorrentsResult.leeches}}</p>\n                      \n                      <p> <i class=\"fas fa-user text-primary\"></i> <b> Uploader:</b> {{topTorrentsResult.uploader}}</p>\n    \n                      <div class=\"d-flex justify-content-between align-items-center\">\n                        <div>\n    \n                        <a href=\"{{topTorrentsResult.magnet | stripunsafe}}\" class=\"btn btn-sm btn-outline-primary\"  title=\"Copy Torrent Magnet Link\"\n                          ngxClipboard [cbContent]=\"topTorrentsResult.magnet\" \n                          (click)=\"changeSuccessMessage()\">\n                            <i class=\"fas fa-magnet fa-rotate-180\"></i> \n                            Copy Magnet link\n                        </a>\n\n                        </div>\n    \n                        <small class=\"text-muted\">Uploaded: {{topTorrentsResult.time | convertDateTime}}</small>\n    \n                      </div>\n    \n                    </div>\n    \n                  </div>\n                </div>\n              </div>\n    \n            </div>\n          </div>\n    \n    \n    \n        </div>\n      </div>\n    \n    \n    </main>\n    \n    <br><br>\n    \n    <!-- <app-footer></app-footer> -->\n\n  <div *ngIf=\"badRoute\">\n\n      <app-notfound></app-notfound>\n      \n  </div>"

/***/ }),

/***/ "./src/app/components/top-torrents/top-torrents.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/top-torrents/top-torrents.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9wLXRvcnJlbnRzL3RvcC10b3JyZW50cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/top-torrents/top-torrents.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/top-torrents/top-torrents.component.ts ***!
  \*******************************************************************/
/*! exports provided: TopTorrentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopTorrentsComponent", function() { return TopTorrentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var TopTorrentsComponent = /** @class */ (function () {
    function TopTorrentsComponent(route, _piratebay, spinner, snackBar) {
        this.route = route;
        this._piratebay = _piratebay;
        this.spinner = spinner;
        this.snackBar = snackBar;
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.staticAlertClosed = false;
        this.subscribedParam = "";
        this.badRoute = false;
    }
    TopTorrentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        // get the current route param by subscribing to it
        this.route.paramMap.subscribe(function (params) {
            // bs4 autohiding alert to show when copy to clipboard btn is clicked
            _this._success.subscribe(function (message) {
                _this.successMessage = message;
                // call the snackbar display function
                _this.openSnackBar(_this.successMessage, "Okay");
            });
            _this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(5000)).subscribe(function () { return _this.successMessage = null; });
            _this.subscribedParam = params.get("torrent");
            _this.showRoute();
        });
        this.checkForBadRoute();
    };
    // display snackbar
    TopTorrentsComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    TopTorrentsComponent.prototype.changeSuccessMessage = function () {
        this._success.next('Copied to clipboard successfully.');
    };
    TopTorrentsComponent.prototype.getTopTorrents = function (x) {
        var _this = this;
        this.spinner.show();
        this._piratebay.getTopTorrents(x)
            .subscribe(function (response) {
            _this.topTorrents = response;
            setTimeout(function () {
                _this.spinner.hide();
            }, 1000);
        });
    };
    TopTorrentsComponent.prototype.showRoute = function () {
        if (this.subscribedParam == 'all') {
            this.getTopTorrents(0);
        }
        if (this.subscribedParam == 'audio') {
            this.getTopTorrents(100);
        }
        if (this.subscribedParam == 'video') {
            this.getTopTorrents(200);
        }
        if (this.subscribedParam == 'applications') {
            this.getTopTorrents(300);
        }
        if (this.subscribedParam == 'games') {
            this.getTopTorrents(400);
        }
        if (this.subscribedParam == '18+') {
            this.getTopTorrents(500);
        }
        if (this.subscribedParam == 'other') {
            this.getTopTorrents(600);
        }
    };
    TopTorrentsComponent.prototype.checkForBadRoute = function () {
        if (this.subscribedParam != 'all' && this.subscribedParam != 'audio' &&
            this.subscribedParam != 'video' && this.subscribedParam != 'applications' &&
            this.subscribedParam != 'games' && this.subscribedParam != '18+' && this.subscribedParam != 'other') {
            this.badRoute = !this.badRoute;
        }
    };
    TopTorrentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-torrents',
            template: __webpack_require__(/*! ./top-torrents.component.html */ "./src/app/components/top-torrents/top-torrents.component.html"),
            styles: [__webpack_require__(/*! ./top-torrents.component.scss */ "./src/app/components/top-torrents/top-torrents.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
    ], TopTorrentsComponent);
    return TopTorrentsComponent;
}());



/***/ }),

/***/ "./src/app/components/top40-torrents/top40-torrents.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/top40-torrents/top40-torrents.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\n\n    <ngx-spinner\n      bdColor=\"rgba(51,51,51,0.8)\"\n      size=\"medium\"\n      color=\"#fff\"\n      type=\"ball-scale-multiple\">\n      <p class=\"text-center\" style=\"font-size: 20px; color: white\">Loading Top 48hours Torrents...</p>\n    </ngx-spinner>\n\n    <h1 class=\"jumbotron-heading text-center recent header-style\">\n        Top 48 hours Torrents\n      </h1>\n    \n    \n      <div class=\"album py-5 bg-light\">\n        <div class=\"container\">\n\n    <!-- alert to show if copy magnet button is clicked -->\n    <!-- <ngb-alert *ngIf=\"successMessage\" type=\"success\" (close)=\"successMessage = null\">{{ successMessage }}</ngb-alert> -->\n    \n    \n          <div>\n    \n            <div *ngIf=\"top48Torrents\">\n              <div *ngFor=\"let topTorrentsResult of top48Torrents\">\n    \n                <div class=\"col-md-4 pull-left\">\n                  <div class=\"card mb-4 shadow-sm\" style=\"max-height:350px;\">\n                    <svg class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"90\" xmlns=\"http://www.w3.org/2000/svg\"\n                      preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\" aria-label=\"Placeholder: Torrent\">\n                      <rect width=\"100%\" height=\"100%\" fill=\"#55595c\" />\n                    </svg>\n    \n                    <div class=\"card-body\">\n    \n                      <p> <i class=\"fas fa-skull-crossbones\" style=\"color: brown;\"></i> <b> Title: </b>\n                        {{topTorrentsResult.title}}</p>\n    \n                      <p> <i class=\"fas fa-folder-open\" style=\"color: #845ef7;\"></i> <b> Category:</b>\n                        {{topTorrentsResult.category}}</p>\n    \n                      <p> <i class=\"fas fa-balance-scale text-info\"></i> <b> Size:</b> {{topTorrentsResult.size | convert }}</p>\n                      \n                      <p> <i class=\"fas fa-arrow-up text-success\"></i> <b> Seeders:</b> {{topTorrentsResult.seeds}}</p>\n                      \n                      <p> <i class=\"fas fa-arrow-down text-danger\"></i> <b> Leechers:</b> {{topTorrentsResult.leeches}}</p>\n                      \n                      <p> <i class=\"fas fa-user text-primary\"></i> <b> Uploader:</b> {{topTorrentsResult.uploader}}</p>\n    \n                      <div class=\"d-flex justify-content-between align-items-center\">\n                        <div>\n    \n                        <a href=\"{{topTorrentsResult.magnet | stripunsafe}}\" class=\"btn btn-sm btn-outline-primary\"  title=\"Copy Torrent Magnet Link\"\n                          ngxClipboard [cbContent]=\"topTorrentsResult.magnet\" \n                          (click)=\"changeSuccessMessage()\">\n                            <i class=\"fas fa-magnet fa-rotate-180\"></i>\n                            Copy Magnet Link\n                        </a>\n                        </div>\n    \n                        <small class=\"text-muted\">Uploaded: {{topTorrentsResult.time | convertDateTime}}</small>\n    \n                      </div>\n    \n                    </div>\n    \n                  </div>\n                </div>\n              </div>\n    \n            </div>\n          </div>\n    \n    \n    \n        </div>\n      </div>\n    \n    \n    </main>\n    \n    <br><br>\n    \n    <!-- <app-footer></app-footer> -->\n\n  <div *ngIf=\"badRoute\">\n\n      <app-notfound></app-notfound>\n      \n  </div>"

/***/ }),

/***/ "./src/app/components/top40-torrents/top40-torrents.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/top40-torrents/top40-torrents.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9wNDAtdG9ycmVudHMvdG9wNDAtdG9ycmVudHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/top40-torrents/top40-torrents.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/top40-torrents/top40-torrents.component.ts ***!
  \***********************************************************************/
/*! exports provided: Top40TorrentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Top40TorrentsComponent", function() { return Top40TorrentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var Top40TorrentsComponent = /** @class */ (function () {
    function Top40TorrentsComponent(route, _piratebay, spinner, snackBar) {
        this.route = route;
        this._piratebay = _piratebay;
        this.spinner = spinner;
        this.snackBar = snackBar;
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.staticAlertClosed = false;
        this.subscribedParam = "";
        this.badRoute = false;
    }
    Top40TorrentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        // get the current route param by subscribing to it
        this.route.paramMap.subscribe(function (params) {
            // bs4 autohiding alert to show when copy to clipboard btn is clicked
            _this._success.subscribe(function (message) {
                _this.successMessage = message;
                // call the snackbar display function
                _this.openSnackBar(_this.successMessage, "Okay");
            });
            _this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(5000)).subscribe(function () { return _this.successMessage = null; });
            _this.subscribedParam = params.get("torrent");
            _this.showRoute();
        });
        this.checkForBadRoute();
    };
    // display snackbar
    Top40TorrentsComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    Top40TorrentsComponent.prototype.changeSuccessMessage = function () {
        this._success.next('Copied to clipboard successfully.');
    };
    Top40TorrentsComponent.prototype.getTop48Torrents = function (y) {
        var _this = this;
        this.spinner.show();
        this._piratebay.getTop48Torrents(y)
            .subscribe(function (result) {
            _this.top48Torrents = result;
            setTimeout(function () {
                _this.spinner.hide();
            }, 1000);
        });
    };
    Top40TorrentsComponent.prototype.showRoute = function () {
        if (this.subscribedParam == 'all') {
            this.getTop48Torrents(0);
        }
        if (this.subscribedParam == 'audio') {
            this.getTop48Torrents(100);
        }
        if (this.subscribedParam == 'video') {
            this.getTop48Torrents(200);
        }
        if (this.subscribedParam == 'applications') {
            this.getTop48Torrents(300);
        }
        if (this.subscribedParam == 'games') {
            this.getTop48Torrents(400);
        }
        if (this.subscribedParam == '18+') {
            this.getTop48Torrents(500);
        }
        if (this.subscribedParam == 'other') {
            this.getTop48Torrents(600);
        }
    };
    Top40TorrentsComponent.prototype.checkForBadRoute = function () {
        if (this.subscribedParam != 'all' && this.subscribedParam != 'audio' &&
            this.subscribedParam != 'video' && this.subscribedParam != 'applications' &&
            this.subscribedParam != 'games' && this.subscribedParam != '18+' && this.subscribedParam != 'other') {
            this.badRoute = !this.badRoute;
        }
    };
    Top40TorrentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top40-torrents',
            template: __webpack_require__(/*! ./top40-torrents.component.html */ "./src/app/components/top40-torrents/top40-torrents.component.html"),
            styles: [__webpack_require__(/*! ./top40-torrents.component.scss */ "./src/app/components/top40-torrents/top40-torrents.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
    ], Top40TorrentsComponent);
    return Top40TorrentsComponent;
}());



/***/ }),

/***/ "./src/app/pipes/convert-date-time.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/pipes/convert-date-time.pipe.ts ***!
  \*************************************************/
/*! exports provided: ConvertDateTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertDateTimePipe", function() { return ConvertDateTimePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConvertDateTimePipe = /** @class */ (function () {
    function ConvertDateTimePipe() {
    }
    ConvertDateTimePipe.prototype.transform = function (date) {
        if (!date) {
            return null;
        }
        var split = date.split(' ');
        var day = split[0];
        var dayNum = split[1];
        var month = split[2];
        var year = split[3];
        var trimmedDate = day + ' ' + dayNum + ' ' + month + ' ' + year;
        return trimmedDate;
    };
    ConvertDateTimePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'convertDateTime'
        })
    ], ConvertDateTimePipe);
    return ConvertDateTimePipe;
}());



/***/ }),

/***/ "./src/app/pipes/convert.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/convert.pipe.ts ***!
  \***************************************/
/*! exports provided: ConvertPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertPipe", function() { return ConvertPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConvertPipe = /** @class */ (function () {
    function ConvertPipe() {
    }
    ConvertPipe.prototype.transform = function (value) {
        if (!value) {
            return null;
        }
        value *= 1e-9;
        value = value.toFixed(2);
        return value += ' GB';
    };
    ConvertPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'convert'
        })
    ], ConvertPipe);
    return ConvertPipe;
}());



/***/ }),

/***/ "./src/app/pipes/display-font-awesome-icon.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/pipes/display-font-awesome-icon.pipe.ts ***!
  \*********************************************************/
/*! exports provided: DisplayFontAwesomeIconPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayFontAwesomeIconPipe", function() { return DisplayFontAwesomeIconPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DisplayFontAwesomeIconPipe = /** @class */ (function () {
    function DisplayFontAwesomeIconPipe() {
    }
    DisplayFontAwesomeIconPipe.prototype.transform = function (value) {
        switch (value) {
            case 'Audio':
                this.type = "<i class='fas fa-music' style='color: brown;'></i>";
                break;
            case 'Video':
                this.type = "<i class='fas fa-video' style='color: fuchsia;'></i>";
                break;
            case 'Applications':
                this.type = "<i class='fas fa-ghost' style='color: rgb(241, 76, 76);'></i>";
                break;
            case 'Games':
                this.type = "<i class='fas fa-gamepad' style='color: blueviolet;'></i>";
                break;
            case 'Porn':
                this.type = "<i class='fas fa-venus-mars' style='color: palevioletred;'></i>";
                break;
            case 'Other':
                this.type = "<i class='fab fa-medapps' style='color: green;'></i>";
                break;
            default:
                this.type = "category not found";
        }
        return this.type;
    };
    DisplayFontAwesomeIconPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'displayFontAwesomeIcon'
        })
    ], DisplayFontAwesomeIconPipe);
    return DisplayFontAwesomeIconPipe;
}());



/***/ }),

/***/ "./src/app/pipes/stripunsafe.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/stripunsafe.pipe.ts ***!
  \*******************************************/
/*! exports provided: StripunsafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripunsafePipe", function() { return StripunsafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StripunsafePipe = /** @class */ (function () {
    function StripunsafePipe() {
    }
    StripunsafePipe.prototype.transform = function (value) {
        if (!value) {
            return null;
        }
        value = 'magnet:' + value.slice(7);
        return value;
    };
    StripunsafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'stripunsafe'
        })
    ], StripunsafePipe);
    return StripunsafePipe;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(_http) {
        this._http = _http;
        this.url = "https://tpbc.herokuapp.com";
    }
    DataService.prototype.ngOnInit = function () {
        this.getTorrents();
    };
    DataService.prototype.getTorrents = function () {
        var torrentUrl = this.url + "/recent/";
        return this._http.get(torrentUrl);
    };
    DataService.prototype.getTopTorrents = function (x) {
        var torrentUrl = this.url + "/top/" + x + "/";
        return this._http.get(torrentUrl);
    };
    DataService.prototype.getTop48Torrents = function (y) {
        var torrentUrl = this.url + "/top48h/" + y + "/";
        return this._http.get(torrentUrl);
    };
    DataService.prototype.search = function (searchKeyword) {
        var trimmedString = searchKeyword.trim().length;
        if (trimmedString > 0) {
            var torrentUrl = this.url + "/search/" + searchKeyword;
            return this._http.get(torrentUrl);
        }
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
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
    production: false
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

module.exports = __webpack_require__(/*! /Users/fortuneking/Downloads/angular/thepiratebay/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map