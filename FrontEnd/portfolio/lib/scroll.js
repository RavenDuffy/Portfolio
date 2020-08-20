import utilStyles from '../styles/utils.module.css'

function onScroll() {
  const nav = document.querySelector("[class*='navContainer']")
  const backToTop = document.querySelector("[class*='backToTop']")
  const head = document.querySelector("[class*='largeCenterHeader']")

  nav.className = (head.getBoundingClientRect().bottom <= 0)
    ? `${utilStyles.navContainer} ${utilStyles.noSelect} ${utilStyles.sticky}`
    : `${utilStyles.navContainer} ${utilStyles.noSelect}`

  backToTop.className = (head.getBoundingClientRect().bottom <= 0)
    ? `${utilStyles.backToTop} ${utilStyles.noSelect} ${utilStyles.show}`
    : `${utilStyles.backToTop} ${utilStyles.noSelect}`
}

window.addEventListener("scroll", onScroll);

function onScrollStyler() {
  const viewportHeight = window.innerHeight;
  const elements = [
    document.getElementById('hero'),
    document.getElementById('about'),
    document.getElementById('showcase'),
    document.getElementById('contact')
  ];

  let currentSection = elements[0];
  for (let elem of elements) {
    if (elem.getBoundingClientRect().top <= viewportHeight / 2)
      currentSection = elem
  }
  document.body.style.background = currentSection.dataset.background
}

window.addEventListener("scroll", onScrollStyler);

export default function Scroll() {
  return null;
}