const movies = [
    { title: "Avengers: Endgame", poster: "images/movie1.jpg", showtimes: ["10:00 AM", "1:00 PM", "4:00 PM"] },
    { title: "Spider-Man: No Way Home", poster: "images/movie2.jpg", showtimes: ["11:00 AM", "2:00 PM", "5:00 PM"] },
    { title: "The Batman", poster: "images/movie3.jpg", showtimes: ["12:00 PM", "3:00 PM", "6:00 PM"] },
    { title: "Doctor Strange", poster: "images/movie4.jpg", showtimes: ["10:30 AM", "1:30 PM", "4:30 PM"] }
];

// Carousel
const carousel = document.getElementById('carousel');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let index = 0;
const totalItems = carousel.children.length;

function showSlide(i) {
    index = (i + totalItems) % totalItems; // wrap around
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Next / Prev buttons
next.addEventListener('click', () => showSlide(index + 1));
prev.addEventListener('click', () => showSlide(index - 1));

// Auto-slide every 5 seconds
setInterval(() => showSlide(index + 1), 5000);
