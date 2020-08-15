import utilStyles from '../../styles/utils.module.css'

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

export default function Scroll() {
  return null;
}
