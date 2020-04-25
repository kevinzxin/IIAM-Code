webpackJsonp([26],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddNotePage = /** @class */ (function () {
    function AddNotePage(navCtrl, navParams, camera, noteService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.noteService = noteService;
        this.toastCtrl = toastCtrl;
        this.displayImage = null;
        this.note = {
            date: new Date(),
            title: undefined,
            content: undefined,
            origin: undefined,
            imageName: undefined
        };
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            content: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            date: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
        });
    }
    AddNotePage.prototype.takePicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            saveToPhotoAlbum: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            _this.displayImage = 'data:image/jpeg;base64,' + imagePath;
        }, function (err) {
            _this.presentToast('Error while selecting image');
        });
    };
    AddNotePage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    AddNotePage.prototype.saveNote = function (note) {
        note.createDate = this.createFileName();
        if (this.displayImage !== null) {
            note.img = this.displayImage;
        }
        this.noteService.saveNote(note);
        this.navCtrl.pop();
    };
    AddNotePage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    AddNotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-note',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\add-note\add-note.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Add Note</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <button ion-button type="sbumit" class="login-style" color="secondary" (click)="takePicture()" full>Add a picture</button>\n  <img [src]="displayImage" style="width:100%" [hidden]="displayImage === null">\n\n  <form [formGroup] = "formGroup" (ngSubmit) = "saveNote(formGroup.value)">\n    \n    <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" formControlName="date"></ion-datetime>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label>Title</ion-label>\n      <ion-input type="text" name="title" formControlName="title" required></ion-input>\n      <div class="alert" *ngIf="!formGroup.controls[\'title\'].valid && formGroup.controls[\'title\'].touched">\n        {{titleAlert}}\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-textarea placeholder="Comments" type="text" name="content" formControlName="content" rows="4" required></ion-textarea>\n      <div class="alert" *ngIf="!formGroup.controls[\'content\'].valid && formGroup.controls[\'content\'].touched">\n        {{contentAlert}}\n      </div>\n    </ion-item>\n\n    <button ion-button type="submit" [disabled]="!formGroup.valid" class="login-style" color="secondary" full>Save Note</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\add-note\add-note.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__["a" /* NoteService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], AddNotePage);
    return AddNotePage;
}());

//# sourceMappingURL=add-note.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConditionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_condition_add_condition__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_condition_service_condition_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_condition_view_condition__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConditionsPage = /** @class */ (function () {
    function ConditionsPage(navCtrl, navParams, platformFour, actionsheetCtrlFour, conditionService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platformFour = platformFour;
        this.actionsheetCtrlFour = actionsheetCtrlFour;
        this.conditionService = conditionService;
    }
    ConditionsPage.prototype.homeFromFour = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    ConditionsPage.prototype.ionViewWillEnter = function () {
        this.conditionsArray = this.getConditions();
    };
    ConditionsPage.prototype.ionViewDidEnter = function () {
        this.conditionsArray = this.getConditions();
    };
    ConditionsPage.prototype.getConditions = function () {
        return this.conditionService.getConditions();
    };
    ConditionsPage.prototype.getCondition = function (createDate) {
        var _this = this;
        this.conditionService.getCondition(createDate).then(function (n) {
            _this.condition = n;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__view_condition_view_condition__["a" /* ViewConditionPage */], { condition: _this.condition });
        });
    };
    ConditionsPage.prototype.openMenuFour = function () {
        var _this = this;
        var originMyConditions = {
            title: 4
        };
        var actionSheetFour = this.actionsheetCtrlFour.create({
            title: 'Options',
            cssClass: 'action-sheets-basic-page-four',
            buttons: [
                {
                    text: 'Add Condition',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_condition_add_condition__["a" /* AddConditionPage */], originMyConditions);
                    }
                },
            ]
        });
        actionSheetFour.present();
    };
    ConditionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-conditions',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\conditions\conditions.html"*/'<ion-header class="header-style">\n  <ion-row>\n    <ion-col col-2>\n      <button ion-button class="header-button" (click)="homeFromFour()" clear icon-only float-left><ion-icon name="md-arrow-back" class="header-icon"></ion-icon></button>\n    </ion-col >\n    <ion-col col-8>\n        <ion-label class="header-font">My Conditions</ion-label>\n    </ion-col>\n    <ion-col col-2 >\n        <button ion-button class="header-button" (click)="openMenuFour()" clear icon-only float-right><ion-icon name="md-create" class="header-icon"></ion-icon></button>\n    </ion-col>\n  </ion-row>\n  </ion-header>\n\n\n<ion-content padding>\n\n  <ion-card *ngFor="let condition of conditionsArray | async" (click)="getCondition(condition.createDate)">\n    <img [src]= condition.img style="width: 100%" [hidden]="condition.img == null">\n    <h3 class="card-style-border-top">Condition: {{condition.name}}</h3>\n    <h3 class="card-style-middle">Symptoms: {{condition.symptoms}}</h3>\n    <h3 class="card-style-middle">Management: {{condition.management}}</h3>\n    <h3 class="card-style-border-bottom">Additional comments: {{condition.addComments}}</h3>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\conditions\conditions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__providers_condition_service_condition_service__["a" /* ConditionServiceProvider */]])
    ], ConditionsPage);
    return ConditionsPage;
}());

//# sourceMappingURL=conditions.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_medication_add_medication__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_medication_service_medication_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_medication_view_medication__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MedicationsPage = /** @class */ (function () {
    function MedicationsPage(navCtrl, navParams, platformSeven, actionsheetCtrlThree, medicationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platformSeven = platformSeven;
        this.actionsheetCtrlThree = actionsheetCtrlThree;
        this.medicationService = medicationService;
    }
    MedicationsPage.prototype.homeFromThree = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    MedicationsPage.prototype.ionViewWillEnter = function () {
        this.medicationsArray = this.getMedications();
    };
    MedicationsPage.prototype.ionViewDidEnter = function () {
        this.medicationsArray = this.getMedications();
    };
    MedicationsPage.prototype.getMedications = function () {
        return this.medicationService.getMedications();
    };
    MedicationsPage.prototype.getMedication = function (createDate) {
        var _this = this;
        this.medicationService.getMedication(createDate).then(function (n) {
            _this.medication = n;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__view_medication_view_medication__["a" /* ViewMedicationPage */], { medication: _this.medication });
        });
    };
    MedicationsPage.prototype.openMenuThree = function () {
        var _this = this;
        var originMyMedications = {
            title: 3
        };
        var actionSheetThree = this.actionsheetCtrlThree.create({
            title: 'Options',
            cssClass: 'action-sheets-basic-page-three',
            buttons: [
                {
                    text: 'Add a new medication',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_medication_add_medication__["a" /* AddMedicationPage */], originMyMedications);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: !this.platformSeven.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheetThree.present();
    };
    MedicationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-medications',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\medications\medications.html"*/'<ion-header class="header-style">\n  <ion-row>\n    <ion-col col-2>\n      <button ion-button class="header-button" (click)="homeFromThree()" clear icon-only float-left><ion-icon name="md-arrow-back" class="header-icon"></ion-icon></button>\n    </ion-col >\n    <ion-col col-8>\n        <ion-label class="header-font">My Medications</ion-label>\n    </ion-col>\n    <ion-col col-2 >\n        <button ion-button class="header-button" (click)="openMenuThree()" clear icon-only float-right><ion-icon name="md-create" class="header-icon"></ion-icon></button>\n    </ion-col>\n  </ion-row>\n  </ion-header>\n\n<ion-content padding>\n\n    <ion-card *ngFor="let medication of medicationsArray | async" (click)=getMedication(medication.createDate)>\n        <img [src]= medication.img style="width: 100%" [hidden]="medication.img == null">\n        <h3 class="card-style-border-top">Name: {{medication.name}}</h3>\n        <h3 class="card-style-middle">Dosing: {{medication.dose}} {{medication.unit}}</h3>\n        <h3 class="card-style-middle" [hidden]="medication.unitComments == null">Additional dosing info: {{medication.unitComments}}</h3>\n        <h3 class="card-style-middle">Route: {{medication.route}}</h3>\n        <h3 class="card-style-middle" [hidden]="medication.routeComments == null">Additional route info: {{medication.routeComments}}</h3>\n        <h3 class="card-style-border-bottom">Frequency: {{medication.frequency}}</h3>\n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\medications\medications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__providers_medication_service_medication_service__["a" /* MedicationServiceProvider */]])
    ], MedicationsPage);
    return MedicationsPage;
}());

//# sourceMappingURL=medications.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAbilityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_ability_add_ability__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ability_service_ability_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_ability_view_ability__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyAbilityPage = /** @class */ (function () {
    function MyAbilityPage(navCtrl, navParams, platformTwo, actionsheetCtrlTwo, abilityService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platformTwo = platformTwo;
        this.actionsheetCtrlTwo = actionsheetCtrlTwo;
        this.abilityService = abilityService;
    }
    MyAbilityPage.prototype.homeFromTwo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    MyAbilityPage.prototype.ionViewWillEnter = function () {
        this.abilitiesArray = this.getAbilities();
    };
    MyAbilityPage.prototype.ionViewDidEnter = function () {
        this.abilitiesArray = this.getAbilities();
    };
    MyAbilityPage.prototype.getAbilities = function () {
        return this.abilityService.getAbilities();
    };
    MyAbilityPage.prototype.getAbility = function (createDate) {
        var _this = this;
        this.abilityService.getAbility(createDate).then(function (n) {
            _this.ability = n;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__view_ability_view_ability__["a" /* ViewAbilityPage */], { ability: _this.ability });
        });
    };
    MyAbilityPage.prototype.openMenuTwo = function () {
        var _this = this;
        var originMyAbilities = {
            title: 2
        };
        var actionSheetTwo = this.actionsheetCtrlTwo.create({
            title: 'Options',
            cssClass: 'action-sheets-basic-page-two',
            buttons: [
                {
                    text: 'Add Ability',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_ability_add_ability__["a" /* AddAbilityPage */], originMyAbilities);
                    }
                },
            ]
        });
        actionSheetTwo.present();
    };
    MyAbilityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-ability',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\my-ability\my-ability.html"*/'<ion-header class="header-style">\n  <ion-row>\n    <ion-col col-2>\n      <button ion-button class="header-button" (click)="homeFromTwo()" clear icon-only float-left><ion-icon name="md-arrow-back" class="header-icon"></ion-icon></button>\n    </ion-col >\n    <ion-col col-8>\n        <ion-label class="header-font">My Abilities</ion-label>\n    </ion-col>\n    <ion-col col-2 >\n        <button ion-button class="header-button" (click)="openMenuTwo()" clear icon-only float-right><ion-icon name="md-create" class="header-icon"></ion-icon></button>\n    </ion-col>\n  </ion-row>\n  </ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngFor="let ability of abilitiesArray | async" (click)="getAbility(ability.createDate)" class="card-style">\n    <img [src]= ability.img style="width: 100%" [hidden]="ability.img == null">\n    <h3 class="card-style-border-top">Ability: {{ability.ability}}</h3>\n    <h3 class="card-style-middle">Assistance: {{ability.selection}}</h3>\n    <h3 class="card-style-border-bottom">Comments: {{ability.content}}</h3>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\my-ability\my-ability.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__providers_ability_service_ability_service__["a" /* AbilityServiceProvider */]])
    ], MyAbilityPage);
    return MyAbilityPage;
}());

//# sourceMappingURL=my-ability.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_note_add_note__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_note_service_note_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_note_view_note__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bio_bio__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_demographic_service_demographic_service__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams, platformOne, actionsheetCtrlOne, noteService, demographicServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platformOne = platformOne;
        this.actionsheetCtrlOne = actionsheetCtrlOne;
        this.noteService = noteService;
        this.demographicServiceProvider = demographicServiceProvider;
    }
    AboutPage.prototype.homeFromOne = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    AboutPage.prototype.ionViewWillEnter = function () {
        this.aboutMeArray = this.getNotes();
        this.bioArray = this.getBio();
    };
    AboutPage.prototype.ionViewDidEnter = function () {
        this.aboutMeArray = this.getNotes();
        this.bioArray = this.getBio();
    };
    AboutPage.prototype.getNotes = function () {
        return this.noteService.getAllNotes();
    };
    AboutPage.prototype.getNote = function (createDate) {
        var _this = this;
        this.noteService.getNote(createDate).then(function (n) {
            _this.note = n;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__view_note_view_note__["a" /* ViewNotePage */], { note: _this.note });
        });
    };
    AboutPage.prototype.getBio = function () {
        return this.demographicServiceProvider.getDemographics();
    };
    AboutPage.prototype.openMenuOne = function () {
        var _this = this;
        var originAboutMe = {
            noteOrigin: 1
        };
        var actionSheetOne = this.actionsheetCtrlOne.create({
            title: 'Options',
            cssClass: 'action-sheets-basic-page-one',
            buttons: [
                {
                    text: 'Fill biographic information',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__bio_bio__["a" /* BioPage */]);
                    }
                },
                {
                    text: 'Add note',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_note_add_note__["a" /* AddNotePage */], originAboutMe);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: !this.platformOne.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheetOne.present();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\about\about.html"*/'<ion-header class="header-style">\n<ion-row>\n  <ion-col col-2>\n    <button ion-button class="header-button" (click)="homeFromOne()" clear icon-only float-left><ion-icon name="md-arrow-back" class="header-icon"></ion-icon></button>\n  </ion-col >\n  <ion-col col-8>\n      <ion-label class="header-font">About Me</ion-label>\n  </ion-col>\n  <ion-col col-2 >\n      <button ion-button class="header-button" (click)="openMenuOne()" clear icon-only float-right><ion-icon name="md-create" class="header-icon"></ion-icon></button>\n  </ion-col>\n</ion-row>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngFor= "let bio of bioArray | async">\n    <h3 class="card-style-border-bottom"> </h3>\n    <h3 class="card-style-middle">Name: {{bio.name}}</h3>\n    <h3 class="card-style-middle">Age: {{bio.age}}</h3>\n    <h3 class="card-style-middle">Gender: {{bio.gender}}</h3>\n    <h3 class="card-style-border-bottom">Allergies: {{bio.allergies}}</h3>\n  </ion-card>\n\n    <ion-card *ngFor= "let note of aboutMeArray | async" (click)="getNote(note.createDate)">\n      <img [src]= note.img style="width: 100%" [hidden]="note.img == null">\n      <h3 class="card-style-border-top">Title: {{note.title}}</h3>\n      <h3 class="card-style-middle">Date: {{note.date | date}}</h3>\n      <h3 class="card-style-border-bottom">Content: {{note.content}}</h3>\n    </ion-card>\n   \n</ion-content>\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__providers_note_service_note_service__["a" /* NoteService */], __WEBPACK_IMPORTED_MODULE_7__providers_demographic_service_demographic_service__["a" /* DemographicServiceProvider */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAbilityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ability_service_ability_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddAbilityPage = /** @class */ (function () {
    function AddAbilityPage(navCtrl, navParams, camera, abilityService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.abilityService = abilityService;
        this.toastCtrl = toastCtrl;
        this.displayImage = null;
        this.ability = {
            ability: undefined,
            selection: undefined,
            content: undefined
        };
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            ability: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            selection: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            content: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]()
        });
    }
    AddAbilityPage.prototype.takePicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            saveToPhotoAlbum: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            _this.displayImage = 'data:image/jpeg;base64,' + imagePath;
        }, function (err) {
            _this.presentToast('Error while selecting image');
        });
    };
    AddAbilityPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    AddAbilityPage.prototype.saveAbility = function (ability) {
        ability.createDate = this.createFileName();
        if (this.displayImage !== null) {
            ability.img = this.displayImage;
        }
        this.abilityService.saveAbility(ability);
        this.navCtrl.pop();
    };
    AddAbilityPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    AddAbilityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-ability',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\add-ability\add-ability.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Add Ability</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button type="submit" class="login-style" color="secondary" (click)="takePicture()" full>Add a Picture</button>\n  <img [src]="displayImage" style="width: 100%" [hidden]="displayImage === null">\n\n  <form [formGroup]="formGroup" (ngSubmit)="saveAbility(formGroup.value)">\n\n    <ion-item>\n      <ion-label>Ability</ion-label>\n      <ion-input type="text" name="Ability" formControlName="ability" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Select</ion-label>\n      <ion-select [(ngModel)]="selection" formControlName="selection" required>\n        <ion-option value="Can independently perform task">Can independently perform task</ion-option>\n        <ion-option value="Can partly perform task">Can partly perform task</ion-option>\n        <ion-option value="Needs help performing task">Needs help performing task</ion-option>\n      </ion-select>  \n    </ion-item>\n\n    <ion-item>\n      <ion-textarea placeholder="Additional Comments:" type="text" name="comment" rows="4" formControlName="content" required></ion-textarea>\n    </ion-item>\n\n    <button ion-button type="submit" [disabled]="!formGroup.valid" class="login-style" color="secondary" full>Save</button>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\add-ability\add-ability.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__providers_ability_service_ability_service__["a" /* AbilityServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], AddAbilityPage);
    return AddAbilityPage;
}());

//# sourceMappingURL=add-ability.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddConditionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_condition_service_condition_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddConditionPage = /** @class */ (function () {
    function AddConditionPage(navCtrl, navParams, camera, conditionService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.conditionService = conditionService;
        this.toastCtrl = toastCtrl;
        this.newFileName = null;
        this.displayImage = null;
        this.condition = {
            name: undefined,
            symptoms: undefined,
            management: undefined,
            addComments: undefined
        };
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            symptoms: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            management: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            addComments: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]()
        });
    }
    AddConditionPage.prototype.takePicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            saveToPhotoAlbum: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            _this.displayImage = 'data:image/jpeg;base64,' + imagePath;
        }, function (err) {
            _this.presentToast('Error while selecting image');
        });
    };
    AddConditionPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    AddConditionPage.prototype.saveCondition = function (condition) {
        condition.createDate = this.createFileName();
        if (this.displayImage !== null) {
            condition.img = this.displayImage;
        }
        this.conditionService.saveCondition(condition);
        this.navCtrl.pop();
    };
    AddConditionPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    AddConditionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-condition',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\add-condition\add-condition.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Add Condition</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<button ion-button type="submit" class="login-style" color="secondary" (click)="takePicture()" full>Add a picture</button>\n<img [src]="displayImage" style="width: 100%" [hidden]="displayImage === null">\n\n<form [formGroup]="formGroup" (ngSubmit)="saveCondition(formGroup.value)">\n  \n  <ion-item>\n    <ion-label>Condition</ion-label>\n    <ion-input type="text" name="name" formControlName="name" required></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-textarea placeholder="Symptoms:" type="text" name="symptoms" rows="4" formControlName="symptoms" required></ion-textarea>\n  </ion-item>\n\n  <ion-item>\n    <ion-textarea placeholder="Management" type="text" name="management" rows="4" formControlName="management" required></ion-textarea>\n  </ion-item>\n\n  <ion-item>\n    <ion-textarea placeholder="Additional Comments:" type="text" name="addComments" rows="4" formControlName="addComments"></ion-textarea>\n  </ion-item>\n\n  <button ion-button type="submit" [disabled]="!formGroup.valid" class="login-style" color="secondary" full>Save</button>\n</form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\add-condition\add-condition.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__providers_condition_service_condition_service__["a" /* ConditionServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], AddConditionPage);
    return AddConditionPage;
}());

//# sourceMappingURL=add-condition.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDocumentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_document_document__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// we will leave the noteService component of this page out for now
// we can use note model, or can create a seperate model for documents
var AddDocumentPage = /** @class */ (function () {
    function AddDocumentPage(navCtrl, navParams, camera, transfer, file, actionSheetCtrl, toastCtrl, platform, storage, documentProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.storage = storage;
        this.documentProvider = documentProvider;
        this.displayImage = null;
        this.displayImages = [];
        this.document = {
            documentName: undefined,
            date: undefined,
            numPages: undefined
        };
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormGroup */]({
            documentName: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](),
            date: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](),
            numPages: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]()
        });
    }
    AddDocumentPage.prototype.takePicture = function () {
        var _this = this;
        //enables user to take picture via camera
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            saveToPhotoAlbum: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            _this.displayImage = 'data:image/jpeg;base64,' + imagePath;
            _this.displayImages.push(_this.displayImage);
            _this.storage.set('displayImages', _this.displayImages);
        }, function (err) {
            _this.presentToast('Error while selecting image');
        });
    };
    AddDocumentPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    AddDocumentPage.prototype.saveDocument = function (document) {
        document.createDate = this.createFileName();
        document.imgs = this.displayImages;
        this.documentProvider.saveDocument(document);
        //let saveObj = {imageList: this.displayImages, name: document.documentName, date: document.date, numPages: document.numPages, documentName: documentName}
        //this.documentProvider.saveDocument(saveObj);
        this.navCtrl.pop();
    };
    AddDocumentPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    AddDocumentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-document',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\add-document\add-document.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Add Document</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button full type="submit" class="login-style" color="secondary" (click)= takePicture()>Add a Picture</button>\n\n  <ion-card *ngFor="let entry of displayImages">\n  <img [src]="entry" style="width: 100%" >\n  </ion-card>\n\n  <form [formGroup] = "formGroup" (ngSubmit) = "saveDocument(formGroup.value)">\n    <ion-item>\n      <ion-label>Document Name:</ion-label>\n      <ion-input type="text" name="documentName" formControlName="documentName" required></ion-input>\n      <div class="alert" *ngIf="!formGroup.controls[\'documentName\'].valid && formGroup.controls[\'documentName\'].touched">\n        {{documentNameAlert}}\n      </div>\n    </ion-item> \n\n    <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" name="date" formControlName="date"></ion-datetime>\n      <div class="alert" *ngIf="!formGroup.controls[\'date\'].valid && formGroup.controls[\'date\'].touched">\n        {{dateAlert}}\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Pages in document:</ion-label>\n      <ion-input type="text" name="numPages" formControlName="numPages"></ion-input>\n    </ion-item>\n    <div class="alert" *ngIf="!formGroup.controls[\'numPages\'].valid && formGroup.controls[\'numPages\'].touched">\n      {{numPagesAlert}}\n    </div>\n\n    <button ion-button type="submit" [disabled]="!formGroup.valid" class="login-style" color="secondary" full>Save Document</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\add-document\add-document.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__providers_document_document__["a" /* DocumentProvider */]])
    ], AddDocumentPage);
    return AddDocumentPage;
}());

//# sourceMappingURL=add-document.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMedicationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_medication_service_medication_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddMedicationPage = /** @class */ (function () {
    function AddMedicationPage(navCtrl, navParams, camera, medicationService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.medicationService = medicationService;
        this.toastCtrl = toastCtrl;
        this.displayImage = null;
        this.medication = {
            name: undefined,
            dose: undefined,
            unit: undefined,
            unitComments: undefined,
            route: undefined,
            routeComments: undefined,
            frequency: undefined,
        };
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            dose: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            unit: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            unitComments: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            route: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            routeComments: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            frequency: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
        });
    }
    AddMedicationPage.prototype.takePicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            saveToPhotoAlbum: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            _this.displayImage = 'data:image/jpeg;base64,' + imagePath;
        }, function (err) {
            _this.presentToast('Error while selecting image');
        });
    };
    AddMedicationPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    AddMedicationPage.prototype.saveMedication = function (medication) {
        medication.createDate = this.createFileName();
        if (this.displayImage !== null) {
            medication.img = this.displayImage;
        }
        this.medicationService.saveMedication(medication);
        this.navCtrl.pop();
    };
    AddMedicationPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    AddMedicationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-medication',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\add-medication\add-medication.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Add Medication</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button type="submit" class="login-style" color="secondary" (click)="takePicture()" full>Add a picture</button>\n  <img [src]="displayImage" style="width: 100%" [hidden]="displayImage === null">\n  \n  <form [formGroup]="formGroup" (ngSubmit)="saveMedication(formGroup.value)">\n\n  <ion-item>\n    <ion-label>Medication name:</ion-label>\n    <ion-input type="text" name="name" formControlName="name" required></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Dose:</ion-label>\n    <ion-input type="text" name="dose" formControlName="dose" required></ion-input>\n  </ion-item>\n\n<ion-item>\n  <ion-label>Dose unit:</ion-label>\n  <ion-select [(ngModel)]="unit" formControlName="unit" interface="popover" required>\n    <ion-option value="mg">mg</ion-option>\n    <ion-option value="mg/ml">mg/ml</ion-option>\n    <ion-option value="mcg/ml">mcg/ml</ion-option>\n    <ion-option value="U/ml">U/ml</ion-option>\n    <ion-option value="Other">Other</ion-option>\n  </ion-select>  \n</ion-item>\n\n<ion-item>\n  <ion-textarea placeholder="Additional dose info:" type="text" name="unitComments" formControlName="unitComments" rows="4"></ion-textarea>\n</ion-item>\n\n<ion-item>\n  <ion-label>Route:</ion-label>\n  <ion-select [(ngModel)]="route" formControlName="route" interface="popover" required>\n    <ion-option value="Oral">Oral</ion-option>\n    <ion-option value="Injection">Injection</ion-option>\n    <ion-option value="Ocular">Ocular</ion-option>\n    <ion-option value="Otic">Otic</ion-option>\n    <ion-option value="Other">Other</ion-option>\n  </ion-select>  \n</ion-item>\n\n<ion-item>\n  <ion-textarea placeholder="Additional route info:" type="text" name="routeComments" formControlName="routeComments" rows="4"></ion-textarea>\n</ion-item>\n\n<ion-item>\n    <ion-label>Frequency:</ion-label>\n    <ion-textarea type="text" name="frequency" formControlName="frequency" rows="2" required></ion-textarea>\n  </ion-item>\n\n<button ion-button type="submit" class="login-style" color="secondary" full>Save</button>\n\n</form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\add-medication\add-medication.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__providers_medication_service_medication_service__["a" /* MedicationServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], AddMedicationPage);
    return AddMedicationPage;
}());

//# sourceMappingURL=add-medication.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_demographic_service_demographic_service__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BioPage = /** @class */ (function () {
    function BioPage(navCtrl, navParams, actionSheetCtrl, toastCtrl, demographicService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.demographicService = demographicService;
        this.bio = {
            name: undefined,
            age: undefined,
            gender: undefined,
            allergies: undefined
        };
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            age: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            gender: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            allergies: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]()
        });
    }
    BioPage.prototype.ionViewWillEnter = function () {
        this.demographicService.clearDemographics();
    };
    BioPage.prototype.saveBioInfo = function (bio) {
        this.demographicService.saveDemographic(bio);
        this.navCtrl.pop();
        this.presentToast('Information has been successfully stored!');
    };
    BioPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 1000,
            position: 'top'
        });
        toast.present();
    };
    BioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bio',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\bio\bio.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Biographic information</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n    <form [formGroup]="formGroup" (ngSubmit)="saveBioInfo(formGroup.value)">\n\n  <ion-item>\n    <ion-label>Name</ion-label>\n    <ion-input type="text" name="name" formControlName="name" required></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Age</ion-label>\n    <ion-input type="text" name="age" formControlName="age" required></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Gender</ion-label>\n    <ion-input type="text" name="gender" formControlName="gender" required></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Allergies</ion-label>\n    <ion-input type="text" name="allergies" formControlName="allergies" required></ion-input>\n  </ion-item>\n\n  <button ion-button type="submit" [disabled]="!formGroup.valid" class="login-style" color="secondary" full>Save</button>\n\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\bio\bio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_demographic_service_demographic_service__["a" /* DemographicServiceProvider */]])
    ], BioPage);
    return BioPage;
}());

//# sourceMappingURL=bio.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewMedicationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_medication_service_medication_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_medication_edit_medication__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewMedicationPage = /** @class */ (function () {
    function ViewMedicationPage(navCtrl, navParams, medicationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.medicationService = medicationService;
        this.medication = this.navParams.get('medication');
    }
    ViewMedicationPage.prototype.deleteMedication = function (createDate) {
        this.medicationService.deleteMedication(createDate);
        this.navCtrl.pop();
    };
    ViewMedicationPage.prototype.editMedication = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_medication_edit_medication__["a" /* EditMedicationPage */], { medication: this.medication });
    };
    ViewMedicationPage.prototype.return = function () {
        this.navCtrl.pop();
    };
    ViewMedicationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-medication',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\view-medication\view-medication.html"*/'\n<ion-header class="header-style">\n  <ion-row>\n    <ion-col col-2>\n      <button ion-button class="header-button" (click)="return()" clear icon-only float-left><ion-icon name="md-arrow-back" class="header-icon"></ion-icon></button>\n    </ion-col >\n    <ion-col col-8>\n        <ion-label class="header-font">View Medication</ion-label>\n    </ion-col>\n    <ion-col col-2 >\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <img [src]= medication.img style="width: 100%" [hidden]="medication.img == null">\n      <ion-card-title>\n        {{medication.name}}\n      </ion-card-title>\n      <h3>Dosing: {{medication.dose}} {{medication.unit}}</h3>\n      <h3>Route: {{medication.route}}</h3>\n      <h3>Frequency: {{medication.frequency}}</h3>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <button ion-button class="button-style" color="secondary" block (click)= "editMedication()">Edit Medication</button>\n  <button ion-button class="button-style" color="secondary" block (click)= "deleteMedication(medication.createDate)">Delete Medication</button>\n</ion-footer>'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\view-medication\view-medication.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_medication_service_medication_service__["a" /* MedicationServiceProvider */]])
    ], ViewMedicationPage);
    return ViewMedicationPage;
}());

//# sourceMappingURL=view-medication.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditMedicationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_medication_service_medication_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__medications_medications__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditMedicationPage = /** @class */ (function () {
    function EditMedicationPage(navCtrl, navParams, medicationService, camera, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.medicationService = medicationService;
        this.camera = camera;
        this.toastCtrl = toastCtrl;
        this.name = '';
        this.dose = '';
        this.unit = '';
        this.unitComments = '';
        this.route = '';
        this.routeComments = '';
        this.frequency = '';
        this.displayImage = null;
        this.medication = this.navParams.get('medication');
        this.formGroupEdit = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.medication.name),
            dose: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.medication.dose),
            unit: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.medication.unit),
            unitComments: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.medication.unitComments),
            route: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.medication.route),
            routeComments: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.medication.routeComments),
            frequency: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.medication.frequency),
        });
    }
    EditMedicationPage.prototype.retakePicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            saveToPhotoAlbum: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            _this.medication.img = 'data:image/jpeg;base64,' + imagePath;
        }, function (err) {
            _this.presentToast('Error while selecting image');
        });
    };
    EditMedicationPage.prototype.updateEditedMedication = function (medication) {
        medication.createDate = this.medication.createDate;
        medication.img = this.medication.img;
        this.medicationService.deleteMedication(this.medication.createDate);
        this.medicationService.updateEditedMedication(medication);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__medications_medications__["a" /* MedicationsPage */]);
    };
    EditMedicationPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
    };
    EditMedicationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-medication',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\edit-medication\edit-medication.html"*/'<ion-header class="header-style">\n  <ion-row>\n    <ion-col col-2></ion-col >\n    <ion-col col-8>\n        <ion-label class="header-font">Edit Medication</ion-label>\n    </ion-col>\n    <ion-col col-2></ion-col>\n  </ion-row>\n</ion-header>\n\n\n<ion-content padding>\n\n  <img [src]="medication.img" style="width:100%" [hidden]="medication.img == null" (click)="retakePicture()">\n\n  <form [formGroup]="formGroupEdit" (ngSubmit)="updateEditedMedication(formGroupEdit.value)">\n    \n    <ion-item>\n      <ion-label>Medication name:</ion-label>\n      <ion-input type="text" name="name" formControlName="name" required></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Dose:</ion-label>\n      <ion-input type="text" name="dose" formControlName="dose" required></ion-input>\n    </ion-item>\n  \n  <ion-item>\n    <ion-label>Dose unit:</ion-label>\n    <ion-select [(ngModel)]="unit" formControlName="unit" interface="popover" required>\n      <ion-option value="mg">mg</ion-option>\n      <ion-option value="mg/ml">mg/ml</ion-option>\n      <ion-option value="mcg/ml">mcg/ml</ion-option>\n      <ion-option value="U/ml">U/ml</ion-option>\n      <ion-option value="Other">Other</ion-option>\n    </ion-select>  \n  </ion-item>\n  \n  <ion-item>\n    <ion-textarea placeholder="Additional dose info:" type="text" name="unitComments" formControlName="unitComments" rows="4"></ion-textarea>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>Route:</ion-label>\n    <ion-select [(ngModel)]="route" formControlName="route" interface="popover" required>\n      <ion-option value="Oral">Oral</ion-option>\n      <ion-option value="Injection">Injection</ion-option>\n      <ion-option value="Ocular">Ocular</ion-option>\n      <ion-option value="Otic">Otic</ion-option>\n      <ion-option value="Other">Other</ion-option>\n    </ion-select>  \n  </ion-item>\n  \n  <ion-item>\n    <ion-textarea placeholder="Additional route info:" type="text" name="routeComments" formControlName="routeComments" rows="4"></ion-textarea>\n  </ion-item>\n  \n  <ion-item>\n      <ion-label>Frequency:</ion-label>\n      <ion-textarea type="text" name="frequency" formControlName="frequency" rows="2" required></ion-textarea>\n    </ion-item>\n    \n  <button ion-button type="submit" [disabled]="!formGroupEdit.valid" class="login-style" color="secondary" block>Save Edits</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\edit-medication\edit-medication.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_medication_service_medication_service__["a" /* MedicationServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], EditMedicationPage);
    return EditMedicationPage;
}());

//# sourceMappingURL=edit-medication.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_note_edit_note__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewNotePage = /** @class */ (function () {
    function ViewNotePage(navCtrl, navParams, noteService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.noteService = noteService;
        this.note = this.navParams.get('note');
    }
    ViewNotePage.prototype.deleteNote = function (createDate) {
        this.noteService.deleteNote(createDate);
        this.navCtrl.pop();
    };
    ViewNotePage.prototype.editNote = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_note_edit_note__["a" /* EditNotePage */], { note: this.note });
    };
    ViewNotePage.prototype.return = function () {
        this.navCtrl.pop();
    };
    ViewNotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-note',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\view-note\view-note.html"*/'<ion-header class="header-style">\n  <ion-row>\n    <ion-col col-2>\n      <button ion-button class="header-button" (click)="return()" clear icon-only float-left><ion-icon name="md-arrow-back" class="header-icon"></ion-icon></button>\n    </ion-col >\n    <ion-col col-8>\n        <ion-label class="header-font">View Note</ion-label>\n    </ion-col>\n    <ion-col col-2 >\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <img [src]= note.img style="width: 100%" [hidden]="note.img == null">\n    <h2 class="card-style-border-top">Title: {{note.title}}</h2>\n    <h2 class="card-style-middle">Date: {{note.date}}</h2>\n    <h2 class="card-style-border-bottom">Content: {{note.content}}</h2>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <button ion-button class="button-style" color="secondary" block (click)= "editNote()">Edit Note</button>\n  <button ion-button class="button-style" color="secondary" block (click)= "deleteNote(note.createDate)">Delete Note</button>\n</ion-footer>'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\view-note\view-note.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__["a" /* NoteService */]])
    ], ViewNotePage);
    return ViewNotePage;
}());

//# sourceMappingURL=view-note.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_note_service_note_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditNotePage = /** @class */ (function () {
    function EditNotePage(navCtrl, navParams, noteService, camera, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.noteService = noteService;
        this.camera = camera;
        this.toastCtrl = toastCtrl;
        this.title = '';
        this.content = '';
        this.date = new Date();
        this.note = this.navParams.get('note');
        this.formGroupEdit = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.note.title),
            content: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.note.content),
            date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.note.date),
            createDate: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.note.createDate),
            origin: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.note.origin)
        });
    }
    EditNotePage.prototype.retakePicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            saveToPhotoAlbum: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            _this.note.img = 'data:image/jpeg;base64,' + imagePath;
        }, function (err) {
            _this.presentToast('Error while selecting image');
        });
    };
    EditNotePage.prototype.updateEditedNote = function (note) {
        note.img = this.note.img;
        this.noteService.deleteNote(this.note.createDate);
        this.noteService.updateEditedNote(note);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__about_about__["a" /* AboutPage */]);
    };
    EditNotePage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
    };
    EditNotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-note',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\edit-note\edit-note.html"*/'<ion-header class="header-style">\n  <ion-row>\n    <ion-col col-2></ion-col >\n    <ion-col col-8>\n        <ion-label class="header-font">Edit Note</ion-label>\n    </ion-col>\n    <ion-col col-2></ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content padding>\n    <img [src]="note.img" style="width: 100%" [hidden]="note.img == null" (click)="retakePicture()">\n\n  <form [formGroup] = "formGroupEdit" (ngSubmit) = "updateEditedNote(formGroupEdit.value)">\n    \n    <ion-item>\n        <ion-label>Date</ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY" formControlName="date"></ion-datetime>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label>Title</ion-label>\n      <ion-input type="text" name="title" formControlName="title" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-textarea placeholder="Content:" type="text" name="content" formControlName="content" rows="4" required></ion-textarea>\n    </ion-item>\n\n    <button ion-button type="submit" class="button-style" color="secondary" block>Save Edits</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\edit-note\edit-note.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_note_service_note_service__["a" /* NoteService */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], EditNotePage);
    return EditNotePage;
}());

//# sourceMappingURL=edit-note.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_note_add_note__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_note_service_note_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_document_add_document__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_document_document__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__view_document_view_document__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DocumentsPage = /** @class */ (function () {
    function DocumentsPage(navCtrl, storage, navParams, platformFive, actionsheetCtrlFive, noteService, documentProvider) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.platformFive = platformFive;
        this.actionsheetCtrlFive = actionsheetCtrlFive;
        this.noteService = noteService;
        this.documentProvider = documentProvider;
    }
    DocumentsPage.prototype.homeFromFive = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]); //returns from My Records Page to Home Page
    };
    DocumentsPage.prototype.ionViewWillEnter = function () {
        this.documentsArray = this.getDocuments();
        //this.documentsList = this.loadDocuments(); //loads all documents stored in documentProvider 
    };
    DocumentsPage.prototype.ionViewDidEnter = function () {
        this.documentsArray = this.getDocuments();
        //this.loadDocuments(); //loads all documents stored in documentProvider 
    };
    DocumentsPage.prototype.getDocuments = function () {
        return this.documentProvider.getAllDocuments();
    };
    DocumentsPage.prototype.openDocument = function (documentName) {
        var _this = this;
        //view document
        this.documentProvider.getDocument(documentName).then(function (n) {
            _this.document = n;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__view_document_view_document__["a" /* ViewDocumentPage */], { document: _this.document });
        });
    };
    DocumentsPage.prototype.openMenuFive = function () {
        var _this = this;
        var originPage5 = {
            title: 5
        };
        var actionSheetFive = this.actionsheetCtrlFive.create({
            title: 'Options',
            cssClass: 'action-sheets-basic-page-five',
            buttons: [
                {
                    text: 'Add note',
                    handler: function () {
                        console.log('Add note clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_note_add_note__["a" /* AddNotePage */], originPage5);
                    }
                },
                {
                    text: 'Take picture of record',
                    handler: function () {
                        console.log('Take picture of records button clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_document_add_document__["a" /* AddDocumentPage */]);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: !this.platformFive.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheetFive.present();
    };
    DocumentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-documents',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\documents\documents.html"*/'<ion-header class="header-style">\n  <ion-row>\n    <ion-col col-2>\n      <button ion-button class="header-button" (click)="homeFromFive()" clear icon-only float-left><ion-icon name="md-arrow-back" class="header-icon"></ion-icon></button>\n    </ion-col >\n    <ion-col col-8>\n      <ion-label class="header-font">My Records</ion-label>\n    </ion-col>\n    <ion-col col-2 >\n      <button ion-button class="header-button" (click)="openMenuFive()" clear icon-only float-right><ion-icon name="md-create" class="header-icon"></ion-icon></button>\n    </ion-col>\n  </ion-row>\n  </ion-header>\n\n<ion-content padding>\n\n    <ion-card *ngFor="let document of documentsArray | async" (click)="openDocument(document.documentName)">\n      <h3 class="card-style-border-bottom"> </h3>\n      <h3 class="card-style-middle">Document Name: {{document.documentName}}</h3>\n      <h3 class="card-style-middle">Date: {{document.date}}</h3>\n      <h3 class="card-style-border-bottom">Number of Pages: {{document.numPages}}</h3>\n    </ion-card>\n\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\documents\documents.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__providers_note_service_note_service__["a" /* NoteService */], __WEBPACK_IMPORTED_MODULE_6__providers_document_document__["a" /* DocumentProvider */]])
    ], DocumentsPage);
    return DocumentsPage;
}());

//# sourceMappingURL=documents.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewDocumentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_document_document__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewDocumentPage = /** @class */ (function () {
    function ViewDocumentPage(navCtrl, navParams, documentProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.documentProvider = documentProvider;
        this.imageDisplayList = [];
        this.document = this.navParams.get('document');
        this.imageDisplayList = this.document.imgs;
    }
    ViewDocumentPage.prototype.deleteDocument = function (createDate) {
        this.documentProvider.deleteDocument(createDate);
        this.navCtrl.pop();
    };
    ViewDocumentPage.prototype.editDocument = function () {
    };
    ViewDocumentPage.prototype.return = function () {
        this.navCtrl.pop();
    };
    ViewDocumentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-document',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\view-document\view-document.html"*/'<ion-header class="header-style">\n  <ion-row>\n    <ion-col col-2>\n      <button ion-button class="header-button" (click)="return()" clear icon-only float-left><ion-icon name="md-arrow-back" class="header-icon"></ion-icon></button>\n    </ion-col >\n    <ion-col col-8>\n        <ion-label class="header-font">View Document</ion-label>\n    </ion-col>\n    <ion-col col-2 >\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card *ngFor="let entry of imageDisplayList">\n    <div class="card-style-border-top">Document Name: {{document.name}}</div>\n    <div class="card-style-middle">Document Date: {{document.date}}</div>\n    <img [src]= "entry">\n \n    <hr/>\n\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <button ion-button class="button-style" color="secondary" block (click)= "editDocument()">Edit Document</button>\n  <button ion-button class="button-style" color="secondary" block (click)= "deleteDocument(document.createDate)">Delete Document</button>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\view-document\view-document.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_document_document__["a" /* DocumentProvider */]])
    ], ViewDocumentPage);
    return ViewDocumentPage;
}());

//# sourceMappingURL=view-document.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewAbilityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ability_service_ability_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_ability_edit_ability__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewAbilityPage = /** @class */ (function () {
    function ViewAbilityPage(navCtrl, navParams, abilityService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.abilityService = abilityService;
        this.ability = this.navParams.get('ability');
    }
    ViewAbilityPage.prototype.deleteAbility = function (createDate) {
        this.abilityService.deleteAbility(createDate);
        this.navCtrl.pop();
    };
    ViewAbilityPage.prototype.editAbility = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_ability_edit_ability__["a" /* EditAbilityPage */], { ability: this.ability });
    };
    ViewAbilityPage.prototype.return = function () {
        this.navCtrl.pop();
    };
    ViewAbilityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-ability',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\view-ability\view-ability.html"*/'<ion-header class="header-style">\n  <ion-row>\n    <ion-col col-2>\n      <button ion-button class="header-button" (click)="return()" clear icon-only float-left><ion-icon name="md-arrow-back" class="header-icon"></ion-icon></button>\n    </ion-col >\n    <ion-col col-8>\n        <ion-label class="header-font">View Note</ion-label>\n    </ion-col>\n    <ion-col col-2 >\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <img [src]= ability.img style="width: 100%" [hidden]="ability.img == null">\n    <h2 class="card-style-border-top">Ability: {{ability.ability}}</h2>\n    <h2 class="card-style-middle">Assistance: {{ability.selection}}</h2>\n    <h2 class="card-style-border-bottom">Comments: {{ability.content}}</h2>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n    <button ion-button class="button-style" color="secondary" block (click)= "editAbility()">Edit Ability</button>\n    <button ion-button class="button-style" color="secondary" block (click)= "deleteAbility(ability.createDate)">Delete Ability</button>\n</ion-footer>\n\n\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\view-ability\view-ability.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_ability_service_ability_service__["a" /* AbilityServiceProvider */]])
    ], ViewAbilityPage);
    return ViewAbilityPage;
}());

//# sourceMappingURL=view-ability.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAbilityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ability_service_ability_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_ability_my_ability__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditAbilityPage = /** @class */ (function () {
    function EditAbilityPage(navCtrl, navParams, abilityService, camera, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.abilityService = abilityService;
        this.camera = camera;
        this.toastCtrl = toastCtrl;
        this.ability = '';
        this.selection = '';
        this.content = '';
        this.displayImage = null;
        this.abilityModel = this.navParams.get('ability');
        this.formGroupEdit = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            ability: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.abilityModel.ability),
            selection: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.abilityModel.selection),
            content: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.abilityModel.content)
        });
    }
    EditAbilityPage.prototype.retakePicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            saveToPhotoAlbum: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            _this.abilityModel.img = 'data:image/jpeg;base64,' + imagePath;
        }, function (err) {
            _this.presentToast('Error while selecting image');
        });
    };
    EditAbilityPage.prototype.updateEditedAbility = function (ability) {
        ability.createDate = this.abilityModel.createDate;
        ability.img = this.abilityModel.img;
        this.abilityService.deleteAbility(this.abilityModel.createDate);
        this.abilityService.updateEditedAbility(ability);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__my_ability_my_ability__["a" /* MyAbilityPage */]);
    };
    EditAbilityPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
    };
    EditAbilityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-ability',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\edit-ability\edit-ability.html"*/'<ion-header class="header-style">\n    <ion-row>\n      <ion-col col-2></ion-col >\n      <ion-col col-8>\n          <ion-label class="header-font">Edit Ability</ion-label>\n      </ion-col>\n      <ion-col col-2></ion-col>\n    </ion-row>\n  </ion-header>\n\n\n<ion-content padding>\n\n  <img [src]="abilityModel.img" style="width: 100%" [hidden]="abilityModel.img == null" (click)="retakePicture()">\n\n  <form [formGroup]="formGroupEdit" (ngSubmit)="updateEditedAbility(formGroupEdit.value)">\n    \n    <ion-item>\n      <ion-label>Ability</ion-label>\n      <ion-input type="text" formControlName="ability" required></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label>Select</ion-label>\n      <ion-select [(ngModel)]="selection" formControlName="selection" required>\n        <ion-option value="Can independently perform task">Can independently perform task</ion-option>\n        <ion-option value="Can partly perform task">Can partly perform task</ion-option>\n        <ion-option value="Needs help performing task">Needs help performing task</ion-option>\n      </ion-select>  \n      </ion-item>\n    \n      <ion-item>\n        <ion-textarea placeholder="Additional Comments:" type="text" name="content" rows="4" formControlName="content" required></ion-textarea>\n      </ion-item>\n    \n  <button ion-button type="submit" [disabled]="!formGroupEdit.valid" class="login-style" color="secondary" block>Save Edits</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\edit-ability\edit-ability.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_ability_service_ability_service__["a" /* AbilityServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], EditAbilityPage);
    return EditAbilityPage;
}());

//# sourceMappingURL=edit-ability.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirstPage = /** @class */ (function () {
    function FirstPage(alertCtrl, fire, navCtrl, navParams, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    FirstPage.prototype.signIn = function () {
        var _this = this;
        this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.password.value).then(function (data) {
            console.log('can sign in', data);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }, function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                message: err.message,
                buttons: ['OK']
            });
            alert.present();
        });
        //.catch(error => {
        //console.log('got an error', error);
        //this.alert('Incorrect username and password combination');
        //})
    };
    FirstPage.prototype.updateAgree = function () {
        console.log(this.agree);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], FirstPage.prototype, "uname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], FirstPage.prototype, "password", void 0);
    FirstPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-first',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\first\first.html"*/'\n<ion-header>\n    <ion-navbar>\n      <ion-title>Returning User Login</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding >\n\n  <ion-list>\n\n    <ion-item>\n      <ion-input color="primary" type="text" value="" class="bg-style" placeholder="E-mail" #username></ion-input>\n    </ion-item>\n  \n    \n    <ion-item>\n      <ion-input color="primary" type="password" value="" class="bg-style" placeholder="Password" #password></ion-input>\n    </ion-item>\n\n    <button ion-button class="login-style" color="secondary" (click)="signIn()" full>Submit</button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\first\first.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], FirstPage);
    return FirstPage;
}());

//# sourceMappingURL=first.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cover_cover__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_and_conditions_terms_and_conditions__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = /** @class */ (function () {
    function RegisterPage(alertCtrl, fire, navCtrl, navParams, toast) {
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
    }
    RegisterPage.prototype.updateAgree = function () {
        console.log(this.agree);
    };
    RegisterPage.prototype.viewTC = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__terms_and_conditions_terms_and_conditions__["a" /* TermsAndConditionsPage */]);
    };
    RegisterPage.prototype.registerUser = function () {
        var _this = this;
        if (this.agree == true) {
            this.fire.auth.createUserWithEmailAndPassword(this.unameNew.value, this.passwordNew.value).then(function (data) {
                var alert = _this.alertCtrl.create({
                    title: 'Success',
                    message: 'You have successfully created an IIAM account',
                    buttons: ['OK']
                });
                alert.present();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cover_cover__["a" /* CoverPage */]);
            }, function (err) {
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    message: err.message,
                    buttons: ['OK']
                });
                alert.present();
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                message: 'You must agree to terms and conditions to proceed',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('usernameNew'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "unameNew", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('passwordNew'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "passwordNew", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\register\register.html"*/'\n<ion-header >\n  <ion-navbar >\n    <ion-title>Create New Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item >\n        <ion-input color="primary" type="text" value="" class="bg-style" placeholder="E-mail" #usernameNew></ion-input>\n      </ion-item>\n    \n      \n      <ion-item >\n        <ion-input type="password" value="" class="bg-style" placeholder="Password" #passwordNew></ion-input>\n      </ion-item>\n\n    <button ion-button clear class="term-and-cond-style" (click)="viewTC()">View terms and conditions</button>\n\n    <ion-item no-lines >\n      <ion-label class="agree-style">I agree to the terms & conditions </ion-label> \n      <ion-checkbox color="dark" [(ngModel)]="agree" (ionChange)="updateAgree()"></ion-checkbox>\n    </ion-item>\n\n  <button ion-button full class="create-style" color="secondary" (click)= "registerUser()">Create new account</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsAndConditionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsAndConditionsPage = /** @class */ (function () {
    function TermsAndConditionsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermsAndConditionsPage.prototype.returnToRegister = function () {
        this.navCtrl.pop();
    };
    TermsAndConditionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms-and-conditions',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\terms-and-conditions\terms-and-conditions.html"*/'\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n          <ion-card-title>IIAM\'s Terms and Conditions</ion-card-title>\n        </ion-card-header>\n      \n        <ion-card-content>\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. \n            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n            <ion-row style="height: 15px"></ion-row>\n            Contrary to popular belief, Lorem Ipsum is not simply random text. \n            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. \n            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. \n            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. \n            This book is a treatise on the theory of ethics, very popular during the Renaissance. \n            <ion-row style="height: 15px"></ion-row>\n            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. \n            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. \n            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. \n            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n        </ion-card-content>\n      </ion-card>\n  \n      <button ion-button full class="return-style" color="secondary" (click)= "returnToRegister()">Return</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\terms-and-conditions\terms-and-conditions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TermsAndConditionsPage);
    return TermsAndConditionsPage;
}());

//# sourceMappingURL=terms-and-conditions.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ability_service_ability_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_demographic_service_demographic_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_medication_service_medication_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_condition_service_condition_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_note_service_note_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_document_document__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SummaryPage = /** @class */ (function () {
    function SummaryPage(navCtrl, navParams, abilityService, demographicService, medicationService, conditionService, noteService, documentService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.abilityService = abilityService;
        this.demographicService = demographicService;
        this.medicationService = medicationService;
        this.conditionService = conditionService;
        this.noteService = noteService;
        this.documentService = documentService;
    }
    SummaryPage.prototype.homeFromSix = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    SummaryPage.prototype.ionViewWillEnter = function () {
        this.bios = this.getDemographics();
        this.aboutMeArray = this.getNotes();
        this.abilitiesArray = this.getAbilities();
        this.medicationsArray = this.getMedications();
        this.conditionsArray = this.getConditions();
        this.documentsArray = this.getDocuments();
    };
    SummaryPage.prototype.ionViewDidEnter = function () {
        this.bios = this.getDemographics();
        this.aboutMeArray = this.getNotes();
        this.abilitiesArray = this.getAbilities();
        this.medicationsArray = this.getMedications();
        this.conditionsArray = this.getConditions();
        this.documentsArray = this.getDocuments();
    };
    SummaryPage.prototype.getDemographics = function () {
        return this.demographicService.getDemographics();
    };
    SummaryPage.prototype.getAbilities = function () {
        return this.abilityService.getAbilities();
    };
    SummaryPage.prototype.getMedications = function () {
        return this.medicationService.getMedications();
    };
    SummaryPage.prototype.getConditions = function () {
        return this.conditionService.getConditions();
    };
    SummaryPage.prototype.getDocuments = function () {
        return this.documentService.getAllDocuments();
    };
    SummaryPage.prototype.getNotes = function () {
        return this.noteService.getAllNotes();
    };
    SummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-summary',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\summary\summary.html"*/'<ion-header class="header-style">\n    <ion-row>\n      <ion-col col-2>\n        <button ion-button class="header-button" (click)="homeFromSix()" clear icon-only float-left><ion-icon name="md-arrow-back" class="header-icon"></ion-icon></button>\n      </ion-col >\n      <ion-col col-8>\n          <ion-label class="header-font">Summary</ion-label>\n      </ion-col>\n      <ion-col col-2 >\n      </ion-col>\n    </ion-row>\n</ion-header>\n\n\n<ion-content >\n\n<h4 class="section-title-font">About Me:</h4>\n\n<ion-list>\n  <button ion-item text-wrap *ngFor="let bio of bios | async">\n    <h3 class="card-style-border-top"></h3>\n    <h3 class="card-style-middle">Name: {{bio.name}}</h3>\n    <h3 class="card-style-middle">Age: {{bio.age}}</h3>\n    <h3 class="card-style-middle">Gender: {{bio.gender}}</h3>\n    <h3 class="card-style-border-bottom">Allergies: {{bio.allergies}}</h3>\n    \n    <h2 class="spacer"></h2>\n    <span>Please view the below content for additional information about {{bio.name}}.</span>\n\n    \n  </button>\n\n  <button ion-item text-wrap *ngFor="let note of aboutMeArray | async">\n    <img [src]= note.img style="width: 100%" [hidden]="note.img == null">\n    <h3 class="card-style-border-top">Title: {{note.title}}</h3>\n    <h3 class="card-style-middle">Date: {{note.date}}</h3>\n    <h3 class="card-style-border-bottom">Content: {{note.content}}</h3>\n  </button>\n</ion-list>\n\n<h4 class="section-title-font">Abilities:</h4>\n<ion-list>\n  <button ion-item text-wrap *ngFor="let ability of abilitiesArray | async">\n    <img [src]= ability.img style="width: 100%" [hidden]="ability.img == null">\n    <h3 class="card-style-border-top">Ability: {{ability.ability}}</h3>\n    <h3 class="card-style-middle">Date: {{ability.selection}}</h3>\n    <h3 class="card-style-border-bottom">Content: {{ability.content}}</h3>\n  </button> \n</ion-list>\n\n<h4 class="section-title-font">Medications:</h4>\n<ion-list>\n  <button ion-item text-wrap *ngFor="let medication of medicationsArray | async">\n    <img [src]= medication.img style="width: 100%" [hidden]="medication.img == null">\n    <h3 class="card-style-border-top">Name: {{medication.name}}</h3>\n    <h3 class="card-style-middle">Dosing: {{medication.dose}} {{medication.unit}}</h3>\n    <h3 class="card-style-middle" [hidden]="medication.unitComments == null">Additional dosing info: {{medication.unitComments}}</h3>\n    <h3 class="card-style-middle">Route: {{medication.route}}</h3>\n    <h3 class="card-style-middle" [hidden]="medication.routeComments == null">Additional route info: {{medication.routeComments}}</h3>\n    <h3 class="card-style-border-bottom">Frequency: {{medication.frequency}}</h3>\n  </button>\n</ion-list>\n    \n<h4 class="section-title-font">Medical Conditions:</h4>\n<ion-list>\n  <button ion-item text-wrap *ngFor="let condition of conditionsArray | async" (click)="getCondition(condition.createDate)">\n    <img [src]= condition.img style="width: 100%" [hidden]="condition.img == null">\n    <h3 class="card-style-border-top">Condition: {{condition.name}}</h3>\n    <h3 class="card-style-middle">Symptoms: {{condition.symptoms}}</h3>\n    <h3 class="card-style-middle">Management: {{condition.management}}</h3>\n    <h3 class="card-style-border-bottom">Additional comments: {{condition.addComments}}</h3>\n  </button>\n</ion-list>\n\n<h4 class="section-title-font">Records on File:</h4>\n<ion-list>\n  <button ion-item *ngFor="let document of documentsArray | async">\n    <h3 >Document Name: {{document.documentName}}</h3>\n    <h3>Date: {{document.date}}</h3>\n    <h3>Number of Pages: {{document.numPages}}</h3>\n  </button>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\summary\summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_ability_service_ability_service__["a" /* AbilityServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_demographic_service_demographic_service__["a" /* DemographicServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_medication_service_medication_service__["a" /* MedicationServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_condition_service_condition_service__["a" /* ConditionServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_note_service_note_service__["a" /* NoteService */], __WEBPACK_IMPORTED_MODULE_8__providers_document_document__["a" /* DocumentProvider */]])
    ], SummaryPage);
    return SummaryPage;
}());

//# sourceMappingURL=summary.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewConditionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_condition_service_condition_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_condition_edit_condition__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewConditionPage = /** @class */ (function () {
    function ViewConditionPage(navCtrl, navParams, conditionService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.conditionService = conditionService;
        this.condition = this.navParams.get('condition');
    }
    ViewConditionPage.prototype.deleteCondition = function (createDate) {
        this.conditionService.deleteCondition(createDate);
        this.navCtrl.pop();
    };
    ViewConditionPage.prototype.editCondition = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_condition_edit_condition__["a" /* EditConditionPage */], { condition: this.condition });
    };
    ViewConditionPage.prototype.return = function () {
        this.navCtrl.pop();
    };
    ViewConditionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-condition',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\view-condition\view-condition.html"*/'<ion-header class="header-style">\n  <ion-row>\n    <ion-col col-2>\n      <button ion-button class="header-button" (click)="return()" clear icon-only float-left><ion-icon name="md-arrow-back" class="header-icon"></ion-icon></button>\n    </ion-col >\n    <ion-col col-8>\n        <ion-label class="header-font">View Condition</ion-label>\n    </ion-col>\n    <ion-col col-2 >\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <img [src]= condition.img style="width: 100%" [hidden]="condition.img == null">\n    <h2>Condition: {{condition.name}}</h2>  \n    <h2>Symptoms: {{condition.symptoms}}</h2>\n    <h2>Management: {{condition.management}}</h2>\n    <h2>Additional Comments: {{condition.addComments}}</h2>\n    </ion-card>\n</ion-content>\n\n<ion-footer>\n  <button ion-button class="button-style" color="secondary" block (click)= "editCondition()">Edit Condition</button>\n  <button ion-button class="button-style" color="secondary" block (click)= "deleteCondition(condition.createDate)">Delete Condition</button>\n</ion-footer>'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\view-condition\view-condition.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_condition_service_condition_service__["a" /* ConditionServiceProvider */]])
    ], ViewConditionPage);
    return ViewConditionPage;
}());

//# sourceMappingURL=view-condition.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditConditionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_condition_service_condition_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__conditions_conditions__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditConditionPage = /** @class */ (function () {
    function EditConditionPage(navCtrl, navParams, conditionService, camera, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.conditionService = conditionService;
        this.camera = camera;
        this.toastCtrl = toastCtrl;
        this.name = '';
        this.symptoms = '';
        this.management = '';
        this.addComments = '';
        this.condition = this.navParams.get('condition');
        this.formGroupEdit = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.condition.name),
            symptoms: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.condition.symptoms),
            management: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.condition.management),
            addComments: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.condition.addComments)
        });
    }
    EditConditionPage.prototype.retakePicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            saveToPhotoAlbum: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            _this.condition.img = 'data:image/jpeg;base64,' + imagePath;
        }, function (err) {
            _this.presentToast('Error while selecting image');
        });
    };
    EditConditionPage.prototype.updateEditedCondition = function (condition) {
        condition.createDate = this.condition.createDate;
        condition.img = this.condition.img;
        this.conditionService.deleteCondition(this.condition.createDate);
        this.conditionService.updateEditedCondition(condition);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__conditions_conditions__["a" /* ConditionsPage */]);
    };
    EditConditionPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
    };
    EditConditionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-condition',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\edit-condition\edit-condition.html"*/'<ion-header class="header-style">\n  <ion-row>\n    <ion-col col-2></ion-col >\n    <ion-col col-8>\n        <ion-label class="header-font">Edit Condition</ion-label>\n    </ion-col>\n    <ion-col col-2></ion-col>\n  </ion-row>\n</ion-header>\n\n\n<ion-content padding>\n    <img [src]="condition.img" style="width: 100%" [hidden]="condition.img == null" (click)="retakePicture()">\n\n<form [formGroup]="formGroupEdit" (ngSubmit)=updateEditedCondition(formGroupEdit.value)>\n\n  <ion-item>\n    <ion-label>Condition</ion-label>\n    <ion-input type="text" name="name" formControlName="name" required></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Symptoms:</ion-label>\n    <ion-textarea type="text" name="symptoms" rows="4" formControlName="symptoms" required></ion-textarea>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Management:</ion-label>\n    <ion-textarea type="text" name="management" rows="4" formControlName="management" required></ion-textarea>\n  </ion-item>\n\n  <ion-item>\n    <ion-textarea placeholder="Additional Comments:" type="text" name="addComments" rows="4" formControlName="addComments"></ion-textarea>\n  </ion-item>\n\n  <button ion-button type="submit" [disabled]="!formGroupEdit.valid" class="login-style" color="secondary" full>Save</button>\n</form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\edit-condition\edit-condition.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_condition_service_condition_service__["a" /* ConditionServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], EditConditionPage);
    return EditConditionPage;
}());

//# sourceMappingURL=edit-condition.js.map

/***/ }),

/***/ 233:
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
webpackEmptyAsyncContext.id = 233;

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-ability/add-ability.module": [
		815,
		25
	],
	"../pages/add-condition/add-condition.module": [
		816,
		24
	],
	"../pages/add-document/add-document.module": [
		817,
		23
	],
	"../pages/add-image/add-image.module": [
		818,
		22
	],
	"../pages/add-medication/add-medication.module": [
		819,
		21
	],
	"../pages/add-note/add-note.module": [
		820,
		20
	],
	"../pages/addmed/addmed.module": [
		821,
		19
	],
	"../pages/bio/bio.module": [
		822,
		18
	],
	"../pages/conditions/conditions.module": [
		823,
		17
	],
	"../pages/cover/cover.module": [
		824,
		16
	],
	"../pages/documents/documents.module": [
		825,
		15
	],
	"../pages/edit-ability/edit-ability.module": [
		826,
		14
	],
	"../pages/edit-condition/edit-condition.module": [
		827,
		13
	],
	"../pages/edit-medication/edit-medication.module": [
		828,
		12
	],
	"../pages/edit-note/edit-note.module": [
		829,
		11
	],
	"../pages/first/first.module": [
		830,
		10
	],
	"../pages/medications/medications.module": [
		831,
		9
	],
	"../pages/my-ability/my-ability.module": [
		832,
		8
	],
	"../pages/register/register.module": [
		833,
		7
	],
	"../pages/summary/summary.module": [
		834,
		6
	],
	"../pages/terms-and-conditions/terms-and-conditions.module": [
		835,
		5
	],
	"../pages/view-ability/view-ability.module": [
		836,
		4
	],
	"../pages/view-condition/view-condition.module": [
		837,
		3
	],
	"../pages/view-document/view-document.module": [
		838,
		2
	],
	"../pages/view-medication/view-medication.module": [
		839,
		1
	],
	"../pages/view-note/view-note.module": [
		840,
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
webpackAsyncContext.id = 277;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddImagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_note_service_note_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddImagePage = /** @class */ (function () {
    function AddImagePage(navCtrl, navParams, camera, transfer, file, actionSheetCtrl, toastCtrl, platform, storage, noteService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.storage = storage;
        this.noteService = noteService;
        this.displayImage = null;
        this.retrieveImage = null;
        this.newFileName = null;
        this.imageList = []; //new
        this.foundImage = { img: null, name: null };
        this.note = {
            date: new Date(),
            title: undefined,
            content: undefined,
            origin: undefined,
            imageName: undefined
        };
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */](),
            content: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */](),
            date: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]()
        });
    }
    AddImagePage.prototype.takePicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            saveToPhotoAlbum: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            _this.displayImage = 'data:image/jpeg;base64,' + imagePath;
            _this.newFileName = _this.createFileName();
            var saveObj = { img: _this.displayImage, name: _this.newFileName };
            console.log("Saving image with name " + _this.newFileName);
            _this.noteService.saveImage(saveObj);
        }, function (err) {
            _this.presentToast('Error while selecting image');
        });
    };
    AddImagePage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    AddImagePage.prototype.loadData = function () {
        this.imageList = this.noteService.getStoredImages();
        for (var i = 0; i < this.imageList.length; i++) {
            var image = this.imageList[i];
            console.log('Name of tihs entry is' + image.name);
            if (image.name == this.newFileName) {
                this.foundImage.img = image.img;
                this.foundImage.name = image.name;
                console.log("Add-image loadData function yields:" + this.foundImage.name);
                this.retrieveImage = this.foundImage.img;
            }
            else {
                this.retrieveImage = null;
            }
        }
        ;
    };
    AddImagePage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    AddImagePage.prototype.saveImgNote = function (note) {
        note.origin = this.navParams.get('title');
        note.createDate = this.newFileName;
        note.img = this.displayImage; //new
        console.log('Note ready for note service');
        this.noteService.saveNote(note);
        this.navCtrl.pop();
    };
    AddImagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-image',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\add-image\add-image.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>Add Image</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <button ion-button type="submit" class="login-style" color="secondary" (click)="takePicture()" full>Add a picture</button>\n    <img [src]="displayImage" style="width:100%" [hidden]="displayImage === null">\n\n    <form [formGroup]="formGroup" (ngSubmit)="saveImgNote(formGroup.value)">\n\n    <ion-item>\n      <ion-label>Date:</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" formControlName="date"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Title:</ion-label>\n      <ion-input type="text" name="title" formControlName="title" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Note:</ion-label>\n      <ion-textarea type="text" name="content" formControlName="content" rows="4"></ion-textarea>\n    </ion-item>\n\n    <button ion-button type="submit" class="login-style" color="secondary">Save</button>\n  \n  </form>\n  </ion-content>\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\add-image\add-image.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_note_service_note_service__["a" /* NoteService */]])
    ], AddImagePage);
    return AddImagePage;
}());

//# sourceMappingURL=add-image.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddmedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the AddmedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddmedPage = /** @class */ (function () {
    function AddmedPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddmedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddmedPage');
    };
    AddmedPage.prototype.btnActivate = function (selectButton, otherButton1, otherButton2, otherButton3, otherButton4) {
        if (selectButton._color === 'primary') {
            selectButton.color = 'secondary';
            otherButton1.color = 'primary';
            otherButton2.color = 'primary';
            otherButton3.color = 'primary';
            otherButton4.color = 'primary';
        }
        else
            selectButton.color = 'primary';
    };
    AddmedPage.prototype.btnActivateTwo = function (selectButton, otherButton1, otherButton2, otherButton3, otherButton4, otherButton5, otherButton6) {
        if (selectButton._color === 'primary') {
            selectButton.color = 'secondary';
            otherButton1.color = 'primary';
            otherButton2.color = 'primary';
            otherButton3.color = 'primary';
            otherButton4.color = 'primary';
            otherButton5.color = 'primary';
            otherButton6.color = 'primary';
        }
        else {
            selectButton.color = 'primary';
        }
    };
    AddmedPage.prototype.complete = function () {
        console.log(this.medName1.value);
        console.log(this.dose1.value);
        console.log(this.otherUnit1.value);
        console.log(this.otherDose1.value);
        console.log(this.frequency1.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('medName'),
        __metadata("design:type", Object)
    ], AddmedPage.prototype, "medName1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('dose'),
        __metadata("design:type", Object)
    ], AddmedPage.prototype, "dose1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('otherUnit'),
        __metadata("design:type", Object)
    ], AddmedPage.prototype, "otherUnit1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('otherDose'),
        __metadata("design:type", Object)
    ], AddmedPage.prototype, "otherDose1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('frequency'),
        __metadata("design:type", Object)
    ], AddmedPage.prototype, "frequency1", void 0);
    AddmedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addmed',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\addmed\addmed.html"*/'<!--\n  Generated template for the AddmedPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>Add a medication to your profile</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <!--Generates medication name and dose input lines-->\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Medication Name:</ion-label>\n        <ion-input type="text" #medName></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label floating>Dose:</ion-label>\n        <ion-input type="text" #dose></ion-input>\n      </ion-item>\n    </ion-list>\n  \n    <!--Generates grid layout for medication dose-->\n    <ion-grid>\n        <ion-row align-items-center >\n          <ion-col >\n              <h1 ion-text color="primary" >Unit</h1>\n          </ion-col>\n          <ion-col>\n              <button itemid ="mg1" #mg ion-button full color ="primary" (click) = "btnActivate(mg, mgml, mcgml, uml, other)" >mg</button>\n          </ion-col>\n          <ion-col>\n              <button id ="mgml1" #mgml ion-button full color ="primary" (click) = "btnActivate(mgml, mg, mcgml, uml, other)">mg/ml</button>\n          </ion-col>\n          <ion-col>\n              <button id ="mcgml1" #mcgml ion-button full color ="primary" (click) = "btnActivate(mcgml, mg, mgml, uml, other)">mcg/ml</button>\n          </ion-col>\n          <ion-col>\n              <button id ="uml1" #uml ion-button full color ="primary" (click) = "btnActivate(uml, mg, mgml, mcgml, other)">U/ml</button>\n          </ion-col>\n        </ion-row >\n        <ion-row align-items-center>\n          <ion-col>\n              \n          </ion-col>\n          <ion-col>\n              <button id ="other1" #other ion-button full color ="primary" (click) = "btnActivate(other, mg, mgml, mcgml, uml)">Other</button>\n          </ion-col>\n          <ion-col>\n              <ion-list>\n                  <ion-item>\n                    <ion-label floating>Specify other unit:</ion-label>\n                    <ion-input type="text" #otherUnit></ion-input>\n                  </ion-item>\n                </ion-list>\n          </ion-col>\n          <ion-col>\n              <!--Filler slot-->\n          </ion-col>\n          <ion-col>\n              <!--Filler slot-->\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n    <!--Generates grid layout for administration route-->\n    <ion-grid>\n        <ion-row align-items-center >\n          <ion-col >\n              <h1 ion-text color="primary">Route:</h1>\n          </ion-col>\n          <ion-col>\n              <button id ="oral1" #oral ion-button full color ="primary" (click) = "btnActivateTwo(oral, injection, ocular, otic, inhaled, topical, otherTwo)">Oral</button>\n          </ion-col>\n          <ion-col>\n              <button id ="injection1" #injection ion-button full color ="primary" (click) = "btnActivateTwo(injection, oral, ocular, otic, inhaled, topical, otherTwo)">Injection</button>\n          </ion-col>\n          <ion-col>\n              <button id ="ocular1" #ocular ion-button full color ="primary" (click) = "btnActivateTwo(ocular, oral, injection, otic, inhaled, topical, otherTwo)">Ocular</button>\n          </ion-col>\n          <ion-col>\n              <button id ="otic1" #otic ion-button full color ="primary" (click) = "btnActivateTwo(otic, oral, injection, ocular, inhaled, topical, otherTwo)">Otic</button>\n          </ion-col>\n        </ion-row >\n  \n        <ion-row align-items-center>\n          <ion-col>\n              <!--Filler slot-->\n          </ion-col>\n          <ion-col>\n              <button id ="inhaled1" #inhaled ion-button full color ="primary" (click) = "btnActivateTwo(inhaled, oral, injection, ocular, otic, topical, otherTwo)">Inhaled</button>\n          </ion-col>\n          <ion-col>\n              <button id ="topical1" #topical ion-button full color ="primary" (click) = "btnActivateTwo(topical, oral, injection, ocular, otic, inhaled, otherTwo)">Topical</button>\n          </ion-col>\n          <ion-col>\n              <button id ="other2" #otherTwo ion-button full color ="primary" (click) = "btnActivateTwo(otherTwo, oral, injection, ocular, otic, inhaled, topical)">Other</button>\n          </ion-col>\n          <ion-col>\n              <ion-list>\n                  <ion-item>\n                    <ion-label floating>Specify other route:</ion-label>\n                    <ion-input type="text" #otherDose></ion-input>\n                  </ion-item>\n                </ion-list>\n          </ion-col>\n        </ion-row>\n  \n    \n      </ion-grid>\n  \n  <!--Generates grid layout for frequency-->\n  <ion-grid>\n      <ion-row align-items-center >\n          <ion-col >\n              <h1 ion-text color="primary">Frequency (how often do you take this medication):</h1>\n          </ion-col>\n      </ion-row>\n  \n      <ion-row align-items-center >\n          <ion-col >\n              <ion-item>\n                  <ion-label floating>Specify frequency:</ion-label>\n                  <ion-input type="text" #frequency></ion-input>\n                </ion-item>\n          </ion-col>\n          <ion-col >\n              <!--Filler-->\n          </ion-col>\n      </ion-row>\n  \n  \n  \n  </ion-grid>\n  \n  <!--Creates submission button-->\n  <ion-grid>\n  <ion-row align-items-center >\n      <ion-col >\n        <!--Filler-->\n      </ion-col>\n      <ion-col >\n          <button ion-button full (click)= "complete()">Complete</button>\n      </ion-col>\n      <ion-col >\n        <!--Filler-->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\addmed\addmed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddmedPage);
    return AddmedPage;
}());

//# sourceMappingURL=addmed.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(434);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_addmed_addmed__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_add_note_add_note__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_add_image_add_image__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_document_add_document__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_medication_add_medication__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_add_condition_add_condition__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_consent_consent__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_documents_documents__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_first_first__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_medications_medications__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_conditions_conditions__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_cover_cover__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_register_register__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_summary_summary__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_canvas_draw_canvas_draw__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_fire__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_fire_auth__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_note_service_note_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_document_document__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_ability_service_ability_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_medication_service_medication_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_condition_service_condition_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_demographic_service_demographic_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_view_note_view_note__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_view_document_view_document__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_view_ability_view_ability__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_view_medication_view_medication__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_view_condition_view_condition__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_terms_and_conditions_terms_and_conditions__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_edit_note_edit_note__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_edit_ability_edit_ability__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_edit_medication_edit_medication__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_edit_condition_edit_condition__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_my_ability_my_ability__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_add_ability_add_ability__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_bio_bio__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_file_chooser__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_file__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_camera__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_transfer__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_file_path__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__angular_common_http__ = __webpack_require__(814);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















































var fireBaseAuth = {
    apiKey: "AIzaSyBQYSoTRe95XKq9cvNR48vlqCi2I6Q6TSI",
    authDomain: "test-project-58e94.firebaseapp.com",
    databaseURL: "https://test-project-58e94.firebaseio.com",
    projectId: "test-project-58e94",
    storageBucket: "test-project-58e94.appspot.com",
    messagingSenderId: "186879738423"
};
var CameraMock = /** @class */ (function (_super) {
    __extends(CameraMock, _super);
    function CameraMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CameraMock.prototype.getPicture = function (options) {
        return new Promise(function (resolve, reject) {
            resolve('R0lGODlhPQBEAPeoAJosM//AwO/AwHVYZ/z595kzAP/s7P+goOXMv8+fhw/v739/f+8PD98fH/8mJl+fn/9ZWb8/PzWlwv///6wWGbImAPgTEMImIN9gUFCEm/gDALULDN8PAD6atYdCTX9gUNKlj8wZAKUsAOzZz+UMAOsJAP/Z2ccMDA8PD/95eX5NWvsJCOVNQPtfX/8zM8+QePLl38MGBr8JCP+zs9myn/8GBqwpAP/GxgwJCPny78lzYLgjAJ8vAP9fX/+MjMUcAN8zM/9wcM8ZGcATEL+QePdZWf/29uc/P9cmJu9MTDImIN+/r7+/vz8/P8VNQGNugV8AAF9fX8swMNgTAFlDOICAgPNSUnNWSMQ5MBAQEJE3QPIGAM9AQMqGcG9vb6MhJsEdGM8vLx8fH98AANIWAMuQeL8fABkTEPPQ0OM5OSYdGFl5jo+Pj/+pqcsTE78wMFNGQLYmID4dGPvd3UBAQJmTkP+8vH9QUK+vr8ZWSHpzcJMmILdwcLOGcHRQUHxwcK9PT9DQ0O/v70w5MLypoG8wKOuwsP/g4P/Q0IcwKEswKMl8aJ9fX2xjdOtGRs/Pz+Dg4GImIP8gIH0sKEAwKKmTiKZ8aB/f39Wsl+LFt8dgUE9PT5x5aHBwcP+AgP+WltdgYMyZfyywz78AAAAAAAD///8AAP9mZv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAKgALAAAAAA9AEQAAAj/AFEJHEiwoMGDCBMqXMiwocAbBww4nEhxoYkUpzJGrMixogkfGUNqlNixJEIDB0SqHGmyJSojM1bKZOmyop0gM3Oe2liTISKMOoPy7GnwY9CjIYcSRYm0aVKSLmE6nfq05QycVLPuhDrxBlCtYJUqNAq2bNWEBj6ZXRuyxZyDRtqwnXvkhACDV+euTeJm1Ki7A73qNWtFiF+/gA95Gly2CJLDhwEHMOUAAuOpLYDEgBxZ4GRTlC1fDnpkM+fOqD6DDj1aZpITp0dtGCDhr+fVuCu3zlg49ijaokTZTo27uG7Gjn2P+hI8+PDPERoUB318bWbfAJ5sUNFcuGRTYUqV/3ogfXp1rWlMc6awJjiAAd2fm4ogXjz56aypOoIde4OE5u/F9x199dlXnnGiHZWEYbGpsAEA3QXYnHwEFliKAgswgJ8LPeiUXGwedCAKABACCN+EA1pYIIYaFlcDhytd51sGAJbo3onOpajiihlO92KHGaUXGwWjUBChjSPiWJuOO/LYIm4v1tXfE6J4gCSJEZ7YgRYUNrkji9P55sF/ogxw5ZkSqIDaZBV6aSGYq/lGZplndkckZ98xoICbTcIJGQAZcNmdmUc210hs35nCyJ58fgmIKX5RQGOZowxaZwYA+JaoKQwswGijBV4C6SiTUmpphMspJx9unX4KaimjDv9aaXOEBteBqmuuxgEHoLX6Kqx+yXqqBANsgCtit4FWQAEkrNbpq7HSOmtwag5w57GrmlJBASEU18ADjUYb3ADTinIttsgSB1oJFfA63bduimuqKB1keqwUhoCSK374wbujvOSu4QG6UvxBRydcpKsav++Ca6G8A6Pr1x2kVMyHwsVxUALDq/krnrhPSOzXG1lUTIoffqGR7Goi2MAxbv6O2kEG56I7CSlRsEFKFVyovDJoIRTg7sugNRDGqCJzJgcKE0ywc0ELm6KBCCJo8DIPFeCWNGcyqNFE06ToAfV0HBRgxsvLThHn1oddQMrXj5DyAQgjEHSAJMWZwS3HPxT/QMbabI/iBCliMLEJKX2EEkomBAUCxRi42VDADxyTYDVogV+wSChqmKxEKCDAYFDFj4OmwbY7bDGdBhtrnTQYOigeChUmc1K3QTnAUfEgGFgAWt88hKA6aCRIXhxnQ1yg3BCayK44EWdkUQcBByEQChFXfCB776aQsG0BIlQgQgE8qO26X1h8cEUep8ngRBnOy74E9QgRgEAC8SvOfQkh7FDBDmS43PmGoIiKUUEGkMEC/PJHgxw0xH74yx/3XnaYRJgMB8obxQW6kL9QYEJ0FIFgByfIL7/IQAlvQwEpnAC7DtLNJCKUoO/w45c44GwCXiAFB/OXAATQryUxdN4LfFiwgjCNYg+kYMIEFkCKDs6PKAIJouyGWMS1FSKJOMRB/BoIxYJIUXFUxNwoIkEKPAgCBZSQHQ1A2EWDfDEUVLyADj5AChSIQW6gu10bE/JG2VnCZGfo4R4d0sdQoBAHhPjhIB94v/wRoRKQWGRHgrhGSQJxCS+0pCZbEhAAOw==');
        });
    };
    return CameraMock;
}(__WEBPACK_IMPORTED_MODULE_48__ionic_native_camera__["a" /* Camera */]));
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_add_image_add_image__["a" /* AddImagePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_document_add_document__["a" /* AddDocumentPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_medication_add_medication__["a" /* AddMedicationPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_add_condition_add_condition__["a" /* AddConditionPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_consent_consent__["a" /* ConsentPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_medications_medications__["a" /* MedicationsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_conditions_conditions__["a" /* ConditionsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_addmed_addmed__["a" /* AddmedPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_first_first__["a" /* FirstPage */],
                __WEBPACK_IMPORTED_MODULE_23__components_canvas_draw_canvas_draw__["a" /* CanvasDraw */],
                __WEBPACK_IMPORTED_MODULE_13__pages_documents_documents__["a" /* DocumentsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_cover_cover__["a" /* CoverPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_summary_summary__["a" /* SummaryPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_add_note_add_note__["a" /* AddNotePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_view_note_view_note__["a" /* ViewNotePage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_view_document_view_document__["a" /* ViewDocumentPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_view_ability_view_ability__["a" /* ViewAbilityPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_view_medication_view_medication__["a" /* ViewMedicationPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_view_condition_view_condition__["a" /* ViewConditionPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_terms_and_conditions_terms_and_conditions__["a" /* TermsAndConditionsPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_edit_note_edit_note__["a" /* EditNotePage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_edit_ability_edit_ability__["a" /* EditAbilityPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_edit_medication_edit_medication__["a" /* EditMedicationPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_edit_condition_edit_condition__["a" /* EditConditionPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_my_ability_my_ability__["a" /* MyAbilityPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_add_ability_add_ability__["a" /* AddAbilityPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_bio_bio__["a" /* BioPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-ability/add-ability.module#AddAbilityPageModule', name: 'AddAbilityPage', segment: 'add-ability', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-condition/add-condition.module#AddConditionPageModule', name: 'AddConditionPage', segment: 'add-condition', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-document/add-document.module#AddDocumentPageModule', name: 'AddDocumentPage', segment: 'add-document', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-image/add-image.module#AddImagePageModule', name: 'AddImagePage', segment: 'add-image', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-medication/add-medication.module#AddMedicationPageModule', name: 'AddMedicationPage', segment: 'add-medication', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-note/add-note.module#AddNotePageModule', name: 'AddNotePage', segment: 'add-note', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addmed/addmed.module#AddmedPageModule', name: 'AddmedPage', segment: 'addmed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bio/bio.module#BioPageModule', name: 'BioPage', segment: 'bio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conditions/conditions.module#ConditionsPageModule', name: 'ConditionsPage', segment: 'conditions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cover/cover.module#CoverPageModule', name: 'CoverPage', segment: 'cover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/documents/documents.module#DocumentsPageModule', name: 'DocumentsPage', segment: 'documents', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-ability/edit-ability.module#EditAbilityPageModule', name: 'EditAbilityPage', segment: 'edit-ability', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-condition/edit-condition.module#EditConditionPageModule', name: 'EditConditionPage', segment: 'edit-condition', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-medication/edit-medication.module#EditMedicationPageModule', name: 'EditMedicationPage', segment: 'edit-medication', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-note/edit-note.module#EditNotePageModule', name: 'EditNotePage', segment: 'edit-note', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/first/first.module#FirstPageModule', name: 'FirstPage', segment: 'first', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medications/medications.module#MedicationsPageModule', name: 'MedicationsPage', segment: 'medications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-ability/my-ability.module#MyAbilityPageModule', name: 'MyAbilityPage', segment: 'my-ability', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/summary/summary.module#SummaryPageModule', name: 'SummaryPage', segment: 'summary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms-and-conditions/terms-and-conditions.module#TermsAndConditionsPageModule', name: 'TermsAndConditionsPage', segment: 'terms-and-conditions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-ability/view-ability.module#ViewAbilityPageModule', name: 'ViewAbilityPage', segment: 'view-ability', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-condition/view-condition.module#ViewConditionPageModule', name: 'ViewConditionPage', segment: 'view-condition', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-document/view-document.module#ViewDocumentPageModule', name: 'ViewDocumentPage', segment: 'view-document', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-medication/view-medication.module#ViewMedicationPageModule', name: 'ViewMedicationPage', segment: 'view-medication', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-note/view-note.module#ViewNotePageModule', name: 'ViewNotePage', segment: 'view-note', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_24__angular_fire__["a" /* AngularFireModule */].initializeApp(fireBaseAuth),
                __WEBPACK_IMPORTED_MODULE_25__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_51__angular_common_http__["a" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_add_image_add_image__["a" /* AddImagePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_document_add_document__["a" /* AddDocumentPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_medication_add_medication__["a" /* AddMedicationPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_add_condition_add_condition__["a" /* AddConditionPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_consent_consent__["a" /* ConsentPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_medications_medications__["a" /* MedicationsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_conditions_conditions__["a" /* ConditionsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_addmed_addmed__["a" /* AddmedPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_first_first__["a" /* FirstPage */],
                __WEBPACK_IMPORTED_MODULE_23__components_canvas_draw_canvas_draw__["a" /* CanvasDraw */],
                __WEBPACK_IMPORTED_MODULE_13__pages_documents_documents__["a" /* DocumentsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_cover_cover__["a" /* CoverPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_summary_summary__["a" /* SummaryPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_add_note_add_note__["a" /* AddNotePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_view_note_view_note__["a" /* ViewNotePage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_view_document_view_document__["a" /* ViewDocumentPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_view_ability_view_ability__["a" /* ViewAbilityPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_view_medication_view_medication__["a" /* ViewMedicationPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_view_condition_view_condition__["a" /* ViewConditionPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_terms_and_conditions_terms_and_conditions__["a" /* TermsAndConditionsPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_edit_note_edit_note__["a" /* EditNotePage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_edit_ability_edit_ability__["a" /* EditAbilityPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_edit_medication_edit_medication__["a" /* EditMedicationPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_edit_condition_edit_condition__["a" /* EditConditionPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_my_ability_my_ability__["a" /* MyAbilityPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_add_ability_add_ability__["a" /* AddAbilityPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_bio_bio__["a" /* BioPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_26__providers_note_service_note_service__["a" /* NoteService */],
                __WEBPACK_IMPORTED_MODULE_47__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_46__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_27__providers_document_document__["a" /* DocumentProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_ability_service_ability_service__["a" /* AbilityServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_medication_service_medication_service__["a" /* MedicationServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_condition_service_condition_service__["a" /* ConditionServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_camera__["a" /* Camera */],
                //{provide: Camera, useClass: CameraMock},
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_29__providers_medication_service_medication_service__["a" /* MedicationServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_condition_service_condition_service__["a" /* ConditionServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_demographic_service_demographic_service__["a" /* DemographicServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoteService = /** @class */ (function () {
    function NoteService(storage, camera) {
        this.storage = storage;
        this.camera = camera;
        this.storedImages = []; //stores images from all notes
        this.notes = []; //stores all notes 
        this.aboutMeArray = []; //stores only notes from About Me
        this.myMedicationsArray = []; //stores only notes from My Medications
        this.myConditionsArray = []; //stores ony notes from My Conditons
        this.myRecordsArray = []; //stores only notes in Documents
    }
    NoteService.prototype.saveImage = function (saveObj) {
        this.storedImages.push(saveObj);
    };
    NoteService.prototype.getStoredImages = function () {
        return this.storedImages;
    };
    NoteService.prototype.saveNote = function (note) {
        this.notes.push(note);
        this.storage.set('notes', this.notes);
    };
    NoteService.prototype.returnNotes = function () {
        return this.notes;
    };
    NoteService.prototype.getAllNotes = function () {
        var _this = this;
        return this.storage.get('notes').then(function (notes) {
            _this.notes = notes == null ? [] : notes;
            _this.notes.sort(function (a, b) { return a.createDate <= b.createDate ? -1 : 1; }); //sort with lowest presented first
            return _this.notes.slice();
        });
    };
    NoteService.prototype.getNote = function (createDate) {
        var _this = this;
        return this.storage.get('notes').then(function (notes) {
            _this.note = notes.slice().find(function (r) { return r.createDate === createDate; });
            return _this.note;
        });
    };
    NoteService.prototype.deleteNote = function (createDate) {
        this.notes = this.notes.filter(function (note) {
            return note.createDate !== createDate;
        });
        this.storage.set('notes', this.notes);
    };
    NoteService.prototype.aboutMeNote = function () {
        //method filters through notes and identifies notes belonging in About Me
        this.aboutMeArray = this.notes;
        this.aboutMeArray = this.aboutMeArray.filter(function (note) {
            return note.origin == 1;
        });
        this.storage.set('aboutMeArray', this.aboutMeArray);
    };
    NoteService.prototype.getAboutMeNote = function () {
        var _this = this;
        //method returns aboutMeArray to about.ts
        return this.storage.get('aboutMeArray').then(function (aboutMeArray) {
            _this.aboutMeArray = aboutMeArray == null ? [] : aboutMeArray;
            _this.notes.sort(function (a, b) { return a.createDate <= b.createDate ? -1 : 1; }); //sort with lowest presented first
            return _this.aboutMeArray.slice();
        });
    };
    NoteService.prototype.documentsNote = function () {
        //method filters through notes and identifies notes belonging in Documents
        this.myRecordsArray = this.notes;
        this.myRecordsArray = this.myRecordsArray.filter(function (note) {
            return note.origin == 5;
        });
        this.storage.set('myRecordsArray', this.myRecordsArray);
    };
    NoteService.prototype.getDocumentsNote = function () {
        var _this = this;
        //method returns myRecordsArray to documents.ts
        return this.storage.get('myRecordsArray').then(function (myRecordsArray) {
            _this.myRecordsArray = myRecordsArray == null ? [] : myRecordsArray;
            _this.notes.sort(function (a, b) { return a.createDate <= b.createDate ? -1 : 1; }); //sort with lowest presented first
            return _this.myRecordsArray.slice();
        });
    };
    NoteService.prototype.medicationsNote = function () {
        //method filters through notes and identifies notes belonging in Medications
        this.myMedicationsArray = this.notes;
        this.myMedicationsArray = this.myMedicationsArray.filter(function (note) {
            return note.origin == 7;
        });
        this.storage.set('myMedicationsArray', this.myMedicationsArray);
    };
    NoteService.prototype.getMedicationsNote = function () {
        var _this = this;
        //method returns myMedicationsArray to medications.ts
        return this.storage.get('myMedicationsArray').then(function (myMedicationsArray) {
            _this.myMedicationsArray = myMedicationsArray == null ? [] : myMedicationsArray;
            _this.notes.sort(function (a, b) { return a.createDate <= b.createDate ? -1 : 1; }); //sort with lowest presented first
            return _this.myMedicationsArray.slice();
        });
    };
    NoteService.prototype.updateEditedNote = function (note) {
        this.notes.push(note);
        this.storage.set('notes', this.notes);
    };
    NoteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], NoteService);
    return NoteService;
}());

//# sourceMappingURL=note-service.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medications_medications__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__documents_documents__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_ability_my_ability__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__conditions_conditions__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_auth__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cover_cover__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__summary_summary__ = __webpack_require__(220);
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
    function HomePage(navCtrl, fire) {
        this.navCtrl = navCtrl;
        this.fire = fire;
    }
    HomePage.prototype.openAboutMe = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */]);
    };
    HomePage.prototype.openMyAbilities = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__my_ability_my_ability__["a" /* MyAbilityPage */]);
    };
    HomePage.prototype.openMyMedications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__medications_medications__["a" /* MedicationsPage */]);
    };
    HomePage.prototype.openMyConditions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__conditions_conditions__["a" /* ConditionsPage */]);
    };
    HomePage.prototype.openMyRecords = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__documents_documents__["a" /* DocumentsPage */]);
    };
    HomePage.prototype.openSummary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__summary_summary__["a" /* SummaryPage */]);
    };
    HomePage.prototype.signOut = function () {
        this.fire.auth.signOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__cover_cover__["a" /* CoverPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\home\home.html"*/'<ion-header class="header-style">\n<ion-row>\n  <ion-col col-2>\n  </ion-col >\n  <ion-col col-8>\n    <ion-label class="header-font">Home Page</ion-label>\n  </ion-col>\n  <ion-col col-2 >\n    <button ion-button class="header-button" (click)="signOut()" clear icon-only float-right ><ion-icon name="md-lock" class="header-icon"></ion-icon></button>\n  </ion-col>\n</ion-row>\n</ion-header>\n\n<ion-content padding >\n<ion-row>\n  <ion-col>\n    <div><img src="assets/imgs/aboutMe.jpg" (click)="openAboutMe()"></div>\n  </ion-col>\n  <ion-col>\n      <div><img src="assets/imgs/myAbilities.jpg" (click)="openMyAbilities()"></div>\n  </ion-col>\n  <ion-col>\n    <div><img src="assets/imgs/myMedications.jpg" (click)="openMyMedications()"></div>\n  </ion-col>\n</ion-row>\n\n<ion-row>\n    <ion-col>\n      <div><img src="assets/imgs/myConditions.jpg" (click)="openMyConditions()"></div> \n    </ion-col>\n    <ion-col>\n        <div><img src="assets/imgs/myRecords.jpg" (click)="openMyRecords()"></div>\n    </ion-col>\n    <ion-col>\n      <div><img src="assets/imgs/mySummary.jpg" (click)="openSummary()"></div>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbilityServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AbilityServiceProvider = /** @class */ (function () {
    function AbilityServiceProvider(storage) {
        this.storage = storage;
        this.storedAbilityImages = [];
        this.abilities = [];
    }
    AbilityServiceProvider.prototype.saveAbility = function (ability) {
        this.abilities.push(ability);
        this.storage.set('abilities', this.abilities);
    };
    AbilityServiceProvider.prototype.getAbilities = function () {
        var _this = this;
        return this.storage.get('abilities').then(function (abilities) {
            _this.abilities = abilities == null ? [] : abilities;
            _this.abilities.sort(function (a, b) { return a.createDate <= b.createDate ? -1 : 1; });
            return _this.abilities.slice();
        });
    };
    AbilityServiceProvider.prototype.getAbility = function (createDate) {
        var _this = this;
        return this.storage.get('abilities').then(function (abilities) {
            _this.ability = abilities.slice().find(function (r) { return r.createDate == createDate; });
            return _this.ability;
        });
    };
    AbilityServiceProvider.prototype.deleteAbility = function (createDate) {
        this.abilities = this.abilities.filter(function (ability) {
            return ability.createDate !== createDate;
        });
        this.storage.set('abilities', this.abilities);
    };
    AbilityServiceProvider.prototype.updateEditedAbility = function (ability) {
        this.abilities.push(ability);
        this.storage.set('abilities', this.abilities);
    };
    AbilityServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], AbilityServiceProvider);
    return AbilityServiceProvider;
}());

//# sourceMappingURL=ability-service.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConditionServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConditionServiceProvider = /** @class */ (function () {
    function ConditionServiceProvider(storage) {
        this.storage = storage;
        this.storedConditionImages = [];
        this.conditions = [];
    }
    ConditionServiceProvider.prototype.saveCondition = function (condition) {
        this.conditions.push(condition);
        this.storage.set('conditions', this.conditions);
    };
    ConditionServiceProvider.prototype.getConditions = function () {
        var _this = this;
        return this.storage.get('conditions').then(function (conditions) {
            _this.conditions = conditions == null ? [] : conditions;
            _this.conditions.sort(function (a, b) { return a.createDate <= b.createDate ? -1 : 1; });
            return _this.conditions.slice();
        });
    };
    ConditionServiceProvider.prototype.getCondition = function (createDate) {
        var _this = this;
        return this.storage.get('conditions').then(function (conditions) {
            _this.condition = conditions.slice().find(function (r) { return r.createDate == createDate; });
            return _this.condition;
        });
    };
    ConditionServiceProvider.prototype.deleteCondition = function (createDate) {
        this.conditions = this.conditions.filter(function (condition) {
            return condition.createDate !== createDate;
        });
        this.storage.set('conditions', this.conditions);
    };
    ConditionServiceProvider.prototype.updateEditedCondition = function (condition) {
        this.conditions.push(condition);
        this.storage.set('conditions', this.conditions);
    };
    ConditionServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], ConditionServiceProvider);
    return ConditionServiceProvider;
}());

//# sourceMappingURL=condition-service.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MedicationServiceProvider = /** @class */ (function () {
    function MedicationServiceProvider(storage) {
        this.storage = storage;
        this.storedMedicationImages = [];
        this.medications = [];
    }
    MedicationServiceProvider.prototype.saveMedication = function (medication) {
        this.medications.push(medication);
        this.storage.set('medications', this.medications);
    };
    MedicationServiceProvider.prototype.getMedications = function () {
        var _this = this;
        return this.storage.get('medications').then(function (medications) {
            _this.medications = medications == null ? [] : medications;
            _this.medications.sort(function (a, b) { return a.createDate <= b.createDate ? -1 : 1; });
            return _this.medications.slice();
        });
    };
    MedicationServiceProvider.prototype.getMedication = function (createDate) {
        var _this = this;
        return this.storage.get('medications').then(function (medications) {
            _this.medication = medications.slice().find(function (r) { return r.createDate == createDate; });
            return _this.medication;
        });
    };
    MedicationServiceProvider.prototype.deleteMedication = function (createDate) {
        this.medications = this.medications.filter(function (medication) {
            return medication.createDate !== createDate;
        });
        this.storage.set('medications', this.medications);
    };
    MedicationServiceProvider.prototype.updateEditedMedication = function (medication) {
        this.medications.push(medication);
        this.storage.set('medications', this.medications);
    };
    MedicationServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], MedicationServiceProvider);
    return MedicationServiceProvider;
}());

//# sourceMappingURL=medication-service.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentProvider = /** @class */ (function () {
    function DocumentProvider(storage) {
        this.storage = storage;
        this.storedDocumentImages = [];
        this.documents = []; //stores all documents
    }
    DocumentProvider.prototype.saveDocument = function (document) {
        this.documents.push(document);
        this.storage.set('documents', this.documents);
    };
    DocumentProvider.prototype.getAllDocuments = function () {
        var _this = this;
        return this.storage.get('documents').then(function (documents) {
            _this.documents = documents == null ? [] : documents;
            _this.documents.sort(function (a, b) { return a.createDate <= b.createDate ? -1 : 1; });
            return _this.documents.slice();
        });
    };
    DocumentProvider.prototype.getDocument = function (createDate) {
        //opens up and displays specific document 
        return this.storage.get('documents').then(function (documents) {
            var document = documents.slice().find(function (r) { return r.documentName === createDate; });
            console.log('The name of this document is:' + document.documentName);
            return document;
        });
    };
    DocumentProvider.prototype.deleteDocument = function (createDate) {
        this.documents = this.documents.filter(function (document) {
            return document.createDate !== createDate;
        });
        this.storage.set('documents', this.documents);
    };
    DocumentProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], DocumentProvider);
    return DocumentProvider;
}());

//# sourceMappingURL=document.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cover_cover__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_timer__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_timer__);
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
    function MyApp(platform, loadingCtrl, storage, statusBar, splashScreen) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_cover_cover__["a" /* CoverPage */];
        this.showSplash = true;
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_timer__["timer"])(5000).subscribe(function () { return _this.showSplash = false; });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\app\app.html"*/'<div *ngIf="showSplash" class="splash">\n    <div class="spinner"></div>\n</div>\n\n<ion-nav [root]="rootPage"></ion-nav>\n\n\n\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConsentPage = /** @class */ (function () {
    function ConsentPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [
            {
                title: "Welcome to IIAM!",
                description: "<b>IIAM (IIAM)</b> empowers patients with tracheostomies.",
                image: "assets/img/IIAM_logo.png",
            },
            {
                title: "What is IIAM?",
                description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
                image: "assets/img/ica-slidebox-img-2.png",
            },
            {
                title: "What is Ionic Cloud?",
                description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
                image: "assets/img/ica-slidebox-img-3.png",
            }
        ];
    }
    ConsentPage.prototype.goToHome = function () {
    };
    ConsentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'consent-page',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\consent\consent.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Slides</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="tutorial-page">\n\n  <ion-slides pager="true">\n    <ion-slide *ngFor="let slide of slides">\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button color="primary">Skip</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img [src]="slide.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n    <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n      <h2 class="slide-title">Ready to Use?</h2>\n      <button ion-button large clear icon-end color="primary" (click)="goToHome()">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\consent\consent.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ConsentPage);
    return ConsentPage;
}());

//# sourceMappingURL=consent.js.map

/***/ }),

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasDraw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CanvasDraw = /** @class */ (function () {
    function CanvasDraw(platform, renderer) {
        this.platform = platform;
        this.renderer = renderer;
        this.currentColour = '#1abc9c';
        this.brushSize = 10;
        console.log('Hello CanvasDraw Component');
        this.availableColours = [
            '#1abc9c',
            '#3498db',
            '#9b59b6',
            '#e67e22',
            '#e74c3c'
        ];
    }
    CanvasDraw.prototype.ngAfterViewInit = function () {
        this.canvasElement = this.canvas.nativeElement;
        this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
        this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');
    };
    CanvasDraw.prototype.changeColour = function (colour) {
        this.currentColour = colour;
    };
    CanvasDraw.prototype.changeSize = function (size) {
        this.brushSize = size;
    };
    CanvasDraw.prototype.handleStart = function (ev) {
        this.lastX = ev.touches[0].pageX;
        this.lastY = ev.touches[0].pageY;
    };
    CanvasDraw.prototype.handleMove = function (ev) {
        var ctx = this.canvasElement.getContext('2d');
        var currentX = ev.touches[0].pageX;
        var currentY = ev.touches[0].pageY;
        ctx.beginPath();
        ctx.lineJoin = "round";
        ctx.moveTo(this.lastX, this.lastY);
        ctx.lineTo(currentX, currentY);
        ctx.closePath();
        ctx.strokeStyle = this.currentColour;
        ctx.lineWidth = this.brushSize;
        ctx.stroke();
        this.lastX = currentX;
        this.lastY = currentY;
    };
    CanvasDraw.prototype.clearCanvas = function () {
        var ctx = this.canvasElement.getContext('2d');
        ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myCanvas'),
        __metadata("design:type", Object)
    ], CanvasDraw.prototype, "canvas", void 0);
    CanvasDraw = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'canvas-draw',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\components\canvas-draw\canvas-draw.html"*/'<!-- Generated template for the CanvasDrawComponent component -->\n<ion-toolbar id="top-toolbar">\n    <ion-buttons left>\n        <button *ngFor="let colour of availableColours" icon-only ion-button (click)="changeColour(colour)">\n            <ion-icon [style.color]="colour" name="brush"></ion-icon>\n        </button>\n    </ion-buttons>\n    <ion-buttons right>\n        <button style="border: 1px solid #cecece;" ion-button icon-only style.color="#fff" (click)="changeColour(\'#fff\')">\n            <ion-icon style="color: #fff;" name="square"></ion-icon>\n        </button>\n    </ion-buttons>\n</ion-toolbar>\n\n<canvas #myCanvas (touchstart)="handleStart($event)" (touchmove)="handleMove($event)"></canvas>\n\n<ion-toolbar id="bottom-toolbar">\n    <ion-buttons left>\n        <button color="dark" ion-button icon-only (click)="clearCanvas()"><ion-icon name="trash"></ion-icon></button>\n    </ion-buttons>\n    <ion-buttons right>\n        <button color="dark" ion-button icon-only (click)="changeSize(5)"><ion-icon style="font-size: 0.25em;" name="radio-button-on"></ion-icon></button>\n        <button color="dark" ion-button icon-only (click)="changeSize(10)"><ion-icon style="font-size: 0.5em;" name="radio-button-on"></ion-icon></button>\n        <button color="dark" ion-button icon-only (click)="changeSize(20)"><ion-icon style="font-size: 1em;" name="radio-button-on"></ion-icon></button>\n        <button color="dark" ion-button icon-only (click)="changeSize(50)"><ion-icon style="font-size: 2em;" name="radio-button-on"></ion-icon></button>\n        <button color="dark" ion-button icon-only (click)="changeSize(200)"><ion-icon style="font-size: 3em;" name="radio-button-on"></ion-icon></button>\n    </ion-buttons>\n</ion-toolbar>\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\components\canvas-draw\canvas-draw.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], CanvasDraw);
    return CanvasDraw;
}());

//# sourceMappingURL=canvas-draw.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__first_first__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoverPage = /** @class */ (function () {
    function CoverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CoverPage.prototype.openFirst = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__first_first__["a" /* FirstPage */]);
    };
    CoverPage.prototype.openRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    CoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cover',template:/*ion-inline-start:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\cover\cover.html"*/'\n<ion-content >\n        <button ion-button full outline class = "coverLabel1" fill="outline" color = "secondary" (click)= "openFirst()">Returning User</button>\n    <button ion-button full outline class = "coverLabel2" color = "secondary" (click)= "openRegister()">New User</button>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Kevin Xin\IIAM-whiteboard\src\pages\cover\cover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CoverPage);
    return CoverPage;
}());

//# sourceMappingURL=cover.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemographicServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DemographicServiceProvider = /** @class */ (function () {
    function DemographicServiceProvider(storage) {
        this.storage = storage;
        this.bios = [];
        this.savedBio = {
            name: undefined,
            age: undefined,
            gender: undefined,
            allergies: undefined
        };
    }
    DemographicServiceProvider.prototype.clearDemographics = function () {
        this.bios = [];
    };
    DemographicServiceProvider.prototype.saveDemographic = function (bio) {
        this.bios.push(bio);
        this.storage.set('bios', this.bios);
    };
    DemographicServiceProvider.prototype.getDemographics = function () {
        var _this = this;
        return this.storage.get('bios').then(function (bios) {
            _this.bios = bios == null ? [] : bios;
            return _this.bios.slice();
        });
    };
    DemographicServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], DemographicServiceProvider);
    return DemographicServiceProvider;
}());

//# sourceMappingURL=demographic-service.js.map

/***/ })

},[429]);
//# sourceMappingURL=main.js.map