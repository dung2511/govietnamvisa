jQuery(document).ready(function ($) {
  function checkTime(i) {
    if (i < 10) i = "0" + i;
    return i;
  }
  let show_en = () => {
    $(".wrap-english").each(function () {
      $(this).on("click", function () {
        $(this).parent(".__english").toggleClass("open");
      });
    });
  };
  show_en();

  var check_scroll_menu = $("html,body");
  if (check_scroll_menu.length) {
    $(window).scroll(function (event) {
      event.preventDefault();
      if ($("html,body").scrollTop() > 0) {
        $(".__header").addClass("is-dir-down");
      } else {
        $(".__header").removeClass("is-dir-down");
      }
    });
  }

  $(".menu-vnvisa > li").each(function () {
    if ($(this).children("ul").length > 0) {
      $(this)
        .children("a")
        .append(`<span class="icon-option-arrow-down menu-arrow"></span>`);
    }
  });

  if ($(window).width() <= 768) {
    $(".arrow-hide-menu,.bar-menu-mobile,.menu--mb").removeClass("d-none");
    get_header_top = $(".__header-top .__right").html();
    $(".wrap-login").append(get_header_top);
    show_en();

    get_check_status = $(".check-status").html();
    $(".check-status").append(get_check_status);

    $(".__main-menu-vnvisa").css("height", $(window).height());

    $(".menu-toggle > ul").slideUp();
    $(".menu-toggle > a").on("click", function () {
      $(this).next().slideToggle();
      $(this).toggleClass("reverse-arrow");
    });

    $(".hamburger_nav").on("click", function () {
      $(".__main-menu-vnvisa").addClass("show-menu");
    });

    $(".arrow-hide-menu").on("click", function () {
      $(".__main-menu-vnvisa").removeClass("show-menu");
    });

    let get_search_popup = $(".js-list-nationa").get(0);
    $(".__home-vnvisa").append(get_search_popup);
    $("body").on("click", function (e) {
      if (e.target.className == "js-search") {
        $(".list-nationa").css("transform", "translateY(0%)");
        $(".list-nationa").css("display", "block");
      } else {
        $(".list-nationa").css("transform", "translateY(100%)");
        $(".list-nationa").css("display", "none");
      }
    });

    // Xá»­ lĂ½ footer
    $(".footer-dropdown > li").each(function (index, element) {
      $(this).children("ul").slideUp();
      $(this)
        .append('<span class="icon-option-arrow-down"></span>')
        .addClass("ft-mn-drd");
      $(this).click(function (e) {
        if (e.target.className == "icon-option-arrow-down") {
          $(this).children("ul").slideToggle();
          $(this).toggleClass("is-arrow");
        }
      });
    });
  }

  let onClickSearch = () => {
    $(".js-search").click(function () {
      $(this).parents(".wrap-search").addClass("open");
    });
    $("body").click(function (event) {
      if (event.target.nodeName == "INPUT") {
        $(".wrap-search").addClass("open");
      } else {
        $(".wrap-search").removeClass("open");
      }
    });
    $(".js-search").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $(".js-list-nationa li").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
    let data_link;
    let get_value_search;
    $(".js-list-nationa li").each(function () {
      $(this).click(function () {
        get_value_search = $(this).text();
        $(".js-search").val(get_value_search);
        data_link = $(this).attr("data-value");
        $(".btn-requirement").attr("href", data_link);
      });
    });
  };
  onClickSearch();

  if ($(".view-more").length > 0) {
    $(".view-more").click(function (event) {
      var check_l = $(".card.faq_hidden.d-none");
      for (var _i = 0; _i < 5; _i++) {
        check_l.eq(_i).removeClass("d-none");
      }
      if ($(".card.faq_hidden.d-none").length === 0) {
        $(".view-more").addClass("d-none");
      }
    });
  }
  if ($(".view-more-clients").length > 0) {
    $(".view-more-clients").click(function (event) {
      var check_l = $(".client_hidden.d-none");
      for (var _i = 0; _i < 5; _i++) {
        check_l.eq(_i).removeClass("d-none");
      }
      if ($(".client_hidden.d-none").length === 0) {
        $(".view-more-clients").addClass("d-none");
      }
    });
  }

  $(".visa-info").owlCarousel({
    dots: false,
    responsive: {
      0: {
        items: 2,
        loop: true,
        nav: true,
        // margin: 64,
      },
      600: {
        items: 2,
      },
      1000: {
        loop: false,
        margin: 96,
        nav: false,
        mouseDrag: false,
        items: 4,
      },
    },
  });
  $(".owl-apply").owlCarousel({
    dots: false,
    responsive: {
      0: {
        items: 1,
        loop: true,
        nav: false,
      },
      600: {
        items: 3,
      },
      1000: {
        loop: false,
        margin: 80,
        nav: false,
        mouseDrag: false,
        items: 5,
      },
    },
  });

  $(".owl-visa-service").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: true,
        dots: false,
        stagePadding: 50,
        margin: 30,
      },
      600: {
        items: 3,
      },
      1000: {
        margin: 30,
        items: 4,
      },
    },
  });

  $(".owl-visa-related-post").owlCarousel({
    // loop: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: true,
        dots: false,
        stagePadding: 50,
      },
      600: {
        items: 3,
      },
      1000: {
        margin: 30,
        items: 4,
      },
    },
  });

  $(".owl-partners").owlCarousel({
    items: 3,
    loop:false,
    dost: false,
    margin: 16,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
    },
  });

  $("p").each(function (index, value) {
    if (
      !value.firstChild ||
      (value.firstChild.nodeType === 3 &&
        value.firstChild.nodeValue.trim() === "")
    ) {
      $(this).css("margin-bottom", "12px");
    }
  });

  $(".wrap-ip-search").each(function () {
    var __this = $(this);
    $(this)
      .children(".js-t-search")
      .on("click", function () {
        __this.addClass("open");
      });
  });
  $(".__list-req-emb li").addClass("is_open");
  if ($(".__list-req-emb li").hasClass("is_open")) {
    $("body").click(function (event) {
      if (event.target.nodeName == "INPUT") {
        $(".wrap-ip-search").addClass("open");
      } else {
        $(".wrap-ip-search").removeClass("open");
      }
    });
  }
  $(".sear-requirement").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".__list-req-emb li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  let data_link;
  let get_value_search;
  $(".__list-req-emb li").each(function () {
    $(this).click(function () {
      get_value_search = $(this).text();
      $(".js-t-search").val(get_value_search);
      data_link = $(this).attr("data-link");
      $(".btn-shor-check").attr("href", data_link);
    });
  });
  $(".content-block").each(function () {
    if (!$(this).find("table").hasClass("table-bordered")) {
      $(this).find("table").addClass("table-bordered");
    }
  });

  var acc = document.getElementsByClassName("accordion-sidebar");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("button-active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
});

(function ($) {
  "use strict";

  function custom_wechat() {
    var $body = $("body");
    var $side = $(".wd-close-side");
    var $wechat = $(".content-wechat");
    var $clone = $(".content-wechat .site-wechat-close");

    $body.on("click", ".icon-wechat", function (e) {
      e.preventDefault();
      $side.addClass("wd-close-side-opened");
      $wechat.addClass("wd-opened");
    });

    $side.on("click", function (e) {
      e.preventDefault();
      $side.removeClass("wd-close-side-opened");
      $wechat.removeClass("wd-opened");
    });

    $clone.on("click", function (e) {
      e.preventDefault();
      $side.removeClass("wd-close-side-opened");
      $wechat.removeClass("wd-opened");
    });
  }

  $(document).ready(function () {
    custom_wechat();
  });
})(jQuery);
