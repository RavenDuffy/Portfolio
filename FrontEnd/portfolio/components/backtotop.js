import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function BackToTop() {
  return (
    <Link href="/">
      <img
        src="images/down.svg"
        className={`${utilStyles.backToTop} ${utilStyles.noSelect}`}
        alt={"backtotop"}
      />
    </Link>
  )
}
