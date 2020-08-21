import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function BackToTop(target) {
  if (process.browser) {
    console.log(target.target)
    return (
      <Link href={target.target}>
        <img
          src="/images/down.svg"
          className={`${utilStyles.backToTop} ${utilStyles.noSelect}`}
          alt={"backtotop"}
        />
      </Link>
    )
  } else return (
    <img
      src="/images/down.svg"
      className={`${utilStyles.backToTop} ${utilStyles.noSelect}`}
      alt={"backtotop"}
    />
  );
}
