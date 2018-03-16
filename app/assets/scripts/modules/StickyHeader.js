import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor() {
    this.$header = $('.site-header');
    this.$headerLogo = $('.site-header__logo');
    this.mediumWidth = 800;
    this.$headerLinks = $('.primary-nav a');
    this.$pageSections = $('.page-section');
    this.stickyHeader();
    this.smoothScroll();
    this.activeWaypoints();
  }

  activeWaypoints() {

    var that = this;

    this.$pageSections.each(function() {
      var currentSection = this;

      var waypoint = new Waypoint({
        element: currentSection,
        handler: function (direction) {
          if (direction == 'down') {
            var currentLink = currentSection.getAttribute('data-matching-link');
            that.$headerLinks.removeClass('is-inview');
            $(currentLink).addClass('is-inview');
          }

        },
        offset: "40%"
      });

      var waypoint = new Waypoint({
        element: currentSection,
        handler: function (direction) {
          if (direction == 'up') {
            var currentLink = currentSection.getAttribute('data-matching-link');
            that.$headerLinks.removeClass('is-inview');
            $(currentLink).addClass('is-inview');

            $(window).scroll(function() {
              if ( $(window).scrollTop() <= 0 ) {
                that.$headerLinks.removeClass('is-inview');
              }
            });

          }
        },
        offset: "-40%"
      })
    });
    
  }

  stickyHeader() {
    var that = this;
    if ($(window).outerWidth() >= this.mediumWidth) {
      $(window).scroll(function (e) {
        if ($(window).scrollTop() > 0) {
          that.$header.addClass('site-header--dark-bg');
          that.$headerLogo.addClass('site-header__logo--shrinked')
        } else {
          that.$header.removeClass('site-header--dark-bg');
          that.$headerLogo.removeClass('site-header__logo--shrinked')
        }
      });
    }
  }

  smoothScroll() {
   this.$headerLinks.on('click', function (e) {

      // prevent default anchor click behavior
      e.preventDefault();

      // store hash
      var hash = this.hash;

      // animate
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function () {

      // when done, add hash to url (default click behaviour)
      window.location.hash = hash;
      });

    });
  }

}

export default StickyHeader;