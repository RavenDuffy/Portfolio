import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function NavArrow({target, invert, idle}) {
  let classNames = (invert)
    ? `${utilStyles.downArrow} ${utilStyles.noSelect} ${utilStyles.invert}`
    : `${utilStyles.downArrow} ${utilStyles.noSelect}`
  classNames = (idle) ? `${classNames} + ${utilStyles.idle}` : classNames
  return (
      <Link href={`${target}`}>
        <img
          src="/images/down.svg"
          className={classNames}
          alt={"down-arrow"}
        />
      </Link>
  )
}
