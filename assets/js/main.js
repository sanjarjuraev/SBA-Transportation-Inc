/** @format */

(function ($) {
  ('use strict');

  //Update Header Style and Scroll to Top
  function headerStyle() {
    if ($('.main-header').length) {
      let windowpos = $(window).scrollTop();
      let siteHeader = $('.header-style-1');
      let scrollLink = $('.scroll-to-top');
      let sticky_header = $('.main-header .sticky-header');
      if (windowpos > 100) {
        sticky_header.addClass('fixed-header animated slideInDown');
        scrollLink.fadeIn(300);
      } else {
        sticky_header.removeClass('fixed-header animated slideInDown');
        scrollLink.fadeOut(300);
      }
      if (windowpos > 1) {
        siteHeader.addClass('fixed-header');
      } else {
        siteHeader.removeClass('fixed-header');
      }
    }
  }

  headerStyle();

  // if ($('.main-header li.dropdown ul').length) {
  //   $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>');
  // }

  if ($('.mobile-menu').length) {
    let mobileMenuContent = $('.main-header .main-menu .navigation').html();
    $('.mobile-menu .navigation').append(mobileMenuContent);
    $('.sticky-header .navigation').append(mobileMenuContent);
    $('.mobile-menu .close-btn').on('click', function () {
      $('body').removeClass('mobile-menu-visible');
    });
    $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
      $(this).prev('ul').slideToggle(500);
      $(this).toggleClass('active');
    });
    $('.mobile-nav-toggler').on('click', function () {
      $('body').addClass('mobile-menu-visible');
    });
    $('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on(
      'click',
      function () {
        $('body').removeClass('mobile-menu-visible');
      }
    );
  }

  //Header Search
  if ($('.search-btn').length) {
    $('.search-btn')
      .click(function () {
        $('body').addClass('search-active');
      })
      .end()
      .find('.close-search')
      .click(function () {
        $('body').removeClass('search-active');
      });
  }

  // Elements Animation
  if ($('.wow').length) {
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      mobile: true,
      live: true,
    });
    wow.init();
  }

  // Progress Bar
  if ($('.progress-line').length) {
    $('.progress-line').appear(
      function () {
        let el = $(this);
        let percent = el.data('width');
        el.css('width', percent + '%');
      },
      {
        accY: 0,
      }
    );
  }

  //Progress Counter + Text Count
  $('.count-box').appear(
    function () {
      let $t = $(this),
        n = $t.find('.count-text').attr('data-stop'),
        r = parseInt($t.find('.count-text').attr('data-speed'), 10);

      if (!$t.hasClass('counted')) {
        $t.addClass('counted');
        $({
          countNum: $t.find('.count-text').text(),
        }).animate(
          {
            countNum: n,
          },
          {
            duration: r,
            easing: 'linear',
            step: function () {
              $t.find('.count-text').text(Math.floor(this.countNum));
            },
            complete: function () {
              $t.find('.count-text').text(this.countNum);
            },
          }
        );
      }
    },
    {
      accY: 0,
    }
  );

  // Odometer Active
  if ($('.odometer-wrapper').length) {
    $('.odometer-wrapper').appear(
      function () {
        let count = $(this).attr('data-count'); // Changed var to let
        let odometer = $(this).closest('.odometer-wrapper').find('.odometer'); // Changed var to let

        setTimeout(function () {
          odometer.html(count);
        }, 500);
      },
      {
        accY: 0,
      }
    );
  }

  // Select2 Active
  $('.custom-select').select2({
    minimumResultsForSearch: 4,
  });

  // Range Slider Active
  if ($('.distance-range-slider').length) {
    $('.distance-range-slider').slider({
      range: true,
      min: 0,
      max: 20000,
      values: [0, 1500],
      slide: function (event, ui) {
        $('input.range-amount').val(ui.values[0] + ' - ' + ui.values[1]);
      },
    });
    $('input.range-amount').val(
      $('.distance-range-slider').slider('values', 0) +
        ' - ' +
        $('.distance-range-slider').slider('values', 1)
    );
  }

  // widget categories menu
  $(document).ready(function () {
    $('.sidebar-service-list ul li').on('mouseenter', function () {
      $(this).addClass('current');
      $('.sidebar-service-list ul li').not(this).removeClass('current');
    });
  });

  // Team Share
  $('.team-share').on('click', function () {
    $(this).toggleClass('active');
    $('.team-share').not(this).removeClass('active');
  });

  $(
    '.pricing-block-one, .project-details__tags li, .sidebar__tags-list a'
  ).hover(function () {
    $(this).addClass('current').siblings().removeClass('current');
  });

  /*===========================================
	=         Magic Cursor         =
    =============================================*/
  function magicCursor() {
    // Add the custom cursor element to the body
    $('body').append('<div class="magic-cursor"></div>');

    var cursor = $('.magic-cursor');

    // Update cursor position on mouse move
    $(window).on('mousemove', function (e) {
      cursor.css({
        transform:
          'translate(' + (e.clientX - 15) + 'px,' + (e.clientY - 15) + 'px)',
        visibility: 'inherit',
      });
    });

    // Handle hover states for links and buttons
    $('a, button, .theme-button, .scroll-top').on('mouseenter', function () {
      cursor.addClass('cursor-grow');
    });

    $('a, button, .theme-button, .scroll-top').on('mouseleave', function () {
      cursor.removeClass('cursor-grow');
    });
  }

  // Video Play
  const radio_buttons = document.querySelector('#video_check');
  const video_start = document.querySelector('.achivement-section');

  if (radio_buttons) {
    radio_buttons.addEventListener('click', function () {
      let video = document.querySelector('.achivement-section .video');
      let videoClose = document.querySelector('.achivement-section .video');
      if (radio_buttons.checked) {
        document.querySelector('.video-wrapper').style.zIndex = '0';
        videoClose.style.display = 'block';
        video_start.classList.add('start-video');
      } else {
        document.querySelector('.video-wrapper').style.zIndex = '0';
        video.style.display = 'block';
        video_start.classList.remove('start-video');
      }
    });
  }

  //Accordion Box
  if ($('.accordion-box').length) {
    $('.accordion-box').on('click', '.acc-btn', function () {
      var outerBox = $(this).parents('.accordion-box');
      var target = $(this).parents('.accordion');

      if ($(this).hasClass('active') !== true) {
        $(outerBox).find('.accordion .acc-btn').removeClass('active ');
      }

      if ($(this).next('.acc-content').is(':visible')) {
        return false;
      } else {
        $(this).addClass('active');
        $(outerBox).children('.accordion').removeClass('active-block');
        $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
        target.addClass('active-block');
        $(this).next('.acc-content').slideDown(300);
      }
    });
  }

  //LightBox / Fancybox
  if ($('.lightbox-image').length) {
    $('.lightbox-image').fancybox({
      openEffect: 'fade',
      closeEffect: 'fade',
      helpers: {
        media: {},
      },
    });
  }

  /*===========================================
	=         Scroll To Top         =
    =============================================*/
  if ($('.scroll-top')) {
    var scrollTopbtn = document.querySelector('.scroll-top');
    var progressPath = document.querySelector('.scroll-top path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 750;
    jQuery(window).on('scroll', function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(scrollTopbtn).addClass('show');
      } else {
        jQuery(scrollTopbtn).removeClass('show');
      }
    });
    jQuery(scrollTopbtn).on('click', function (event) {
      event.preventDefault();
      jQuery('html, body').animate(
        {
          scrollTop: 0,
        },
        1
      );
      return false;
    });
  }

  // widget categories menu
  $(document).ready(function () {
    $('.widget-categories-menu ul, .sidebar-tag-item ul').on(
      'mouseenter',
      'li',
      function () {
        $(this).addClass('active').siblings().removeClass('active');
      }
    );
  });

  // circle text animation
  function createTextAnimation(textElement, circleBoxElement) {
    textElement.style.cssText = 'animation: text-rotate 10s linear infinite;';

    const textRotateAnimation = textElement.animate(
      [
        {
          transform: 'rotate(0deg)',
        },
        {
          transform: 'rotate(360deg)',
        },
      ],
      {
        duration: 10000,
        iterations: Infinity,
        easing: 'linear',
      }
    );

    circleBoxElement.addEventListener('mouseenter', () =>
      textRotateAnimation.pause()
    );
    circleBoxElement.addEventListener('mouseleave', () =>
      textRotateAnimation.play()
    );
  }

  // Apply text animation to elements with the class "circle-box"
  const circleBoxes = document.querySelectorAll('.circle-box');
  circleBoxes.forEach((circleBox) => {
    const text = circleBox.querySelector('.text-inner');
    createTextAnimation(text, circleBox);
  });

  const chooseUsShapes = document.querySelectorAll(
    '.section-shape > div > img'
  );
  chooseUsShapes.forEach((chooseUsShape) => {
    createTextAnimation(chooseUsShape, chooseUsShape.parentElement);
  });

  /* =======================
    Form Validation
    ======================= */
  $(function () {
    $('#contact_form').validate({
      rules: {
        name: 'required',
        email: {
          required: true,
          email: true,
        },
        message: 'required',
      },
      messages: {
        name: 'Please enter your name',
        email: {
          required: 'Please enter your email address',
          email: 'Please enter a valid email address', // Modify this message as needed
        },
        message: 'Please enter a message',
      },
      // Other options if needed
    });
  });

  /*===========================================
	=         Ajax Contact Form         =
    =============================================*/
  function ajaxForm() {
    const handleFormSubmission = (form, formIndex) => {
      console.log(form, formIndex);

      form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        const data = new FormData(form);
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText =
          submitButton.querySelector('.btn-title').textContent;
        const loadingText = submitButton.dataset.loadingText;
        submitButton.querySelector('.btn-title').textContent = loadingText;
        submitButton.disabled = true;

        sendAjaxRequest(
          'POST',
          form.action,
          data,
          (response) => {
            handleSuccess(response, form, submitButton, originalButtonText);
          },
          (statusCode, responseText) => {
            handleError(
              statusCode,
              responseText,
              form,
              submitButton,
              originalButtonText
            );
          }
        );
      });
    };

    const handleSuccess = (
      response,
      form,
      submitButton,
      originalButtonText
    ) => {
      form.reset();
      let message = 'Success!';
      if (form.classList.contains('contact-form2')) {
        message = 'Submit successfully!';
      } else if (form.classList.contains('contact-form1')) {
        message = 'Contact submitted!';
      } else if (form.classList.contains('subscribe')) {
        message = 'Subscribed!';
      }
      showPopup('success', message);
      submitButton.querySelector('.btn-title').textContent = originalButtonText;
      submitButton.disabled = false;
    };

    const handleError = (
      statusCode,
      responseText,
      form,
      submitButton,
      originalButtonText
    ) => {
      let message = 'Oops! There was a problem.';
      if (form.classList.contains('contact-form2')) {
        message = 'Failed. Please try again.';
      }
      showPopup('error', message);
      submitButton.querySelector('.btn-title').textContent = originalButtonText;
      submitButton.disabled = false;
    };
    const sendAjaxRequest = (
      method,
      url,
      data,
      successCallback,
      errorCallback
    ) => {
      const jsonData = JSON.stringify(Object.fromEntries(data.entries()));
      console.log(jsonData, 'jsonData');

      fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        mode: 'no-cors',
        body: jsonData,
        // mode: 'cors',
      })
        .then(() => {
          successCallback();
        })
        .catch((error) => {
          console.log(error, 'error');

          errorCallback(500, error.message);
        });
    };

    // const sendAjaxRequest = (
    //   method,
    //   url,
    //   data,
    //   successCallback,
    //   errorCallback
    // ) => {
    //   const xhr = new XMLHttpRequest()
    //   xhr.open(method, url, { mode: 'no-cors' })
    //   xhr.setRequestHeader('Content-Type', 'application/json')
    //   xhr.onreadystatechange = () => {
    //     console.log(xhr, 'xhr')

    //     if (xhr.readyState !== XMLHttpRequest.DONE) return
    //     if (xhr.status === 200) {
    //       successCallback(xhr.response)
    //     } else {
    //       errorCallback(xhr.status, xhr.responseText)
    //     }
    //   }
    //   xhr.send(data)
    // }

    const showPopup = (status, message) => {
      const popup = document.createElement('div');
      popup.className = `popup-status ${status}`;
      popup.innerHTML = `<i class="far fa-${
        status === 'success' ? 'check-circle' : 'times-circle'
      }"></i> ${message}`;
      document.body.appendChild(popup);
      setTimeout(() => popup.remove(), 3000); // Remove the popup after 3 seconds
    };

    const forms = document.querySelectorAll('.contact-form1, .subscribe');

    forms.forEach((form, index) => handleFormSubmission(form, index));
  }

  /*===========================================
	=         Marquee Active         =
    =============================================*/
  if ($('.marquee_mode').length) {
    $('.marquee_mode').marquee({
      speed: 50,
      gap: 0,
      delayBeforeStart: 0,
      direction: 'left',
      duplicated: true,
      pauseOnHover: true,
      startVisible: true,
    });
  }

  //*=============All Owl Carousel========*//
  // Service Carousel
  if ($('.service-carousel').length) {
    $('.service-carousel').owlCarousel({
      autoplay: true,
      loop: true,
      nav: false,
      dots: true,
      dotsClass: 'owl-dots enable',
      margin: 30,
      dotsEach: 1,
      smartSpeed: 1500,
      startPosition: 1,
      navText: [
        '<span class="far fa-arrow-left"></span>',
        '<span class="far fa-arrow-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        767: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });
  }

  // Projects Carousel
  if ($('.projects-carousel').length) {
    $('.projects-carousel').owlCarousel({
      autoplay: false,
      loop: true,
      nav: true,
      dots: true,
      margin: 30,
      dotsEach: 2,
      smartSpeed: 1200,
      startPosition: 2,
      navText: [
        '<span class="far fa-arrow-left"></span>',
        '<span class="far fa-arrow-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        767: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });
  }

  // Projects Carousel Two
  if ($('.projects-carousel-two').length) {
    $('.projects-carousel-two').owlCarousel({
      autoplay: false,
      loop: true,
      nav: false,
      dots: true,
      margin: 30,
      dotsEach: 2,
      smartSpeed: 1200,
      startPosition: 2,
      navText: [
        '<span class="far fa-arrow-left"></span>',
        '<span class="far fa-arrow-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        767: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });
  }

  // Projects Carousel Two
  if ($('.projects-carousel2').length) {
    $('.projects-carousel2').owlCarousel({
      autoplay: false,
      loop: true,
      nav: true,
      navContainer: '.custom-nav',
      dots: false,
      margin: 30,
      dotsEach: 2,
      smartSpeed: 1200,
      startPosition: 2,
      navText: [
        '<span class="far fa-arrow-left"></span>',
        '<span class="far fa-arrow-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        767: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });
  }

  // Testimonial Carousel
  if ($('.testimonial-carousel').length) {
    $('.testimonial-carousel').owlCarousel({
      autoplay: true,
      autoplayTimeout: 7000,
      loop: true,
      nav: false,
      dots: true,
      dotsClass: 'owl-dots enable',
      margin: 30,
      dotsEach: 1,
      center: true,
      smartSpeed: 1500,
      startPosition: 1,
      navText: [
        '<span class="far fa-arrow-left"></span>',
        '<span class="far fa-arrow-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
          center: false,
        },
        767: {
          items: 2,
          center: false,
        },
        992: {
          items: 2,
          center: false,
        },
        1199: {
          items: 3,
          center: true,
        },
      },
    });
  }

  // Testimonial Carousel Two
  if ($('.testimonial-carousel2').length) {
    $('.testimonial-carousel2').owlCarousel({
      autoplay: true,
      autoplayTimeout: 7000,
      loop: true,
      nav: false,
      dots: true,
      dotsClass: 'owl-dots enable',
      margin: 30,
      dotsEach: 1,
      smartSpeed: 1500,
      startPosition: 1,
      navText: [
        '<span class="far fa-arrow-left"></span>',
        '<span class="far fa-arrow-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        767: {
          items: 2,
        },
        992: {
          items: 2,
          center: false,
        },
        1200: {
          items: 3,
          center: true,
        },
      },
    });
  }

  // Blog Carousel
  if ($('.blog-carousel').length) {
    $('.blog-carousel').owlCarousel({
      autoplay: false,
      loop: true,
      nav: false,
      dots: true,
      dotsClass: 'owl-dots enable',
      margin: 30,
      dotsEach: 1,
      smartSpeed: 1500,
      startPosition: 1,
      navText: [
        '<span class="far fa-arrow-left"></span>',
        '<span class="far fa-arrow-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        767: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });
  }

  // Brands Carousel
  if ($('.brands-carousel').length) {
    $('.brands-carousel').owlCarousel({
      autoplay: true,
      autoplayTimeout: 7000,
      loop: true,
      nav: false,
      dots: false,
      margin: 30,
      dotsEach: 1,
      smartSpeed: 1500,
      startPosition: 1,
      navText: [
        '<span class="far fa-arrow-left"></span>',
        '<span class="far fa-arrow-right"></span>',
      ],
      responsive: {
        0: {
          items: 2,
        },
        767: {
          items: 3,
        },
        992: {
          items: 5,
        },
        1200: {
          items: 5,
        },
      },
    });
  }

  /* ==========================================================================
     When document is Load and Scrollig, do
     ========================================================================== */

  $(window).on('load', function () {
    magicCursor();
    ajaxForm();
    preLoader();
  });

  $(window).on('scroll', function () {
    headerStyle();
  });

  /* ==========================================================================
     When document is loading, do
     ========================================================================== */

  /*------------- preloader JS --------------*/
  function preLoader() {
    let percentage = 0;
    let LoadingCounter = setInterval(function () {
      if (percentage <= 100) {
        // Update the percentage display
        $('.loading-counter').text(percentage + '%');

        $('.top-bar, .down-bar').css('width', (100 - percentage) / 2 + '%');

        $('.progress-line').css('transform', 'scale(' + percentage / 100 + ')');

        percentage++;
      } else {
        $('.loading-screen').fadeOut(500);
        setTimeout(() => {
          $('.loading-screen').remove();
        }, 500);

        clearInterval(LoadingCounter);
      }
    }, 10);

    $('.preloader-close').on('click', function () {
      $('.loading-screen').fadeOut(500);
      setTimeout(() => {
        $('.loading-screen').remove();
      }, 500);

      clearInterval(LoadingCounter);
    });
  }

  /*----------------- End preloader JS -----------------  */
})(window.jQuery);
