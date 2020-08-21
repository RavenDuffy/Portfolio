import Link from 'next/link'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'

export default function BackToTop(target) {
  if (process.browser) {
    return (
      <Link href="/projects/[projectid]" as={target.target}>
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
