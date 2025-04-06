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

headerObserver.observe(header);

/// Typewriter effect
const typedText = document.querySelector('.featured-text');
const cursor = document.querySelector('.cursor');

const wordsArray = ['web development', 'digital design', 'online marketing'];

const TypewriterBackground = [
  { text: wordsArray[0], color: '#ee4035' },
  { text: wordsArray[1], color: '#f37736' },
  { text: wordsArray[2], color: '#e1b12c' },
];

let wordsArrayIndex = 0;
let charIndex = 0;

const erase = () => {
  if (charIndex > 0) {
    cursor.classList.remove('blink');
    typedText.textContent = wordsArray[wordsArrayIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 80);
  } else {
    cursor.classList.add('blink');
    wordsArrayIndex++;
    if (wordsArrayIndex > wordsArray.length - 1) {
      wordsArrayIndex = 0;
    }
    setTimeout(type, 1000);
  }
};

const type = () => {
  const currentBackground = TypewriterBackground[wordsArrayIndex].color;
  typedText.style.backgroundColor = currentBackground;
  if (charIndex <= wordsArray[wordsArrayIndex].length - 1) {
    cursor.classList.remove('blink');
    typedText.textContent += wordsArray[wordsArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 120);
  } else {
    cursor.classList.add('blink');
    setTimeout(erase, 1000);
  }
};

waitForMs(100);

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document.addEventListener('DOMContentLoaded', () => {
  type();
});

/// FAQ accordion
const questions = document.querySelectorAll('.faq__question');

const questioniD = questions.length;

questions.forEach((question, id) => {
  question.addEventListener('click', (e) => {
    e.preventDefault();
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove('active'); // Remove 'active' class to reset arrow rotation
        item.nextElementSibling.style.maxHeight = null; // Collapse the answer
      }
    });
    question.classList.toggle('active');

    const answer = question.nextElementSibling;
    answer.style.maxHeight
      ? (answer.style.maxHeight = null)
      : (answer.style.maxHeight = answer.scrollHeight + 'px');
  });
});

///////////////////////
// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');
const background = document.querySelector('header-container')

const loadImg = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach((img) => imgObserver.observe(img));

///////////////////////
// Reveal section

const sections = document.querySelectorAll('.section');

const revealSection = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section__hidden');
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
  rootMargin: '0px',
});

sections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add('section__hidden');
});
