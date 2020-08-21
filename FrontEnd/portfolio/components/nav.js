// IMPORTANT: THIS NAV IS FOR USE OUTSIDE OF THE INDEX PAGE
import Link from 'next/link'
import BackToTop from './backtotop.js'
import utilStyles from '../styles/utils.module.css'

export default function Nav() {
  let target
  if (process.browser) target = document.location.pathname

  return (
    <div className={`${utilStyles.navContainer} ${utilStyles.noSelect} ${utilStyles.sticky} ${utilStyles.smallNav}`}>
      <Link href="/"><h1>← Home</h1></Link>
      <BackToTop target={target} />
    </div>
  )
}
