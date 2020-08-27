import utilStyles from '../styles/utils.module.css'

function onScroll() {
  if (window.location.pathname == "/") { pinNav(); backColour() }
}

window.addEventListener("scroll", onScroll);

function pinNav() {
  const nav = document.querySelector("[class*='navContainer']")
  const backToTop = document.querySelector("[class*='backToTop']")
  const head = document.querySelector("[class*='largeCenterHeader']")

  nav.className = (head.getBoundingClientRect().bottom <= 0)
    ? `${utilStyles.navContainer} ${utilStyles.noSelect} ${utilStyles.sticky}`
    : `${utilStyles.navContainer} ${utilStyles.noSelect}`

  backToTop.className = (head.getBoundingClientRect().bottom <= 0)
    ? `${utilStyles.backToTop} ${utilStyles.noSelect} ${utilStyles.showOnNav}`
    : `${utilStyles.backToTop} ${utilStyles.noSelect}`
}

function backColour() {
  const viewportHeight = window.innerHeight;
  const elements = [].slice.call(document.querySelectorAll("[data-background]"))

  let currentSection = elements[0];
  for (let elem of elements) {
    if (elem.getBoundingClientRect().top <= viewportHeight / 2)
      currentSection = elem
  }
  document.body.style.background = currentSection.dataset.background
}

export default function Scroll() {
  return null;
}
