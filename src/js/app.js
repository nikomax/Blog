import $ from 'jquery';
import 'slick-carousel';
import {TimelineMax} from 'gsap';
$(document).ready(function() {
  var tl = new TimelineMax();
  tl.to('.header__logo, .nav__item',2,{rotation: 360,scale: 0.1})
    .to('.header__logo, .nav__item',3,{scale:1,onComplete: function() {
    }});
});

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
