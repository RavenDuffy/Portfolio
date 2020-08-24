// IMPORTANT: THIS NAV IS FOR USE OUTSIDE OF THE INDEX PAGE
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function Nav() {
  let target
  if (process.browser) target = document.location.pathname

  return (
    <div className={`${utilStyles.noSelect}`}>
      <Link href="/"><img src="/images/closeArticle.svg" alt="closeArticle"/></Link>
    </div>
  )
}
