webpackJsonp([6],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPastillaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pacientes_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pills_list_pills_list__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddPastillaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddPastillaPage = /** @class */ (function () {
    function AddPastillaPage(navCtrl, navParams, PacientesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.PacientesService = PacientesService;
        this.toma = [];
        this.splitted = [];
        this.item = navParams.get('item');
        this.pastillas = PacientesService.getPastillas();
    }
    AddPastillaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPastillaPage');
    };
    AddPastillaPage.prototype.addPastilla = function (item) {
        var d = [];
        for (var _i = 0, _a = this.dia; _i < _a.length; _i++) {
            var i = _a[_i];
            var t = [];
            for (var _b = 0, _c = this.franja; _b < _c.length; _b++) {
                var j = _c[_b];
                t.push({ nombre_f: j, tomado: false });
            }
            d.push({ nombre_d: i, franja: t });
        }
        this.PacientesService.addPastillas(item, { nombre_p: this.pasti, color: this.color, cantidad: this.cantidad, dia: d });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pills_list_pills_list__["a" /* PillsListPage */], { item: item });
    };
    AddPastillaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-pastilla',template:/*ion-inline-start:"/Users/albert/Desktop/GISTIC/src/pages/add-pastilla/add-pastilla.html"*/'<!--\n  Generated template for the AddPastillaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>addPastilla</ion-title>\n    <ion-buttons right>\n        <img src="assets/imgs/pillnow.png" alt="pillnow">\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div>\n        <ion-list>\n          <ion-item class="dia">\n            <ion-label>Pastilla</ion-label>\n            <ion-select [(ngModel)]="pasti" multiple="false">\n                <ion-option *ngFor="let pastilla of pastillas">{{pastilla.nombre}}</ion-option>\n              </ion-select>\n         </ion-item>\n          <ion-item>\n              <ion-label floating>Color</ion-label>\n              <ion-input id="color" type="text" [(ngModel)]=color></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label floating>Cantidad</ion-label>\n              <ion-input id="cantidad" type="number" [(ngModel)]=cantidad></ion-input>\n          </ion-item>\n          <ion-item class="dia">\n              <ion-label>Día</ion-label>\n              <ion-select [(ngModel)]="dia" multiple="True">\n                  <ion-option>Lunes</ion-option>\n                  <ion-option>Martes</ion-option>\n                  <ion-option>Miercoles</ion-option>\n                  <ion-option>Jueves</ion-option>\n                  <ion-option>Viernes</ion-option>\n                  <ion-option>Sabado</ion-option>\n                  <ion-option>Domingo</ion-option>\n                </ion-select>\n           </ion-item>\n           <ion-item class="dia">\n              <ion-label>Franja horaria</ion-label>\n              <ion-select [(ngModel)]="franja" multiple="True">\n                  <ion-option>Desayuno</ion-option>\n                  <ion-option>Comida</ion-option>\n                  <ion-option>Cena</ion-option>\n                </ion-select>\n           </ion-item>\n        \n        </ion-list>\n        <button ion-button block (click)="addPastilla(item)">Guardar</button>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/Users/albert/Desktop/GISTIC/src/pages/add-pastilla/add-pastilla.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_pacientes_service__["a" /* pacientesService */]])
    ], AddPastillaPage);
    return AddPastillaPage;
}());

//# sourceMappingURL=add-pastilla.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnadirPacientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pacientes_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AnadirPacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnadirPacientePage = /** @class */ (function () {
    function AnadirPacientePage(navCtrl, navParams, PacientesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.PacientesService = PacientesService;
    }
    AnadirPacientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnadirPacientePage');
    };
    AnadirPacientePage.prototype.addPaciente = function () {
        this.PacientesService.addPaciente({ id: Date.now(), nombre: this.paciente, pastillas: [] });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    AnadirPacientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-anadir-paciente',template:/*ion-inline-start:"/Users/albert/Desktop/GISTIC/src/pages/anadir-paciente/anadir-paciente.html"*/'<!--\n  Generated template for the AnadirPacientePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Añadir Paciente</ion-title>\n    <ion-buttons right>\n        <img src="assets/imgs/pillnow.png" alt="pillnow" height="30">\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Nombre Paciente</ion-label>\n      <ion-input id="nombre" type="text" [(ngModel)]=paciente></ion-input>\n    </ion-item>\n  \n  </ion-list>\n  <button ion-button block (click)="addPaciente()">Guardar Paciente</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/albert/Desktop/GISTIC/src/pages/anadir-paciente/anadir-paciente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_pacientes_service__["a" /* pacientesService */]])
    ], AnadirPacientePage);
    return AnadirPacientePage;
}());

//# sourceMappingURL=anadir-paciente.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComidasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dias_dias__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pacientes_service__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ComidasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComidasPage = /** @class */ (function () {
    function ComidasPage(navCtrl, navParams, PacientesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.PacientesService = PacientesService;
        this.buttonColor = '#fff';
        this.bool = true;
        this.item = navParams.get('item');
        this.dia = navParams.get('dia');
    }
    ComidasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComidasPage');
    };
    ComidasPage.prototype.goBack = function (item) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__dias_dias__["a" /* DiasPage */], { item: item });
    };
    ComidasPage.prototype.changeColor = function (pastilla, dia, franja) {
        this.PacientesService.tomado(this.item, pastilla, dia, franja);
    };
    ComidasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comidas',template:/*ion-inline-start:"/Users/albert/Desktop/GISTIC/src/pages/comidas/comidas.html"*/'<!--\n  Generated template for the ComidasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only (click)="goBack(item)">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n      </ion-buttons>\n    <ion-title>{{dia}}</ion-title>\n    <ion-buttons right>\n            <img src="assets/imgs/pillnow.png" alt="pillnow" height="30">\n        </ion-buttons>\n  </ion-navbar>\n  \n\n</ion-header>\n\n<ion-content>\n\n    <ion-card>\n        <ion-card-header class="carta">\n          Desayuno \n       </ion-card-header>\n      \n        <ion-list>      \n          <div *ngFor="let i of item.pastillas">\n              <div *ngFor="let j of i.dia">\n                    <div *ngFor="let k of j.franja">\n\n              <div *ngIf="j.nombre_d == dia && k.nombre_f == \'Desayuno\'">\n                  <!--<ion-item (click)="changeColor(i,j,k);" [ngClass]="k.tomado ? \'verd\' : \'blanc\'">\n                      <div class="tomar">\n                          <div class="nombre">{{i.nombre_p}}</div>\n                          <div class="cantidad">Cant: {{i.cantidad}}</div>\n                        </div> \n                    </ion-item>-->\n                    <ion-item (click)="changeColor(i,j,k);" [ngClass]="k.tomado ? \'verd\' : \'blanc\'">\n                        <div class="tomar">\n                            <div class="nombre">{{i.nombre_p}}</div>\n                            <div>{{i.color}}</div>\n                            <div class="cantidad">Cant: {{i.cantidad}}</div>\n                    </div> \n                    </ion-item>\n              </div>\n            </div>\n            </div></div>\n        </ion-list>\n      </ion-card>\n      <ion-card>\n            <ion-card-header class="carta">\n              Comida \n           </ion-card-header>\n          \n            <ion-list>      \n              <div *ngFor="let i of item.pastillas">\n                  <div *ngFor="let j of i.dia">\n                        <div *ngFor="let k of j.franja">\n    \n                  <div *ngIf="j.nombre_d == dia && k.nombre_f == \'Comida\'">\n                      <ion-item (click)="changeColor(i,j,k);" [ngClass]="k.tomado ? \'verd\' : \'blanc\'">\n                          <div class="tomar">\n                              <div class="nombre">{{i.nombre_p}}</div>\n                              <div>{{i.color}}</div>\n                              <div class="cantidad">Cant: {{i.cantidad}}</div>\n                            </div> \n                        </ion-item>\n                  </div>\n                </div>\n                </div></div>\n            </ion-list>\n          </ion-card>\n          <ion-card>\n                <ion-card-header class="carta">\n                  Cena \n               </ion-card-header>\n              \n                <ion-list>      \n                  <div *ngFor="let i of item.pastillas">\n                      <div *ngFor="let j of i.dia">\n                            <div *ngFor="let k of j.franja">\n        \n                      <div *ngIf="j.nombre_d == dia && k.nombre_f == \'Cena\'">\n                          <ion-item (click)="changeColor(i,j,k);" [ngClass]="k.tomado ? \'verd\' : \'blanc\'">\n                              <div class="tomar">\n                                  <div class="nombre">{{i.nombre_p}}</div>\n                                  <div>{{i.color}}</div>\n                                  <div class="cantidad">Cant: {{i.cantidad}}</div>\n                                </div> \n                            </ion-item>\n                      </div>\n                    </div>\n                    </div></div>\n                </ion-list>\n              </ion-card>\n      <!--<ion-card>\n          <ion-card-header class="carta">\n            Comida \n         </ion-card-header>\n        \n          <ion-list>      \n            <div *ngFor="let i of item.pastillas">\n                <div *ngIf="i.dia == dia && i.franja == \'Comida\'">\n                    <ion-item (click)="changeColor(i);" [style.background-color]="i.tomado ? \'#17e61785\' : \'white\'">\n                        <div class="tomar">\n                            <div class="nombre">{{i.nombre}}</div>\n                            <div class="cantidad">Cant: {{i.cantidad}}</div>\n                          </div> \n                      </ion-item>\n                </div>\n              </div>\n          </ion-list>\n        </ion-card>\n        <ion-card>\n            <ion-card-header class="carta">\n              Cena \n           </ion-card-header>\n          \n            <ion-list>      \n              <div *ngFor="let i of item.pastillas">\n                  <div *ngIf="i.dia == dia && i.franja == \'Cena\'">\n                      <ion-item (click)="changeColor(i);" [style.background-color]="i.tomado ? \'#17e61785\' : \'white\'">\n                          <div class="tomar">\n                              <div class="nombre">{{i.nombre}}</div>\n                              <div class="cantidad">Cant: {{i.cantidad}}</div>\n                            </div> \n                        </ion-item>\n                  </div>\n                </div>\n            </ion-list>\n          </ion-card>-->\n\n</ion-content>\n'/*ion-inline-end:"/Users/albert/Desktop/GISTIC/src/pages/comidas/comidas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_pacientes_service__["a" /* pacientesService */]])
    ], ComidasPage);
    return ComidasPage;
}());

//# sourceMappingURL=comidas.js.map

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-pastilla/add-pastilla.module": [
		452,
		5
	],
	"../pages/anadir-paciente/anadir-paciente.module": [
		453,
		4
	],
	"../pages/comidas/comidas.module": [
		454,
		3
	],
	"../pages/dias/dias.module": [
		455,
		2
	],
	"../pages/pills-list/pills-list.module": [
		456,
		1
	],
	"../pages/selector/selector.module": [
		457,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 193;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(308);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_selector_selector__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_pacientes_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_anadir_paciente_anadir_paciente__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_pills_list_pills_list__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_add_pastilla_add_pastilla__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_dias_dias__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_comidas_comidas__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var firebaseConfig = {
    apiKey: "AIzaSyAdoBWhc24E1FkRq1WNh88c-OfB9R9vY-I",
    authDomain: "pillnow-670f8.firebaseapp.com",
    databaseURL: "https://pillnow-670f8.firebaseio.com",
    storageBucket: "pillnow-670f8.appspot.com",
    messagingSenderId: "777992716325"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_selector_selector__["a" /* SelectorPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_anadir_paciente_anadir_paciente__["a" /* AnadirPacientePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pills_list_pills_list__["a" /* PillsListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_add_pastilla_add_pastilla__["a" /* AddPastillaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_dias_dias__["a" /* DiasPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_comidas_comidas__["a" /* ComidasPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-pastilla/add-pastilla.module#AddPastillaPageModule', name: 'AddPastillaPage', segment: 'add-pastilla', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/anadir-paciente/anadir-paciente.module#AnadirPacientePageModule', name: 'AnadirPacientePage', segment: 'anadir-paciente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comidas/comidas.module#ComidasPageModule', name: 'ComidasPage', segment: 'comidas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dias/dias.module#DiasPageModule', name: 'DiasPage', segment: 'dias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pills-list/pills-list.module#PillsListPageModule', name: 'PillsListPage', segment: 'pills-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selector/selector.module#SelectorPageModule', name: 'SelectorPage', segment: 'selector', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["a" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_selector_selector__["a" /* SelectorPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_anadir_paciente_anadir_paciente__["a" /* AnadirPacientePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pills_list_pills_list__["a" /* PillsListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_add_pastilla_add_pastilla__["a" /* AddPastillaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_dias_dias__["a" /* DiasPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_comidas_comidas__["a" /* ComidasPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__services_pacientes_service__["a" /* pacientesService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pacientesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var pacientesService = /** @class */ (function () {
    function pacientesService(afDB) {
        this.afDB = afDB;
        //pacientes = ["paciente 1", "paciente 2", "paciente 3","paciente 4","paciente 5","paciente 6","paciente 7","paciente 8","paciente 9", "paciente 10"];
        this.pacientes = [{ id: 123, nombre: 'Paciente1', pastillas: [
                    { nombre_p: 'Omeprazol', color: 'Verde', cantidad: '2', dia: [
                            { nombre_d: 'Lunes', franja: [
                                    { nombre_f: 'Desayuno', tomado: false }
                                ] }
                        ] }
                ] }];
        /*pacientes = [
            {id: 123 ,nombre: 'Paciente1', pastillas:[
                {id_pastilla: 1, tomas: [
                    {id_tomado: 345}
                ]}
            ] }
        ];*/
        this.pastillas = [
            { nombre: 'Omeprazol' },
            { nombre: 'Nolotil' },
            { nombre: 'Diazepan' },
            { nombre: 'Aspirina' },
            { nombre: 'Dalsi' },
            { nombre: 'Ibuprofeno' }
        ];
        this.tomas = [
            { id_tomado: 345, cantidad: 1, dia: 'Miercoles', franja: 'Desayuno', tomado: false }
        ];
    }
    //public pacientes;
    pacientesService.prototype.getPacientes = function () {
        return this.pacientes;
        //return this.afDB.list('pacientes').valueChanges();
    };
    pacientesService.prototype.getPastillas = function () {
        return this.pastillas;
    };
    pacientesService.prototype.addPaciente = function (paciente) {
        //this.afDB.database.ref('pacientes/'+paciente.id).set(paciente);
        this.pacientes.push(paciente);
    };
    pacientesService.prototype.deletePaciente = function (paciente) {
        for (var i = 0; i < this.pacientes.length; i++) {
            if (this.pacientes[i].id == paciente.id) {
                this.pacientes.splice(i, 1);
            }
        }
    };
    pacientesService.prototype.addPastillas = function (paciente, pastilla) {
        for (var i = 0; i < this.pacientes.length; i++) {
            if (this.pacientes[i].id == paciente.id) {
                this.pacientes[i].pastillas.push(pastilla);
            }
        }
    };
    pacientesService.prototype.deletePastilla = function (paciente, pastilla) {
        for (var i = 0; i < this.pacientes.length; i++) {
            if (this.pacientes[i].nombre == paciente.nombre) {
                for (var j = 0; j < this.pacientes[i].pastillas.length; j++) {
                    if (this.pacientes[i].pastillas[j].nombre_p == pastilla.nombre_p) {
                        this.pacientes[i].pastillas.splice(j, 1);
                    }
                }
            }
        }
    };
    pacientesService.prototype.tomado = function (paciente, pastilla, dia, franja) {
        for (var i = 0; i < this.pacientes.length; i++) {
            if (this.pacientes[i].id == paciente.id) {
                for (var j = 0; j < this.pacientes[i].pastillas.length; j++) {
                    if (this.pacientes[i].pastillas[j].nombre_p == pastilla.nombre_p) {
                        for (var k = 0; k < this.pacientes[i].pastillas[j].dia.length; k++) {
                            if (this.pacientes[i].pastillas[j].dia[k].nombre_d == dia.nombre_d) {
                                for (var t = 0; t < this.pacientes[i].pastillas[j].dia[k].franja.length; t++) {
                                    if (this.pacientes[i].pastillas[j].dia[k].franja[t].nombre_f == franja.nombre_f) {
                                        this.pacientes[i].pastillas[j].dia[k].franja[t].tomado = !this.pacientes[i].pastillas[j].dia[k].franja[t].tomado;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    pacientesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], pacientesService);
    return pacientesService;
}());

//# sourceMappingURL=pacientes.service.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/albert/Desktop/GISTIC/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/albert/Desktop/GISTIC/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pills_list_pills_list__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dias_dias__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SelectorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectorPage = /** @class */ (function () {
    function SelectorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = navParams.get('item');
    }
    SelectorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectorPage');
    };
    SelectorPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    SelectorPage.prototype.nextPage = function (item) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pills_list_pills_list__["a" /* PillsListPage */], { item: item });
    };
    SelectorPage.prototype.nextDias = function (item) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__dias_dias__["a" /* DiasPage */], { item: item });
    };
    SelectorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-selector',template:/*ion-inline-start:"/Users/albert/Desktop/GISTIC/src/pages/selector/selector.html"*/'<!--\n  Generated template for the SelectorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only (click)="goBack()">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n      </ion-buttons>\n    <ion-title>{{item.nombre}}</ion-title>\n    <ion-buttons right>\n        <img src="assets/imgs/pillnow.png" alt="pillnow" height="30">\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<button id="boton1" ion-button (click)="nextPage(item)">PLANIFICAR</button>\n	<button id="boton2" ion-button (click)="nextDias(item)">ADMINISTRAR</button>\n</ion-content>\n'/*ion-inline-end:"/Users/albert/Desktop/GISTIC/src/pages/selector/selector.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SelectorPage);
    return SelectorPage;
}());

//# sourceMappingURL=selector.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selector_selector__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pacientes_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__anadir_paciente_anadir_paciente__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, PacientesService) {
        /*this.PacientesService.getPacientes().subscribe(pacientes =>{
          this.pacientes = pacientes;
        })*/
        this.navCtrl = navCtrl;
        this.PacientesService = PacientesService;
        this.pacientes = PacientesService.getPacientes();
    }
    HomePage.prototype.nextPage = function (item) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__selector_selector__["a" /* SelectorPage */], { item: item });
    };
    HomePage.prototype.addPaciente = function () {
        //this.navCtrl.setRoot(AnadirPacientePage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__anadir_paciente_anadir_paciente__["a" /* AnadirPacientePage */]);
    };
    HomePage.prototype.deletePaciente = function (paciente) {
        this.PacientesService.deletePaciente(paciente);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/albert/Desktop/GISTIC/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n		Lista Pacientes\n  </ion-title>\n  <ion-buttons right>\n      <img src="assets/imgs/pillnow.png" alt="pillnow" height="30">\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n  <div class="pacientes" *ngFor="let paciente of pacientes">\n      <div class="item">\n        <div class="nombre" (click)="nextPage(paciente)">\n          <p>{{ paciente.nombre }}</p>\n        </div>\n        <p class="trash" (click)="deletePaciente(paciente)"><ion-icon id="trash" name="md-trash"></ion-icon></p>\n      </div>\n    </div>\n\n  <ion-fab right bottom>\n     <ion-icon name="md-add-circle" (click)="addPaciente()"></ion-icon>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/albert/Desktop/GISTIC/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_pacientes_service__["a" /* pacientesService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PillsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pacientes_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_pastilla_add_pastilla__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selector_selector__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PillsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PillsListPage = /** @class */ (function () {
    function PillsListPage(navCtrl, navParams, PacientesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.PacientesService = PacientesService;
        this.item = navParams.get('item');
    }
    PillsListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PillsListPage');
    };
    PillsListPage.prototype.deletePastilla = function (paciente, pastilla) {
        this.PacientesService.deletePastilla(paciente, pastilla);
    };
    PillsListPage.prototype.goToAddPage = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_pastilla_add_pastilla__["a" /* AddPastillaPage */], { item: item });
    };
    PillsListPage.prototype.goBack = function (item) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__selector_selector__["a" /* SelectorPage */], { item: item });
    };
    PillsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pills-list',template:/*ion-inline-start:"/Users/albert/Desktop/GISTIC/src/pages/pills-list/pills-list.html"*/'<!--\n  Generated template for the PillsListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only (click)="goBack(item)">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n      </ion-buttons>\n    <ion-title>{{item.nombre}}</ion-title>\n    <ion-buttons right>\n        <img src="assets/imgs/pillnow.png" alt="pillnow" height="30">\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n  <div class="pacientes" *ngFor="let i of item.pastillas">\n      <div class="item">\n          <div class="nombre">\n            <p>{{i.nombre_p}}, {{i.color}}, {{i.cantidad}}</p>\n            <p><span *ngFor="let j of i.dia">{{j.nombre_d}} </span></p>  \n          </div>\n          <p class="trash" (click)="deletePastilla(item,i)"><ion-icon id="trash" name="md-trash"></ion-icon></p>\n        </div>\n  </div> \n    <ion-fab right bottom>\n       <ion-icon name="md-add-circle" (click)="goToAddPage(item)"></ion-icon>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/albert/Desktop/GISTIC/src/pages/pills-list/pills-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_pacientes_service__["a" /* pacientesService */]])
    ], PillsListPage);
    return PillsListPage;
}());

//# sourceMappingURL=pills-list.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comidas_comidas__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selector_selector__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DiasPage = /** @class */ (function () {
    function DiasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = navParams.get('item');
    }
    DiasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DiasPage');
    };
    DiasPage.prototype.comidas = function (item, dia) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__comidas_comidas__["a" /* ComidasPage */], { item: item, dia: dia });
    };
    DiasPage.prototype.goBack = function (item) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__selector_selector__["a" /* SelectorPage */], { item: item });
    };
    DiasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dias',template:/*ion-inline-start:"/Users/albert/Desktop/GISTIC/src/pages/dias/dias.html"*/'<!--\n  Generated template for the DiasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only (click)="goBack(item)">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n      </ion-buttons>\n    <ion-title>{{item.nombre}}</ion-title>\n    <ion-buttons right>\n            <img src="assets/imgs/pillnow.png" alt="pillnow" height="30">\n        </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <button class="dias" ion-button block color="secondary" (click)="comidas(item,\'Lunes\')">Lunes</button>\n    <button class="dias" ion-button block color="secondary" (click)="comidas(item,\'Martes\')">Martes</button>\n    <button class="dias" ion-button block color="secondary" (click)="comidas(item,\'Miercoles\')">Miercoles</button>\n    <button class="dias" ion-button block color="secondary" (click)="comidas(item,\'Jueves\')">Jueves</button>\n    <button class="dias" ion-button block color="secondary" (click)="comidas(item,\'Viernes\')">Viernes</button>\n    <button class="dias" ion-button block color="secondary" (click)="comidas(item,\'Sabado\')">Sábado</button>\n    <button class="dias" ion-button block color="secondary" (click)="comidas(item,\'Domingo\')">Domingo</button>\n</ion-content>\n'/*ion-inline-end:"/Users/albert/Desktop/GISTIC/src/pages/dias/dias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], DiasPage);
    return DiasPage;
}());

//# sourceMappingURL=dias.js.map

/***/ })

},[288]);
//# sourceMappingURL=main.js.map