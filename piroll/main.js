"use strict";

(function() {
    var wrapper = document.getElementById('right__sideBar');
    var buttons = wrapper.querySelectorAll('li');
    var pages = wrapper.querySelectorAll('.tab-panel');
    var buttonList = wrapper.querySelector('#buttonList');

    buttons.forEach(function(e, i) {
        var currentPage = pages[i];
        e.addEventListener('click', function() {
            wrapper.querySelector('.show').classList.remove('show');
            currentPage.classList.add('show');
            buttonList.querySelector('.activeTitle').classList.remove('activeTitle');
            this.classList.add('activeTitle');
        });
    });
} ());

