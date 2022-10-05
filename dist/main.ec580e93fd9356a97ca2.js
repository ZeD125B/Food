(()=>{"use strict";var n={627:(n,r,e)=>{e.d(r,{Z:()=>u});var t=e(933),o=e.n(t),i=e(476),a=e.n(i),s=e(678),c=e.n(s),l=new URL(e(959),e.b),d=a()(o());d.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap&subset=cyrillic-ext);"]);var p=c()(l);d.push([n.id,"* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: Roboto, sans-serif;\r\n}\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n.overflowHidden {\r\n    overflow: hidden;\r\n}\r\n\r\n.btn {\r\n    width: 220px;\r\n    height: 65px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #fff;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    border: 1px solid rgba(0, 0, 0, .2);\r\n    box-shadow: 0 4px 15px rgba(0, 0, 0, .2);\r\n    cursor: pointer;\r\n    transition: .3s all;\r\n    outline: 0;\r\n}\r\n.btn_white {\r\n    background-color: #fff;\r\n}\r\n.btn_dark {\r\n    background-color: #303030;\r\n    color: #fff;\r\n    border: none;\r\n}\r\n.btn_min {\r\n    height: 50px;\r\n}\r\n.btn:hover {\r\n    box-shadow: 0 4px 30px rgba(0, 0, 0, .3);\r\n}\r\n.container {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n}\r\n.divider {\r\n    width: 330px;\r\n    height: 1px;\r\n    margin: 0 auto;\r\n    background-color: rgba(0, 0, 0, .5);\r\n}\r\n.title {\r\n    font-size: 36px;\r\n    font-weight: 400;\r\n}\r\n.header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 150px;\r\n    padding: 0 100px;\r\n}\r\n.header__left-block {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    min-width: 550px;\r\n}\r\n.header__logo {\r\n    max-width: 170px;\r\n}\r\n.header__logo img {\r\n    width: 100%}\r\n.header__links {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.header__link {\r\n    position: relative;\r\n    margin-right: 45px;\r\n    font-weight: 700;\r\n    font-size: 18px;\r\n    color: #303030;\r\n}\r\n.header__link:after {\r\n    content: '';\r\n    position: absolute;\r\n    display: block;\r\n    width: 110%;\r\n    left: -5%;\r\n    bottom: -1px;\r\n    z-index: -1;\r\n    height: 8px;\r\n    background: #54ed39;\r\n}\r\n.header__link:last-child {\r\n    margin-right: 0;\r\n}\r\n.sidepanel {\r\n    position: fixed;\r\n    left: 60px;\r\n    top: 240px;\r\n    height: 400px;\r\n    width: 25px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.sidepanel__text {\r\n    width: 120px;\r\n    height: 120px;\r\n    font-size: 14px;\r\n}\r\n.sidepanel__text span {\r\n    display: flex;\r\n    transform: rotate(-90deg) translateX(-50px);\r\n}\r\n.sidepanel__divider {\r\n    width: 1px;\r\n    height: 165px;\r\n    background-color: #000;\r\n}\r\n.sidepanel__icon {\r\n    width: 24px;\r\n    height: 24px;\r\n}\r\n.sidepanel__icon img {\r\n    width: 100%}\r\n.preview {\r\n    padding: 28px 0 100px 0;\r\n    position: relative;\r\n}\r\n.preview__life {\r\n    font-weight: 700;\r\n    font-size: 20px;\r\n    margin-left: 35px;\r\n    margin-top: 35px;\r\n}\r\n.bgc_blue {\r\n    position: absolute;\r\n    right: 0;\r\n    top: -155px;\r\n    width: 50vw;\r\n    height: 900px;\r\n    background: rgba(146, 242, 255, .15);\r\n    z-index: -1;\r\n}\r\n.tabcontainer {\r\n    display: flex;\r\n    width: 1130px;\r\n    margin: 0 auto;\r\n    box-shadow: 0 4px 30px rgba(0, 0, 0, .25);\r\n}\r\n.tabcontent {\r\n    width: 850px;\r\n    position: relative;\r\n}\r\n.tabcontent img {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n.tabcontent__descr {\r\n    position: absolute;\r\n    top: 300px;\r\n    right: -177px;\r\n    width: 550px;\r\n    height: 359px;\r\n    background: rgba(251, 254, 93, .8);\r\n    padding: 50px;\r\n    font-size: 24px;\r\n    font-weight: 300;\r\n    line-height: 36px;\r\n    color: rgba(0, 0, 0, .7);\r\n}\r\n.tabheader {\r\n    width: 280px;\r\n    padding: 35px 30px;\r\n    background-color: #fff;\r\n}\r\n.tabheader h3 {\r\n    font-weight: 700;\r\n    font-size: 16px;\r\n}\r\n.tabheader__items {\r\n    margin-top: 35px;\r\n    padding-left: 26px;\r\n    border-left: 1px solid #000;\r\n}\r\n.tabheader__item {\r\n    font-weight: 700;\r\n    font-size: 18px;\r\n    font-weight: 300;\r\n    margin-top: 10px;\r\n    color: rgba(0, 0, 0, .6);\r\n    cursor: pointer;\r\n    transition: .3s all;\r\n}\r\n.tabheader__item_active {\r\n    color: #000;\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n}\r\n.offer {\r\n    padding: 70px 0 100px 0;\r\n    position: relative;\r\n}\r\n.offer .container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.offer .bgc_y {\r\n    position: absolute;\r\n    width: 1109px;\r\n    height: 780px;\r\n    background: rgba(243, 255, 222, .45);\r\n    z-index: -1;\r\n    top: 50px;\r\n}\r\n.offer__text {\r\n    width: 580px;\r\n}\r\n.offer__descr {\r\n    font-size: 18px;\r\n    margin-top: 30px;\r\n    font-weight: 300;\r\n    line-height: 24px;\r\n}\r\n.offer__action {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n}\r\n.offer__advantages {\r\n    width: 330px;\r\n    margin-top: 50px;\r\n}\r\n.offer__advantages h2 {\r\n    font-weight: 700;\r\n    font-size: 20px;\r\n    margin-top: 20px;\r\n}\r\n.offer__advantages h2:first-child {\r\n    margin-top: 70px;\r\n}\r\n.offer__advantages-text {\r\n    margin-top: 20px;\r\n    font-size: 18px;\r\n    font-weight: 300;\r\n    line-height: 21px;\r\n}\r\n.offer__slider {\r\n    position: relative;\r\n    width: 650px;\r\n    margin-top: 50px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n}\r\n.offer__slider-counter {\r\n    display: flex;\r\n    width: 180px;\r\n    align-items: center;\r\n    font-size: 24px;\r\n    color: rgba(0, 0, 0, .5);\r\n}\r\n.offer__slider-wrapper {\r\n    width: 100%;\r\n    margin-top: 15px;\r\n    box-shadow: 0 4px 30px rgba(0, 0, 0, .25);\r\n    overflow: hidden;\r\n}\r\n\r\n.offer__slider-inner {\r\n    display: flex;\r\n    transition: 0.5s all;\r\n}\r\n\r\n.offer__slider-prev {\r\n    margin-right: 10px;\r\n    cursor: pointer;\r\n}\r\n.offer__slider-next {\r\n    margin-left: 10px;\r\n    cursor: pointer;\r\n}\r\n.offer__slider #current {\r\n    font-size: 48px;\r\n    font-weight: 700;\r\n    color: #000;\r\n}\r\n.offer__slide {\r\n    width: 100%;\r\n    height: 390px;\r\n}\r\n.offer__slide img {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.carousel-indicators {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 15;\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-right: 15%;\r\n    margin-left: 15%;\r\n    list-style: none;\r\n}\r\n\r\n.dot {\r\n    box-sizing: content-box;\r\n    flex: 0 1 auto;\r\n    width: 30px;\r\n    height: 6px;\r\n    margin-right: 3px;\r\n    margin-left: 3px;\r\n    cursor: pointer;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border-top: 10px solid transparent;\r\n    border-bottom: 10px solid transparent;\r\n    opacity: .5;\r\n    transition: opacity .6s ease;\r\n}\r\n\r\n.dot-active {\r\n    opacity: 1;\r\n}\r\n\r\n.calculating {\r\n    padding: 50px 0;\r\n}\r\n.calculating .title {\r\n    text-align: center;\r\n}\r\n.calculating__field {\r\n    width: 100%;\r\n    margin-top: 50px;\r\n    background: rgba(146, 242, 255, .15);\r\n    padding: 30px 0 40px 0;\r\n}\r\n.calculating__subtitle {\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    margin-top: 30px;\r\n}\r\n.calculating__subtitle:first-child {\r\n    margin-top: 0;\r\n}\r\n.calculating #gender:after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    display: block;\r\n    width: 16px;\r\n    height: 16px;\r\n    background: url("+p+") center center/cover no-repeat;\r\n}\r\n.calculating__choose {\r\n    position: relative;\r\n    display: flex;\r\n    margin-top: 30px;\r\n    justify-content: center;\r\n}\r\n.calculating__choose-item {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 170px;\r\n    height: 50px;\r\n    padding: 0 10px;\r\n    background: #fff;\r\n    box-shadow: 0 4px 15px rgba(0, 0, 0, .2);\r\n    border: none;\r\n    text-align: center;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n    outline: 0;\r\n    transition: .3s all;\r\n}\r\n.calculating__choose-item_active {\r\n    color: #fff;\r\n    background-color: #54ed39;\r\n}\r\n.calculating__choose_medium {\r\n    width: 743px;\r\n    justify-content: space-between;\r\n    margin: 30px auto 0 auto;\r\n}\r\n.calculating__choose_big {\r\n    width: 930px;\r\n    justify-content: space-between;\r\n    margin: 30px auto 0 auto;\r\n}\r\n.calculating__choose_big .calculating__choose-item {\r\n    width: 200px;\r\n}\r\n.calculating__divider {\r\n    width: 490px;\r\n    height: 1px;\r\n    margin: 40px auto;\r\n    background-color: rgba(0, 0, 0, .2);\r\n}\r\n.calculating__total {\r\n    width: 490px;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.calculating__result {\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n}\r\n.calculating__result span {\r\n    font-size: 42px;\r\n}\r\n.menu {\r\n    padding: 40px 0 50px 0;\r\n}\r\n.menu .container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n}\r\n.menu .title {\r\n    text-align: center;\r\n}\r\n.menu__field {\r\n    margin-top: 50px;\r\n    padding: 50px 0;\r\n    width: 100%;\r\n    background: rgba(249, 254, 126, .25);\r\n}\r\n.menu__item {\r\n    width: 320px;\r\n    min-height: 450px;\r\n    background: #fff;\r\n    box-shadow: 0 4px 25px rgba(0, 0, 0, .25);\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n}\r\n.menu__item img {\r\n    width: 100%;\r\n    height: 200px;\r\n    object-fit: cover;\r\n}\r\n.menu__item-subtitle {\r\n    font-weight: 700;\r\n    font-size: 18px;\r\n    padding: 0 20px;\r\n    margin-top: 20px;\r\n}\r\n.menu__item-descr {\r\n    margin-top: 20px;\r\n    padding: 0 20px;\r\n}\r\n.menu__item-divider {\r\n    width: 100%;\r\n    height: 1px;\r\n    background-color: rgba(0, 0, 0, .25);\r\n    margin-top: 40px;\r\n}\r\n.menu__item-price {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 10px 20px;\r\n}\r\n.menu__item-price span {\r\n    font-size: 24px;\r\n    font-weight: 700;\r\n}\r\n.order {\r\n    padding-bottom: 80px;\r\n}\r\n.order .title {\r\n    text-align: center;\r\n}\r\n.order__form {\r\n    margin-top: 70px;\r\n    padding: 0 100px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.order__form img {\r\n    transform: scale(1.5);\r\n}\r\n.order__input {\r\n    width: 280px;\r\n    height: 50px;\r\n    background: #fff;\r\n    box-shadow: 0 4px 15px rgba(0, 0, 0, .2);\r\n    border: none;\r\n    font-size: 18px;\r\n    text-align: center;\r\n    padding: 0 20px;\r\n    outline: 0;\r\n}\r\n.promotion {\r\n    padding: 70px 0 240px 0;\r\n    position: relative;\r\n}\r\n.promotion .container {\r\n    display: flex;\r\n}\r\n.promotion .bgc_y {\r\n    position: absolute;\r\n    width: 50%;\r\n    height: 499px;\r\n    background: rgba(243, 255, 222, .35);\r\n    z-index: -1;\r\n    top: -50px;\r\n    left: 0;\r\n}\r\n.promotion__text {\r\n    width: 50%}\r\n.promotion__descr {\r\n    margin-top: 40px;\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n    font-weight: 300;\r\n}\r\n.promotion__descr span {\r\n    font-weight: 700;\r\n    font-size: 26px;\r\n}\r\n.promotion__timer {\r\n    width: 50%}\r\n.promotion__timer .title {\r\n    text-align: right;\r\n}\r\n.promotion__timer .timer {\r\n    margin-top: 60px;\r\n    padding-left: 95px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.promotion__timer .timer__block {\r\n    width: 102px;\r\n    height: 120px;\r\n    background: #fff;\r\n    box-shadow: 0 4px 20px rgba(0, 0, 0, .25);\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n    text-align: center;\r\n}\r\n.promotion__timer .timer__block span {\r\n    display: block;\r\n    margin-top: 20px;\r\n    margin-bottom: 5px;\r\n    font-size: 56px;\r\n    font-weight: 700;\r\n}\r\n.footer {\r\n    min-height: 180px;\r\n    background-color: #303030;\r\n    padding: 45px 0 50px 0;\r\n    color: #fff;\r\n}\r\n.footer .container {\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-end;\r\n}\r\n.footer .subtitle {\r\n    font-size: 20px;\r\n}\r\n.footer .link {\r\n    display: block;\r\n    margin-top: 15px;\r\n    font-size: 16px;\r\n    color: #fff;\r\n}\r\n.footer .call {\r\n    text-align: right;\r\n}\r\n\r\n.modal {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1050;\r\n    display: none;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    background-color: rgba(0, 0, 0, .5);\r\n}\r\n\r\n.show {\r\n    display: block;\r\n    \r\n}\r\n\r\n.hide{\r\n    display: none;\r\n}\r\n\r\n.modal__dialog {\r\n    max-width: 500px;\r\n    margin: 40px auto;\r\n}\r\n\r\n.modal__content {\r\n    position: relative;\r\n    width: 100%;\r\n    padding: 40px;\r\n    background-color: #fff;\r\n    border: 1px solid rgba(0, 0, 0, .2);\r\n    border-radius: 4px;\r\n    max-height: 80vh;\r\n    overflow-y: auto;\r\n}\r\n\r\n.modal__close {\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 14px;\r\n    font-size: 30px;\r\n    color: #000;\r\n    opacity: .5;\r\n    font-weight: 700;\r\n    border: none;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal__title {\r\n    text-align: center;\r\n    font-size: 22px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.modal__input {\r\n    display: block;\r\n    margin: 20px auto 20px auto;\r\n    width: 280px;\r\n    height: 50px;\r\n    background: #fff;\r\n    box-shadow: 0 4px 15px rgba(0, 0, 0, .2);\r\n    border: none;\r\n    font-size: 18px;\r\n    text-align: center;\r\n    padding: 0 20px;\r\n    outline: 0;\r\n}\r\n\r\n.modal .btn {\r\n    display: block;\r\n    width: 280px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.hideContent {\r\n    display:  none;\r\n    transition: 1s;\r\n}\r\n\r\n.spinner {\r\n    position: relative;\r\n    top: 20px;\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 40px;\r\n    height: 40px;\r\n    z-index: 999;\r\n}\r\n\r\n.fade {\r\n    animation-name: fade;\r\n    animation-duration: 1s;\r\n}\r\n\r\n@keyframes fade {\r\n    from {\r\n        opacity: 0.1;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}",""]);const u=d},476:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},678:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},933:n=>{n.exports=function(n){return n[1]}},892:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=t.base?c[0]+t.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=e(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var g=o(f,t);t.byIndex=s,r.splice(s,0,{identifier:p,updater:g,references:1})}a.push(p)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);r[s].references--}for(var c=t(n,o),l=0;l<i.length;l++){var d=e(i[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}i=c}}},311:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},60:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},192:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},760:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},865:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},959:(n,r,e)=>{n.exports=e.p+"11bc466dd815695d241d.svg"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{function n(n,r){const e=document.querySelector(n);e.classList.add("show"),e.classList.remove("hide"),e.classList.add("wasOpen"),document.body.classList.add("overflowHidden"),r&&clearInterval(r)}function r(n){const r=document.querySelector(n);r.classList.add("closeItem"),r.classList.remove("show"),document.body.classList.remove("overflowHidden")}function t(e){const t=document.querySelectorAll("form");function o(t){const o=document.querySelector(".modal__dialog");o.classList.add("hideContent"),n(e);const i=document.createElement("div");i.classList.add("modal__dialog"),i.innerHTML=`\n            <div class="modal__content">\n                <div data-close class="modal__close">&times;</div>\n                <div class="modal__title">${t}</div>\n            </div>\n        `,document.querySelector(".modal").append(i),setTimeout((()=>{i.remove(),o.classList.add("show"),o.classList.remove("hideContent"),r(e)}),4e3)}t.forEach((n=>{var r;(r=n).addEventListener("submit",(n=>{n.preventDefault();const e=document.createElement("img");e.src="../src/assets/img/form/spinner.svg",e.classList.add("spinner"),r.insertAdjacentElement("afterend",e);const t=new FormData(r);(async(n,r)=>{const e=await fetch(n,{method:"POST",headers:{"Content-type":"application/json"},body:r});return await e.json()})("http://localhost:3000/requests",JSON.stringify(Object.fromEntries(t.entries()))).then((()=>{o("Спасибо, мы скоро с вами свяжемся"),e.remove(),r.reset()})).catch((()=>{o("Что-то пошло не так"),e.remove()})).finally((()=>{r.reset()}))}))}))}var o=e(892),i=e.n(o),a=e(760),s=e.n(a),c=e(311),l=e.n(c),d=e(192),p=e.n(d),u=e(60),f=e.n(u),g=e(865),h=e.n(g),m=e(627),x={};x.styleTagTransform=h(),x.setAttributes=p(),x.insert=l().bind(null,"head"),x.domAPI=s(),x.insertStyleElement=f(),i()(m.Z,x),m.Z&&m.Z.locals&&m.Z.locals,window.addEventListener("DOMContentLoaded",(()=>{!function(n,r,e,t){const o=document.querySelectorAll(".tabcontent"),i=document.querySelector(".tabheader__items"),a=i.querySelectorAll(e);function s(){o.forEach((n=>{n.classList.add("hideContent"),n.classList.remove("fade"),a.forEach((n=>{n.classList.remove(t)}))}))}function c(n=0){a[n].classList.add(t),o[n].classList.remove("hideContent"),o[n].classList.add("fade")}i.addEventListener("click",(n=>{n.target&&n.target.classList.contains(e.slice(1))&&a.forEach(((r,e)=>{r===n.target&&(s(),c(e))}))})),s(),c()}(0,0,".tabheader__item","tabheader__item_active"),function(n,r){function e(n){return n>=0&&n<10?`0${n}`:n}!function(n,r){const t=document.querySelector(n),o=t.querySelector("#days"),i=t.querySelector("#hours"),a=t.querySelector("#minutes"),s=t.querySelector("#seconds");let c;function l(){const n=function(n){const r=Date.parse(n)-Date.parse(new Date),e=Math.floor(r/864e5),t=Math.floor(r/36e5%24),o=Math.floor(r/6e4%60),i=Math.floor(r/1e3%60);return r>0?{t:r,days:e,hours:t,minutes:o,seconds:i}:{t:0,days:0,hours:0,minutes:0,seconds:0}}(r);o.innerHTML=e(n.days),i.innerHTML=e(n.hours),a.innerHTML=e(n.minutes),s.innerHTML=e(n.seconds),n.t<=0&&clearInterval(c)}c=setInterval(l,1e3),l()}(n,r)}(".timer","2022-10-24T20:47"),function(e,t,o){const i=document.querySelector(t),a=document.querySelectorAll("[data-modal]"),s=setTimeout((()=>n(t)),6e3);a.forEach((r=>{r.addEventListener("click",(()=>n(t,s)))})),i.addEventListener("click",(n=>{n.target!==i&&""!==n.target.getAttribute("data-close")||r(t)})),document.addEventListener("keydown",(n=>{"Escape"===n.code&&r(t)})),window.addEventListener("scroll",(function r(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.offsetHeight-1&&(n(t,s),clearInterval(s),window.removeEventListener("scroll",r))}))}(0,".modal"),t(".modal"),function(){class n{constructor(n,r,e,t,o,i,...a){this.src=n,this.alt=r,this.subtitle=e,this.descr=t,this.price=o,this.parent=document.querySelector(i),this.classes=a}render(){const n=document.createElement("div");!1===this.classes.includes("menu__item")||0===this.classes.length?(this.classes="menu__item",n.classList.add(this.classes)):this.classes.forEach((r=>n.classList.add(r))),n.innerHTML=`\n        <img src="${this.src}" alt="${this.alt}">\n          <h3 class="menu__item-subtitle">"${this.subtitle}"</h3>\n          <div class="menu__item-descr">${this.descr}</div>\n          <div class="menu__item-divider"></div>\n          <div class="menu__item-price">\n          <div class="menu__item-cost">Цена:</div>\n          <div class="menu__item-total"><span>${this.price}</span> руб/день</div>\n        </div>\n            `,this.parent.append(n)}}axios.get("http://localhost:3000/menu").then((r=>{r.data.forEach((({img:r,altImg:e,title:t,descr:o,price:i})=>{new n(r,e,t,o,i,".menu .container").render()}))}))}(),function({slidesSelector:n,sliderSelector:r,nextArrow:e,prevArrow:t,current:o,total:i,wrapper:a,field:s,carouselIndicatorsSelector:c,dotsSelector:l}){const d=document.querySelectorAll(n),p=document.querySelector(r),u=document.querySelector(e),f=document.querySelector(t),g=document.querySelector(o),h=document.querySelector(i),m=document.querySelector(a),x=document.querySelector(s),{width:_}=window.getComputedStyle(m);let b=1,v=0;function w(){d.length<10?(h.textContent=`0${d.length}`,g.textContent=`0${b}`):(h.textContent=d.length,g.textContent=b)}function y(n){return+n.replace(/\D+/g,"")}w(),x.style.width=100*d.length+"%",d.forEach((n=>{n.style.width=_}));const S=document.createElement("ol");S.classList.add("carousel-indicators"),p.append(S);for(let n=0;n<d.length;n+=1){const r=document.createElement("li");r.setAttribute("data-slide-to",n+1),r.classList.add("dot"),S.append(r),0===n&&r.classList.add("dot-active")}const k=document.querySelector(c),L=k.querySelectorAll(l);function E(){L.forEach((n=>{n.classList.remove("dot-active"),+n.getAttribute("data-slide-to")===b&&n.classList.add("dot-active")}))}u.addEventListener("click",(()=>{v===y(_)*(d.length-1)?v=0:v+=y(_),x.style.transform=`translateX(-${v}px)`,b===d.length?b=1:b+=1,w(),E()})),f.addEventListener("click",(()=>{0===v?v=y(_)*(d.length-1):v-=y(_),x.style.transform=`translateX(-${v}px)`,1===b?b=d.length:b-=1,w(),E()})),k.addEventListener("click",(n=>{const{target:r}=n;r.classList.contains("dot")&&(v=+_.replace(/\D+/g,"")*(+r.getAttribute("data-slide-to")-1),x.style.transform=`translateX(-${v}px)`,b=+r.getAttribute("data-slide-to"),E(),w())}))}({slidesSelector:".offer__slide",sliderSelector:".offer__slider",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",current:"#current",total:"#total",wrapper:".offer__slider-wrapper",field:".offer__slider-inner",carouselIndicatorsSelector:".carousel-indicators",dotsSelector:".dot"}),function(){const n=document.querySelector(".calculating__result span");let r,e,t,o,i;function a(){n.textContent=r&&e&&t&&o&&i?"female"===r?Math.round(447.6+9.2*t+3.1*e-4.3*o*i):Math.round(88.36+13.4*t+4.8*e-5.7*o*i):"______"}function s(n,e){const t=document.querySelectorAll(n);t.forEach((n=>{n.addEventListener("click",(n=>{n.target.getAttribute("data-ratio")?(i=+n.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+n.target.getAttribute("data-ratio"))):(r=n.target.getAttribute("id"),localStorage.setItem("sex",n.target.getAttribute("id"))),t.forEach((n=>{n.classList.remove(e)})),n.target.classList.add(e),a()}))}))}function c(n,r){document.querySelectorAll(n).forEach((n=>{n.classList.remove(r),localStorage.getItem("sex")===n.getAttribute("id")&&n.classList.add(r),localStorage.getItem("ratio")===n.getAttribute("data-ratio")&&n.classList.add(r)}))}function l(n){const r=document.querySelector(n);r.addEventListener("input",(()=>{switch(r.value.match(/\D/g)?r.style.border="2px solid red":r.style.border="none",r.getAttribute("id")){case"height":e=+r.value;break;case"age":o=+r.value;break;case"weight":t=+r.value}a()}))}localStorage.getItem("sex")?r=localStorage.getItem("sex"):(localStorage.setItem("sex","female"),r="female"),localStorage.getItem("ratio")?i=localStorage.getItem("ratio"):(localStorage.setItem("ratio",1.375),i=1.375),a(),c("#gender div","calculating__choose-item_active"),c(".calculating__choose_big div","calculating__choose-item_active"),l("#age"),l("#weight"),l("#height"),s("#gender div","calculating__choose-item_active"),s(".calculating__choose_big div","calculating__choose-item_active")}()}))})()})();