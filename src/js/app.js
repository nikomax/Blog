import $ from 'jquery';
import 'slick-carousel';
import {TimelineMax} from 'gsap';
$(document).ready(function() {
  var tl = new TimelineMax();
  tl.staggerFrom('.header__logo, .nav__item, .aside__image', 2, {scale:0.5, opacity:0, delay:0.1, ease:Elastic.easeOut, force3D:true}, 0.2);

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


