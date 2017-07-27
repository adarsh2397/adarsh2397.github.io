webpackJsonp([1,5],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__education_education_component__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projects_projects_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__experience_experience_component__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__["a" /* ProfileComponent */]
    },
    {
        path: 'education',
        component: __WEBPACK_IMPORTED_MODULE_4__education_education_component__["a" /* EducationComponent */]
    },
    {
        path: 'projects',
        component: __WEBPACK_IMPORTED_MODULE_5__projects_projects_component__["a" /* ProjectsComponent */]
    },
    {
        path: 'experience',
        component: __WEBPACK_IMPORTED_MODULE_6__experience_experience_component__["a" /* ExperienceComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(177),
        styles: [__webpack_require__(163)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_about_me_about_me_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__education_education_component__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__projects_projects_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__experience_experience_component__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_about_me_about_me_component__["a" /* AboutMeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_11__education_education_component__["a" /* EducationComponent */],
            __WEBPACK_IMPORTED_MODULE_12__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__experience_experience_component__["a" /* ExperienceComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(180),
        styles: [__webpack_require__(166)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 10) {
                $('#navbar-head').fadeOut('slow');
            }
            else {
                $('#navbar-head').fadeIn('slow');
            }
        });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(181),
        styles: [__webpack_require__(167)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutMeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutMeComponent = (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    return AboutMeComponent;
}());
AboutMeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-about-me',
        template: __webpack_require__(182),
        styles: [__webpack_require__(168)]
    }),
    __metadata("design:paramtypes", [])
], AboutMeComponent);

//# sourceMappingURL=about-me.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "#footer {\n    margin: 0;\n    padding: 25px;\n    height: 200px;\n    width: 100%;\n    background: rgba(0, 0, 0, 0.7);\n    color: white;\n    text-align: center;\n    font-family: Arial, Helvetica, sans-serif\n}\n\n.footer-heading {\n    font-size: 32px;\n}\n\n.follow-links a {\n    color: white;\n}\n\n.follow-links a:hover {\n    opacity: 0.5;\n}\n\n.bottom-text {\n    position: absolute;\n    left: 0;\n    right: 0;\n    height: 30px;\n    margin-top: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".navbar {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    margin: 0 auto;\n    position: fixed;\n    left: 0;\n    right: 0;\n    border-radius: 0px;\n}\n\n.navbar .container-fluid {\n    padding: 0px;\n}\n\n.navbar li a {\n    padding: 6px;\n}\n\n.fa-top {\n    padding: 0;\n    margin: 5px;\n    font-size: 32px;\n}\n\n@media(max-width: 768px) {\n    .fa-top {\n        font-size: 22px;\n    }\n}\n\n.navbar-collapse.collapse {\n    display: block!important;\n}\n\n.navbar-nav>li,\n.navbar-nav {\n    float: left !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "#about-me {\n    text-align: center;\n    padding-top: 25px;\n    padding-bottom: 25px;\n}\n\n.section-heading {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    font-size: 32px;\n    font-family: 'Fjalla One', sans-serif;\n    margin: 0 auto;\n}\n\nhr {\n    display: block;\n    margin-top: 0em;\n    margin-bottom: 0.5em;\n    margin-left: auto;\n    margin-right: auto;\n    border-style: solid;\n    border-width: 2px;\n    width: 10%;\n    border-top: none;\n    transition: 0.5s width ease;\n}\n\n.section-heading:hover hr {\n    width: 100%;\n}\n\n.section-content {\n    font-size: 16px;\n    font-family: 'Slabo+27px', serif;\n}\n\n.info-links {\n    margin-top: 30px;\n}\n\n.info-links a {\n    color: inherit;\n}\n\n.info-links a:hover {\n    opacity: 0.8;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "#home-head {\n    background-image: url(" + __webpack_require__(221) + ");\n    background-size: 100% 100%;\n    height: 100vh;\n    width: 100%;\n    padding-top: 100px;\n    text-align: center;\n}\n\n.home-img {\n    border-radius: 50%;\n    margin: 10px;\n}\n\n.home-heading {\n    background: rgba(0, 0, 0, 0.2);\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    margin: 0 auto;\n    padding: 15px;\n    color: white;\n    font-size: 24px;\n    margin-bottom: 40px;\n}\n\n.home-heading:hover {\n    background: rgba(0, 0, 0, 0.5);\n    cursor: pointer;\n}\n\n.quote {\n    color: white;\n    font-size: 24px;\n}\n\n.down-arrow {\n    position: absolute;\n    bottom: 20px;\n    color: rgba(0, 0, 0, 0.6);\n    font-size: 48px;\n    left: 0;\n    right: 0;\n}\n\n.down-arrow:hover {\n    color: rgba(0, 0, 0, 0.9);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"page\">\n        <div class=\"page-heading\">\n            Education\n            <hr class=\"page-hr\">\n        </div>\n        <div class=\"page-section\">\n            <div class=\"page-section-heading\">\n                National Institute of Technology Karnataka, Surathkal (NITK) - CSE\n            </div>\n            <div class=\"page-section-content\">\n                <p>\n                    I am currently in my 5<sup>th</sup> Semester of Computer Science Engineering (CSE) at NITK. Over the past few years, I have learnt a lot in college, starting with living independently, making new friends from all over India and even\n                    from other countries, the various cultures of India, sleeping late at night as well as waking up late and running to class and so much more. Right now, still can't believe that two years have already passed. I still remember the first\n                    day I entered this college and my first time in a hostel. Anyways two more years to go and its time to make the most of it.\n                </p>\n                <div class=\"page-section-subheading\">\n                    Current CGPA : 9.14 <br> SGPA (I, II, III, IV) : 9.24 | 9.4 | 8.82 | 9.15\n                </div>\n                <div class=\"page-section-subheading\">\n                    Courses Completed:\n                </div>\n                <div class=\"page-section-content\">\n                    <small>Ordered by Most Recent and Most Relevant</small>\n                    <ul>\n                        <li>Operating Systems Concepts</li>\n                        <li>Data Communications</li>\n                        <li>Design and Analysis of Algorithms</li>\n                        <li>Object Oriented Programming in C++</li>\n                        <li>Software Engineering</li>\n                        <li>Data Structures and Algorithms</li>\n                        <li>Theory of Computation</li>\n                        <li>Computer Organisation and Architecture</li>\n                        <li>Design of Digital Systems</li>\n                        <li>Concrete Mathematics</li>\n                        <li>Physics</li>\n                        <li>Chemistry</li>\n                        <li>Elements of Mechanical Engineering</li>\n                        <li>Applied Mechanics</li>\n                        <li>Engineering Mathematics - I</li>\n                        <li>Engineering Mathematics - II</li>\n                        <li>Computer Programming in C</li>\n                        <li>Engineering Drawing</li>\n                        <li>Professional Communication</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"page-section\">\n            <div class=\"page-section-heading\">\n                Sri Kumarans Children's Home - CBSE (SKCH CBSE, Bangalore) - XI-XII\n            </div>\n            <div class=\"page-section-content\">\n                <p>\n                    I studied 11<sup>th</sup> and 12<sup>th</sup> Standard over here. It was my first time in Bangalore and took me some time to get adjusted to, but I ended liking the college and the friends I made over here. SKCH taught me a lot of\n                    stuff, but mainly it taught me how to be a good human being (Not Boasting!).\n                </p>\n                <div class=\"page-section-subheading\">\n                    CBSE XII Boards: 96%\n                </div>\n            </div>\n        </div>\n        <div class=\"page-section\">\n            <div class=\"page-section-heading\">\n                Global Indian International School, Singapore (GIIS) - II-X\n            </div>\n            <div class=\"page-section-content\">\n                <p>\n                    I have studied in this school for a major part of my educational life. I have literally grown along with this school. I joined this school when it opened up in Singapore and offered CBSE syllabus and grew up as the school itself grew to over 20 campuses\n                    worldwide. I had many great moments in this school and formed friends whom I wouldn't forget. I thank this school for giving me a good foundation from the beginning.\n                </p>\n                <div class=\"page-section-subheading\">\n                    CBSE-i X Boards: 10 CGPA\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"page\">\n        <div class=\"page-heading\">\n            Work Experience\n            <hr class=\"page-hr\">\n        </div>\n        <div class=\"page-section\">\n            <div class=\"page-section-heading\">\n                <div class=\"col-sm-8 col-xs-8\">\n                    Software Developer <br> <small>Savemonk, Bangalore</small>\n                </div>\n                <div class=\"col-sm-4 col-xs-4 text-right\">\n                    <small>May 2017 - July 2017</small>\n                </div>\n            </div>\n            <div class=\"page-section-content\">\n                <p>\n                    Savemonk is an online affliate advertising company that gives cashback to users who shop on e\n                </p>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"footer\">\n    <div class=\"footer-heading\">\n        Follow Me\n    </div>\n    <div class=\"follow-links\">\n        <a href=\"\" title=\"Facebook\"><i class=\"fa fa-facebook fa-md fa-box\"></i></a>\n        <a href=\"\" title=\"Twitter\"><i class=\"fa fa-twitter fa-md fa-box\"></i></a>\n        <a href=\"\" title=\"GitHub\"><i class=\"fa fa-github fa-md fa-box\"></i></a>\n    </div>\n    <div class=\"bottom-text\">\n        Adarsh Honawad\n    </div>\n</div>"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" id=\"navbar-head\">\n    <div class=\"container-fluid\">\n        <ul class=\"nav navbar-nav\">\n            <li routerLinkActive=\"active\"><a href=\"\" routerLink=\"home\"><i class=\"fa fa-home fa-top\"></i></a></li>\n            <li routerLinkActive=\"active\"><a href=\"#\" routerLink=\"profile\" title=\"Profile\"><i class=\"fa fa-user fa-top\"></i></a></li>\n            <li routerLinkActive=\"active\"><a href=\"#\" routerLink=\"education\" title=\"Education\"><i class=\"fa fa-graduation-cap fa-top\"></i></a></li>\n            <li routerLinkActive=\"active\"><a href=\"#\" routerLink=\"projects\" title=\"Projects\"><i class=\"fa fa-code fa-top\"></i></a></li>\n            <li routerLinkActive=\"active\"><a href=\"#\" routerLink=\"experience\" title=\"Work Experience\"><i class=\"fa fa-briefcase fa-top\"></i></a></li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<!--Template for all Sections -->\n\n<div class=\"container\" id=\"about-me\">\n    <div class=\"section-heading\">\n        About Me\n        <hr>\n    </div>\n    <div class=\"section-content\">\n        <!-- Section's Independant Content Goes Here -->\n        <p>\n          <!-- About me Content is supposed to go here -->\n        </p>\n        <!-- End of Independant Content -->\n        <div class=\"info-links\">\n            <a href=\"\" routerLink=\"/profile\" title=\"More About Me\" data-toggle=\"tooltip\"><i class=\"fa fa-user fa-big fa-box\"></i></a>\n            <a href=\"\" routerLink=\"/education\" title=\"Education\"><i class=\"fa fa-graduation-cap fa-big fa-box\"></i></a>\n            <a href=\"\" title=\"Projects\"><i class=\"fa fa-code fa-big fa-box\"></i></a>\n            <a href=\"\" title=\"Work Experience\"><i class=\"fa fa-briefcase fa-big fa-box\"></i></a>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<!-- This page contains the Home Page Image -->\n<div id=\"home-head\">\n    <img src=\"../../assets/img/face.jpg\" class=\"home-img\">\n    <div class=\"white-box home-heading\">\n        Adarsh Honawad\n    </div>\n    <div class=\"quote\">\"Be yourself. Everyone else is already taken.\"<br><span>- Oscar Wilde</span></div>\n    <div class=\"down\">\n        <i class=\"fa fa-chevron-down down-arrow\"></i>\n    </div>\n</div>\n<app-about-me></app-about-me>"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"page\">\n        <div class=\"page-heading\">\n            Adarsh Honawad\n            <hr class=\"page-hr\">\n        </div>\n        <div class=\"page-section\">\n            <p>\n                I am an enthusiastic developer who just enjoys making some small helpful piece of software hoping to one day make something big out of all of them. I spend most of my time on the computer, either browsing the web for recent technologies and cool stuff\n                or learning new things or just playing 8 ball pool on miniclip (open for a challenge anytime, find me on miniclip).\n                <br> My interest in Computer Science isn't yet limited to a specific field. I am still open to all upcoming fields in computer science and have been trying out most of them. I have developed a few sites using different frameworks like\n                django, Angular, plain HTML/JS/PHP, have used databases like MySQL, MongoDB, SQLite etc etc. You can find all this information in my portfolio below or check out my projects page for more details.\n            </p>\n        </div>\n        <div class=\"page-section\">\n            <div class=\"page-section-heading\">\n                Personal\n            </div>\n            <div class=\"page-section-content\">\n                <p>\n                    Born in Karnataka, India on 23<sup>rd</sup> November 1997, I studied in a place called Gadag till my 1<sup>st</sup> Standard. I then moved out of India to Singapore to continue my education there till 10<sup>th</sup>. Having been interested\n                    in continuing my education in India since before, we moved back to Bangalore in 2013, to continue my 11<sup>th</sup> and 12<sup>th</sup> Standard. I have been staying in Bangalore ever since and currently am studying Computer Science\n                    Engineering in National Institue of Technology, Surathkal (NITK).\n                </p>\n            </div>\n        </div>\n        <div class=\"page-section\">\n            <div class=\"page-section-heading\">\n                Hobbies and Interests\n            </div>\n            <div class=\"page-section-content\">\n                <p>\n                    I enjoy reading books (though I barely get time to), watching movies and TV shows. I have no preference over Bollywood or Hollywood, a good movie is just a good movie. Some of my favorite are The Dark Knight series, Pirates of the Carribean and Lord of\n                    the Rings. Among TV shows my favorites are (without doubt) <img src=\"../assets/img/got_small.png\" style=\"display:inline\">, <img src=\"../assets/img/sherlock_small.jpg\" style=\"display:inline;\">, <img src=\"../assets/img/suits_small.jpg\"\n                        style=\"display:inline;\">, <img src=\"../assets/img/siliconvalley_small.jpg\" style=\"display:inline;\">,\n                    <img src=\"../assets/img/friends_small.png\" style=\"display:inline\"> and <img src=\"../assets/img/daredevil_small.jpg\" style=\"display:inline\">. If you haven't watched these, then make sure to catch them, they are all just amazing!\n                    <br> Coming back to books, one of my favorite author is Anthony Horowitz. His Alex Rider series and the Power of Five series are really good. For those who love some detective series or just plain superpower fun, do catch these two\n                    series.\n                </p>\n            </div>\n        </div>\n        <div class=\"page-section\">\n            <div class=\"page-section-heading\">\n                Achievements\n            </div>\n            <div class=\"page-section-content\">\n                <ul>\n                    <li>Qualified for KVPY Scholarship in 2015</li>\n                    <li>Scored 96% in CBSE XII Boards</li>\n                    <li>Received Medals in IMO and NCO for achievement in State and International Ranks for two consecutive years in 2013 and 2014.</li>\n                    <li>Scored 10 CGPA in CBSE-i X Boards</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"page\">\n        <div class=\"page-heading\">\n            Projects\n            <hr class=\"page-hr\">\n        </div>\n        <div class=\"page-section\">\n            <p>\n                I have worked on various domains in the field of Computer Science in the past few years and have built several small-scale to large-scale projects. Here is a small list of them:\n            </p>\n        </div>\n        <div class=\"page-section\">\n            <div class=\"page-section-heading\">\n                ID Card Reader\n                <small><i>(ongoing)</i></small>\n            </div>\n            <div class=\"page-section-content\">\n                <p>\n                    I am currently working on developing an application that can read text from an ID Card correctly label it using k-NN algorithm. Am using OpenCV for Python to extract the text regions from the ID Card. I will then store a map of text regions and labels\n                    (of several photos) which will be used by the k-NN algorithm to predict the label of the text in any new image.\n                </p>\n            </div>\n        </div>\n        <div class=\"page-section\">\n            <div class=\"page-section-heading\">\n                Whiteboard\n                <small><i>(ongoing)</i></small>\n            </div>\n            <div class=\"page-section-content\">\n                <p>\n                    Working on a desktop application that allows multiple users to work on a shared folder simultaneously. The application allows users to share folders and files (as read-only or with write access) over a local network (session). Users can connect to the\n                    session and start viewing the directory as well as make changes (if given permission). The application would also allow for real-time viewing of code as it is typed in an inbuilt text-editor.\n                </p>\n                <div class=\"page-section-subheading\">\n                    <p>\n                        <b>Tools/Frameworks used: Electron, Angular, socket.io</b>\n                    </p>\n                </div>\n            </div>\n        </div>\n        <div class=\"page-section\">\n            <div class=\"page-section-heading\">\n                Online Judge\n            </div>\n            <div class=\"page-section-content\">\n                <p>\n                    Developed a website similar to Hackerrank and CodeChef using Django (python web framework) and MySQL databases. The application allows users to register accounts, login and maintain their profile. Any user can submit a problem and solve any number of\n                    problems in over 10+ languages. The backend python script can execute code in more than 10+ languages and can even handle concurrent submissions.\n                </p>\n                <div class=\"page-section-subheading\">\n                    <p>\n                        <b>Tools/Frameworks used: Django, MySQL databases (backend)</b>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.3e419d278b110fe291a7.jpg";

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(90);


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducationComponent = (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    return EducationComponent;
}());
EducationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-education',
        template: __webpack_require__(178),
        styles: [__webpack_require__(164)]
    }),
    __metadata("design:paramtypes", [])
], EducationComponent);

//# sourceMappingURL=education.component.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExperienceComponent = (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    return ExperienceComponent;
}());
ExperienceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-experience',
        template: __webpack_require__(179),
        styles: [__webpack_require__(165)]
    }),
    __metadata("design:paramtypes", [])
], ExperienceComponent);

//# sourceMappingURL=experience.component.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(183),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__(184),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-projects',
        template: __webpack_require__(185),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [])
], ProjectsComponent);

//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 89;


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(107);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[224]);
//# sourceMappingURL=main.bundle.js.map