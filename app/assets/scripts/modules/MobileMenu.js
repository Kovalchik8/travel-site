import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.$siteHeader = $('.site-header');
    this.$btnToggleMenu = $('.site-header__btn-toggle');
    this.$menuContent = $('.site-header__menu-content');
    this.events(); 
  }

  // events
  events() {
    this.$btnToggleMenu.on('click', this.toggleNavMenu.bind(this));
  }

  // methods
  toggleNavMenu() {
    this.$menuContent.toggleClass('site-header__menu-content--visible');
    this.$siteHeader.toggleClass('site-header--is-expended');
    this.$btnToggleMenu.toggleClass('site-header__btn-toggle--x');
  }

}

export default MobileMenu;  