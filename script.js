const product01 = [
  {
    id: 0,
    image: "./images/unicorn.webp",
    title: "Unicorn",
    price: 3000,
  },
  {
    id: 1,
    image: "./images/elephant.jpg",
    title: "Elephant",
    price: 5000,
  },
  {
    id: 2,
    image: "./images/panda.jpg",
    title: "Panda",
    price: 2500,
  },
  {
    id: 3,
    image: "./images/unicorn2.jpg",
    title: "Unicorn",
    price: 7000,
  },
  {
    id: 4,
    image: "./images/unicorn3.jpg",
    title: "Unicorn",
    price: 3500,
  },
  {
    id: 5,
    image: "./images/panda1.webp",
    title: "Panda-small",
    price: 1500,
  },
  {
    id: 6,
    image: "./images/car1.webp",
    title: "Car-red",
    price: 1000,
  },
  {
    id: 7,
    image: "./images/elephant1.jpg",
    title: "Elephant-Black",
    price: 6000,
  },
  {
    id: 8,
    image: "./images/car2.jpg",
    title: "Car-black",
    price: 1500,
  },
  {
    id: 9,
    image: "./images/car3.jpg",
    title: "Car-white",
    price: 2000,
  },
  {
    id: 10,
    image: "./images/mickey1.jpg",
    title: "Mickey-Large",
    price: 9000,
  },
  {
    id: 11,
    image: "./images/mickey2.jfif",
    title: "Mickey-Couple",
    price: 2000,
  },
  {
    id: 12,
    image: "./images/unicorn4.jpg",
    title: "unicorn-family",
    price: 9000,
  },
  {
    id: 13,
    image: "./images/panda2.webp",
    title: "Panda-large",
    price: 10000,
  },
  {
    id: 14,
    image: "./images/panda1.webp",
    title: "Panda-small",
    price: 1500,
  },
  {
    id: 15,
    image: "./images/elephant3.jpg",
    title: "Car-red",
    price: 1000,
  },
  {
    id: 16,
    image: "./images/mickey3.webp",
    title: "Mickey-small",
    price: 750,
  },
  {
    id: 17,
    image: "./images/unicorn.webp",
    title: "Unicorn",
    price: 3000,
  },
];

const categories = [
  ...new Set(
    product01.map((item) => {
      return item;
    })
  ),
];

const displayItem = (items) => {
  document.getElementById("root").innerHTML = items
    .map((item) => {
      var { image, title, price } = item;
      return `<div class='box'>
            <img class='images01' src=${image}></img>
            <h3>${title}</h3>
              <div class="stars">
                               <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <div class="quantity">
                <span> quantity : </span>
                <input type="number" min="1" max="100" value="1">
              </div>
                <h2 class="price">Rs. ${price}.00</h2>
                <a href="#" class="btn">add to cart</a>
        </div>`;
    })
    .join("");
};

document.getElementById("searchBar").addEventListener("keyup", (e) => {
  const searchData = e.target.value.toLowerCase();
  const filteredData = categories.filter((item) => {
    return item.title.toLowerCase().includes(searchData);
  });
  displayItem(filteredData);
});

displayItem(categories);

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let header = document.querySelector(".header-2");
let scrollTop = document.querySelector(".scroll-top");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 250) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

  if (window.scrollY > 250) {
    scrollTop.style.display = "initial";
  } else {
    scrollTop.style.display = "none";
  }
};

var swiper = new Swiper(".home-slider", {
  pagination: { el: ".swiper-pagination", clickable: true },
  autoplay: { delay: 3000, disableOnInteraction: false },
  loop: true,
});
