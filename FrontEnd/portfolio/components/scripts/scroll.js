import styles from '../home/layout.module.css'
import utilStyles from '../../styles/utils.module.css'

function onScroll() {
  const nav = document.querySelector("[class*='navContainer']")
  const head = document.querySelector("[class*='largeCenterHeader']")

  const originalState = `${styles.navContainer} ${utilStyles.noSelect}`

  nav.className = (head.getBoundingClientRect().bottom <= 0)
    ? `${originalState} ${styles.sticky}`
    : `${originalState}`
}

window.addEventListener("scroll", onScroll);

export default function Scroll() {
  return null;
}
