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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

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
    }
    AppComponent.prototype.ngOnInit = function () {
    };
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_db_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/db.service */ "./src/app/service/db.service.ts");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _component_main_grid_main_grid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/main-grid/main-grid.component */ "./src/app/component/main-grid/main-grid.component.ts");
/* harmony import */ var _modal_arts_modal_arts_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal/arts-modal/arts-modal.component */ "./src/app/modal/arts-modal/arts-modal.component.ts");
/* harmony import */ var _component_arts_arts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/arts/arts.component */ "./src/app/component/arts/arts.component.ts");
/* harmony import */ var _component_artssetting_artssetting_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/artssetting/artssetting.component */ "./src/app/component/artssetting/artssetting.component.ts");
/* harmony import */ var _component_basic_information_basic_information_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/basic-information/basic-information.component */ "./src/app/component/basic-information/basic-information.component.ts");
/* harmony import */ var _common_db_stub__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./common/db-stub */ "./src/app/common/db-stub.ts");
/* harmony import */ var _modal_refer_modal_refer_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modal/refer-modal/refer-modal.component */ "./src/app/modal/refer-modal/refer-modal.component.ts");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/login/login.component */ "./src/app/component/login/login.component.ts");
/* harmony import */ var _component_error_error_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/error/error.component */ "./src/app/component/error/error.component.ts");
/* harmony import */ var _component_top_top_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/top/top.component */ "./src/app/component/top/top.component.ts");
/* harmony import */ var _component_character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/character-detail/character-detail.component */ "./src/app/component/character-detail/character-detail.component.ts");
/* harmony import */ var _component_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/character-list/character-list.component */ "./src/app/component/character-list/character-list.component.ts");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _component_my_page_my_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./component/my-page/my-page.component */ "./src/app/component/my-page/my-page.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _component_main_grid_main_grid_component__WEBPACK_IMPORTED_MODULE_12__["MainGridComponent"],
                _modal_arts_modal_arts_modal_component__WEBPACK_IMPORTED_MODULE_13__["ModalComponent"],
                _component_arts_arts_component__WEBPACK_IMPORTED_MODULE_14__["ArtsComponent"],
                _component_artssetting_artssetting_component__WEBPACK_IMPORTED_MODULE_15__["ArtssettingComponent"],
                _component_basic_information_basic_information_component__WEBPACK_IMPORTED_MODULE_16__["BasicInformationComponent"],
                _modal_refer_modal_refer_modal_component__WEBPACK_IMPORTED_MODULE_18__["ReferModalComponent"],
                _component_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _component_error_error_component__WEBPACK_IMPORTED_MODULE_20__["ErrorComponent"],
                _component_top_top_component__WEBPACK_IMPORTED_MODULE_21__["TopComponent"],
                _component_character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_22__["CharacterDetailComponent"],
                _component_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_23__["CharacterListComponent"],
                _component_header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"],
                _component_my_page_my_page_component__WEBPACK_IMPORTED_MODULE_25__["MyPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"].forRoot(),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"].withComponents([]),
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_9__["InMemoryWebApiModule"].forRoot(_common_db_stub__WEBPACK_IMPORTED_MODULE_17__["DbData"]),
                _app_routing__WEBPACK_IMPORTED_MODULE_10__["ROUTES"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]
            ],
            providers: [
                _service_db_service__WEBPACK_IMPORTED_MODULE_8__["DbService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/character-detail/character-detail.component */ "./src/app/component/character-detail/character-detail.component.ts");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/login/login.component */ "./src/app/component/login/login.component.ts");
/* harmony import */ var _component_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/error/error.component */ "./src/app/component/error/error.component.ts");
/* harmony import */ var _component_top_top_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/top/top.component */ "./src/app/component/top/top.component.ts");
/* harmony import */ var _component_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/character-list/character-list.component */ "./src/app/component/character-list/character-list.component.ts");
/* harmony import */ var _component_my_page_my_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/my-page/my-page.component */ "./src/app/component/my-page/my-page.component.ts");







var routes = [
    { path: 'login', component: _component_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'character', component: _component_character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_1__["CharacterDetailComponent"] },
    { path: 'character-list', component: _component_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_5__["CharacterListComponent"] },
    { path: 'my-page', component: _component_my_page_my_page_component__WEBPACK_IMPORTED_MODULE_6__["MyPageComponent"] },
    { path: '', component: _component_top_top_component__WEBPACK_IMPORTED_MODULE_4__["TopComponent"] },
    { path: '**', component: _component_error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"] }
];
var ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/common/constant.ts":
/*!************************************!*\
  !*** ./src/app/common/constant.ts ***!
  \************************************/
/*! exports provided: GridDefs, ObjectFilter, ArtsInfo, URL_LIST, CHARACTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridDefs", function() { return GridDefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectFilter", function() { return ObjectFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtsInfo", function() { return ArtsInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_LIST", function() { return URL_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHARACTER", function() { return CHARACTER; });
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces */ "./src/app/common/interfaces.ts");

var GridDefs;
(function (GridDefs) {
    GridDefs.columnDefs = [
        {
            headerName: 'A',
            field: 'A'
            // 行間用
            ,
            width: 20
            // checkboxSelection: true
        }, {
            headerName: '器術' // Header
            ,
            field: 'kijutsu' // データの名前
            ,
            width: 200 // 幅
            ,
            editable: false // 編集不可
            ,
            cellRenderer: function (params) {
                return params.value.data;
                // const element = document.createElement('span');
                // element.innerHTML = params.value.data;
                // element.addEventListener('click', () => {
                //     params.value.clickFlg = !params.value.clickFlg;
                //     if (params.value.clickFlg) {
                //         element.style.color = 'white';
                //         element.style.backgroundColor = 'black';
                //     } else {
                //         element.style.color = 'black';
                //         element.style.backgroundColor = '';
                //     }
                // });
                // return element;
            }
        }, {
            // 行間用
            headerName: 'B',
            field: 'B',
            width: 20,
        }, {
            headerName: '体術',
            field: 'taijutsu',
            width: 200,
            editable: false // 編集不可
            ,
            cellRenderer: function (params) {
                return params.value.data;
            }
        }, {
            // 行間用
            headerName: 'C',
            field: 'C',
            width: 20,
        }, {
            headerName: '忍術',
            field: 'ninjutsu',
            width: 200,
            cellRenderer: function (params) {
                return params.value.data;
            }
        }, {
            // 行間用
            headerName: 'D',
            field: 'D',
            width: 20,
        }, {
            headerName: '謀術',
            field: 'boujutsu',
            width: 200,
            cellRenderer: function (params) {
                return params.value.data;
            }
        }, {
            // 行間用
            headerName: 'E',
            field: 'E',
            width: 20,
        }, {
            headerName: '戦術',
            field: 'senjutsu',
            width: 200,
            cellRenderer: function (params) {
                return params.value.data;
            }
        }, {
            // 行間用
            headerName: 'F',
            field: 'F',
            width: 20,
        }, {
            headerName: '妖術',
            field: 'youjutsu',
            width: 200,
            cellRenderer: function (params) {
                return params.value.data;
            }
        }, {
            // 行間用
            headerName: 'G',
            field: 'G',
            width: 20,
        }
    ];
    GridDefs.gridData = [
        { kijutsu: { data: '絡繰術', clickFlg: false }, taijutsu: { data: '騎乗術', clickFlg: false }, ninjutsu: { data: '生存術', clickFlg: false }, boujutsu: { data: '医術', clickFlg: false }, senjutsu: { data: '兵糧術', clickFlg: false }, youjutsu: { data: '異形化', clickFlg: false } },
        { kijutsu: { data: '火術', clickFlg: false }, taijutsu: { data: '砲術', clickFlg: false }, ninjutsu: { data: '潜伏術', clickFlg: false }, boujutsu: { data: '毒術', clickFlg: false }, senjutsu: { data: '鳥獣術', clickFlg: false }, youjutsu: { data: '召喚術', clickFlg: false } },
        { kijutsu: { data: '水術', clickFlg: false }, taijutsu: { data: '手裏剣術', clickFlg: false }, ninjutsu: { data: '遁走術', clickFlg: false }, boujutsu: { data: '罠術', clickFlg: false }, senjutsu: { data: '野戦術', clickFlg: false }, youjutsu: { data: '死霊術', clickFlg: false } },
        { kijutsu: { data: '針術', clickFlg: false }, taijutsu: { data: '手練', clickFlg: false }, ninjutsu: { data: '盗聴術', clickFlg: false }, boujutsu: { data: '調査術', clickFlg: false }, senjutsu: { data: '地の利', clickFlg: false }, youjutsu: { data: '結界術', clickFlg: false } },
        { kijutsu: { data: '仕込み', clickFlg: false }, taijutsu: { data: '身体操術', clickFlg: false }, ninjutsu: { data: '腹話術', clickFlg: false }, boujutsu: { data: '詐術', clickFlg: false }, senjutsu: { data: '意気', clickFlg: false }, youjutsu: { data: '封術', clickFlg: false } },
        { kijutsu: { data: '衣装術', clickFlg: false }, taijutsu: { data: '歩術', clickFlg: false }, ninjutsu: { data: '隠形術', clickFlg: false }, boujutsu: { data: '対人術', clickFlg: false }, senjutsu: { data: '用兵術', clickFlg: false }, youjutsu: { data: '言霊術', clickFlg: false } },
        { kijutsu: { data: '縄術', clickFlg: false }, taijutsu: { data: '走術', clickFlg: false }, ninjutsu: { data: '変装術', clickFlg: false }, boujutsu: { data: '遊芸', clickFlg: false }, senjutsu: { data: '記憶術', clickFlg: false }, youjutsu: { data: '幻術', clickFlg: false } },
        { kijutsu: { data: '登術', clickFlg: false }, taijutsu: { data: '飛術', clickFlg: false }, ninjutsu: { data: '香術', clickFlg: false }, boujutsu: { data: 'くノ一の術', clickFlg: false }, senjutsu: { data: '見敵術', clickFlg: false }, youjutsu: { data: '瞳術', clickFlg: false } },
        { kijutsu: { data: '拷問術', clickFlg: false }, taijutsu: { data: '骨法術', clickFlg: false }, ninjutsu: { data: '分身の術', clickFlg: false }, boujutsu: { data: '傀儡の術', clickFlg: false }, senjutsu: { data: '暗号術', clickFlg: false }, youjutsu: { data: '千里眼の術', clickFlg: false } },
        { kijutsu: { data: '壊器術', clickFlg: false }, taijutsu: { data: '刀術', clickFlg: false }, ninjutsu: { data: '隠蔽術', clickFlg: false }, boujutsu: { data: '流言の術', clickFlg: false }, senjutsu: { data: '伝達術', clickFlg: false }, youjutsu: { data: '憑依術', clickFlg: false } },
        { kijutsu: { data: '掘削術', clickFlg: false }, taijutsu: { data: '怪力', clickFlg: false }, ninjutsu: { data: '第六感', clickFlg: false }, boujutsu: { data: '経済力', clickFlg: false }, senjutsu: { data: '人脈', clickFlg: false }, youjutsu: { data: '呪術', clickFlg: false } }
    ];
    GridDefs.ryuha = {
        hasuba: '斜歯忍軍',
        kurama: '鞍馬神流',
        hagure: 'ハグレモノ',
        hirasaka: '比良坂機関',
        otogi: '私立御斎学園',
        oni: '隠忍の血統'
    };
})(GridDefs || (GridDefs = {}));
var ObjectFilter;
(function (ObjectFilter) {
    ObjectFilter.charactorDataFillter = ['playerName', 'charactorName', 'kana', 'regulation', 'type', 'kairyuha', 'enemy', 'rank', 'achievement', 'age', 'gender', 'face', 'ryugi', 'belief'];
})(ObjectFilter || (ObjectFilter = {}));
var ArtsInfo;
(function (ArtsInfo) {
    ArtsInfo.arts = [
        {
            name: '接近戦攻撃※',
            type: _interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsType"].atack,
            range: 1,
            cost: 'なし',
            targetSkill: '自由',
            description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。',
            flavor: '通常の接近戦攻撃。',
            attribute: [_interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsAttribute"].general],
            clickFlg: false
        }, {
            name: '鳳凰',
            type: _interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsType"].atack,
            range: 6,
            cost: '2',
            targetSkill: '火術',
            description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。',
            flavor: '通常の接近戦攻撃。',
            attribute: [_interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsAttribute"].hasuba, _interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsAttribute"].ryuha],
            clickFlg: false
        }, {
            name: '鳳凰',
            type: _interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsType"].atack,
            range: 6,
            cost: '2',
            targetSkill: '火術',
            description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。',
            flavor: '通常の接近戦攻撃。',
            attribute: [_interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsAttribute"].hasuba, _interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsAttribute"].ryuha],
            clickFlg: false
        }, {
            name: '鳳凰',
            type: _interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsType"].atack,
            range: 6,
            cost: '2',
            targetSkill: '火術',
            description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。',
            flavor: '通常の接近戦攻撃。',
            attribute: [_interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsAttribute"].hasuba, _interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsAttribute"].ryuha],
            clickFlg: false
        }, {
            name: '鳳凰',
            type: _interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsType"].atack,
            range: 6,
            cost: '2',
            targetSkill: '火術',
            description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。',
            flavor: '通常の接近戦攻撃。',
            attribute: [_interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsAttribute"].hasuba, _interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsAttribute"].ryuha],
            clickFlg: false
        }, {
            name: '鳳凰',
            type: _interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsType"].atack,
            range: 6,
            cost: '2',
            targetSkill: '火術',
            description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。',
            flavor: '通常の接近戦攻撃。',
            attribute: [_interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsAttribute"].hasuba, _interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsAttribute"].ryuha],
            clickFlg: false
        }
    ];
})(ArtsInfo || (ArtsInfo = {}));
var URL_LIST = {
    regist: 'character',
    characterList: 'character-list',
    login: 'login',
    myPage: 'my-page'
};
var CHARACTER = {
    "charactor": [
        {
            "playerName": "Guest",
            "charactorName": "Charactor1",
            "kana": "キャラクターイチ",
            "regulation": "現代",
            "type": "",
            "kairyuha": "",
            "enemy": "",
            "rank": "",
            "achievement": "",
            "age": "",
            "gender": "",
            "face": "",
            "ryugi": "",
            "belief": "",
            "selectedSkillList": [
                {
                    "name": "拷問術",
                    "colId": "kijutsu",
                    "colIndex": null,
                    "rowIndex": 9
                },
                {
                    "name": "走術",
                    "colId": "taijutsu",
                    "colIndex": null,
                    "rowIndex": 7
                },
                {
                    "name": "隠形術",
                    "colId": "ninjutsu",
                    "colIndex": null,
                    "rowIndex": 6
                },
                {
                    "name": "野戦術",
                    "colId": "senjutsu",
                    "colIndex": null,
                    "rowIndex": 3
                },
                {
                    "name": "詐術",
                    "colId": "boujutsu",
                    "colIndex": null,
                    "rowIndex": 5
                }
            ],
            "dispArtsArray": [
                {
                    "name": "接近戦攻撃※",
                    "type": "攻撃忍法",
                    "range": 1,
                    "cost": "なし",
                    "targetSkill": "自由",
                    "description": "接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。",
                    "flavor": "通常の接近戦攻撃。",
                    "attribute": [
                        "汎用忍法"
                    ],
                    "clickFlg": false
                },
                {
                    "name": "テストサポート",
                    "type": "サポート忍法",
                    "range": "1",
                    "cost": "6",
                    "targetSkill": "自由",
                    "description": "サポート用",
                    "flavor": "",
                    "attribute": [],
                    "clickFlg": false
                },
                {
                    "name": "テスト装備",
                    "type": "装備忍法",
                    "range": "なし",
                    "cost": "なし",
                    "targetSkill": "なし",
                    "description": "装備用",
                    "flavor": "",
                    "attribute": [],
                    "clickFlg": false
                }
            ],
            "ryuha": "ハグレモノ"
        },
        {
            "playerName": "Guest2",
            "charactorName": "蔵馬",
            "kana": "クラマ",
            "regulation": "現代",
            "type": "",
            "kairyuha": "",
            "enemy": "",
            "rank": "",
            "achievement": "",
            "age": "",
            "gender": "",
            "face": "",
            "ryugi": "",
            "belief": "",
            "selectedSkillList": [],
            "dispArtsArray": [
                {
                    "name": "接近戦攻撃※",
                    "type": "攻撃忍法",
                    "range": 1,
                    "cost": "なし",
                    "targetSkill": "自由",
                    "description": "接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。",
                    "flavor": "通常の接近戦攻撃。",
                    "attribute": [
                        "汎用忍法"
                    ],
                    "clickFlg": false
                }
            ],
            "ryuha": "鞍馬神流"
        }
    ]
};


/***/ }),

/***/ "./src/app/common/db-stub.ts":
/*!***********************************!*\
  !*** ./src/app/common/db-stub.ts ***!
  \***********************************/
/*! exports provided: DbData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbData", function() { return DbData; });
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces */ "./src/app/common/interfaces.ts");

var DbData = /** @class */ (function () {
    function DbData() {
    }
    DbData.prototype.createDb = function () {
        var arts = [
            {
                name: '接近戦攻撃※',
                type: _interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsType"].atack,
                range: 1,
                cost: 'なし',
                targetSkill: '自由',
                description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。',
                flavor: '通常の接近戦攻撃。',
                attribute: [_interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsAttribute"].general],
                clickFlg: false
            }, {
                name: '鳳凰',
                type: _interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsType"].atack,
                range: 6,
                cost: '2',
                targetSkill: '火術',
                description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。',
                flavor: '通常の接近戦攻撃。',
                attribute: [_interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsAttribute"].hasuba, _interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsAttribute"].ryuha],
                clickFlg: false
            }, {
                name: '鳳凰2',
                type: _interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsType"].atack,
                range: 6,
                cost: '2',
                targetSkill: '火術',
                description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。',
                flavor: '通常の接近戦攻撃。',
                attribute: [_interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsAttribute"].hasuba, _interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsAttribute"].ryuha],
                clickFlg: false
            }, {
                name: '鳳凰',
                type: _interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsType"].atack,
                range: 6,
                cost: '2',
                targetSkill: '火術',
                description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。',
                flavor: '通常の接近戦攻撃。',
                attribute: [_interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsAttribute"].hasuba, _interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsAttribute"].ryuha],
                clickFlg: false
            }, {
                name: '鳳凰',
                type: _interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsType"].atack,
                range: 6,
                cost: '2',
                targetSkill: '火術',
                description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。',
                flavor: '通常の接近戦攻撃。',
                attribute: [_interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsAttribute"].hasuba, _interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsAttribute"].ryuha],
                clickFlg: false
            }, {
                name: '鳳凰',
                type: _interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsType"].atack,
                range: 6,
                cost: '2',
                targetSkill: '火術',
                description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。',
                flavor: '通常の接近戦攻撃。',
                attribute: [_interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsAttribute"].hasuba, _interfaces__WEBPACK_IMPORTED_MODULE_0__["ArtsAttribute"].ryuha],
                clickFlg: false
            }
        ];
        return arts;
    };
    return DbData;
}());



/***/ }),

/***/ "./src/app/common/functions.ts":
/*!*************************************!*\
  !*** ./src/app/common/functions.ts ***!
  \*************************************/
/*! exports provided: deepCopy, listDeleteByKey, WebStorage, Base64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepCopy", function() { return deepCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listDeleteByKey", function() { return listDeleteByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebStorage", function() { return WebStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base64", function() { return Base64; });
function deepCopy(target) {
    return JSON.parse(JSON.stringify(target));
}
function listDeleteByKey(list, keyName, key) {
    var tmpList = list.concat();
    tmpList = tmpList.filter(function (tmp) { return tmp[keyName] !== key; });
    return tmpList;
}
var WebStorage;
(function (WebStorage) {
    function setSessionStorage(key, value) {
        if (typeof value === 'string') {
            window.sessionStorage.setItem(key, value);
        }
        else {
            window.sessionStorage.setItem(key, JSON.stringify(value));
        }
    }
    WebStorage.setSessionStorage = setSessionStorage;
    function getSessionStorage(key) {
        return window.sessionStorage.getItem(key);
    }
    WebStorage.getSessionStorage = getSessionStorage;
    function delSessionStorage(key) {
        window.sessionStorage.removeItem(key);
    }
    WebStorage.delSessionStorage = delSessionStorage;
    function setLocalStorage(key, value) {
        if (typeof value === 'string') {
            window.localStorage.setItem(key, value);
        }
        else {
            window.localStorage.setItem(key, JSON.stringify(value));
        }
    }
    WebStorage.setLocalStorage = setLocalStorage;
    function getLocalStorage(key) {
        window.localStorage.getItem(key);
    }
    WebStorage.getLocalStorage = getLocalStorage;
    function delLocalStorage(key) {
        window.localStorage.removeItem(key);
    }
    WebStorage.delLocalStorage = delLocalStorage;
})(WebStorage || (WebStorage = {}));
var Base64;
(function (Base64) {
    function encode(str) {
        return btoa(unescape(encodeURIComponent(str)));
    }
    Base64.encode = encode;
    function decode(str) {
        return decodeURIComponent(escape(atob(str)));
    }
    Base64.decode = decode;
})(Base64 || (Base64 = {}));


/***/ }),

/***/ "./src/app/common/interfaces.ts":
/*!**************************************!*\
  !*** ./src/app/common/interfaces.ts ***!
  \**************************************/
/*! exports provided: ArtsType, ArtsAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtsType", function() { return ArtsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtsAttribute", function() { return ArtsAttribute; });
/**
 * 忍法タイプ
 */
var ArtsType;
(function (ArtsType) {
    ArtsType["atack"] = "\u653B\u6483\u5FCD\u6CD5";
    ArtsType["equipment"] = "\u88C5\u5099\u5FCD\u6CD5";
    ArtsType["support"] = "\u30B5\u30DD\u30FC\u30C8\u5FCD\u6CD5";
})(ArtsType || (ArtsType = {}));
;
/**
 * 忍法種類
 */
var ArtsAttribute;
(function (ArtsAttribute) {
    ArtsAttribute["taima"] = "\u9000\u9B54\u7DE8";
    ArtsAttribute["general"] = "\u6C4E\u7528\u5FCD\u6CD5";
    ArtsAttribute["hasuba"] = "\u659C\u6B6F\u5FCD\u8ECD";
    ArtsAttribute["ryuha"] = "\u6D41\u6D3E\u5FCD\u6CD5";
    ArtsAttribute["hiden"] = "\u79D8\u4F1D\u5FCD\u6CD5";
})(ArtsAttribute || (ArtsAttribute = {}));
;


/***/ }),

/***/ "./src/app/component/arts/arts.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/arts/arts.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/arts/arts.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/arts/arts.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<ng-container *ngFor=\"let artsObject of artsArray\">\n    <div class=\"card col-md-3\" [ngClass]=\"artsObject.clickFlg ? 'bg-primary text-light' : ''\" (click)=\"dataClick(artsObject)\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{artsObject.name}}</h5>\n        <div class=\"card-subtitle mb-2 text-muted\">\n          <ng-container *ngFor=\"let attribute of artsObject.attribute\">\n            <span class=\"badge badge-secondary\">{{attribute}}</span>\n          </ng-container>\n        </div>\n        <div class=\"card-text mb-1 mt-1\">\n          <table class=\"table-bordered\">\n            <tbody>\n              <tr>\n                <td>\n                  <span class=\"bg-dark text-light mr-1\">タイプ</span>{{artsObject.type}}</td>\n                <td>\n                  <span class=\"bg-dark text-light mr-1\">間合</span>{{artsObject.range}}</td>\n                <td>\n                  <span class=\"bg-dark text-light mr-1\">コスト</span>{{artsObject.cost}}</td>\n              </tr>\n              <tr>\n                <td colspan=\"3\">\n                  <span class=\"bg-dark text-light mr-1\">指定特技</span>{{artsObject.targetSkill}}</td>\n              </tr>\n              <tr>\n                <td colspan=\"3\">{{artsObject.description}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"card-footer\">\n          {{artsObject.flavor}}\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</div>"

/***/ }),

/***/ "./src/app/component/arts/arts.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/arts/arts.component.ts ***!
  \**************************************************/
/*! exports provided: ArtsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtsComponent", function() { return ArtsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_db_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/db.service */ "./src/app/service/db.service.ts");
/* harmony import */ var _common_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/functions */ "./src/app/common/functions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtsComponent = /** @class */ (function () {
    function ArtsComponent(dbService) {
        this.dbService = dbService;
        this.regist = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.artsNameList = [];
    }
    ArtsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dbService.getArtsData().subscribe(function (res) {
            _this.artsArray = res;
        });
    };
    ArtsComponent.prototype.dataClick = function (arts) {
        arts.clickFlg = !arts.clickFlg;
        if (this.artsNameList.includes(arts.name)) {
            this.selectArtsArray = _common_functions__WEBPACK_IMPORTED_MODULE_2__["listDeleteByKey"](this.selectArtsArray, 'name', arts.name);
        }
        else {
            this.selectArtsArray.push(arts);
        }
        this.createArtsNameList();
        this.regist.emit(this.selectArtsArray);
    };
    ArtsComponent.prototype.createArtsNameList = function () {
        var tempArray = [];
        this.selectArtsArray.forEach(function (artsObj) {
            tempArray.push(artsObj.name);
        });
        this.artsNameList = tempArray.concat();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ArtsComponent.prototype, "selectArtsArray", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ArtsComponent.prototype, "regist", void 0);
    ArtsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-arts',
            template: __webpack_require__(/*! ./arts.component.html */ "./src/app/component/arts/arts.component.html"),
            styles: [__webpack_require__(/*! ./arts.component.css */ "./src/app/component/arts/arts.component.css")]
        }),
        __metadata("design:paramtypes", [_service_db_service__WEBPACK_IMPORTED_MODULE_1__["DbService"]])
    ], ArtsComponent);
    return ArtsComponent;
}());



/***/ }),

/***/ "./src/app/component/artssetting/artssetting.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/artssetting/artssetting.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/artssetting/artssetting.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/artssetting/artssetting.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-backdrop=\"static\" data-keyboard=\"false\" data-target=\"#modalPanel\">忍法設定</button>\n  <button type=\"button\" class=\"btn btn-primary ml-2\" (click)=\"addRow()\">行追加</button>\n</div>\n<div>\n  <table class=\"table-bordered\">\n    <thead>\n      <tr>\n        <th width=\"10%\">忍法名</th>\n        <th width=\"10%\">タイプ</th>\n        <th width=\"10%\">指定特技</th>\n        <th width=\"5%\">間合</th>\n        <th width=\"10%\">コスト</th>\n        <th width=\"40%\">エフェクト</th>\n        <th width=\"5%\">参照P</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let arts of dispArtsArray;let index = index\">\n        <td>\n          <input type=\"text\" class=\"w-100\" [(ngModel)]=\"arts.name\">\n        </td>\n        <td>\n          <input type=\"text\" class=\"w-100\" [(ngModel)]=\"arts.type\">\n        </td>\n        <td>\n          <input type=\"text\" class=\"w-100\" [(ngModel)]=\"arts.targetSkill\">\n        </td>\n        <td>\n          <input type=\"text\" class=\"w-100\" [(ngModel)]=\"arts.range\">\n        </td>\n        <td>\n          <input type=\"text\" class=\"w-100\" [(ngModel)]=\"arts.cost\">\n        </td>\n        <td>\n          <input type=\"text\" class=\"w-100\" [(ngModel)]=\"arts.description\">\n        </td>\n        <td>2</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<app-arts-modal [modalId]=\"'modalPanel'\" [selectArtsArray]=\"selectArtsArray\" (regist)=\"registData($event)\"></app-arts-modal>"

/***/ }),

/***/ "./src/app/component/artssetting/artssetting.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/artssetting/artssetting.component.ts ***!
  \****************************************************************/
/*! exports provided: ArtssettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtssettingComponent", function() { return ArtssettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/interfaces */ "./src/app/common/interfaces.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArtssettingComponent = /** @class */ (function () {
    function ArtssettingComponent() {
        /** 選択した忍法リスト */
        this.selectArtsArray = [];
        /** 表示用リスト */
        this.dispArtsArray = [{
                name: '接近戦攻撃※',
                type: _common_interfaces__WEBPACK_IMPORTED_MODULE_1__["ArtsType"].atack,
                range: 1,
                cost: 'なし',
                targetSkill: '自由',
                description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。',
                flavor: '通常の接近戦攻撃。',
                attribute: [_common_interfaces__WEBPACK_IMPORTED_MODULE_1__["ArtsAttribute"].general],
                clickFlg: false
            }];
    }
    ArtssettingComponent.prototype.ngOnInit = function () {
    };
    ArtssettingComponent.prototype.registData = function (event) {
        this.dispArtsArray = [{
                name: '接近戦攻撃※',
                type: _common_interfaces__WEBPACK_IMPORTED_MODULE_1__["ArtsType"].atack,
                range: 1,
                cost: 'なし',
                targetSkill: '自由',
                description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。',
                flavor: '通常の接近戦攻撃。',
                attribute: [_common_interfaces__WEBPACK_IMPORTED_MODULE_1__["ArtsAttribute"].general],
                clickFlg: false
            }];
        this.dispArtsArray = event.concat();
    };
    ArtssettingComponent.prototype.addRow = function () {
        this.dispArtsArray.push({
            name: '',
            type: null,
            range: null,
            cost: '',
            targetSkill: '',
            description: '',
            flavor: '',
            attribute: [],
            clickFlg: false
        });
    };
    ArtssettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-artssetting',
            template: __webpack_require__(/*! ./artssetting.component.html */ "./src/app/component/artssetting/artssetting.component.html"),
            styles: [__webpack_require__(/*! ./artssetting.component.css */ "./src/app/component/artssetting/artssetting.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArtssettingComponent);
    return ArtssettingComponent;
}());



/***/ }),

/***/ "./src/app/component/basic-information/basic-information.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/component/basic-information/basic-information.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/basic-information/basic-information.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/component/basic-information/basic-information.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table-bordered\">\n  <tr>\n    <th>プレイヤー名</th>\n    <td colspan=\"3\">\n      <input id=\"player\" type=\"text\" class=\"w-100\" [(ngModel)]=\"playerName\" >\n    </td>\n  </tr>\n  <tr>\n    <th>キャラクター名</th>\n    <td colspan=\"3\">\n      <input id=\"charactor\" type=\"text\" class=\"w-100\" [(ngModel)]=\"charactorName\">\n    </td>\n  </tr>\n  <tr>\n    <th>カナ</th>\n    <td colspan=\"3\">\n      <input id=\"kana\" type=\"text\" class=\"w-100\" [(ngModel)]=\"kana\">\n    </td>\n  </tr>\n  <tr>\n    <th>レギュレーション</th>\n    <td colspan=\"3\">\n      <input id=\"regulation\" type=\"text\" class=\"w-100\" [(ngModel)]=\"regulation\">\n    </td>\n  </tr>\n  <tr>\n    <th>タイプ</th>\n    <td colspan=\"3\">\n      <input id=\"type\" type=\"text\" [value]=\"'忍者'\" class=\"w-100\" [(ngModel)]=\"type\">\n    </td>\n  </tr>\n  <tr>\n    <th>上位流派</th>\n    <td>\n      <select (change)=\"pullDownChange($event.target.value)\">\n        <option *ngFor=\"let item of selectList\">{{item}}</option>\n      </select>\n    </td>\n    <th>流派</th>\n    <td>\n      <input id=\"kairyuha\" type=\"text\" [(ngModel)]=\"kairyuha\">\n    </td>\n  </tr>\n  <tr>\n    <th>流儀</th>\n    <td colspan=\"3\">\n      <input id=\"ryugi\" type=\"text\" class=\"w-100\" [(ngModel)]=\"ryugi\">\n    </td>\n  </tr>\n  <tr>\n    <th>仇敵</th>\n    <td colspan=\"3\">\n      <input id=\"enemy\" type=\"text\" class=\"w-100\" [(ngModel)]=\"enemy\">\n    </td>\n  </tr>\n  <tr>\n    <th>階級</th>\n    <td>\n      <input id=\"rank\" type=\"text\" [(ngModel)]=\"rank\">\n    </td>\n    <th>功績</th>\n    <td>\n      <input id=\"achievement\" type=\"text\" [(ngModel)]=\"achievement\">\n    </td>\n  </tr>\n  <tr>\n    <th>年齢</th>\n    <td>\n      <input id=\"age\" type=\"text\" [(ngModel)]=\"age\">\n    </td>\n    <th>性別</th>\n    <td>\n      <input id=\"gender\" type=\"text\" [(ngModel)]=\"gender\">\n    </td>\n  </tr>\n  <tr>\n    <th>表の顔</th>\n    <td>\n      <input id=\"face\" type=\"text\" [(ngModel)]=\"face\">\n    </td>\n    <th>信念</th>\n    <td>\n      <input id=\"belief\" type=\"text\" [(ngModel)]=\"belief\">\n    </td>\n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/component/basic-information/basic-information.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/component/basic-information/basic-information.component.ts ***!
  \****************************************************************************/
/*! exports provided: BasicInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInformationComponent", function() { return BasicInformationComponent; });
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

var BasicInformationComponent = /** @class */ (function () {
    function BasicInformationComponent() {
        this.selectList = ['流派を選択', '斜歯忍軍', '鞍馬神流', 'ハグレモノ', '比良坂機関', '私立御斎学園', '隠忍の血統'];
        this.playerName = '';
        this.charactorName = '';
        this.kana = '';
        this.regulation = '';
        this.type = '';
        this.kairyuha = '';
        this.enemy = '';
        this.rank = '';
        this.achievement = '';
        this.age = '';
        this.gender = '';
        this.face = '';
        this.ryugi = '';
        this.belief = '';
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BasicInformationComponent.prototype.ngOnInit = function () {
    };
    BasicInformationComponent.prototype.pullDownChange = function (target) {
        this.select.emit(target);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BasicInformationComponent.prototype, "select", void 0);
    BasicInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-information',
            template: __webpack_require__(/*! ./basic-information.component.html */ "./src/app/component/basic-information/basic-information.component.html"),
            styles: [__webpack_require__(/*! ./basic-information.component.css */ "./src/app/component/basic-information/basic-information.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicInformationComponent);
    return BasicInformationComponent;
}());



/***/ }),

/***/ "./src/app/component/character-detail/character-detail.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/component/character-detail/character-detail.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/character-detail/character-detail.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/component/character-detail/character-detail.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-3 row\">\n    <div>\n        <app-basic-information (select)=\"changeRyuha($event)\"></app-basic-information>\n    </div>\n    <div>\n        <button class=\"btn btn-success\" type=\"button\" (click)=\"registCharactor()\">保存</button>\n    </div>\n</div>\n<div class=\"m-3 row\">\n    <div class=\"col-md-12\">\n        <app-main-grid [ryuha]=\"ryuha\"></app-main-grid>\n    </div>\n</div>\n<div class=\"m-3 row\">\n    <app-artssetting></app-artssetting>\n</div>\n"

/***/ }),

/***/ "./src/app/component/character-detail/character-detail.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/character-detail/character-detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: CharacterDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailComponent", function() { return CharacterDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_db_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/db.service */ "./src/app/service/db.service.ts");
/* harmony import */ var _common_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/constant */ "./src/app/common/constant.ts");
/* harmony import */ var _basic_information_basic_information_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../basic-information/basic-information.component */ "./src/app/component/basic-information/basic-information.component.ts");
/* harmony import */ var _main_grid_main_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../main-grid/main-grid.component */ "./src/app/component/main-grid/main-grid.component.ts");
/* harmony import */ var _artssetting_artssetting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../artssetting/artssetting.component */ "./src/app/component/artssetting/artssetting.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CharacterDetailComponent = /** @class */ (function () {
    function CharacterDetailComponent(dbService) {
        this.dbService = dbService;
        this.ryuha = '';
        this.charactorData = {};
    }
    CharacterDetailComponent.prototype.changeRyuha = function (target) {
        this.ryuha = target;
    };
    CharacterDetailComponent.prototype.ngOnInit = function () {
        // this.dbService.getCharactorData().subscribe(
        //   ret => {
        //     this.charactorList = ret;
        //   }
        // );
        // if(!this.charactorList){
        //   return;
        // }
        // this.charactorList.forEach(item => {
        //   this.charactorNameList.push(item['charactorName']);
        // });
    };
    CharacterDetailComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        Object.keys(this.basicInformationQuery.last).forEach(function (item) {
            if (_common_constant__WEBPACK_IMPORTED_MODULE_2__["ObjectFilter"].charactorDataFillter.includes(item)) {
                _this.charactorData[item] = _this.basicInformationQuery.last[item];
            }
        });
        this.charactorData['selectedSkillList'] = this.mainGridQuery.last.selectedSkillList;
        this.charactorData['dispArtsArray'] = this.artsSettingQuery.last.dispArtsArray;
        this.charactorData['ryuha'] = this.ryuha;
    };
    CharacterDetailComponent.prototype.registCharactor = function () {
        var _this = this;
        this.dbService.insertData(this.charactorData).subscribe(function (res) {
            // this.charactorNameList = [];
            _this.ngOnInit();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_basic_information_basic_information_component__WEBPACK_IMPORTED_MODULE_3__["BasicInformationComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], CharacterDetailComponent.prototype, "basicInformationQuery", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_main_grid_main_grid_component__WEBPACK_IMPORTED_MODULE_4__["MainGridComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], CharacterDetailComponent.prototype, "mainGridQuery", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_artssetting_artssetting_component__WEBPACK_IMPORTED_MODULE_5__["ArtssettingComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], CharacterDetailComponent.prototype, "artsSettingQuery", void 0);
    CharacterDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-character-detail',
            template: __webpack_require__(/*! ./character-detail.component.html */ "./src/app/component/character-detail/character-detail.component.html"),
            styles: [__webpack_require__(/*! ./character-detail.component.css */ "./src/app/component/character-detail/character-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_service_db_service__WEBPACK_IMPORTED_MODULE_1__["DbService"]])
    ], CharacterDetailComponent);
    return CharacterDetailComponent;
}());



/***/ }),

/***/ "./src/app/component/character-list/character-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/component/character-list/character-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/character-list/character-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/component/character-list/character-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 m-2\">\n  <div class=\"float-left\">\n      <h3>登録済みキャラクター</h3>\n      <li *ngFor=\"let name of charactorNameList\">\n          <a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-keyboard=\"false\" data-target=\"#referModal\" (click)=\"modalOpen(name)\">{{name}}</a>\n      </li>\n  </div>\n</div>\n\n<app-refer-modal [charactorData]=\"modalCharactor\"></app-refer-modal>"

/***/ }),

/***/ "./src/app/component/character-list/character-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/character-list/character-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: CharacterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterListComponent", function() { return CharacterListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_db_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/db.service */ "./src/app/service/db.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharacterListComponent = /** @class */ (function () {
    function CharacterListComponent(dbService) {
        this.dbService = dbService;
        this.charactorNameList = [];
        this.charactorList = [];
        this.modalCharactor = {};
    }
    CharacterListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dbService.getCharactorData().subscribe(function (ret) {
            _this.charactorList = ret;
            console.log(ret);
        }, function (err) {
            console.error(err);
        }, function () {
            if (!_this.charactorList) {
                return;
            }
            _this.charactorList.forEach(function (item) {
                _this.charactorNameList.push(item['charactorName']);
            });
        });
    };
    CharacterListComponent.prototype.modalOpen = function (charactorName) {
        this.modalCharactor = this.charactorList.find(function (value) { return value.charactorName === charactorName; });
    };
    CharacterListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-character-list',
            template: __webpack_require__(/*! ./character-list.component.html */ "./src/app/component/character-list/character-list.component.html"),
            styles: [__webpack_require__(/*! ./character-list.component.css */ "./src/app/component/character-list/character-list.component.css")]
        }),
        __metadata("design:paramtypes", [_service_db_service__WEBPACK_IMPORTED_MODULE_1__["DbService"]])
    ], CharacterListComponent);
    return CharacterListComponent;
}());



/***/ }),

/***/ "./src/app/component/error/error.component.css":
/*!*****************************************************!*\
  !*** ./src/app/component/error/error.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/error/error.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/error/error.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  404 not found\n</p>\n"

/***/ }),

/***/ "./src/app/component/error/error.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/error/error.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
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

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/component/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/component/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/component/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/header/header.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"row\" color=\"primary\">\n  <mat-toolbar-row>\n    <span (click)=\"routing('');\">シノビガミキャラクター保管</span>\n    <div class=\"col-md-1 text-center\">\n      <button mat-stroked-button class=\"ml-2\" (click)=\"routing(urlList.regist)\">登録</button>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <button mat-stroked-button class=\"ml-2\" (click)=\"routing(urlList.characterList)\">一覧</button>\n    </div>\n    <div class=\"col-md-1 offset-md-6 text-center\">\n      <button type=\"button\" class=\"btn btn-success border-dark\" (click)=\"routing(isLogin ?  urlList.myPage : urlList.login)\">{{isLogin ? 'マイページ' : 'ログイン'}}</button>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/component/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/constant */ "./src/app/common/constant.ts");
/* harmony import */ var _common_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/functions */ "./src/app/common/functions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.isLogin = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.urlList = Object.assign({}, _common_constant__WEBPACK_IMPORTED_MODULE_2__["URL_LIST"]);
        console.log(this.urlList);
        this.isLogin = this.getStorage();
    };
    HeaderComponent.prototype.routing = function (target) {
        this.router.navigate([target]);
    };
    HeaderComponent.prototype.getStorage = function () {
        var loginInfo = _common_functions__WEBPACK_IMPORTED_MODULE_3__["WebStorage"].getSessionStorage('loginInfo');
        if (loginInfo && loginInfo.length) {
            return true;
        }
        else {
            return false;
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/component/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/component/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/component/login/login.component.css":
/*!*****************************************************!*\
  !*** ./src/app/component/login/login.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/login/login.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/login/login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>ログイン画面</h1>\n<div class=\"container\" style=\"width: 90%\">\n  <div class=\"row\">\n    <span class=\"col-md-2\">ID</span>\n    <input type=\"text\" class=\"col-md-6\" #id>\n  </div>\n  <div class=\"row\">\n    <span class=\"col-md-2\">パスワード</span>\n    <input type=\"text\" class=\"col-md-6\" #pass>\n  </div>\n  <div class=\"row\">\n    <button mat-stroked-button class=\"mx-auto\" (click)=\"login(id.value, pass.value)\">ログイン</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/component/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _common_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/constant */ "./src/app/common/constant.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/functions */ "./src/app/common/functions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { toBase64String } from '@angular/compiler/src/output/source_map';

var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (id, password) {
        if (!id && !password) {
            return;
        }
        var info = _common_functions__WEBPACK_IMPORTED_MODULE_3__["Base64"].encode(id + password);
        _common_functions__WEBPACK_IMPORTED_MODULE_3__["WebStorage"].setSessionStorage('loginInfo', info);
        this.router.navigate([_common_constant__WEBPACK_IMPORTED_MODULE_0__["URL_LIST"].myPage]);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/component/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/component/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/component/main-grid/main-grid.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/main-grid/main-grid.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/main-grid/main-grid.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/main-grid/main-grid.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\">\n    <input type=\"checkbox\" [(ngModel)]=\"decisionFlg\">判定モード\n</div>\n<div class=\"row\">\n    <div class=\"grid col-md-8\">\n        <ag-grid-angular #agGrid style=\"height: 400px;\" class=\"ag-fresh\" [gridOptions]=\"gridOptions\" (cellClicked)=\"decisionFlg ? decisionClick($event): selectedSkill($event)\"></ag-grid-angular>\n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"card\">\n            <div class=\"card-header alert alert-primary\">\n                <h5>指定特技：{{decisionTarget}}</h5>\n            </div>\n            <div class=\"card-body w-100\">\n                    <div class=\"table table-border\">\n                        <thead>\n                            <tr>\n                                <th style=\"width: 20%\">取得特技</th>\n                                <th style=\"width: 80%\">判定値</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let result of decisionResult; let idx = index\">\n                                <td>{{result.name}}</td>\n                                <td>\n                                    <input type=\"text\" [(ngModel)]=\"result.desisonRes\" class=\"w-75\">\n                                    <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"clipCopy(idx)\">コピー</button>\n                                </td>\n                            </tr>\n                        </tbody>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/component/main-grid/main-grid.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/main-grid/main-grid.component.ts ***!
  \************************************************************/
/*! exports provided: MainGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainGridComponent", function() { return MainGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/constant */ "./src/app/common/constant.ts");
/* harmony import */ var _common_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/functions */ "./src/app/common/functions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainGridComponent = /** @class */ (function () {
    function MainGridComponent() {
        this.ryuha = '';
        this.buttonString = '';
        this.decisionFlg = false;
        this.selectList = ['流派を選択', '斜歯忍軍', '鞍馬神流', 'ハグレモノ', '比良坂機関', '私立御斎学園', '隠忍の血統'];
        this.selectedSkillList = [];
        this.decisionResult = new Array();
    }
    MainGridComponent.prototype.ngOnInit = function () {
        // this.buttonString = '流派を選択'
        this.gridOptions = {};
        // Gridの設定を記述
        this.gridOptions.columnDefs = _common_constant__WEBPACK_IMPORTED_MODULE_1__["GridDefs"].columnDefs;
        this.gridOptions.rowData = _common_constant__WEBPACK_IMPORTED_MODULE_1__["GridDefs"].gridData;
        this.gridOptions.rowSelection = 'multiple'; // 複数選択が出来るように指定
        this.gridOptions.suppressRowClickSelection = true; // チェックボックス以外クリックで反応するか
        this.gridOptions.suppressDragLeaveHidesColumns = true;
        this.gridOptions.suppressMovableColumns = true;
    };
    MainGridComponent.prototype.ngAfterViewInit = function () {
        // Gridサイズ自動調整
        this.gridOptions.api.sizeColumnsToFit();
    };
    MainGridComponent.prototype.ngOnChanges = function () {
        if (this.ryuha) {
            this.pulldownSelect(this.ryuha);
        }
    };
    MainGridComponent.prototype.pulldownSelect = function (event) {
        this.allVisible();
        switch (event) {
            case _common_constant__WEBPACK_IMPORTED_MODULE_1__["GridDefs"].ryuha.hasuba:
                // this.gridOptions.columnApi.setColumnVisible('A', false, 'gridOptionsChanged');
                // this.gridOptions.columnApi.setColumnVisible('B', false, 'gridOptionsChanged');
                this.gridOptions.columnApi.setColumnVisible('B', false);
                this.gridOptions.columnApi.setColumnVisible('A', false);
                break;
            case _common_constant__WEBPACK_IMPORTED_MODULE_1__["GridDefs"].ryuha.kurama:
                this.gridOptions.columnApi.setColumnVisible('B', false);
                this.gridOptions.columnApi.setColumnVisible('C', false);
                // this.gridOptions.columnApi.setColumnVisible('B', false, 'gridOptionsChanged');
                // this.gridOptions.columnApi.setColumnVisible('C', false, 'gridOptionsChanged');
                this.gridOptions.api.sizeColumnsToFit();
                break;
            case _common_constant__WEBPACK_IMPORTED_MODULE_1__["GridDefs"].ryuha.hagure:
                // this.gridOptions.columnApi.setColumnVisible('C', false, 'gridOptionsChanged');
                // this.gridOptions.columnApi.setColumnVisible('D', false, 'gridOptionsChanged');
                this.gridOptions.columnApi.setColumnVisible('C', false);
                this.gridOptions.columnApi.setColumnVisible('D', false);
                break;
            case _common_constant__WEBPACK_IMPORTED_MODULE_1__["GridDefs"].ryuha.hirasaka:
                // this.gridOptions.columnApi.setColumnVisible('D', false, 'gridOptionsChanged');
                // this.gridOptions.columnApi.setColumnVisible('E', false, 'gridOptionsChanged');
                this.gridOptions.columnApi.setColumnVisible('D', false);
                this.gridOptions.columnApi.setColumnVisible('E', false);
                break;
            case _common_constant__WEBPACK_IMPORTED_MODULE_1__["GridDefs"].ryuha.otogi:
                // this.gridOptions.columnApi.setColumnVisible('E', false, 'gridOptionsChanged');
                // this.gridOptions.columnApi.setColumnVisible('F', false, 'gridOptionsChanged');
                this.gridOptions.columnApi.setColumnVisible('E', false);
                this.gridOptions.columnApi.setColumnVisible('F', false);
                break;
            case _common_constant__WEBPACK_IMPORTED_MODULE_1__["GridDefs"].ryuha.oni:
                // this.gridOptions.columnApi.setColumnVisible('F', false, 'gridOptionsChanged');
                // this.gridOptions.columnApi.setColumnVisible('G', false, 'gridOptionsChanged');
                this.gridOptions.columnApi.setColumnVisible('F', false);
                this.gridOptions.columnApi.setColumnVisible('G', false);
                break;
            default:
        }
    };
    MainGridComponent.prototype.allVisible = function () {
        var _this = this;
        this.gridOptions.columnApi.setColumnVisible('A', true);
        this.gridOptions.columnApi.setColumnVisible('B', true);
        this.gridOptions.columnApi.setColumnVisible('C', true);
        this.gridOptions.columnApi.setColumnVisible('D', true);
        this.gridOptions.columnApi.setColumnVisible('E', true);
        this.gridOptions.columnApi.setColumnVisible('F', true);
        this.gridOptions.columnApi.setColumnVisible('G', true);
        // this.gridOptions.columnApi.setColumnVisible('A', true, 'gridOptionsChanged');
        // this.gridOptions.columnApi.setColumnVisible('B', true, 'gridOptionsChanged');
        // this.gridOptions.columnApi.setColumnVisible('C', true, 'gridOptionsChanged');
        // this.gridOptions.columnApi.setColumnVisible('D', true, 'gridOptionsChanged');
        // this.gridOptions.columnApi.setColumnVisible('E', true, 'gridOptionsChanged');
        // this.gridOptions.columnApi.setColumnVisible('F', true, 'gridOptionsChanged');
        // this.gridOptions.columnApi.setColumnVisible('G', true, 'gridOptionsChanged');
        this.gridOptions.api.refreshCells({ force: true });
        setTimeout(function () {
            _this.gridOptions.api.sizeColumnsToFit();
        }, 100);
    };
    MainGridComponent.prototype.selectedSkill = function (clickCell) {
        // 行間は値を持たないため即リターン
        if (!clickCell.value) {
            return;
        }
        clickCell.value.clickFlg = !clickCell.value.clickFlg;
        if (clickCell.event.path.length === 22) {
            if (clickCell.value.clickFlg) {
                clickCell.event.target.style.backgroundColor = 'black';
                clickCell.event.target.style.color = 'white';
                this.selectedSkillList.push(this.getIndex(clickCell));
            }
            else {
                clickCell.event.target.style.backgroundColor = '';
                clickCell.event.target.style.color = 'black';
                this.selectedSkillList = _common_functions__WEBPACK_IMPORTED_MODULE_2__["listDeleteByKey"](this.selectedSkillList, 'name', clickCell.value.data);
            }
        }
        else if (clickCell.event.path.length === 23) {
            if (clickCell.value.clickFlg) {
                clickCell.event.target.parentNode.style.backgroundColor = 'black';
                clickCell.event.target.parentNode.style.color = 'white';
                this.selectedSkillList.push(this.getIndex(clickCell));
            }
            else {
                clickCell.event.target.parentNode.style.backgroundColor = '';
                clickCell.event.target.parentNode.style.color = 'black';
                this.selectedSkillList = _common_functions__WEBPACK_IMPORTED_MODULE_2__["listDeleteByKey"](this.selectedSkillList, 'name', clickCell.value.data);
            }
        }
    };
    MainGridComponent.prototype.decisionClick = function (clickCell) {
        var _this = this;
        // 行間は値を持たないため即リターン
        if (!clickCell.value) {
            return;
        }
        this.decisionTarget = clickCell.value.data;
        // 判定初期化
        this.decisionResult = [];
        var click = this.getColIndex([this.getIndex(clickCell)]).pop();
        this.selectedSkillList = this.getColIndex(this.selectedSkillList);
        this.selectedSkillList.forEach(function (skill) {
            var row = Math.abs(skill.rowIndex - click.rowIndex);
            var col = Math.abs(skill.colIndex - click.colIndex);
            var result = { name: skill.name, desisonRes: '2D6>=' + (row + col + 5) };
            _this.decisionResult.push(result);
        });
    };
    MainGridComponent.prototype.getIndex = function (clickCell) {
        var rowIndex = clickCell.rowIndex + 1;
        var clickIdx = { name: '', colId: '', colIndex: null, rowIndex: null };
        clickIdx['name'] = clickCell.value.data;
        clickIdx['colId'] = clickCell.column.colId;
        clickIdx['rowIndex'] = rowIndex;
        return clickIdx;
    };
    MainGridComponent.prototype.getColIndex = function (clickItems) {
        var allColumns = this.gridOptions.columnApi.getAllColumns();
        var originItems = _common_functions__WEBPACK_IMPORTED_MODULE_2__["deepCopy"](clickItems);
        var colIndex;
        originItems.forEach(function (item, idx) {
            var skipCount = 0;
            for (var i = 0; i < allColumns.length; i++) {
                // 非表示カラムはスキップ(カウントを1減らす)
                if (!allColumns[i].visible) {
                    skipCount++;
                    continue;
                }
                if (allColumns[i].colId === item.colId) {
                    colIndex = i + 1 - skipCount;
                    break;
                }
            }
            originItems[idx].colIndex = colIndex;
        });
        return originItems;
    };
    MainGridComponent.prototype.clipCopy = function (idx) {
        var tempArea = document.createElement('textarea');
        tempArea.textContent = this.decisionResult[idx].desisonRes;
        var bodyElm = document.getElementsByTagName('body')[0];
        bodyElm.appendChild(tempArea);
        tempArea.select();
        document.execCommand('copy');
        bodyElm.removeChild(tempArea);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MainGridComponent.prototype, "ryuha", void 0);
    MainGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-grid',
            template: __webpack_require__(/*! ./main-grid.component.html */ "./src/app/component/main-grid/main-grid.component.html"),
            styles: [__webpack_require__(/*! ./main-grid.component.css */ "./src/app/component/main-grid/main-grid.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainGridComponent);
    return MainGridComponent;
}());



/***/ }),

/***/ "./src/app/component/my-page/my-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/my-page/my-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/my-page/my-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/component/my-page/my-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-2\">\n  <h2>マイページ</h2>\n  <div>\n    <h3>登録キャラクター一覧</h3>\n    <ul>\n      <li *ngFor=\"let character of myCharacterList\">\n        <a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-keyboard=\"false\" data-target=\"#referModal\" (click)=\"modalOpen(character)\">{{character['charactorName']}}</a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<app-refer-modal [charactorData]=\"modalCharacter\"></app-refer-modal>"

/***/ }),

/***/ "./src/app/component/my-page/my-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/my-page/my-page.component.ts ***!
  \********************************************************/
/*! exports provided: MyPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPageComponent", function() { return MyPageComponent; });
/* harmony import */ var _service_db_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../service/db.service */ "./src/app/service/db.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyPageComponent = /** @class */ (function () {
    function MyPageComponent(dbService) {
        this.dbService = dbService;
        this.myCharacterList = new Array();
        this.modalCharacter = {};
    }
    MyPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dbService.getCharactorData('my-account').subscribe(function (res) {
            _this.myCharacterList = res.filter(function (data) { return data['playerName'] === 'Guest'; });
        }, function (err) {
            console.log(err);
        });
    };
    MyPageComponent.prototype.modalOpen = function (character) {
        this.modalCharacter = Object.assign({}, character);
    };
    MyPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-page',
            template: __webpack_require__(/*! ./my-page.component.html */ "./src/app/component/my-page/my-page.component.html"),
            styles: [__webpack_require__(/*! ./my-page.component.css */ "./src/app/component/my-page/my-page.component.css")]
        }),
        __metadata("design:paramtypes", [_service_db_service__WEBPACK_IMPORTED_MODULE_0__["DbService"]])
    ], MyPageComponent);
    return MyPageComponent;
}());



/***/ }),

/***/ "./src/app/component/top/top.component.css":
/*!*************************************************!*\
  !*** ./src/app/component/top/top.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/top/top.component.html":
/*!**************************************************!*\
  !*** ./src/app/component/top/top.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>トップ画面(仮)</h1>\n<ul>\n  <li><a routerLink=\"login\">ログイン</a></li>\n  <li><a routerLink=\"character\">キャラクター詳細</a></li>\n  <li><a routerLink=\"character-list\">キャラクター一覧</a></li>\n</ul>\n"

/***/ }),

/***/ "./src/app/component/top/top.component.ts":
/*!************************************************!*\
  !*** ./src/app/component/top/top.component.ts ***!
  \************************************************/
/*! exports provided: TopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopComponent", function() { return TopComponent; });
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

var TopComponent = /** @class */ (function () {
    function TopComponent() {
    }
    TopComponent.prototype.ngOnInit = function () {
    };
    TopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top',
            template: __webpack_require__(/*! ./top.component.html */ "./src/app/component/top/top.component.html"),
            styles: [__webpack_require__(/*! ./top.component.css */ "./src/app/component/top/top.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopComponent);
    return TopComponent;
}());



/***/ }),

/***/ "./src/app/modal/arts-modal/arts-modal.component.css":
/*!***********************************************************!*\
  !*** ./src/app/modal/arts-modal/arts-modal.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-lg {\n    max-width: 80%;\n}"

/***/ }),

/***/ "./src/app/modal/arts-modal/arts-modal.component.html":
/*!************************************************************!*\
  !*** ./src/app/modal/arts-modal/arts-modal.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- モーダルの設定 -->\n<div class=\"modal fade\" id=\"{{modalId}}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered modal-lg\" style=\"width: 80%\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"modalTitle\">忍法一覧</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <app-arts [selectArtsArray]=\"selectArtsArray\" (regist)=\"registData($event)\"></app-arts>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">閉じる</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"returnData()\">変更を保存</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modal/arts-modal/arts-modal.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modal/arts-modal/arts-modal.component.ts ***!
  \**********************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
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

var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.regist = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.registData = function (event) {
        this.returnList = event.concat();
    };
    ModalComponent.prototype.returnData = function () {
        this.regist.emit(this.returnList);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "modalId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ModalComponent.prototype, "selectArtsArray", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "regist", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-arts-modal',
            template: __webpack_require__(/*! ./arts-modal.component.html */ "./src/app/modal/arts-modal/arts-modal.component.html"),
            styles: [__webpack_require__(/*! ./arts-modal.component.css */ "./src/app/modal/arts-modal/arts-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/modal/refer-modal/refer-modal.component.css":
/*!*************************************************************!*\
  !*** ./src/app/modal/refer-modal/refer-modal.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modal/refer-modal/refer-modal.component.html":
/*!**************************************************************!*\
  !*** ./src/app/modal/refer-modal/refer-modal.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- モーダルの設定 -->\n<div class=\"modal fade\" id=\"referModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered modal-lg\" style=\"width: 80%\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        {{charactorData.charactorName}}\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"mtb-1\">\n          <table class=\"table-bordered\">\n            <tr>\n              <th>プレイヤー名</th>\n              <td colspan=\"3\">\n                <input id=\"player\" type=\"text\" class=\"w-100\" [value]=\"charactorData.playerName\" readonly>\n                <!-- {{charactorData.playerName}} -->\n              </td>\n            </tr>\n            <tr>\n              <th>キャラクター名</th>\n              <td colspan=\"3\">\n                <input id=\"charactor\" type=\"text\" class=\"w-100\" [value]=\"charactorData.charactorName\" readonly>\n              </td>\n            </tr>\n            <tr>\n              <th>カナ</th>\n              <td colspan=\"3\">\n                <input id=\"kana\" type=\"text\" class=\"w-100\" [value]=\"charactorData.kana\" readonly>\n              </td>\n            </tr>\n            <tr>\n              <th>レギュレーション</th>\n              <td colspan=\"3\">\n                <input id=\"regulation\" type=\"text\" class=\"w-100\" [value]=\"charactorData.regulation\" readonly>\n              </td>\n            </tr>\n            <tr>\n              <th>タイプ</th>\n              <td colspan=\"3\">\n                <input id=\"type\" type=\"text\" [value]=\"'忍者'\" class=\"w-100\" [value]=\"charactorData.type\" readonly>\n              </td>\n            </tr>\n            <tr>\n              <th>上位流派</th>\n              <td>\n                <input id=\"jouiryuha\" type=\"text\" [value]=\"charactorData.ryuha\" readonly>\n              </td>\n              <th>流派</th>\n              <td>\n                <input id=\"kairyuha\" type=\"text\" [value]=\"charactorData.kairyuha\" readonly>\n              </td>\n            </tr>\n            <tr>\n              <th>流儀</th>\n              <td colspan=\"3\">\n                <input id=\"ryugi\" type=\"text\" class=\"w-100\" [value]=\"charactorData.ryugi\" readonly>\n              </td>\n            </tr>\n            <tr>\n              <th>仇敵</th>\n              <td colspan=\"3\">\n                <input id=\"enemy\" type=\"text\" class=\"w-100\" [value]=\"charactorData.enemy\" readonly>\n              </td>\n            </tr>\n            <tr>\n              <th>階級</th>\n              <td>\n                <input id=\"rank\" type=\"text\" [value]=\"charactorData.rank\" readonly>\n              </td>\n              <th>功績</th>\n              <td>\n                <input id=\"achievement\" type=\"text\" [value]=\"charactorData.achievement\" readonly>\n              </td>\n            </tr>\n            <tr>\n              <th>年齢</th>\n              <td>\n                <input id=\"age\" type=\"text\" [value]=\"charactorData.age\" readonly>\n              </td>\n              <th>性別</th>\n              <td>\n                <input id=\"gender\" type=\"text\" [value]=\"charactorData.gender\" readonly>\n              </td>\n            </tr>\n            <tr>\n              <th>表の顔</th>\n              <td>\n                <input id=\"face\" type=\"text\" [value]=\"charactorData.face\" readonly>\n              </td>\n              <th>信念</th>\n              <td>\n                <input id=\"belief\" type=\"text\" [value]=\"charactorData.belief\" readonly>\n              </td>\n            </tr>\n          </table>\n        </div>\n        <div class=\"mt-2\">\n          <strong>選択特技</strong>\n          <ul>\n            <li *ngFor=\"let skill of charactorData.selectedSkillList\">\n              {{skill.name}}\n            </li>\n          </ul>\n        </div>\n        <div class=\"mt-1\">\n          <table class=\"table-bordered\">\n            <thead>\n              <tr>\n                <th width=\"10%\">忍法名</th>\n                <th width=\"10%\">タイプ</th>\n                <th width=\"10%\">指定特技</th>\n                <th width=\"5%\">間合</th>\n                <th width=\"10%\">コスト</th>\n                <th width=\"40%\">エフェクト</th>\n                <th width=\"5%\">参照P</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let arts of charactorData.dispArtsArray;let index = index\">\n                <td>\n                  <input type=\"text\" class=\"w-100\" [value]=\"arts.name\" readonly>\n                </td>\n                <td>\n                  <input type=\"text\" class=\"w-100\" [value]=\"arts.type\" readonly>\n                </td>\n                <td>\n                  <input type=\"text\" class=\"w-100\" [value]=\"arts.targetSkill\" readonly>\n                </td>\n                <td>\n                  <input type=\"text\" class=\"w-100\" [value]=\"arts.range\" readonly>\n                </td>\n                <td>\n                  <input type=\"text\" class=\"w-100\" [value]=\"arts.cost\" readonly>\n                </td>\n                <td>\n                  <input type=\"text\" class=\"w-100\" [value]=\"arts.description\" readonly>\n                </td>\n                <td>2</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">閉じる</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modal/refer-modal/refer-modal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modal/refer-modal/refer-modal.component.ts ***!
  \************************************************************/
/*! exports provided: ReferModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferModalComponent", function() { return ReferModalComponent; });
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

var ReferModalComponent = /** @class */ (function () {
    function ReferModalComponent() {
    }
    ReferModalComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReferModalComponent.prototype, "charactorData", void 0);
    ReferModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-refer-modal',
            template: __webpack_require__(/*! ./refer-modal.component.html */ "./src/app/modal/refer-modal/refer-modal.component.html"),
            styles: [__webpack_require__(/*! ./refer-modal.component.css */ "./src/app/modal/refer-modal/refer-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReferModalComponent);
    return ReferModalComponent;
}());



/***/ }),

/***/ "./src/app/service/db.service.ts":
/*!***************************************!*\
  !*** ./src/app/service/db.service.ts ***!
  \***************************************/
/*! exports provided: DbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbService", function() { return DbService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _common_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/constant */ "./src/app/common/constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { isArray } from 'util';
// import * as character from 'assets/characterList';
var DbService = /** @class */ (function () {
    function DbService(http) {
        this.http = http;
        var port = location.port;
        if (port === '4200') {
            this.serverFlg = false;
        }
        else if (port === '3000') {
            this.serverFlg = true;
        }
        else {
            console.log(port);
        }
        // this.header = {'content-type':'appication/json'}
    }
    /**
     *
     */
    DbService.prototype.getArtsData = function () {
        var url = '/db/arts';
        if (this.serverFlg) {
            return this.http.get(url);
        }
        else {
            // stub用
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                observer.next(_common_constant__WEBPACK_IMPORTED_MODULE_3__["ArtsInfo"].arts);
                observer.complete();
            });
        }
    };
    ;
    /**
     * キャラクタ一覧取得
     */
    DbService.prototype.getCharactorData = function (param) {
        var url = '/db/charactor';
        var opt = { param: '' };
        if (typeof param === 'string') {
            opt.param = param;
        }
        if (this.serverFlg) {
            return this.http.get(url);
        }
        else {
            // stub用
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                observer.next(_common_constant__WEBPACK_IMPORTED_MODULE_3__["CHARACTER"].charactor);
                observer.complete();
            });
        }
    };
    ;
    /**
     *
     * @param data
     */
    DbService.prototype.insertData = function (data) {
        var url = '/db/charactor';
        if (this.serverFlg) {
            return this.http.post(url, JSON.parse(data));
        }
        else {
            var old = JSON.parse(window.localStorage.getItem('charactor'));
            var temp = [];
            if (old) {
                if (!Array.isArray(old)) {
                    temp.push(old);
                }
                else {
                    temp = old.concat();
                }
            }
            temp.push(data);
            console.log(temp);
            window.localStorage.setItem('charactor', JSON.stringify(temp));
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                observer.next({ code: 200, res: 'ok' });
                observer.complete();
            });
        }
    };
    DbService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DbService);
    return DbService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/app.module */ "./src/app/app.module.ts");




if (environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Tetsuya/Document/Program/webApp/shinobi-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map