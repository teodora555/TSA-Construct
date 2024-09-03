const carduri = document.querySelector('.carduri');
const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentCardIndex = 0;

carduri.style.transform = 'translateY(0)';
cards.forEach((card, index) => {
  card.style.transform = `translateY(${index * 100}%)`;
});

prevBtn.addEventListener('click', () => {
  currentCardIndex--;
  if (currentCardIndex < 0) {
    currentCardIndex = cards.length - 1;
  }
  carduri.style.transform = `translateY(${currentCardIndex * -100}%)`;
});

nextBtn.addEventListener('click', () => {
  currentCardIndex++;
  if (currentCardIndex >= cards.length) {
    currentCardIndex = 0;
  }
  carduri.style.transform = `translateY(${currentCardIndex * -100}%)`;
});


