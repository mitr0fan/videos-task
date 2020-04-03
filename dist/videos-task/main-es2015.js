(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/app-component/app.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/app-component/app.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-header\n        (signInEvent)=\"showModalLogin()\"\n        (signOutEvent)=\"logout()\"\n        [userName]=\"userName\"\n        [isUserAuthorized]=\"isUserAuthorized\"\n    ></app-header>\n    <div class=\"select-tab\">\n        <span\n            [ngClass]=\"\n                isMoviesSelected\n                    ? 'select-content select-content_selected'\n                    : 'select-content'\n            \"\n            (click)=\"selectMovies()\"\n        >\n            Фильмы\n        </span>\n        <span\n            [ngClass]=\"\n                !isMoviesSelected\n                    ? 'select-content select-content_selected'\n                    : 'select-content'\n            \"\n            (click)=\"selectChannels()\"\n        >\n            Телеканалы\n        </span>\n    </div>\n    <app-movies *ngIf=\"isMoviesSelected\"></app-movies>\n    <app-channels *ngIf=\"!isMoviesSelected\"></app-channels>\n</div>\n<app-modal-login\n    *ngIf=\"showModal\"\n    (exitEvent)=\"hideModalLogin()\"\n    (loginEvent)=\"login($event)\"\n></app-modal-login>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/channel-item/channel-item.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/channel-item/channel-item.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"channel\">\n    <div class=\"channel-logo-container\">\n        <img class=\"channel__logo\" src=\"{{ channel.logoUrl }}\" alt=\"logo\" />\n    </div>\n    <table class=\"channel__schedule\">\n        <tr>\n            <td class=\"channel__name\" colspan=\"2\">{{ channel.name }}</td>\n        </tr>\n        <tr\n            *ngFor=\"let item of channel.schedule; let i = index\"\n            [ngClass]=\"\n                i === 0\n                    ? 'channel__schedule-item channel__schedule-item_first-line'\n                    : 'channel__schedule-item'\n            \"\n        >\n            <td>{{ item.time }}</td>\n            <td>{{ item.description }}</td>\n        </tr>\n    </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/channels/channels.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/channels/channels.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"channels-container\">\n    <app-channel-item\n        *ngFor=\"let channel of channels\"\n        [channel]=\"channel\"\n    ></app-channel-item>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-footer\">\n    <footer class=\"footer\">\n        <img src=\"../../../assets/Vector.png\" />\n        <div class=\"footer__content\">\n            <span\n                >426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла\n                Маркса, 246 (ДК «Металлург»)</span\n            >\n            <span>+7 (3412) 93-88-61, 43-29-29</span>\n            <a href=\"https://htc-cs.ru/\">htc-cs.ru</a>\n        </div>\n    </footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n    <div class=\"header__logo\">\n        <svg class=\"header__sign\">\n            <ellipse class=\"ellipse\" cx=\"18\" cy=\"18.075\" rx=\"18.075\" ry=\"18\" />\n            <polygon class=\"vector\" points=\"8,0 39,18 8,36\" fill=\"#ffffff\" />\n        </svg>\n        <span class=\"header__logo-name\">Видеосервис</span>\n    </div>\n    <div class=\"header__search\">\n        <input class=\"input\" placeholder=\"Поиск...\" />\n        <div class=\"search-button\">Найти</div>\n    </div>\n    <div>\n        <input\n            class=\"header__user-name\"\n            *ngIf=\"isUserAuthorized\"\n            [(ngModel)]=\"user\"\n        />\n        <span\n            class=\"header__button-sign-out\"\n            *ngIf=\"isUserAuthorized\"\n            (click)=\"signOut()\"\n        >\n            Выйти\n        </span>\n    </div>\n    <button\n        class=\"header__button-sign-in\"\n        *ngIf=\"!isUserAuthorized\"\n        (click)=\"signIn()\"\n    >\n        Войти\n    </button>\n    <div class=\"menu\">\n        <input id=\"menu__toggle\" type=\"checkbox\" />\n        <label class=\"menu__btn\" for=\"menu__toggle\">\n            <div></div>\n        </label>\n\n        <div class=\"menu__content\">\n            <div class=\"header__search header__search_menu\">\n                <input class=\"input\" placeholder=\"Поиск...\" />\n                <div class=\"search-button\">Найти</div>\n            </div>\n            <div>\n                <input\n                    class=\"header__user-name header__user-name_menu\"\n                    *ngIf=\"isUserAuthorized\"\n                    [(ngModel)]=\"user\"\n                />\n                <span\n                    class=\"header__button-sign-out header__button-sign-out_menu\"\n                    *ngIf=\"isUserAuthorized\"\n                    (click)=\"signOut()\"\n                >\n                    Выйти\n                </span>\n            </div>\n            <button\n                class=\"header__button-sign-in header__button-sign-in_menu\"\n                *ngIf=\"!isUserAuthorized\"\n                (click)=\"signIn()\"\n            >\n                Войти\n            </button>\n        </div>\n    </div>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/modal-login/modal-login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/modal-login/modal-login.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-container\" (click)=\"exit($event)\">\n    <div class=\"modal\">\n        <div class=\"modal__name\">Вход</div>\n        <input\n            type=\"text\"\n            class=\"modal__input\"\n            placeholder=\"Логин\"\n            [(ngModel)]=\"email\"\n        />\n        <input\n            type=\"password\"\n            class=\"modal__input\"\n            placeholder=\"Пароль\"\n            [(ngModel)]=\"password\"\n        />\n        <div class=\"input-container\">\n            <input id=\"checkbox\" type=\"checkbox\" />\n            <label id=\"check\" for=\"checkbox\"></label>\n            <label id=\"checkbox-name\" for=\"checkbox\">Запомнить</label>\n        </div>\n        <button class=\"modal__sign-in\" (click)=\"login()\">Войти</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/movie-item/movie-item.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/movie-item/movie-item.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"movie\">\n    <div\n        [style.background]=\"'url(' + movie.imageUrl + ')'\"\n        [style.backgroundRepeat]=\"'no-repeat'\"\n        class=\"description-container\"\n    >\n        <div class=\"movie__description\">{{ movie.description }}</div>\n    </div>\n    <div class=\"movie__name\">{{ movie.name }}</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/movies/movies.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/movies/movies.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"description\">\n    <img src=\"../../../assets/fire.png\" style=\"height: 26px;\" />\n    Новинки\n</div>\n<div class=\"movies-container\">\n    <app-movie-item\n        *ngFor=\"let movie of movies\"\n        [movie]=\"movie\"\n    ></app-movie-item>\n</div>\n<div class=\"genres\">Жанры</div>\n<div class=\"genres-container\">\n    <div class=\"genre genre_comedy\">\n        <img src=\"../../../assets/comedy.png\" alt=\"\" />\n        <span>Комедии</span>\n    </div>\n    <div class=\"genre genre_drama\">\n        <img src=\"../../../assets/drama.png\" alt=\"\" />\n        <span>Драмы</span>\n    </div>\n    <div class=\"genre genre_fantasy\">\n        <img src=\"../../../assets/fantasy.png\" alt=\"\" />\n        <span>Фантастика</span>\n    </div>\n    <div class=\"genre genre_horror\">\n        <img src=\"../../../assets/horror.png\" alt=\"\" />\n        <span>Ужасы</span>\n    </div>\n</div>\n"

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_app_component_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/app-component/app.component */ "./src/app/components/app-component/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/movies/movies.component */ "./src/app/components/movies/movies.component.ts");
/* harmony import */ var _components_movie_item_movie_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/movie-item/movie-item.component */ "./src/app/components/movie-item/movie-item.component.ts");
/* harmony import */ var _components_channels_channels_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/channels/channels.component */ "./src/app/components/channels/channels.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_channel_item_channel_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/channel-item/channel-item.component */ "./src/app/components/channel-item/channel-item.component.ts");
/* harmony import */ var _components_modal_login_modal_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/modal-login/modal-login.component */ "./src/app/components/modal-login/modal-login.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _components_app_component_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_6__["MoviesComponent"],
            _components_movie_item_movie_item_component__WEBPACK_IMPORTED_MODULE_7__["MovieItemComponent"],
            _components_channels_channels_component__WEBPACK_IMPORTED_MODULE_8__["ChannelsComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            _components_channel_item_channel_item_component__WEBPACK_IMPORTED_MODULE_10__["ChannelItemComponent"],
            _components_modal_login_modal_login_component__WEBPACK_IMPORTED_MODULE_11__["ModalLoginComponent"],
        ],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        providers: [],
        bootstrap: [_components_app_component_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/app-component/app.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/app-component/app.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n}\n@media (max-width: 1180px) {\n  .container {\n    padding-left: 10px;\n    padding-right: 10px;\n    box-sizing: border-box;\n  }\n}\n.container .select-tab {\n  margin-top: 35px;\n  max-width: 1180px;\n  margin-bottom: 35px;\n}\n.container .select-tab .select-content {\n  display: inline-block;\n  margin-right: 12px;\n  margin-left: 12px;\n  height: 38px;\n  box-sizing: border-box;\n  border-bottom: solid 2px #ffffff;\n  color: #333333;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 28px;\n  line-height: 33px;\n}\n.container .select-tab .select-content:hover {\n  cursor: pointer;\n}\n.container .select-tab .select-content_selected {\n  color: #e5261e;\n  border-bottom: 2px solid #e5261e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHAtY29tcG9uZW50L0M6XFxVc2Vyc1xcQW50b25cXERlc2t0b3BcXEFuZ3VsYXJcXHZpZGVvcy10YXNrL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhcHAtY29tcG9uZW50XFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYXBwLWNvbXBvbmVudC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYXBwLWNvbXBvbmVudC9DOlxcVXNlcnNcXEFudG9uXFxEZXNrdG9wXFxBbmd1bGFyXFx2aWRlb3MtdGFzay9zcmNcXGFwcFxcY29uc3RhbnRzXFxzdHlsZS1jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0FKO0FEQ0k7RUFMSjtJQU1RLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtFQ0VOO0FBQ0Y7QURESTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0dSO0FERlE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDSVo7QURIWTtFQUNJLGVBQUE7QUNLaEI7QURGUTtFQUNJLGNFL0JBO0VGZ0NBLGdDQUFBO0FDSVoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FwcC1jb21wb25lbnQvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vY29uc3RhbnRzL3N0eWxlLWNvbnN0YW50cy5zY3NzJztcbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTgwcHgpIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbiAgICAuc2VsZWN0LXRhYiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgICAgIG1heC13aWR0aDogMTE4MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICAgICAgICAuc2VsZWN0LWNvbnRlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM4cHg7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNmZmZmZmY7XG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzNweDtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc2VsZWN0LWNvbnRlbnRfc2VsZWN0ZWQge1xuICAgICAgICAgICAgY29sb3I6ICRyZWQtY29sb3I7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHJlZC1jb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTgwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxufVxuLmNvbnRhaW5lciAuc2VsZWN0LXRhYiB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIG1heC13aWR0aDogMTE4MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuLmNvbnRhaW5lciAuc2VsZWN0LXRhYiAuc2VsZWN0LWNvbnRlbnQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIGhlaWdodDogMzhweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNmZmZmZmY7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XG59XG4uY29udGFpbmVyIC5zZWxlY3QtdGFiIC5zZWxlY3QtY29udGVudDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgLnNlbGVjdC10YWIgLnNlbGVjdC1jb250ZW50X3NlbGVjdGVkIHtcbiAgY29sb3I6ICNlNTI2MWU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTUyNjFlO1xufSIsIiRiZy1jb2xvcjogI2ZmZmZmZjtcbiRyZWQtY29sb3I6ICNlNTI2MWU7XG4kZ3JheS1jb2xvcjogI2YyZjJmMjtcblxuQG1peGluIGZvbnQtc3R5bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbn1cblxuQG1peGluIGJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwYWRkaW5nOiB7XG4gICAgICAgIGxlZnQ6IDMycHg7XG4gICAgICAgIHJpZ2h0OiAzMnB4O1xuICAgIH1cbiAgICBiYWNrZ3JvdW5kOiAkcmVkLWNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBAaW5jbHVkZSBmb250LXN0eWxlKCk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2NjMjIxYjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuQG1peGluIGlucHV0IHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzMzMzM7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBAaW5jbHVkZSBmb250LXN0eWxlKCk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/app-component/app.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/app-component/app.component.ts ***!
  \***********************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");



let AppComponent = class AppComponent {
    constructor(localStorage) {
        this.localStorage = localStorage;
        this.isMoviesSelected = true;
        this.showModal = false;
        this.isUserAuthorized = false;
    }
    ngOnInit() {
        if (this.localStorage.getUserFromLocalStorage()) {
            this.userName = this.localStorage.getUserFromLocalStorage();
            this.isUserAuthorized = true;
        }
    }
    showModalLogin() {
        this.showModal = true;
    }
    login(user) {
        this.userName = user;
        this.isUserAuthorized = true;
        this.localStorage.addUserToLocalStorage(user);
        this.hideModalLogin();
    }
    logout() {
        this.isUserAuthorized = false;
        this.userName = '';
        this.localStorage.removeUserFromLocalStorage();
    }
    hideModalLogin() {
        this.showModal = false;
    }
    selectMovies() {
        this.isMoviesSelected = true;
    }
    selectChannels() {
        this.isMoviesSelected = false;
    }
};
AppComponent.ctorParameters = () => [
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/app-component/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/components/app-component/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/components/channel-item/channel-item.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/channel-item/channel-item.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".channel {\n  display: flex;\n  flex-direction: row;\n  background: #f2f2f2;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  min-height: 162px;\n  align-items: center;\n}\n.channel:hover {\n  cursor: pointer;\n}\n@media (max-width: 600px) {\n  .channel {\n    padding: 20px;\n    flex-direction: column;\n  }\n}\n.channel .channel-logo-container {\n  display: flex;\n  width: 100%;\n  max-width: 420px;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n.channel .channel__schedule {\n  border-spacing: 16px 12px;\n}\n.channel .channel__schedule .channel__name {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  color: #333333;\n}\n.channel .channel__schedule .channel__schedule-item {\n  font-size: 16px;\n  line-height: 19px;\n  color: #333333;\n}\n.channel .channel__schedule .channel__schedule-item_first-line {\n  color: #e5261e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFubmVsLWl0ZW0vQzpcXFVzZXJzXFxBbnRvblxcRGVza3RvcFxcQW5ndWxhclxcdmlkZW9zLXRhc2svc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNoYW5uZWwtaXRlbVxcY2hhbm5lbC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NoYW5uZWwtaXRlbS9DOlxcVXNlcnNcXEFudG9uXFxEZXNrdG9wXFxBbmd1bGFyXFx2aWRlb3MtdGFzay9zcmNcXGFwcFxcY29uc3RhbnRzXFxzdHlsZS1jb25zdGFudHMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jaGFubmVsLWl0ZW0vY2hhbm5lbC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJDSFM7RURJVCxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBRURKO0FGRUk7RUFDSSxlQUFBO0FFQVI7QUZFSTtFQVhKO0lBWVEsYUFBQTtJQUNBLHNCQUFBO0VFQ047QUFDRjtBRkFJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FFRVI7QUZBSTtFQUNJLHlCQUFBO0FFRVI7QUZEUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBRUdaO0FGRFE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FFR1o7QUZEUTtFQUNJLGNDdENBO0FDeUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGFubmVsLWl0ZW0vY2hhbm5lbC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vY29uc3RhbnRzL3N0eWxlLWNvbnN0YW50cy5zY3NzJztcblxuLmNoYW5uZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBiYWNrZ3JvdW5kOiAkZ3JheS1jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBtaW4taGVpZ2h0OiAxNjJweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAuY2hhbm5lbC1sb2dvLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDQyMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAuY2hhbm5lbF9fc2NoZWR1bGUge1xuICAgICAgICBib3JkZXItc3BhY2luZzogMTZweCAxMnB4O1xuICAgICAgICAuY2hhbm5lbF9fbmFtZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgfVxuICAgICAgICAuY2hhbm5lbF9fc2NoZWR1bGUtaXRlbSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFubmVsX19zY2hlZHVsZS1pdGVtX2ZpcnN0LWxpbmUge1xuICAgICAgICAgICAgY29sb3I6ICRyZWQtY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIkYmctY29sb3I6ICNmZmZmZmY7XG4kcmVkLWNvbG9yOiAjZTUyNjFlO1xuJGdyYXktY29sb3I6ICNmMmYyZjI7XG5cbkBtaXhpbiBmb250LXN0eWxlIHtcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG59XG5cbkBtaXhpbiBidXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZzoge1xuICAgICAgICBsZWZ0OiAzMnB4O1xuICAgICAgICByaWdodDogMzJweDtcbiAgICB9XG4gICAgYmFja2dyb3VuZDogJHJlZC1jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgQGluY2x1ZGUgZm9udC1zdHlsZSgpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNjYzIyMWI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbkBtaXhpbiBpbnB1dCB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzMzMzO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgQGluY2x1ZGUgZm9udC1zdHlsZSgpO1xufVxuIiwiLmNoYW5uZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIG1pbi1oZWlnaHQ6IDE2MnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNoYW5uZWw6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNoYW5uZWwge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLmNoYW5uZWwgLmNoYW5uZWwtbG9nby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jaGFubmVsIC5jaGFubmVsX19zY2hlZHVsZSB7XG4gIGJvcmRlci1zcGFjaW5nOiAxNnB4IDEycHg7XG59XG4uY2hhbm5lbCAuY2hhbm5lbF9fc2NoZWR1bGUgLmNoYW5uZWxfX25hbWUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogIzMzMzMzMztcbn1cbi5jaGFubmVsIC5jaGFubmVsX19zY2hlZHVsZSAuY2hhbm5lbF9fc2NoZWR1bGUtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLmNoYW5uZWwgLmNoYW5uZWxfX3NjaGVkdWxlIC5jaGFubmVsX19zY2hlZHVsZS1pdGVtX2ZpcnN0LWxpbmUge1xuICBjb2xvcjogI2U1MjYxZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/channel-item/channel-item.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/channel-item/channel-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChannelItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelItemComponent", function() { return ChannelItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChannelItemComponent = class ChannelItemComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ChannelItemComponent.prototype, "channel", void 0);
ChannelItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-channel-item',
        template: __webpack_require__(/*! raw-loader!./channel-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/channel-item/channel-item.component.html"),
        styles: [__webpack_require__(/*! ./channel-item.component.scss */ "./src/app/components/channel-item/channel-item.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ChannelItemComponent);



/***/ }),

/***/ "./src/app/components/channels/channels.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/channels/channels.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  max-width: 1180px;\n}\n\n.channels-container {\n  margin-bottom: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFubmVscy9DOlxcVXNlcnNcXEFudG9uXFxEZXNrdG9wXFxBbmd1bGFyXFx2aWRlb3MtdGFzay9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2hhbm5lbHNcXGNoYW5uZWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NoYW5uZWxzL2NoYW5uZWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGFubmVscy9jaGFubmVscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDExODBweDtcbn1cbi5jaGFubmVscy1jb250YWluZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDExODBweDtcbn1cblxuLmNoYW5uZWxzLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/channels/channels.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/channels/channels.component.ts ***!
  \***********************************************************/
/*! exports provided: ChannelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelsComponent", function() { return ChannelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_get_movies_channels_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/get-movies-channels.service */ "./src/app/services/get-movies-channels.service.ts");



let ChannelsComponent = class ChannelsComponent {
    constructor(channelsService) {
        this.channelsService = channelsService;
    }
    ngOnInit() {
        this.channels = this.channelsService.getChannels();
    }
};
ChannelsComponent.ctorParameters = () => [
    { type: src_app_services_get_movies_channels_service__WEBPACK_IMPORTED_MODULE_2__["GetMoviesChannelsService"] }
];
ChannelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-channels',
        template: __webpack_require__(/*! raw-loader!./channels.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/channels/channels.component.html"),
        styles: [__webpack_require__(/*! ./channels.component.scss */ "./src/app/components/channels/channels.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_get_movies_channels_service__WEBPACK_IMPORTED_MODULE_2__["GetMoviesChannelsService"]])
], ChannelsComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-footer {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background: #f2f2f2;\n}\n.container-footer .footer {\n  width: 100%;\n  max-width: 1180px;\n  height: 120px;\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 1180px) {\n  .container-footer .footer {\n    padding-left: 10px;\n    padding-right: 10px;\n    box-sizing: border-box;\n  }\n}\n.container-footer .footer .footer__content {\n  margin-left: 40px;\n  height: 70px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxBbnRvblxcRGVza3RvcFxcQW5ndWxhclxcdmlkZW9zLXRhc2svc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9DOlxcVXNlcnNcXEFudG9uXFxEZXNrdG9wXFxBbmd1bGFyXFx2aWRlb3MtdGFzay9zcmNcXGFwcFxcY29uc3RhbnRzXFxzdHlsZS1jb25zdGFudHMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQ0pTO0FDR2I7QUZFSTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUVBUjtBRkNRO0VBTko7SUFPUSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7RUVFVjtBQUNGO0FGRFE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FFR1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9jb25zdGFudHMvc3R5bGUtY29uc3RhbnRzLnNjc3MnO1xuXG4uY29udGFpbmVyLWZvb3RlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAkZ3JheS1jb2xvcjtcbiAgICAuZm9vdGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTE4MHB4O1xuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE4MHB4KSB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVyX19jb250ZW50IHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIiRiZy1jb2xvcjogI2ZmZmZmZjtcbiRyZWQtY29sb3I6ICNlNTI2MWU7XG4kZ3JheS1jb2xvcjogI2YyZjJmMjtcblxuQG1peGluIGZvbnQtc3R5bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbn1cblxuQG1peGluIGJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwYWRkaW5nOiB7XG4gICAgICAgIGxlZnQ6IDMycHg7XG4gICAgICAgIHJpZ2h0OiAzMnB4O1xuICAgIH1cbiAgICBiYWNrZ3JvdW5kOiAkcmVkLWNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBAaW5jbHVkZSBmb250LXN0eWxlKCk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2NjMjIxYjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuQG1peGluIGlucHV0IHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzMzMzM7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBAaW5jbHVkZSBmb250LXN0eWxlKCk7XG59XG4iLCIuY29udGFpbmVyLWZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbn1cbi5jb250YWluZXItZm9vdGVyIC5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMTgwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE4MHB4KSB7XG4gIC5jb250YWluZXItZm9vdGVyIC5mb290ZXIge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbn1cbi5jb250YWluZXItZm9vdGVyIC5mb290ZXIgLmZvb3Rlcl9fY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogIzMzMzMzMztcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() { }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  max-width: 1180px;\n}\n\n.header {\n  margin-top: 30px;\n  height: 40px;\n  width: 100%;\n  max-width: 1180px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n@media (max-width: 1180px) {\n  .header {\n    padding-left: 10px;\n    padding-right: 10px;\n    box-sizing: border-box;\n  }\n}\n\n.header .header__logo {\n  display: flex;\n  align-items: center;\n}\n\n.header .header__logo .header__sign {\n  height: 36px;\n  width: 36.12px;\n}\n\n.header .header__logo .header__sign .ellipse {\n  fill: #e5261e;\n}\n\n.header .header__logo .header__logo-name {\n  margin-left: 11px;\n  font-family: Rubik;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  color: #333333;\n}\n\n.header .header__search {\n  width: 402px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.header .header__search .input {\n  width: 320px;\n  height: 25px;\n  box-sizing: border-box;\n  border: none;\n  border-bottom: 1px solid #333333;\n  outline: none;\n  font-family: \"Rubik\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n}\n\n.header .header__search .search-button {\n  font-family: \"Rubik\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  font-weight: 500;\n  color: #e5261e;\n  text-align: center;\n}\n\n.header .header__search .search-button:hover {\n  cursor: pointer;\n}\n\n@media (max-width: 870px) {\n  .header .header__search {\n    display: none;\n  }\n}\n\n.header .header__search_menu {\n  display: block;\n  width: 200px;\n}\n\n.header .header__search_menu input {\n  max-width: 200px;\n}\n\n.header .header__button-sign-out {\n  font-family: \"Rubik\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  font-weight: 500;\n  color: #e5261e;\n}\n\n.header .header__button-sign-out:hover {\n  cursor: pointer;\n}\n\n@media (max-width: 870px) {\n  .header .header__button-sign-out {\n    display: none;\n  }\n}\n\n.header .header__button-sign-out_menu {\n  display: block;\n  text-align: center;\n}\n\n.header .header__button-sign-in {\n  border: none;\n  outline: none;\n  padding: 10px;\n  padding-left: 32px;\n  padding-right: 32px;\n  background: #e5261e;\n  border-radius: 4px;\n  color: #ffffff;\n  font-family: \"Rubik\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  font-weight: 500;\n}\n\n.header .header__button-sign-in:hover {\n  background: #cc221b;\n  cursor: pointer;\n}\n\n@media (max-width: 870px) {\n  .header .header__button-sign-in {\n    display: none;\n  }\n}\n\n.header .header__button-sign-in_menu {\n  display: block;\n}\n\n.header .header__user-name {\n  height: 25px;\n  box-sizing: border-box;\n  border: none;\n  border-bottom: 1px solid #333333;\n  outline: none;\n  font-family: \"Rubik\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  text-align: end;\n  font-weight: 500;\n  border-bottom: 1px solid #ffffff;\n  margin-right: 15px;\n}\n\n@media (max-width: 870px) {\n  .header .header__user-name {\n    display: none;\n  }\n}\n\n.header .header__user-name_menu {\n  display: block;\n  text-align: center;\n}\n\n.header .header__user-name:focus {\n  height: 25px;\n  box-sizing: border-box;\n  border: none;\n  border-bottom: 1px solid #333333;\n  outline: none;\n  font-family: \"Rubik\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  font-weight: 500;\n  display: block;\n}\n\n.header .menu {\n  display: none;\n}\n\n@media (max-width: 870px) {\n  .header .menu {\n    display: block;\n  }\n}\n\n.header .menu #menu__toggle {\n  display: none;\n}\n\n.header .menu .menu__btn {\n  display: block;\n  width: 26px;\n  height: 20px;\n  padding-top: 15px;\n  margin-top: -10px;\n  cursor: pointer;\n  z-index: 2;\n  position: fixed;\n  top: 35px;\n  right: 0;\n}\n\n.header .menu .menu__btn > div,\n.header .menu .menu__btn > div::before,\n.header .menu .menu__btn > div::after {\n  display: block;\n  position: absolute;\n  width: 20px;\n  height: 2px;\n  background-color: #616161;\n  z-index: 1;\n}\n\n.header .menu .menu__btn > div::before {\n  content: \"\";\n  top: -8px;\n}\n\n.header .menu .menu__btn > div::after {\n  content: \"\";\n  top: 8px;\n}\n\n.header .menu .menu__content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: fixed;\n  visibility: hidden;\n  top: 0;\n  left: 100%;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  background: #ffffff;\n  padding-top: 50px;\n}\n\n.header .menu .menu__content * {\n  margin-bottom: 20px;\n}\n\n.header .menu #menu__toggle:checked ~ .menu__btn > div {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n.header .menu #menu__toggle:checked ~ .menu__btn > div::before {\n  top: 0;\n  -webkit-transform: rotate(0);\n          transform: rotate(0);\n}\n\n.header .menu #menu__toggle:checked ~ .menu__btn > div::after {\n  top: 0;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.header .menu #menu__toggle:checked ~ .menu__content {\n  visibility: visible;\n  left: 0;\n  z-index: 1;\n}\n\n.header .menu .menu__btn > div,\n.header .menu .menu__btn > div::before,\n.header .menu .menu__btn > div::after {\n  transition-duration: 0.25s;\n}\n\n.header .menu .menu__content {\n  transition-duration: 0.25s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxBbnRvblxcRGVza3RvcFxcQW5ndWxhclxcdmlkZW9zLXRhc2svc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcQW50b25cXERlc2t0b3BcXEFuZ3VsYXJcXHZpZGVvcy10YXNrL3NyY1xcYXBwXFxjb25zdGFudHNcXHN0eWxlLWNvbnN0YW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDVko7O0FEWUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ1RKOztBRFVJO0VBUko7SUFTUSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7RUNQTjtBQUNGOztBRFFJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDTlI7O0FET1E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQ0xaOztBRE1ZO0VBQ0ksYUVsQ0o7QUQ4Qlo7O0FET1E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNMWjs7QURRSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNOUjs7QURPUTtFQUNJLFlBQUE7RUVyQlIsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQS9CQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURpREo7O0FERlE7RUVuREosb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VGTEEsZ0JBQUE7RUFDQSxjQUFBO0VBcURRLGtCQUFBO0FDVVo7O0FEOURJO0VBQ0ksZUFBQTtBQ2dFUjs7QURYUTtFQVpKO0lBYVEsYUFBQTtFQ2NWO0FBQ0Y7O0FEWkk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQ2NSOztBRGJRO0VBQ0ksZ0JBQUE7QUNlWjs7QURaSTtFRWxFQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUZMQSxnQkFBQTtFQUNBLGNBQUE7QUN1Rko7O0FEdEZJO0VBQ0ksZUFBQTtBQ3dGUjs7QUR0QlE7RUFGSjtJQUdRLGFBQUE7RUN5QlY7QUFDRjs7QUR2Qkk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUN5QlI7O0FEdkJJO0VFcEVBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUVJLGtCQUFBO0VBQ0EsbUJBQUE7RUFFSixtQkFuQlE7RUFvQlIsa0JBQUE7RUFDQSxjQUFBO0VBakJBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQWVBLGdCQUFBO0FEZ0dKOztBQy9GSTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBRGlHUjs7QUR6Q1E7RUFGSjtJQUdRLGFBQUE7RUM0Q1Y7QUFDRjs7QUQxQ0k7RUFDSSxjQUFBO0FDNENSOztBRDFDSTtFRTFEQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBL0JBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFRm1GSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDcURSOztBRHBEUTtFQU5KO0lBT1EsYUFBQTtFQ3VEVjtBQUNGOztBRHJESTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ3VEUjs7QURyREk7RUV4RUEsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQS9CQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUZpR0ksZ0JBQUE7RUFDQSxjQUFBO0FDZ0VSOztBRDdESTtFQUNJLGFBQUE7QUMrRFI7O0FEOURRO0VBRko7SUFHUSxjQUFBO0VDaUVWO0FBQ0Y7O0FEaEVRO0VBQ0ksYUFBQTtBQ2tFWjs7QURoRVE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNrRVo7O0FEaEVROzs7RUFHSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQ2tFWjs7QURoRVE7RUFDSSxXQUFBO0VBQ0EsU0FBQTtBQ2tFWjs7QURoRVE7RUFDQSxXQUFBO0VBQ0ksUUFBQTtBQ2tFWjs7QURoRVE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsbUJFL0pEO0VGZ0tDLGlCQUFBO0FDa0VaOztBRGpFWTtFQUNJLG1CQUFBO0FDbUVoQjs7QURoRVE7RUFDSSxnQ0FBQTtVQUFBLHdCQUFBO0FDa0VaOztBRGhFUTtFQUNJLE1BQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0FDa0VaOztBRGhFUTtFQUNJLE1BQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FDa0VaOztBRGhFUTtFQUNJLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUNrRVo7O0FEaEVROzs7RUFHSSwwQkFBQTtBQ2tFWjs7QURoRVE7RUFDSSwwQkFBQTtBQ2tFWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2NvbnN0YW50cy9zdHlsZS1jb25zdGFudHMuc2Nzcyc7XG5cbkBtaXhpbiBhbm90aGVyLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgZm9udC1zdHlsZSgpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNlNTI2MWU7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbjpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDExODBweDtcbn1cbi5oZWFkZXIge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTE4MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExODBweCkge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuICAgIC5oZWFkZXJfX2xvZ28ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAuaGVhZGVyX19zaWduIHtcbiAgICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgICAgIHdpZHRoOiAzNi4xMnB4O1xuICAgICAgICAgICAgLmVsbGlwc2Uge1xuICAgICAgICAgICAgICAgIGZpbGw6ICRyZWQtY29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlcl9fbG9nby1uYW1lIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMXB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJ1YmlrO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmhlYWRlcl9fc2VhcmNoIHtcbiAgICAgICAgd2lkdGg6IDQwMnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIC5pbnB1dCB7XG4gICAgICAgICAgICB3aWR0aDogMzIwcHg7XG4gICAgICAgICAgICBAaW5jbHVkZSBpbnB1dCgpO1xuICAgICAgICB9XG4gICAgICAgIC5zZWFyY2gtYnV0dG9uIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFub3RoZXItYnV0dG9uKCk7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg3MHB4KSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5oZWFkZXJfX3NlYXJjaF9tZW51IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaGVhZGVyX19idXR0b24tc2lnbi1vdXQge1xuICAgICAgICBAaW5jbHVkZSBhbm90aGVyLWJ1dHRvbigpO1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODcwcHgpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmhlYWRlcl9fYnV0dG9uLXNpZ24tb3V0X21lbnUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuaGVhZGVyX19idXR0b24tc2lnbi1pbiB7XG4gICAgICAgIEBpbmNsdWRlIGJ1dHRvbigpO1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODcwcHgpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmhlYWRlcl9fYnV0dG9uLXNpZ24taW5fbWVudSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuaGVhZGVyX191c2VyLW5hbWUge1xuICAgICAgICBAaW5jbHVkZSBpbnB1dCgpO1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NzBweCkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaGVhZGVyX191c2VyLW5hbWVfbWVudSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5oZWFkZXJfX3VzZXItbmFtZTpmb2N1cyB7XG4gICAgICAgIEBpbmNsdWRlIGlucHV0KCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5tZW51IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg3MHB4KSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAjbWVudV9fdG9nZ2xlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLm1lbnVfX2J0biB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB0b3A6IDM1cHg7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgICAubWVudV9fYnRuID4gZGl2LFxuICAgICAgICAubWVudV9fYnRuID4gZGl2OjpiZWZvcmUsXG4gICAgICAgIC5tZW51X19idG4gPiBkaXY6OmFmdGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTYxNjE7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5tZW51X19idG4gPiBkaXY6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHRvcDogLThweDtcbiAgICAgICAgfVxuICAgICAgICAubWVudV9fYnRuID4gZGl2OjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLm1lbnVfX2NvbnRlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgICAgICAqIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICNtZW51X190b2dnbGU6Y2hlY2tlZCB+IC5tZW51X19idG4gPiBkaXYge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICB9XG4gICAgICAgICNtZW51X190b2dnbGU6Y2hlY2tlZCB+IC5tZW51X19idG4gPiBkaXY6OmJlZm9yZSB7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICAgICAgfVxuICAgICAgICAjbWVudV9fdG9nZ2xlOmNoZWNrZWQgfiAubWVudV9fYnRuID4gZGl2OjphZnRlciB7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgI21lbnVfX3RvZ2dsZTpjaGVja2VkIH4gLm1lbnVfX2NvbnRlbnQge1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5tZW51X19idG4gPiBkaXYsXG4gICAgICAgIC5tZW51X19idG4gPiBkaXY6OmJlZm9yZSxcbiAgICAgICAgLm1lbnVfX2J0biA+IGRpdjo6YWZ0ZXIge1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjI1cztcbiAgICAgICAgfVxuICAgICAgICAubWVudV9fY29udGVudCB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMjVzO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMTgwcHg7XG59XG5cbi5oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDExODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExODBweCkge1xuICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG59XG4uaGVhZGVyIC5oZWFkZXJfX2xvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlciAuaGVhZGVyX19sb2dvIC5oZWFkZXJfX3NpZ24ge1xuICBoZWlnaHQ6IDM2cHg7XG4gIHdpZHRoOiAzNi4xMnB4O1xufVxuLmhlYWRlciAuaGVhZGVyX19sb2dvIC5oZWFkZXJfX3NpZ24gLmVsbGlwc2Uge1xuICBmaWxsOiAjZTUyNjFlO1xufVxuLmhlYWRlciAuaGVhZGVyX19sb2dvIC5oZWFkZXJfX2xvZ28tbmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMXB4O1xuICBmb250LWZhbWlseTogUnViaWs7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4uaGVhZGVyIC5oZWFkZXJfX3NlYXJjaCB7XG4gIHdpZHRoOiA0MDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmhlYWRlciAuaGVhZGVyX19zZWFyY2ggLmlucHV0IHtcbiAgd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzMzMzM7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbn1cbi5oZWFkZXIgLmhlYWRlcl9fc2VhcmNoIC5zZWFyY2gtYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2U1MjYxZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhlYWRlciAuaGVhZGVyX19zZWFyY2ggLnNlYXJjaC1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODcwcHgpIHtcbiAgLmhlYWRlciAuaGVhZGVyX19zZWFyY2gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5oZWFkZXIgLmhlYWRlcl9fc2VhcmNoX21lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIwMHB4O1xufVxuLmhlYWRlciAuaGVhZGVyX19zZWFyY2hfbWVudSBpbnB1dCB7XG4gIG1heC13aWR0aDogMjAwcHg7XG59XG4uaGVhZGVyIC5oZWFkZXJfX2J1dHRvbi1zaWduLW91dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNlNTI2MWU7XG59XG4uaGVhZGVyIC5oZWFkZXJfX2J1dHRvbi1zaWduLW91dDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4NzBweCkge1xuICAuaGVhZGVyIC5oZWFkZXJfX2J1dHRvbi1zaWduLW91dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmhlYWRlciAuaGVhZGVyX19idXR0b24tc2lnbi1vdXRfbWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaGVhZGVyIC5oZWFkZXJfX2J1dHRvbi1zaWduLWluIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7XG4gIGJhY2tncm91bmQ6ICNlNTI2MWU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5oZWFkZXIgLmhlYWRlcl9fYnV0dG9uLXNpZ24taW46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjY2MyMjFiO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODcwcHgpIHtcbiAgLmhlYWRlciAuaGVhZGVyX19idXR0b24tc2lnbi1pbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmhlYWRlciAuaGVhZGVyX19idXR0b24tc2lnbi1pbl9tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaGVhZGVyIC5oZWFkZXJfX3VzZXItbmFtZSB7XG4gIGhlaWdodDogMjVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMzMzMztcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODcwcHgpIHtcbiAgLmhlYWRlciAuaGVhZGVyX191c2VyLW5hbWUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5oZWFkZXIgLmhlYWRlcl9fdXNlci1uYW1lX21lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhlYWRlciAuaGVhZGVyX191c2VyLW5hbWU6Zm9jdXMge1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzMzMzM7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaGVhZGVyIC5tZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4NzBweCkge1xuICAuaGVhZGVyIC5tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLmhlYWRlciAubWVudSAjbWVudV9fdG9nZ2xlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oZWFkZXIgLm1lbnUgLm1lbnVfX2J0biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDM1cHg7XG4gIHJpZ2h0OiAwO1xufVxuLmhlYWRlciAubWVudSAubWVudV9fYnRuID4gZGl2LFxuLmhlYWRlciAubWVudSAubWVudV9fYnRuID4gZGl2OjpiZWZvcmUsXG4uaGVhZGVyIC5tZW51IC5tZW51X19idG4gPiBkaXY6OmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE2MTYxO1xuICB6LWluZGV4OiAxO1xufVxuLmhlYWRlciAubWVudSAubWVudV9fYnRuID4gZGl2OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB0b3A6IC04cHg7XG59XG4uaGVhZGVyIC5tZW51IC5tZW51X19idG4gPiBkaXY6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgdG9wOiA4cHg7XG59XG4uaGVhZGVyIC5tZW51IC5tZW51X19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRvcDogMDtcbiAgbGVmdDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cbi5oZWFkZXIgLm1lbnUgLm1lbnVfX2NvbnRlbnQgKiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uaGVhZGVyIC5tZW51ICNtZW51X190b2dnbGU6Y2hlY2tlZCB+IC5tZW51X19idG4gPiBkaXYge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uaGVhZGVyIC5tZW51ICNtZW51X190b2dnbGU6Y2hlY2tlZCB+IC5tZW51X19idG4gPiBkaXY6OmJlZm9yZSB7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG59XG4uaGVhZGVyIC5tZW51ICNtZW51X190b2dnbGU6Y2hlY2tlZCB+IC5tZW51X19idG4gPiBkaXY6OmFmdGVyIHtcbiAgdG9wOiAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4uaGVhZGVyIC5tZW51ICNtZW51X190b2dnbGU6Y2hlY2tlZCB+IC5tZW51X19jb250ZW50IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbn1cbi5oZWFkZXIgLm1lbnUgLm1lbnVfX2J0biA+IGRpdixcbi5oZWFkZXIgLm1lbnUgLm1lbnVfX2J0biA+IGRpdjo6YmVmb3JlLFxuLmhlYWRlciAubWVudSAubWVudV9fYnRuID4gZGl2OjphZnRlciB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xufVxuLmhlYWRlciAubWVudSAubWVudV9fY29udGVudCB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xufSIsIiRiZy1jb2xvcjogI2ZmZmZmZjtcbiRyZWQtY29sb3I6ICNlNTI2MWU7XG4kZ3JheS1jb2xvcjogI2YyZjJmMjtcblxuQG1peGluIGZvbnQtc3R5bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbn1cblxuQG1peGluIGJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwYWRkaW5nOiB7XG4gICAgICAgIGxlZnQ6IDMycHg7XG4gICAgICAgIHJpZ2h0OiAzMnB4O1xuICAgIH1cbiAgICBiYWNrZ3JvdW5kOiAkcmVkLWNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBAaW5jbHVkZSBmb250LXN0eWxlKCk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2NjMjIxYjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuQG1peGluIGlucHV0IHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzMzMzM7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBAaW5jbHVkZSBmb250LXN0eWxlKCk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants/constants */ "./src/app/constants/constants.ts");




let HeaderComponent = class HeaderComponent {
    constructor(localStorage) {
        this.localStorage = localStorage;
        this.signInEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.signOutEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get user() {
        return this.userName;
    }
    set user(value) {
        this.userName = value;
        this.localStorage.addUserToLocalStorage(value);
        src_app_constants_constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].USERS[0].name = value;
        const name = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].USERS[0].name;
    }
    signIn() {
        this.signInEvent.emit();
    }
    signOut() {
        this.signOutEvent.emit();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], HeaderComponent.prototype, "isUserAuthorized", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], HeaderComponent.prototype, "userName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HeaderComponent.prototype, "signInEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HeaderComponent.prototype, "signOutEvent", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/modal-login/modal-login.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/modal-login/modal-login.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.modal-container {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #333333b4;\n  top: 0;\n  z-index: 5;\n}\n.modal-container .modal {\n  height: 394px;\n  width: 304px;\n  border-radius: 8px;\n  display: flex;\n  background: #ffffff;\n  flex-direction: column;\n  align-items: center;\n  font-size: 16px;\n  line-height: 19px;\n  color: #333333;\n  padding: 36px;\n  box-sizing: border-box;\n  justify-content: space-between;\n  z-index: 10;\n}\n.modal-container .modal .modal__name {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 28px;\n  line-height: 33px;\n  text-align: right;\n  color: #333333;\n}\n.modal-container .modal .input-container {\n  margin-bottom: 80px;\n  align-self: baseline;\n}\n.modal-container .modal .input-container #checkbox-name {\n  position: relative;\n  top: -16px;\n  left: 25px;\n}\n.modal-container .modal .input-container #checkbox-name:hover {\n  cursor: pointer;\n}\n.modal-container .modal .input-container #checkbox {\n  display: none;\n}\n.modal-container .modal .input-container #checkbox + #check {\n  display: block;\n  width: 16px;\n  height: 16px;\n  background: #ffffff;\n  border: 1px solid #333333;\n  box-sizing: border-box;\n  border-radius: 4px;\n  text-align: center;\n}\n.modal-container .modal .input-container #checkbox + #check:hover {\n  cursor: pointer;\n}\n.modal-container .modal .input-container #checkbox:checked + #check:before {\n  font-size: 15px;\n  content: \"✔\";\n  color: #e5261e;\n  position: relative;\n  bottom: 2px;\n}\n.modal-container .modal .modal__input {\n  width: 232px;\n  height: 25px;\n  box-sizing: border-box;\n  border: none;\n  border-bottom: 1px solid #333333;\n  outline: none;\n  font-family: \"Rubik\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n}\n.modal-container .modal .modal__sign-in {\n  border: none;\n  outline: none;\n  padding: 10px;\n  padding-left: 32px;\n  padding-right: 32px;\n  background: #e5261e;\n  border-radius: 4px;\n  color: #ffffff;\n  font-family: \"Rubik\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  font-weight: 500;\n}\n.modal-container .modal .modal__sign-in:hover {\n  background: #cc221b;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC1sb2dpbi9tb2RhbC1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC1sb2dpbi9DOlxcVXNlcnNcXEFudG9uXFxEZXNrdG9wXFxBbmd1bGFyXFx2aWRlb3MtdGFzay9zcmNcXGFwcFxcY29tcG9uZW50c1xcbW9kYWwtbG9naW5cXG1vZGFsLWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21vZGFsLWxvZ2luL0M6XFxVc2Vyc1xcQW50b25cXERlc2t0b3BcXEFuZ3VsYXJcXHZpZGVvcy10YXNrL3NyY1xcYXBwXFxjb25zdGFudHNcXHN0eWxlLWNvbnN0YW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0VoQjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBREFKO0FDQ0k7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQ2pCRztFRGtCSCxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBRENSO0FDQVE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FERVo7QUNBUTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7QURFWjtBQ0RZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBREdoQjtBQ0ZnQjtFQUNJLGVBQUE7QURJcEI7QUNEWTtFQUNJLGFBQUE7QURHaEI7QUNEWTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QURHaEI7QUNGZ0I7RUFDSSxlQUFBO0FESXBCO0FDRFk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNDaEVKO0VEaUVJLGtCQUFBO0VBQ0EsV0FBQTtBREdoQjtBQ0FRO0VBQ0ksWUFBQTtFQ3ZDUixZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBL0JBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRjBFSjtBQ1RRO0VDN0RKLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUVJLGtCQUFBO0VBQ0EsbUJBQUE7RUFFSixtQkFuQlE7RUFvQlIsa0JBQUE7RUFDQSxjQUFBO0VBakJBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQWVBLGdCQUFBO0FGMkVKO0FFMUVJO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FGNEVSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC1sb2dpbi9tb2RhbC1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5tb2RhbC1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMzMzMzMzYjQ7XG4gIHRvcDogMDtcbiAgei1pbmRleDogNTtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsIHtcbiAgaGVpZ2h0OiAzOTRweDtcbiAgd2lkdGg6IDMwNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBwYWRkaW5nOiAzNnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHotaW5kZXg6IDEwO1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwgLm1vZGFsX19uYW1lIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbCAuaW5wdXQtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbCAuaW5wdXQtY29udGFpbmVyICNjaGVja2JveC1uYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xNnB4O1xuICBsZWZ0OiAyNXB4O1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwgLmlucHV0LWNvbnRhaW5lciAjY2hlY2tib3gtbmFtZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsIC5pbnB1dC1jb250YWluZXIgI2NoZWNrYm94IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsIC5pbnB1dC1jb250YWluZXIgI2NoZWNrYm94ICsgI2NoZWNrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzMzMzM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwgLmlucHV0LWNvbnRhaW5lciAjY2hlY2tib3ggKyAjY2hlY2s6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbCAuaW5wdXQtY29udGFpbmVyICNjaGVja2JveDpjaGVja2VkICsgI2NoZWNrOmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29udGVudDogXCLinJRcIjtcbiAgY29sb3I6ICNlNTI2MWU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAycHg7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbCAubW9kYWxfX2lucHV0IHtcbiAgd2lkdGg6IDIzMnB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzMzMzM7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsIC5tb2RhbF9fc2lnbi1pbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xuICBiYWNrZ3JvdW5kOiAjZTUyNjFlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbCAubW9kYWxfX3NpZ24taW46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjY2MyMjFiO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiQGltcG9ydCAnLi4vLi4vY29uc3RhbnRzL3N0eWxlLWNvbnN0YW50cy5zY3NzJztcblxuLm1vZGFsLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogIzMzMzMzM2I0O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiA1O1xuICAgIC5tb2RhbCB7XG4gICAgICAgIGhlaWdodDogMzk0cHg7XG4gICAgICAgIHdpZHRoOiAzMDRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICBwYWRkaW5nOiAzNnB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAubW9kYWxfX25hbWUge1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgfVxuICAgICAgICAuaW5wdXQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcbiAgICAgICAgICAgICNjaGVja2JveC1uYW1lIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiAtMTZweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyNXB4O1xuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI2NoZWNrYm94IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI2NoZWNrYm94ICsgI2NoZWNrIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzMzMzO1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNjaGVja2JveDpjaGVja2VkICsgI2NoZWNrOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfinJQnO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkLWNvbG9yO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubW9kYWxfX2lucHV0IHtcbiAgICAgICAgICAgIHdpZHRoOiAyMzJweDtcbiAgICAgICAgICAgIEBpbmNsdWRlIGlucHV0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLm1vZGFsX19zaWduLWluIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGJ1dHRvbigpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiJGJnLWNvbG9yOiAjZmZmZmZmO1xuJHJlZC1jb2xvcjogI2U1MjYxZTtcbiRncmF5LWNvbG9yOiAjZjJmMmYyO1xuXG5AbWl4aW4gZm9udC1zdHlsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuXG5AbWl4aW4gYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBhZGRpbmc6IHtcbiAgICAgICAgbGVmdDogMzJweDtcbiAgICAgICAgcmlnaHQ6IDMycHg7XG4gICAgfVxuICAgIGJhY2tncm91bmQ6ICRyZWQtY29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIEBpbmNsdWRlIGZvbnQtc3R5bGUoKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjY2MyMjFiO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG5AbWl4aW4gaW5wdXQge1xuICAgIGhlaWdodDogMjVweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMzMzMztcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIEBpbmNsdWRlIGZvbnQtc3R5bGUoKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/modal-login/modal-login.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/modal-login/modal-login.component.ts ***!
  \*****************************************************************/
/*! exports provided: ModalLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalLoginComponent", function() { return ModalLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authorization.service */ "./src/app/services/authorization.service.ts");
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants/constants */ "./src/app/constants/constants.ts");




let ModalLoginComponent = class ModalLoginComponent {
    constructor(authService) {
        this.authService = authService;
        this.exitEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loginEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    login() {
        if (this.authService.login(this.email, this.password)) {
            this.loginEvent.emit(src_app_constants_constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].USERS[0].name);
        }
    }
    exit(event) {
        const target = event.target;
        if (target.className === 'modal-container') {
            this.exitEvent.emit();
        }
    }
};
ModalLoginComponent.ctorParameters = () => [
    { type: src_app_services_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModalLoginComponent.prototype, "exitEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModalLoginComponent.prototype, "loginEvent", void 0);
ModalLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-login',
        template: __webpack_require__(/*! raw-loader!./modal-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/modal-login/modal-login.component.html"),
        styles: [__webpack_require__(/*! ./modal-login.component.scss */ "./src/app/components/modal-login/modal-login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"]])
], ModalLoginComponent);



/***/ }),

/***/ "./src/app/components/movie-item/movie-item.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/movie-item/movie-item.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie {\n  height: 434px;\n  width: 280px;\n}\n.movie .description-container {\n  height: 370px;\n  width: 280px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 140%;\n  color: #f2f2f2;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n.movie .description-container .movie__description {\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  border-radius: 8px;\n  box-sizing: border-box;\n  padding: 16px;\n  transition: opacity 0.5s;\n}\n.movie .description-container .movie__description:hover {\n  background: #333333;\n  opacity: 0.8;\n}\n.movie .movie__name {\n  margin-top: 11px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 24px;\n  color: #333333;\n}\n.movie:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS1pdGVtL0M6XFxVc2Vyc1xcQW50b25cXERlc2t0b3BcXEFuZ3VsYXJcXHZpZGVvcy10YXNrL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtb3ZpZS1pdGVtXFxtb3ZpZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21vdmllLWl0ZW0vbW92aWUtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDQ0o7QURBSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDRVI7QUREUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBS0Esd0JBQUE7QUNEWjtBREhZO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDS2hCO0FEQUk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDRVI7QURBSTtFQUNJLGVBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWUtaXRlbS9tb3ZpZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdmllIHtcbiAgICBoZWlnaHQ6IDQzNHB4O1xuICAgIHdpZHRoOiAyODBweDtcbiAgICAuZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAzNzBweDtcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0MCU7XG4gICAgICAgIGNvbG9yOiAjZjJmMmYyO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIC5tb3ZpZV9fZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbiAgICAgICAgfVxuICAgIH1cbiAgICAubW92aWVfX25hbWUge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMXB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cbiIsIi5tb3ZpZSB7XG4gIGhlaWdodDogNDM0cHg7XG4gIHdpZHRoOiAyODBweDtcbn1cbi5tb3ZpZSAuZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAzNzBweDtcbiAgd2lkdGg6IDI4MHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XG4gIGNvbG9yOiAjZjJmMmYyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4ubW92aWUgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAubW92aWVfX2Rlc2NyaXB0aW9uIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxNnB4O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XG59XG4ubW92aWUgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAubW92aWVfX2Rlc2NyaXB0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzMzMzMzMztcbiAgb3BhY2l0eTogMC44O1xufVxuLm1vdmllIC5tb3ZpZV9fbmFtZSB7XG4gIG1hcmdpbi10b3A6IDExcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4ubW92aWU6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/movie-item/movie-item.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/movie-item/movie-item.component.ts ***!
  \***************************************************************/
/*! exports provided: MovieItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieItemComponent", function() { return MovieItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MovieItemComponent = class MovieItemComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MovieItemComponent.prototype, "movie", void 0);
MovieItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movie-item',
        template: __webpack_require__(/*! raw-loader!./movie-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/movie-item/movie-item.component.html"),
        styles: [__webpack_require__(/*! ./movie-item.component.scss */ "./src/app/components/movie-item/movie-item.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MovieItemComponent);



/***/ }),

/***/ "./src/app/components/movies/movies.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/movies/movies.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  max-width: 1180px;\n}\n\n.movies-container, .genres-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  justify-items: auto;\n  flex-wrap: wrap;\n}\n\n@media (max-width: 860px) {\n  .movies-container, .genres-container {\n    justify-content: space-evenly;\n  }\n}\n\n@media (max-width: 580px) {\n  .movies-container, .genres-container {\n    justify-content: center;\n  }\n}\n\n.description, .genres {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 28px;\n  color: #333333;\n  margin-bottom: 16px;\n}\n\n@media (max-width: 860px) {\n  .description, .genres {\n    display: flex;\n    justify-content: center;\n  }\n}\n\n.genres {\n  margin-top: 10px;\n  margin-bottom: 16px;\n}\n\n.genres-container .genre {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  height: 208px;\n  width: 280px;\n  margin-bottom: 20px;\n  box-shadow: inset 0px 0px 16px rgba(0, 0, 0, 0.15);\n  border-radius: 6px;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 20px;\n  line-height: 24px;\n  color: #ffffff;\n}\n\n.genres-container .genre span {\n  position: absolute;\n  bottom: 24px;\n}\n\n.genres-container .genre:hover {\n  cursor: pointer;\n}\n\n.genres-container .genre_comedy {\n  background: linear-gradient(136.27deg, #f2c94c 8.44%, #f29a4a 91.36%);\n  opacity: 0.8;\n}\n\n.genres-container .genre_comedy:hover {\n  opacity: 1;\n}\n\n.genres-container .genre_drama {\n  background: linear-gradient(136.27deg, #f2994a 8.44%, #eb5757 91.36%);\n  opacity: 0.8;\n}\n\n.genres-container .genre_drama:hover {\n  opacity: 1;\n}\n\n.genres-container .genre_fantasy {\n  background: linear-gradient(136.27deg, #56ccf2 8.44%, #2f80ed 91.36%);\n  opacity: 0.8;\n}\n\n.genres-container .genre_fantasy:hover {\n  opacity: 1;\n}\n\n.genres-container .genre_horror {\n  background: linear-gradient(136.27deg, #828282 8.44%, #333333 91.36%);\n  opacity: 0.8;\n}\n\n.genres-container .genre_horror:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZXMvQzpcXFVzZXJzXFxBbnRvblxcRGVza3RvcFxcQW5ndWxhclxcdmlkZW9zLXRhc2svc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1vdmllc1xcbW92aWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUNMSjs7QURPQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDSko7O0FES0k7RUFOSjtJQU9RLDZCQUFBO0VDRk47QUFDRjs7QURHSTtFQVRKO0lBVVEsdUJBQUE7RUNBTjtBQUNGOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREFJO0VBUEo7SUFRUSxhQUFBO0lBQ0EsdUJBQUE7RUNHTjtBQUNGOztBRERBO0VBRUksZ0JBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRENJO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtEQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0VSOztBRERRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDR1o7O0FERFE7RUFDSSxlQUFBO0FDR1o7O0FEQUk7RUFDSSxxRUFBQTtFQWxFSixZQUFBO0FDcUVKOztBRHBFSTtFQUNJLFVBQUE7QUNzRVI7O0FESEk7RUFDSSxxRUFBQTtFQXRFSixZQUFBO0FDNEVKOztBRDNFSTtFQUNJLFVBQUE7QUM2RVI7O0FETkk7RUFDSSxxRUFBQTtFQTFFSixZQUFBO0FDbUZKOztBRGxGSTtFQUNJLFVBQUE7QUNvRlI7O0FEVEk7RUFDSSxxRUFBQTtFQTlFSixZQUFBO0FDMEZKOztBRHpGSTtFQUNJLFVBQUE7QUMyRlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gZ2VucmUtc3R5bGUge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG46aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMTgwcHg7XG59XG4ubW92aWVzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBhdXRvO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODYwcHgpIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG59XG4uZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NjBweCkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG59XG4uZ2VucmVzIHtcbiAgICBAZXh0ZW5kIC5kZXNjcmlwdGlvbjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uZ2VucmVzLWNvbnRhaW5lciB7XG4gICAgQGV4dGVuZCAubW92aWVzLWNvbnRhaW5lcjtcbiAgICAuZ2VucmUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDIwOHB4O1xuICAgICAgICB3aWR0aDogMjgwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5nZW5yZV9jb21lZHkge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM2LjI3ZGVnLCAjZjJjOTRjIDguNDQlLCAjZjI5YTRhIDkxLjM2JSk7XG4gICAgICAgIEBpbmNsdWRlIGdlbnJlLXN0eWxlKCk7XG4gICAgfVxuICAgIC5nZW5yZV9kcmFtYSB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzYuMjdkZWcsICNmMjk5NGEgOC40NCUsICNlYjU3NTcgOTEuMzYlKTtcbiAgICAgICAgQGluY2x1ZGUgZ2VucmUtc3R5bGUoKTtcbiAgICB9XG4gICAgLmdlbnJlX2ZhbnRhc3kge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM2LjI3ZGVnLCAjNTZjY2YyIDguNDQlLCAjMmY4MGVkIDkxLjM2JSk7XG4gICAgICAgIEBpbmNsdWRlIGdlbnJlLXN0eWxlKCk7XG4gICAgfVxuICAgIC5nZW5yZV9ob3Jyb3Ige1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM2LjI3ZGVnLCAjODI4MjgyIDguNDQlLCAjMzMzMzMzIDkxLjM2JSk7XG4gICAgICAgIEBpbmNsdWRlIGdlbnJlLXN0eWxlKCk7XG4gICAgfVxufVxuIiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMTgwcHg7XG59XG5cbi5tb3ZpZXMtY29udGFpbmVyLCAuZ2VucmVzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAganVzdGlmeS1pdGVtczogYXV0bztcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDg2MHB4KSB7XG4gIC5tb3ZpZXMtY29udGFpbmVyLCAuZ2VucmVzLWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAubW92aWVzLWNvbnRhaW5lciwgLmdlbnJlcy1jb250YWluZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbi5kZXNjcmlwdGlvbiwgLmdlbnJlcyB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODYwcHgpIHtcbiAgLmRlc2NyaXB0aW9uLCAuZ2VucmVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbi5nZW5yZXMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uZ2VucmVzLWNvbnRhaW5lciAuZ2VucmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDIwOHB4O1xuICB3aWR0aDogMjgwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uZ2VucmVzLWNvbnRhaW5lciAuZ2VucmUgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyNHB4O1xufVxuLmdlbnJlcy1jb250YWluZXIgLmdlbnJlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmdlbnJlcy1jb250YWluZXIgLmdlbnJlX2NvbWVkeSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzYuMjdkZWcsICNmMmM5NGMgOC40NCUsICNmMjlhNGEgOTEuMzYlKTtcbiAgb3BhY2l0eTogMC44O1xufVxuLmdlbnJlcy1jb250YWluZXIgLmdlbnJlX2NvbWVkeTpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4uZ2VucmVzLWNvbnRhaW5lciAuZ2VucmVfZHJhbWEge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM2LjI3ZGVnLCAjZjI5OTRhIDguNDQlLCAjZWI1NzU3IDkxLjM2JSk7XG4gIG9wYWNpdHk6IDAuODtcbn1cbi5nZW5yZXMtY29udGFpbmVyIC5nZW5yZV9kcmFtYTpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4uZ2VucmVzLWNvbnRhaW5lciAuZ2VucmVfZmFudGFzeSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzYuMjdkZWcsICM1NmNjZjIgOC40NCUsICMyZjgwZWQgOTEuMzYlKTtcbiAgb3BhY2l0eTogMC44O1xufVxuLmdlbnJlcy1jb250YWluZXIgLmdlbnJlX2ZhbnRhc3k6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLmdlbnJlcy1jb250YWluZXIgLmdlbnJlX2hvcnJvciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzYuMjdkZWcsICM4MjgyODIgOC40NCUsICMzMzMzMzMgOTEuMzYlKTtcbiAgb3BhY2l0eTogMC44O1xufVxuLmdlbnJlcy1jb250YWluZXIgLmdlbnJlX2hvcnJvcjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/movies/movies.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/movies/movies.component.ts ***!
  \*******************************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_get_movies_channels_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/get-movies-channels.service */ "./src/app/services/get-movies-channels.service.ts");



let MoviesComponent = class MoviesComponent {
    constructor(getMoviesService) {
        this.getMoviesService = getMoviesService;
    }
    ngOnInit() {
        this.movies = this.getMoviesService.getMovies();
    }
};
MoviesComponent.ctorParameters = () => [
    { type: src_app_services_get_movies_channels_service__WEBPACK_IMPORTED_MODULE_2__["GetMoviesChannelsService"] }
];
MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movies',
        template: __webpack_require__(/*! raw-loader!./movies.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/movies/movies.component.html"),
        styles: [__webpack_require__(/*! ./movies.component.scss */ "./src/app/components/movies/movies.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_get_movies_channels_service__WEBPACK_IMPORTED_MODULE_2__["GetMoviesChannelsService"]])
], MoviesComponent);



/***/ }),

/***/ "./src/app/constants/constants.ts":
/*!****************************************!*\
  !*** ./src/app/constants/constants.ts ***!
  \****************************************/
/*! exports provided: CONSTANTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTANTS", function() { return CONSTANTS; });
let CONSTANTS = {
    MOVIES: [
        {
            id: 0,
            name: 'Мульт в кино. Выпуск №103. Некогда грустить!',
            imageUrl: '../../../assets/image.png',
            description: 'Здесь должно быть описание мультфильма. Здесь должно быть описание мультфильма. Здесь должно быть описание мультфильма.',
        },
        {
            id: 1,
            name: 'Новый Бэтмен',
            imageUrl: '../../../assets/bat.png',
            description: 'Предстоящий американский супергеройский фильм, основанный на одноимённых комиксах издательства DC Comics. Картина будет выпущена компанией Warner Bros. и будет перезагрузкой всех фильмов о Бэтмене.',
        },
        {
            id: 2,
            name: 'Однажды в... Голливуде',
            imageUrl: '../../../assets/hw.png',
            description: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.',
        },
        {
            id: 3,
            name: 'Стриптизёрши',
            imageUrl: '../../../assets/girl.png',
            description: 'Они — яркие, сексуальные и очень амбициозные. Они разрабатывают дерзкий план как вернуть потерянные деньги, чтобы снова вести роскошную гламурную жизнь, и отплатить биржевым гениям, оставив их без гроша.',
        },
    ],
    CHANNELS: [
        {
            id: 0,
            name: 'Первый канал',
            logoUrl: '../../../assets/1channel.png',
            schedule: [
                { time: '13:00', description: 'Новости (с субтитрами)' },
                { time: '14:00', description: 'Давай поженимся' },
                { time: '15:00', description: 'Другие новости' },
            ],
        },
        {
            id: 1,
            name: '2х2',
            logoUrl: '../../../assets/2x2.png',
            schedule: [
                { time: '13:00', description: 'МУЛЬТ ТВ. Сезон 4, 7 серия' },
                {
                    time: '14:00',
                    description: 'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия',
                },
                { time: '15:00', description: 'БУРДАШЕВ. Сезон 1, 20 серия' },
            ],
        },
        {
            id: 2,
            name: 'РБК',
            logoUrl: '../../../assets/rbc.png',
            schedule: [
                {
                    time: '13:00',
                    description: 'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС',
                },
                { time: '14:00', description: 'ДЕНЬ. Главные темы' },
                { time: '15:00', description: 'Главные новости' },
            ],
        },
        {
            id: 3,
            name: 'AMEDIA PREMIUM',
            logoUrl: '../../../assets/Amedia.png',
            schedule: [
                { time: '13:00', description: 'Клиент всегда мёртв' },
                {
                    time: '14:00',
                    description: 'Голодные игры: Сойка-пересмешница. Часть I',
                },
                { time: '15:00', description: 'Секс в большом городе' },
            ],
        },
    ],
    USERS: [
        {
            id: 0,
            email: 'u',
            password: '0',
            name: 'Константин К.',
        },
    ],
};


/***/ }),

/***/ "./src/app/services/authorization.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/authorization.service.ts ***!
  \***************************************************/
/*! exports provided: AuthorizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationService", function() { return AuthorizationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ "./src/app/constants/constants.ts");



let AuthorizationService = class AuthorizationService {
    constructor() { }
    login(email, password) {
        return (email === _constants_constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].USERS[0].email &&
            password === _constants_constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].USERS[0].password);
    }
};
AuthorizationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AuthorizationService);



/***/ }),

/***/ "./src/app/services/get-movies-channels.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/get-movies-channels.service.ts ***!
  \*********************************************************/
/*! exports provided: GetMoviesChannelsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMoviesChannelsService", function() { return GetMoviesChannelsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ "./src/app/constants/constants.ts");



let GetMoviesChannelsService = class GetMoviesChannelsService {
    constructor() { }
    getMovies() {
        return _constants_constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].MOVIES;
    }
    getChannels() {
        return _constants_constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].CHANNELS;
    }
};
GetMoviesChannelsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GetMoviesChannelsService);



/***/ }),

/***/ "./src/app/services/local-storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LocalStorageService = class LocalStorageService {
    constructor() {
        this.key = 'userName';
    }
    getUserFromLocalStorage() {
        return localStorage.getItem(this.key);
    }
    addUserToLocalStorage(name) {
        localStorage.setItem(this.key, name);
    }
    removeUserFromLocalStorage() {
        localStorage.removeItem(this.key);
    }
};
LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LocalStorageService);



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
const environment = {
    production: false,
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Anton\Desktop\Angular\videos-task\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map