import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import styles from './home/layout.module.css'

export default function NavArrow({target}) {
  return (
    <div className={styles.flexCenterContainer}>
      <Link href={`#${target}`}>
        <img
          src="images/down.svg"
          className={`${styles.downArrow} ${utilStyles.noSelect}`}
          alt={"down-arrow"}
        />
      </Link>
    </div>
  )
}
