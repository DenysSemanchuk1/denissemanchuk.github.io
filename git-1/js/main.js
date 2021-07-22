$(document).ready(function () {
  $(".banner__slider").slick({
    dots: true,
    responsive: [
      {
        breakpoint: 969,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".tab").on("click", function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass("tab--active");
    $($(this).closest(".tabs-wrapper").siblings().find("div")).removeClass(
      "tabs-content--active"
    );

    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tabs-content--active");

    $('.product-slider').slick('setPosition')
  });

  $(".product-item__favorite").on("click", function () {
    $(this).toggleClass("product-item__favorite--active");
  });
  $(".product-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button class="products-slider__btn products-slider__btn-prev"> <img src="images/arrow-black-left.svg" alt=""> </button>',
    nextArrow:
      '<button class="products-slider__btn products-slider__btn-next"> <img src="images/arrow-black-right.svg" alt=""> </button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 870,
        settings: {
          arrows: false,
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 590,
        settings: {
          arrows: false,
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  });
  $(".filter-style").styler();

  $(".filter__item-drop, .filter-extra").on("click", function () {
    $(this).toggleClass("filter__item-drop--active");
    $(this).next().slideToggle("200");
  });
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 100000,
    max: 500000,
    from: 150000,
    to: 275000,
  });
  $(".catalog__filter-btngrid").on("click", function () {
    $(this).addClass("catalog__filter-button--active");
    $(".catalog__filter-btnline").removeClass("catalog__filter-button--active");
    $(".product-item__wrapper").removeClass("product-item__wrapper--line");
  });
  $(".catalog__filter-btnline").on("click", function () {
    $(this).addClass("catalog__filter-button--active");
    $(".catalog__filter-btngrid").removeClass("catalog__filter-button--active");
    $(".product-item__wrapper").addClass("product-item__wrapper--line");
  });

  $(".menu__btn").on("click", function () {
    $(".menu-mobile__list").toggleClass("menu-mobile__list--active");
  });

  $(".footer__top-title").on("click", function () {
    $(this).next().slideToggle(200);
    $(this).toggleClass("footer__topdrop--active");
  });

  $(".aside__btn").on("click", function () {
    $(this).next().slideToggle(200);
  });

  $(".rate-yo").rateYo({
    ratedFill: "#1C62CD",
    spacing: "7px",
    normalFill: "#c4c4c4",
    starWidth: "23px",
  });
});
