'use strict';

/// Make navbar fixed after scrolling down the header
const header = document.getElementsByTagName('header')[0];
const nav = document.getElementsByTagName('nav')[0];
const navHeight = nav.getBoundingClientRect().height;
const headerHeight = header.getBoundingClientRect().height;

console.log(header);

const stickyNav = (entries) => {
  entries.forEach((entry, observer) => {
    if (entry.target === header) {
      !entry.isIntersecting
        ? nav.classList.add('sticky')
        : nav.classList.remove('sticky');
    }
  });
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.7,
  rootMargin: `-${navHeight}px`,
});

// const containerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });

headerObserver.observe(header);
// containerObserver.observe(header);

/// Typewriter effect
const typedText = document.querySelector('.featured-text');
const cursor = document.querySelector('.cursor');

const wordsArray = ['development', 'design', 'marketing'];

const carouselText = [
  { text: 'Apple', color: 'red' },
  { text: 'Orange', color: 'orange' },
  { text: 'Lemon', color: 'yellow' },
];

async function type() {
  charIndex = 0;
  for (words in wordsArray) {
    console.log(words);
    if (charIndex <= words.length - 1) {
      typedText.textContent += words.charAt(charIndex);
      charIndex++;
    } else {
      cursor.classList.add('blink');
      setTimeout(erase, 1000);
    }
  }
}

waitForMs(100);

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document.addEventListener('DOMContentLoaded', () => {
  type();
});
