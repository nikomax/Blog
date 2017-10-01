import $ from 'jquery';
import 'slick-carousel';
import { TimelineMax, Elastic, TweenLite } from 'gsap';

$(document).ready(function() {
  var tl = new TimelineMax();
  tl.staggerFrom('.header__logo, .nav__item, .bg, .page-heading, .aside, .aside__image, .section, .image, .content, .pagination__item', 2, {scale:0.5, opacity:0, delay:0.1, ease:Elastic.easeOut, force3D:true}, 0.1);

  $('.header__logo').hover(
    function() {
      TweenLite.to($(this), 1.2, {rotationY:360, ease:Back.easeOut});
    },
    function() {
      TweenLite.to($(this), 1.2, {rotationY:0, ease:Back.easeOut});
    }
  );

  $('.responsive').slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false
        }
      }
    ]
  });
});


