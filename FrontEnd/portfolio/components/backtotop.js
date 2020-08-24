import Link from 'next/link'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'

export default function BackToTop({target, visible}) {
  const onIndex = (target == "/") ? "/" : "/projects/[projectid]";

  const classNames = (visible)
    ? `${utilStyles.backToTop} ${utilStyles.noSelect} ${utilStyles.show}`
    : `${utilStyles.backToTop} ${utilStyles.noSelect}`

  return (

    <Link href={onIndex} as={target}>
      <img
        src="/images/down.svg"
        className={classNames}
        alt={"backtotop"}
      />
    </Link>
  )
}
