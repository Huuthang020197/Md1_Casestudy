var elements = document.querySelectorAll(".popular-content");

var optionsArray = [
  {
    autoplay: {
      delay: 2500,
      disableOnInteration: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // khi màn hình 320 thì hiện 2 ảnh và khoảng cách là 10px

      320: {
        slidesPerView: 2,
        spacebetween: 10,
      },
      510: {
        slidesPerView: 2,
        spacebetween: 10,
      },
      758: {
        slidesPerView: 3,
        spacebetween: 15,
      },
      900: {
        slidesPerView: 4,
        spacebetween: 20,
      },
    },
  },
];

for (var i = 0; i < elements.length; i++) {
  var swiper = new Swiper(elements[i], optionsArray[i]);
}

const videoModule = (function () {
  let video = document.querySelector(".video-container");
  let videotrailer = document.querySelector(".video-trailer");
  let playbutton = document.querySelector(".fa-circle-play");
  let playmovie = document.querySelector(".watch-movie");
  let playtrailer = document.querySelector(".watch-trailer");
  let mytrailer = document.querySelector("#trailer");
  let myvideo = document.querySelector("#video");
  let closebtn = document.querySelector(".close-video");
  let closetrailer = document.querySelector(".fa-xmark");

  function addClickEvent() {
    playbutton.onclick = function () {
      video.classList.add("show-video");
      myvideo.play();
    }
    playmovie.onclick = function () {
      video.classList.add("show-video");
      myvideo.play();
    }
    closebtn.onclick = function () {
      video.classList.remove("show-video");
      myvideo.pause();
    }
    playtrailer.onclick = function () {
      videotrailer.classList.add("show-trailer");
      mytrailer.play();
    }
    closetrailer.onclick = function () {
      videotrailer.classList.remove("show-trailer");
      mytrailer.pause();
    }

  }
  window.addEventListener("DOMContentLoaded", addClickEvent);

})();

/////

class Moviee {
  constructor(id, photo, name, linkMovie) {
    this.id = id;
    this.photo = photo;
    this.name = name;
    this.linkMovie = linkMovie;
  }
}
let movies = [
  new Moviee(1, "./play-page/avengers_2/avengers-end.jpg", "Avengers 3: Hồi Kết", "avengers_2.html"),
  new Moviee(2, "./img/avengers.jpg", "Avengers : cuộc chiến vô cực", "play.html"),
  new Moviee(3, "./play-page/transformer/transformer.webp", "Transformer 5: Chiến Binh Cuối Cùng", "transformer.html"),
  new Moviee(4, "./play-page/black-adam/black-dam-img.webp", "Black Adam", "blackAdam.html"),
  new Moviee(5, "./play-page/deadpool/img-deadpool.jpeg", "Deadpool", "deadpool.html"),
  new Moviee(6, "./play-page/MoonKnight/img-monnKnight.jpeg", "Hiệp Sĩ Mặt Trăng", "moonKnight.html"),
  new Moviee(7, "./img/venom.jpeg", "Venom", "venom.html"),
  new Moviee(8, "./play-page/docter/docter.webp", "DOCTOR STRANGE 2", "doctor.html"),
]
function waterss() {
  let list = document.querySelector(".movies-content");
  list.innerHTML = "";
  for (let i = 0; i < movies.length; i++) {
    list.innerHTML += `
      <div class="movie-box">
        <button class="remove" onclick="remove(${movies[i].id})"><i class="fa-regular fa-trash-can"></i></button>
        <img src="${movies[i].photo} " alt="" class="movie-box-img">
        <div class="box-text">
          <h2 class="movie-title">${movies[i].name} </h2>
          <span class="movie-type">Acdion</span>
          <a href="${movies[i].linkMovie}" class="watch-btn play-btn">
              <i class="fa-solid fa-play"></i>
          </a>
        </div>
      </div>`
  };
}
waterss()
function remove(id) {
  let confirm = window.confirm('Are you sure to remove this vendor?');
  if (confirm == true) {
    movies = movies.filter(function (movie) {
      return movie.id != id;
      // nếu khác id sẽ ko bị xoá
    })
    waterss();

  }
}

function addRemove() {
  let icons = document.querySelectorAll(".fa-regular");
  icons.forEach(function (icon) { icon.style.display = 'block' });
}


let icon = document.querySelector(".fa-heart");
icon.addEventListener('click', function () {
  let icons = document.querySelectorAll(".fa-regular");
  icons.forEach(function (icon) { icon.style.display = 'block' });
});

