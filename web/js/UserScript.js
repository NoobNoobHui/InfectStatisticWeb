// ==UserScript==

(function () {
    'use strict';
    var color = '#ececec';
    var style;
    function createStyle() {
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = 'body {background-color: ' + color + ' !important;}';
    }
    function changeBackgroundColor() {
        if(!style.parentNode) document.head.appendChild(style);
    }
    createStyle();
    changeBackgroundColor();
    document.head.addEventListener("DOMNodeRemoved",changeBackgroundColor);
}) ()