import "./styles/style.scss";
import header from "./components/header";
// font awesome 
import '@fortawesome/fontawesome-free/js/all.js';
// slick slider 
require("slick-carousel");
require("jquery");
import $ from 'jquery';
import joke from './index';
import photo from './assets/screen.png';
const image = document.getElementById("image");


// header(container);
image.src = photo;
header();

$(".slider").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

