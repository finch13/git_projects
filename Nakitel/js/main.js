$(function() {
    function init() {
      $('[data-behaviour="toggle-menu-icon"]').on('click', toggleMenuIcon);
    };
    
    function toggleMenuIcon() {
      $(this).toggleClass('menu-icon--open');
      $('[data-element="toggle-nav"]').toggleClass('nav--active');
    };
    
    /* function toggleSubMenu() {
      $(this).toggleClass('nav__link--plus nav__link--minus');
      $('[data-behaviour="toggle-sub-menu"]').slideToggle('nav__sub-list--active');
    }; */
    
    init()
  });