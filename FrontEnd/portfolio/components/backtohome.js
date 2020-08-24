// IMPORTANT: THIS NAV IS FOR USE OUTSIDE OF THE INDEX PAGE
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function BackToHome() {
  return (
    <Link href="/#showcase">
      <div className={`${utilStyles.noSelect} ${utilStyles.backToHome}`}>
        <img
          src="/images/closeArticle.svg"
          alt="closeArticle"
        />
      </div>
    </Link>
  )
}
