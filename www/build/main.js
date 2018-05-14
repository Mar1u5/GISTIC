webpackJsonp([4],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPastillaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pacientes_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pills_list_pills_list__ = __webpack_require__(52);
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
        this.splitted = [];
        this.item = navParams.get('item');
    }
    AddPastillaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPastillaPage');
    };
    AddPastillaPage.prototype.addPastilla = function (item) {
        console.log(this.dia);
        for (var _i = 0, _a = this.dia; _i < _a.length; _i++) {
            var i = _a[_i];
            for (var _b = 0, _c = this.franja; _b < _c.length; _b++) {
                var j = _c[_b];
                console.log(i);
                this.pill = { nombre: this.pastilla, color: this.color, cantidad: this.cantidad, dia: i, franja: j };
                this.PacientesService.addPastillas(item, this.pill);
            }
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pills_list_pills_list__["a" /* PillsListPage */], { item: item });
    };
    AddPastillaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-pastilla',template:/*ion-inline-start:"/Users/albert/Desktop/GISTIC/src/pages/add-pastilla/add-pastilla.html"*/'<!--\n  Generated template for the AddPastillaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>addPastilla</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div>\n        <ion-list>\n      \n          <ion-item>\n            <ion-label floating>Nombre Pastilla</ion-label>\n            <ion-input id="nombre" type="text" [(ngModel)]=pastilla></ion-input>\n          </ion-item>\n          <!--<ion-label>Dia</ion-label>\n              <ion-select [(ngModel)]="dia" multiple="True">\n                <ion-option>Lunes</ion-option>\n                <ion-option>Martes</ion-option>\n                <ion-option>Azul</ion-option>\n                <ion-option>Naranja</ion-option>\n                <ion-option>Amarillo</ion-option>\n              </ion-select>-->\n          <ion-item>\n              <ion-label floating>Color</ion-label>\n              <ion-input id="color" type="text" [(ngModel)]=color></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label floating>Cantidad</ion-label>\n              <ion-input id="cantidad" type="number" [(ngModel)]=cantidad></ion-input>\n          </ion-item>\n          <ion-item class="dia">\n              <ion-label>Día</ion-label>\n              <ion-select [(ngModel)]="dia" multiple="True">\n                  <ion-option>Lunes</ion-option>\n                  <ion-option>Martes</ion-option>\n                  <ion-option>Miercoles</ion-option>\n                  <ion-option>Jueves</ion-option>\n                  <ion-option>Viernes</ion-option>\n                  <ion-option>Sabado</ion-option>\n                </ion-select>\n           </ion-item>\n           <ion-item class="dia">\n              <ion-label>Franja horaria</ion-label>\n              <ion-select [(ngModel)]="franja" multiple="True">\n                  <ion-option>Desayuno</ion-option>\n                  <ion-option>Comida</ion-option>\n                  <ion-option>Cena</ion-option>\n                </ion-select>\n           </ion-item>\n        \n        </ion-list>\n        <button ion-button block (click)="addPastilla(item)">Guardar</button>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/Users/albert/Desktop/GISTIC/src/pages/add-pastilla/add-pastilla.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_pacientes_service__["a" /* pacientesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_pacientes_service__["a" /* pacientesService */]) === "function" && _c || Object])
    ], AddPastillaPage);
    return AddPastillaPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=add-pastilla.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnadirPacientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pacientes_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(47);
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
    AnadirPacientePage.prototype.addNote = function () {
        this.PacientesService.addPaciente(this.paciente);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    AnadirPacientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-anadir-paciente',template:/*ion-inline-start:"/Users/albert/Desktop/GISTIC/src/pages/anadir-paciente/anadir-paciente.html"*/'<!--\n  Generated template for the AnadirPacientePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Añadir Paciente</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Nombre Paciente</ion-label>\n      <ion-input id="nombre" type="text" [(ngModel)]=paciente></ion-input>\n    </ion-item>\n  \n  </ion-list>\n  <button ion-button block (click)="addNote()">Guardar Paciente</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/albert/Desktop/GISTIC/src/pages/anadir-paciente/anadir-paciente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_pacientes_service__["a" /* pacientesService */]])
    ], AnadirPacientePage);
    return AnadirPacientePage;
}());

//# sourceMappingURL=anadir-paciente.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-pastilla/add-pastilla.module": [
		274,
		3
	],
	"../pages/anadir-paciente/anadir-paciente.module": [
		275,
		2
	],
	"../pages/pills-list/pills-list.module": [
		276,
		1
	],
	"../pages/selector/selector.module": [
		277,
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
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_selector_selector__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_pacientes_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_anadir_paciente_anadir_paciente__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_pills_list_pills_list__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_add_pastilla_add_pastilla__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
                __WEBPACK_IMPORTED_MODULE_11__pages_add_pastilla_add_pastilla__["a" /* AddPastillaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-pastilla/add-pastilla.module#AddPastillaPageModule', name: 'AddPastillaPage', segment: 'add-pastilla', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/anadir-paciente/anadir-paciente.module#AnadirPacientePageModule', name: 'AnadirPacientePage', segment: 'anadir-paciente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pills-list/pills-list.module#PillsListPageModule', name: 'PillsListPage', segment: 'pills-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selector/selector.module#SelectorPageModule', name: 'SelectorPage', segment: 'selector', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_selector_selector__["a" /* SelectorPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_anadir_paciente_anadir_paciente__["a" /* AnadirPacientePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pills_list_pills_list__["a" /* PillsListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_add_pastilla_add_pastilla__["a" /* AddPastillaPage */]
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

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(47);
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

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pacientesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var pacientesService = /** @class */ (function () {
    function pacientesService() {
        //pacientes = ["paciente 1", "paciente 2", "paciente 3","paciente 4","paciente 5","paciente 6","paciente 7","paciente 8","paciente 9", "paciente 10"];
        this.pacientes = [
            { nombre: 'Paciente1', pastillas: [
                    { nombre: 'Omeprazol', color: 'Verde', cantidad: '1', dia: '', franja: '' },
                    { nombre: 'Paracetamol', color: 'Rojo', cantidad: '0.5', dia: '', franja: '' }
                ] },
            { nombre: 'Paciente2', pastillas: [
                    { nombre: 'Omeprazol', color: 'Verde', cantidad: '1', dia: '', franja: '' },
                    { nombre: 'Paracetamol', color: 'Rojo', cantidad: '0.5', dia: '', franja: '' }
                ] }
        ];
    }
    pacientesService.prototype.getPacientes = function () {
        return this.pacientes;
    };
    pacientesService.prototype.addPaciente = function (paciente) {
        this.pacientes.push({ nombre: paciente, pastillas: [{ nombre: '', color: '', cantidad: '', dia: '', franja: '' }] });
    };
    pacientesService.prototype.deletePaciente = function (paciente) {
        for (var i = 0; i < this.pacientes.length; i++) {
            if (this.pacientes[i].nombre == paciente.nombre) {
                this.pacientes.splice(i, 1);
            }
        }
    };
    pacientesService.prototype.addPastillas = function (paciente, pastilla) {
        for (var i = 0; i < this.pacientes.length; i++) {
            if (this.pacientes[i].nombre == paciente.nombre) {
                this.pacientes[i].pastillas.push(pastilla);
            }
        }
    };
    pacientesService.prototype.deletePastilla = function (paciente, pastilla) {
        for (var i = 0; i < this.pacientes.length; i++) {
            if (this.pacientes[i].nombre == paciente.nombre) {
                for (var j = 0; j < this.pacientes[i].pastillas.length; j++) {
                    if (this.pacientes[i].pastillas[j].nombre == pastilla.nombre) {
                        this.pacientes[i].pastillas.splice(j, 1);
                    }
                }
            }
        }
    };
    pacientesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], pacientesService);
    return pacientesService;
}());

//# sourceMappingURL=pacientes.service.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selector_selector__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pacientes_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__anadir_paciente_anadir_paciente__ = __webpack_require__(104);
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
        this.navCtrl = navCtrl;
        this.PacientesService = PacientesService;
        this.pacientes = [];
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/albert/Desktop/GISTIC/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n		Lista Pacientes\n	</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n  <div class="pacientes" *ngFor="let paciente of pacientes">\n      <div class="item">\n        <div class="nombre" (click)="nextPage(paciente)">\n          <p>{{ paciente.nombre }}</p>\n        </div>\n        <p class="trash" (click)="deletePaciente(paciente)"><ion-icon id="trash" name="md-trash"></ion-icon></p>\n      </div>\n    </div>\n\n  <ion-fab right bottom>\n     <ion-icon name="md-add-circle" (click)="addPaciente()"></ion-icon>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/albert/Desktop/GISTIC/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_pacientes_service__["a" /* pacientesService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PillsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pacientes_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_pastilla_add_pastilla__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selector_selector__ = __webpack_require__(53);
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
            selector: 'page-pills-list',template:/*ion-inline-start:"/Users/albert/Desktop/GISTIC/src/pages/pills-list/pills-list.html"*/'<!--\n  Generated template for the PillsListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only (click)="goBack(item)">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n      </ion-buttons>\n    <ion-title>{{item.nombre}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n  <div class="pacientes" *ngFor="let i of item.pastillas">\n      <div class="item">\n          <div class="nombre">\n            <p>{{i.nombre}}, {{i.color}}, {{i.cantidad}}, {{i.dia}}, {{i.franja}}</p>  \n          </div>\n          <p class="trash" (click)="deletePastilla(item,i)"><ion-icon id="trash" name="md-trash"></ion-icon></p>\n        </div>\n  </div>  \n    <ion-fab right bottom>\n       <ion-icon name="md-add-circle" (click)="goToAddPage(item)"></ion-icon>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/albert/Desktop/GISTIC/src/pages/pills-list/pills-list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_pacientes_service__["a" /* pacientesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_pacientes_service__["a" /* pacientesService */]) === "function" && _c || Object])
    ], PillsListPage);
    return PillsListPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=pills-list.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pills_list_pills_list__ = __webpack_require__(52);
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
    SelectorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-selector',template:/*ion-inline-start:"/Users/albert/Desktop/GISTIC/src/pages/selector/selector.html"*/'<!--\n  Generated template for the SelectorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only (click)="goBack()">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n      </ion-buttons>\n    <ion-title>{{item.nombre}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<button id="boton1" ion-button (click)="nextPage(item)">ADMINISTRAR</button>\n	<button id="boton2" ion-button>PLANIFICAR</button>\n</ion-content>\n'/*ion-inline-end:"/Users/albert/Desktop/GISTIC/src/pages/selector/selector.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SelectorPage);
    return SelectorPage;
}());

//# sourceMappingURL=selector.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map