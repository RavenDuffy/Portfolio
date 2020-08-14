import styles from '../home/layout.module.css'
import utilStyles from '../../styles/utils.module.css'

function onScroll() {
  const nav = document.querySelector("[class*='navContainer']")
  const originalState = `${styles.navContainer} ${utilStyles.noSelect}`

  nav.className = (window.scrollY >= 450)
    ? `${originalState} ${styles.sticky}`
    : `${originalState}`
}

window.addEventListener("scroll", onScroll);

export default function Scroll() {
  return null;
}
