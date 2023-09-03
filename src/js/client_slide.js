$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});

// function clientSlider(){
//     var slide1=document.querySelector(".main-slide").querySelector(".slide-1");
//     var slide2=document.querySelector(".main-slide").querySelector(".slide-2");
//     slide1.style.transform==="translateX(0%)"
//     // console.log (slide1);
//     // console.log (slide2);

//     function slideDisplay(){
//         if (slide2.classList.contains("trans_left")||(slide2.classList.contains("trans_right"))){

//             //for slide 2

//             //exit animation

//                 // slide1.classList.remove("hidden");

//             // slide1.style.transform="translateX(-100%)"
//             // slide2.style.transform="translateX(0%)"
//         } else {
//             //for slide 1

//             //exit animation

//                 // slide2.classList.remove("hidden");
//             // slide2.classList.remove("trans_left");

//             // slide2.style.transform="translateX(-100%)"
//             // slide1.style.transform="translateX(0%)"
//         }
//     }
//     setInterval(slideDisplay, 3600);

// }

// clientSlider();
