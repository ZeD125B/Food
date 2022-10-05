/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!./style/style.css":
/*!****************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./style/style.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/switch.svg */ \"./assets/icons/switch.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap&subset=cyrillic-ext);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    box-sizing: border-box;\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    font-family: Roboto, sans-serif;\\r\\n}\\r\\na {\\r\\n    text-decoration: none;\\r\\n}\\r\\n\\r\\n.overflowHidden {\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n    width: 220px;\\r\\n    height: 65px;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    background-color: #fff;\\r\\n    font-size: 18px;\\r\\n    font-weight: 700;\\r\\n    border: 1px solid rgba(0, 0, 0, .2);\\r\\n    box-shadow: 0 4px 15px rgba(0, 0, 0, .2);\\r\\n    cursor: pointer;\\r\\n    transition: .3s all;\\r\\n    outline: 0;\\r\\n}\\r\\n.btn_white {\\r\\n    background-color: #fff;\\r\\n}\\r\\n.btn_dark {\\r\\n    background-color: #303030;\\r\\n    color: #fff;\\r\\n    border: none;\\r\\n}\\r\\n.btn_min {\\r\\n    height: 50px;\\r\\n}\\r\\n.btn:hover {\\r\\n    box-shadow: 0 4px 30px rgba(0, 0, 0, .3);\\r\\n}\\r\\n.container {\\r\\n    max-width: 1200px;\\r\\n    margin: 0 auto;\\r\\n}\\r\\n.divider {\\r\\n    width: 330px;\\r\\n    height: 1px;\\r\\n    margin: 0 auto;\\r\\n    background-color: rgba(0, 0, 0, .5);\\r\\n}\\r\\n.title {\\r\\n    font-size: 36px;\\r\\n    font-weight: 400;\\r\\n}\\r\\n.header {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    height: 150px;\\r\\n    padding: 0 100px;\\r\\n}\\r\\n.header__left-block {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    min-width: 550px;\\r\\n}\\r\\n.header__logo {\\r\\n    max-width: 170px;\\r\\n}\\r\\n.header__logo img {\\r\\n    width: 100%}\\r\\n.header__links {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n}\\r\\n.header__link {\\r\\n    position: relative;\\r\\n    margin-right: 45px;\\r\\n    font-weight: 700;\\r\\n    font-size: 18px;\\r\\n    color: #303030;\\r\\n}\\r\\n.header__link:after {\\r\\n    content: '';\\r\\n    position: absolute;\\r\\n    display: block;\\r\\n    width: 110%;\\r\\n    left: -5%;\\r\\n    bottom: -1px;\\r\\n    z-index: -1;\\r\\n    height: 8px;\\r\\n    background: #54ed39;\\r\\n}\\r\\n.header__link:last-child {\\r\\n    margin-right: 0;\\r\\n}\\r\\n.sidepanel {\\r\\n    position: fixed;\\r\\n    left: 60px;\\r\\n    top: 240px;\\r\\n    height: 400px;\\r\\n    width: 25px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n}\\r\\n.sidepanel__text {\\r\\n    width: 120px;\\r\\n    height: 120px;\\r\\n    font-size: 14px;\\r\\n}\\r\\n.sidepanel__text span {\\r\\n    display: flex;\\r\\n    transform: rotate(-90deg) translateX(-50px);\\r\\n}\\r\\n.sidepanel__divider {\\r\\n    width: 1px;\\r\\n    height: 165px;\\r\\n    background-color: #000;\\r\\n}\\r\\n.sidepanel__icon {\\r\\n    width: 24px;\\r\\n    height: 24px;\\r\\n}\\r\\n.sidepanel__icon img {\\r\\n    width: 100%}\\r\\n.preview {\\r\\n    padding: 28px 0 100px 0;\\r\\n    position: relative;\\r\\n}\\r\\n.preview__life {\\r\\n    font-weight: 700;\\r\\n    font-size: 20px;\\r\\n    margin-left: 35px;\\r\\n    margin-top: 35px;\\r\\n}\\r\\n.bgc_blue {\\r\\n    position: absolute;\\r\\n    right: 0;\\r\\n    top: -155px;\\r\\n    width: 50vw;\\r\\n    height: 900px;\\r\\n    background: rgba(146, 242, 255, .15);\\r\\n    z-index: -1;\\r\\n}\\r\\n.tabcontainer {\\r\\n    display: flex;\\r\\n    width: 1130px;\\r\\n    margin: 0 auto;\\r\\n    box-shadow: 0 4px 30px rgba(0, 0, 0, .25);\\r\\n}\\r\\n.tabcontent {\\r\\n    width: 850px;\\r\\n    position: relative;\\r\\n}\\r\\n.tabcontent img {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    object-fit: cover;\\r\\n}\\r\\n.tabcontent__descr {\\r\\n    position: absolute;\\r\\n    top: 300px;\\r\\n    right: -177px;\\r\\n    width: 550px;\\r\\n    height: 359px;\\r\\n    background: rgba(251, 254, 93, .8);\\r\\n    padding: 50px;\\r\\n    font-size: 24px;\\r\\n    font-weight: 300;\\r\\n    line-height: 36px;\\r\\n    color: rgba(0, 0, 0, .7);\\r\\n}\\r\\n.tabheader {\\r\\n    width: 280px;\\r\\n    padding: 35px 30px;\\r\\n    background-color: #fff;\\r\\n}\\r\\n.tabheader h3 {\\r\\n    font-weight: 700;\\r\\n    font-size: 16px;\\r\\n}\\r\\n.tabheader__items {\\r\\n    margin-top: 35px;\\r\\n    padding-left: 26px;\\r\\n    border-left: 1px solid #000;\\r\\n}\\r\\n.tabheader__item {\\r\\n    font-weight: 700;\\r\\n    font-size: 18px;\\r\\n    font-weight: 300;\\r\\n    margin-top: 10px;\\r\\n    color: rgba(0, 0, 0, .6);\\r\\n    cursor: pointer;\\r\\n    transition: .3s all;\\r\\n}\\r\\n.tabheader__item_active {\\r\\n    color: #000;\\r\\n    font-size: 22px;\\r\\n    font-weight: 700;\\r\\n}\\r\\n.offer {\\r\\n    padding: 70px 0 100px 0;\\r\\n    position: relative;\\r\\n}\\r\\n.offer .container {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n.offer .bgc_y {\\r\\n    position: absolute;\\r\\n    width: 1109px;\\r\\n    height: 780px;\\r\\n    background: rgba(243, 255, 222, .45);\\r\\n    z-index: -1;\\r\\n    top: 50px;\\r\\n}\\r\\n.offer__text {\\r\\n    width: 580px;\\r\\n}\\r\\n.offer__descr {\\r\\n    font-size: 18px;\\r\\n    margin-top: 30px;\\r\\n    font-weight: 300;\\r\\n    line-height: 24px;\\r\\n}\\r\\n.offer__action {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: flex-end;\\r\\n}\\r\\n.offer__advantages {\\r\\n    width: 330px;\\r\\n    margin-top: 50px;\\r\\n}\\r\\n.offer__advantages h2 {\\r\\n    font-weight: 700;\\r\\n    font-size: 20px;\\r\\n    margin-top: 20px;\\r\\n}\\r\\n.offer__advantages h2:first-child {\\r\\n    margin-top: 70px;\\r\\n}\\r\\n.offer__advantages-text {\\r\\n    margin-top: 20px;\\r\\n    font-size: 18px;\\r\\n    font-weight: 300;\\r\\n    line-height: 21px;\\r\\n}\\r\\n.offer__slider {\\r\\n    position: relative;\\r\\n    width: 650px;\\r\\n    margin-top: 50px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: flex-end;\\r\\n}\\r\\n.offer__slider-counter {\\r\\n    display: flex;\\r\\n    width: 180px;\\r\\n    align-items: center;\\r\\n    font-size: 24px;\\r\\n    color: rgba(0, 0, 0, .5);\\r\\n}\\r\\n.offer__slider-wrapper {\\r\\n    width: 100%;\\r\\n    margin-top: 15px;\\r\\n    box-shadow: 0 4px 30px rgba(0, 0, 0, .25);\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\n.offer__slider-inner {\\r\\n    display: flex;\\r\\n    transition: 0.5s all;\\r\\n}\\r\\n\\r\\n.offer__slider-prev {\\r\\n    margin-right: 10px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.offer__slider-next {\\r\\n    margin-left: 10px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.offer__slider #current {\\r\\n    font-size: 48px;\\r\\n    font-weight: 700;\\r\\n    color: #000;\\r\\n}\\r\\n.offer__slide {\\r\\n    width: 100%;\\r\\n    height: 390px;\\r\\n}\\r\\n.offer__slide img {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    object-fit: cover;\\r\\n}\\r\\n\\r\\n.carousel-indicators {\\r\\n    position: absolute;\\r\\n    right: 0;\\r\\n    bottom: 0;\\r\\n    left: 0;\\r\\n    z-index: 15;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    margin-right: 15%;\\r\\n    margin-left: 15%;\\r\\n    list-style: none;\\r\\n}\\r\\n\\r\\n.dot {\\r\\n    box-sizing: content-box;\\r\\n    flex: 0 1 auto;\\r\\n    width: 30px;\\r\\n    height: 6px;\\r\\n    margin-right: 3px;\\r\\n    margin-left: 3px;\\r\\n    cursor: pointer;\\r\\n    background-color: #fff;\\r\\n    background-clip: padding-box;\\r\\n    border-top: 10px solid transparent;\\r\\n    border-bottom: 10px solid transparent;\\r\\n    opacity: .5;\\r\\n    transition: opacity .6s ease;\\r\\n}\\r\\n\\r\\n.dot-active {\\r\\n    opacity: 1;\\r\\n}\\r\\n\\r\\n.calculating {\\r\\n    padding: 50px 0;\\r\\n}\\r\\n.calculating .title {\\r\\n    text-align: center;\\r\\n}\\r\\n.calculating__field {\\r\\n    width: 100%;\\r\\n    margin-top: 50px;\\r\\n    background: rgba(146, 242, 255, .15);\\r\\n    padding: 30px 0 40px 0;\\r\\n}\\r\\n.calculating__subtitle {\\r\\n    text-align: center;\\r\\n    font-size: 18px;\\r\\n    font-weight: 700;\\r\\n    margin-top: 30px;\\r\\n}\\r\\n.calculating__subtitle:first-child {\\r\\n    margin-top: 0;\\r\\n}\\r\\n.calculating #gender:after {\\r\\n    content: '';\\r\\n    position: absolute;\\r\\n    top: 50%;\\r\\n    transform: translateY(-50%);\\r\\n    display: block;\\r\\n    width: 16px;\\r\\n    height: 16px;\\r\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") center center/cover no-repeat;\\r\\n}\\r\\n.calculating__choose {\\r\\n    position: relative;\\r\\n    display: flex;\\r\\n    margin-top: 30px;\\r\\n    justify-content: center;\\r\\n}\\r\\n.calculating__choose-item {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    width: 170px;\\r\\n    height: 50px;\\r\\n    padding: 0 10px;\\r\\n    background: #fff;\\r\\n    box-shadow: 0 4px 15px rgba(0, 0, 0, .2);\\r\\n    border: none;\\r\\n    text-align: center;\\r\\n    font-size: 14px;\\r\\n    cursor: pointer;\\r\\n    outline: 0;\\r\\n    transition: .3s all;\\r\\n}\\r\\n.calculating__choose-item_active {\\r\\n    color: #fff;\\r\\n    background-color: #54ed39;\\r\\n}\\r\\n.calculating__choose_medium {\\r\\n    width: 743px;\\r\\n    justify-content: space-between;\\r\\n    margin: 30px auto 0 auto;\\r\\n}\\r\\n.calculating__choose_big {\\r\\n    width: 930px;\\r\\n    justify-content: space-between;\\r\\n    margin: 30px auto 0 auto;\\r\\n}\\r\\n.calculating__choose_big .calculating__choose-item {\\r\\n    width: 200px;\\r\\n}\\r\\n.calculating__divider {\\r\\n    width: 490px;\\r\\n    height: 1px;\\r\\n    margin: 40px auto;\\r\\n    background-color: rgba(0, 0, 0, .2);\\r\\n}\\r\\n.calculating__total {\\r\\n    width: 490px;\\r\\n    margin: 0 auto;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n}\\r\\n.calculating__result {\\r\\n    font-size: 18px;\\r\\n    font-weight: 700;\\r\\n}\\r\\n.calculating__result span {\\r\\n    font-size: 42px;\\r\\n}\\r\\n.menu {\\r\\n    padding: 40px 0 50px 0;\\r\\n}\\r\\n.menu .container {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: flex-start;\\r\\n}\\r\\n.menu .title {\\r\\n    text-align: center;\\r\\n}\\r\\n.menu__field {\\r\\n    margin-top: 50px;\\r\\n    padding: 50px 0;\\r\\n    width: 100%;\\r\\n    background: rgba(249, 254, 126, .25);\\r\\n}\\r\\n.menu__item {\\r\\n    width: 320px;\\r\\n    min-height: 450px;\\r\\n    background: #fff;\\r\\n    box-shadow: 0 4px 25px rgba(0, 0, 0, .25);\\r\\n    font-size: 16px;\\r\\n    font-weight: 300;\\r\\n}\\r\\n.menu__item img {\\r\\n    width: 100%;\\r\\n    height: 200px;\\r\\n    object-fit: cover;\\r\\n}\\r\\n.menu__item-subtitle {\\r\\n    font-weight: 700;\\r\\n    font-size: 18px;\\r\\n    padding: 0 20px;\\r\\n    margin-top: 20px;\\r\\n}\\r\\n.menu__item-descr {\\r\\n    margin-top: 20px;\\r\\n    padding: 0 20px;\\r\\n}\\r\\n.menu__item-divider {\\r\\n    width: 100%;\\r\\n    height: 1px;\\r\\n    background-color: rgba(0, 0, 0, .25);\\r\\n    margin-top: 40px;\\r\\n}\\r\\n.menu__item-price {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    padding: 10px 20px;\\r\\n}\\r\\n.menu__item-price span {\\r\\n    font-size: 24px;\\r\\n    font-weight: 700;\\r\\n}\\r\\n.order {\\r\\n    padding-bottom: 80px;\\r\\n}\\r\\n.order .title {\\r\\n    text-align: center;\\r\\n}\\r\\n.order__form {\\r\\n    margin-top: 70px;\\r\\n    padding: 0 100px;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n}\\r\\n.order__form img {\\r\\n    transform: scale(1.5);\\r\\n}\\r\\n.order__input {\\r\\n    width: 280px;\\r\\n    height: 50px;\\r\\n    background: #fff;\\r\\n    box-shadow: 0 4px 15px rgba(0, 0, 0, .2);\\r\\n    border: none;\\r\\n    font-size: 18px;\\r\\n    text-align: center;\\r\\n    padding: 0 20px;\\r\\n    outline: 0;\\r\\n}\\r\\n.promotion {\\r\\n    padding: 70px 0 240px 0;\\r\\n    position: relative;\\r\\n}\\r\\n.promotion .container {\\r\\n    display: flex;\\r\\n}\\r\\n.promotion .bgc_y {\\r\\n    position: absolute;\\r\\n    width: 50%;\\r\\n    height: 499px;\\r\\n    background: rgba(243, 255, 222, .35);\\r\\n    z-index: -1;\\r\\n    top: -50px;\\r\\n    left: 0;\\r\\n}\\r\\n.promotion__text {\\r\\n    width: 50%}\\r\\n.promotion__descr {\\r\\n    margin-top: 40px;\\r\\n    font-size: 20px;\\r\\n    line-height: 24px;\\r\\n    font-weight: 300;\\r\\n}\\r\\n.promotion__descr span {\\r\\n    font-weight: 700;\\r\\n    font-size: 26px;\\r\\n}\\r\\n.promotion__timer {\\r\\n    width: 50%}\\r\\n.promotion__timer .title {\\r\\n    text-align: right;\\r\\n}\\r\\n.promotion__timer .timer {\\r\\n    margin-top: 60px;\\r\\n    padding-left: 95px;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n}\\r\\n.promotion__timer .timer__block {\\r\\n    width: 102px;\\r\\n    height: 120px;\\r\\n    background: #fff;\\r\\n    box-shadow: 0 4px 20px rgba(0, 0, 0, .25);\\r\\n    font-size: 16px;\\r\\n    font-weight: 300;\\r\\n    text-align: center;\\r\\n}\\r\\n.promotion__timer .timer__block span {\\r\\n    display: block;\\r\\n    margin-top: 20px;\\r\\n    margin-bottom: 5px;\\r\\n    font-size: 56px;\\r\\n    font-weight: 700;\\r\\n}\\r\\n.footer {\\r\\n    min-height: 180px;\\r\\n    background-color: #303030;\\r\\n    padding: 45px 0 50px 0;\\r\\n    color: #fff;\\r\\n}\\r\\n.footer .container {\\r\\n    height: 100%;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: flex-end;\\r\\n}\\r\\n.footer .subtitle {\\r\\n    font-size: 20px;\\r\\n}\\r\\n.footer .link {\\r\\n    display: block;\\r\\n    margin-top: 15px;\\r\\n    font-size: 16px;\\r\\n    color: #fff;\\r\\n}\\r\\n.footer .call {\\r\\n    text-align: right;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    z-index: 1050;\\r\\n    display: none;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    overflow: hidden;\\r\\n    background-color: rgba(0, 0, 0, .5);\\r\\n}\\r\\n\\r\\n.show {\\r\\n    display: block;\\r\\n    \\r\\n}\\r\\n\\r\\n.hide{\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.modal__dialog {\\r\\n    max-width: 500px;\\r\\n    margin: 40px auto;\\r\\n}\\r\\n\\r\\n.modal__content {\\r\\n    position: relative;\\r\\n    width: 100%;\\r\\n    padding: 40px;\\r\\n    background-color: #fff;\\r\\n    border: 1px solid rgba(0, 0, 0, .2);\\r\\n    border-radius: 4px;\\r\\n    max-height: 80vh;\\r\\n    overflow-y: auto;\\r\\n}\\r\\n\\r\\n.modal__close {\\r\\n    position: absolute;\\r\\n    top: 8px;\\r\\n    right: 14px;\\r\\n    font-size: 30px;\\r\\n    color: #000;\\r\\n    opacity: .5;\\r\\n    font-weight: 700;\\r\\n    border: none;\\r\\n    background-color: transparent;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.modal__title {\\r\\n    text-align: center;\\r\\n    font-size: 22px;\\r\\n    text-transform: uppercase;\\r\\n}\\r\\n\\r\\n.modal__input {\\r\\n    display: block;\\r\\n    margin: 20px auto 20px auto;\\r\\n    width: 280px;\\r\\n    height: 50px;\\r\\n    background: #fff;\\r\\n    box-shadow: 0 4px 15px rgba(0, 0, 0, .2);\\r\\n    border: none;\\r\\n    font-size: 18px;\\r\\n    text-align: center;\\r\\n    padding: 0 20px;\\r\\n    outline: 0;\\r\\n}\\r\\n\\r\\n.modal .btn {\\r\\n    display: block;\\r\\n    width: 280px;\\r\\n    margin: 0 auto;\\r\\n}\\r\\n\\r\\n.hideContent {\\r\\n    display:  none;\\r\\n    transition: 1s;\\r\\n}\\r\\n\\r\\n.spinner {\\r\\n    position: relative;\\r\\n    top: 20px;\\r\\n    display: block;\\r\\n    margin: 0 auto;\\r\\n    width: 40px;\\r\\n    height: 40px;\\r\\n    z-index: 999;\\r\\n}\\r\\n\\r\\n.fade {\\r\\n    animation-name: fade;\\r\\n    animation-duration: 1s;\\r\\n}\\r\\n\\r\\n@keyframes fade {\\r\\n    from {\\r\\n        opacity: 0.1;\\r\\n    }\\r\\n    to {\\r\\n        opacity: 1;\\r\\n    }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./style/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./style/style.css":
/*!*************************!*\
  !*** ./style/style.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./style/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./style/style.css?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./assets/icons/switch.svg":
/*!*********************************!*\
  !*** ./assets/icons/switch.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"11bc466dd815695d241d.svg\";\n\n//# sourceURL=webpack:///./assets/icons/switch.svg?");

/***/ }),

/***/ "./calc.js":
/*!*****************!*\
  !*** ./calc.js ***!
  \*****************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getCalc)\n/* harmony export */ });\nfunction getCalc() {\r\n  const result = document.querySelector('.calculating__result span');\r\n\r\n  let sex;\r\n  let height;\r\n  let weight;\r\n  let age;\r\n  let ratio;\r\n\r\n  if (localStorage.getItem('sex')) {\r\n    sex = localStorage.getItem('sex');\r\n  } else {\r\n    localStorage.setItem('sex', 'female');\r\n    sex = 'female';\r\n  }\r\n\r\n  if (localStorage.getItem('ratio')) {\r\n    ratio = localStorage.getItem('ratio');\r\n  } else {\r\n    localStorage.setItem('ratio', 1.375);\r\n    ratio = 1.375;\r\n  }\r\n\r\n  function calcTotal() {\r\n    if (!sex || !height || !weight || !age || !ratio) {\r\n      result.textContent = '______';\r\n      return;\r\n    }\r\n\r\n    if (sex === 'female') {\r\n      result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age) * ratio));\r\n    } else {\r\n      result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age) * ratio));\r\n    }\r\n  }\r\n\r\n  calcTotal();\r\n\r\n  function getStaticInformation(selector, activeClass) {\r\n    const elements = document.querySelectorAll(selector);\r\n\r\n    elements.forEach((elem) => {\r\n      elem.addEventListener('click', (e) => {\r\n        if (e.target.getAttribute('data-ratio')) {\r\n          ratio = +e.target.getAttribute('data-ratio');\r\n          localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));\r\n        } else {\r\n          sex = e.target.getAttribute('id');\r\n          localStorage.setItem('sex', e.target.getAttribute('id'));\r\n        }\r\n\r\n        elements.forEach((element) => {\r\n          element.classList.remove(activeClass);\r\n        });\r\n\r\n        e.target.classList.add(activeClass);\r\n        calcTotal();\r\n      });\r\n    });\r\n  }\r\n\r\n  function setActiveElements(selector, activeClass) {\r\n    const elements = document.querySelectorAll(selector);\r\n\r\n    elements.forEach((elem) => {\r\n      elem.classList.remove(activeClass);\r\n\r\n      if (localStorage.getItem('sex') === elem.getAttribute('id')) {\r\n        elem.classList.add(activeClass);\r\n      }\r\n\r\n      if (localStorage.getItem('ratio') === elem.getAttribute('data-ratio')) {\r\n        elem.classList.add(activeClass);\r\n      }\r\n    });\r\n  }\r\n\r\n  setActiveElements('#gender div', 'calculating__choose-item_active');\r\n  setActiveElements('.calculating__choose_big div', 'calculating__choose-item_active');\r\n\r\n  function getDynamicInformation(selector) {\r\n    const input = document.querySelector(selector);\r\n\r\n    input.addEventListener('input', () => {\r\n      if (input.value.match(/\\D/g)) {\r\n        input.style.border = '2px solid red';\r\n      } else {\r\n        input.style.border = 'none';\r\n      }\r\n      switch (input.getAttribute('id')) {\r\n        case 'height':\r\n          height = +input.value;\r\n          break;\r\n        case 'age':\r\n          age = +input.value;\r\n          break;\r\n        case 'weight':\r\n          weight = +input.value;\r\n          break;\r\n        default:\r\n      }\r\n      calcTotal();\r\n    });\r\n  }\r\n\r\n  getDynamicInformation('#age');\r\n  getDynamicInformation('#weight');\r\n  getDynamicInformation('#height');\r\n\r\n  getStaticInformation('#gender div', 'calculating__choose-item_active');\r\n  getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');\r\n}\r\n\n\n//# sourceURL=webpack:///./calc.js?");

/***/ }),

/***/ "./cards.js":
/*!******************!*\
  !*** ./cards.js ***!
  \******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getCards)\n/* harmony export */ });\nfunction getCards() {\r\n  class Cards {\r\n    constructor(src, alt, subtitle, descr, price, parent, ...classes) {\r\n      this.src = src;\r\n      this.alt = alt;\r\n      this.subtitle = subtitle;\r\n      this.descr = descr;\r\n      this.price = price;\r\n      this.parent = document.querySelector(parent);\r\n      this.classes = classes;\r\n    }\r\n\r\n    render() {\r\n      const element = document.createElement('div');\r\n\r\n      if (this.classes.includes('menu__item') === false || this.classes.length === 0) {\r\n        this.classes = 'menu__item';\r\n        element.classList.add(this.classes);\r\n      } else {\r\n        this.classes.forEach((className) => element.classList.add(className));\r\n      }\r\n\r\n      element.innerHTML = `\r\n        <img src=\"${this.src}\" alt=\"${this.alt}\">\r\n          <h3 class=\"menu__item-subtitle\">\"${this.subtitle}\"</h3>\r\n          <div class=\"menu__item-descr\">${this.descr}</div>\r\n          <div class=\"menu__item-divider\"></div>\r\n          <div class=\"menu__item-price\">\r\n          <div class=\"menu__item-cost\">Цена:</div>\r\n          <div class=\"menu__item-total\"><span>${this.price}</span> руб/день</div>\r\n        </div>\r\n            `;\r\n      this.parent.append(element);\r\n    }\r\n  }\r\n\r\n  // eslint-disable-next-line no-undef\r\n  axios.get('http://localhost:3000/menu')\r\n    .then((data) => {\r\n      data.data.forEach(({\r\n        img, altImg, title, descr, price,\r\n      }) => {\r\n        new Cards(img, altImg, title, descr, price, '.menu .container').render();\r\n      });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./cards.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.js */ \"./tabs.js\");\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer.js */ \"./timer.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.js */ \"./modal.js\");\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards.js */ \"./cards.js\");\n/* harmony import */ var _thanksModal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./thanksModal.js */ \"./thanksModal.js\");\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slider.js */ \"./slider.js\");\n/* harmony import */ var _calc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calc.js */ \"./calc.js\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style/style.css */ \"./style/style.css\");\n/* eslint-disable import/extensions */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n  (0,_tabs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.tabcontent', '.tabheader__items', '.tabheader__item', 'tabheader__item_active');\r\n  (0,_timer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.timer', '2022-10-24T20:47');\r\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('[data-modal]', '.modal', 6000);\r\n  (0,_thanksModal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('.modal');\r\n  (0,_cards_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  (0,_slider_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n    slidesSelector: '.offer__slide',\r\n    sliderSelector: '.offer__slider',\r\n    nextArrow: '.offer__slider-next',\r\n    prevArrow: '.offer__slider-prev',\r\n    current: '#current',\r\n    total: '#total',\r\n    wrapper: '.offer__slider-wrapper',\r\n    field: '.offer__slider-inner',\r\n    carouselIndicatorsSelector: '.carousel-indicators',\r\n    dotsSelector: '.dot',\r\n  });\r\n  (0,_calc_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modal.js":
/*!******************!*\
  !*** ./modal.js ***!
  \******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getModal),\n/* harmony export */   \"modalClosing\": () => (/* binding */ modalClosing),\n/* harmony export */   \"modalOpened\": () => (/* binding */ modalOpened)\n/* harmony export */ });\nfunction modalOpened(modalSelector, timer) {\r\n  const modal = document.querySelector(modalSelector);\r\n  modal.classList.add('show');\r\n  modal.classList.remove('hide');\r\n  modal.classList.add('wasOpen');\r\n  document.body.classList.add('overflowHidden');\r\n  if (timer) {\r\n    clearInterval(timer);\r\n  }\r\n}\r\n\r\nfunction modalClosing(modalSelector) {\r\n  const modal = document.querySelector(modalSelector);\r\n  modal.classList.add('closeItem');\r\n  modal.classList.remove('show');\r\n  document.body.classList.remove('overflowHidden');\r\n}\r\n\r\nfunction getModal(triggerSelector, modalSelector, t) {\r\n  const modal = document.querySelector(modalSelector);\r\n  const modalBtn = document.querySelectorAll(triggerSelector);\r\n  const timerModal = setTimeout(() => modalOpened(modalSelector), t);\r\n\r\n  modalBtn.forEach((item) => {\r\n    item.addEventListener('click', () => modalOpened(modalSelector, timerModal));\r\n  });\r\n\r\n  modal.addEventListener('click', (e) => {\r\n    const event = e.target;\r\n    if (event === modal || e.target.getAttribute('data-close') === '') {\r\n      modalClosing(modalSelector);\r\n    }\r\n  });\r\n\r\n  document.addEventListener('keydown', (e) => {\r\n    if (e.code === 'Escape') {\r\n      modalClosing(modalSelector);\r\n    }\r\n  });\r\n\r\n  function openModalByScroll() {\r\n    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.offsetHeight - 1) {\r\n      modalOpened(modalSelector, timerModal);\r\n      clearInterval(timerModal);\r\n      window.removeEventListener('scroll', openModalByScroll);\r\n    }\r\n  }\r\n\r\n  window.addEventListener('scroll', openModalByScroll);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modal.js?");

/***/ }),

/***/ "./service/service.js":
/*!****************************!*\
  !*** ./service/service.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postData = async (url, data) => {\r\n  const result = await fetch(url, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-type': 'application/json',\r\n    },\r\n    body: data,\r\n  });\r\n  const req = await result.json();\r\n  return req;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\r\n\n\n//# sourceURL=webpack:///./service/service.js?");

/***/ }),

/***/ "./slider.js":
/*!*******************!*\
  !*** ./slider.js ***!
  \*******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getSlider)\n/* harmony export */ });\nfunction getSlider({\r\n  slidesSelector, sliderSelector, nextArrow, prevArrow, current, total, wrapper, field, carouselIndicatorsSelector, dotsSelector,\r\n}) {\r\n  const slides = document.querySelectorAll(slidesSelector);\r\n  const slider = document.querySelector(sliderSelector);\r\n  const nextSlide = document.querySelector(nextArrow);\r\n  const prevSlide = document.querySelector(prevArrow);\r\n  const currentSlide = document.querySelector(current);\r\n  const totalSlide = document.querySelector(total);\r\n  const slidesWrapper = document.querySelector(wrapper);\r\n  const slidesField = document.querySelector(field);\r\n  const { width } = window.getComputedStyle(slidesWrapper);\r\n\r\n  let slideIndex = 1;\r\n  let offset = 0;\r\n\r\n  function getCarouselNumber() {\r\n    if (slides.length < 10) {\r\n      totalSlide.textContent = `0${slides.length}`;\r\n      currentSlide.textContent = `0${slideIndex}`;\r\n    } else {\r\n      totalSlide.textContent = slides.length;\r\n      currentSlide.textContent = slideIndex;\r\n    }\r\n  }\r\n\r\n  getCarouselNumber();\r\n\r\n  slidesField.style.width = `${100 * slides.length}%`;\r\n\r\n  slides.forEach((slide) => {\r\n    const currentItem = slide;\r\n    currentItem.style.width = width;\r\n  });\r\n\r\n  function removeWords(word) {\r\n    return +word.replace(/\\D+/g, '');\r\n  }\r\n\r\n  const indicators = document.createElement('ol');\r\n\r\n  indicators.classList.add('carousel-indicators');\r\n  slider.append(indicators);\r\n\r\n  for (let i = 0; i < slides.length; i += 1) {\r\n    const dot = document.createElement('li');\r\n    dot.setAttribute('data-slide-to', i + 1);\r\n    dot.classList.add('dot');\r\n    indicators.append(dot);\r\n    if (i === 0) {\r\n      dot.classList.add('dot-active');\r\n    }\r\n  }\r\n\r\n  const carouselIndicators = document.querySelector(carouselIndicatorsSelector);\r\n  const dots = carouselIndicators.querySelectorAll(dotsSelector);\r\n\r\n  function currentCarouselDot() {\r\n    dots.forEach((dot) => {\r\n      dot.classList.remove('dot-active');\r\n      if (+dot.getAttribute('data-slide-to') === slideIndex) {\r\n        dot.classList.add('dot-active');\r\n      }\r\n    });\r\n  }\r\n\r\n  nextSlide.addEventListener('click', () => {\r\n    if (offset === removeWords(width) * (slides.length - 1)) {\r\n      offset = 0;\r\n    } else {\r\n      offset += removeWords(width);\r\n    }\r\n\r\n    slidesField.style.transform = `translateX(-${offset}px)`;\r\n    if (slideIndex === slides.length) {\r\n      slideIndex = 1;\r\n    } else {\r\n      slideIndex += 1;\r\n    }\r\n\r\n    getCarouselNumber();\r\n    currentCarouselDot();\r\n  });\r\n\r\n  prevSlide.addEventListener('click', () => {\r\n    if (offset === 0) {\r\n      offset = removeWords(width) * (slides.length - 1);\r\n    } else {\r\n      offset -= removeWords(width);\r\n    }\r\n\r\n    slidesField.style.transform = `translateX(-${offset}px)`;\r\n\r\n    if (slideIndex === 1) {\r\n      slideIndex = slides.length;\r\n    } else {\r\n      slideIndex -= 1;\r\n    }\r\n\r\n    getCarouselNumber();\r\n    currentCarouselDot();\r\n  });\r\n\r\n  carouselIndicators.addEventListener('click', (e) => {\r\n    const { target } = e;\r\n    if (target.classList.contains('dot')) {\r\n      offset = +width.replace(/\\D+/g, '') * (+target.getAttribute('data-slide-to') - 1);\r\n      slidesField.style.transform = `translateX(-${offset}px)`;\r\n      slideIndex = +target.getAttribute('data-slide-to');\r\n      currentCarouselDot();\r\n      getCarouselNumber();\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./slider.js?");

/***/ }),

/***/ "./tabs.js":
/*!*****************!*\
  !*** ./tabs.js ***!
  \*****************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getTabs)\n/* harmony export */ });\nfunction getTabs(tabsSelector, tabHeaderSelector, tabHeaderItemsSelector, activeClass) {\r\n  const tabs = document.querySelectorAll(tabsSelector);\r\n  const tabHeader = document.querySelector(tabHeaderSelector);\r\n  const tabHeaderItems = tabHeader.querySelectorAll(tabHeaderItemsSelector);\r\n\r\n  function hideTabsContent() {\r\n    tabs.forEach((item) => {\r\n      item.classList.add('hideContent');\r\n      item.classList.remove('fade');\r\n      tabHeaderItems.forEach((tab) => {\r\n        tab.classList.remove(activeClass);\r\n      });\r\n    });\r\n  }\r\n\r\n  function showTabContent(i = 0) {\r\n    tabHeaderItems[i].classList.add(activeClass);\r\n    tabs[i].classList.remove('hideContent');\r\n    tabs[i].classList.add('fade');\r\n  }\r\n\r\n  tabHeader.addEventListener('click', (e) => {\r\n    if (e.target && e.target.classList.contains(tabHeaderItemsSelector.slice(1))) {\r\n      tabHeaderItems.forEach((item, i) => {\r\n        if (item === e.target) {\r\n          hideTabsContent();\r\n          showTabContent(i);\r\n        }\r\n      });\r\n    }\r\n  });\r\n\r\n  hideTabsContent();\r\n  showTabContent();\r\n}\r\n\n\n//# sourceURL=webpack:///./tabs.js?");

/***/ }),

/***/ "./thanksModal.js":
/*!************************!*\
  !*** ./thanksModal.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getThanksModal)\n/* harmony export */ });\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ \"./modal.js\");\n/* harmony import */ var _service_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/service.js */ \"./service/service.js\");\n/* eslint-disable import/extensions */\r\n\r\n\r\n\r\nfunction getThanksModal(modalSelector) {\r\n  const forms = document.querySelectorAll('form');\r\n\r\n  const message = {\r\n    loading: '../src/assets/img/form/spinner.svg',\r\n    success: 'Спасибо, мы скоро с вами свяжемся',\r\n    error: 'Что-то пошло не так',\r\n  };\r\n\r\n  function showThanksModal(report) {\r\n    const prevModalDialog = document.querySelector('.modal__dialog');\r\n    prevModalDialog.classList.add('hideContent');\r\n    (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.modalOpened)(modalSelector);\r\n\r\n    const thanksModal = document.createElement('div');\r\n    thanksModal.classList.add('modal__dialog');\r\n    thanksModal.innerHTML = `\r\n            <div class=\"modal__content\">\r\n                <div data-close class=\"modal__close\">&times;</div>\r\n                <div class=\"modal__title\">${report}</div>\r\n            </div>\r\n        `;\r\n\r\n    document.querySelector('.modal').append(thanksModal);\r\n    setTimeout(() => {\r\n      thanksModal.remove();\r\n      prevModalDialog.classList.add('show');\r\n      prevModalDialog.classList.remove('hideContent');\r\n      (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.modalClosing)(modalSelector);\r\n    }, 4000);\r\n  }\r\n\r\n  function bindPostData(form) {\r\n    form.addEventListener('submit', (e) => {\r\n      e.preventDefault();\r\n\r\n      const statusMessage = document.createElement('img');\r\n      statusMessage.src = message.loading;\r\n      statusMessage.classList.add('spinner');\r\n      form.insertAdjacentElement('afterend', statusMessage);\r\n\r\n      const formData = new FormData(form);\r\n\r\n      const json = JSON.stringify(Object.fromEntries(formData.entries()));\r\n      (0,_service_service_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('http://localhost:3000/requests', json)\r\n        .then(() => {\r\n          showThanksModal(message.success);\r\n          statusMessage.remove();\r\n          form.reset();\r\n        }).catch(() => {\r\n          showThanksModal(message.error);\r\n        }).finally(() => {\r\n          form.reset();\r\n        });\r\n    });\r\n  }\r\n\r\n  forms.forEach((item) => {\r\n    bindPostData(item);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./thanksModal.js?");

/***/ }),

/***/ "./timer.js":
/*!******************!*\
  !*** ./timer.js ***!
  \******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getTimer)\n/* harmony export */ });\nfunction getTimer(timerSelector, deadLine) {\r\n  function getTimeRemaining(endtime) {\r\n    const t = Date.parse(endtime) - Date.parse(new Date());\r\n    const days = Math.floor(t / (1000 * 60 * 60 * 24));\r\n    const hours = Math.floor(((t / (1000 * 60 * 60)) % 24));\r\n    const minutes = Math.floor(((t / (1000 * 60)) % 60));\r\n    const seconds = Math.floor((t / 1000) % 60);\r\n\r\n    if (t > 0) {\r\n      return {\r\n        t, days, hours, minutes, seconds,\r\n      };\r\n    }\r\n    return {\r\n      t: 0,\r\n      days: 0,\r\n      hours: 0,\r\n      minutes: 0,\r\n      seconds: 0,\r\n    };\r\n  }\r\n\r\n  function getZero(num) {\r\n    if (num >= 0 && num < 10) {\r\n      return `0${num}`;\r\n    }\r\n    return num;\r\n  }\r\n\r\n  function setClock(selector, endtime) {\r\n    const timer = document.querySelector(selector);\r\n    const days = timer.querySelector('#days');\r\n    const hours = timer.querySelector('#hours');\r\n    const minutes = timer.querySelector('#minutes');\r\n    const seconds = timer.querySelector('#seconds');\r\n    let timeInterval;\r\n\r\n    function updateClock() {\r\n      const t = getTimeRemaining(endtime);\r\n      days.innerHTML = getZero(t.days);\r\n      hours.innerHTML = getZero(t.hours);\r\n      minutes.innerHTML = getZero(t.minutes);\r\n      seconds.innerHTML = getZero(t.seconds);\r\n\r\n      if (t.t <= 0) {\r\n        clearInterval(timeInterval);\r\n      }\r\n    }\r\n    timeInterval = setInterval(updateClock, 1000);\r\n    updateClock();\r\n  }\r\n\r\n  setClock(timerSelector, deadLine);\r\n}\r\n\n\n//# sourceURL=webpack:///./timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;