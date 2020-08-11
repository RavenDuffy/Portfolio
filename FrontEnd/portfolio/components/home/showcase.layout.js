import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'
import styles from './layout.module.css'

export default function ShowcaseLayout() {
  return (
    <div className={styles.section} id="showcase">
      <div className={styles.flexCenterContainer}>
        <Link href="#contact">
          <img
            src="images/down.svg"
            className={`${styles.downArrow} ${utilStyles.noSelect}`}
            alt={"down-arrow"}
          />
        </Link>
      </div>
    </div>
  )
}
