import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function NavArrow({target}) {
  return (
    <div className={utilStyles.flexCenterContainer}>
      <Link href={`#${target}`}>
        <img
          src="images/down.svg"
          className={`${utilStyles.downArrow} ${utilStyles.noSelect}`}
          alt={"down-arrow"}
        />
      </Link>
    </div>
  )
}
