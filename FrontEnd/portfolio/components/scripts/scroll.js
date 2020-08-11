import styles from '../home/layout.module.css'
import utilStyles from '../../styles/utils.module.css'

function onScroll() {
  const header = document.querySelector("header")
  const navContainer = header.children[1];
  const originalState = `${styles.navContainer} ${utilStyles.noSelect}`

  navContainer.className = (window.scrollY >= 430)
    ? `${originalState} ${styles.sticky}`
    : `${originalState}`
}

window.addEventListener("scroll", onScroll);

export default function Scroll() {
  return null;
}
